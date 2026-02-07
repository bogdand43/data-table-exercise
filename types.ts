export interface Operation {
  name:   string;
  device: string;
  path:   string;
  status: 'available' | 'scheduled';
}
