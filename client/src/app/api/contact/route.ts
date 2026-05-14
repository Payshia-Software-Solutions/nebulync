import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message } = await req.json();

    console.log('Attempting to send email with:', {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      user: process.env.EMAIL_SERVER_USER,
      from: process.env.EMAIL_FROM_ADDRESS,
      to: process.env.CONTACT_RECEIVER_EMAIL
    });

    if (!process.env.EMAIL_SERVER_HOST || !process.env.EMAIL_SERVER_USER) {
      console.error('Email environment variables are missing!');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // Often needed for shared hosting SMTP
      }
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Project Inquiry: ${service} - ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Service: ${service}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #C4A35A; border-bottom: 2px solid #C4A35A; padding-bottom: 10px;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Service:</strong> ${service}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #888; margin-top: 20px;">This inquiry was sent via the Nebulync Contact Form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation to customer
    const customerMailOptions = {
      from: `"Nebulync Team" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: email,
      subject: `We've received your inquiry - Nebulync`,
      html: `
        <div style="font-family: 'Outfit', sans-serif, Arial; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 20px; border: 1px solid #C4A35A;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #C4A35A; margin: 0;">NebuLync</h1>
            <p style="color: #888; font-size: 14px; margin-top: 5px;">Innovation. Transformation. Growth.</p>
          </div>
          
          <h2 style="font-size: 20px; font-weight: 700;">Hello ${name},</h2>
          
          <p style="line-height: 1.6; color: #ccc;">
            Thank you for reaching out to us! We've received your project inquiry regarding <strong>${service}</strong> and our team is already reviewing your details.
          </p>
          
          <div style="background: rgba(196, 163, 90, 0.1); border-left: 4px solid #C4A35A; padding: 15px; margin: 25px 0;">
            <p style="margin: 0; font-size: 14px; color: #C4A35A;"><strong>What's next?</strong></p>
            <p style="margin: 5px 0 0 0; color: #eee;">One of our solution architects will contact you within 24 hours to discuss your requirements in detail.</p>
          </div>

          <p style="line-height: 1.6; color: #ccc;">
            In the meantime, feel free to explore our <a href="https://nebulync.com/#services" style="color: #C4A35A; text-decoration: none;">services</a> or learn more about <a href="https://nebulync.com/#bizflow" style="color: #C4A35A; text-decoration: none;">BizFlow ERP</a>.
          </p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: #666; text-align: center;">
            <p>© ${new Date().getFullYear()} Nebulync Software Pvt Ltd. All rights reserved.</p>
            <p>Rathnapura Rd, Pelmadulla, Sri Lanka</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
