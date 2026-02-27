// 左侧流程图配置

export const leftFirstRowItem = { text: "接入柜", status: "active" };

export const leftSecondRowItems = [
  { text: "并网柜", status: "active" },
  { text: "防孤岛", status: "active" },
  { text: "计量柜", status: "active" },
];

// 可拖拽表格配置
export const leftDraggableTables = [
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
    x: -350,
    y: 120,
    width: 180,
    className: "power-table--narrow"
  },
  {
    id: 2,
    title: "并网柜-111",
    dataList: [
      { label: "有功功率", value: "789kW" },
      { label: "无功功率", value: "456kVar" },
      { label: "计量电量", value: "123kWh" },
    ],
    titleColor: "#fa8c16",
    labelColor: "#52c41a",
    borderColor: "#fa8c16",
    x: -450,
    y: 250,
    width: 180,
    className: "power-table--narrow"
  },
  {
    id: 3,
    title: "防孤岛-111",
    dataList: [
      { label: "有功功率", value: "321kW" }
    ],
    titleColor: "#ff4d4f",
    labelColor: "#faad14",
    borderColor: "#ff4d4f",
    x: -150,
    y: 390,
    width: 200,
    className: "power-table--wide"
  }
];

// 符号区域 PowerTable 配置
export const leftSymbolPowerTableConfig = {
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

// 底部 PowerTable 配置
export const leftBottomPowerTableConfig = {
  title: "曼德电子04方阵M003-FZ004",
  dataList: [
    { label: "有功功率", value: "654kW" },
    { label: "无功功率", value: "321kVar" },
    { label: "计量电量", value: "987kWh" },
  ],
  titleColor: "#13c2c2",
  labelColor: "#52c41a",
  borderColor: "#13c2c2",
};

// CollapsePowerTable 配置
export const leftCollapseTableConfig = {
  triggerTitle: "左侧方阵列表",
  tableTitle: "左侧方阵详情",
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
};

// CircleLine 配置
export const leftCircleLineConfig = {
  type: "primary",
  size: "40px",
  topLineHeight: "50px",
  bottomLineHeight: "50px",
};
