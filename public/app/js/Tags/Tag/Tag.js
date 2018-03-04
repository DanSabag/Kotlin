import React, { Component } from 'react';
import Chip from 'material-ui/Chip';

class Tag extends React.Component {

    handleClick(e) {
        return;
    }

    render() {
        const styles = {
            chip: {
              margin: 4,
            },
            wrapper: {
              display: 'flex',
              flexWrap: 'wrap',
            },
          };

        return (
            <Chip
                style={styles.chip}
                onClick={this.handleClick}
            >
                {this.props.name}
            </Chip>
        );
    }
}

export default Tag;