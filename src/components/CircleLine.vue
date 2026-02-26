<template>
  <!-- 变压器/电感符号：竖线 + 两个重叠圆 + 竖线 -->
  <div
    class="circle-line"
    :style="{
      '--circle-line-color': currentColor,
      '--circle-line-bg': circleBg,
      '--circle-line-size': size,
      '--circle-line-top-height': topLineHeight,
      '--circle-line-bottom-height': bottomLineHeight,
    }"
  >
    <div class="circle-line__line-top"></div>
    <div class="circle-line__circles">
      <div class="circle-line__circle"></div>
      <div class="circle-line__circle"></div>
    </div>
    <div class="circle-line__line-bottom"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
    validator: (val) => ["primary", "error"].includes(val),
  },
  size: {
    type: String,
    default: "40px",
  },
  topLineHeight: {
    type: String,
    default: "50px",
  },
  bottomLineHeight: {
    type: String,
    default: "50px",
  },
});

const currentColor = computed(() => {
  return props.type === "primary" ? "#00e0ff" : "#FF0000";
});

const circleBg = computed(() => {
  return props.type === "primary" ? "transparent" : "#C2464630";
});
</script>

<style lang="scss" scoped>
.circle-line {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.circle-line__line-top {
  width: 1px;
  height: var(--circle-line-top-height, 12px);
  background-color: var(--circle-line-color, #00e0ff);
}

.circle-line__line-bottom {
  width: 1px;
  height: var(--circle-line-bottom-height, 12px);
  background-color: var(--circle-line-color, #00e0ff);
}

.circle-line__circles {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circle-line__circle {
  width: var(--circle-line-size, 40px);
  height: var(--circle-line-size, 40px);
  border-radius: 50%;
  border: 1px solid var(--circle-line-color, #00e0ff);
  background: var(--circle-line-bg, transparent);
  box-sizing: border-box;

  &:last-child {
    margin-top: -12px;
  }
}

.circle-line__circle:first-child {
  margin-top: 0;
}
</style>
