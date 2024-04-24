import { MaterialIcons } from '@expo/vector-icons';
import { HStack, Heading, Icon, Text, VStack } from 'native-base';

import { UserPhoto } from './UserPhoto';
import { TouchableOpacity } from 'react-native';

export function HomeHeader() {
  return (
    <HStack bgColor="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={12}
        alt="Imagem do Usuário"
        source={{ uri: 'https://github.com/davidscabral02.png' }}
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          Rodrigo
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} size={7} name="logout" color="gray.200" />
      </TouchableOpacity>
    </HStack>
  );
}
