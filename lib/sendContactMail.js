const sendContactMail = async (data) => {
  const response = await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  return resData;
};

export default sendContactMail;
