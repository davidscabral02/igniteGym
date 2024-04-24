import {
  IInputProps,
  Input as NativeBaseInput,
  FormControl,
} from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        h={14}
        px={4}
        bg="gray.700"
        borderWidth={0}
        color={'white'}
        fontSize={'md'}
        fontFamily={'body'}
        isInvalid={invalid}
        placeholderTextColor="gray.300"
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        _focus={{
          borderWidth: 1,
          bgColor: 'gray.700',
          borderColor: 'green.500',
        }}
        {...rest}
      />
      <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
