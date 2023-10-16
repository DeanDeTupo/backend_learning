import express, {Request, Response} from 'express'
const app = express();
const port = 3003;

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello World !';
    res.send(helloMessage)
})

app.get('/pidors', (req: Request, res: Response) => {
    let helloMessage = 'Hello pidor !';
    res.send(helloMessage)
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

// дописываем текст для коммита

