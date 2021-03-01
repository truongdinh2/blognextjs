import * as React from 'react'
import { User } from '../interfaces'
import ListBlog from './ListBlog';
import styles from './List.module.css'

type Props = {
  items: User[],
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
