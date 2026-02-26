<template>
    <div class="power-table-container" :class="className" :style="tableStyle">
      <table class="power-table">
        <!-- 顶部标题行 -->
        <thead>
          <tr>
            <th colspan="2" class="table-title">{{ title }}</th>
          </tr>
        </thead>
        <!-- 数据行 -->
        <tbody>
          <tr v-for="(item, index) in dataList" :key="index">
            <td class="table-label">{{ item.label }}</td>
            <td class="table-value">{{ item.value || '--' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  // 定义组件属性
  const props = defineProps({
    // 顶部标题文字
    title: {
      type: String,
      default: '曼德电子02方阵M001-FZ002'
    },
    // 数据列表：[{label: '有功功率', value: '123kW'}, ...]
    dataList: {
      type: Array,
      default: () => [
        // { label: '有功功率', value: '' },
        // { label: '无功功率', value: '' },
        // { label: '计量电量', value: '' }
      ]
    },
    // 外部自定义类名
    className: {
      type: String,
      default: ''
    },
    // 颜色自定义
    titleColor: {
      type: String,
      default: '#00ffff'
    },
    labelColor: {
      type: String,
      default: '#ff00ff'
    },
    borderColor: {
      type: String,
      default: '#00ffff'
    },
    bgColor: {
      type: String,
      default: '#212e40'
    }
  })
  
  // 动态计算样式（绑定颜色）
  const tableStyle = computed(() => ({
    '--title-color': props.titleColor,
    '--label-color': props.labelColor,
    '--border-color': props.borderColor,
    '--bg-color': props.bgColor
  }))
  </script>
  
  <style lang="scss" scoped>
  /* 容器样式 */
  .power-table-container {
    display: inline-block;
    background: var(--bg-color);
    border-radius: 2px;
    overflow: hidden;
  }
  
  /* 核心表格样式 */
  .power-table {
    border-collapse: collapse;
    width: 100%;
    th {
        height: 20px;
        border: 1px solid #EFF0F2;
    }
    td {
        height: 20px;
        border: 1px solid #EFF0F2;
    }
  }
  
  /* 标题行 */
  .table-title {
    
    color: rgba(34,255,255,1);
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    &:hover {
        text-decoration: underline;
    }
  }
  
  /* 标签单元格 */
  .table-label {
    color: rgba(247,107,255,1);
    font-size: 14px;
    border: 1px solid var(--border-color);
    text-align: left;
    width: 50%;
  }
  
  /* 数值单元格 */
  .table-value {
    font-size: 14px;
    color: rgba(247,107,255,1);
    border: 1px solid var(--border-color);
    text-align: right;
    width: 50%;
  }
  </style>