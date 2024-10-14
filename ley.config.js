import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const option = {
  transform: {
    ...postgres.camel,
    undefined: null,
  },
};

export default option;
