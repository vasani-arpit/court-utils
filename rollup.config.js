import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json' assert { type: "json" };
import terser from '@rollup/plugin-terser';
const extensions = ['.js']
export default [
    // CommonJS (for Node) and ES module (for bundlers) build.
    {
        input: 'src/index.js',
        output: [
            {
                file: pkg.main,
                format: 'cjs'
            },
            {
                file: pkg.module,
                format: 'es'
            }
        ],
        plugins: [
            // resolve({
            //     extensions
            // }),
            terser()
        ],
    }
]