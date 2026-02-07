import type { CheckboxProps } from './Checkbox.types';
import React, { useEffect } from 'react';
import styles from './Checkbox.module.scss';

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  indeterminate,
  onChange,
  disabled = false,
  className = '',
}) => {
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  // "Indeterminate" is not a standard HTML attribute and needs to be set on DOM node directly
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate || false;
    }
  }, [indeterminate]);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(ev.target.checked);
    }
  };
  return (
    <label className={`${styles.CheckboxLabel} ${className || ''}`}>
      <input
        ref={checkboxRef}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={styles.Checkbox}
      />
      <span className={styles.Checkmark} />
    </label>
  );
};

export default Checkbox;
