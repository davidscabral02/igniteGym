import { Text, Pressable, IPressableProps } from 'native-base';

type Props = IPressableProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      w={24}
      h={10}
      mr={3}
      rounded="md"
      bg="gray.600"
      alignItems="center"
      isPressed={isActive}
      justifyContent="center"
      _pressed={{
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...rest}
    >
      <Text
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        color={isActive ? 'green.500' : 'gray.200'}
      >
        {name}
      </Text>
    </Pressable>
  );
}
