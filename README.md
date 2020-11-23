# word-counter

## Docker Project setup

Build Image

```
docker build -t wordcounter .
```

Run Container

```
docker run -d --rm --name wordcounter -p 80:80 wordcounter
```

## Local Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run Unit Test Suite

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
