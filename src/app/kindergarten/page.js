import Form from '@/app/kindergarten/components/form'
import getUser from '@/services/user';
import { UserProvider } from '@/components/userSession/UserSession';
import { cookies } from 'next/headers';

const baseUrl = process.env.KINDERGARTEN_API;

const Page = async () => {
    const user = await getUser();

    const authorization = cookies().get('token').value;
    const data = await fetch(`${baseUrl}/kindergarten/1`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
        },
    });
    const kindergarten = await data.json();

    return <UserProvider user={user}>
        <Form kindergarten={kindergarten} />
    </UserProvider>;
};

export default Page;
