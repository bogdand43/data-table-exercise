import type { Operation } from '../../types';
import type { DataTableProps } from './DataTable.types';
import React from 'react';

import { mockData } from '../../data/mock';

import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import styles from './DataTable.module.scss';

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

  return (
    <div className={`${styles.DataTableContainer} ${className}`}>
      <h3>{title}</h3>
      <table className={styles.DataTable}>
        <TableHeader columnNames={columnNames} />
        <tbody>
          {data.map((operation: Operation, idx: number) => (
            <TableRow
              key={`operation-${operation.name}-${idx}`}
              row={operation}
              columnNames={columnNames}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
