import React from 'react';
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './SearchForm.css'

function SearchForm() {

    const onButtonClick = () => {
        console.log('click!');
    }

    return (
        <div className="search_form">
            <Input placeholder="What do you want to watch?" />
            <Button buttonClass="search_button" value="search" onClick={onButtonClick} />
        </div>
    );
}

export { SearchForm };