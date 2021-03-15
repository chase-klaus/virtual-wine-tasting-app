require('dotenv').config(); 
import * as express from 'express';
// import express from 'express'
import * as cors from 'cors';
import router from './router';
import sequelize from './models';
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get("/", (res:express.Response) => {
  res.status(200).json({ message: "Hello from the Express Server 🍷" });
});

sequelize.sync();

const PORT = process.env.PORT || 3001;
app.listen(PORT, ():void => {
  console.log(`Server is running on port http://localhost:${PORT}🍷.`);
});

// export default app;