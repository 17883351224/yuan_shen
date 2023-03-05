1.前端：

（1）npm i (安装模块依赖)。

若出现 npm ERR! code ERESOLVE npm ERR! ERESOLVE unable to resolve dependency tree 的错误，在新版本的 npm 中，默认情况下，npm install 遇到冲突的 peerDependencies 时将失败。

解决方案 1：npm install --legacy-peer-deps

解决方案 2：npm i npm@6 -g（降低 npm 版本）

（2）安装成功后 npm run serve 启动脚手架。

