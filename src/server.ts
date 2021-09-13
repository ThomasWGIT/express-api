import express from 'express';
import { auth } from './middleware/auth.middleware';
import defaultRouter from './router/default.router';
import fileRouter from './router/file.router';
import userRouter from './router/user.router';
import router from './router/user.router';

const app = express();
const port = 3070;

app.use(auth);

app.use('/', defaultRouter);
app.use('/user', userRouter);
app.use('/file', fileRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})