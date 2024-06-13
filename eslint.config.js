const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['dist', 'node_modules', 'eslint.config.js'],
  },
  {
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-spacing': 'error',
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'always-multiline'],
      'curly': ['off'],
      'eol-last': ['error', 'always'],
      'indent': ['error', 2],
      'jsx-quotes': ['error', 'prefer-double'],
      'line-comment-position': ['error', 'above'],
      'linebreak-style': ['error', 'unix'],
      'max-len': ['warn', { 'code': 160 }],
      'no-array-constructor': 'error',
      'no-eval': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-new-object': 'error',
      'no-tabs': 'error',
      'no-trailing-spaces': 'warn',
      'no-unreachable': 'error',
      'no-var': 'error',
      'nonblock-statement-body-position': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'warn',
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'sort-imports': ['warn', {
        'memberSyntaxSortOrder': [
          'none',
          'all',
          'single',
          'multiple',
        ],
      }],
      'sort-vars': 'error',
    },
  },
  {
    files: ["**.ts"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          'multiline': {
            'delimiter': 'none',
            'requireLast': true,
          },
          'singleline': {
            'delimiter': 'comma',
            'requireLast': false,
          },
        },
      ],
      '@typescript-eslint/type-annotation-spacing': [
        'error',
        {
          'before': false,
          'after': true,
          'overrides': {
            'arrow': {
              'before': true,
              'after': true
            },
          },
        },
      ],
    },
  },
)
