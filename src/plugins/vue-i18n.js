import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/locales/en.json';
import vi from '@/locales/vi.json';

Vue.use(VueI18n);

const messages = { en, vi };

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
