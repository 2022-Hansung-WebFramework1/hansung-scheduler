const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
const path = require('path');

module.exports = {
    // 개발환경
    mode: 'development',

    // 애플리케이션 시작 경로
    entry: './src/index.js',

    // 번들된 파일 경로
    output: {
        filename: 'bundle.[hash].js',
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                useBuiltIns: 'entry',
                                corejs: 3
                            }],
                            "@babel/preset-react"
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                        ],
                        include: [
                            path.resolve('resources/assets/js/'),
                            path.resolve('node_modules/react-flipcard3d/src/FlipCard/index.js'),
                        ],
                        exclude: /node_modules\/(?!react-flipcard3d).+/
                    }
                }
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],

    // 개발 서버 설정
    devServer: {
        host: 'localhost',
        port: port,
        open: true, // open page when start
    },
};