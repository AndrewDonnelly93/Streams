import React from 'react';
import {connect} from 'react-redux';
import {AnyAction} from 'redux';
import {Post, RootState} from '../reducers';
import {ThunkDispatch} from 'redux-thunk';
import {fetchPostsAndUsers} from '../actions';
import UserHeader from './UserHeader';

interface PostListProps {
    fetchPostsAndUsers: () => void;
  posts: Post[];
}

const PostList: React.FC<Partial<PostListProps>> = ({fetchPostsAndUsers, posts}) => {
  React.useEffect(() => {
      if (fetchPostsAndUsers) {
          fetchPostsAndUsers();
      }
  }, [fetchPostsAndUsers]);

  const renderList = () => {
      return posts && posts.map((post: Post) => {
          return (<li key={post.id} className="item">
              <i className="large middle aligned icon user"/>
              <div className='content'>
                  <div className='description'>
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                  </div>
                  <UserHeader userId={post.userId}/>
              </div>
          </li>)
      });
  };

  return (
      <div className="ui relaxed divided list">
          {
              posts && posts.length ?
                  renderList() :
                  <div>Loading...</div>
          }
      </div>
  )
};

export default connect(
    ({posts}: RootState) => ({posts}),
    (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => ({
        fetchPostsAndUsers: () => dispatch(fetchPostsAndUsers())
    })
)(PostList);