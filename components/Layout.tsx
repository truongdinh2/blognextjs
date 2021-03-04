import Head from 'next/head'
import Link from 'next/link'
import React, { ReactNode, useEffect, useState } from 'react'
import RefBlog from './Ref'
import Side from './side'
type Props = {
  children?: ReactNode
  title?: string
  pathname?: string,
  artical?: any
}
const Layout = ({ children, title = 'bloglog', pathname, artical }: Props) => {
  const [theme, setTheme] = useState<string>('dark');
  const [category, setCategory] = useState<string[]>([]);
  useEffect(() => {
    setUpData()
  }, [])
  const test = category.filter((item, index) => {
    return category.indexOf(item) === index
  })
  console.log(artical, test)
  const switchTheme = (theme: string) => {
    if (theme === 'dark') {
      setTheme('light')
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      setTheme('dark')
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }
  const setUpData = () => {
    const newArticalList = artical.map((item: any) => item.fields.Artical)
    setCategory([...category, ...newArticalList])
  }
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="http://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header style={{
        zIndex: 1,
        position: 'relative'
      }}>
        <nav>
          <span>
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
        |{' '}
          </span>
          <span>
            <Link href="/profile">
              <a>Profile me</a>
            </Link>{' '}
        |{' '}
          </span>
          {test.map((items,index)=>{
            return (
              <span key={index}>
                <Link href="/">
                  <a>{items}</a>
                </Link>{' '}|{' '}
              </span>
            )
          })}
          <span>
            <span onClick={() => switchTheme(theme)} style={{ cursor: "pointer" }}>
              {
                theme === 'dark' ?
                  <img className="switch" src="https://cdn1.iconfinder.com/data/icons/interface-59/24/brightness-light-up-day-mode-512.png" />
                  :
                  <img className="switch" src="https://cdn0.iconfinder.com/data/icons/multimedia-solid-30px/30/sun_light_mode_day-512.png" />
              }
            </span>
          </span>

        </nav>
      </header>
      {(pathname === '/' || 'hi') && <div className="demo">
        <RefBlog />
      </div>}
      <div className="main">
        <div className="container1">
          <div className="content" style={{
            display: 'flex',
            justifyContent: 'center', alignItems: 'center',
            flexDirection: 'column'
          }}>
            {children}
          </div>
        </div>
        <div className="container2">
          {pathname !== '/' &&
            <div>
              <Side />
            </div>
          }
        </div>

      </div>
      <hr />
      <div className="footer">copyright @ dinh truong</div>
    </div>
  )
}

export default Layout
