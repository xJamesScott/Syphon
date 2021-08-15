const envSchema = require("env-schema");
const url = require("url");
const S = require("fluent-schema");


const configData = envSchema({
  data: process.env,
  // data: `.env.local`,
  schema: S.object()
    .prop("AIRTABLE_API_KEY", S.string())
    .prop("AIRTABLE_BASE_ID", S.string())
    .prop("APP_DOMAIN", S.string().default("localhost"))
    .prop("AUTH_APP_URL", S.string())
    .prop("AUTH_CLIENT_ID", S.string())//.required())
    .prop("AUTH_COOKIE_MAX_AGE_SECONDS", S.number().default(86400))
    .prop("AUTH_DOMAIN", S.string())//.required())
    .prop("AUTH_SECRET_KEY", S.string())//.required())
    .prop("AUTH_STATE", S.string())//.required())

});

const config = {
  airtable: {
    apiKey: configData.AIRTABLE_API_KEY,
    baseId: configData.AIRTABLE_BASE_ID,
  },
  appDomain: configData.APP_DOMAIN,
  auth: {
    appUrl: configData.AUTH_APP_URL,
    clientId: configData.AUTH_CLIENT_ID,
    cookieMaxAgeSeconds: configData.AUTH_COOKIE_MAX_AGE_SECONDS,
    domain: `https://${configData.AUTH_DOMAIN}`,
    jwtMongoIdKey: url.resolve(configData.AUTH_APP_URL, "mongo_id"),
    secretKey: configData.AUTH_SECRET_KEY,
    state: configData.AUTH_STATE,
  },
  env: configData.NODE_ENV,
  errorNotifier: {
    environment: configData.NODE_ENV,
    release: configData.COMMIT_HASH,
    url: configData.SENTRY_DSN,
  },
  mongo: {
    params: {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    uri:
      configData.MONGO_URI.startsWith("mongodb://") ||
        configData.MONGO_URI.startsWith("mongodb+srv://")
        ? configData.MONGO_URI
        : `mongodb://${configData.MONGO_URI}`,
  },
  
};

module.exports = { config };
