# Consul Power UI
An alternate consul UI build for power users.

<p align="center">
  <a href="https://shweshi.github.io/consul-power-ui/">
    <img alt="consul-power-ui" src="https://raw.githubusercontent.com/shweshi/consul-power-ui/main/screenshots/consul-power-ui.png" />
  </a>
</p>

## Why?
- Dark Mode
- Advanced feature such as node deregistration, json view etc.

## How to use?

### Using docker image
```
docker pull shweshi/consul-power-ui
docker run -e CONSUL_URL=<CONSUL_BASE_URL> -p 3000:3000 -p 3001:3001 shweshi/consul-power-ui
```

### Using Docker compose
```
docker-compose build --build-arg CONSUL_URL=<CONSUL_BASE_URL>
docker-compose up
```

### Running locally

## Requirements
- Node.js
- React.js

## Development Setup
- Install necessary dependency for the dashboard.
```
cd ui
npm install
```

- Install necessary dependency for the proxy server.
```
cd proxy
npm install
```

In the project directory, run:

```
cd ui
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

The UI needs a proxy server avoid CORS issue with Consul API. So we need to start proxy server.
Run the proxy server:

```
cd proxy
CONSUL_URL=<CONSUL_BASE_URL> npm run start
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

### Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE OF CONDUCT](CODE_OF_CONDUCT.md) for details.

### License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Happy coding!

