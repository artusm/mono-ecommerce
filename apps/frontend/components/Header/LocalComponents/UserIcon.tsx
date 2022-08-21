import { NavButton } from '@ecommerce/shared/ui/NavButton';
import React from "react";

export const UserIcon: React.FC = () => {
  const user = true;

  return <NavButton type="user" loading={!user} />;
};
