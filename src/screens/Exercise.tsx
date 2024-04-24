import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';

import { Button } from '@components/Button';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={16}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>
        <HStack
          mt={4}
          mb={6}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            fontSize="lg"
            flexShrink={1}
            color="gray.100"
            fontFamily="heading"
          >
            Puxada
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            h={80}
            mb={3}
            w="full"
            rounded="lg"
            resizeMode="cover"
            alt="Nome do exercício"
            source={{ uri: 'https://github.com/davidscabral02.png' }}
          />
          <Box bg="gray.600" rounded="lg" pb={4} px={4}>
            <HStack
              mb={6}
              mt={5}
              alignItems="center"
              justifyContent="space-around"
            >
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml={2}>
                  3 Series
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml={2}>
                  12 Repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
