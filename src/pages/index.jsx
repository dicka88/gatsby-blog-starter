import React from 'react';
import Blog from '../components/Blog';
import Layout from '../components/Layout';
import { Text } from '@chakra-ui/react';

export default function index() {
  return (
    <Layout>
      <Text fontWeight={'black'}>
        Latest Article
      </Text>
      <Blog link={"/home"} title="My First Post" date="May 13, 2022" excerpt="Lorem ipsum sit dolor amet, idk what is the next word" />
      <Blog link={"/home"} title="My Second Post" date="May 13, 2022" excerpt="Lorem ipsum sit dolor amet, idk what is the next word" />
      <Blog link={"/home"} title="My Third Post" date="May 13, 2022" excerpt="Lorem ipsum sit dolor amet, idk what is the next word" />
    </Layout>
  );
}
