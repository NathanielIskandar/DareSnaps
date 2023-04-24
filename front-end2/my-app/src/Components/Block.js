import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {
    const blockStyle = {
        backgroundColor: props.color
    };

    return (
        <div data-testid='main-component'>
            <div className="post" style={blockStyle}></div>
            <div className="caption">{props.color}</div>
        </div>
    );
}

export default Block;