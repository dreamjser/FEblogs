# Web Components 详解

## 什么是 Web Components？

Web Components 是一套不同的技术，允许你创建可重用的定制元素（它们的功能封装在你的代码之外）并且在你的 web 应用中使用它们。Web Components 由三个主要技术组成：

1. Custom Elements（自定义元素）
2. Shadow DOM（影子 DOM）
3. HTML Templates（HTML 模板）

## Custom Elements（自定义元素）

Custom Elements 允许你定义自己的 HTML 元素，包括它们的样式和行为。

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    // 元素创建时的初始化代码
  }

  connectedCallback() {
    // 元素被插入到 DOM 时调用
    this.innerHTML = '<h1>Hello World!</h1>';
  }

  disconnectedCallback() {
    // 元素从 DOM 中移除时调用
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // 元素的属性发生变化时调用
  }

  static get observedAttributes() {
    // 返回需要监听的属性列表
    return ['name'];
  }
}

// 注册自定义元素
customElements.define('my-element', MyElement);
```

使用方式：
```html
<my-element name="example"></my-element>
```

## Shadow DOM

Shadow DOM 允许你将封装的"影子"DOM 树附加到元素上，并控制其关联的功能。这样你就可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。

```javascript
class ShadowElement extends HTMLElement {
  constructor() {
    super();
    // 创建影子根
    const shadow = this.attachShadow({mode: 'open'});

    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        padding: 20px;
        background: #f0f0f0;
      }
    `;

    // 创建内容
    const div = document.createElement('div');
    div.textContent = 'Shadow DOM Content';

    // 添加到影子根
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
}

customElements.define('shadow-element', ShadowElement);
```

## HTML Templates

HTML Templates 允许你声明可重用的 DOM 片段，这些片段在页面加载时不会被渲染，但可以在运行时被实例化。

```html
<template id="my-template">
  <style>
    .card {
      border: 1px solid #ccc;
      padding: 20px;
      margin: 10px;
    }
  </style>
  <div class="card">
    <h2>Card Title</h2>
    <p>Card content goes here</p>
  </div>
</template>
```

使用模板：
```javascript
class TemplateElement extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById('my-template');
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define('template-element', TemplateElement);
```

## 生命周期回调

Web Components 提供了以下生命周期回调：

1. `constructor()` - 元素创建时调用
2. `connectedCallback()` - 元素被插入到 DOM 时调用
3. `disconnectedCallback()` - 元素从 DOM 中移除时调用
4. `attributeChangedCallback()` - 元素的属性发生变化时调用
5. `adoptedCallback()` - 元素被移动到新的文档时调用

## 属性和特性

```javascript
class PropertyElement extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'age'];
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`${name} changed from ${oldValue} to ${newValue}`);
  }
}

customElements.define('property-element', PropertyElement);
```

## 事件处理

```javascript
class EventElement extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  handleClick(event) {
    console.log('Element clicked!');
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }
}

customElements.define('event-element', EventElement);
```

## 最佳实践

1. **命名规范**：
   - 自定义元素名称必须包含连字符（-）
   - 使用有意义的名称，如 `<user-profile>` 而不是 `<up>`

2. **样式封装**：
   - 使用 Shadow DOM 来封装样式
   - 使用 CSS 变量来允许外部样式定制

3. **性能优化**：
   - 延迟加载不立即需要的组件
   - 使用 `requestAnimationFrame` 处理动画

4. **可访问性**：
   - 确保组件支持键盘导航
   - 添加适当的 ARIA 属性

## 示例：创建一个完整的 Web Component

```javascript
class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'avatar', 'role'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || 'Anonymous';
    const avatar = this.getAttribute('avatar') || 'default-avatar.png';
    const role = this.getAttribute('role') || 'User';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
        }
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          max-width: 300px;
        }
        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .name {
          font-size: 1.2em;
          margin: 8px 0;
        }
        .role {
          color: #666;
        }
      </style>
      <div class="card">
        <img class="avatar" src="${avatar}" alt="${name}'s avatar">
        <div class="name">${name}</div>
        <div class="role">${role}</div>
      </div>
    `;
  }
}

customElements.define('user-card', UserCard);
```

使用方式：
```html
<user-card
  name="John Doe"
  avatar="john.jpg"
  role="Developer">
</user-card>
```

## 总结

Web Components 提供了一种强大的方式来创建可重用的、封装的组件。通过使用 Custom Elements、Shadow DOM 和 HTML Templates，你可以：

- 创建可重用的组件
- 封装样式和行为
- 避免命名冲突
- 提高代码的可维护性

随着浏览器支持的不断完善，Web Components 正在成为构建现代 Web 应用的重要工具。
