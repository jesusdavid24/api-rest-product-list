require('dotenv').config()
const express = require('express');
const cors = require('cors');
const ProductRouter = require('./routers/product')


const app = express();
var port = process.env.PORT || 3005;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.use('/product', ProductRouter);

app.listen(port, function(){
	console.log(`Server running in localhost:${port}`)});
