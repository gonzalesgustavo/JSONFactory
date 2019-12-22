import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './monitor.style.scss';

const Monitor = () => {
    const { nodes } = useSelector(state => ({
        nodes: state.nodes
    }));
    const itms = nodes.map(nde => {
        return <p>{nde.name}</p>
    })

    return (
        <div className="Monitor">
            <h2>World</h2>
            {itms}
        </div>
    )
}

export default Monitor;