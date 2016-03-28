/**
 * Created by asher on 2016/3/28.
 */
module.exports = {
    entry: {
        'demo' : './build/demo/index.js'
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
            {test: /\.js$/, loader: 'jsx-loader?harmony'}
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