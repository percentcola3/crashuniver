/** @type {import('@rspack/cli').Configuration} */
const path = require('path');

const getConfig = (mode = 'development', devServer) => {
    const srcPath = path.resolve(__dirname, '../src');
    const nodeModulesPath = path.resolve(__dirname, '../node_modules');
    const pnmpModulesPath = path.resolve(__dirname, '../../../node_modules');
    console.log(path.resolve(__dirname, '../deploy'));
    const {
        PUBLIC_URL,

    } = process.env;

    return {
        entry: {
            main: path.join(srcPath, 'index.tsx'),
        },
        devtool: 'source-map', // 报错的时候在控制台输出哪一行报错
        output: {
            path: path.resolve(__dirname, '../build/erp'), // 将打包好的文件放在此路径下，dev模式中，只会在内存中存在，不会真正的打包到此路径
            publicPath: PUBLIC_URL || '/', // 文件解析路径，index.html中引用的路径会被设置为相对于此路径
            filename: '[name]-[contenthash].js', // 编译后的文件名字
        },
        mode,
        optimization: {
            minimize: false,
            removeAvailableModules: false,
            removeEmptyChunks: false,
            sideEffects: false,
            splitChunks: {
                // maxSize: 10 * 1024,
                cacheGroups: {
                    lib: {
                        chunks: 'all',
                        test: /\/(roo|react|react-dom)\//,
                        priority: 21,
                    },
                  

                    commonLib: {
                        minChunks: 10,
                        chunks: 'async',
                        test: /[\/]node_modules[\/]/,
                        priority: 19,
                        reuseExistingChunk: true,
                    },
                    defaultVendors: {
                        minChunks: 2,
                        chunks: 'async',
                        test: /[\/]node_modules[\/]/,
                        priority: 18,
                        reuseExistingChunk: true,
                    },
                    default: {
                        chunks: 'async',
                        minChunks: 2,
                        priority: 17,
                        reuseExistingChunk: true,
                    },
                },
            },
        },
        target: ['web', 'es5'],
        module: {
            rules: [
                {
                    test: /\.tsx?$/i,
                    include: [
                        srcPath,
                        path.resolve(__dirname, '../../foundation'),
                        path.join(__dirname, '../../analysis'),
                    ],
                    exclude: [nodeModulesPath, pnmpModulesPath],
                },
                {
                    test: /\.jsx?$/i,
                    include: [
                        srcPath,
                        path.resolve(__dirname, '../../foundation'),
                        path.join(__dirname, '../../analysis'),
                    ],
                    exclude: [nodeModulesPath, pnmpModulesPath],
                },
                {
                    test: /\.js?$/i,
                    include: [
                        srcPath,
                        path.resolve(__dirname, '../../foundation'),
                        path.join(__dirname, '../../analysis'),
                    ],
                    exclude: [
                        nodeModulesPath,
                        pnmpModulesPath,
                        path.resolve(__dirname, '../deploy'),
                    ],
                    type: 'javascript/auto',
                },
        
            ],
        },
        builtins: {
            progress: true,
            react: {
                runtime: 'classic',
            },
           
            minifyOptions: {
                dropConsole: mode !== 'development',
            },
   
            decorator: { legacy: true },
            html: [
                {
                    template: path.join(srcPath, '/tpl/index.ejs'), //html模板路径
                    templateParameters: {
                        AWP_DEPLOY_ENV: process.env.AWP_DEPLOY_ENV
                            ? `'${process.env.AWP_DEPLOY_ENV}'`
                            : "'dev'",
                        upgrade_http: process.env.AWP_DEPLOY_ENV === 'production' ? 'show' : '',
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx', '.less', '.css'], //后缀名自动补全     
            fallback: {
                'react/jsx-runtime': 'react/jsx-runtime.js',
                'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
            },
            modules: [nodeModulesPath, 'node_modules'],
        },
        devServer,
    };
};
module.exports = getConfig;
