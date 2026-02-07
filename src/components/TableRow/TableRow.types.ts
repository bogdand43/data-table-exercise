export interface TableRowProps {
  row: Record<string, any>;
  columnNames: string[];
  isSelected: boolean;
  isSelectable: boolean;
  onSelectionChange: (id: string, selected: boolean) => void;
}
