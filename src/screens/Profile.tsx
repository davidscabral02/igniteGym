import React, { useState } from 'react';
import * as FileSystem from 'expo-file-system';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Text,
  Center,
  VStack,
  Heading,
  Skeleton,
  useToast,
  ScrollView,
} from 'native-base';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { UserPhoto } from '@components/UserPhoto';
import { ScreenHeader } from '@components/ScreenHeader';

const PHOTO_SIZE = 32;

export function Profile() {
  const toast = useToast();

  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/davidscabral02.png'
  );
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        );
        if (
          photoInfo.exists &&
          photoInfo.size &&
          photoInfo.size / 1024 / 1024 > 5
        ) {
          return toast.show({
            title: 'Essa imagem é muito grande. Escolha uma imagem de até 5mb',
            placement: 'top',
            bgColor: 'red.500',
          });
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

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
              endColor="gray.300"
              startColor="gray.400"
            />
          ) : (
            <UserPhoto
              size={PHOTO_SIZE}
              alt="Foto do usuário"
              source={{ uri: userPhoto }}
            />
          )}
          <TouchableOpacity onPress={handleUserPhotoSelect}>
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
