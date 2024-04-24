import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from 'native-base';

import { UserPhoto } from '@components/UserPhoto';
import { ScreenHeader } from '@components/ScreenHeader';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 32;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(true);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.400"
              endColor="gray.300"
            />
          ) : (
            <UserPhoto
              size={PHOTO_SIZE}
              alt="Foto do usuário"
              source={{ uri: 'https://github.com/davidscabral02.png' }}
            />
          )}
          <TouchableOpacity>
            <Text
              mt={4}
              mb={8}
              fontSize="md"
              color="green.500"
              fontFamily="heading"
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="gray.600" />
          <Input placeholder="E-mail" bg="gray.600" isDisabled />

          <Heading
            mb={2}
            mt={12}
            fontSize="md"
            color="gray.200"
            fontFamily="heading"
            alignSelf="flex-start"
          >
            Alterar senha
          </Heading>

          <Input placeholder="Senha antiga" bg="gray.600" secureTextEntry />
          <Input placeholder="Nova senha" bg="gray.600" secureTextEntry />
          <Input
            bg="gray.600"
            secureTextEntry
            placeholder="Confirme a nova senha"
          />

          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
