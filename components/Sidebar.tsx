"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import ListItem from "./ListItem";

const Sidebar: React.FC = () => {
  const [membersOpen, setMembersOpen] = useState(true);

  return (
    <div className="w-64 bg-white flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-4 flex items-center">
        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-2">
          <span className="text-gray-600 font-bold">K</span>
        </div>
        <span className="text-gray-800 font-semibold">KKHC</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto">
        <ListItem href="/" icon="dashkey" label="Dashboard" />

        <div>
          <button
            className="w-full text-left py-2 px-4 flex items-center justify-between text-purple-600 bg-purple-100"
            onClick={() => setMembersOpen(!membersOpen)}
          >
            <div className="flex items-center">
              
              <ListItem href="/members" icon="members" label="Members" />
            </div>
            {membersOpen ? (
              <FaChevronDown size={12} />
            ) : (
              <FaChevronRight size={12} />
            )}
          </button>
          {membersOpen && (
            <div className="pl-12 bg-purple-50">
              <ListItem href="/members/addmember" icon="addmember" label="Add Member" />
              <ListItem href="/members/addchild" icon="addmember" label="Add Child" />
              <ListItem href="/members/family" icon="family" label="Create Family" />
              <ListItem href="/members/family/list" icon="list" label="All Families" />
            </div>
          )}
        </div>

        <ListItem
          href="/services"
          icon="services"
          label="Services"
          hasChevron
        />
        <ListItem href="/income" icon="income" label="Income" hasChevron />
        <ListItem href="/admin" icon="admin" label="Admins" hasChevron />
        <ListItem href="/help" icon="help" label="Help" hasChevron />
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
    </div>
  );
};

export default Sidebar;
