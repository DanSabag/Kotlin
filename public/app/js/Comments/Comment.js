import React, { Component } from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div>
                <span className="username">{this.props.username} :</span>
                <div className="row">
                    <div className="offset-md-1">
                        <p className="card-text">{this.props.comment}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;