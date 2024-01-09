import React from 'react';
import './Artist.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Artist = ({ songs }) => {
  return (
    <div className='song-carousel-container'>
      <Carousel>
        {songs?.map((song) => (
          <Paper key={song.songID}>
            <div className='song-card-container'>
              <div className="song-card" style={{ "--img": `url(${song.backdrops[0]})` }}>
                <div className="lyrics">
                  <div className="poster">
                    <img src={song.poster} alt="" />
                  </div>
                  <div className="song-title">
                    <h4>{song.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}

export default Artist;
