import React from 'react';
import { Link } from 'gatsby';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Blog({ link, title, date, excerpt }) {
  return (
    <Link href={link}>
      <Box paddingY="4">
        <Heading as="h2" color="red.500">
          {title}
        </Heading>
        <Text color={"blackAlpha.800"}>
          {date}
        </Text>
        <Text>
          {excerpt}
        </Text>
      </Box>
    </Link>
  );
};
