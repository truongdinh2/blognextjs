import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'
import ListBlog from './ListBlog'

type Props = {
  items: User[],
  artical:any
}

const List = ({ items,artical }: Props) => (
  <>
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
  <div>
    {artical.map((items:any,index:number)=>(
      <div key={index}>
        <ListBlog data={items}/>
      </div>
    ))}
  </div>
  </>
)

export default List
