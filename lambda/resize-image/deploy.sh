sam deploy \
  --stack-name "${STACK_NAME}-${folder}"
  --s3-bucket ${S3_BUCKET_DEPLOY}
  --s3-prefix ${folder} 
  --parameter-overrides \
    S3BucketImage=${S3_BUCKET_IMAGE}
  