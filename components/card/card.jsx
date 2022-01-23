import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import Link from 'next/link'
import Image from 'next/image'

import Glass from "../glass/glass"

const Card = (props) => {
  return (
    <Glass>
      <Link href={props.href}>
        <a>
          <h2>{props.name}</h2>
          <Image alt={props.alt} src={props.imgUrl} width={260} height={160}></Image>
        </a>
      </Link>
      
    </Glass>
  )
}

export default Card