const path = require('path')

module.exports = {
    mode: "development",
    entry:[
        path.resolve(__dirname, "src")
    ],
    output:{
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve:{
        extensions: [".js", ".json", ".jsx"]
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                use:{
                    loader: "babel-loader",
                },
                include: path.resolve(__dirname, "src")
            },
            {
                test: /.(png|jpg|gif|svg)$/,
                loader: 'file-loader'
            }
        ]
    }
};