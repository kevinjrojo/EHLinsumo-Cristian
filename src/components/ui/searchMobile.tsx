"use client";

export default function SearchMobile() {
  return (
    <div className="mb-8 sm:hidden">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="h-5 w-5 text-gray-400" fill="currentColor"></svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white dark:bg-background-dark/50 w-full border dark:border-green-500 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none  sm:text-sm"
          name="search"
          placeholder="Buscar productos..."
          type="text"
        />
      </label>
    </div>
  );
}
