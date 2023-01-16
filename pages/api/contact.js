const nodemailer = require("nodemailer");

const contact = async (req, res) => {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.easyname.eu",
    port: 465,
    secure: true,
    auth: {
      user: "office@elliptic-it.com",
      pass: "elliptic_1981",
    },
  });

  await transporter
    .sendMail({
      from: "office@elliptic-it.com",
      to: "contact@elliptic-it.com",
      subject: subject,
      html: `
          <h3>Message from ${name}</h3>
          <p>${message}</p>
          <p>Sender Email : ${email}</p>
          `,
    })
    .then(() => {
      res.status(200).json({ message: "Message Sent" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "Message not sent" });
    });
};

export default contact;
