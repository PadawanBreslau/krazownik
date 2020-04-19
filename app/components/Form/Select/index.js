import React from 'react'
import styles from './styles.scss';


const Select = ({
  input,
  label,
  children,
  meta: { error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <select 
        {...input}
        placeholder = {label}
        type = 'select'
        className = {`select ${error ? styles.inputError : ''}`}
      >
        {children}
      </select>
    </div>
  </div>
)

export default Select;
