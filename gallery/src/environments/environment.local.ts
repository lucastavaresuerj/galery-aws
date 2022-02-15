import { env } from './secret';

export const environment = {
  production: true,
  noLogging: true,
  amplifyConfig: {
    Auth: {
      identityPoolId: env['IDENTITY_POOL_ID'], //REQUIRED - Amazon Cognito Identity Pool ID
      region: env['COGNITO_REGION'], // REQUIRED - Amazon Cognito Region
      userPoolId: env['USERPOOL_ID'], //OPTIONAL - Amazon Cognito User Pool ID
      userPoolWebClientId: env['USERPOOL_WEBCLIENT_ID'], //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
      AWSS3: {
        bucket: env['S3_STORAGE_NAME'], //REQUIRED -  Amazon S3 bucket name
        region: env['S3_STORAGE_REGION'], //OPTIONAL -  Amazon service region
      },
    },
  },
};
