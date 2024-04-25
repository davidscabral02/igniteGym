import * as yup from 'yup';
import React, { useState } from 'react';
import * as FileSystem from 'expo-file-system';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
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

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  oldPassword: string;
  passwordConfirm: string;
};

const profileSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail.').email('E-mail.inválido.'),
  oldPassword: yup
    .string()
    .required('Informe a senha antiga.')
    .min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password: yup
    .string()
    .required('Informe a nova senha.')
    .min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  passwordConfirm: yup
    .string()
    .required('Informe a nova senha novamente.')
    .oneOf([yup.ref('password')], 'A confirmação da nova senha não confere.'),
});

const PHOTO_SIZE = 32;

export function Profile() {
  const toast = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(profileSchema),
    defaultValues: { name: 'David Cabral', email: 'david@mail.com' },
  });

  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/davidscabral02.png'
  );
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  function handleUpdateProfile(data: FormDataProps) {
    console.log(data);
  }

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

          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                bg="gray.600"
                placeholder="Nome"
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                isDisabled
                value={value}
                bg="gray.600"
                placeholder="E-mail"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

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

          <Controller
            name="oldPassword"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                bg="gray.600"
                secureTextEntry
                onChangeText={onChange}
                placeholder="Senha antiga"
                errorMessage={errors.oldPassword?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                bg="gray.600"
                secureTextEntry
                onChangeText={onChange}
                placeholder="Nova senha"
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Controller
            name="passwordConfirm"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                bg="gray.600"
                secureTextEntry
                onChangeText={onChange}
                placeholder="Confirme a nova senha"
                errorMessage={errors.passwordConfirm?.message}
              />
            )}
          />

          <Button
            mt={4}
            title="Atualizar"
            onPress={handleSubmit(handleUpdateProfile)}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
