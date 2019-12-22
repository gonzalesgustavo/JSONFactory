import React from 'react'
import './builder.style.scss';
import Text from './Text';

const Builder = ({ incoming }) => {
    const convey = [];
    incoming.filter(inc => {
        switch (inc) {
            case 'text':
                convey.push(<Text />)
            default:
                break;
        }
    })
    return (
        <div className="Builder">
            <h2>Hello</h2>
            <Text />
            {convey}
        </div>
    )
}

export default Builder;