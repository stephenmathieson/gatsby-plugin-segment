# Deprecation warning / new version
Looking for a more robust and up-to-date version of this Gatsby Segment plugin?
The following plugin has a few additional features and will be kept up to date as Gatsby migrates to v2:
- [npm module](https://www.npmjs.com/package/gatsby-plugin-segment-js)
- [github repo](https://github.com/benjaminhoffman/gatsby-plugin-segment-js)

Also note this repo will be deprecated in the near future in favor of the one above.  Currently, we cannot guarantee this repo works with Gatsby v2.

# gatsby-plugin-segment

A [Gatsby](https://www.gatsbyjs.org) plugin for [Segment](https://segment.com/).

## Usage

In your `gatsby-config.js`, add:

```js
module.exports = {
  plugins: [
    // your other plugins...
    {
      resolve: 'gatsby-plugin-segment',
      options: {
        writeKey: 'YOUR WRITE KEY'
      }
    }
  ]
}
```

## License

MIT
