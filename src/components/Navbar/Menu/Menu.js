"use client"

import Stack from "@mui/material/Stack"
import MenuItem from "./MenuItem/MenuItem"
import Divider from "@mui/material/Divider"
import { UserSession } from "@/components/userSession/UserSession"

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FlatwareIcon from '@mui/icons-material/Flatware';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventIcon from '@mui/icons-material/Event';

const Menu = (props) => {
    const { openMenu, useBorder = false } = props
    const { idTypeAccount } = UserSession()

    const isAdmin = idTypeAccount === 1;

    return (
        <Stack spacing={openMenu ? 1 : 1.5}>
            {isAdmin && (
                <>
                    <MenuItem
                        text="Creche / Escola"
                        link="/kindergarten"
                        openMenu={openMenu}
                        useBorder={useBorder}
                    >
                        <ApartmentIcon
                            titleAccess="Creche / Escola"
                            style={{ cursor: "pointer" }}
                        />
                    </MenuItem>
                    <MenuItem
                        text="Funcionários"
                        link="/users"
                        openMenu={openMenu}
                        useBorder={useBorder}
                    >
                        <SupervisorAccountIcon
                            titleAccess="Funcionários"
                            style={{ cursor: "pointer" }}
                        />
                    </MenuItem>
                    <MenuItem
                        text="Responsáveis"
                        link="/users"
                        openMenu={openMenu}
                        useBorder={useBorder}
                    >
                        <FamilyRestroomIcon
                            titleAccess="Responsáveis"
                            style={{ cursor: "pointer" }}
                        />
                    </MenuItem>
                    <MenuItem
                        text="Alunos"
                        link="/users"
                        openMenu={openMenu}
                        useBorder={useBorder}
                    >
                        <ManageAccountsIcon
                            titleAccess="Alunos"
                            style={{ cursor: "pointer" }}
                        />
                    </MenuItem>
                    <MenuItem
                        text="Turma"
                        link="/users"
                        openMenu={openMenu}
                        useBorder={useBorder}
                    >
                        <Diversity3Icon
                            titleAccess="Turma"
                            style={{ cursor: "pointer" }}
                        />
                    </MenuItem>
                    <MenuItem
                        text="Eventos"
                        link="/users"
                        openMenu={openMenu}
                        useBorder={useBorder}
                    >
                        <EventIcon
                            titleAccess="Eventos"
                            style={{ cursor: "pointer" }}
                        />
                    </MenuItem>
                    <Divider />
                </>
            )}
            <MenuItem
                text="Cardápio"
                link="/users"
                openMenu={openMenu}
                useBorder={useBorder}
            >
                <FlatwareIcon
                    titleAccess="Cardápio"
                    style={{ cursor: "pointer" }}
                />
            </MenuItem>
            <MenuItem
                text="Diário"
                link="/users"
                openMenu={openMenu}
                useBorder={useBorder}
            >
                <MenuBookIcon
                    titleAccess="Diário"
                    style={{ cursor: "pointer" }}
                />
            </MenuItem>
        </Stack>
    )
}

export default Menu
