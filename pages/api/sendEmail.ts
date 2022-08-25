// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
let nodemailer = require('nodemailer')
type Data = {
  name: string
}
import prisma from '../../lib/prisma';
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //prisma.
  // const mailData = {
  //   from: 'demo@demo.com',
  //   to: 'your email',
  //   subject: `Message From ${req.body.name}`,
  //   text: req.body.message,
  //   html: <div>{req.body.message}</div>
  //  }
  
  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   host: "smtp.gmail.com",
  //   auth: {
  //     user: 'bolormaaamarzayakb@gmail.com',
  //     pass: 'password',
  //   },
  //   secure: true,
  // })
  // transporter.sendMail(mailData, function (err, info) {
  //   if(err)
  //     console.log(err)
  //   else
  //     console.log(info)
  // })
  res.status(200).json({ name: 'John Doe' })
}
