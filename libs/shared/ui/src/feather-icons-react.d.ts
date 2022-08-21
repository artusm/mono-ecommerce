declare module 'feather-icons-react' {
  import { FC, SVGAttributes } from 'react';

  export interface IconProps extends SVGAttributes<SVGElement> {
    icon: string;
    size?: number;
    className?: string;
    fill?: string;
  }

  export default FC<IconProps>;
}
