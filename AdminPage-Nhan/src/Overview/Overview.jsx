import React, { useState, useEffect } from 'react';
import OverviewImage from '../assets/Overview.png';
const Overview = () => {
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
            <div className="flex ml-2 pt-2">
                <img src={OverviewImage} alt="Overview" />
                <p className='font-bold text-[20px]'>Overview</p>
            </div>
            <div className='flex justify-between  ml-2 pt-2'>
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
                        <div className="w-75 flex rounded-lg border-1 border-solid border-[#F44B87FF] p-2" key={item.id}
                            style={{
                                borderColor: borderColor,
                                backgroundColor: backgroundColor,
                            }}
                        >
                            <div className="text-left w-full">
                                <li className='inline '>
                                    <ul>{item.name}</ul>
                                    <ul className='font-bold text-3xl'>{index !== 2 && <span>$</span>}
                                        {item.dollars}</ul>
                                    <ul style={{ color: 'green' }}>🔺{item.percent}<span style={{ color: 'black' }} >% period of change</span></ul>
                                </li>
                            </div>
                            <div className="inline-block">
                                <img
                                    className="w-[32px] rounded-md border-1 border-solid border-[#F44B87FF]"
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
    );
}

export default Overview