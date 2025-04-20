module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'ts', 'vue'],
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.ts$': 'ts-jest'
    }
};
