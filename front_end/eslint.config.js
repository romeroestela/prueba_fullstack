import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'semi': ['error', 'always'],             // Fuerza el uso de punto y coma
      'quotes': ['error', 'single'],           // Uso de comillas simples
      'comma-dangle': ['error', 'always-multiline'], // Coma al final de objetos y arrays multilinea
      'indent': ['error', 2], // Indentación de 2 espacios
      'space-before-function-paren': ['error', 'never'], // Sin espacio antes del paréntesis de función
      'no-multiple-empty-lines': ['error', {          // Limita las líneas vacías consecutivas
        max: 1,
        maxEOF: 1,
        maxBOF: 0
      }],
      'space-in-parens': ['error', 'never'],          // Sin espacios dentro de los paréntesis
      'array-bracket-spacing': ['error', 'never'],    // Sin espacios dentro de los corchetes de arrays
      'object-curly-spacing': ['error', 'always'],    // Espacios dentro de las llaves de objetos
      'key-spacing': ['error', {                      // Espacio después de los dos puntos en objetos
        beforeColon: false,
        afterColon: true
      }],
      'no-trailing-spaces': 'error',                  // Elimina espacios en blanco al final de línea
    },
  },
)
