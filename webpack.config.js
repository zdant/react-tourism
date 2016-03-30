module.exports = {
    entry: {
        'demo' : './build/demo/demo.js'
    },
    output: {
        path: './release/dist',
        filename: '[name].build.js'
    },
    resolve: {
        extensions: ['', '.Webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader?harmony'},
            {test: /\.sass$/,loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'}
        ]
    },
    externals: {
        'react' : 'React',
        'redux' : 'Redux',
        'react-router' : 'ReactRouter',
        'react-redux' : 'ReactRedux',
        'redux-thunk' : 'ReduxThunk',
        'redux-logger' : 'reduxLogger'
    }
};