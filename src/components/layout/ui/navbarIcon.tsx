"use client";

import Link from "next/link";

export default function Icon() {
  return (
    <Link
      href={"#"}
      className="relative flex items-center justify-center rounded-full p-2 text-gray-500 dark:text-gray-600 hover:bg-primary/20 dark:hover:bg-primary/30 hover:text-primary dark:hover:text-primary transition-colors cursor-auto"
    >
      <svg
        className="h-9 w-9 cursor-pointer"
        fill="currentColor"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
      </svg>
    </Link>
  );
}
