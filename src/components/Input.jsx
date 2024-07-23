import React from 'react';

export default function Input(props) {
    console.log(props)
    return (
        <div>
            {props.attribute.map((elem, index) => (
                <div key={index} className="inp">
                    <label htmlFor={elem.for}>{elem.content}</label>
                    <input type={elem.type} id={elem.for} placeholder={elem.placeholder} />
                </div>
            ))}
        </div>
    );
}
