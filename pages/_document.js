import Document, { Head, Main, NextScript } from 'next/document'
import stylesheet from '../static/base.css'

export default class extends Document {
  render () {
    return (
      <html>
        <Head>
          {process.env.NODE_ENV === 'production'
            ? <link
              rel='stylesheet'
              type='text/css'
              href={`/static/base.css?${this.props.__NEXT_DATA__
                  .buildStats['app.js'].hash.slice(0, 6)}`}
              />
            : <style
              global
              dangerouslySetInnerHTML={{
                __html: stylesheet
              }}
              />}
        </Head>
        <body>
          <Main className='huiyizhuo' />
          <NextScript />
        </body>
      </html>
    )
  }
}
