import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

const columns = (handleEdit) => [
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
        selector: row => (
            <button
                className="btn btn-primary"
                onClick={() => handleEdit(row)}
            >
                Edit
            </button>
        ),
    },
];

function Report() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
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

    const handleEdit = (row) => {
        setSelectedRow({ ...row });
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSave = () => {
        fetch(`https://67ecae53aa794fb3222e6d6e.mockapi.io/report/${selectedRow.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedRow),
        })
            .then(res => res.json())
            .then(updated => {
                const newData = data.map(item => item.id === updated.id ? updated : item);
                setData(newData);
                setIsPopupOpen(false);
            })
            .catch(err => {
                console.error('Update failed:', err);
                alert('Có lỗi xảy ra khi cập nhật!');
            });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <DataTable
                columns={columns(handleEdit)}
                data={data}
                selectableRows
                striped
                pointerOnHover
                highlightOnHover
                pagination
                paginationComponentOptions={{
                    rowsPerPageText: '',
                    rangeSeparatorText: 'of',
                    noRowsPerPage: true,
                }}
            />

            {/* Popup */}
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Edit Customer</h2>
                        {selectedRow && (
                            <div>
                                <form>
                                    <div>
                                        <label>Customer Name</label>
                                        <input
                                            type="text"
                                            value={selectedRow.customer_name}
                                            onChange={(e) => setSelectedRow({ ...selectedRow, customer_name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label>Company</label>
                                        <input
                                            type="text"
                                            value={selectedRow.company}
                                            onChange={(e) => setSelectedRow({ ...selectedRow, company: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label>Order Value</label>
                                        <input
                                            type="text"
                                            value={selectedRow.order_value}
                                            onChange={(e) => setSelectedRow({ ...selectedRow, order_value: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label>Order Date</label>
                                        <input
                                            type="text"
                                            value={selectedRow.order_date}
                                            onChange={(e) => setSelectedRow({ ...selectedRow, order_date: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label>Status</label>
                                        <input
                                            type="text"
                                            value={selectedRow.status}
                                            onChange={(e) => setSelectedRow({ ...selectedRow, status: e.target.value })}
                                        />
                                    </div>
                                </form>
                                <div style={{ marginTop: '10px' }}>
                                    <button onClick={closePopup} className="btn btn-secondary">Close</button>
                                    <button onClick={handleSave} className="btn btn-success" style={{ marginLeft: '10px' }}>Save Changes</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Report;
