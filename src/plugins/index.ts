import axiosPlugin from './axios';
import i18nPlugin from './i18n';
import routerPlugin from './router';
import piniaPlugin from './pinia';
import analyticsPlugin from './analytics';
import authPlugin from './auth';
import customPlugins from './custom';

// Если необходимо, можно также импортировать полифилы
import './polyfills';

export default {
    axiosPlugin,
    i18nPlugin,
    routerPlugin,
    piniaPlugin,
    analyticsPlugin,
    authPlugin,
    customPlugins,
};