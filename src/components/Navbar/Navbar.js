"use client"

import Stack from "@mui/material/Stack"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useState } from "react"
import Cookies from "js-cookie"
import styles from "./Navbar.module.css"
import Header from "./Header"
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
// import HeaderMobile from "./HeaderMobile"
// import { useDevice } from "../useDevice"

const Navbar = () => {
    // const { isMobile, isDesktop } = useDevice();

    const firstAccessCookie = Cookies.get("firstAccess") === "true" || false
    const [open, setOpen] = useState(firstAccessCookie === true)
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
    const [newPassword, setNewPassword] = useState(null)

    const handleClose = () => setOpen(false)

    const handleChangePassword = async () => {
        const payload = {
            newPassword,
        }
        const response = await fetch("/api/user/me/update-password", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
        if (response.status === 200) {
            const result = await response.json()
            Cookies.set("token", result.token)
            Cookies.remove("firstAccess")
            handleClose()
        }
    }

    return (
        <>
            {/* {isMobile && <HeaderMobile />} */}
            <Header />
            <Modal open={open} onClose={handleClose}>
                <Stack className={styles.Modal} spacing={2}>
                    <Typography id="modal-modal-title">
                        Esse é seu primeiro acesso. Informe sua nova senha.
                    </Typography>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">
                            Senha
                        </InputLabel>
                        <OutlinedInput
                            autoComplete="current-password"
                            id="password"
                            name="password"
                            label="Senha"
                            type={showPassword ? "text" : "password"}
                            required
                            onChange={(e) => setNewPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <Stack direction="row" justifyContent="flex-end">
                        <Button
                            variant="contained"
                            onClick={handleChangePassword}
                            color="primary"
                        >
                            Confirmar
                        </Button>
                    </Stack>
                </Stack>
            </Modal>
        </>
    )
}

export default Navbar
