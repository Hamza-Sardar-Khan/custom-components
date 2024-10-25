import { defineConfig } from "rollup";
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'; // To convert CommonJS to ES6
import postcss from 'rollup-plugin-postcss'; // To handle CSS files

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name: "pack-to-ui",
    },

    external: ["react", "react-dom"],
    plugins: [typescript({ tsconfig: "tsconfig.json" }), commonjs(), postcss({
        extract: true, // Extract CSS to a separate file
        minimize: true, // Minify CSS
    }),],
});