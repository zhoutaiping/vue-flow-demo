<template>
    <div class="dc-ac-icon-container" :class="[className, `status-${status}`]">
      <!-- 顶部 DC/AC 分割框 -->
      <div class="top-box">
        <div class="line"></div>
        <span class="dc-text">DC</span>
        <span class="ac-text">AC</span>
      </div>
      <!-- 中间连接竖线 -->
      <div class="connector"></div>
      <!-- 底部矩形底座 -->
      <div class="bottom-base">
        <div class="isosceles-triangle"></div>
      </div>
    </div>
  </template>

  <script setup>
  // 定义组件属性，支持状态切换和自定义颜色
  defineProps({
    // 状态切换：default(灰色)/active(青色)/error(红色)
    status: {
      type: String,
      default: 'default',
      validator: val => ['default', 'active', 'error'].includes(val)
    },
    // 外部自定义类名
    className: {
      type: String,
      default: ''
    }
  })
  </script>
  
  <style lang="scss" scoped>
  /* 整体容器 */
  .dc-ac-icon-container {
    width: 100px;
    height: 180px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;

    /* 默认状态：灰色 */
    &.status-default {
      --icon-color: #8c8c8c;
    }

    /* 激活状态：青色 */
    &.status-active {
      --icon-color: #00ffff;
    }

    /* 错误状态：红色 */
    &.status-error {
      --icon-color: #ff4d4f;
    }
  }

  /* 顶部 DC/AC 分割框 */
  .top-box {
    width: 95px;
    height: 45px;
    position: relative;
    border: 1px solid var(--icon-color);
    overflow: hidden;
    background: transparent;

    .status-error & {
      background: rgba(194, 70, 70, 0.3);
    }
  }

  /* 斜线分割线 */
  .line {
    position: absolute;
    top: -27px;
    left: -1px;
    width: 80px;
    height: 180px;
    border: 1px solid var(--icon-color);
    transform: rotate(115deg);
    transform-origin: center center;
    pointer-events: none;
  }

  /* DC 文字定位 */
  .dc-text {
    position: absolute;
    top: 65%;
    left: 12px;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: bold;
    color: var(--icon-color);
    z-index: 1;
  }

  /* AC 文字定位 */
  .ac-text {
    position: absolute;
    top: 35%;
    right: 12px;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: bold;
    color: var(--icon-color);
    z-index: 1;
  }

  /* 中间连接竖线 */
  .connector {
    width: 25px;
    height: 45px;
    border-left: 1px solid var(--icon-color);
    border-right: 1px solid var(--icon-color);
    background: transparent;
  }

  /* 底部矩形底座 */
  .bottom-base {
    width: 70px;
    height: 54px;
    border: 1px solid var(--icon-color);
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    overflow: hidden;

    .status-error & {
      background: rgba(194, 70, 70, 0.3);
    }
  }

  .isosceles-triangle {
    width: 60px;
    height: 49px;
    border: 1px solid var(--icon-color);
    transform: rotate(45deg);
    position: relative;
    top: 30px;
    left: 4px;
  }
  </style>