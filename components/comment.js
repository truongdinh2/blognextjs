import React, { Component} from 'react';
import { FacebookProvider, Comments,CommentsCount,LoginButton } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    const {test} = this.props;
    return (
      <>
      <FacebookProvider appId="265278211852595">
        <Comments href={`https://blognextjs12.vercel.app/${test}`} />
      </FacebookProvider>
    </>
    );
  }
}