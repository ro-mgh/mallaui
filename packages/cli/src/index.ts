#!/usr/bin/env node
import { Command } from 'commander';

import { add } from './commands/add';
import { init } from './commands/init';

function main() {
  const program = new Command();

  program
    .name('mallaui')
    .description('add components and dependencies to your react native project')
    .version('0.0.4');

  program.addCommand(init).addCommand(add);

  program.parse();
}

main();
