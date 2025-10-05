"use client";

import Button from "./navbarButtons";
import Logo from "./navbarLogo";

export default function MyNavbar() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 bg-green-400 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Logo />
              <Button />
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block relative w-64">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark/50 pl-10 pr-4 py-2 text-sm text-black dark:text-black-100 placeholder-black-500 dark:placeholder-blck-400 focus:ring-primary focus:border-primary"
                  placeholder="Search"
                  type="text"
                />
              </div>
              <button className="flex items-center justify-center rounded-full p-2 text-red-500 dark:text-red-400 hover:bg-primary/20 dark:hover:bg-primary/30 hover:text-primary dark:hover:text-primary transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                </svg>
              </button>
              <button className="relative flex items-center justify-center rounded-full p-2 text-gray-500 dark:text-gray-600 hover:bg-primary/20 dark:hover:bg-primary/30 hover:text-primary dark:hover:text-primary transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
