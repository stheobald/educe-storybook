import NextHead from 'next/head'
import { string } from 'prop-types'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Head = props => (
  <div>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/static/images/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/images/touch-icon.png" />
      <link rel="mask-icon" href="/static/images/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/images/spiralFavicon.png" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ''} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="stylesheet" type="text/css" href="/static/css/date-picker.css" />
    </NextHead>
  </div>
)

// Head.propTypes = {
//   title: string,
//   description: string,
//   url: string,
//   ogImage: string
// }

export default Head
