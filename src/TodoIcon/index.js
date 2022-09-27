import React from "react";
import './TodoIcon.css';
import { ReactComponent as DeleteSVG } from './trash.svg';
import { ReactComponent as CheckSVG } from './check.svg';

const iconTypes = {
    "check": color => (
        <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "trash": color => (
        <DeleteSVG className="Icon-svg Icon-svg--trash" fill={color} />
    ),
};

function TodoIcon({ type, color = 'gray', onClick } ) {
    return (
        <span 
            className={ `Icon-container Icon-container--${type}` }
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };