'use client'

import { Divider, Stack, Typography } from "@mui/material";


const HeaderPageContent = (props) => {
    const { title } = props;

    return <Stack spacing={1}>
        <Typography fontWeight={600}>{title}</Typography>
        <Divider />
    </Stack>
}

export default HeaderPageContent;