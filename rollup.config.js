import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import analyze from 'rollup-plugin-analyzer';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-porter';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'build/main.min.js',
      format: 'iife',
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript(),
    analyze({ summaryOnly: true }),
    copy({
      targets: [
        {
          src: 'src/index.html',
          dest: 'build',
          transform: (contents) =>
            contents.toString().replace('main.js', 'main.min.js'),
        },
      ],
    }),
    css({
      raw: 'build/app.css',
      minified: 'build/app.min.css',
    }),
  ],
};
