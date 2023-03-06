import { post, get } from "../index";
const moduleM = 'm'
const businessModule = "sysuser";
export default {
  /**
 * 登录
 * @param {string} username  用户名
 * @param {string} password  密码
 * @param {string} code   验证码
 * @param {string} codeKey  验证码
 */
  login: (params:any = {}) =>
    post(`/${moduleM}/${businessModule}/login`, {
      ...params,
      userType: "0",
      clientType: "web",
      system: "PS",
    }),
  /**
   * 获取图片验证码
   * @param {string} codeKey  验证码code
   */
   getImageCode: (params:any = {}) =>
   get(`/${moduleM}/${businessModule}/imagecode`, {
     codekey: params.codeKey || '',
   }),
}
// export default {
//   /**
//    * 获取街道基础信息
//    * @returns
//    */
//   getBaseInfo: () => get(`${preUrlBase}/${moduleM}/${businessModule}/base/stats`, {}),
//   /**
//    * 添加后刷新数据
//    * @returns
//    */
//   getBaseInfoInput: (params) => post(`${preUrlBase}/${moduleM}/${businessModule}/base/stats/input`, params, "json"),

//   /**
//    * 根据告警二级分类统计相应数量
//    * @param {number}  pageNum 请求页
//    * @param {number} pageSize 请求页返回记录数
//    */
//   getAlarmStatByDesc: (pageNum = 1, pageSize = 20) =>
//     get(`${preUrlBase}/${moduleM}/${businessModule}/alarm/desc/stats`, {}),

//   /**
//    * 实时预警
//    * @param {number} pageNum
//    * @param {number} pageSize
//    * @param {string} alarmDescList
//    * @returns
//    */
//   getAlarmRecordList: (pageNum = 1, pageSize = 25, alarmDescList) =>
//     get(`${preUrlBase}/${moduleM}/${businessModule}/alarm/latest/list`, { pageNum, pageSize, alarmDescList }),

//   /**
//    * 获取指定时间区间的告警数量统计：可传参数today表示今天，1w表示近一周，1m表示近一月，不传值表示全部
//    * @param {string} timeCondition 时间区间
//    */
//   getAlarmNumberStatistics: (query) => get(`${preUrlBase}/${moduleM}/${businessModule}/alarm/time/stats`, query),
//   /**
//    * 获取指定告警详情
//    * @param {string} alarmId
//    * @returns
//    */
//   getAlarmDetail: (alarmId) => get(`${preUrlBase}/${moduleM}/${businessModule}/alarm/detail`, { alarmId }),

//   /** 预警分析：获取告警总览统计信息
//    * @param {String}  timeCondition 请求时间
//    * */
//   getAlarmAnalyseContentData: (query = {}) => get(`${preUrlBase}/${moduleM}/${businessModule}/alarm/desc/stats`, query),

//   /**
//    * 事件统计:统计近6个月工单数量
//    */
//   geoOrderSixMonthNumber: () => get(`${preUrlBase}/${moduleM}/${businessModule}/workOrder/monthOrderAmount/stat`, {}),

//   /**
//    * 日周月及总工单数量统计
//    */
//   getOrderAmount: (query = {}) =>
//     get(`${preUrlBase}/${moduleM}/${businessModule}/workOrder/periodOrderAmount/stat`, query),

//   /**
//    * 获取实时工单
//    * @param {number}  pageNum 请求页
//    * @param {number} pageSize 请求页返回记录数
//    */
//   getNowOrder: (pageNum = 1, pageSize = 25) =>
//     get(`${preUrlBase}/${moduleM}/${businessModule}/workOrder/list/realTime`, { pageNum, pageSize }),

//   /**
//    * 物联网设备感知
//    */
//   getIotDeviceList: (query = {}) => get(`${preUrlBase}/${moduleM}/${businessModule}/device/numStats`, query),

//   /**
//    * 物联网智能设备
//    */
//   getDeviceRecord: (query = {}) => get(`${preUrlBase}/${moduleM}/${businessModule}/device/record`, query),

//   /**
//    * 视频实时调阅按场景统计
//    * @param {string} area
//    * @param {string} street
//    * @param {string} community
//    */
//   getNumByLocationType: (query = {}) =>
//     get(`${preUrlBase}/${moduleM}/${businessModule}/device/countByLocationType`, query),

//   /**
//    * 获取小区下设备列表
//    * @param {String} estateName 小区名称
//    * @param {Integer} pageNum
//    * @param {Integer} pageSize
//    * @returns
//    */
//   getDeviceByEstate: (estateName, pageNum, pageSize = 9999) =>
//     get(`${preUrlBase}/${moduleM}/${businessModule}/device/getByEstateName`, {
//       estateName,
//       pageNum,
//       pageSize,
//     }),

//   /**
//    * 查询分组
//    * @param {Integer} estateId 小区id
//    * @param {String} deviceGroup 设备组名
//    * @param {Integer} pageNum
//    * @param {Integer} pageSize
//    * @returns
//    */
//   getDeviceGroup: (query = {}) => get(`${preUrlBase}/${moduleM}/${businessModule}/device/countByDeviceGroup`, query),

//   /**
//    * 添加分组
//    * @param {Integer} estateId 小区id
//    * @param {String} deviceGroup 设备组名
//    * @param {Integer} deviceIds 设备id
//    * @returns
//    */
//   addDeviceGroup: (query = {}) => post(`${preUrlBase}/${moduleM}/${businessModule}/device/addDeviceGroup`, query),

//   /**
//    * 修改分组
//    * @param {Integer} id 小区id
//    * @param {String} deviceGroup 设备组名
//    * @param {Integer} deviceIds  设备id
//    * @returns
//    */
//   updateDeviceGroup: (query = {}) => post(`${preUrlBase}/${moduleM}/${businessModule}/device/updateDeviceGroup`, query),

//   /**
//    * 删除分组
//    * @param {Integer} id 设备组名id
//    * @returns
//    */
//   delDeviceGroup: (id) =>
//     get(`${preUrlBase}/${moduleM}/${businessModule}/device/deleteDeviceGroup`, {
//       id,
//     }),
//   /**
//    *
//    * @param {integer} pageNum
//    * @param {integer} pageSize
//    * @param {string} startTime
//    * @param {string} endTime
//    * @returns
//    */
//   getNowVideo: (pageNum, pageSize, startTime, endTime) =>
//     get(`${preUrlBase}/${moduleM}/${businessModule}/person/records`, { pageNum, pageSize, startTime, endTime }),
//   /**
//    * 车辆，人口，房屋。楼栋综合搜索
//    * @param {string} key
//    * @param {number} pageSize 请求页返回记录数
//    * @returns
//    */
//   getSearchResult: (key, pageSize = 20) => post(`${preUrlBase}/${moduleM}/${businessModule}/search`, { key, pageSize }),

//   /**
//    * 督办考核评估接口
//    * @param {string} area 安宁区或下属各街道名
//    * @returns
//    */
//   getEvaluationInfo: (area) => get(`${preUrlBase}/${moduleM}/${businessModule}/evaluation`, { area }),

//   /**
//    * 获取工单比例
//    */
//   getOrderRatio: (query = {}) => get(`${preUrlBase}/${moduleM}/${businessModule}/workOrder/proportion/stat`, query),
//   /**
//    * 2D获取楼栋内重点人员或帮扶人员信息列表
//    * @param {*} data
//    * @returns
//    */
//   getKeyPersonOrAssist: (data) => get(`${preUrlBase}/${moduleM}/${businessModule}/getBi`, data),
//   /**
//    * 获取进门统计数据
//    * @param {string} startTime
//    * @returns
//    */
//   getEnterPeople: (startTime) =>
//     get(`${preUrlBase}/${moduleM}/${businessModule}/person/inout/device/stat`, { startTime }),

//   /**
//    * 获取健康码统计数据
//    * @param {string} startTime
//    * @returns
//    */
//   getHealthCode: (startTime) =>
//     get(`${preUrlBase}/${moduleM}/${businessModule}/person/inout/health-code/stat`, { startTime }),

//   /**
//    * 获取用户自定义配置
//    * @returns
//    */
//   getConfiguration: () => get(`${preUrlBase}/${moduleM}/${businessModule}/configuration/get`, {}),

//   /**
//    * 更新用户自定义配置
//    * @param {object} config
//    * @returns
//    */
//   updateConfiguration: (config) => post(`${preUrlBase}/${moduleM}/${businessModule}/configuration/update`, { config }),

//   /**
//    * 新增用户自定义配置
//    * @param {object} config
//    * @returns
//    */
//   addConfiguration: (config) => post(`${preUrlBase}/${moduleM}/${businessModule}/configuration/add`, { config }),
// };
