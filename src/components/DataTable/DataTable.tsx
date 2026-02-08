import type { CheckboxState, Operation } from '../../types';
import type { DataTableProps } from './DataTable.types';
import React, { useCallback, useMemo, useState } from 'react';
import { mockData } from '../../data/mock';
import { CHECKBOX_STATE, OPERATION_STATUS } from '../../utils/constants';
import ActionBar from '../ActionBar/ActionBar';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import styles from './DataTable.module.scss';

const DataTable: React.FC<DataTableProps> = ({
  data = mockData,
  title = 'Operations',
  className = '',
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const columnNames = Object.keys(data[0] || {});

  // Only those that have a status of "available" are currently able to be downloaded.
  const availableRows = useMemo(() => data.filter((item: Operation) => item?.status === OPERATION_STATUS.AVAILABLE), [data]);
  const availableRowCount = availableRows.length;
  const availableOperations = useMemo(
    () => new Set(availableRows.map((item: Operation) => item.name)),
    [availableRows],
  );

  const selectAllState: CheckboxState = useMemo(() => {
    const selectedAvailableCount = Array.from(selectedRows).filter(rowName => availableOperations.has(rowName)).length;
    if (selectedAvailableCount === 0)
      return CHECKBOX_STATE.UNCHECKED;
    if (selectedAvailableCount === availableRowCount)
      return CHECKBOX_STATE.CHECKED;
    return CHECKBOX_STATE.INDETERMINATE;
  }, [selectedRows, availableOperations, availableRowCount]);

  // individual row selection handler
  const handleRowSelection = useCallback(({ name: rowName }: Operation, selected: boolean) => {
    setSelectedRows((prevSelected) => {
      const next = new Set(prevSelected);
      if (selected) {
        next.add(rowName);
      }
      else {
        next.delete(rowName);
      }
      return next;
    });
  }, []);

  const handleSelectAll = useCallback(() => {
    if (selectAllState === CHECKBOX_STATE.CHECKED) {
      setSelectedRows(new Set());
    }
    else {
      setSelectedRows(new Set(availableOperations));
    }
  }, [availableOperations, selectAllState]);

  const handleDownload = useCallback(() => {
    const selectedItems = data.filter((item: Operation) => selectedRows.has(item.name));

    if (selectedItems.length === 0) {
      // eslint-disable-next-line no-alert
      alert('No items selected for download');
      return;
    }

    const downloadInfo = selectedItems
      .map((item: Operation) => `Device: ${item.device}\nPath: ${item.path}`)
      .join('\n\n');

    // eslint-disable-next-line no-alert
    alert(`Downloading ${selectedItems.length} item(s):\n\n${downloadInfo}`);
  }, [data, selectedRows]);

  const selectedCount = selectedRows.size;
  const hasSelection = selectedCount > 0;

  return (
    <div className={`${styles.DataTableContainer} ${className}`}>
      <h3>{title}</h3>
      <ActionBar
        onSelectAll={handleSelectAll}
        onDownload={handleDownload}
        selectAllState={selectAllState}
        selectedCount={selectedCount}
        hasSelection={hasSelection}
      />
      <table className={styles.DataTable}>
        <TableHeader columnNames={columnNames} />
        <tbody>
          {data.map((operation: Operation, idx: number) => (
            <TableRow
              key={`operation-${operation.name}-${idx}`}
              row={operation}
              isSelected={selectedRows.has(operation.name)}
              isSelectable={availableOperations.has(operation.name)}
              columnNames={columnNames}
              onSelectionChange={handleRowSelection}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
