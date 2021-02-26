import Link from 'next/link'
import Example from '../components/comment'
import Layout from '../components/Layout'


const IndexPage = () => (
  <Layout title="Home ">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Example/>
  </Layout>
)

export default IndexPage
