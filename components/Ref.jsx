import { Carousel } from 'antd';
import Image from 'next/image';
import React from 'react';
import styles from './animationDemo/demo.module.css'
const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function RefBlog() {
    return (
        <>
            <Carousel autoplay>
                <div className="background">
                    <div>
                        <img
                            className="img"
                            src="https://www.w3schools.com/css/paris.jpg"

                        />
                    </div>
                </div>
                <div className="background">
                    <div>
                        <img
                            className="img"
                            src="https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-bien-dep-nhat-the-gioi_041753649.jpg"
                        />
                    </div>
                </div>
                <div className="background">
                    <div>
                        <img
                            className="img"
                            src="https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-dep-nhat-the-gioi-ve-thien-nhien_041753462.jpg"
                        />
                    </div>
                </div>
                <div className="background">
                    <div>

                        <img
                            className="img"
                            src="https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-dep-nhat-the-gioi-trong-tu-nhien_041753399.jpg"
                        />
                    </div>
                </div>
            </Carousel>
            <div>
                <div className={styles.animated_title}>
                    <div className={styles.text_top}>
                        <div>
                            <span>Hello you</span>
                            <span>Welcom to</span>
                        </div>
                    </div>
                    <div className={styles.text_bottom}>
                        <div>My blog!</div>
                    </div>
                </div>
            </div>
        </>
    )
}