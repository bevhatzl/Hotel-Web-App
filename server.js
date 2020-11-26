// Requiring necessary npm packages
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// Requiring passport as we've configured it
const passport = require('./config/passport');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8000;
const db = require('./models');

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: process.env.SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Requiring our routes
const htmlRoutes = require('./routes/html-routes.js');
const apiRoutes = require('./routes/api-routes.js');

app.use(htmlRoutes);
app.use(apiRoutes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
    });
});