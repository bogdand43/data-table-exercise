import type { Operation } from '../../types';
import type { DataTableProps } from './DataTable.types';
import React, { useCallback, useMemo, useState } from 'react';
import { mockData } from '../../data/mock';
import { CHECKBOX_STATE } from '../../utils/constants';
import Checkbox from '../Checkbox/Checkbox';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import styles from './DataTable.module.scss';

const DataTable: React.FC<DataTableProps> = ({
  data = mockData,
  title = 'Operations',
  className = '',
}) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const columnNames = Object.keys(data[0] || {});

  // Only those that have a status of "available" are currently able to be downloaded.
  const availableRows = useMemo(() => data.filter((item: Operation) => item?.status === 'available'), [data]);
  const availableRowCount = availableRows.length;

  const availableOperations = useMemo(
    () => availableRows.map((item: Operation) => item.name),
    [availableRows],
  );

  const selectAllState = useMemo(() => {
    const selectedAvailableCount = selectedRows.filter(rowName => availableOperations.includes(rowName)).length;
    if (selectedAvailableCount === 0)
      return CHECKBOX_STATE.UNCHECKED;
    if (selectedAvailableCount === availableRowCount)
      return CHECKBOX_STATE.CHECKED;
    return CHECKBOX_STATE.INDETERMINATE;
  }, [selectedRows, availableOperations, availableRowCount]);

  const handleSelectAll = useCallback(() => {
    if (selectAllState === CHECKBOX_STATE.CHECKED) {
      setSelectedRows([]);
    }
    else {
      setSelectedRows(availableRows.map(row => row.name));
    }
  }, [availableOperations, selectAllState]);

  const selectedCount = selectedRows.length;
  const hasSelection = selectedCount > 0;

  return (
    <div className={`${styles.DataTableContainer} ${className}`}>
      <h3>{title}</h3>
      <div className="DataTableActionBar">
        <div>
          <Checkbox
            checked={selectAllState === 'checked'}
            indeterminate={selectAllState === 'indeterminate'}
            onChange={handleSelectAll}
          />
          Selected
          {' '}
          {selectedCount}
        </div>
        <div>
          <button
            className="DownloadButton"
            disabled={!hasSelection}
          >
            Download selected
          </button>
        </div>
      </div>
      <table className={styles.DataTable}>
        <TableHeader columnNames={columnNames} />
        <tbody>
          {data.map((operation: Operation, idx: number) => (
            <TableRow
              key={`operation-${operation.name}-${idx}`}
              row={operation}
              isSelected={selectedRows.includes(operation.name)}
              isSelectable={availableOperations.includes(operation.name)}
              columnNames={columnNames}
              onSelectionChange={() => {}}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
