import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionist from 'eslint-plugin-perfectionist'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const perf = ['warn', { type: 'natural' }]

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		ignores: ['**/dist/**', '**/coverage/**', '**/generated/**'],
	},
	{
		plugins: { perfectionist },
		rules: {
			'perfectionist/sort-array-includes': perf,
			'perfectionist/sort-classes': perf,
			'perfectionist/sort-enums': perf,
			'perfectionist/sort-exports': perf,
			'perfectionist/sort-imports': perf,
			'perfectionist/sort-interfaces': perf,
			'perfectionist/sort-intersection-types': perf,
			'perfectionist/sort-jsx-props': perf,
			'perfectionist/sort-maps': perf,
			'perfectionist/sort-named-exports': perf,
			'perfectionist/sort-named-imports': perf,
			'perfectionist/sort-object-types': perf,
			'perfectionist/sort-objects': perf,
			'perfectionist/sort-sets': perf,
			'perfectionist/sort-switch-case': perf,
			'perfectionist/sort-union-types': perf,
			'perfectionist/sort-variable-declarations': perf,
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'no-console': 'warn',
			'no-constant-condition': 'off',
			'no-else-return': 'warn',
			'no-empty': 'warn',
			'prefer-const': 'warn',
		},
	},
]

export default eslintConfig
