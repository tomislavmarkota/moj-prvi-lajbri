import React from 'react'
import styles from './styles.module.css'
import TransformToUppercase from './TransformToUppercase'
export default TransformToUppercase
export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
