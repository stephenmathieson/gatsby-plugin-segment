import React from 'react'
import { min as createSnippet } from '@segment/snippet'

const getSnippet = ({ writeKey }) => {
  // in development, stub out all analytics.js methods
  // this prevents "dirtying" your real analytics with local testing/traffic
  const { NODE_ENV = 'development' } = process.env
  if (NODE_ENV === 'development') {
    return `
      (function () {
        // analytics.js stub
        const analytics = window.analytics = {}
        const methods = [
          'trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview',
          'identify', 'reset', 'group', 'track', 'ready', 'alias', 'debug',
          'page', 'once', 'off', 'on'
        ]
        methods.forEach(method =>
          analytics[method] = (...args) => console.log(\`analytics.\${method}\`, ...args)
        )
      })()
    `
  }

  return createSnippet({ apiKey: writeKey, page: false })
}

export const onRenderBody = ({ setHeadComponents }, { writeKey }) => {
  const snippet = getSnippet({ writeKey })
  return setHeadComponents([
    <script key='segment-snippet' dangerouslySetInnerHTML={{ __html: snippet }} />
  ])
}
