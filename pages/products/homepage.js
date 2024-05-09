import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';

function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);
 
    const columns = React.useMemo(
        () => [
            {
                Header: 'SKU ID',
                accessor: 'sku_id',
            },
            {
                Header: 'Name',
                accessor: 'product_name',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Price',
                accessor: 'price',
            },
            {
                Header: 'Quantity Available',
                accessor: 'quantity_available',
            },
            {
                Header: 'Category ID',
                accessor: 'category_id',
            },
            {
                Header: 'Image',
                accessor: 'image_url',
                Cell: ({ value }) => value && <img src={value} alt="Product" style={{ maxWidth: '100px' }} />,
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: products });

    return (
        <div>
            <h1>Welcome to our website!</h1>
            <table {...getTableProps()} style={{ border: 'solid 1px blue', borderCollapse: 'collapse' }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        background: 'aliceblue',
                                        color: 'black',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                                background: 'papayawhip',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default HomePage;
