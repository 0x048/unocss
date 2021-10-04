import { Options } from 'tsup'

const config: Options = {
  splitting: true,
  format: ['esm', 'cjs'],
  entryPoints: [
    'src/*.ts',
  ],
  minify: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  clean: true,
  dts: true,
}

export default config
