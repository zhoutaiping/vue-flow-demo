<template>
  <!-- 三角形组容器：根据布局类型适配样式 -->
  <div
    class="triangle-group"
    :class="[`layout-${layoutType}`]"
    :style="{ gap: `${gap}px` }"
  >
    <!-- 循环渲染三个三角形 -->
    <div
      v-for="(_, index) in 3"
      :key="index"
      class="triangle-item"
      :class="[
        { 'triangle-selected': selected }, // 选中状态（蓝色）
        { 'triangle-active': active }, // 激活状态（红色）
      ]"
      :style="{
        /* 控制三角形尺寸：边长决定三角形大小 */
        '--triangle-size': `${size}px`,
        /* 基础颜色：未选中/激活时的三角形颜色 */
        '--triangle-base-color': baseColor,
      }"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  size: {
    type: Number,
    default: 14,
  },
  baseColor: {
    type: String,
    default: "#5AFFFF",
  },
  layoutType: {
    type: String,
    validator: (val) => ["row", "triangle"], // 仅支持这两种布局
    default: "row",
  },
  selected: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  gap: {
    type: Number,
    default: 10,
  },
});
</script>

<style scoped>
/* 容器基础样式 */
.triangle-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 布局1：横向并排 */
.layout-row {
  flex-direction: row;
}

/* 布局2：三角排布（三个三角呈品字形） */
.layout-triangle {
  position: relative;
  width: calc(var(--triangle-size) * 2);
  height: calc(var(--triangle-size) * 2);
  flex-wrap: nowrap;
}

/* 核心：CSS画三角形（通过透明border实现） */
.triangle-item {
  /* 隐藏默认内容区域 */
  width: 0;
  height: 0;
  /* 三角形方向：默认向下（可修改border方向改变朝向） */
  border-left: calc(var(--triangle-size) / 2) solid transparent;
  border-right: calc(var(--triangle-size) / 2) solid transparent;
  border-top: var(--triangle-size) solid var(--triangle-base-color);
  transition: all 0.2s ease;
  transform: rotate(-90deg);
}

/* 三角排布的位置调整 */
.layout-triangle .triangle-item:nth-child(1) {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.layout-triangle .triangle-item:nth-child(2) {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(-50%);
}

.layout-triangle .triangle-item:nth-child(3) {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(-50%);
}

/* 选中状态：蓝色三角形 */
.triangle-selected {
  border-top-color: #5AFFFF !important;
}

/* 激活状态：红色三角形（优先级最高） */
.triangle-active {
  border-top-color: #f56c6c !important;
}

/* 可选：修改三角形朝向（比如向上/向左/向右） */
/* 向上三角：
  .triangle-item {
    border-bottom: var(--triangle-size) solid var(--triangle-base-color);
    border-top: none;
  }
  */
/* 向左三角：
  .triangle-item {
    border-right: var(--triangle-size) solid var(--triangle-base-color);
    border-left: none;
  }
  */
</style>
