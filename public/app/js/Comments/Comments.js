import React, { Component } from 'react';
import Comment from './Comment'

class Comments extends React.Component {
    render() {
        
        const comments = this.props.comments !== undefined ? this.props.comments.map((comment) => 
                <Comment key={comment.id} username={comment.username} comment={comment.content} />
            ) : "No comments currently"


        return (
            <div className="card bg-light mb-3" style={{height: "97%", marginLeft: "-1.7rem", background:"#e6eaf2", marginRight: "0.3rem", marginTop: "0.3rem", color: '#515356'}}>
                <div className="card-header">Comments</div>
                <div className="card-body">
                    {comments}
                </div>
            </div>
        );
    }
}

export default Comments;