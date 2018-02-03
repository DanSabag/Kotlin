import React, { Component } from 'react';
import Song from '../Song/Song.js'
import Comments from '../Comments/Comments.js'

class SongCard extends React.Component {
    render() {
        const tags = (this.props.tags !== undefined) ?
            this.props.tags.map((tag) => 
                <a key={tag.id} href={tag.url} className="badge badge-secondary">{tag.name}</a>
            ) :
            "This song has no tags";
            
        return (
            <div className="card text-white bg-dark mb-3" style={{marginLeft: '2rem', marginRight: '2rem'}}>
                <div className="row">
                    <div className="col-md-9">
                        <div className="card-header">
                            <h4>{this.props.songName}</h4>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">
                                {tags}
                            </h6>
                            <Song />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Comments comments={this.props.comments}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SongCard;