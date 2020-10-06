import { withUrqlClient } from 'next-urql';
import { Layout } from '../../components/Layout';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { Box, Heading } from '@chakra-ui/core';
import { useGetPostFromUrl } from '../../utils/useGetPostFromUrl';
import { EditDeletePostButtons } from '../../components/EditDeletePostButtons';

const Post = ({}) => {
  const [{ data, error, fetching }] = useGetPostFromUrl();

  if (error) {
    return <Box>{error.message}</Box>;
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }

  if (fetching) {
    return (
      <Layout>
        <Box>loading...</Box>
      </Layout>
    );
  }
  return (
    <Layout>
      <Heading mb={4}>{data.post.title}</Heading>
      <Box mb={4}>{data.post.text}</Box>
      <EditDeletePostButtons
        id={data.post.id}
        creatorId={data.post.creator.id}
      />
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
