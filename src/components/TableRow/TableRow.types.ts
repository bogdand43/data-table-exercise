export interface TableRowProps {
  row: any;
  columnNames: string[];
  isSelected: boolean;
  isSelectable: boolean;
  onSelectionChange: (id: string, selected: boolean) => void;
}
