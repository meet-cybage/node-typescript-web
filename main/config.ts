const loggingLevel: 'info' | 'warn' | 'error' | undefined = 'error';

const config = {
    credentials: {
      tenantID: "process.env.AUTH_TENANT_ID",
      clientID: "process.env.AUTH_CLIENT_ID "?? '',
      clientSecret: "process.env.AUTH_CLIENT_SECRET",
      audience: "process.env.AUTH_CLIENT_ID",
    },
    metadata: {
      authority: 'login.microsoftonline.com',
      discovery: '.well-known/openid-configuration',
      version: 'v2.0',
    },
    settings: {
      validateIssuer: true,
      passReqToCallback: false,
      loggingLevel: loggingLevel,
      loggingNoPII: true, // set to false for more detailed logging
    },
    splunk: {
      environment: process.env.ENV,
    },
    db: {
      hosts: {
        write: process.env.DB_HOST,
        read: process.env.DB_HOST_READ,
      },
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
};
  
export default config;
