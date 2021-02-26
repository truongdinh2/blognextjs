import React, { Component} from 'react';
import { FacebookProvider, Comments,CommentsCount,LoginButton } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <>
      {/* <FacebookProvider appId="265278211852595">
        <Comments href="https://www.facebook.com/permalink.php?story_fbid=112802527519874&id=112802187519908&substory_index=0" />
        <LoginButton
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login via Facebook</span>
        </LoginButton>
        <CommentsCount href="https://www.facebook.com/FaceTable-112802187519908" />

      </FacebookProvider> */}
    {/* <div class="fb-comments" data-href="https://www.facebook.com/permalink.php?story_fbid=112802527519874&amp;id=112802187519908&amp;substory_index=0" data-width="" data-numposts="5">d</div> */}
    {/* <div class="fb-comment-embed" data-href="https://www.facebook.com/zuck/posts/10102577175875681?comment_id=1193531464007751&amp;reply_comment_id=654912701278942" data-width="560" data-include-parent="false"></div> */}
    <div>hi</div>
    <div className="fb-comments" data-href="http://localhost:3000/contentful" data-width="" data-numposts="5"></div>
    {/* <div class="fb-comments" data-href="https://www.facebook.com/permalink.php?story_fbid=113093850824075&amp;id=112802187519908%3Fcomment_id%3D1193531464007751&amp;amp%3Breply_comment_id=654912701278942" data-width="" data-numposts="5"></div> */}
    </>
    );
  }
}