import {TextProps} from 'react-native';
import {FC, ReactNode} from 'react';
import {Text} from './Text';

interface IDescriptionTextProps extends TextProps {
  /**
   * Type of text.
   * @default 'info'
   */
  isError?: boolean;

  children: ReactNode;
}

const DescriptionText: FC<IDescriptionTextProps> = ({
  isError = false,
  children,
  ...otherProps
}) => {
  return (
    <Text size='sm' color={isError ? 'destructive' : 'secondary'} {...otherProps}>
      {children}
    </Text>
  );
};

DescriptionText.displayName = 'DescriptionText';

export {DescriptionText};
