import React from 'react';

interface Props {
    label: string;
    onClick: () => void;
    size: 'small' | 'medium' | 'large';
    color: string;
    backgroundColor: string;
    type: 'button' | 'submit' | 'reset';
}

export const Button = ({ label = 'Click me', onClick, size = 'medium', color = 'black', backgroundColor = 'lightgreen', type = 'button' }: Props) => {
    let fontSize = '20px';
    if (size === 'small') {
        fontSize = '16px';
    }
    if (size === 'large') {
        fontSize = '24px';
    }
    const style = {
        backgroundColor,
        color,
        padding: '0.75em 1.5em',
        fontSize,
        margin: 0,
        border: 'none',
    };
    return (
        <button type={type} onClick={onClick} style={style}>
            {label}
        </button>
    );
};
