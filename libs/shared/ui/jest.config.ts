/* eslint-disable */
export default {
    displayName: 'shared-ui',
    preset: '../../../jest.preset.js',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
        },
    },
    transform: {
        '^.+\\.[tj]s$': 'ts-jest',
        '^.+\\.[tj]sx?$': 'ts-jest',
        '^.+\\.(svg|png|jpg|jpeg|gif|webp)$': '<rootDir>/empty.js',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'html'],
    coverageDirectory: '../../../coverage/libs/shared/ui',
};
