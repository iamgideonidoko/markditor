const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );

module.exports = [new ForkTsCheckerWebpackPlugin(), new CKEditorWebpackPlugin({})];
