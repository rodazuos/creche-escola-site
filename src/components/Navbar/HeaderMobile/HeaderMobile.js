"use client";

import Stack from "@mui/material/Stack";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Loading from "../../Loading";
import styles from "./HeaderMobile.module.css";
import Menu from "../Menu/Menu";
import Avatar from "../Avatar";
import AvatarMUI from "@mui/material/Avatar";
import imgProfiler from "./profile.png";
import Typography from "@mui/material/Typography";
import { UserSession } from "@/components/userSession/UserSession";

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { name } = UserSession();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickNotification = () => {
    setIsLoading(true);
    if (router.pathname === "/serviceQueue") {
      router.reload();
    } else {
      router.push("/serviceQueue");
    }
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: "#bbc1df",
        }}
        paddingY={1}
        paddingX={2}
      >
        <Avatar />
        <Stack direction="row" spacing={4} alignItems="center">
          <Badge
            badgeContent={1}
            color="primary"
            onClick={handleClickNotification}
          >
            <NotificationsIcon sx={{ fontSize: 24 }} />
          </Badge>
          <MenuIcon
            sx={{
              border: "1px solid var(--color-brand-auxliar)",
              borderRadius: "8px",
              backgroundColor: "var(--color-brand-auxliar)",
              fontSize: 34,
              padding: "4px",
              color: "#000000",
              cursor: "pointer",
            }}
            onClick={handleOpenMenu}
          />
        </Stack>
        <Loading open={isLoading} />
      </Stack>
      {openMenu && (
        <div className={styles.ModalMenu}>
          <Stack spacing={1} sx={{ height: "100vh" }}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              sx={{ minWidth: "100%" }}
            >
              <CloseIcon
                sx={{
                  border: "1px solid var(--color-brand-auxliar)",
                  borderRadius: "8px",
                  backgroundColor: "var(--color-brand-auxliar)",
                  fontSize: 34,
                  padding: "4px",
                  color: "#000000",
                  cursor: "pointer",
                }}
                onClick={handleOpenMenu}
              />
            </Stack>
            <Stack
              direction="row"
              paddingBottom={2}
              spacing={2}
              alignItems="center"
            >
              <AvatarMUI
                alt="Imagem Perfil"
                src={imgProfiler.src}
                sx={{
                  width: 56,
                  height: 56,
                }}
              />
              <Typography>Oi, {name}</Typography>
            </Stack>
            <Stack>
              <Menu openMenu={openMenu} useBorder={true} />
            </Stack>
          </Stack>
        </div>
      )}
    </>
  );
};

export default HeaderMobile;
