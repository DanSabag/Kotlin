import React, { Component } from 'react';
import Comment from './Comment'

class Comments extends React.Component {
    render() {
        
        const comments = this.props.comments !== undefined ? this.props.comments.map((comment) => 
                <Comment key={comment.id} username={comment.username} comment={comment.content} />
            ) : "No comments currently"
            
        return (
            <div style={{marginLeft: "-1.7rem", marginRight: "0.3rem", marginTop: "0.3rem"}}>
                <div className="card-header">Comments</div>
                <div className="card thin scrollbar-primary bg-light mb-3" style={{color: '#515356', overflowY: "scroll"}}>
                    <div className="card-body">
                        {comments}
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;