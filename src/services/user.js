import { cookies } from "next/headers";

const baseUrl = process.env.KINDERGARTEN_API;

const getUser = async () => {
  const authorization = cookies().get('token').value;
  const data = await fetch(`${baseUrl}/user/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authorization}`,
    },
  });
  const user = await data.json();
  return user;
};

export default getUser;
