import Link from "next/link"
import { DarkModeToggle } from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row space-y-5 items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Link prefetch={false} href="/" className="font-bold-500 ">
          Chat With Anyone
        </Link>
        <div className="flex-1 flex justify-end items-center space-x-4">
            {/* LangaueSelect */}

            {/* sessions && (

            ) */}

            {/* Darktoggole */}
            <DarkModeToggle />
            {/* userbutton */}
        </div>
      </nav>
      {/* Upgrade banner */}
    </header>
  );
}
export default Header