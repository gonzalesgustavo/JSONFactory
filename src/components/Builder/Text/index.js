import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './text.styles.scss';
import uuid from 'uuid/v4';
import addAction from '../../../redux/actions';

const Text = () => {
    const [key, updateKey] = useState('');
    const [val, updateVal] = useState('');
    const dispatch = useDispatch();
    const unPack = () => {
        const str = `{"id": "${uuid()}", "${key}":"${val}"}`;
        const jsonify = JSON.parse(str);
        dispatch(addAction(jsonify));
    }
    return (
        <div className="Text">
            <div className="Text-header">
                <button className="Text-close">X</button>
            </div>
            <div className="Text-body">
                <div className="Key">
                    <input type="text" onChange={e => {
                        updateKey(e.target.value);
                    }} value={key} />
                </div>
                <div className="Text-spacer">
                    <h3>:</h3>
                </div>
                <div className="Value">
                    <input type="text" onChange={e => {
                        updateVal(e.target.value);
                    }} value={val} />
                </div>
            </div>
            <div className="Text-footer">
                <button onClick={() => {
                    unPack()
                }}>Ok</button>
            </div>
        </div>
    )
}

export default Text;