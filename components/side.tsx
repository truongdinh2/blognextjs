import { FacebookFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons'
import styles from './side.module.css'

export default function Side() {
  return (
    // <Anchor>
    //   <Link href="#components-anchor-demo-basic" title="Basic demo" />
    //   <Link href="#components-anchor-demo-static" title="Static demo" />
    //   <Link href="#API" title="API">
    //     <Link href="#Anchor-Props" title="Anchor Props" />
    //     <Link href="#Link-Props" title="Link Props" />
    //   </Link>
    // </Anchor>
    <div className={styles.icon_contai}>
      <div className={styles.icon_item1}>
        <a href="#hi">
        <FacebookFilled style={{fontSize:'200%',color: 'rbg(255,0,0)'}} />
        </a>
      </div>
      <div className={styles.icon_item2}>
        <a href="#inst">
        <InstagramFilled style={{fontSize:'200%',color:"pink"}}/>
        </a>
      </div>
      <div className={styles.icon_item3}>
        <a href="#twiter">
        <TwitterCircleFilled style={{fontSize:'200%',marginBottom:'5px'}}/>
        </a>
      </div>
    </div>
  )
}