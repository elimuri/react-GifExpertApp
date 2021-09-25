import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log("HandleInputChange lamado")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue('')
        }
    }

    return (
        <>
            <p>{inputValue}</p>
            <form onSubmit={ handleSubmit }>
                <input type="text" value={ inputValue } onChange={ handleInputChange }/>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}