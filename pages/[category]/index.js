import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
// import Data from '../../data'


const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});
export const getStaticProps = async (context) => {
    const params = context.params
    let data = await client.getEntries({
        content_type: 'category',
        'fields.slug': params?.category
    });
    return {
        props: {
            artical: data.items,
        }
    }
}
export const getStaticPaths = async () => {
    let data = await client.getEntries({
        content_type: 'category'
    });
    return {
        paths: data.items.map((item) => ({
            params: { category: item.fields.slug,
         }
        })), fallback: false
    }
}
export default function IndexP({ artical }) {
    console.log(artical)
    return (
        <div>
            <Layout artical={artical}>
                <div>{artical.map((items, index) => {
                    return (
                        <div key={index}>
                            <Link href="/">
                                <a>{items.fields.Artical}</a>
                            </Link>
                        </div>
                    )
                })}</div>
            </Layout>
        </div>
    )
}