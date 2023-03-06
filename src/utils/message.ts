import { ElMessage, ElMessageBox  } from 'element-plus'

export const info = (message = "", duration = 1000 * 2) => {
	ElMessage({
		showClose: false,
		type: "info",
		message: formatMessage(message),
		duration: duration,
	});
};
// 警告
export const warning = (message = "", duration = 1000 * 2) => {
	ElMessage({
		type: 'warning',
		showClose: false,
		message: formatMessage(message),
		duration: duration,
	});
};
// 成功
export const success = (message = "", duration = 1000 * 2) => {
	ElMessage({
		showClose: false,
		type: "success",
		message: formatMessage(message),
		duration: duration,
	});
};
// 失败
export const error = (message = "", duration = 1000 * 2) => {
	ElMessage({
		showClose: false,
		type: "error",
		message: formatMessage(message),
		duration: duration,
	});
};
// 只支持文本和对象格式  {}
export const deleteConfirm = (data: any) => {
	return new Promise((resolve, reject) => {
		const obj: any = {
			text: "确认删除吗？",
			title: "提示",
			confirmButtonText: "确定",
			cancelButtonText: "取消",
		};
		if (typeof data === "string") {
			obj.text = data;
		} else if (typeof data === "object") {
			["text", "title", "confirmButtonText", "cancelButtonText"].forEach(
				(item) => {
					if (data.hasOwnProperty.call(item)) {
						obj[item] = data[item];
					}
				}
			);
		}
		ElMessageBox.confirm(obj.text, obj.title, {
			confirmButtonText: obj.confirmButtonText,
			cancelButtonText: obj.cancelButtonText,
			type: "warning",
		})
			.then(() => {
				resolve(true);
			})
			.catch(() => {
				reject();
			});
	});
};

function formatMessage(str: string) {
	let msg;
	if (!str) {
		msg = "";
	} else if (str.endsWith("!") || str.endsWith("！")) {
		msg = str.substring(0, str.length - 1);
	} else {
		msg = str;
	}
	return msg;
}