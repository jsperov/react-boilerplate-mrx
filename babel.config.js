
module.exports = {
  presets: [
    'next/babel',
    '@zeit/next-typescript/babel'
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    ['transform-define', {
      'process.env.NODE_ENV': process.env.NODE_ENV
    }]
  ]
}