import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography>
                Copyright © 2021-2022 <Link to={'/'}>digitalroots.com.kw</Link> All rights reserved.
            </Typography>
        </Stack>
    );
};

export default Footer;