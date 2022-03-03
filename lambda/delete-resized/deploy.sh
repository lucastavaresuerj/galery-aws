npm install --prefix ./${FOLDER_NAME}
sam deploy \
  --stack-name "${STACK_NAME}-${FOLDER_NAME}" \
  --s3-bucket ${S3_BUCKET_DEPLOY} \
  --s3-prefix "lambda/${FOLDER_NAME}" \
  --parameter-overrides \
      S3SNSTopic=${S3_BUCKET_IMAGE_SNS_DELETE} \
      S3StorageBucketName=${S3_BUCKET_IMAGE} \
  --capabilities CAPABILITY_IAM