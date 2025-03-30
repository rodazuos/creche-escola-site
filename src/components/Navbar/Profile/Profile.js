"use client"

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";
import { useDevice } from "@/components/useDevice";
import Avatar from "../Avatar";
import { useState } from "react";
import Loading from "../../Loading";
import { UserSession } from "@/components/userSession/UserSession";

import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';

const Profile = (props) => {
  const { openMenu } = props;
  const router = useRouter();
  const pathname = usePathname();
  const { isMobile, isDesktop } = useDevice();
  const { name } = UserSession();

  const viewedName = name.split(' ')[0];

  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    setOpenModal(true);
    Cookies.remove("token");
    router.push("/login");
  };

  const handleChangeRouter = (routerPath) => {
    setOpenModal(true);
    if (pathname === routerPath) {
      router.refresh(routerPath);
      setOpenModal(false);
    } else {
      router.push(routerPath);
    }
  };

  return (
    <>
      <Stack spacing={2}>
        {openMenu && (
          <Paper elevation={2} sx={{ padding: "16px 8px" }}>
            <Stack alignItems="center" spacing={2}>
              <Avatar />
              <Stack paddingX={4} spacing={1}>
                <Typography
                  textAlign="center"
                  noWrap
                  style={{ fontWeight: "600" }}
                >
                  {viewedName}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <HomeIcon
                  color="success"
                  onClick={() => handleChangeRouter("/home")}
                  titleAccess="Home"
                  style={{ cursor: "pointer" }}
                />
                <AccountBoxIcon
                  color="primary"
                  onClick={() => handleChangeRouter("/account")}
                  titleAccess="Perfil"
                  style={{ cursor: "pointer" }}
                />
                <LogoutIcon
                  color="error"
                  onClick={handleLogout}
                  titleAccess="Sair"
                  style={{ cursor: "pointer" }}
                />
              </Stack>
            </Stack>
          </Paper>
        )}
        {!openMenu && (
          <>
            <Stack alignItems="center" spacing={2}>
              <Avatar />
              <HomeIcon
                color="success"
                onClick={() => handleChangeRouter("/home")}
                titleAccess="Home"
                style={{ cursor: "pointer" }}
              />
              <AccountBoxIcon
                color="primary"
                onClick={() => handleChangeRouter("/account")}
                titleAccess="Perfil"
                style={{ cursor: "pointer" }}
              />
              <LogoutIcon
                color="error"
                onClick={handleLogout}
                titleAccess="Sair"
                style={{ cursor: "pointer" }}
              />
            </Stack>
          </>
        )}
      </Stack>
      <Loading open={openModal} />
    </>
  );
};

export default Profile;
