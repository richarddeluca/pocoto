import styles from './button.module.scss'

const Button = (props) => {
  return (
    <button onClick={(e) => {
      e.preventDefault();
      window.location.href='/';
      }} className={styles.button}>{props.children}</button>
  )
}

export default Button