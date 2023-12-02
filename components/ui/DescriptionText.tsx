import {TextProps} from 'react-native';
import {FC, ReactNode} from 'react';
import {Text} from './Text';

interface IDescriptionTextProps extends TextProps {
  /**
   * Type of text.
   * @default 'info'
   */
  type?: 'info' | 'error';

  children: ReactNode;
}

export const DescriptionText: FC<IDescriptionTextProps> = ({
  type = 'info',
  children,
  ...otherProps
}) => {
  return (
    <Text
      size='sm'
      color={type === 'error' ? 'destructive' : 'secondary'}
      {...otherProps}
    >
      {children}
    </Text>
  );
};
