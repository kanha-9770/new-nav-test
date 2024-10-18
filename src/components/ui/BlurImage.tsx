import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageProps } from "next/image";

const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  return (
    <Image
      className={cn("transition duration-300", className)}
      src={src}
      width={width}
      height={height}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
export default BlurImage;
