module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src'],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.svg$': 'jest-svg-transformer',
        '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
        '@testing-library/react/dont-cleanup-after-each',
        // "@testing-library/react/cleanup-after-each",
        '@testing-library/jest-dom/extend-expect',
    ],

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    // testRegex: '(/test/.*.(test|spec)).(jsx?|tsx?)$',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    //coverage test path
    // collectCoverage: true,
    // coveragePathIgnorePatterns: ['(test/.*.mock).(jsx?|tsx?)$'],
    // verbose: true,
    // projects: ['<rootDir>'],
    // coverageDirectory: '<rootDir>/coverage/',
}
