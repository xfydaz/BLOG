import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
  title: "", // 公告标题，填空使用i18n字符串Key.announcement
  content:
    " 本论坛所有内容（包括但不限于帖子、评论、资料、讨论、链接等）仅供一般性信息交流与科普参考，不构成任何形式的医疗建议、诊断、治疗方案或用药指导。任何关于药物使用、剂量、适应症、禁忌症、副作用等信息，均不能替代执业医师、药师或其他合格医疗专业人员的专业意见。", // 公告内容
  closable: true, // 允许用户关闭公告
  link: {
    enable: true, // 启用链接
    text: "Learn More", // 链接文本
    url: "/about/", // 链接 URL
    external: false, // 内部链接
  },
};
