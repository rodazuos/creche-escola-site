import { NextResponse } from "next/server";

const baseUrl = process.env.KINDERGARTEN_API;

// export async function POST(request, context: { params }) {
export async function POST(request) {
  const payload = await request.json();
  const authLogin = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const response = await authLogin.json();
  return NextResponse.json(response, {
    status: authLogin.status,
  });
}

export async function GET(request) {
  const authorization = request.headers.get("authorization");
  const authLogin = await fetch(`${baseUrl}/authorization`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: authorization,
    },
  });
  return NextResponse.json(
    {},
    {
      status: authLogin.status,
    }
  );
}
