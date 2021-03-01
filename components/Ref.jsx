import { Carousel } from 'antd';
import Image from 'next/image';
import React from 'react'
const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function RefBlog() {
    return (
        <Carousel >
            <div>
                <Image
                    src="/anhnen1.jpg"
                    alt="anh1"
                    sizes="100vw"
                    // layout="fill"
                    width={1000}
                    height={400}
                    quality="100"
                    priority={true}
                />

            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )
}