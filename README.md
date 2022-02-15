# gallery-aws

## Objectives

- All resources that will be created should be created using cloudformation
- The front must be created using angular
- The front must be served at S3
- The front must be served using cloudFront
- Login with cognito
  - The cognito should be created from a cloudformation and attached at the amplify lib
- The images should be storage at S3
  - The images bucket should be created from a cloudformation and attached at the amplify lib
- The images should be resized for thumbnail using lambda and put at the different S3 bucket but must keep the original image
- Users should have as fields:
  - username
  - email
  - password
  - profile photo
- Images should have as fields:
  - description
  - date
  - name
  - size (of the original image)
- The images metadata (including the user profile photo) should be storage at the DynamoDB along with the owner and the security (public, private)
- The users should be able to upload images after the signin
- The users should be able to remove images after the signin if he/she is the owner of the image
- The images metadata should be fetched from appSync
