"use client";

import React, { FormEvent, useRef } from "react";

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;
    if (!input) return;

    if (inputRef.current.value) {
      inputRef.current.value = "";
    }

    try {
      // Api call to start scraper
      const response = await fetch("/activateScraper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: input }),
      });
    } catch (error) {
      console.log(error);
    }

    // Wait for response
  };

  return (
    <header>
      <form
        className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-[#6E6BFF] max-w-md mx-auto"
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          className="flex-1 outline-none bg-transparent text-white placeholder:text-indigo-300"
          type="text"
          placeholder="Search..."
        />
        <button className="hidden">Search</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-indigo-300 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </form>
    </header>
  );
};

export default Header;
