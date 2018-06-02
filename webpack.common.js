const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const HtmlWebpackInlineAssetsPlugin = require('html-webpack-inline-assets-plugin');

 
const minify = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
}

module.exports = {
   entry: {
        aktualnosci: "./src/aktualnosci.js",
        edukacja: "./src/edukacja.js",
        index: "./src/index.js",
        intranet: "./src/intranet.js",
        kolekcje: "./src/kolekcje.js",
        kontakt: "./src/kontakt.js",
        media: "./src/kontakt.js",
        onas: "./src/onas.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].bundle.js",
        publicPath: ''
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
    	rules: [
    	    {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'happypack/loader?id=js'
			},
			
            {
                test: /\.(jpg|png|svg)$/i,
                exclude: /fonts/,
                use: [
                    //'file-loader?name=[name].[ext]&outputPath=img/&useRelativePath=true',
                    'file-loader?name=[name].[ext]&useRelativePath=true',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                enabled: false,
                                progressive: false,
                                quality: 70
                            }
                        }
                    }
                ]  
            },
            
            { 
                test: /\.(woff|woff2|eot|ttf|svg)$/, 
                exclude: /img/,
                use: [
                    {
                        loader: 'url-loader?limit=100000',
                        options: {
        				    name: 'fonts/[name].[ext]'
        				}
                    }
                ]
                
            }
		]
    },
    
    devServer: {
        compress: true,
        hot: true,
        open: true,
        inline: true
    },

    plugins: [
/*
        new HappyPack({
          id: 'scss',
          threads: 4,
          loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        }),
*/

        new HappyPack({
          id: 'js',
          threads: 4,
          loaders: ['babel-loader?presets[]=env']
        }),

		new HtmlWebpackPlugin({
		    filename: 'index.html',
		    cache: false,
    		chunks: ['commons', 'index'],
            template: './src/index.html',
            minify: false
		}),
		
        new HtmlWebpackPlugin({
		    filename: 'onas.html',
		    cache: false,
    		chunks: ['commons', 'onas'],
            template: './src/onas.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'aktualnosci.html',
		    cache: false,
    		chunks: ['commons', 'aktualnosci'],
            template: './src/aktualnosci.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'aktualnosci-single.html',
		    cache: false,
    		chunks: ['commons', 'aktualnosci'],
            template: './src/aktualnosci-single.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'edukacja.html',
		    cache: false,
    		chunks: ['commons', 'edukacja'],
            template: './src/edukacja.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'kolekcje.html',
		    cache: false,
    		chunks: ['commons', 'kolekcje'],
            template: './src/kolekcje.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'kontakt.html',
		    cache: false,
    		chunks: ['commons', 'kontakt'],
            template: './src/kontakt.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'intranet.html',
		    cache: false,
    		chunks: ['commons', 'intranet'],
            template: './src/intranet.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'media.html',
		    cache: false,
    		chunks: ['commons', 'media'],
            template: './src/media.html',
            minify: false
		}),
		
		new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',        
        })
	]
};
