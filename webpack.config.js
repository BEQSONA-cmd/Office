const path = require('path');

module.exports = {
    entry: './src/index.js',  // Entry point of your app
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // Serve static files from the public folder
        },
        port: 8080,  // Port where your server will run
        open: true,  // Automatically open browser
        hot: true,   // Enable hot module replacement
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // Transform JS files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',  // Use Babel to transpile modern JS
                },
            },
        ],
    },
};
