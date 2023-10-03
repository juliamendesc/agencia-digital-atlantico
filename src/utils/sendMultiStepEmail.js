import getBody from './getbody';

async function sendMultistepEmail(data, setFormStatus) {
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
        setFormStatus({
          clientName: data.personalData.nome,
          success: true,
        });
      }
    })
    .catch(() => {
      console.log("Error: Couldn't send email");
    });
}

export default sendMultistepEmail;
