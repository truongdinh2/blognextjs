import { Pagination } from 'antd';
import * as React from 'react';
import styles from './List.module.css';
import ListBlog from './ListBlog';

type Props = {
  artical: any
}

const List = ({ artical }: Props) => {
  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(1);
  const numPage = 5;
  const handlePage = (value: any) => {
    console.log(value);
    setMinValue((value - 1) * numPage);
    setMaxValue(value * numPage);
  }
  return (
    <>
      <div className={styles.blog}>
    {
      artical.slice(minValue,maxValue).map(
       (items: any, index: number) => (
          <div key={index}>
            <ListBlog data={items} />
          </div>
        ))
      }
      </div>

      <div>
        <Pagination
          defaultCurrent={1}
          total={artical.length}
          onChange={handlePage}
          showQuickJumper
          defaultPageSize={numPage}
          showTotal={total => `Total ${total} items`}
        />
      </div>
    </>
  )
}

export default List
