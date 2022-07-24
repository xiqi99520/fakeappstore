
module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
            exclude: /node_modules/i
        }
    }
}
