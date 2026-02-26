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
  // PowerTable 配置
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

    <PowerTable
        :title="powerTableConfig.title"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        style=" width: 180px; margin-right: 50px; position: absolute; top: 120px; left: 400px;"
      />

      <PowerTable
        :title="'并网柜-111'"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        style=" width: 180px; margin-right: 50px; position: absolute; top: 250px; left: 350px;"
      />

      <PowerTable
        :title="'防孤岛-111'"
        :dataList="[{ label: '有功功率', value: '456kW' }]"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        style=" width: 200px; margin-right: 50px; position: absolute; top: 390px; left: 630px;"
      />

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
        style="margin-left: -120px; width: 320px"
      />
      <CircleLine
        class="fd-left__symbol-icon"
        :type="circleLineConfig.type"
        :size="circleLineConfig.size"
        :top-line-height="circleLineConfig.topLineHeight"
        :bottom-line-height="circleLineConfig.bottomLineHeight"
      />
    </div>
    <div style="display: flex; flex-direction: row; gap: 5px; ">

      <PowerTable
        :title="powerTableConfig.title"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        style=" width: 190px; margin-right: 50px; "
      />

      <div style="display: flex; flex-direction: column; gap: 5px;">
        
        <div
        style="
          border: 1px solid rgba(90, 255, 255, 1);
          padding: 0 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          "
      >
          <DcAcIcon status="active" style="margin-right: 40px;"/>
          <DcAcIcon status="active" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
            "
          >
            <TriangleGroup  selected />
          </div>
          <DcAcIcon status="active" style="margin-right: 40px;"/>
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
          style="width: 400px"
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
</style>
