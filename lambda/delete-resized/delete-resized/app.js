const AWS = require("aws-sdk");

const s3 = new AWS.S3();

/**
 * A Lambda function that logs the payload received from S3.
 */
exports.handler = async (event, context) => {
  console.log("aqui");
  const sqsBody = JSON.parse(event.Records[0].body);
  const sqsBodyMessage = JSON.parse(sqsBody.Message);
  const s3Event = sqsBodyMessage.Records[0].s3;
  const key = s3Event.object.key;

  if (!key.match(/original-size/g)) {
    console.log("Name not match");
    return;
  }

  const params = {
    Bucket: s3Event.bucket.name,
    Key: key.replace("original-size", "resized"),
  };
  try {
    await s3.deleteObject(params).promise();
    console.log(`${params.Key} deleted`);
  } catch (err) {
    console.log(err, err.stack);
  }
};
