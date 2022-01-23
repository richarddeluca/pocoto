import styles from './glass.module.scss'

const Glass = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default Glass