import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response, next: NextRequest) {
  const { emailAddress, name, message } = await req.json();

  const recepients =
    (process.env.EMAIL_RECEPIENTS &&
      (JSON.parse(process.env.EMAIL_RECEPIENTS) as string[])) ||
    undefined;

  // // EMAIL CONTENT
  // const content = {
  //   personalizations: [
  //     {
  //       to: recepients?.map((recepient: string) => ({ email: recepient })),
  //       subject: name || "No Subject",
  //     },
  //   ],
  //   from: { email: emailAddress },
  //   content: [{ type: "text/html", value: message }],
  // };

  // // AXIOS CONFIG
  // const options = {
  //   method: "POST",
  //   url: process.env.SEND_GRID_EMAIL_URL,
  //   headers: {
  //     "content-type": "application/json",
  //     "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  //     "X-RapidAPI-Host": process.env.RAPID_API_HOST,
  //   },
  //   data: JSON.stringify(content),
  // };

  // const response = await axios.request(options);

  // const { status, statusText } = response;

  // return NextResponse.json({
  //   data: recepients?.map((recepient: string) => ({ email: recepient })),
  // });

  const options = {
    method: "POST",
    url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "c2b0993224msh0961482e3933db6p17f5c2jsnaf06dfbc4de1",
      "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
    },
    data: {
      personalizations: [
        {
          to: recepients?.map((recepient: string) => ({ email: recepient })),
          subject: name || "No Subject",
        },
      ],
      from: {
        email: emailAddress,
      },
      content: [
        {
          type: "text/html",
          value: message,
        },
      ],
    },
  };

  const response = await axios.request(options);

  return NextResponse.json({
    data: response.data,
  });
}
