import Image from '../../../../node_modules/next/image';

const NextImage = (props) => (
  <Image
    unoptimized
    {...props}
    loader={({ src }) => src}
    blurDataURL={props.src}
  />
);

export default NextImage;
