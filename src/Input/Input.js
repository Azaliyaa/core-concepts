import React from 'react';
import './Input.css'
import cn from 'classnames';

class Input extends React.Component {
  
    render() {
        return (
          <input
            className={cn("input", this.props.inputClass)}
            placeholder={this.props.placeholder}
          />
        );
    }
}

export { Input };