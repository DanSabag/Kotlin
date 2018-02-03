import React, { Component } from 'react';

class SongCard extends React.Component {
    render() {
        return (
            <a href={this.props}>{this.props.tagName}</a>
        );
    }
}

export default SongCard;