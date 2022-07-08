# Index Maker
2kb zero dependency library to create index.js files automatically

> This is ESM module only

> Default exports are not supported

1. Install the package
`npm i -D index-maker`

2. Add script to `package.json` or run it directly
`"indexer": "index-maker src/**/*.js"`

3. Optionally specify index file name with flag `-i` and extention of import files `-x` (you might need id to work with typescript)
`index-maker src/**/*.ts -f index.ts -x js`

4. If you want to export also from inner folders, use flag `-f`
`index-maker src/**/*.ts -f`