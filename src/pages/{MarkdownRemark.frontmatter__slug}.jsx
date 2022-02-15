import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Box, Heading } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';

export default function MarkdownPages({ data }) {
  const { markdownRemark } = data;
  console.log(data);
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Heading as="h1">{frontmatter.title}</Heading>
      <p>{frontmatter.date}</p>
      <Box>
        <MDXProvider
          components={{
            h1: ({ children }) => <Heading as="h1">{children}</Heading>
          }}
        >
          <h1>Hello</h1>
        </MDXProvider>
      </Box>
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html,
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
