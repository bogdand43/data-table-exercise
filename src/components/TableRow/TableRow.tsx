import type React from 'react';
import type { TableRowProps } from './TableRow.types';
import capitalize from '../../utils/capitalize';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import styles from './TableRow.module.scss';

const TableRow: React.FC<TableRowProps> = ({ row, columnNames }) => {
  return (
    <tr className={styles.TableRow}>
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
