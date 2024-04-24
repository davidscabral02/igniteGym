import React, { useState } from 'react';
import { Heading, VStack, SectionList, Text } from 'native-base';

import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';

export function History() {
  const [exercises, setExercises] = useState([]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />
      <SectionList
        px={8}
        sections={exercises}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            mt={10}
            mb={3}
            fontFamily="heading"
          >
            {section.title}
          </Heading>
        )}
        contentContainerStyle={
          exercises.length === 0 && {
            flex: 1,
            justifyContent: 'center',
          }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. {`\n`} Vamos fazer exercícios
            hoje?
          </Text>
        )}
      />
    </VStack>
  );
}
