import { HStack, Heading, Text, VStack } from 'native-base';

export function HistoryCard() {
  return (
    <HStack
      px={5}
      py={4}
      mb={3}
      w="full"
      rounded="md"
      bg="gray.600"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr={5}>
        <Heading
          color="white"
          fontSize="md"
          fontFamily="heading"
          textTransform="capitalize"
        >
          Costa
        </Heading>

        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          Puxada
        </Text>
      </VStack>
      <Text color="gray.300" fontSize="md">
        18:99
      </Text>
    </HStack>
  );
}
