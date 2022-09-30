<div align="center"><a href="https://git-fork.vercel.app/" >
<img width=200 src="https://octodex.github.com/images/daftpunktocat-thomas.gif"/>
</a>
</div>

<div  align="center">
<h2>@simon_he/git-fork-vue</h2>
<a href="https://www.npmjs.com/package/git-fork"><img src="https://img.shields.io/npm/dm/git-fork-vue?style=social" alt="NPM version"></a>
<a href="https://github.com/Simon-He95/git-fork"><img src="https://img.shields.io/github/stars/Simon-He95/git-fork-vue?style=social" alt="NPM version"></a>
</div>

## 目的
提供一个跳转到GitHub地址的小组件 

## 灵感来源
- [github-corners](https://tholman.com/github-corners/)
- [github-ribbons](https://github.com/superhugo/github-ribbons)

## 参数
```typescript
export interface Props {
  link: string ## GitHub地址
  position: 'left' | 'right' ## 组件位置
  content: string ## 组件内容
  color: string ## 组件背景颜色
  type: 'corners' | 'ribbons' | 'trapeziumType' ## 提供3种类型的组件
}
```

## 引入
```js
import gitForkVue from "@simon_he/git-fork-vue";

```

## 使用
```html
<gitForkVue
      link="https://github.com/Simon-He95"
      type="ribbons"
      position="left"
    />
```

## :coffee: 
<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


## :question: 问题
[issues](https://github.com/Simon-He95/git-fork/issues)

## 依赖
`vue`、`unocss`、[`vite-plugin-inspector-lib-css`](https://github.com/Simon-He95/vite-plugin-Inspector-lib-css)

