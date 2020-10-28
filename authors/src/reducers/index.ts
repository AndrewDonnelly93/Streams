import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface User {
    id: number,
    name: string;
    username: string;
    email: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export interface RootState {
    posts: Post[];
    users: User[]
}

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});