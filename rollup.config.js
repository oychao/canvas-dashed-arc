export default [
    {
        input: './index.js',
        output: [
            {
                file: 'dist/bundle.js',
                format: 'umd',
            },
        ],
        plugins: [],
        external: ['fs', 'path', 'jsonfile',],
    },
];
