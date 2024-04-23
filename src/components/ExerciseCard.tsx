import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { HStack, Heading, Image, Text, VStack, Icon } from 'native-base';

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        p={2}
        pr={4}
        mb={3}
        rounded="md"
        bg="gray.500"
        alignItems="center"
      >
        <Image
          w={16}
          h={16}
          mr={4}
          rounded="md"
          resizeMode="center"
          alt="Imagem do Exercício"
          source={{ uri: 'https://github.com/davidscabral02.png' }}
        />
        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
