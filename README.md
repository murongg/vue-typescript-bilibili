# Vue3 + Typescript 仿 Bilibili 首页

## 一、创建项目

运行命令：

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

添加 **Typescript**：

```bash
vue add typescript
```

根据以下选项进行创建：

```bash
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfi
lls, transpiling JSX)? Yes
? Convert all .js files to .ts? Yes
? Allow .js files to be compiled? Yes
? Skip type checking of all declaration files (recommended for apps)? Yes
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
import 'normalize.css'

createApp(App).mount("#app");
```

### 3、删除项目无用代码，为接下来的开发做准备

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

