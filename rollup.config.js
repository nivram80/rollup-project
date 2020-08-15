import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'build/bundle.js',
      format: 'iife',
    },
    {
      file: 'build/bundle.min.js',
      format: 'iife',
      plugins: [terser()],
    },
  ],
  plugins: [typescript()],
};
