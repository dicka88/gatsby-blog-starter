import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxW="container.md" paddingY={5} marginBottom="12">
        {children}
      </Container>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

