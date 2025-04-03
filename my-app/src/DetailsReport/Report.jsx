import React, { useState, useEffect } from 'react';

import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'CUSTOMER NAME',
        selector: row => row.customer_name,
    },
    {
        name: 'COMPANY',
        selector: row => row.company,
    },
    {
        name: 'ORDER VALUE',
        selector: row => row.order_value,
    },
    {
        name: 'ORDER DATE',
        selector: row => row.order_date,
    },
    {
        name: 'STATUS',
        selector: row => row.status,
    },
    {
        name: '',
        selector: row => <button className="btn btn-primary">Edit</button>,
    },
];

function Report() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch dữ liệu từ API
        fetch('https://67ecae53aa794fb3222e6d6e.mockapi.io/report')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
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
            <DataTable
                columns={columns}
                data={data}
                selectableRows
            />
        </div>
    );
}

export default
    Report;