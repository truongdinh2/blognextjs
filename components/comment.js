import React, { Component } from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

export default class Example extends Component {
  render() {
    const { test } = this.props;
    const catego = test.catego;
    const slug = test.slug;
    return (
      <>
        <FacebookProvider appId="265278211852595">
          <Comments href={`https://blognextjs12.vercel.app/${catego}/${slug}`} />
        </FacebookProvider>
      </>
    );
  }
}