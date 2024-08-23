import React from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

interface ListItemProps {
  href: string;
  icon: string;
  label: string;
  hasChevron?: boolean;
  isActive?: boolean;
  isChevOpen?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  icon,
  label,
  href,
  hasChevron = false,
  isActive = false,
  isChevOpen = false,
}) => {
  return (
    <Link
      href={href}
      className={`py-2 px-4 flex items-center text-gray-600 rounded-lg hover:bg-purple-50 ${
        isActive && "bg-[#5932EA] hover:bg-[#5932EA] text-white"
      }`}
    >
      <span className="w-5 h-5 mr-3 flex items-center justify-center">
        <Image
          src={isActive ? `/white/${icon}.svg` : `/${icon}.svg`}
          width={20}
          height={20}
          alt={label}
        />
      </span>
      <span className="flex-1">{label}</span>
      {hasChevron && (isChevOpen ? (
        <FaChevronDown size={12} />
      ) :  (
        <FaChevronRight size={12} />
      ))}
    </Link>
  );
};

export default ListItem;
