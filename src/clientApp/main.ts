import { createApp } from 'vue'
import '../style.css'
import App from '../app/App.vue'
import router from '@/router';
import store from '@/shared/store';
import { createPinia } from 'pinia';
import * as PIXI from 'pixi.js';
import Canvas from 'canvas';
import ui from '@nuxt/ui/vue-plugin';
import { createI18n } from 'vue-i18n';
import bootstrap from './bootstrap';
import { setGlobalErrorHandler } from './utils/errorHandler';

import '@/styles/main.css';
import '@/styles/variables.css';

bootstrap();
app.use(router);
app.use(store);
app.use(createPinia());
new PIXI.Sprite();
app.config.globalProperties.$Canvas = Canvas;
const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {},
        ru: {}
   }
});
app.use(i18n);
app.use(ui);
setGlobalErrorHandler(app);
createApp(App).mount('#app')