# Index Maker
2kb zero dependency library to create index.js files automatically

### 1. Install the package

```npm i -D index-maker```

### 2. Add script to `package.json` or run it directly

```"indexer": "index-maker src/**/*.js"```

### 3. Optionally specify index file name with flag `-i` and extention of import files `-x` (you might need it to work with typescript)

```index-maker src/**/*.ts -i index.ts -x js```

### 4. To export also from inner folders, use flag `-f`

```index-maker src/**/*.ts -f```

### 5. To export defaults as file name, use flag `-d`

```index-maker src/**/*.ts -d```

---

> This is ESM module only