const { override, fixBabelImports, addLessLoader } = require('customize-cra')
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnbled: true,
        modifyVars: { '@primary-color': '#1DA57A' }

    })
);