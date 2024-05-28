import nodemailer from "nodemailer"

export default async function ContactAPI(req, res) {
    const {name, email, message} = req.body;
    const data = {name, email, message};

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        },
    });

    console.log("IN THE CONTACT API");

    try {
        const mail = await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: "business@brandonpyle.com",
            replyTo: data.email,
            subject: `Contact Form Submission From ${data.name}`,
            html:`<p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Message: ${data.message}</p>`
        });

        console.log(mail.messageId);

        return res.status(200).json({message: "success"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "There was an error. Could not send the email."})
    }

}