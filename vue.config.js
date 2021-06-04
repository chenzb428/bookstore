module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://111.229.37.167/',
                changOrigin: true,
                // pathRewrite: {
                //     '^/api': ''
                // }
            }
        },
        overlay: {
            warnings: false,
            errors: false
        }
    },
    lintOnSave: false
}