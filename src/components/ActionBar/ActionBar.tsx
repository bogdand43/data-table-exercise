import type { ActionBarProps } from './ActionBar.types';
import React from 'react';
import downloadIcon from '../../assets/download.svg';
import { CHECKBOX_STATE } from '../../utils/constants';
import Checkbox from '../Checkbox/Checkbox';

import styles from './ActionBar.module.scss';

const ActionBar: React.FC<ActionBarProps> = ({
  selectAllState,
  onSelectAll,
  onDownload,
  selectedCount,
  hasSelection,
}) => {
  const selectedLabel = selectedCount > 0 ? `Selected ${selectedCount}` : 'None Selected';

  return (
    <div className={styles.DataTableActionBar}>
      <div className={styles.SelectAllContainer} aria-live="polite">
        <Checkbox
          checked={selectAllState === CHECKBOX_STATE.CHECKED}
          indeterminate={selectAllState === CHECKBOX_STATE.INDETERMINATE}
          onChange={onSelectAll}
          tabIndex={0}
        />
        <span className={styles.SelectedCount}>
          {selectedLabel}
        </span>

      </div>
      <div className={styles.DownloadButtonContainer}>
        <button
          disabled={!hasSelection}
          onClick={onDownload}
          aria-disabled={!hasSelection}
          aria-label={`Download ${selectedCount} selected ${selectedCount === 1 ? 'item' : 'items'}`}
        >
          <img src={downloadIcon} alt="Download selected" />
          Download selected
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
