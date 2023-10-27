'use client'

import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const CreateChatButton = () => {
  const router = useRouter();

  const createChat = () => {
    router.push(`/chat/ancn`);
  };
  return (
    <Button variant={"ghost"} onClick={() => createChat()}>
      <MessageSquarePlusIcon />
    </Button>
  );
};
export default CreateChatButton;
