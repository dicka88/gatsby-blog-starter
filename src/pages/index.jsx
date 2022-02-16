import React from 'react';
import Blog from '../components/Blog';
import Layout from '../components/Layout';
import { Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';

export default function index({ data }) {
  const { blogs } = data.allMdx;

  return (
    <Layout>
      <Seo />
      <Text fontWeight={'black'}>
        Latest Article
      </Text>
      {blogs.map(blog =>
        <Blog link={blog.slug} title={blog.frontmatter.title} date={blog.frontmatter.date} excerpt={blog.excerpt} />
      )}
    </Layout>
  );
}

export const query = graphql`
  query BlogList {
    allMdx {
      blogs: nodes {
        excerpt
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")
        }
        slug
        timeToRead
      }
    }   
  }
`;
