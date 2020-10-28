import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({selectedSong}) => {
    return selectedSong ?
        (<div>
            <h2>Details for:</h2>
            <p>Title: {selectedSong.title}</p>
            <p>Duration: {selectedSong.duration}</p>
        </div>) :
        <div>Select a song</div>

};

export default connect(
    ({selectedSong}) => ({selectedSong})
)(SongDetail);