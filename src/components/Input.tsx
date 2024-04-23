import { IInputProps, Input as NativeBaseInput } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      h={14}
      mb={4}
      px={4}
      bg="gray.700"
      borderWidth={0}
      color={'white'}
      fontSize={'md'}
      fontFamily={'body'}
      placeholderTextColor="gray.300"
      _focus={{
        bgColor: 'gray.700',
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...rest}
    />
  );
}
