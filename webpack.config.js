const path = require('path');

module.exports = 
{
    entry: './src/index.js',
    output:
    {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: 
    {
        static: 
        {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8080,
        hot: true,
    },
    mode: 'development',
    module: 
    {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 
                {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
