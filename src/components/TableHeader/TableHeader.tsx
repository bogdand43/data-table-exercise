import type React from 'react';
import type { TableHeaderProps } from './TableHeader.types';
import capitalize from '../../utils/capitalize';
import styles from './TableHeader.module.scss';

const TableHeader: React.FC<TableHeaderProps> = ({ columnNames }) => {
  if (columnNames.length === 0)
    return null;

  return (
    <thead>
      <tr className={styles.TableHeader}>
        {columnNames.map(columnName => (
          <th key={columnName} className={styles.TableHeaderCell}>{capitalize(columnName)}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
