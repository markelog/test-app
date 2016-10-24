import production from './configs/production';
import development from './configs/development';

const isProduction = process.env.NODE_ENV === 'production';
const config = isProduction ? production : development;

export default config;
