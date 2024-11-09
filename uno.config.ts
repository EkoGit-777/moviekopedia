// @unocss-include
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'
import presetIcons from 'unocss/preset-icons'
import presetUno from 'unocss/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/',
    }),
  ],
  transformers: [
    transformerDirectives(), // enable @apply for css
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '980px',
      xl: '1280px',
      '2xl': '1920px',
    },
    colors: {
      primary: {
        DEFAULT: '#4c5e72',
        '50': '#f6f7f9',
        '100': '#eceff2',
        '200': '#d5dce2',
        '300': '#b0bcc9',
        '400': '#8499ac',
        '500': '#657c92',
        '600': '#4c5e72',
        '700': '#425162',
        '800': '#394553',
        '900': '#333c47',
        '950': '#22282f',
      },
      gray: {
        DEFAULT: '#999999',
        '50': '#F7F7F7',
        '100': '#EDEDED',
        '200': '#DFDFDF',
        '300': '#C8C8C8',
        '400': '#ACACAC',
        '500': '#999999',
        '600': '#888888',
        '700': '#7B7B7B',
        '800': '#676767',
        '900': '#545454',
        '950': '#363636',
      },
      red: {
        DEFAULT: '#E25154',
        '50': '#FDF3F3',
        '100': '#FCE4E4',
        '200': '#FACECF',
        '300': '#F6ABAC',
        '400': '#EE7B7D',
        '500': '#E25154',
        '600': '#C52F32',
        '700': '#AD282B',
        '800': '#902426',
        '900': '#782426',
        '950': '#410E0F',
      },
      blue: {
        DEFAULT: '#4c5e72',
        '50': '#f6f7f9',
        '100': '#eceff2',
        '200': '#d5dce2',
        '300': '#b0bcc9',
        '400': '#8499ac',
        '500': '#657c92',
        '600': '#4c5e72',
        '700': '#425162',
        '800': '#394553',
        '900': '#333c47',
        '950': '#22282f',
      },
      yellow: {
        DEFAULT: '#ffb52e',
        '50': '#fffaeb',
        '100': '#fff0c6',
        '200': '#ffde88',
        '300': '#ffc74a',
        '400': '#ffb52e',
        '500': '#f98d07',
        '600': '#dd6702',
        '700': '#b74606',
        '800': '#94350c',
        '900': '#7a2c0d',
        '950': '#461502',
      },
      green: {
        DEFAULT: '#26C522',
        '50': '#F1FDF0',
        '100': '#DEFCDC',
        '200': '#BDF7BB',
        '300': '#89EF86',
        '400': '#4EDE4A',
        '500': '#26C522',
        '600': '#189B15',
        '700': '#178015',
        '800': '#176516',
        '900': '#145314',
        '950': '#052E06',
      },
    },
  },
  rules: [
    ['un-cloak', { display: 'block' }],
    ['text-2xs', { 'font-size': '.6875rem' }], // 11px
    ['text-3xs', { 'font-size': '.625rem' }], // 10px
    ['text-4xs', { 'font-size': '.5625rem' }], // 9px
    ['text-5xs', { 'font-size': '.5rem' }], // 8px
    ['word-break-words', {'word-break': 'break-word'}]
  ],
  shortcuts: [
    {
    },
  ],
})
