// Общие виджеты
export { default as AlertWidget } from './common/AlertWidget';
export { default as ModalWidget } from './common/ModalWidget';
export { default as LoaderWidget } from './common/LoaderWidget';
export { default as TooltipWidget } from './common/TooltipWidget';

// Виджеты дашборда
export { default as ChartWidget } from './dashboard/ChartWidget';
export { default as StatsWidget } from './dashboard/StatsWidget';
export { default as FeedWidget } from './dashboard/FeedWidget';

// Виджеты e-commerce
export { default as ProductCarouselWidget } from './ecommerce/ProductCarouselWidget';
export { default as CartWidget } from './ecommerce/CartWidget';
export { default as PriceWidget } from './ecommerce/PriceWidget';

// Виджеты аутентификации
export { default as LoginWidget } from './authentication/LoginWidget';
export { default as RegistrationWidget } from './authentication/RegistrationWidget';

// Виджет погоды
export { default as WeatherWidget } from './weather';

// Утилиты
export * from './utilities/WidgetHelpers';
export * from './utilities/WidgetConstants';
