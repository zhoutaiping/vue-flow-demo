<template>
    <!-- 交叉圆圈容器：相对定位承载三个绝对定位的圆 -->
    <div class="cross-circle-container">
      <!-- 三个交叉的白色圆圈（固定3个，直径45px） -->
      <div class="cross-circle circle-1"></div>
      <div class="cross-circle circle-2"></div>
      <div class="cross-circle circle-3"></div>
    </div>
  </template>
  
  <script setup>
  // 如需保留颜色/状态控制，可保留Props（根据需求删减）
  import { defineProps } from 'vue'
  
  const props = defineProps({
      // 选中状态：蓝色边框（覆盖默认白色）
      selected: {
        type: Boolean,
        default: false
      },
      // 激活状态：红色边框+背景（优先级最高）
      active: {
        type: Boolean,
        default: false
      }
    })
  </script>
  
  <style scoped>
  /* 交叉容器：相对定位 + 适配三个圆的尺寸 */
  .cross-circle-container {
    position: relative;
    width: 75px; /* 适配三个45px圆交叉的整体宽度 */
    height: 75px; /* 适配三个45px圆交叉的整体高度 */
  }
  
  /* 核心交叉圆圈样式：直径45px + 白色基础样式 */
  .cross-circle {
    position: absolute;
    width: 45px; /* 圆圈直径45px */
    height: 45px; /* 圆圈直径45px */
    border-radius: 50%; /* 圆形核心 */
    box-sizing: border-box;
    transition: all 0.2s ease;
    border: 2px solid #ffffff;
    
  }
  
  /* 第一个圆：居中 */
  .circle-1 {
    top: 50%;
    left: 50%;
    transform: translate(-40%, -80%);
  }
  
  /* 第二个圆：左上交叉 */
  .circle-2 {
    top: 0;
    left: 0;
    transform: translate(5%, 70%); /* 偏移实现交叉效果 */
  }
  
  /* 第三个圆：右下交叉 */
  .circle-3 {
    bottom: 0;
    right: 0;
    transform: translate(20%, 4%);/* 偏移实现交叉效果 */
  }
  
  /* 选中状态：蓝色边框（覆盖白色） */
  .cross-circle-container:has(.selected) .cross-circle,
  .cross-circle.selected {
    border-color: #409eff;
    /* 若为填充圆，选中时改边框+浅蓝背景 */
    background-color: #e8f4f8;
    border: 2px solid #409eff;
  }
  
  /* 激活状态：红色边框+红色背景（优先级最高） */
  .cross-circle-container:has(.active) .cross-circle,
  .cross-circle.active {
    border-color: #f56c6c;
    background-color: #f56c6c;
  }
  </style>