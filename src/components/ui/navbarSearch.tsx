"use client";

export default function Search() {
  return (
    <div className="hidden sm:block relative w-80">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className="h-5 w-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </div>
      <input
        className="block w-full rounded-lg border-none bg-background-light dark:bg-background-dark/50 pl-10 pr-4 py-2 text-sm text-black dark:text-black-100 placeholder-gray-400  "
        placeholder="Search"
        type="text"
      />
    </div>
  );
}
