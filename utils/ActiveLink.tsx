"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { utilPropType } from "@/types/types";

const ActiveLink: React.FC<utilPropType> = ({ children, href, className }) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  console.log(router)
  // const style = {
  //   marginRight: 10,
  //   color: router.asPath === href ? 'red' : 'black',
  // }

  const handleClick = (e: any): void => {
    e.preventDefault();
    router.push(href);
  };
  useEffect(() => {
    setMounted(true);
  }, [router]);

  if (mounted) {
    return (
      <Link href={href} onClick={handleClick} className={className}>
        {children}
      </Link>
    );
  }
};

export default ActiveLink;
