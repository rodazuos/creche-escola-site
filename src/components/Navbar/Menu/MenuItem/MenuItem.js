"use client";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useRouter, usePathname } from "next/navigation";
import styles from "./MenuItem.module.css";
import Loading from "@/components/Loading";
import { useState } from "react";
import Link from "next/link";

const MenuItem = (props) => {
  const { children, text, link, openMenu, useBorder } = props;
  const router = useRouter();
  const pathname = usePathname();

  const [openModal, setOpenModal] = useState(false);

  const handleRoute = (e, pathURI) => {
    if (e.ctrlKey || e.metaKey) return;
    setOpenModal(true);
    if (pathname === pathURI) {
      router.refresh(pathURI);
      setOpenModal(false);
    }
  };

  return (
    <>
      <Link href={link} onClick={(e) => handleRoute(e, link)}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent={!openMenu ? "center" : "left"}
          padding={useBorder ? 1 : 0.5}
          className={styles.ItemOverflow}
          border={useBorder ? 1 : 0}
          borderColor="#c5c5c5"
        >
          {children}
          {openMenu && <Typography>{text}</Typography>}
        </Stack>
      </Link>
      <Loading open={openModal} />
    </>
  );
};

export default MenuItem;
