import React from 'react';
import { useHistory } from 'react-router-dom';
import { skinCodes } from "../constants/typeCodes"
import './GettingStarted.css';
const GettingStarted = () => {
    let history = useHistory();
    const onChange = async (skinCode) => {
        history.push('/Contact');
    }
    return (
        <div className="container med gettingStarted">
            <div className="section">

                <h1 className="center">Select a resume template to get started</h1>
                <p className="center">
                    You’ll be able to edit and change this template later!
                </p>
            </div>
            <div className="templates">
                {
                    skinCodes.map((value, index) => {
                        return (<div key={index} className="template-card rounded-border">
                            {/* <i className={(value == props.document.skinCd ? 'selected fa fa-check' : 'hide')} ></i> */}
                            <img className='template-img' src={'/images/' + value + '.svg'} />
                            <button type="button" onClick={() => onChange(value)} className='btn-select-theme'>USE TEMPLATE</button>
                        </div>);
                    })
                }
            </div>

        </div>
    );
}

export default GettingStarted;