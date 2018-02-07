import React, { Component } from 'react'
import Head from 'next/head'
import Router from 'next/router'

import Package from '../package.json'

import Header from './header'
import Footer from './footer'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Page extends Component {
  render () {
    const {props} = this
    const headInfo = {
      title: props.title || Package.name,
      description: props.description || Package.description,
      keywords: props.keywords || Package.keywords
    }

    return (
      <div>
        <Head>
          <title>{headInfo.title}</title>
          <meta name='description' content={headInfo.description} />
          <meta name='keywords' content={headInfo.keywords} />
          <meta name='generator' content='h.yingzi' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>
        <Header />
        <div className='global-content'>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default Page
