"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import ListItem from "./ListItem";
import { usePathname } from "next/navigation";
import NestedList from "./NestedList";

const Sidebar: React.FC = () => {
  const [nestedOpen, setNestedOpen] = useState({
    membersOpen: false,
    servicesOpen: false,
    childrenOpen: false,
    incomeOpen: false,
    adminsOpen: false,
    helpOpen: false,
  });
  const [membersOpen, setMembersOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 left-0 w-64 h-screen bg-white flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-4 flex items-center">
        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-2">
          <span className="text-gray-600 font-bold">K</span>
        </div>
        <span className="text-gray-800 font-semibold">KKHC</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto mx-4">
        <div
          onClick={() =>
            setNestedOpen({
              ...nestedOpen,
              membersOpen: false,
              servicesOpen: false,
              childrenOpen: false,
              incomeOpen: false,
              adminsOpen: false,
              helpOpen: false,
            })
          }
        >
          <ListItem
            href="/"
            icon="dashkey"
            label="Dashboard"
            isActive={pathname === "/"}
          />
        </div>

        <div
          className=""
          onClick={() =>
            setNestedOpen({
              ...nestedOpen,
              membersOpen: true,
              servicesOpen: false,
              childrenOpen: false,
              incomeOpen: false,
              adminsOpen: false,
              helpOpen: false,
            })
          }
        >
          <ListItem
            href="/members"
            icon="members"
            label="Members"
            isActive={pathname.startsWith("/members")}
            hasChevron
            isChevOpen={nestedOpen.membersOpen}
          />
        </div>
        {nestedOpen.membersOpen && (
          <div className="pl-12 mt-2">
            <NestedList
              href="/members/addmember"
              icon="addmember"
              label="Add Member"
              isActive={pathname === "/members/addmember"}
            />
            <NestedList
              href="/members/createfamily"
              icon="family"
              label="Create Family"
              isActive={pathname === "/members/createfamily"}
            />
            <NestedList
              href="/members/listfamily"
              icon="list"
              label="All Families"
              isActive={pathname === "/members/listfamily"}
            />
          </div>
        )}
        <div
          onClick={() =>
            setNestedOpen({
              ...nestedOpen,
              membersOpen: false,
              servicesOpen: false,
              childrenOpen: true,
              incomeOpen: false,
              adminsOpen: false,
              helpOpen: false,
            })
          }
        >
          <ListItem
            href="/children"
            icon="members"
            label="Children"
            hasChevron
            isChevOpen={nestedOpen.childrenOpen}
            isActive={pathname === "/children"}
          />
        </div>
        {nestedOpen.childrenOpen && (
          <div className="pl-12 mt-2">
            <NestedList
              href="/children/addchild"
              icon="addmember"
              label="Add Child"
              isActive={pathname === "/children/addchild"}
            />
          </div>
        )}
        <div
          onClick={() =>
            setNestedOpen({
              ...nestedOpen,
              membersOpen: false,
              servicesOpen: true,
              childrenOpen: false,
              incomeOpen: false,
              adminsOpen: false,
              helpOpen: false,
            })
          }
        >
          <ListItem
            href="/services"
            icon="services"
            label="Services"
            hasChevron
            isChevOpen={nestedOpen.servicesOpen}
            isActive={pathname === "/services"}
          />
        </div>
        <div
          onClick={() =>
            setNestedOpen({
              ...nestedOpen,
              membersOpen: false,
              servicesOpen: false,
              childrenOpen: false,
              incomeOpen: true,
              adminsOpen: false,
              helpOpen: false,
            })
          }
        >
          <ListItem
            href="/income"
            icon="income"
            label="Income"
            hasChevron
            isChevOpen={nestedOpen.incomeOpen}
            isActive={pathname === "/income"}
          />
        </div>
        <div
          onClick={() =>
            setNestedOpen({
              ...nestedOpen,
              membersOpen: false,
              servicesOpen: false,
              childrenOpen: false,
              incomeOpen: false,
              adminsOpen: true,
              helpOpen: false,
            })
          }
        >
          <ListItem
            href="/admins"
            icon="admin"
            label="Admins"
            hasChevron
            isChevOpen={nestedOpen.adminsOpen}
            isActive={pathname === "/admins"}
          />
        </div>
        <div
          onClick={() =>
            setNestedOpen({
              ...nestedOpen,
              membersOpen: false,
              servicesOpen: false,
              childrenOpen: false,
              incomeOpen: false,
              adminsOpen: false,
              helpOpen: true,
            })
          }
        >
          <ListItem
            href="/help"
            icon="help"
            label="Help"
            hasChevron
            isChevOpen={nestedOpen.helpOpen}
            isActive={pathname === "/help"}
          />
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t flex items-center">
        <Image
          src="/member.svg"
          width={32}
          height={32}
          alt="User"
          className="rounded-full mr-3"
        />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-800">User</p>
          <p className="text-xs text-gray-500">user@example.com</p>
        </div>
        <FaChevronDown size={12} className="text-gray-400" />
      </div>
    </aside>
  );
};

export default Sidebar;
