'use client'

import HeaderPageContent from "@/components/HeaderPageContent/HeaderPageContent"
import Layout from "@/components/Layout/Layout"
import { Stack } from "@mui/material"

const Form = (props) => {
    const { kindergarten } = props;

    console.log(kindergarten);

    return <Layout>
        <Stack>
            <HeaderPageContent title="Dados da Creche / Escola" />
        </Stack>
    </Layout>
}

export default Form