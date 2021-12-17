import Image, { ImageLoaderProps, ImageProps } from 'next/image';

const flagLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  return `https://flag.pk/flags/4x3/${(src || 'EU').toLowerCase()}.svg?w=${width}&q=${quality || 75}`;
}

const Flag = ({
  src,
  ...props
}: Omit<ImageProps, "src"> & {
  src: string,
}) => {  
  const {
    width,
    height,
    ...otherProps
  } = props;

  return (
    <Image
      width={width || 21}
      height={height || 15}
      loader={flagLoader}
      src={src || 'EU'}
      {...otherProps as any}
    />
  );
}

export default Flag;
