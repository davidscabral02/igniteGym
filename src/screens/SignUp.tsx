import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base';

import LogoSvg from '@assets/logo.svg';

import BackgroundImage from '@assets/background.png';
import { Input } from '@components/Input';
import { useState } from 'react';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function SignUp() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmeSenha, setConfirmeSenha] = useState('');

  function handleGoBack() {
    navigation.goBack();
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
          Crie sua conta
        </Heading>

        <Input
          value={nome}
          onChangeText={(nome) => setNome(nome)}
          placeholder="Nome"
          autoCapitalize="words"
        />
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
        <Input
          value={confirmeSenha}
          onChangeText={(confirmeSenha) => setConfirmeSenha(confirmeSenha)}
          placeholder="Confirme a senha"
          secureTextEntry
        />
        <Button title="Criar e acessar" />

        <Button
          title="Voltar para o login"
          variant="outline"
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
