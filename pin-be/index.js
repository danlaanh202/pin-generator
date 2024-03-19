import express from 'express';
import cors from 'cors';
import appConfig from './src/config/appConfig';
import cron from 'node-cron';
import serviceAccount from './src/serviceAccount.json';
import {cert, initializeApp} from 'firebase-admin/app';

const app = express();

app.use(cors());
app.use(express.json());

initializeApp({
  credential: cert(serviceAccount)
});

app.listen(appConfig.port, () => console.log('listening on port ' + appConfig.port));

// import SeleniumServices from './src/services/SeleniumServices';

// const seleniumServices = new SeleniumServices();

// (async () => {
//   // const imageSources = await seleniumServices.initialize();
//   console.log({imageSources});
// })();

// cron.schedule(
//   '* * * * *',
//   () => {
//     console.log('cron every minutes');
//   },
//   {
//     scheduled: true
//   }
// );
