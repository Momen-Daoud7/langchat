'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../ui/UserAvatar";
import { Session } from "next-auth";
import { signIn , signOut} from "next-auth/react";
import { Button } from "../ui/button";

const UserButton = ({session}: {session: Session | null}) => {
  if (!session) return (
    <Button variant={'outline'} onClick={() => signIn()}>Sign In</Button>
  )
  return (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar image={session.user?.image} name={session.user?.name} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem>Light</DropdownMenuItem>
          <DropdownMenuItem>Dark</DropdownMenuItem> */}
          <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
};
export default UserButton;
