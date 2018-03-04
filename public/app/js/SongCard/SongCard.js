import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Song from '../Song/Song.js'
import Comments from '../Comments/Comments.js'
import Tags from '../Tags/Tags.js'

const headerStyle = {
    "fontSize":"30px"
}

class SongCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.songName}
                    subtitle={this.props.userName}
                    actAsExpander={true}
                    titleStyle={headerStyle}
                />
                <Tags tags={this.props.tags}/>
                <br />
                <CardMedia>
                    <Song />
                </CardMedia>
                <br />
                <br />
            </Card>
        );
    }
}

export default SongCard;