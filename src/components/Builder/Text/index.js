import React from 'react';
import './text.styles.scss';

const Text = () => {
    return (
        <div className="Text">
            <div className="Text-header">
                <button className="Text-close">X</button>
            </div>
            <div className="Text-body">
                <div className="Key">
                    <input type="text" />
                </div>
                <div className="Text-spacer">
                    <h3>:</h3>
                </div>
                <div className="Value">
                    <input type="text" />
                </div>
            </div>
            <div className="Text-footer">
                <button>Ok</button>
            </div>
        </div>
    )
}

export default Text;