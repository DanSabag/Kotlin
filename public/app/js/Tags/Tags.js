import React, { Component } from 'react';
import Tag from './Tag/Tag.js'

class SongCard extends React.Component {

    render() {
        const tags = (this.props.tags !== undefined) ?
        this.props.tags.map((tag) => 
            <Tag key={tag.id} name={tag.name}/>
        ) :
        "This song has no tags";
        
        return (
            <div style={{'marginLeft': '1rem'}}>
                {tags}
            </div>
        );
    }
}

export default SongCard;