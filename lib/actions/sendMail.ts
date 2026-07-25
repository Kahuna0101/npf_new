"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendWhistleblowingFormMail(data: any) {
  try {
    const { firstName, lastName, subject, email, number, message } = data;

    const result = await resend.emails.send({
      from: "NPF Pension <noreply@npfpensions.com.ng>",
      to: ["whistleblowing@npfpensions.com.ng"],
      subject: subject,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${number}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

export async function SendContactFormMail(data: any) {
  try {
    const {
      firstName,
      lastName,
      email,
      number,
      subject,
      message,
    } = data;

    const result = await resend.emails.send({
      from: "NPF Pension <noreply@npfpensions.com.ng>",
      to: ["contact@npfpensions.com.ng"],
      subject: subject || "New Contact Form Submission",

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111827; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <div style="background-color: #003366; padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: #ffffff; margin: 0;">
              New Contact Form Submission
            </h2>
          </div>

          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 10px 10px; background-color: #ffffff;">

            <p>
              <strong>Full Name:</strong><br />
              ${firstName} ${lastName}
            </p>

            <p>
              <strong>Email Address:</strong><br />
              ${email}
            </p>

            <p>
              <strong>Phone Number:</strong><br />
              ${number}
            </p>

            <p>
              <strong>Subject:</strong><br />
              ${subject}
            </p>

            <div style="margin-top: 20px;">
              <strong>Message:</strong>

              <div style="
                margin-top: 10px;
                padding: 16px;
                background-color: #f9fafb;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
                white-space: pre-line;
              ">
                ${message}
              </div>
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;" />

            <p style="font-size: 14px; color: #6b7280;">
              This email was submitted from the NPF Pension website contact form.
            </p>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Failed to send email",
    };
  }
}

export async function SendPencomFormMail(data: any) {
  try {
    const { title, firstName, middleName, lastName, rsaPin, email, number, homeAddress, town, country, consent } = data;

    const result = await resend.emails.send({
      from: "NPF Pension <noreply@npfpensions.com.ng>",
      to: ["pencare@npfpensions.com.ng"],
      subject: "New PenCare Healthcare Consent Submission",

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New PenCare Healthcare Consent Submission</h2>

          <hr />

          <p><strong>Title:</strong> ${title}</p>

          <p>
            <strong>Full Name:</strong>
            ${firstName} ${middleName} ${lastName}
          </p>

          <p><strong>RSA PIN:</strong> ${rsaPin}</p>

          <p><strong>Email Address:</strong> ${email}</p>

          <p><strong>Phone Number:</strong> ${number}</p>

          <p><strong>Home Address:</strong> ${homeAddress}</p>

          <p><strong>Town:</strong> ${town}</p>

          <p><strong>Country:</strong> ${country}</p>

          <p>
            <strong>Consent Accepted:</strong>
            ${consent ? "Yes" : "No"}
          </p>

          <hr />

          <p>
            This submission was sent from the NPF Pension website.
          </p>
        </div>
      `,
    });

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Failed to send email",
    };
  }
}

export async function SendNewsletterMail(data: any) {
  try {
    const { email } = data;

    const result = await resend.emails.send({
      from: "NPF Pension <noreply@npfpensions.com.ng>",
      to: ["contact@npfpensions.com.ng"],
      subject: "New Newsletter Subscription",

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111827; max-width: 600px; margin: 0 auto; padding: 20px;">

          <div style="background-color: #003366; padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: #ffffff; margin: 0;">
              Newsletter Subscription
            </h2>
          </div>

          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 10px 10px; background-color: #ffffff;">

            <p>
              A new user has subscribed to the NPF Pension newsletter.
            </p>

            <div style="
              margin-top: 20px;
              padding: 16px;
              background-color: #f9fafb;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
            ">
              <strong>Email Address:</strong><br />
              ${email}
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;" />

            <p style="font-size: 14px; color: #6b7280;">
              This subscription was submitted from the NPF Pension website newsletter form.
            </p>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Failed to send email",
    };
  }
}

export async function SendMultiFundFormMail(data: any) {
  try {
    const {
      applicationType,      
      penNo,
      title,
      surname,
      firstName,
      middleName,
      ippisNo,
      phoneNo1,
      phoneNo2,
      dateOfBirth,
      email,
      employerName,
      preferredFund,
      consent,
    } = data;

    const result = await resend.emails.send({
      from: "NPF Pension <noreply@npfpensions.com.ng>",
      to: ["contact@npfpensions.com.ng"],
      subject: "New Multi-Fund Structure Consent Submission",

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Multi-Fund Structure Consent Submission</h2>

          <hr />

          <h3>Application Details</h3>

          <p>
            <strong>Application Type:</strong>
            ${applicationType}
          </p>

          <p>
            <strong>PENSION No.:</strong>
            ${penNo}
          </p>

          <p>
            <strong>Preferred Fund:</strong>
            ${preferredFund}
          </p>

          <hr />

          <h3>Contributor Details</h3>

          <p>
            <strong>Title:</strong>
            ${title}
          </p>

          <p>
            <strong>Full Name:</strong>
            ${surname} ${firstName} ${middleName || ""}
          </p>

          <p>
            <strong>IPPIS No.:</strong>
            ${ippisNo}
          </p>

          <p>
            <strong>Date of Birth:</strong>
            ${dateOfBirth}
          </p>

          <p>
            <strong>Email Address:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone No. 1:</strong>
            ${phoneNo1}
          </p>

          <p>
            <strong>Phone No. 2:</strong>
            ${phoneNo2 || "Not provided"}
          </p>

          <p>
            <strong>Name of Employer:</strong>
            ${employerName}
          </p>

          <hr />

          <h3>Attestation / Indemnity</h3>

          <p>
            <strong>Consent Accepted:</strong>
            ${consent ? "Yes" : "No"}
          </p>

          <hr />

          <p>
            This submission was sent from the NPF Pensions website.
          </p>
        </div>
      `,
    });

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Failed to send Multi-Fund consent email",
    };
  }
}