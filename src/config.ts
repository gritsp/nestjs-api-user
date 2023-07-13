import { config } from 'dotenv';
import { join } from 'path';

// Load the .env file
config({ path: join(__dirname, '../.env') });

export default {
  mongodbURI: process.env.MONGODB_URI,
  passPhrase: process.env.PASSPHRASE,
};
