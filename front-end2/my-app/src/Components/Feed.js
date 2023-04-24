import React, { useState } from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    const [blocks, setBlocks] = useState([]);
    const posts = blocks.map((color) => <Block color={color}/>); 
    return (
        <div>
            <Menu handleClick={(color) => setBlocks(blocks => [color, ...blocks])}/>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}


export default Feed;