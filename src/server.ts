import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

//server entry point
async function main() {
  // connect to mongodb database
  await mongoose.connect(config.db_url as string);

  app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });
}
main().catch((err) => console.log(err));
