import bodyParser from 'body-parser';
import Express from 'express';
import { cpuHands } from './businessLogic/cpuHands';
import { Jyanken, jyankenJudge } from './businessLogic/jynkenJudge';

const app = Express();

app.use(Express.static('public'));

app.set('views', 'views');
app.set('view engine', 'ejs');

// リクエストボディの解析
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/result', urlencodedParser, (req, res) => {
    // じゃんけんの勝敗を計算します
    const me = req.query.jyanken as string;
    console.log(me);

    const cpu = cpuHands();
    const result = jyankenJudge(me, cpu);

    res.render('result', { result });
});

const port = 5000;
app.listen(port, () => {
    console.log(`listen, port ${port}`);
});
