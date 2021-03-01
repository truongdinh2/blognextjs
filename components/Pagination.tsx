import { Pagination } from 'antd';
import React from 'react'
export default function Paginationz() {
    return (

        <>
            <Pagination
                total={3}
                showSizeChanger
                showQuickJumper
                // showTotal={total => `Total ${total} items`}
            />
        </>
    )
}