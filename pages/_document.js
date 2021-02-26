import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    {/* <div id="fb-root"></div>
                    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&autoLogAppEvents=1&version=v10.0&appId=265278211852595" nonce="Bgyw8bEj">
                    </script> */}
                    {/* <div class="fb-comments" data-href="http://localhost:3000/" data-width="" data-numposts="5"></div> */}
                    <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=265278211852595&autoLogAppEvents=1" nonce="NADt0EJO"></script>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument