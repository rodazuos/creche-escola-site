"use client";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Profile from "../Profile";
import Menu from "../Menu/Menu";
import { useEffect, useState } from "react";

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <Stack
      spacing={2}
      padding={2}
      style={{ backgroundColor: "#bbc1df", overflowY: "auto" }}
      minWidth={openMenu ? "220px" : "76px"}
    >
      <Profile openMenu={openMenu} />
      <Divider />
      <Menu openMenu={openMenu} />
      <Divider />
      <Stack
        padding="2px"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenMenu(!openMenu)}
        alignItems="center"
      >
        <Stack width="fit-content">
          {openMenu && (
            <KeyboardDoubleArrowLeftIcon
              color="primary"
              titleAccess="Esconder menu"
              style={{ cursor: "pointer" }}
            />
          )}
          {!openMenu && (
            <KeyboardDoubleArrowRightIcon
              color="primary"
              titleAccess="Exibir menu"
              style={{ cursor: "pointer" }}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
