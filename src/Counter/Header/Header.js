import React from 'react';
import './Header.css'

class Header extends React.PureComponent {

    render() {
        return (
            <h1 className="count" >{`Count: ${this.props.value}`}</h1>
        );
    }
}

export { Header };