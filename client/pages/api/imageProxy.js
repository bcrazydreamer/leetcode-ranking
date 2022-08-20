const stream = require('stream');
const { Stream } = require('stream');

export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).send("No image url found");
  const imageBlob = await fetch(url, {
    headers: {
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    },
  }).then((data) => data.body);
  if (!imageBlob) return res.status(422).send('Invalid image');
  pipeImage(res, imageBlob);
}

function pipeImage(res, imageBlob) {
  const passThrough = new Stream.PassThrough();
  stream.pipeline(imageBlob, passThrough, (err) => {
    if (err) {
      console.log(err);
      return res.status(422).send('Something went wrong')
    }
  });
  return passThrough.pipe(res);
}
