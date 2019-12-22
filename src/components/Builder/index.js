import React from 'react'
import './builder.style.scss';

const Builder = ({ incoming }) => {
    const components = incoming.map(inc => {
        return <p>{inc}</p>
    })
    return (
        <div className="Builder">
            <h2>Hello</h2>
            {components}
        </div>
    )
}

export default Builder;