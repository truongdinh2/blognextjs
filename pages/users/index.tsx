import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { User } from '../../interfaces'
import { sampleUserData } from '../../utils/sample-data'


type Props = {
  items: User[],
  artical: any
}
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
});

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params
  let data = await client.getEntries({
    content_type: 'category',
    'fields.slug': params?.slug
  });
  const items: User[] = sampleUserData
  return {
    props: {
      artical: data.items,
      items
    }
  }
}
const WithStaticProps = ({ items,artical }: Props) => (
  <Layout title="List">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} artical={artical} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

// export const getStaticProps: GetStaticProps = async () => {

//   const items: User[] = sampleUserData
//   return { props: { items } }
// }

export default WithStaticProps
