if (!window.Promise) {
    // Пример: подключение полифила для Promise
    require('es6-promise').polyfill();
}

if (!window.fetch) {
    // Пример: подключение полифила для fetch
    require('whatwg-fetch');
}

console.log('Polyfills loaded.');