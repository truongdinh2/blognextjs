import React, { ReactNode } from 'react'
import Layout from '../components/Layout'
import styles from './profile.module.css'
type Props = {
    children?: ReactNode
    title?: string
    pathname?: string
    artical?: any
}
export default function Profile({ children }: Props) {
    return (
        <div>
            <Layout title="profile">
                <div className={styles.img}>
                    <div className={styles.main}>
                        <div>
                            <h2>Nguyễn Đình Trường </h2>
                        </div>
                        <div style={{display:'block'}}>{children}</div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
