import { Pagination } from 'antd';
import * as React from 'react';
import styles from './List.module.css';
import ListBlog from './ListBlog';

type Props = {
  artical: any
}
const dataTitle = ["Thể thao", "Thế giới", "ok"]
const List = ({ artical }: Props) => {
  // const data = artical
  const [minValue, setMinValue] = React.useState(1);
  const [maxValue, setMaxValue] = React.useState(2);
  const [data,setData] = React.useState<any>([]);
  const [category, setCategory] = React.useState<string[]>([]);
  React.useEffect(() => {
    setUpData()
  }, [])
  // const category = artical.fields.Artical;
  const numPage = 6;
  React.useEffect(() => {
    handlePage(1)
  }, [])
  const handlePage = (value: any) => {
    setMinValue((value - 1) * numPage);
    setMaxValue(value * numPage);
  }
  const handleChangeArray = (title: any) => {
    const value: any[] = [];
    const newData = artical.map((item:any)=>{
      if(item.fields.Artical===title){
        console.log('hi');
        value.push(item)
        return(value)
      }
    })
    console.log(value)
    setData(value)
  }
  ///
  const setUpData = () => {
    const newArticalList = artical.map((item: any) => item.fields.Artical)
    setCategory([...category, ...newArticalList])
  }
  const test = category.filter((item, index) => {
    return category.indexOf(item) === index
  })
console.log(data)
  return (
    <>
      {test.map((item: any, key) => {
        return (<button style={{ position: 'relative', zIndex: 2 }}
         onClick={() => handleChangeArray(item)} key={key}>{item}1</button>)
      })}
      <div className={styles.blog}>
        {data !== [] &&
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
          total={data.length}
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
