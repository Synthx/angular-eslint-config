import eslint from '@eslint/js';
import angular from 'angular-eslint';
import prettier from 'eslint-config-prettier';
import tsEslint from 'typescript-eslint';

const config = (prefix = 'app') =>
    tsEslint.config(
        {
            files: ['**/*.ts'],
            extends: [
                eslint.configs.recommended,
                ...tsEslint.configs.recommended,
                ...tsEslint.configs.stylistic,
                ...angular.configs.tsRecommended,
                prettier,
            ],
            languageOptions: {
                parserOptions: {
                    project: 'tsconfig.json',
                },
            },
            processor: angular.processInlineTemplates,
            rules: {
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        type: 'element',
                        prefix: [prefix],
                        style: 'kebab-case',
                    },
                ],
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        prefix: [prefix],
                        style: 'camelCase',
                    },
                ],
                '@angular-eslint/prefer-on-push-component-change-detection': 'error',
                '@angular-eslint/prefer-output-readonly': 'error',
                '@angular-eslint/prefer-signals': 'error',
                '@angular-eslint/prefer-standalone': 'error',
                '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
                '@typescript-eslint/explicit-member-accessibility': [
                    'off',
                    {
                        accessibility: 'explicit',
                    },
                ],
                '@typescript-eslint/naming-convention': 'off',
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/no-this-alias': 'error',
                '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        args: 'all',
                        argsIgnorePattern: '^_',
                        caughtErrors: 'all',
                        caughtErrorsIgnorePattern: '^_',
                        destructuredArrayIgnorePattern: '^_',
                        varsIgnorePattern: '^_',
                        ignoreRestSiblings: true,
                    },
                ],
                '@typescript-eslint/promise-function-async': 'error',
                '@typescript-eslint/strict-boolean-expressions': 'off',
                'array-bracket-spacing': 'off',
                'arrow-parens': ['off', 'always'],
                'block-spacing': ['error', 'always'],
                'brace-style': ['error', '1tbs'],
                'comma-dangle': ['error', 'always-multiline'],
                'computed-property-spacing': ['off', 'always'],
                'func-call-spacing': ['error', 'never'],
                'no-duplicate-imports': 'error',
                'no-else-return': [
                    'error',
                    {
                        allowElseIf: false,
                    },
                ],
                'no-multiple-empty-lines': 'error',
                'no-param-reassign': 'error',
                'no-underscore-dangle': 'off',
                'object-curly-spacing': ['error', 'always'],
                'object-shorthand': ['error', 'always'],
                'prefer-template': 'error',
                'space-before-function-paren': [
                    'error',
                    {
                        anonymous: 'always',
                        named: 'never',
                    },
                ],
                'space-in-parens': ['off', 'always'],
            },
        },
        {
            files: ['**/*.html'],
            extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
            rules: {
                '@angular-eslint/template/button-has-type': 'error',
                '@angular-eslint/template/conditional-complexity': 'error',
                '@angular-eslint/template/no-inline-styles': [
                    'error',
                    {
                        allowBindToStyle: true,
                    },
                ],
                '@angular-eslint/template/no-interpolation-in-attributes': 'error',
                '@angular-eslint/template/prefer-control-flow': 'error',
                '@angular-eslint/template/prefer-self-closing-tags': 'error',
                '@angular-eslint/template/use-track-by-function': 'error',
            },
        },
    );

export default config;
