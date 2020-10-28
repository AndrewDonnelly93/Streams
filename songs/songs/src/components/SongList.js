import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

const SongList = (props) => {
  const {songs, onSelectSong} = props;

  return (
    <div className="ui divided list">
      {
        songs.map(song => (
            <div className="item" key={song.title}>
              <div className="right floated content">
                <button
                    className="ui button primary"
                    onClick={() => onSelectSong(song)}
                >
                  Select
                </button>
              </div>
              <div className='content'>
                {song.title}
              </div>
            </div>
        ))
      }
    </div>
  );
};

const mapStateToProps = ({songs}) => {
  return {
    songs
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectSong: (song) => dispatch(selectSong(song))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);