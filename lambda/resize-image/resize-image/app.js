exports.lambdaHandler = async (event, context) => {
  const s3 = event.Records[0].s3;
  console.log(s3.object.key);
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "S3",
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
