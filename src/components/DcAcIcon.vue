<template>
    <div class="dc-ac-icon-container" :class="className" :style="{ borderColor: colorConfig.mainColor }">
      <!-- 顶部 DC/AC 分割框 -->
      <div class="top-box" :style="{ borderColor: colorConfig.mainColor, backgroundColor:status == 'error' ?'rgba(194,70,70,0.3)' :''  }">
        <div class="line" :style="{ borderColor: colorConfig.mainColor }"></div>
        <span class="dc-text" :style="{ color: colorConfig.mainColor }">DC</span>
        <span class="ac-text" :style="{ color: colorConfig.mainColor }">AC</span>
      </div>
      <!-- 中间连接竖线 -->
      <div class="connector" :style="{ borderColor: colorConfig.mainColor }"></div>
      <!-- 底部矩形底座 -->
      <div class="bottom-base" :style="{ borderColor: colorConfig.mainColor, backgroundColor: status == 'error' ?'rgba(194,70,70,0.3)' :''  }">
        <div class="isosceles-triangle" :style="{ borderColor: colorConfig.mainColor }"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue'
  
  // 定义组件属性，支持状态切换和自定义颜色
  const props = defineProps({
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
  
  // 状态颜色映射（必须完整定义，之前缺失了这部分）
  const colorConfig = computed(() => {
    switch (props.status) {
      case 'active':
        return { mainColor: '#00ffff' }
      case 'error':
        return { mainColor: '#ff4d4f' }
      default: // default
        return { mainColor: '#8c8c8c' }
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
  }
  
  /* 顶部 DC/AC 分割框 */
  .top-box {
    width: 95px;
    height: 45px;
    position: relative;
    border: 1px solid;
    overflow: hidden;
    background: transparent;
  }
  
  /* 斜线分割线（核心修复：补充完整样式） */
  .line {
    position: absolute;
    top: -27px;
    left: -1px;
    width: 80px;
    height: 180px;
    border: 1px solid;
    transform: rotate(115deg);
    transform-origin: center center;
    pointer-events: none; /* 避免遮挡文字点击 */
  }
  
  /* DC 文字定位 */
  .dc-text {
    position: absolute;
    top: 65%;
    left: 12px;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: bold;
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
    z-index: 1;
  }
  
  /* 中间连接竖线 */
  .connector {
    width: 25px;
    height: 45px;
    border-left: 1px solid ;
    border-right: 1px solid ;
    background: transparent;
  }
  
  /* 底部矩形底座 */
  .bottom-base {
    width: 70px;
    height: 54px;
    border: 1px solid ;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    overflow: hidden;
  }

  .isosceles-triangle {
    width: 60px;
    height: 49px;
    border: 1px solid;
    transform: rotate(45deg);
    position: relative;
    top: 30px;
    left: 4px;
    }
  </style>