import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import Link from 'next/link'
import Image from 'next/image'
import styles from './card.module.scss'

import Glass from "../glass/glass"

const Card = (props) => {
  return (
    <Glass>
      <Link href={props.href}>
        <a className={styles.container}>
          <h2>{props.name}</h2>
          <p>{props.text1}</p>
          <p>{props.text2}</p>
          {/* <Image alt={props.alt} src={props.imgUrl} width={260} height={160}></Image> */}
        </a>
      </Link>
      
    </Glass>
  )
}

export default Card