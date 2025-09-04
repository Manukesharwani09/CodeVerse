"use client";
// If the file exists at src/components/LoginButton.tsx, keep this line.
// Otherwise, update the path below to the correct relative location, for example:
//import LoginButton from "../components/LoginButton";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

function HeaderProfileBtn() {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>

      <SignedOut>
        <SignInButton/>
        {/* <LoginButton /> */}
      </SignedOut>
    </>
  );
}
export default HeaderProfileBtn;