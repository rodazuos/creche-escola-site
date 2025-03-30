const baseUrl = process.env.KINDERGARTEN_API;

export async function GET(request) {
  const authorization = request.headers.get("authorization");
  const userResponse = await fetch(`${baseUrl}/user/me`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: authorization,
    },
  });
  const response = await userResponse.json();
  return NextResponse.json(response, {
    status: authLogin.status,
  });
}
