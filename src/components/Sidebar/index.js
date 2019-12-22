import React from 'react'
import './sidebar.styles.scss';

const Sidebar = ({ adder }) => {
    return (
        <div className="Sidebar">
            <ul><button className="btn btn-out" onClick={() => {
                adder('text');
            }} >Text</button></ul>
            <ul>Sel 2</ul>
            <ul>Sel 3</ul>
            <ul>sel 4</ul>
            <ul>Sel 5</ul>
        </div>
    )
}

export default Sidebar;