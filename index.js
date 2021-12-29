import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => {
    console.log(`Working ${PORT}`);
})