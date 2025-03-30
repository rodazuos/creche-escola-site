import Home from '@/app/home/components/home'
import getUser from '@/services/user';
import { UserProvider } from '@/components/userSession/UserSession';

const Page = async () => {
  const user = await getUser();

  return <UserProvider user={user}>
    <Home />
  </UserProvider>;
};

export default Page;
