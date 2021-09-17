import React from 'react';
import './Button.css'
import cn from 'classnames';

class Button extends React.Component {
  
    render() {
        return (
          <button
            onClick={this.props.onClick}
            className={cn("button", this.props.buttonClass)}>{this.props.value}
          </button>
        );
    }
}

export { Button };