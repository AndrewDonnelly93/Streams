import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../reducers';

export const fetchPosts = () => {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
};

export const fetchUser = (id: number) => {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
      const response = await jsonPlaceholder.get(`/users/${id}`);
       dispatch({
                type: 'FETCH_USER',
                payload: response.data
            });
    }
};

export const fetchPostsAndUsers = () => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState: any) => {
      await dispatch(fetchPosts());

      _.chain(getState().posts)
          .map('userId')
          .uniq()
          .forEach(userId => dispatch(fetchUser(userId)))
          // For execution
          .value();
  }
};

// export const fetchUser = (id: number) => {
//   return (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
//      _fetchUser(id, dispatch);
//   }
// };
//
// const _fetchUser = _.memoize((id: number, dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
//     jsonPlaceholder.get(`/users/${id}`).then(
//         response => dispatch({
//             type: 'FETCH_USER',
//             payload: response.data
//         })
//     )
// });