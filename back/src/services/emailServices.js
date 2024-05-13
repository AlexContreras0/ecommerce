const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({

    service: "gmail",
    auth: {
        user: "tiendaagricola@gmail.com",
        pass: "",
    },

})

const sendEmail = async (to, subject, html) => {

    try {
        const mailOptions = {
            from: "tiendaagricola@gmail.com",
            to: to,
            subject: subject,
            html: html,
        }
        await transporter.sendMail(mailOptions)
        console.log("Se ha enviado correctamente")

    } catch (error) {
        console.log("No se ha enviado el correo", error)
    }
}

module.exports = sendEmail