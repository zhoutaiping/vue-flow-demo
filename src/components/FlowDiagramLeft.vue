<script setup>
import CircleGroup from "./CircleGroup.vue";
import TextItem from "./TextItem.vue";
import CircleLine from "./CircleLine.vue";
import PowerTable from "./PowerTable.vue";
import DcAcIcon from "./DcAcIcon.vue";
import TriangleGroup from "./TriangleGroup.vue";
import CollapsePowerTable from './CollapsePowerTable.vue'

defineProps({
  flowTitle: {
    type: String,
    default: "",
  },
  // 接入柜（单独一行）
  firstRowItem: {
    type: Object,
    default: () => ({ text: "接入柜", status: "active" }),
  },
  // 并网柜、防孤岛、计量柜（三列）
  secondRowItems: {
    type: Array,
    default: () => [],
  },
  // 绝对定位的可拖拽表格配置
  draggableTables: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: "曼德电子01方阵M001-FZ001",
        dataList: [
          { label: "有功功率", value: "456kW" },
          { label: "无功功率", value: "123kVar" },
          { label: "计量电量", value: "789kWh" },
        ],
        titleColor: "#52c41a",
        labelColor: "#fa8c16",
        borderColor: "#52c41a",
        x: 400,
        y: 120,
        width: 180,
        className: "power-table--narrow"
      },
      {
        id: 2,
        title: "并网柜-111",
        dataList: [
          { label: "有功功率", value: "456kW" },
          { label: "无功功率", value: "123kVar" },
          { label: "计量电量", value: "789kWh" },
        ],
        titleColor: "#52c41a",
        labelColor: "#fa8c16",
        borderColor: "#52c41a",
        x: 350,
        y: 250,
        width: 180,
        className: "power-table--narrow"
      },
      {
        id: 3,
        title: "防孤岛-111",
        dataList: [
          { label: "有功功率", value: "456kW" }
        ],
        titleColor: "#52c41a",
        labelColor: "#fa8c16",
        borderColor: "#52c41a",
        x: 630,
        y: 390,
        width: 200,
        className: "power-table--wide"
      }
    ]
  },
  // PowerTable 配置（符号区域）
  powerTableConfig: {
    type: Object,
    default: () => ({
      title: "曼德电子01方阵M001-FZ001",
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
  // PowerTable 配置（底部区域）
  bottomPowerTableConfig: {
    type: Object,
    default: () => ({
      title: "曼德电子01方阵M001-FZ001",
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
  // CollapsePowerTable 配置
  collapseTableConfig: {
    type: Object,
    default: () => ({
      triggerTitle: "方阵列表",
      tableTitle: "方阵详情",
      columns: ['有功功率', '无功功率', '日发电量', '总发电量'],
      dataList: [
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
      ],
      titleColor: "#52c41a",
      labelColor: "#fa8c16",
      borderColor: "#52c41a",
      lineColor: "#52c41a"
    })
  },
  // CircleLine 配置
  circleLineConfig: {
    type: Object,
    default: () => ({
      type: "primary",
      size: "40px",
      topLineHeight: "50px",
      bottomLineHeight: "50px",
    }),
  },
});
</script>

<template>
  <div class="fd-left">

    <!-- 绝对定位的可拖拽 PowerTable -->
    <vue-draggable-resizable
      v-for="table in draggableTables"
      :key="table.id"
      :w="table.width"
      :h="auto"
      :x="table.x"
      :y="table.y"
      :resizable="false"
      :z="1"
      class="fd-left__absolute-table"
    >
      <PowerTable
        :title="table.title"
        :dataList="table.dataList"
        :titleColor="table.titleColor"
        :labelColor="table.labelColor"
        :borderColor="table.borderColor"
        :class="table.className"
      />
    </vue-draggable-resizable>

    <div class="fd-left__head">
      <div class="fd-left__head-body">
        <div class="fd-left__title">{{ flowTitle }}</div>
        <CircleGroup />
        <div class="fd-left__divider"></div>
      </div>
    </div>

    <div class="fd-left__row-single">
      <div class="fd-left__vline fd-left__vline--full"></div>
      <TextItem :text="firstRowItem.text" :status="firstRowItem.status" />
    </div>
    <div class="fd-left__row-multi">
      <div
        v-for="(item, index) in secondRowItems"
        :key="index"
        class="fd-left__cell"
      >
        <div
          :class="[
            'fd-left__vline',
            index === secondRowItems.length - 1
              ? 'fd-left__vline--full'
              : 'fd-left__vline--partial',
          ]"
        ></div>
        <TextItem :text="item.text" :status="item.status" />
      </div>
    </div>

    <div class="fd-left__foot"></div>

    <div class="fd-left__symbol">
      <PowerTable
        :title="powerTableConfig.title"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        class="power-table--symbol"
      />
      <CircleLine
        class="fd-left__symbol-icon"
        :type="circleLineConfig.type"
        :size="circleLineConfig.size"
        :top-line-height="circleLineConfig.topLineHeight"
        :bottom-line-height="circleLineConfig.bottomLineHeight"
      />
    </div>

    <div class="fd-left__bottom-section">

      <PowerTable
        :title="bottomPowerTableConfig.title"
        :dataList="bottomPowerTableConfig.dataList"
        :titleColor="bottomPowerTableConfig.titleColor"
        :labelColor="bottomPowerTableConfig.labelColor"
        :borderColor="bottomPowerTableConfig.borderColor"
        class="power-table--bottom"
      />

      <div class="fd-left__icon-group">
        <div class="fd-left__icon-row">
          <DcAcIcon status="active" class="dc-ac-icon--spaced"/>
          <DcAcIcon status="active" />
          <div class="fd-left__triangle-wrapper">
            <TriangleGroup  selected />
          </div>
          <DcAcIcon status="active" class="dc-ac-icon--spaced"/>
          <DcAcIcon status="active" />
        </div>

        <CollapsePowerTable
          :triggerTitle="collapseTableConfig.triggerTitle"
          :tableTitle="collapseTableConfig.tableTitle"
          :columns="collapseTableConfig.columns"
          :dataList="collapseTableConfig.dataList"
          :titleColor="collapseTableConfig.titleColor"
          :labelColor="collapseTableConfig.labelColor"
          :borderColor="collapseTableConfig.borderColor"
          :lineColor="collapseTableConfig.lineColor"
          class="collapse-table--wide"
        />
      </div>

    </div>
  </div>
</template>

<style scoped>
.fd-left {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.fd-left__head {
  width: 320px;
  height: 100px;
  border-bottom: 3px solid rgba(255, 0, 0, 1);
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

.fd-left__head-body {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.fd-left__title {
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
}

.fd-left__divider {
  width: 1px;
  height: 34px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(222, 222, 222);
  position: relative;
  bottom: 0;
  top: 44px;
  right: 53px;
}

.fd-left__row-single {
  width: 330px;
  height: 80px;
  border-bottom: 2px solid rgba(255, 0, 0, 1);
  margin-left: -90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-right: 70px;
}

.fd-left__row-multi {
  width: 330px;
  height: 80px;
  display: flex;
  margin-right: 70px;
}

.fd-left__cell {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.fd-left__vline {
  width: 1px;
  background-color: #fff;
}

.fd-left__vline--full {
  height: 100%;
}

.fd-left__vline--partial {
  height: 60%;
  position: relative;
  top: -16px;
}

.fd-left__foot {
  width: 521px;
  height: 148.5px;
  border-bottom: 2px solid rgb(255, 0, 0);
  display: flex;
  align-items: center;
  margin-left: -202px;
}

.fd-left__symbol {
  width: 521px;
  margin-left: -202px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: flex-start;
}

.fd-left__symbol-icon {
  margin-left: 28px;
}

/* 绝对定位的表格 */
.fd-left__absolute-table {
  position: absolute;
}

.fd-left__absolute-table--1 {
  top: 120px;
  left: 400px;
}

.fd-left__absolute-table--2 {
  top: 250px;
  left: 350px;
}

.fd-left__absolute-table--3 {
  top: 390px;
  left: 630px;
}

/* PowerTable 尺寸变体 */
.power-table--narrow {
  width: 180px;
  margin-right: 50px;
}

.power-table--wide {
  width: 200px;
  margin-right: 50px;
}

.power-table--symbol {
  margin-left: -120px;
  width: 320px;
}

.power-table--bottom {
  width: 190px;
  margin-right: 50px;
}

/* 底部区域 */
.fd-left__bottom-section {
  display: flex;
  flex-direction: row;
  gap: var(--space-xs);
}

.fd-left__icon-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding: 0 12px;
}

.fd-left__icon-row {
  border: 1px solid #00ffff;
  padding: 0 var(--space-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.fd-left__triangle-wrapper {
  position: relative;
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
</style>
