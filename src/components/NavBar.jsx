import React from "react";
import { LinkButton } from "./LinkButton";

export function NavBar({user}) {
  return (
    <div className="bg-blue-900 bg-opacity-25 w-auto h-14 text-white flex rounded-xl mr-3 ml-3 p-3 pb-3 space-x-3 justify-end sticky top-0">
      

      {!user.token ? (
        <LinkButton
          destiny="/login"
          text="Login"
          className="rounded-md p-2 justify-center flex items-center transition-all duration-300 hover:bg-blue-600"
        />
      ) : (
        <>
        <LinkButton
          destiny="/logout"
          text="Logout"
          className="rounded-md p-2 justify-center flex items-center transition-all duration-300 hover:bg-blue-600"
        />
        <LinkButton destiny="/" text="Home" className="rounded-md p-2 justify-center flex items-center transition-all duration-300 hover:bg-blue-600" />
        </>
      )}
    </div>
  );
}
