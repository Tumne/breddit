import { Box, Heading } from '@chakra-ui/core';
import React from 'react';
import NextLink from 'next/link';

export type WrapperVariant = 'small' | 'regular';

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = 'regular',
}) => {
  return (
    <Box
      mt="8"
      mx="auto"
      maxW={variant === 'regular' ? '800px' : '400px'}
      w="100%"
    >
      {variant === 'small' && (
        <NextLink href="/">
          <Heading cursor="pointer" textAlign="center" p={8}>
            Breddit 🍞
          </Heading>
        </NextLink>
      )}
      {children}
    </Box>
  );
};
