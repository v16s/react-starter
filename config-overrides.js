const { override, fixBabelImports } = require('customize-cra')
module.exports = override(fixBabelImports('styled-jsx/babel'))
