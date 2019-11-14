# webpack-react-template-app

> 基于 React 以 webpack 为打包工具的模板项目

## 项目结构

.
├── LICENSE
├── README.md
├── dist
│   ├── bundle.js
│   └── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.js
│   ├── App.less
│   ├── components
│   │   ├── Button
│   │   │   ├── index.js
│   │   │   └── index.less
│   │   └── Layout
│   │       ├── Content
│   │       │   ├── index.js
│   │       │   └── index.less
│   │       ├── Footer
│   │       │   ├── index.js
│   │       │   └── index.less
│   │       ├── Header
│   │       │   ├── index.js
│   │       │   └── index.less
│   │       ├── index.js
│   │       └── index.less
│   ├── index.html
│   ├── index.js
│   ├── pages
│   │   ├── Page1
│   │   │   └── index.js
│   │   └── Page2
│   │       └── index.js
│   ├── request
│   │   └── index.js
│   └── utils
│       └── index.js
└── webpack.config.js

13 directories, 25 files

## 使用

- 克隆 `git clone git@github.com:GitHubJiKe/webpack-react-template-app.git`
- 安装依赖 `npm i`
- 本地运行 `npm start`
- 打测试包 `npm run build:dev`
- 打正式包 `npm run build:prod`

## 配套

- 路由 `react-router, react-route-dom, history`
- 请求 `async await, promise, axios`
