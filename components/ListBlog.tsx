import Link from 'next/link'
import React from 'react'

export default function ListBlog({data}:any) {
    console.log(data);
    const {fields} = data;
    const {slug} = fields;
    return (
        <div>
            <Link href="/contentful/[slug]" as={`/contentful/${slug}`} >
                <a>{fields.title}</a>
            </Link>
        </div>
    )
}
