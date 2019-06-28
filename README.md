### Notes
This is a responsive react+redux app that consumes tmdb API to allow the users discover, filter and sort TV series. You can access a live version at http://51.158.107.246/ . All pages are responsive for desktop, tablet and mobile screen sizes. Users can bookmark tv series and seasons and come back to them at a later time. The bookmarks are persisted in browser by localStorage. Test coverage is not ideal because of time constraints. 
TMDB enforces rate restriction on api requests. In a real world scenario, API requests can proxied to a backend with an applicaiton level cache (redis, memcache etc). You can also have caching at HTTP server level, for instance with Varnish or at CDN level.

<img src="https://i.paste.pics/95f66c9ef70073fbeabf171cb589bc59.png" width="450">
<img src="https://i.paste.pics/a9fc6f4f54d7d48344e151db59eaab45.png" width="450">
<img src="https://i.paste.pics/b5a12edfb1c8d7f3cef33720af32ad60.png" width="450">
<img src="https://i.paste.pics/0d12488686a80b483c010e4fda93b284.png" width="250">
<img src="https://i.paste.pics/6beed6cda3d2587aad0e9de87d19c5b8.png" width="450">

## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
