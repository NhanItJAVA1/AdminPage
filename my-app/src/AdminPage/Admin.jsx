import React, { useState, useEffect } from 'react';

import './Admin.css'

function Admin() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://67ecae53aa794fb3222e6d6e.mockapi.io/Overview')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
                <div className="content">
                    <div className="header">My Header</div>
                    <div className='overview'>
                        {data.map(item => (
                            <div className="card" key={item.id}>
                                <div className="left">
                                    <h3>{item.name}</h3>
                                    <h2>{item.dollars}</h2>
                                    <h5>{item.percent}%</h5>
                                </div>
                                <div className="right">
                                    <img className='icon' src={item.icon} alt={item.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer">Footer</div>
            </div>
        </div>
    );
}

export default Admin;