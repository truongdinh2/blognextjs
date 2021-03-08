import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../components/Layout';
import List from '../../components/List';
const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});
export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params
    let data = await client.getEntries({
        content_type: 'category',
        'fields.catego': params?.theloai
    });
    let data1 = await client.getEntries({
        content_type: 'category',
    });
    return {
        props: {
            // slug: data.items[0].fields.slug,
            param: params?.theloai,
            artical: data.items,
            data1: data1.items
        }
    }
}
export const getStaticPaths = async () => {
    let data = await client.getEntries({
        content_type: 'category'
    });
    return {
        paths: data.items.map((item: any) => ({
            params: {
                theloai: item.fields.catego,
            }
        })), fallback: false
    }
}
export default function Page({ artical, data1 }: any) {
    // console.log(data)
    return (
        <div>
            <Layout artical={data1}>
                <List artical={artical} />
            </Layout>
        </div>
    )
}
