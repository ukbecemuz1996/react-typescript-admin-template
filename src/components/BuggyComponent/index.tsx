import React, { useEffect } from 'react';
import { Page, User } from '../../types/api';
import api from '../../utils/api';

const BuggyComponent: React.FC = () => {
    // useEffect(() => {
    //     api.get('https://reqres.in/api/users?page=1').then((res: Page<User>) =>
    //         console.log(res.total)
    //     );
    // }, []);
    useEffect(() => {
        throw new Error('Buggy Component');
    }, []);

    return <div>Buggy Component</div>;
};

export default BuggyComponent;
