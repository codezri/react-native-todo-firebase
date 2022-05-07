import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // Add your configuration
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
