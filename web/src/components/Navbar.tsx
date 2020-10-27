import { Box, Button, Flex, Heading, Link } from '@chakra-ui/core';
import React from 'react';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });

  let body = null;

  // data loading
  if (fetching) {
    // user is logged in
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2}>login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>register</Link>
        </NextLink>
      </>
    );
    // user not logged in
  } else {
    body = (
      <Flex align="center">
        <NextLink href="/create-post">
          <Button as={Link} mr={4}>
            create toast
          </Button>
        </NextLink>
        <Box mr={2}>{data.me.username}</Box>
        <Button
          variant="link"
          onClick={() => {
            logout();
          }}
          isLoading={logoutFetching}
        >
          logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex position="sticky" top={0} zIndex={1} bg="tan" p={4}>
      <Flex m="auto" flex={1} align="center" maxW={800}>
        <NextLink href="/">
          <Heading cursor="pointer">Breddit 🍞</Heading>
        </NextLink>
        <Box ml={'auto'}>{body}</Box>
      </Flex>
    </Flex>
  );
};
