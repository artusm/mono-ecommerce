declare module 'feather-icons-react' {
  import React from 'react';

  export interface IconProps extends React.SVGAttributes<SVGElement> {
    icon: string;
    size?: number;
    className?: string;
    fill?: string;
  }

  export default React.FC<IconProps>;
}
