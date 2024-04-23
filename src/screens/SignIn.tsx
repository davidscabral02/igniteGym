import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base';

import LogoSvg from '@assets/logo.svg';

import BackgroundImage from '@assets/background.png';
import { Input } from '@components/Input';
import { useState } from 'react';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleNewAccount() {
    navigation.navigate('signUp');
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700">
        <Image
          source={BackgroundImage}
          defaultSource={BackgroundImage}
          resizeMode="contain"
          position="absolute"
          alt="Pessoas treinando"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Acesse sua conta
        </Heading>

        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          value={senha}
          onChangeText={(senha) => setSenha(senha)}
          placeholder="Senha"
          secureTextEntry
        />

        <Button title="Acessar" />

        <Center>
          <Text color="gray.100" fontFamily="body" fontSize="sm" mb={3}>
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar nova conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
