// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from './locales/en';
import zh from './locales/zh';

// 定义语言包
const messages = {
  en,
  zh
};

// 创建 i18n 实例并导出
const i18n = createI18n({
  locale: 'zh', // 设置默认语言
  fallbackLocale: 'zh', // 设置备用语言
  messages, // 设置语言包
});

export default i18n;