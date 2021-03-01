import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import List from '../components/List';
import React from 'react';


type Props = {
  artical: any
}
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
});
const WithStaticProps = ({ artical }: Props) => {

  return(
    
      <Layout title="List">
        <div>
        <h1>Users List</h1>
        </div>
        <p>
          Example fetching data from inside <code>getStaticProps()</code>.
        </p>
        <p>You are currently on: /users</p>
        <List  artical={artical} />
      
      </Layout>
    
  )
}
  export default WithStaticProps
  

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

