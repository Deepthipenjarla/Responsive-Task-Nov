import React from 'react';
import { useTable } from 'react-table';

import './table.css';

const TableComponent = () => {
  const data = React.useMemo(
    () => [
      { col1: 'Manasa', col2: 'No', col3: 'Yes', col4: 'No' },
      { col1: 'Deepthi', col2: 'Yes', col3: 'Yes', col4: 'Yes' },
      { col1: 'Prasanna', col2: 'Yes', col3: 'Yes', col4: 'Yes' },
      { col1: 'MahaSri', col2: 'No', col3: 'Yes', col4: 'No' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'NAME', accessor: 'col1' },
      { Header: 'K-HUB', accessor: 'col2' },
      { Header: 'GCC', accessor: 'col3' },
      { Header: 'NCC', accessor: 'col4' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="custom-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
