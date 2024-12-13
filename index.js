const express = require('express')
const session = require('express-session')
const fileUpload = require('express-fileupload');
const app = express()
const port = 3000
const indexRouter = require('./routes/indexRouter');
const bodyParser = require('body-parser');
const loginRouter = require("./routes/loginRouter");
const registrationRouter = require("./routes/registrationRouter");
const requestRouter = require("./routes/requestRouter");
const houseRouter = require("./routes/houseRouter");

app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

app.use(session({
	secret: 'estateagency',
	resave: false,
	saveUninitialized: true,
}))

app.set('view engine', 'ejs');

app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/registration', registrationRouter)
app.use('/requests', requestRouter)
app.use('/houses', houseRouter)

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})

