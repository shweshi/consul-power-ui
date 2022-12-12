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

## Requirements
- Node.js
- React.js

## Development Setup
- Install necessary dependency for the dashboard.
```
npm install
```

- Install necessary dependency for the proxy server.
```
cd proxy
npm install
```

## How to use?

In the project directory, run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

The UI needs a proxy server avoid CORS issue with Consul API. So we need to start proxy server.
Run the proxy server:

```
cd proxy
node app.js
```

## How to configure the Consul URL
1. In proxy/app.js update the URL with your consul url.
```
app.use('/', createProxyMiddleware("/", {
  target: "http://localhost:8500",    <------CHANGE URL HERE
  changeOrigin: true,
}));
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

