import { GetStaticProps } from 'next'
import React from 'react'
import ListBlog from './ListBlog'
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
});
export default function Side({artical}:any) {
    return (
        <div>
            <div >
                {
                    artical.map(
                        (items: any, index: number) => (
                            <div key={index}>
                                <ListBlog data={items} />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}
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