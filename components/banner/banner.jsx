import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Glass from '../glass/glass'
import styles from './banner.module.scss'
import Button from '../button/button.jsx'

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><strong className={styles.title1}>{props.title1}</strong> <strong className={styles.title2}>{props.title2}</strong></h1>
      <p className={styles.subTitle}>{props.text}</p>
      <Button>{props.textButton}</Button>
    </div>
  )
}

export default Banner

