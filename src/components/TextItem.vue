<template>
  <div class="TextItem" :class="`status-${status}`">
    {{ text }}
  </div>
</template>

<script setup>
// 定义组件属性，支持状态切换和自定义颜色
defineProps({
  text: {
    type: String,
    default: "",
  },
  // 状态切换：default(灰色)/active(青色)/error(红色)
  status: {
    type: String,
    default: "default",
    validator: (val) => ["default", "active", "error"].includes(val),
  },
});
</script>

  <style lang="scss" scoped>
/* 整体容器 */
.TextItem {
  position: absolute;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  min-height: 35px;
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
  border: 1px solid;
  background-color: rgb(33, 46, 64);

  /* 默认状态：灰色 */
  &.status-default {
    --text-color: #8c8c8c;
    --border-color: #8c8c8c;
  }

  /* 激活状态：青色 */
  &.status-active {
    --text-color: #00ffff;
    --border-color: #00ffff;
  }

  /* 错误状态：红色 */
  &.status-error {
    --text-color: #ff4d4f;
    --border-color: #ff4d4f;
    background-color: rgba(194, 70, 70, 0.3);
  }

  color: var(--text-color);
  border-color: var(--border-color);

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
  </style>
