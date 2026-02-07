import type { StatusIndicatorProps } from './StatusIndicator.types';
import React from 'react';
import capitalize from '../../utils/capitalize';
import styles from './StatusIndicator.module.scss';

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, className = '' }) => {
  const isAvailable = status === 'available';
  const statusLabel = capitalize(status);

  return (
    <div className={`${styles.StatusContainer} ${className || ''}`}>
      {isAvailable && <span className={styles.StatusDot} aria-hidden="true" />}
      <span className={styles.StatusText}>{statusLabel}</span>
    </div>
  );
};

export default StatusIndicator;
