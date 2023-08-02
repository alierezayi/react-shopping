import { Menu, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import profileImage from "../public/images/AI-3D-Female-Profile-Picture.webp";
import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";

const ProfileMenu = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const { status, data: session } = useSession();

  const logoutHandler = () => {
    Cookies.remove();
    signOut({ callbackUrl: "/sign-in" });
  };

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button>
        <Image
          src={profileImage}
          width={35}
          height={35}
          alt=""
          className="rounded-full"
        />{" "}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 px-1 w-48 sm:w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col items-center justify-center my-3 space-y-1">
            <div>
              <Image
                src={profileImage}
                width={64}
                height={64}
                alt=""
                className="h-16 w-16 rounded-full bg-gradient-to-tr from-purple-400 to-blue-500"
              />
            </div>
            <span className="text-sm">{session?.user.name}</span>
            <span className="text-xs overflow-hidden text-gray-600">
              {session?.user.email}
            </span>
          </div>
          <div className="space-y-1 mb-2">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "px-3 py-2.5 text-sm text-gray-800 rounded-md flex"
                  )}
                >
                  <UserIcon className="w-5 h-5 mr-2" />
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "px-3 py-2.5 text-sm text-gray-800 rounded-md flex"
                  )}
                >
                  <Cog6ToothIcon className="w-5 h-5 mr-2" />
                  Settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logoutHandler}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "px-3 py-2.5 text-sm text-red-500 rounded-md flex items-center w-full"
                  )}
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenu;
