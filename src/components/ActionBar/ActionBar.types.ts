import type { CheckboxState } from '../../types';

export interface ActionBarProps {
  selectAllState: CheckboxState;
  onSelectAll: () => void;
  onDownload: () => void;
  selectedCount: number;
  hasSelection: boolean;
}
