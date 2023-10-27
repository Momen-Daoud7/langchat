import Link from "next/link";
import { getServerSession } from "next-auth";
import { DarkModeToggle } from "./DarkModeToggle";
import UserButton from "./UserButton";
import { authOptions } from "@/auth";
import { MessagesSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";

const Header = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 z-200">
      <nav className="flex flex-col sm:flex-row space-y-5 items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Link prefetch={false} href="/" className="font-bold">
          Chat With Anyone
        </Link>
        <div className="flex-1 flex justify-end items-center space-x-4">
          {/* LangaueSelect */}

          {session ? (
            <>
              <Link href="/chat" prefetch={false}>
                <MessagesSquareIcon />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href="pricing">Pricing</Link>
          )}

          {/* Darktoggole */}
          <DarkModeToggle />
          {/* userbutton */}
          <UserButton session={session} />
        </div>
      </nav>
      {/* Upgrade banner */}
    </header>
  );
};
export default Header;
