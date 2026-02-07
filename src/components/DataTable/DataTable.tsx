import type { Operation } from '../../types/Operation';
import React from 'react';
import { mockData } from '../../data/mock';
import capitalize from '../../utils/capitalize';

interface DataTableProps {
  data?: Operation[];
  title?: string;
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  data = mockData,
  title = 'Operations',
  className = '',
}) => {
  const getColumnNames = (data: Operation[]): string[] => {
    if (data.length === 0)
      return [];
    return Object.keys(data[0]);
  };

  const columnNames = getColumnNames(data);
  const tableClassName = `DataTable ${className}`;

  return (
    <div className="DataTableContainer">
      <h3>{title}</h3>
      <table className={tableClassName}>
        <thead>
          <tr className="DataTableHeader">
            {columnNames.map(columnName => (
              <th key={columnName} className="DataTableHeaderCell">{capitalize(columnName)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((operation: Operation, idx: number) => (
            <tr key={`${operation.name}-${idx}`}>
              {columnNames.map((columnName: string) => (
                <td key={`operation-${operation.name}-${columnName}`}>{operation[columnName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
