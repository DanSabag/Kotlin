import React, { Component } from 'react';

class Song extends React.Component {
    render() {
        return (
            // <div className="embed-responsive embed-responsive-16by9" style={{marginRight: '1rem'}}>
            //     <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/LhLBN0nRREg?rel=0" allowfullscreen></iframe>
            // </div>
            <div className="embed-responsive embed-responsive-16by9" style={{marginRight: '1rem'}}>
                <video controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}

export default Song;