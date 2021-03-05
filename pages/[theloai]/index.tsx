import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
// const contentful = require("contentful");
// const client = contentful.createClient({
//     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
// });
// export const getStaticProps: GetStaticProps = async (context) => {
//     const params = context.params
//     let data = await client.getEntries({
//         content_type: 'category',
//         'fields.slug': params?.theloai
//     });
//     return {
//         props: {
//             slug: data.items[0].fields.slug,
//             param:params?.theloai,
//             data:data
//         }
//     }
// }
// export const getStaticPaths = async () => {
//     let data = await client.getEntries({
//         content_type: 'category'
//     });
//     return {
//         paths: data.items.map((item: any) => ({
//             params: { theloai: item.fields.slug,
//          }
//         })), fallback: false
//     }
// }
export default function Page() {
    const router = useRouter();
    const {theloai} = router.query;
    // console.log(param)
    // console.log(data)
    return (
        <div>
            hi
            <Link href="/[theloai]/[slug]" as={`/${theloai}/blog-content1`}>
            <a>link1</a>
            </Link>
        </div>
    )
}
