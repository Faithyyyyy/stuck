import Image from "next/image";
import { StaticImageData } from "next/image";

interface EmptyStateProps {
  image: string | StaticImageData;
  alt?: string;
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  image,
  alt = "",
  message,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <Image
        src={image}
        alt={alt}
        width={160}
        height={160}
        className="w-40 h-40 object-cover"
      />
      <span className="text-[#5D5D5D] text-center max-w-[556px] mx-auto font-light">
        {message}
      </span>
    </div>
  );
};

export default EmptyState;
