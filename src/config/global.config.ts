// 窗口相关
export const SCREEN_WIDTH = 1920;
export const SCREEN_HEIGHT = 1080;
export const MIN_SCREEN_WIDTH = 1920;
export const MIN_SCREEN_HEIGHT = 939;
export const BASE_POINT = [0, 0];
export const CONTENT_MARGIN = [0, 0, 0, 0];
export const COL_SPACE = 10;
export const ROW_SPACE = 10;
export const COL_COUNT = 4;
export const ROW_COUNT = 3;
export const ROOT_FONT_SIZE = 12;
export const POSITION_NUMBER_OVERLAY = false;

// 视频窗口位置
export const VIDEO_POSITION_NUMBER_LIST = ["base-info", "video-access", "alarm-analyse", "new-info", "alarm-order", "command-statistics"];

// 默认窗口位置列表
export const DEFAULT_WINDOW_NUMBER_LIST = ["base-info", "video-access", "alarm-analyse", "new-info", "alarm-order", "command-statistics"];

// 默认窗口位置编号列表
export const DEFAULT_WINDOW_POSITION_NUMBER_LIST = ["base-info", "video-access", "alarm-analyse", "new-info", "alarm-order", "command-statistics"];

// 左侧窗口位置编号列表
export const LEFT_WINDOW_POSITION_NUMBER_LIST = ["base-info", "video-access", "alarm-analyse"];

// 右侧窗口位置编号列表
export const RIGHT_WINDOW_POSITION_NUMBER_LIST = ["new-info", "alarm-order", "command-statistics"];

// 可配置窗口列表，与DEFAULT_WINDOW_LIST对应的前n个为默认展示的窗口列表
export const CONFIGURABLE_WINDOW_NAME_LIST = ["base-info", "video-access", "alarm-analyse", "new-info", "alarm-order", "command-statistics"];

// 可配置窗口对应示例图片地址列表
export const CONFIGURABLE_WINDOW_IMG_LIST = ["img/setting/概览.png", "img/setting/感知.png", "img/setting/预警.png", "img/setting/资讯.png", "img/setting/工单.png", "img/setting/考评.png"];

// 固定显示的窗口列表
export const FIXED_WINDOW_NAME_LIST = ["header"];
export const isDataMasking = true; // 是否数据脱敏
export const dataMaskingTypeList = ["phoneNumber", "idCard", "name"]; // 脱敏字段列表
export const loopConfig = {}; // 轮询配置
export const requestOvertime = 60 * 1000; // 超时时间
export const onePictureType = "区";

