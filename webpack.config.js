const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: path.resolve(
        "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    },
    // 幫助webpack輸出檔案debug   devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            // 設置一個template
            template: path.resolve(__dirname, 'public/index.html'), //set where
            filename: 'index.html'
            /*儘管有了入口檔案-entry的 JavaScript 代碼，
            仍然需要 HTML 檔案作為應用程式在瀏覽器中的入口點。HtmlWebpackPlugin 的作用就是自動生成這個 HTML 檔案，並自動注入相關的腳本和樣式檔案，以確保應用程式能夠正確加載和運行。
         */
        }),
        new CleanWebpackPlugin({
            path: path.resolve(__dirname, "build")
        })
    ],
    devServer: {//設置web sever - 在js改變後重新打包的位置
        port: 3005,
        // static: path.resolve(__dirname, 'build'),
        open: true
    },
    resolve: {
        // 加入'.ts' and '.tsx' 結尾
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // 所有有.ts和.tsx結尾的檔案都可以被awesome-typescript-loader處理
            // 不經過webpack的typescript如何運行？
            { test: /\.tsx?$/, loader: "ts-loader" },

            // 所有結尾為.js檔案會被source-map-loader處理  { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }

        ]
    },


};