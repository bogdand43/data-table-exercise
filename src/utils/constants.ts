const CHECKBOX_STATE = {
  CHECKED: 'checked',
  UNCHECKED: 'unchecked',
  INDETERMINATE: 'indeterminate',
} as const;

const OPERATION_STATUS = {
  AVAILABLE: 'available',
  SCHEDULED: 'scheduled',
};

export { CHECKBOX_STATE, OPERATION_STATUS };
