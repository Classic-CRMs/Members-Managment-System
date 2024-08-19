import React from 'react';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import ActiveLink from '@/utils/ActiveLink';

interface ListItemProps {
  icon: string;
  label: string;
  href: any;
  hasChevron?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ icon, label, href,hasChevron = false }) => {
  return (
    <ActiveLink href={href} className="py-2 px-4 flex items-center text-gray-600 hover:bg-gray-100">
      <span className="w-5 h-5 mr-3 flex items-center justify-center">
        <Image src={`/${icon}.svg`} width={20} height={20} alt={label} />
      </span>
      <span className="flex-1">{label}</span>
      {hasChevron && <FaChevronRight size={12} className="text-gray-400" />}
    </ActiveLink>
  );
};

export default ListItem;