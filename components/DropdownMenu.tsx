import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const { user, logout } = useAuth();

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      setLoggedIn(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Image
          src="/images/default-blue.png"
          alt="profile-icon"
          width={35}
          height={35}
          className="rounded cursor-pointer"
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="flex justify-center min-w-[180px] mr-20 mt-2 py-2 bg-black/70  shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] ">
        <DropdownMenu.Item className="text-sm">
          <button onClick={handleLogout}>Sign out of Netflix</button>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
