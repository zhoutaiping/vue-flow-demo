<script setup>
import TextItem from "./TextItem.vue";
import CircleLine from './CircleLine.vue'
import PowerTable from "./PowerTable.vue";
import DcAcIcon from "./DcAcIcon.vue";
import TriangleGroup from "./TriangleGroup.vue";
import CollapsePowerTable from './CollapsePowerTable.vue'

defineProps({
  flowTitleUnit: {
    type: String,
    default: "",
  },
  // 进线柜、SVG、SVG柜 等
  items: {
    type: Array,
    default: () => [],
  },
  // PowerTable 配置
  powerTableConfig: {
    type: Object,
    default: () => ({
      title: "曼德电子03方阵M002-FZ003",
      dataList: [
        { label: "有功功率", value: "456kW" },
        { label: "无功功率", value: "123kVar" },
        { label: "计量电量", value: "789kWh" },
      ],
      titleColor: "#52c41a",
      labelColor: "#fa8c16",
      borderColor: "#52c41a",
    }),
  },
  // CircleLine 配置
  circleLineConfig: {
    type: Object,
    default: () => ({
      type: "error",
      size: "40px",
      topLineHeight: "50px",
      bottomLineHeight: "50px",
    }),
  },
});
</script>
<template>
  <div class="fd-right">

    <!-- 绝对定位的 PowerTable -->
    <div class="fd-right__absolute-table fd-right__absolute-table--1">
      <PowerTable
        :title="'进线柜-100'"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        class="power-table--250"
      />
    </div>

    <div class="fd-right__absolute-table fd-right__absolute-table--2">
      <PowerTable
        :title="'SVG-22222100'"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        class="power-table--200"
      />
    </div>

    <div class="fd-right__absolute-table fd-right__absolute-table--3">
      <PowerTable
        :title="'SVG-222222100'"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        class="power-table--200"
      />
    </div>

    <div class="fd-right__label">{{ flowTitleUnit }}</div>
    <div class="fd-right__spacer"></div>

    <div class="fd-right__body">
      <div class="fd-right__corner"></div>
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['fd-right__cell', { 'fd-right__cell--first': index === 0 }]"
      >
        <div
          class="fd-right__vline fd-right__vline--dynamic"
          :style="{ height: item.lineHeight || '100%' }"
        ></div>
        <TextItem :text="item.text" :status="item.status" class="fd-right__label-item" />
      </div>
    </div>
    <div class="fd-right__symbol">
      <PowerTable
        :title="powerTableConfig.title"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        class="power-table--symbol-right"
      />
      <CircleLine
        class="fd-right__symbol-icon"
        :type="circleLineConfig.type"
        :size="circleLineConfig.size"
        :top-line-height="circleLineConfig.topLineHeight"
        :bottom-line-height="circleLineConfig.bottomLineHeight"
      />
    </div>

    <div class="fd-right__bottom-section">

      <PowerTable
        :title="powerTableConfig.title"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        class="power-table--180"
      />

      <div class="fd-right__icon-group">
        <div class="fd-right__icon-row">
          <DcAcIcon status="active" class="dc-ac-icon--spaced"/>
          <DcAcIcon status="active" />
          <div class="fd-right__triangle-wrapper">
            <TriangleGroup  selected />
          </div>
          <DcAcIcon status="active" class="dc-ac-icon--spaced"/>
          <DcAcIcon status="active" />
        </div>

        <CollapsePowerTable
          triggerTitle="方阵列表"
          tableTitle="方阵详情"
          :columns="['有功功率', '无功功率', '日发电量', '总发电量']"
          :dataList="[
            {
              name: '曼德电子01方阵',
              有功功率: '123kW',
              无功功率: '45kVar',
              日发电量: '890kWh',
              总发电量: '12.3MWh',
            },
            {
              name: '曼德电子02方阵',
              有功功率: '456kW',
              无功功率: '78kVar',
              日发电量: '901kWh',
              总发电量: '45.6MWh',
            },
          ]"
          titleColor="#52c41a"
          labelColor="#fa8c16"
          borderColor="#52c41a"
          lineColor="#52c41a"
          class="collapse-table--wide"
        />
      </div>

    </div>
  </div>
</template>

<style scoped>
.fd-right {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.fd-right__label {
  margin-top: 185px;
  min-width: 100px;
  color: rgb(255, 0, 0);
  font-size: 14px;
  display: inline-flex;
  justify-content: end;
  flex-direction: column;
  align-items: flex-start;
  top: 5px;
  position: relative;
}

.fd-right__spacer {
  width: 565px;
  height: 80px;
  border-bottom: 2px solid rgba(255, 0, 0, 1);
}

.fd-right__body {
  width: 800px;
  height: 230px;
  border-bottom: 2px solid rgba(255, 0, 0, 1);
  display: flex;
  align-items: center;
  padding-left: 80px;
  margin-left: -21px;
}

.fd-right__corner {
  width: 175px;
  height: 80px;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  position: absolute;
  margin-top: -146.5px;
  margin-left: -204.5px;
}

.fd-right__cell {
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.fd-right__cell--first {
  margin-left: 50px;
}

.fd-right__vline {
  width: 1px;
  background-color: #fff;
}

.fd-right__label-item {
  margin-top: 23px;
}

.fd-right__symbol {
  width: 800px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
}


.fd-right__symbol-icon {
  margin-right: 100px;
}

/* 绝对定位的表格 */
.fd-right__absolute-table {
  position: absolute;
  top: 390px;
}

.fd-right__absolute-table--1 {
  left: 900px;
}

.fd-right__absolute-table--2 {
  left: 1250px;
}

.fd-right__absolute-table--3 {
  left: 1550px;
}

/* PowerTable 尺寸变体 */
.power-table--250 {
  width: 250px;
  margin-right: 50px;
}

.power-table--200 {
  width: 200px;
  margin-right: 50px;
}

.power-table--180 {
  width: 180px;
  margin-right: 50px;
}

.power-table--symbol-right {
  margin-left: 40px;
  width: 320px;
}

/* 底部区域 */
.fd-right__bottom-section {
  display: flex;
  flex-direction: row;
  gap: var(--space-xs);
}

.fd-right__icon-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  border: 1px solid #00ffff;
  padding: 0 12px;
}

.fd-right__icon-row {
  border: 1px solid var(--color-cyan);
  padding: 0 var(--space-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.fd-right__triangle-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.dc-ac-icon--spaced {
  margin-right: 40px;
}

.collapse-table--wide {
  width: 400px;
}

/* 动态高度竖线 */
.fd-right__vline--dynamic {
  height: 100%;
}
</style>
