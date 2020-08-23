// Do NOT to change this configuration!!

SystemJS.config({
    paths: {
        // paths serve as alias
        'unpkg:': 'https://unpkg.com/',
        'npm:': 'node_modules/'
    },
    defaultExtension: true,
    meta: {
        './*.js': {
            'babelOptions': {
                es2015: true,
                react: true
            }
        }
    },
    map: {
        'plugin-babel': 'unpkg:systemjs-plugin-babel@latest/plugin-babel.js',
        'systemjs-babel-build': 'unpkg:systemjs-plugin-babel@latest/systemjs-babel-browser.js',
        'react': 'unpkg:react@16.2.0/umd/react.production.min.js',
        'react-dom': 'unpkg:react-dom@16.2.0/umd/react-dom.production.min.js',
        "react-router-dom": 'https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/4.3.1/react-router-dom.min.js'
    },
    transpiler: 'plugin-babel'
});

SystemJS.import('./scripts/render.js');