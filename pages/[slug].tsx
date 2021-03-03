import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import { GetStaticProps } from "next";
import Image from 'next/image';
import Example from "../components/comment";
import Layout from "../components/Layout";
import styles from './slug.module.css'
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
            value:data.items,
            test: data.items[0].fields.slug,
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
const Artical = ({ artical, test,value }: any) => {
    return (
        <div>
            <Layout artical={value} title={artical.fields.title}>
                <div  className={styles.container}>
                    <div style={{minHeight:'60vh'}}className={styles.main}>
                        <div className={styles.content  }>
                            <h1 >
                                BLOG BY NEXTJS
                             </h1>
                        </div>
                        <div>
                            <h2>
                                {artical.fields.title}
                            </h2>
                        </div>
                        <div
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: '12px',
                                lineHeight: '20px',
                                textDecoration: 'none solid rgb(51,51,51)',
                                color: '#565656'
                            }}
                        >
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
                        <div>
                            <p style={{
                                color: 'chocolate', fontStyle: 'oblique',
                                fontWeight: 600, textDecorationStyle: 'solid'
                            }}>
                                {artical.fields.tacgia}.
                            </p>
                        </div>
                    </div>
                    <Example test={test} />
                </div>
            </Layout>
        </div>
    )
}
export default Artical;