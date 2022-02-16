import { Image } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo
        title={"Not found"}
      />
      <Image marginX="auto" src="https://cdni.iconscout.com/illustration/premium/thumb/page-not-found-2511615-2133703.png" />
    </Layout>
  );
}
