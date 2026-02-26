<template>
  <div class="collapse-table-container" :class="className">
    <!-- 左侧折叠触发器 -->
    <div class="collapse-trigger" v-show="!isExpanded" @click="toggleExpand">
      <span class="trigger-title">{{ triggerTitle }}</span>
      <span class="trigger-arrow" :class="{ expanded: isExpanded }">▼</span>
    </div>

    <!-- 右侧折叠表格 -->
    <table class="power-table" v-if="isExpanded">
      <thead>
        <tr>
          <th class="table-header-label" @click="toggleExpand">
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
              "
            >
              <span class="label">{{ tableTitle }}</span>
              <span class="trigger-arrow" :class="{ expanded: isExpanded }"
                >▼</span
              >
            </div>
          </th>
          <th class="table-header-value" v-for="col in columns" :key="col">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataList" :key="index">
          <td class="table-label table-label-title">{{ item.name }}</td>
          <td class="table-value" v-for="col in columns" :key="col">
            {{ item[col] || "-" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 定义组件属性
const props = defineProps({
  // 左侧折叠触发器标题
  triggerTitle: {
    type: String,
    default: "逆变器列表",
  },
  // 右侧表格标题
  tableTitle: {
    type: String,
    default: "逆变器列表",
  },
  // 表格列名
  columns: {
    type: Array,
    default: () => ["有功功率", "无功功率", "计量电量"],
  },
  // 表格数据
  dataList: {
    type: Array,
    default: () => [
      { name: "曼德电子逆变器001", 有功功率: "", 无功功率: "", 计量电量: "" },
      { name: "曼德电子逆变器002", 有功功率: "", 无功功率: "", 计量电量: "" },
      { name: "曼德电子逆变器003", 有功功率: "", 无功功率: "", 计量电量: "" },
    ],
  },
  // 外部自定义类名
  className: {
    type: String,
    default: "",
  },
  // 颜色自定义
  titleColor: {
    type: String,
    default: "#00ffff",
  },
  labelColor: {
    type: String,
    default: "#ff00ff",
  },
  borderColor: {
    type: String,
    default: "#00ffff",
  },
  lineColor: {
    type: String,
    default: "#ff4d4f",
  },
  bgColor: {
    type: String,
    default: "#1a1a2e",
  },
}); // 添加动态样式绑定
const containerStyle = computed(() => ({
  "--title-color": props.titleColor,
  "--label-color": props.labelColor,
  "--border-color": props.borderColor,
  "--line-color": props.lineColor,
  "--bg-color": props.bgColor,
}));

// 折叠状态
const isExpanded = ref(false);

// 切换折叠/展开
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

// 动态计算样式
const styleConfig = computed(() => ({
  "--title-color": props.titleColor,
  "--label-color": props.labelColor,
  "--border-color": props.borderColor,
  "--line-color": props.lineColor,
  "--bg-color": props.bgColor,
}));
</script>

<style lang="scss" scoped>
/* 容器样式 */
.collapse-table-container {
  display: flex;
  align-items: flex-start;
  background: var(--bg-color);
  position: relative;
  padding: 8px 0;
  gap: 16px;
}

/* 折叠触发器 */
.collapse-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 4px 8px;
  border: 1px solid var(--border-color);
  background: var(--bg-color);
  border-radius: 2px;
  color: rgba(34, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
  border: 1px solid rgba(34, 255, 255, 1);
}

.trigger-title {
  color: var(--title-color);
  font-size: 14px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
}

.trigger-arrow {
  color: var(--title-color);
  font-size: 12px;
  transition: transform 0.2s ease;
}

.trigger-arrow.expanded {
  transform: rotate(180deg);
}

/* 动态连接线 */
.connect-line {
  position: absolute;
  top: 24px;
  left: 80px;
  right: 16px;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    var(--line-color),
    var(--line-color) 4px,
    transparent 4px,
    transparent 8px
  );
  z-index: 1;
}

/* 核心表格样式 */
.power-table {
  border-collapse: collapse;
  z-index: 2;
  min-width: 480px;
  animation: fadeIn 0.2s ease;
  th {
    border: 1px solid #eff0f2;
  }
  td {
    border: 1px solid #eff0f2;
  }
}

/* 表头 */
.table-header-label {
  color: rgba(34, 255, 255, 1);
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  text-align: left;
  .label {
    &:hover {
      text-decoration: underline;
    }
  }
}

.table-header-value {
  color: rgba(247, 107, 255, 1);
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  text-align: center;
}

/* 表格内容 */
.table-label {
  color: rgba(247, 107, 255, 1);
  font-size: 14px;
  padding: 6px 8px;
  text-align: left;
}
.table-label-title {
  color: rgba(34, 255, 255, 1);
}

.table-value {
  color: rgba(247, 107, 255, 1);
  font-size: 14px;
  padding: 6px 8px;
  text-align: center;
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
