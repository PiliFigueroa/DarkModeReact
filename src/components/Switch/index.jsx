import React from 'react';
import './Switch.css'

const Switch = ({ handleTheme }) => {
    return <button className='btn' onClick={handleTheme}>Change theme</button>
}

export { Switch }