<h2>
This is a simple API, for maps application.
AWS deploy in the process.
</h2>
<h3>Set up environment</h3>
<pre>cd docker && docker-compose -p maps_api up -d --build</pre>
Install node modules
<pre>yarn</pre>
<h3>Development</h3>
Run server
<pre>npm start</pre>
Run tests
<pre>npm test</pre>
<h3>Production</h3>
Run server
<pre>npm run prod</pre>
Run tests
<pre>npm run test:prod</pre>
