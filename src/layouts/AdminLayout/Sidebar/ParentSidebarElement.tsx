import React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
type Props = {
    title: string | undefined,
    path: string,
    pl: number,
    key: number,
    icon?: JSX.Element,
    children: JSX.Element
}

const ParentSidebarElement: React.FunctionComponent<Props> = ({ title, path, icon, children, pl, key }) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };



    return (
        <>
            <ListItemButton onClick={handleClick} key={key}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" sx={{ pl: pl }}>
                {children}
            </Collapse>
        </>
    );
};

export default ParentSidebarElement;