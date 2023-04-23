import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color="Blue" handleClick={props.handleClick}/>
          <Color color="Purple" handleClick={props.handleClick}/>
          <Color color="Red" handleClick={props.handleClick}/>
          <Color color="Orange" handleClick={props.handleClick}/>
      </div>
    );
}

export default Menu;