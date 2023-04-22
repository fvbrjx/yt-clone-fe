import { AuthConfig } from "@auth0/auth0-angular";

export const auth: AuthConfig = {
  domain: 'dev-6k2wnavd.us.auth0.com',
  clientId: 'dgMSgjp87fvNTjZOrZyT3gJqabojAtyW',
  authorizationParams: {
    redirect_uri: `${window.location.origin}/login-success`,
    audience: 'http://localhost:8081/',
  },
  issuer: 'https://dev-6k2wnavd.us.auth0.com/',
  useRefreshTokens: true,
  httpInterceptor: {
    allowedList: ['http://localhost:8081/'],
  },
  cacheLocation:'localstorage'
};
