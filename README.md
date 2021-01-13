# heidi-baettig.ch

## Deps

- Build with [Webpack](https://webpack.js.org/)
- CSS-Framework [Milligram](http://milligram.io) incl. [normalize.css](https://necolas.github.io/normalize.css/)
- Iconfont [Fontello](http://fontello.com/) (use [fontello.config.json](fontello.config.json))

## Dev

```bash
npm ci
npm start
# open http://localhost:8080
```

## Deployment

### Continuous Deployment

- Push to Github => Github Action => Github Container Registry

## Integration

```bash
docker run -p 8080:80 ghcr.io/codingsteff/heidi-baettig-www
# open http://localhost:8080
```

## QA

- [PageSpeed](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fheidi-baettig.ch)
