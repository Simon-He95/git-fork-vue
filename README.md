<div align="center">
<a href="https://git-fork-vue.vercel.app/" target="_blank">
<img width="200" src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="Git Fork Vue"/>
</a>

<h1>🍴 Git Fork Vue</h1>

<p><em>Beautiful, customizable GitHub fork badges for Vue 3 applications</em></p>

<a href="https://www.npmjs.com/package/@simon_he/git-fork-vue"><img src="https://img.shields.io/npm/v/@simon_he/git-fork-vue?color=c95f8b&amp;label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@simon_he/git-fork-vue"><img src="https://img.shields.io/npm/dm/@simon_he/git-fork-vue?color=50a36f&amp;label=" alt="NPM downloads"></a>
<a href="https://github.com/Simon-He95/git-fork-vue"><img src="https://img.shields.io/github/stars/Simon-He95/git-fork-vue?color=f2d024&amp;label=" alt="GitHub stars"></a>
<a href="https://github.com/Simon-He95/git-fork-vue/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a>

<br>

<a href="https://git-fork-vue.vercel.app/" target="_blank">🌐 Live Demo</a> • 
<a href="#-quick-start">📚 Documentation</a> • 
<a href="https://github.com/Simon-He95/git-fork-react">⚛️ React Version</a>

</div>

---

## ✨ Features

🎨 **3 Beautiful Styles** - Choose from corners, ribbons, or trapezium designs  
🎯 **Flexible Positioning** - Place anywhere on your page (left/right, top/bottom)  
🌈 **Full Customization** - Custom colors, content, and styling  
⚡ **Vue 3 Ready** - Built with modern Vue 3 and TypeScript  
📱 **Responsive** - Works perfectly on all screen sizes  
🚀 **Zero Dependencies** - Lightweight and fast

## 灵感来源
- [github-corners](https://tholman.com/github-corners/)
- [github-ribbons](https://github.com/superhugo/github-ribbons)

## 🚀 Quick Start

### Installation

```bash
# npm
npm install @simon_he/git-fork-vue

# yarn  
yarn add @simon_he/git-fork-vue

# pnpm
pnpm add @simon_he/git-fork-vue
```

### Usage

```vue
<script setup>
import GitForkVue from '@simon_he/git-fork-vue'
</script>

<template>
  <!-- Basic usage -->
  <GitForkVue link="https://github.com/Simon-He95/git-fork-vue" />
  
  <!-- Customized ribbon style -->
  <GitForkVue
    link="https://github.com/Simon-He95/git-fork-vue"
    type="ribbons"
    position="left"
    content="Fork Me!"
    color="#ff6b6b"
  />
  
  <!-- Corner style with custom positioning -->
  <GitForkVue
    link="https://github.com/Simon-He95/git-fork-vue"
    type="corners"
    position="right"
    top="100px"
  />
</template>
```

## 🎨 API Reference

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `link` | `string` | **Required** | GitHub repository URL |
| `type` | `'corners' \| 'ribbons' \| 'trapeziumType'` | `'corners'` | Badge style type |
| `position` | `'left' \| 'right'` | `'right'` | Badge position |
| `content` | `string` | `'Fork me on GitHub'` | Display text |
| `color` | `string` | `'#24292e'` | Background color |
| `top` | `string` | - | Custom top positioning |
| `bottom` | `string` | - | Custom bottom positioning |

## 🎭 Style Examples

### 🔘 Corners Style
Perfect for a subtle, elegant look that doesn't interfere with your content.

### 🎀 Ribbons Style  
Eye-catching ribbons that add a playful touch to your website.

### 🔶 Trapezium Style
Modern geometric design for contemporary applications.

## 💡 Inspiration

This project was inspired by these awesome libraries:
- [github-corners](https://tholman.com/github-corners/) - Elegant corner badges
- [github-ribbons](https://github.com/superhugo/github-ribbons) - Classic ribbon designs

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/Simon-He95/git-fork-vue.git

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build the library
pnpm build

# Run tests
pnpm test
```

## 🌟 Ecosystem

| Package | Description | 
|---------|-------------|
| [@simon_he/git-fork-vue](https://github.com/Simon-He95/git-fork-vue) | Vue 3 version |
| [@simon_he/git-fork-react](https://github.com/Simon-He95/git-fork-react) | React version |

## 📄 License

[MIT](./LICENSE) License © 2024 [Simon He](https://github.com/Simon-He95)

## ☕ Support

If this project helped you, consider buying me a coffee!

<a href="https://github.com/Simon-He95/sponsor" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" >
</a>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Simon-He95/git-fork-vue/issues).

---

<div align="center">

**[⬆ Back to Top](#-git-fork-vue)**

Made with ❤️ by [Simon He](https://github.com/Simon-He95)

</div>
