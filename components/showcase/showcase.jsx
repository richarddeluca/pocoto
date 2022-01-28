import styles from './showcase.module.scss'

const Showcase = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default Showcase