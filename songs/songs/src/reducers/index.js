import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Mr Brightside', duration: '4:05'
        },
        {
            title: 'London Boy', duration: '3:05'
        },
        {
            title: 'Read my mind', duration: '5:35'
        },
        {
            title: 'Somebody told me', duration: '4:02'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});