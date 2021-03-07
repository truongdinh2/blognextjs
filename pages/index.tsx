import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import List from '../components/List';
import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';


type Props = {
  artical: any
}
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});


export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params
  let data = await client.getEntries({
    content_type: 'category',
    'fields.slug': params?.slug
  });
  return {
    props: {
      artical: data.items,
    }
  }
}
const WithStaticProps = ({ artical }: Props) => {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(artical)
  return (
    <>
      <Layout title="List" pathname={pathname} artical={artical} >
        <List artical={artical} />
      </Layout>
    </>
  )
}
export default WithStaticProps;

