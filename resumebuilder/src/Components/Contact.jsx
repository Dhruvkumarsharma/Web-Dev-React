import React,{useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
import {fieldCd, skinCodes}  from '../constants/typeCodes';
import { useHistory } from "react-router-dom";
import ResumePreview from "./ResumePreview";
function Contact() {
   let history = useHistory();
    return (
        <div className="container med contact">
        <div className="section funnel-section">
            <div className="form-card">
                <h2 className="form-heading center">Personal Details</h2>
                <div className="form-section">
                    <div className="input-group"><label>First Name</label>
                        <div className="effect"><input type="text" name={} value={}  onChange={}  /><span></span>
                        </div>
                        <div className="error"></div>
                    </div>
                    <div className="input-group"><label>Last Name</label>
                        <div className="effect"><input type="text" name={}  value={}  onChange={}/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>
                    <div className="input-group full"><label>Professional Summary</label>
                        <div className="effect"><input type="text" name={}   value={}  onChange={}/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>Email</label>
                        <div className="effect"><input type="text"  name={}  value={}  onChange={} /><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>Phone</label>
                        <div className="effect"><input type="text"  name={}   value={}  onChange={}/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>Profession</label>
                        <div className="effect"><input type="text"  name={}  value={}  onChange={}/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>
                    <div className="input-group"><label>Street</label>
                        <div className="effect"><input type="text" name={}   value={}  onChange={}/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>City</label>
                        <div className="effect"><input type="text" name={}  value={}  onChange={}/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>State</label>
                        <div className="effect"><input type="text"   name={}  value={}  onChange={} /><span></span>
                        </div>
                        <div className="error"></div>
                    </div>


                    <div className="input-group"><label>Country</label>
                        <div className="effect"><input type="text"  name={}  value={}  onChange={}/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>
                    <div className="input-group"><label>Pin Code</label>
                        <div className="effect"><input type="text" name={}  value={}  onChange={}/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}
export default Contact;