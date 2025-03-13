import esbuild from 'esbuild';

async function build() {
  try {
    await esbuild.build({
      entryPoints: ['src/index.ts'],
      platform: 'node',
      minify: true,
      bundle: true,
      sourcemap: true,
      tsconfig: 'tsconfig.json',
      legalComments: "inline",
      format: 'esm',
      outfile: 'dist/index.js',
    });
    console.log("✅ Build completed successfully.");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

build();
