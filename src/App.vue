<script setup>
import { ref } from "vue";
import FlowDiagramLeft from "./components/FlowDiagramLeft.vue";
import FlowDiagramRight from "./components/FlowDiagramRight.vue";
import DcAcIcon from "./components/DcAcIcon.vue";
import TextItem from "./components/TextItem.vue";
import PowerTable from "./components/PowerTable.vue";
import CollapsePowerTable from "./components/CollapsePowerTable.vue";
import CircleLine from './components/CircleLine.vue'

const flowTitle = ref("电网墩徳线");
const flowTitleUnit = ref("10kV");

const leftFirstRowItem = { text: "接入柜", status: "active" };
const leftSecondRowItems = [
  { text: "并网柜", status: "active" },
  { text: "防孤岛", status: "active" },
  { text: "计量柜", status: "active" },
];

const rightItems = [
  { text: "进线柜", status: "active", lineHeight: "100%" },
  { text: "SVG", status: "error", lineHeight: "23px" },
  { text: "SVG柜", status: "active", lineHeight: "50px" },
];

// 左侧 PowerTable 配置
const leftPowerTableConfig = {
  title: "曼德电子03方阵M002-FZ003",
  dataList: [
    { label: "有功功率", value: "456kW" },
    { label: "无功功率", value: "123kVar" },
    { label: "计量电量", value: "789kWh" },
  ],
  titleColor: "#52c41a",
  labelColor: "#fa8c16",
  borderColor: "#52c41a",
};

// 左侧 CircleLine 配置
const leftCircleLineConfig = {
  type: "primary",
  size: "40px",
  topLineHeight: "50px",
  bottomLineHeight: "50px",
};

// 右侧 PowerTable 配置
const rightPowerTableConfig = {
  title: "曼德电子03方阵M002-FZ003",
  dataList: [
    { label: "有功功率", value: "456kW" },
    { label: "无功功率", value: "123kVar" },
    { label: "计量电量", value: "789kWh" },
  ],
  titleColor: "#52c41a",
  labelColor: "#fa8c16",
  borderColor: "#52c41a",
};

// 右侧 CircleLine 配置
const rightCircleLineConfig = {
  type: "error",
  size: "40px",
  topLineHeight: "50px",
  bottomLineHeight: "50px",
};
</script>

<template>
  <div class="app">
    <div class="app__main">
      <div class="app__diagram">
      <FlowDiagramLeft
        :flow-title="flowTitle"
        :first-row-item="leftFirstRowItem"
        :second-row-items="leftSecondRowItems"
        :power-table-config="leftPowerTableConfig"
        :circle-line-config="leftCircleLineConfig"
      />
      
      <FlowDiagramRight
        :flow-title-unit="flowTitleUnit"
        :items="rightItems"
        :power-table-config="rightPowerTableConfig"
        :circle-line-config="rightCircleLineConfig"
      />
      </div>
    </div>

    <!-- <div style="display: flex; align-items: center; justify-content: center">
      <DcAcIcon status="default" />
      <DcAcIcon status="active" />
      <DcAcIcon status="error" />
    </div>
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      "
    >
      <TextItem text="并网柜" />
      <TextItem text="并网柜" status="active" />
      <TextItem text="并网柜" status="error" />
    </div>

    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px',
      }"
    >
      <PowerTable
        title="曼德电子03方阵M002-FZ003"
        :dataList="[
          { label: '有功功率', value: '456kW' },
          { label: '无功功率', value: '123kVar' },
          { label: '计量电量', value: '789kWh' },
        ]"
        titleColor="#52c41a"
        labelColor="#fa8c16"
        borderColor="#52c41a"
        style="margin-left: 40px; width: 400px"
      />

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
        style="margin-top: 20px; margin-left: 40px; width: 400px"
      />

    </div> -->
  </div>
</template>

<style scoped>
.app {
  background-color: #212e40;
  width: 100%;
  min-height: 100vh;
}

.app__main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app__diagram {
  display: flex;
  gap: 20px;
}
</style>
