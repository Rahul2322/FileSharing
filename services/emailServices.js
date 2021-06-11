const nodemailer=require('nodemailer')

async function sendMail({from,to,sub,text,html}){
    const transporter =nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.PORT,
        secure:false,
        auth:{
            user:process.env.MAIL_USER,
            password:process.env.MAIL_PASS
        }
    })
    let info =await transporter.sendMail({
        from:`inshare<${from}>`,
        to:to,
        sub:sub,
        text:text,
        html:html
    })

}

module.exports=sendMail