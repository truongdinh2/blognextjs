import { useRouter } from 'next/dist/client/router'
import React from 'react'

export default function Item() {
    const router = useRouter();
    const {category,item}:any = router.query;
    return (
        <div>
            item1 hieu 
            {item}
            <b>category</b>{category}
        </div>
    )
}
