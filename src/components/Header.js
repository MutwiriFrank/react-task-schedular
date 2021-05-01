import PropTypes from 'prop-types' //for specifying types

import React from 'react'
import Button from './Button'

const Header = ({title, onAdd, showadd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showadd? 'red': 'green'} text={showadd? 'close' : 'add'} onClick={onAdd} />
            
            
        </header>
    )
}


export default Header
