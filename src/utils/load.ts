import { prePath } from './index';
// 动态加载脚本或样式
export function loadJs(url: string) {
    const script = document.createElement("script");
    script.src = `${prePath}${url.startsWith("/") ? url : `/${url}`}`;
    script.type = "text/javascript";
    document.head.appendChild(script);
}
export function loadCss(url: string) {
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = `${prePath}${url.startsWith("/") ? url : `/${url}`}`;
    document.head.appendChild(link);
}