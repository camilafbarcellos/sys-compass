import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import User from './models/user';
import Post from './models/post';

// server port
const PORT = 9000;
// server host
const HOSTNAME = 'http://localhost';

// app express
const app = express();

// cors -> browser cross-origin resource sharing
app.use(cors({
    origin: ['http://localhost:3000']
}));

// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handles GET request to users
app.get('/users', cors(), (req: Request, res: Response) => {
    const rawJson = fs.readFileSync(__dirname + '/list-users.json', 'utf-8');
    const users: User[] = JSON.parse(rawJson);
    res.json(users);
});

// handles GET request to posts
app.get('/posts', cors(), (req: Request, res: Response) => {
    const rawJson = fs.readFileSync(__dirname + '/list-posts.json', 'utf-8');
    const posts: Post[] = JSON.parse(rawJson);
    res.json(posts);
});

// handles default requests
app.use((req: Request, res: Response) => {
    res.status(404).send();
})

// starts the server
app.listen(PORT, () => {
    console.log(`Server started on ${HOSTNAME}:${PORT}`);
});