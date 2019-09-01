export default {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};

// authentication configuration
// secret == MD5 pass
// expiresIn == time which token will be available
