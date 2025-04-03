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
                <div className="header">My Header</div>
                <div className="content">
                    <div className='overview'>
                        {data.map((item, index) => {
                            let borderColor;
                            let backgroundColor;
                            if (index === 0) {
                                borderColor = '#F44B87FF';
                                backgroundColor = '#FEF0F5FF';
                            } else if (index === 1 || index === 2) {
                                borderColor = '#2B80FFFF';
                                backgroundColor = '#F0F6FFFF';
                            }

                            return (
                                <div className="card" key={item.id}
                                    style={{
                                        borderColor: borderColor,
                                        backgroundColor: backgroundColor,
                                    }}
                                >
                                    <div className="left">
                                        <h3>{item.name}</h3>
                                        <h1>
                                            {index !== 2 && <span>$</span>}
                                            {item.dollars}
                                        </h1>
                                        <h5 style={{ color: 'green' }}>🔺{item.percent} <span style={{ color: 'black' }} >% period of change</span> </h5>
                                    </div>
                                    <div className="right">
                                        <img
                                            className="icon"
                                            style={{
                                                border: `2px solid ${borderColor}`,
                                                backgroundColor: backgroundColor,
                                                padding: '2px',
                                            }}
                                            src={item.icon}
                                            alt={item.name}
                                        />
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                </div>
                <div className="footer">Footer</div>
            </div>
        </div>
    );
}

export default Admin;