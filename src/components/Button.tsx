import { IButtonProps, Button as NativeBaseButton, Text } from 'native-base';

type ButtonProps = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
};

export function Button({ title, variant = 'solid', ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      h={14}
      w="full"
      rounded="sm"
      borderColor="green.500"
      borderWidth={variant === 'outline' ? 1 : 0}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      _pressed={{ bg: variant === 'outline' ? 'gray.500' : 'green.500' }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={variant === 'outline' ? 'green.500' : 'white'}
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}
