import { ElMessage, ElMessageBox } from "element-plus";
import { title } from "process";

export const info = (message = "", duration = 1000 * 2) => {
  ElMessage({
    showClose: false,
    type: "info",
    message: message,
    duration: duration,
  });
};
// 警告
export const warning = (message = "", duration = 1000 * 2) => {
  ElMessage({
    type: "warning",
    showClose: false,
    message: message,
    duration: duration,
  });
};
// 成功
export const success = (message = "", duration = 1000 * 2) => {
  ElMessage({
    showClose: false,
    type: "success",
    message: message,
    duration: duration,
  });
};
// 失败
export const error = (message = "", duration = 1000 * 2) => {
  ElMessage({
    showClose: false,
    type: "error",
    message: message,
    duration: duration,
  });
};
export const confirm = ({ message = '', title = '提示', confirmButtonText = '确认', cancelButtonText = '取消'}) => {
  return ElMessageBox.confirm(message, title, {
	confirmButtonText,
	cancelButtonText
  });
};
