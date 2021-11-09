// whitelist
const whitelist = [ 'http://localhost:3000', 'http://localhost:8080', 'http://192.168.43.148:8080'];

const corsOptions = {
  origin(origin, callback) {
    console.log({ origin })
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = corsOptions;