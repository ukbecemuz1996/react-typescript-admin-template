import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes, { AppRouteObject } from '../../../routes';
import ParentSidebarElement from './ParentSidebarElement';

const Sidebar = () => {
    const navigate = useNavigate();

    const renderSidebar = (
        routes: AppRouteObject[] = [],
        parentPath: string,
        level: number = 0
    ) => {
        const nextLevel = level + 1;
        return (
            <>
                {routes?.map((route, i) => {
                    const isLayout = route.layout;
                    const hasChildren =
                        route.children && route.children.length > 0
                            ? true
                            : false;
                    let path = '';

                    if (isLayout) {
                        return (
                            <Box>
                                {renderSidebar(route.children, path, level)}
                            </Box>
                        );
                    } else {
                        if (route.index) {
                            path = parentPath;
                        } else {
                            path = parentPath + route.path + '/';
                        }
                        let to = path;

                        if (path.endsWith('/')) {
                            to = path.slice(0, -1);
                        }

                        if (!hasChildren) {
                            return (
                                <ListItemButton
                                    onClick={() => navigate(to)}
                                    key={i}
                                >
                                    <ListItemIcon>{route.icon}</ListItemIcon>
                                    <ListItemText
                                        primary={route.sidebarTitle}
                                    />
                                </ListItemButton>
                            );
                        } else {
                            return (
                                <ParentSidebarElement
                                    title={route.sidebarTitle}
                                    icon={route.icon}
                                    path={path}
                                    pl={nextLevel * 2}
                                    key={i}
                                >
                                    {renderSidebar(
                                        route.children,
                                        path,
                                        nextLevel
                                    )}
                                </ParentSidebarElement>
                            );
                        }
                    }
                })}
            </>
        );
    };

    return (
        <Box width={'300px'}>
            <List component='nav'>{renderSidebar(routes, '')}</List>
        </Box>
    );
};

export default Sidebar;
