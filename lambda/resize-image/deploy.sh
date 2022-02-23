echo "name: ${STACK_NAME}-${FUNC_NAME}, \
      s3-bucket: ${S3_BUCKET_DEPLOY}, \
      s3-prefix: ${FUNC_NAME}, \
      S3BucketImage: ${S3_BUCKET_IMAGE}, \
      S3_BUCKET_IMAGE_SNS: ${S3_BUCKET_IMAGE_SNS}"

sam deploy \
  --stack-name "${STACK_NAME}-${FUNC_NAME}" \
  --s3-bucket ${S3_BUCKET_DEPLOY} \
  --s3-prefix "lambda/${FUNC_NAME}" \
  --parameter-overrides \
    S3SNSTopic=${S3_BUCKET_IMAGE_SNS}