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
  return (
    <div className={styles.DataTableActionBar}>
      <div className={styles.SelectAllContainer}>
        <Checkbox
          checked={selectAllState === CHECKBOX_STATE.CHECKED}
          indeterminate={selectAllState === CHECKBOX_STATE.INDETERMINATE}
          onChange={onSelectAll}
        />
        <span className={styles.SelectedCount}>
          Selected
          {' '}
          {selectedCount}
        </span>

      </div>
      <div className={styles.DownloadButtonContainer}>
        <button
          disabled={!hasSelection}
          onClick={onDownload}
        >
          <img src={downloadIcon} alt="Download selected" />
          Download selected
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
