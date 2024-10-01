// components/LanguageSwitcher.tsx
"use client"; // This marks the component as a client component

import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/app/store/postsSlice";
import { RootState } from "../app/store/store";
import type { AppDispatch } from "@/app/store/store";

type LanguageSwitcherProps = {
  locale: "en" | "ro";
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const [currentLocale, setCurrentLocale] = useState(locale); // Store the current locale
  const pathname = usePathname();

  const dispatch: AppDispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Update locale when prop changes
  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  // Function to generate correct paths based on the current locale and pathname
  const getLocalePath = (newLocale: "en" | "ro") => {
    const pathWithoutLocale = pathname.replace(/^\/(en|ro)/, ""); // Remove existing locale from path
    return `/${newLocale}${pathWithoutLocale === "" ? "/" : pathWithoutLocale}`; // Add new locale and preserve the rest of the path
  };

  if (!pathname) return <></>; // Ensure pathname is loaded before rendering

  return (
      <>
        <Link href={getLocalePath("en")} locale="en">
          <span className={currentLocale === "en" ? "active" : ""}>
            English
          </span>
        </Link>
        <br />
        <br />
        <Link href={getLocalePath("ro")} locale="ro">
          <span className={currentLocale === "ro" ? "active" : ""}>Română</span>
        </Link>
        <div>
          {loading && <p>Loading posts...</p>}
          {error && <p>Error: {error}</p>}
          <ul>
            {posts.map((post:) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
  );
}
