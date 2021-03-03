import { Carousel, message } from 'antd';
import React, { useState } from 'react';
import styles from './animationDemo/demo.module.css';
import {PauseCircleTwoTone} from '@ant-design/icons'
export default function RefBlog() {
    const [isPause,setIsPause] = useState(true);
    const chat =  'Bạn đã pause băng ảnh'
    const success = () => {
        message.success(chat);
      };
    return (
        <>
            <Carousel autoplay={isPause}>
                <div className="background">
                    <div>
                        
                        <img
                            src="https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-dep-nhat-the-gioi-trong-tu-nhien_041753399.jpg"
                            className="img"

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
                            src="https://www.w3schools.com/css/paris.jpg"
                            className="img"
                        />
                    </div>
                </div>
            </Carousel>
            {isPause && 
                        <PauseCircleTwoTone 
                        onClick={()=>{setIsPause(!isPause);success()}}
                        style={{cursor:'pointer',marginLeft:"50%",position:'relative'
                        ,zIndex:11,fontSize:'200%',marginTop:'5px'}}/>
                        }
            <div>
                <div className={styles.animated_title}>
                    <div className={styles.text_top}>
                        <div>
                            <span style={{color:'white'}}>Hello you</span>
                            <span style={{color:'white'}}>Welcom to</span>
                        </div>
                    </div>
                    <div className={styles.text_bottom}>
                        <div style={{color:'white'}}>My blog!</div>
                    </div>
                </div>
            </div>
        </>
    )
}