import React from 'react';

import { NavButton } from '@ecommerce/shared/ui/NavButton';

export const UserIcon: React.FC = () => {
    const user = true;

    return <NavButton type="user" loading={!user} />;
};
