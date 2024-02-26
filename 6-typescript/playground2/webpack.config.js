const path = require('path');

module.exports = {
    mode: 'development',
    entry: './hello.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
};


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm

// module.exports = {
//     mode: "development", // options: development, production, and none - default:production
//     entry: ".js/path/to/my/entire-file.js", // first thing to parse/compile/]bundle
//     output: { // tells webpack where to output the generated bundle(s).
//         path:path.resolve(__dirname, 'dist'),
//         filename: "my-first-webpack-bundle.js"
//     },    // where to output the file bundle
//     module: { //loaders - allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
//         rules: [{
//             test:/\.txt$/ ,
//             use:'raw-loader',
//         }]
//     },
//     plugins:[ // can be leveraged to perform a wider range of tasks like bundle optimization, asset management, and injection of environment variables.
//         new HtmlWebpackPlugin({
//             template: '.index.html'
//         })
//     ]
// }