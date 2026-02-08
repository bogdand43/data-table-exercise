export interface TableRowProps {
  row: any;
  columnNames: string[];
  isSelected: boolean;
  isSelectable: boolean;
  onSelectionChange: (row: any, selected: boolean) => void;
}
