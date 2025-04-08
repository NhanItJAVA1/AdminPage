import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { FaEdit } from 'react-icons/fa';
import report from '../assets/report.svg';
import { FaFileImport, FaFileExport, FaPlus } from "react-icons/fa";

const columns = (handleEdit) => [
    {
        name: 'CUSTOMER NAME',
        cell: row => (
            <div className="flex items-center gap-2">
                <img
                    src={row.avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover"
                />
                <span>{row.customer_name}</span>
            </div>
        ),
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
        cell: row => {
            const statusMap = {
                0: { text: "New", className: "bg-blue-100 text-blue-600" },
                1: { text: "In-progress", className: "bg-yellow-100 text-yellow-700" },
                2: { text: "Completed", className: "bg-green-100 text-green-600" },
            };
            const status = statusMap[row.status] || { text: "Unknown", className: "bg-gray-200 text-gray-600" };

            return (
                <span className={`px-2 py-1 rounded-full text-sm font-medium ${status.className}`}>
                    {status.text}
                </span>
            );
        },
    },
    {
        name: '',
        selector: row => (
            <button
                className="btn btn-primary"
                onClick={() => handleEdit(row)}
            >
                <FaEdit size={18} />
            </button>
        ),
    },
];

function Report({ setResultCount }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [modalMode, setModalMode] = useState('edit'); // 'edit' hoặc 'add'

    useEffect(() => {
        fetch('https://67ecae53aa794fb3222e6d6e.mockapi.io/report')
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setResultCount && setResultCount(data.length);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleEdit = (row) => {
        setSelectedRow({ ...row });
        setModalMode('edit');
        setIsPopupOpen(true);
    };

    const handleAddClick = () => {
        setSelectedRow({
            customer_name: '',
            company: '',
            order_value: '',
            order_date: '',
            status: 0,
            avatar: '',
        });
        setModalMode('add');
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSave = () => {
        if (modalMode === 'edit') {
            // Update user
            fetch(`https://67ecae53aa794fb3222e6d6e.mockapi.io/report/${selectedRow.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(selectedRow),
            })
                .then((res) => res.json())
                .then((updated) => {
                    const newData = data.map((item) => (item.id === updated.id ? updated : item));
                    setData(newData);
                    setIsPopupOpen(false);
                })
                .catch((err) => {
                    console.error('Update failed:', err);
                    alert('Có lỗi xảy ra khi cập nhật!');
                });
        } else if (modalMode === 'add') {
            // Add user
            fetch('https://67ecae53aa794fb3222e6d6e.mockapi.io/report', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(selectedRow),
            })
                .then((res) => res.json())
                .then((newUser) => {
                    setData([...data, newUser]);
                    setIsPopupOpen(false);
                })
                .catch((err) => {
                    console.error('Add failed:', err);
                    alert('Có lỗi xảy ra khi thêm mới!');
                });
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="max-w-full px-4">
            <div className="flex justify-between items-center">
                <div className="flex ml-2 pt-2">
                    <img src={report} alt="report" />
                    <p className="font-bold text-[20px]">Detailed report</p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={handleAddClick}
                        className="flex items-center gap-2 border border-pink-500 text-pink-500 px-4 py-2 rounded-md hover:bg-pink-50"
                    >
                        <FaPlus />
                        Add
                    </button>
                    <button className="flex items-center gap-2 border border-pink-500 text-pink-500 px-4 py-2 rounded-md hover:bg-pink-50">
                        <FaFileImport />
                        Import
                    </button>
                    <button className="flex items-center gap-2 border border-pink-500 text-pink-500 px-4 py-2 rounded-md hover:bg-pink-50">
                        <FaFileExport />
                        Export
                    </button>
                </div>
            </div>

            <div className="pb-8">
                <DataTable
                    columns={columns(handleEdit)}
                    data={data}
                    selectableRows
                    striped
                    pointerOnHover
                    highlightOnHover
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10]}
                    noDataComponent="Không có dữ liệu"
                    customStyles={{
                        tableWrapper: {
                            style: {
                                overflowY: 'visible',
                                paddingBottom: '2rem',
                            },
                        },
                    }}
                />
            </div>


            {isPopupOpen && selectedRow && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>{modalMode === 'edit' ? 'Edit Customer' : 'Add Customer'}</h2>
                        <form>
                            <div>
                                <label>Customer Name</label>
                                <input
                                    type="text"
                                    value={selectedRow.customer_name}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, customer_name: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label>Company</label>
                                <input
                                    type="text"
                                    value={selectedRow.company}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, company: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label>Order Value</label>
                                <input
                                    type="text"
                                    value={selectedRow.order_value}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, order_value: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label>Order Date</label>
                                <input
                                    type="date"
                                    value={selectedRow.order_date}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, order_date: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label>Status</label>
                                <select
                                    value={selectedRow.status}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, status: Number(e.target.value) })
                                    }
                                >
                                    <option value={0}>New</option>
                                    <option value={1}>In-progress</option>
                                    <option value={2}>Completed</option>
                                </select>
                            </div>
                            <div>
                                <label>Avatar URL</label>
                                <input
                                    type="text"
                                    value={selectedRow.avatar}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, avatar: e.target.value })
                                    }
                                />
                            </div>
                        </form>
                        <div className="mt-4">
                            <button onClick={closePopup} className="btn btn-secondary">
                                Close
                            </button>
                            <button onClick={handleSave} className="btn btn-success ml-2">
                                {modalMode === 'edit' ? 'Save Changes' : 'Add User'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Report;
