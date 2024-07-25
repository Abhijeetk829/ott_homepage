import pkg from 'webpack';
const { webpack } = pkg;

import { fileURLToPath } from 'node:url';

import { dirname, resolve } from 'node:path';
export const __dirname = dirname(fileURLToPath(import.meta.url));

const compiler1 = webpack({
    mode: "production",
    entry: "./src/app.js",
    output: {
        filename: "dist.js",
        path: resolve(__dirname, "./dist/")
    }
})

compiler1.run((err, stats) => {
    console.log(stats)
    if (err) {
        console.log(err);
    }   else    {
        // console.log('build succeded!');
    }
    // console.log(stats)
    compiler1.close((closeErr) => {
        // console.log(closeErr);
    })
})