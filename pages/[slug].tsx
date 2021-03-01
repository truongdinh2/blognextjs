import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import { GetStaticProps } from "next";
import Image from 'next/image';
import Link from "next/link";
import Example from "../components/comment";
import Layout from "../components/Layout";
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

    return {
        props: {
            artical: data.items[0],
            test: data.items[0].fields.slug,
            // test1:data
        }
    }
}
export const getStaticPaths = async () => {
    let data = await client.getEntries({
        content_type: 'category'
    });
    return {
        paths: data.items.map((item: any) => ({
            params: { slug: item.fields.slug }
        })), fallback: false
    }
}
export interface Artic {
    fields: {
        Artical: string,
        content: any,
        date: Date,
        slug: string,
        title: string
    }
}
const Artical = ({ artical, test }: any) => {
    console.log(artical)
    console.log(test, 'test')
    // console.log(artical.fields.content)
    return (
        <div>
            <Layout>
                <div>
                    {artical.fields.title}
                </div>
                <div>
                    {artical.fields.date}
                </div>
                <div>
                    {documentToReactComponents(artical.fields.content,
                        {
                            renderNode: {
                                [BLOCKS.EMBEDDED_ASSET]: (node: any) =>
                                (<Image
                                    src={"https:" + node.data.target.fields.file.url}
                                    width={500}
                                    height={400} />)
                            }
                        }
                    )}
                </div>
                <Example test={test}/>
            </Layout>
        </div>
    )
}
export default Artical;