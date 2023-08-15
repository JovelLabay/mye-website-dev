import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response, next: NextRequest) {
  const { emailAddress, firstName, lastName, fileUrl, message } =
    await req.json();

  const recepients =
    (process.env.EMAIL_RECEPIENTS &&
      (JSON.parse(process.env.EMAIL_RECEPIENTS) as string[])) ||
    undefined;

  const options = {
    method: "POST",
    url: process.env.SEND_GRID_EMAIL_URL as string,
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST as string,
    },
    data: {
      personalizations: [
        {
          to: recepients?.map((recepient: string) => ({ email: recepient })),
          subject: "MYE Application",
        },
      ],
      from: {
        email: emailAddress,
      },
      content: [
        {
          type: "text/html",
          value: `
          <h4>Good Day!</h4>
          ${message}
          <p>Here is a copy of my resume</p>
          ${fileUrl}
          <h5>Best,</h5>
          <h4>${firstName} ${lastName}</h4>
          <h3>Developed by Eluvent Platforms</h3>
        `,
        },
      ],
    },
  };

  const response = await axios.request(options);

  return NextResponse.json({
    data: response.data,
  });
}
