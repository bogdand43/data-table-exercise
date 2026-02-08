import type { StatusIndicatorProps } from './StatusIndicator.types';
import React from 'react';
import capitalize from '../../utils/capitalize';
import { OPERATION_STATUS } from '../../utils/constants';
import styles from './StatusIndicator.module.scss';

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, className = '' }) => {
  const isAvailable = status === OPERATION_STATUS.AVAILABLE;
  const statusLabel = capitalize(status);

  return (
    <div className={`${styles.StatusContainer} ${className || ''}`}>
      {isAvailable && (
        <span
          className={styles.StatusDot}
          aria-hidden="true"
          role="presentation"
        />
      )}
      <span className={styles.StatusText}>{statusLabel}</span>
    </div>
  );
};

export default StatusIndicator;
