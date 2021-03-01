import * as React from 'react';
import styles from './List.module.css';
import ListBlog from './ListBlog';

type Props = {
  artical:any
}

const List = ({ artical }: Props) => (
  <>
  
  <div className={styles.blog}>
    {artical.map((items:any,index:number)=>(
      <div key={index}>
        <ListBlog data={items}/>
      </div>
    ))}
  </div>
  </>
)

export default List
