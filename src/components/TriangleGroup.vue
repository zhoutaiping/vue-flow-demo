<template>
  <div
    class="triangle-group"
    :class="[`layout-${layoutType}`, `gap-${gap}`]"
  >
    <div
      v-for="(_, index) in 3"
      :key="index"
      class="triangle-item"
      :class="[
        { 'triangle-selected': selected },
        { 'triangle-active': active },
        `size-${size}`
      ]"
    />
  </div>
</template>

<script setup>
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
    validator: () => ["row", "triangle"],
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
  flex-wrap: nowrap;

  /* 尺寸变体 */
  &.gap-10 {
    width: 28px;
    height: 28px;
  }

  &.gap-12 {
    width: 34px;
    height: 34px;
  }

  &.gap-14 {
    width: 40px;
    height: 40px;
  }
}

/* Gap 变体 */
.gap-10 {
  gap: 10px;
}

.gap-12 {
  gap: 12px;
}

.gap-14 {
  gap: 14px;
}

/* 核心：CSS画三角形（通过透明border实现） */
.triangle-item {
  width: 0;
  height: 0;
  border-left: calc(var(--triangle-size) / 2) solid transparent;
  border-right: calc(var(--triangle-size) / 2) solid transparent;
  border-top: var(--triangle-size) solid var(--triangle-base-color);
  transition: border-top-color var(--transition-base);
  transform: rotate(-90deg);

  /* 尺寸变体 */
  &.size-14 {
    --triangle-size: 14px;
  }

  &.size-16 {
    --triangle-size: 16px;
  }

  &.size-18 {
    --triangle-size: 18px;
  }

  &.size-20 {
    --triangle-size: 20px;
  }
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
