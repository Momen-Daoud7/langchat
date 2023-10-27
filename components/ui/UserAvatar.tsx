import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "@/lib/utils";

const UserAvatar = ({
  name,
  image,
  className,
}: {
  name: string;
  image: string;
  className?: string;
}) => {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      {/* <AvatarImage src="" /> */}
      <AvatarFallback className="dark:bg-white dark:text-black text-lg">
        {name
          ?.split("")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
};
export default UserAvatar;