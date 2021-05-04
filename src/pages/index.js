import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'
import { Container, Stack, Box, Heading, Text, Link } from '@chakra-ui/react'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  {
    allWpPost {
      nodes {
        id
        title
        excerpt
        content
        uri
      }
    }
  }
    
  `)

  console.log('data: ', data);
  const { allWpPost } = data;

  return(
      <Container maxW="xl" centerContent>
        <Heading as={`h1`} m={14}>WordPress & Gatsby<img
        style={{display: 'inline-block'}}
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='44' height='44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      /></Heading>
        <Stack spacing={8}>

          {/* adding our wp data */}
          { allWpPost.nodes.map( ({id, title, uri, excerpt}) => (

            <Box key={id} p={5} shadow="md" borderWidth="1px">
              <Heading as={`h2`}>{title}</Heading>
              <Text mt={4}>
                <span dangerouslySetInnerHTML={{__html: excerpt}} />
              </Text>
              <Link as={GatsbyLink} to={uri}>Read More &raquo;</Link>
            </Box>

          ))}

        </Stack>
      </Container>
  )
}

export default IndexPage