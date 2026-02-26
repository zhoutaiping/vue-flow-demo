<template>
  <div
    class="TextItem"
    :style="{
      position: 'absolute',
      zIndex: '10',
      borderColor: colorConfig.mainColor,
      color: colorConfig.mainColor,
      backgroundColor: status == 'error' ? 'rgba(194,70,70,0.3)' : 'rgb(33, 46, 64)',
    }"
  >
    {{ text }}
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

// 定义组件属性，支持状态切换和自定义颜色
const props = defineProps({
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

// 状态颜色映射（必须完整定义，之前缺失了这部分）
const colorConfig = computed(() => {
  switch (props.status) {
    case "active":
      return { mainColor: "#00ffff" };
    case "error":
      return { mainColor: "#ff4d4f" };
    default: // default
      return { mainColor: "#8c8c8c" };
  }
});
</script>

<style lang="scss" scoped>
/* 整体容器 */
.TextItem {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  min-height: 35px;
  color: rgba(34, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
  border: 1px solid rgba(34, 255, 255, 1);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
