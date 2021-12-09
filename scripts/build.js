const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-plugin-css-modules');
const fs = require('fs/promises');

const run = async () => {
  try {
    const result = await esbuild.build({
      entryPoints: ['./src/index.jsx'],
      bundle: true,
      minify: true,
      target: 'es2020',
      treeShaking: true,
      format: 'esm',
      splitting: true,
      outdir: 'dist',
      inject: ['./scripts/react-shim.js'],
      metafile: true,
      plugins: [
        cssModulesPlugin({
          localIdentName: '[local]--[hash:8:md5:hex]',
        }),
      ],
    });

    await fs.copyFile('./public/index.html', './dist/index.html');

    console.log(await esbuild.analyzeMetafile(result.metafile));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

run();
