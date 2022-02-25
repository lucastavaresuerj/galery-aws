let response;

const AWS = require("aws-sdk");
const sharp = require("sharp");

// get reference to S3 client
const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
  const sqsBody = JSON.parse(event.Records[0].body);
  const sqsBodyMessage = JSON.parse(sqsBody.Message);
  const s3Event = sqsBodyMessage.Records[0].s3;
  const srcBucket = s3Event.bucket.name;

  // Object key may have spaces or unicode non-ASCII characters.
  const srcKey = decodeURIComponent(s3Event.object.key.replace(/\+/g, " "));

  // Check the name of image
  if (!srcKey.match(/original-size/g)) {
    console.log("Name not match");
    return;
  }

  const dstBucket = srcBucket;
  const dstKey = srcKey.replace("original-size", "resized");

  // Infer the image type from the file suffix.
  const typeMatch = srcKey.match(/\.([^.]*)$/);
  if (!typeMatch) {
    console.log("Could not determine the image type.");
    return;
  }

  // Check that the image type is supported
  const imageType = typeMatch[1].toLowerCase();
  if (imageType != "jpg" && imageType != "jpeg" && imageType != "png") {
    console.log(`Unsupported image type: ${imageType}`);
    return;
  }

  // Download the image from the S3 source bucket.
  let origimage;
  try {
    const params = {
      Bucket: srcBucket,
      Key: srcKey,
    };
    origimage = await s3.getObject(params).promise();
  } catch (error) {
    console.log(error);
    return;
  }

  // set thumbnail width. Resize will set the height automatically to maintain aspect ratio.
  const width = 200;

  // Use the sharp module to resize the image and save in a buffer.
  let buffer;
  try {
    buffer = await sharp(origimage.Body).resize(width).toBuffer();
  } catch (error) {
    console.log(error);
    return;
  }

  // Upload the thumbnail image to the destination bucket
  try {
    const destparams = {
      Bucket: dstBucket,
      Key: dstKey,
      Body: buffer,
      ContentType: "image",
    };

    const putResult = await s3.putObject(destparams).promise();
  } catch (error) {
    console.log(error);
    return;
  }

  console.log(
    "Successfully resized " +
      srcBucket +
      "/" +
      srcKey +
      " and uploaded to " +
      dstBucket +
      "/" +
      dstKey
  );
};
