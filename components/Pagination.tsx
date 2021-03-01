import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
type Art = {
    artical1: any
}
export default function Paginationz(props: Art) {
    // const total = artical1.length;
    const [artical, setArtical1] = useState([]);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1);
    const numPage = 5;
    useEffect(() => {
        if (props.artical1 !== undefined) {
            setArtical1(props.artical1);
        }
    })
    const handlePage = (value: any) => {
        console.log(value);
        setMinValue((value - 1) * numPage);
        setMaxValue(value * numPage);
    }
    return (
        <>
            <Pagination
                defaultCurrent={1}
                total={artical.length}
                // showSizeChanger
                // itemRender={()}
                onChange={handlePage}
                showQuickJumper
                // pageSize={5}
                defaultPageSize={numPage}
                showTotal={total => `Total ${total} items`}
            // onShowSizeChange={}
            />
        </>
    )
}