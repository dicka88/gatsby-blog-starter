import { Box, Container } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <Box bg="red.500" color="white" paddingY={4}>
        <Container maxW="container.md">
          All right reserved - Dicka Ismaji
        </Container>
      </Box>
    </footer >
  );
}
