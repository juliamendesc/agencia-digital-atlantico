import getBody from './getbody';

async function sendMultistepEmail(data, setActiveStep, reset) {
  const body = await getBody(data);

  await fetch('/api/sessaoestrategica', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 200) {
        reset();
        setActiveStep(8);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export default sendMultistepEmail;
