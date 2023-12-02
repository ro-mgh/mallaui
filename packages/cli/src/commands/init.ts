import chalk from 'chalk';
import { Command } from 'commander';
import { execa } from 'execa';
import { existsSync, promises as fs } from 'fs';
import ora from 'ora';
import path from 'path';
import * as z from 'zod';

import { getPackageManager } from '@/src/utils/get-package-manager';
import { handleError } from '@/src/utils/handle-error';
import { logger } from '@/src/utils/logger';
import { fetchStyles } from '../utils/registry';
import prompts from 'prompts';

const DEPENDENCIES: string[] = [];
const DEV_DEPENDENCIES: string[] = [];

const initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean(),
});

export const init = new Command()
  .name('init')
  .description('initialize your project and install dependencies')
  .option('-y, --yes', 'skip confirmation prompt.', false)
  .option(
    '-c, --cwd <cwd>',
    'the working directory. defaults to the current directory.',
    process.cwd()
  )
  .action(async opts => {
    try {
      const options = initOptionsSchema.parse(opts);
      const cwd = path.resolve(options.cwd);

      await runInit(cwd);

      logger.info(
        `${chalk.green('Success!')} Project initialization completed.`
      );
    } catch (error) {
      handleError(error);
    }
  });

export async function runInit(cwd: string) {
  const spinner = ora(`Initializing project...`)?.start();

  spinner.text = `Installing styles...`;

  const targetDir = `${cwd}/styles`

  if (!existsSync(targetDir)) {
    await fs.mkdir(targetDir, { recursive: true });
  }

  const payload = await fetchStyles();

  for (const item of payload) {
    const existingFile = existsSync(
      path.resolve(targetDir, item.name)
    );

    if (existingFile) {
      spinner.stop();
      const { overwrite } = await prompts({
        type: 'confirm',
        name: 'overwrite',
        message: `File ${item.name} already exists. Would you like to overwrite?`,
        initial: false,
      });

      if (!overwrite) {
        logger.info(
          `Skipped ${item.name}. To overwrite, run with the ${chalk.green(
            '--overwrite'
          )} flag.`
        );
        continue;
      }

      spinner.start();
    }

    const filePath = path.resolve(targetDir, item.name);

    await fs.writeFile(filePath, item.content);
  }

  spinner?.succeed();

  // Install dependencies.
  const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
  const packageManager = await getPackageManager(cwd);
  const packageCommand = packageManager === 'npm' ? 'install' : 'add';

  await execa(packageManager, [packageCommand, ...DEPENDENCIES], { cwd });
  await execa(
    packageManager,
    [
      packageCommand,
      ...DEV_DEPENDENCIES,
      packageManager === 'npm' ? '--save-dev' : '--dev',
    ],
    { cwd }
  );

  dependenciesSpinner?.succeed();
}
