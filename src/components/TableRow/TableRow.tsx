import type React from 'react';
import type { TableRowProps } from './TableRow.types';
import capitalize from '../../utils/capitalize';
import Checkbox from '../Checkbox/Checkbox';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import styles from './TableRow.module.scss';

const TableRow: React.FC<TableRowProps> = ({ row, columnNames, isSelected, isSelectable, onSelectionChange }) => {
  const handleCheckboxChange = (checked: boolean) => {
    onSelectionChange(row.id, checked);
  };
  return (
    <tr className={styles.TableRow}>
      <td className={styles.CheckboxCell}>
        <Checkbox
          checked={isSelected}
          onChange={handleCheckboxChange}
          disabled={!isSelectable}
        />
      </td>
      {columnNames.map((columnName: string) => {
        const cellValue = row[columnName];
        const cellStyles = `${styles.TableCell} ${styles[`Cell-${capitalize(columnName)}`] || ''}`;
        return (
          <td
            key={`row-${row.name}-${columnName}`}
            className={cellStyles}
            data-column={columnName}
            data-value={cellValue}
          >
            {
              columnName === 'status'
                ? <StatusIndicator status={cellValue} />
                : cellValue
            }
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
