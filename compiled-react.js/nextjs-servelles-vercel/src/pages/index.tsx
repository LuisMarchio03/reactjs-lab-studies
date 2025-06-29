import { Flex, Input, Image, Button, Text } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSignUpToNewsletter = (event: FormEvent) => {
    event.preventDefault();

    axios.post("/api/subscribe", { email: email });
  };

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bg="gray.800"
    >
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Image marginBottom={8} src="/rocketseat.svg" alt="Rocketseat" />

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.400"
          marginBottom={2}
        >
          Assine a newsletter da Rocketseat e receba os melhores conteúdos sobre
          programação!
        </Text>

        <Input
          color="white"
          placeholder="Seu melhor e-mail"
          marginTop={2}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: "purple.600" }}
        >
          INSCREVER
        </Button>
      </Flex>
    </Flex>
  );
}
