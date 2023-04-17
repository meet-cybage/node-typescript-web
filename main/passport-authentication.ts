import express from "express"
import passport from 'passport'
import {
  BearerStrategy,
  IBearerStrategyOptionWithRequest,
  ITokenPayload,
  VerifyCallback,
} from 'passport-azure-ad'
import config from './config';


const options: IBearerStrategyOptionWithRequest = {
    identityMetadata: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}/${config.metadata.discovery}`,
    issuer: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}`,
    clientID: config.credentials.clientID,
    audience: config.credentials.audience,
    validateIssuer: config.settings.validateIssuer,
    passReqToCallback: config.settings.passReqToCallback,
    loggingLevel: config.settings.loggingLevel,
    //scope: config.resource.scope,
    loggingNoPII: config.settings.loggingNoPII,
  };
  
const bearerStrategy = new BearerStrategy(
    options,
    (token: ITokenPayload, done: VerifyCallback) => {
        const user = { id: token.oid };
        return done(null, user, token);
    }
);


export class PassportConfiguration{

    app: express.Application
    
    constructor(app: express.Application){
        this.app = app
    }

    configure(){
        this.app.use(passport.initialize())
        passport.use(bearerStrategy)

        this.app.use(
            passport.authenticate('oauth-bearer', { session: false }),
            // authMiddleware
        );
    }

}
