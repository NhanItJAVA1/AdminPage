import React from 'react';
import './Admin.css';
import '../index.css';
import Overview from '../Overview/Overview.jsx';
import Report from '../DetailsReport/Report.jsx';

const Admin = () => {
    return (
        <div>
            <div className="container">
                <div className="menu">
                    <a href="#">Link 1</a>
                    <br />
                    <a href="#">Link 2</a>
                    <br />
                    <a href="#">Link 3</a>
                </div>
                <div className="header">My Header</div>
                <div className="content p-2">
                    <div>
                        <Overview />
                    </div>
                    <div>
                        <Report />
                    </div>
                </div>
                <div className="footer">Footer</div>
            </div>
        </div>
    )
}

export default Admin