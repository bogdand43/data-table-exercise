export type Status = 'available' | 'scheduled';

export interface Operation {
  name: string;
  device: string;
  path: string;
  status: Status;
}

export type CheckboxState = 'checked' | 'unchecked' | 'indeterminate';
