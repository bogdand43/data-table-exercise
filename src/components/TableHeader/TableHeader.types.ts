export interface ColumnDefinition {
  key: string;
  name: string;
  width?: number | string;
}

export interface TableHeaderProps {
  columnNames: string[];
}
