import Head from 'next/head'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import RefBlog from './Ref'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'bloglog' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="http://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
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
        <span>
          <Link href="/gop-y">
            <a>Góp ý</a>
          </Link>{' '}
        |{' '}
        </span>
        {/* <span>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
        |{' '}
        </span>
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a> */}
      </nav>
    </header>
    <div className="demo">
      <RefBlog/>
    </div>
    <div className="main">
      <div className="container1">
        <div className="content">
          1{children}
        </div>
      </div>
      <div className="container2">2</div>

    </div>

    <hr />
    <div className="footer">copyright @ dinh truong</div>
  </div>
)

export default Layout
