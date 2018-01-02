const { NODE_ENV = 'development' } = process.env

export const onRouteUpdate = ({ location }) => {
  if (!window.analytics || typeof window.analytics.page !== 'function') {
    if (NODE_ENV === 'development') {
      console.warn('Unable to locate analytics.js')
    }
    return
  }

  window.analytics.page({
    path: location.pathname,
    url: location.href,
  })
}
