import { app, connectDB } from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});