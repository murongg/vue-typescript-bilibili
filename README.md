# Vue3 + Typescript 仿 Bilibili 首页

## 一、创建项目

运行命令：

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

创建项目，执行命令：

```bash
vue create bilibili
```

根据以下选项进行创建：

```bash
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Linter
? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```



添加 **Typescript**，执行命令：

```bash
vue add typescript
```

根据以下选项进行创建：

```bash
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Convert all .js files to .ts? Yes
? Allow .js files to be compiled? Yes
? Skip type checking of all declaration files (recommended for apps)? Yes
```

添加 **vue-router**，执行命令：

```
vue add router
```

添加 **vuex**，执行命令：

```
vue add vuex
```

至此，项目创建完成。

## 二、项目代码介绍以及初始化项目配置

### 1、目录结构

```
└─bilibili													项目根目录
  └─public													静态资源文件
  └─src															项目主目录
    ├─components										组件封装
    ├─assets												css、图片等资源文件
    ├─utils.ts											工具文件
    ├─App.vue												入口组件
    ├─main.ts												入口文件
    ├─shims-vue.d.ts								全局声明文件
  ├─.browserslistrc									设置浏览器的兼容
  ├─.eslintrc.js										eslint配置文件
  ├─babel.config.js									babel配置文件
  ├─README.md												项目read me
  ├─tsconfig.json										typescript配置文件
```



### 2、为项目添加 Normalize.css

官网对 normalize.css 的介绍

> [Normalize.css](https://github.com/necolas/normalize.css/) makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.
>
> 中文翻译：Normalize.css使浏览器更一致地渲染所有元素，并符合现代标准。它只针对需要规范化的样式。

安装：

```bash
npm install normalize.css
# or
yarn add normalize.css
```

在 src/main.ts 内引入：

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
```

### 3、为项目添加 less css 预处理器

执行命令：

```bash
npm install less less-loader
# or
yarn add less less-loader
```

在 assets/css 文件夹下创建：index.less、mixins.less、variables.less 以作备用，并在 index.less 文件内引入 mixins.less、variables.less，代码如下：

```less
@import "./variables.less";
@import "./mixins.less";
```

### 4、删除项目无用代码，为接下来的开发做准备

修改 App.vue 文件，并删除 components 目录下的 Helloword.vue 文件，与 assets 目录下的 logo.png 文件。

修改后的 App.vue 文件

```vue
<template>
  myapp
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>
```

### 5、添加 iconfont

Iconfont 字体图标文件我已准备好，下载后将所有文件放入 assets/iconfont 文件夹内即可，同时在 main.ts 内引入：

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/assets/iconfont/iconfont.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
```

### 6、为项目添加 rem 适配

执行命令：

```bash
npm install lib-flexible postcss-px2rem-exclude
# or
yarn add lib-flexible postcss-px2rem-exclude
```

安装完成后，在 main.ts 引入 `lib-flexible`，代码如下：

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "lib-flexible";
import "@/assets/iconfont/iconfont.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
```

在根目录新建 vue.config.ts 文件，在文件内添加如下代码：

```typescript
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem-exclude")({
            remUnit: 75, // 换算的基数
            exclude: /node_modules|folder_name/i // 排除无需转换的文件夹
          })
        ]
      }
    }
  },
}
```

