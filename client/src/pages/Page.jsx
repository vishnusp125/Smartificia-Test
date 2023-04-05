import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Page() {

    const [details, setDetails] = useState([]);

    async function getResult() {
        const result = await axios.get("http://localhost:5000/passages/passageGet")
        setDetails(result?.data);
    }
    useEffect(() => {
        getResult()
    }, [])
    const columns = [
        {
            name: "No",
            selector: (row, i) => i + 1,
            width: "60px"
        },
        {
            name: 'Passage',
            selector: (row) => row.passage,
            sortable: true
        },
        {
            name: 'author',
            selector: (row) => row.author,
            sortable: true
        },
        {
            name: 'format',
            selector: (row) => row.format,
            sortable: true
        },
        {
            name: 'Title',
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: 'Year',
            selector: (row) => row.year,
        },
        {
            name: 'View',
            selector: (row) => {
                return (
                    <div>
                        <button key={row._id}>
                            <Link to={`/pages/${row.doc_id}/en`}>
                                English
                            </Link>
                        </button>
                        <button key={row.doc_id}>
                            <Link to={`/pages/${row.doc_id}/es`}>
                                Spanish
                            </Link>
                        </button>
                        <button key={row.doc_id}>
                            <Link to={`/pages/${row.doc_id}/fr`}>
                                French
                            </Link>
                        </button>
                        <button key={row.doc_id}>
                            <Link to={`/pages/${row.doc_id}/de`}>
                                German
                            </Link>
                        </button>
                    </div>
                );
            },
        }
    ]


    return (
        <div>
            <DataTable
                columns={columns}
                data={details}
                fixedHeader
                fixedHeaderScrollHeight="500px"
                highlightOnHover
                pagination
            />
        </div>
    )
}

export default Page