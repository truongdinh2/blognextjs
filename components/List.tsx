import { Pagination } from 'antd';
import * as React from 'react';
import styles from './List.module.css';
import ListBlog from './ListBlog';

type Props = {
  artical: any
}
const dataTitle = ["tin-tuc", "yeu-thich", "ok"]
const List = ({ artical }: Props) => {
  const data = artical
  const [minValue, setMinValue] = React.useState(1);
  const [maxValue, setMaxValue] = React.useState(2);
  const numPage = 6;
  React.useEffect(() => {
    handlePage(1)
  }, [])
  const handlePage = (value: any) => {
    setMinValue((value - 1) * numPage);
    setMaxValue(value * numPage);
  }
  //const
  console.log(minValue, maxValue);
  const handleChangeArray = (title: any) => {
    data=title.filter()
  }
  return (
    <>
      {dataTitle.map((item: any, key) => {
        return (<button style={{ position: 'relative', zIndex: 2 }} onClick={() => handleChangeArray(item)} key={key}>{item}1</button>)
      })}
      <div className={styles.blog}>
        {
          data.slice(minValue, maxValue).map(
            (items: any, index: number) => (
              <div key={index}>
                <ListBlog data={items} />
              </div>
            ))
        }
      </div>

      <div style={{ marginTop: '50px' }}>
        <Pagination
          defaultCurrent={1}
          total={artical.length}
          onChange={handlePage}
          // showQuickJumper
          defaultPageSize={numPage}
          showTotal={total => `Total ${total} items`}
        />
      </div>
    </>
  )
}

export default List
