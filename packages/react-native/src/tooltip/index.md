---
title: Tooltip - 文字提示
nav:
  title: RN组件
  path: /react-native
group:
  title: Interaction
  path: /interaction
---

# Tooltip 文字提示

## 效果演示

### 1. 默认效果

```tsx | pure
<Tooltip content="InfoInfoInfo">
  <Text variant="p0" color="primary200">
    press me
  </Text>
</Tooltip>
```

<center>
  <figure>
    <img
      alt=""
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643255311776720439.gif"
      style="width: 375px; margin-right: 10px; border: 1px solid #ddd;"
    />
  </figure>
</center>

### 2. 修改背景色

```tsx | pure
<Tooltip content="InfoInfoInfo" backgroundColor="red">
  <Text variant="p0" color="primary200">
    press me
  </Text>
</Tooltip>
```

<center>
  <figure>
    <img
      alt=""
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643255473060587128.gif"
      style="width: 375px; margin-right: 10px; border: 1px solid #ddd;"
    />
  </figure>
</center>

## API

| 属性            | 必填    | 说明               | 类型                                   | 默认值 |
| --------------- | ------- | ------------------ | -------------------------------------- | ------ |
| content         | `true`  | 提示文字           | `ReactNode`                            |        |
| onVisibleChange | `false` | 显示隐藏的回调     | `(visible: boolean) => void`           |        |
| backgroundColor | `false` | 背景颜色           | `string`                               |        |
| style           | `false` | 自定义样式         | `ViewStyle`                            |        |
| position        | `false` | tooltip 的显示位置 | 'left' \| 'top' \| 'right' \| 'bottom' | `top`  |
| caret           | `false` | 自定义样式         | `boolean`                              | `true` |
| caretPosition   | `false` | 自定义样式         | 'left' \| 'center' \| 'right'          |        |

## ref

| 属性 | 必填 | 说明         | 类型              |
| ---- | ---- | ------------ | ----------------- |
| show | -    | 显示 tooltip | show: () => void; |
| hide | -    | 关闭 tooltip | hide: () => void; |
