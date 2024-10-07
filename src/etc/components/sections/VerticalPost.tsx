"use client"
import { SECTIONS_API_URL } from "@/etc/config/apiConstants";
import { SECTIONS_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from 'react'
//@ts-ignore
const VerticalPost = ({ post }) => {
  const { data } = useFetch(SECTIONS_QUERY_KEY, SECTIONS_API_URL);
  return (
    <>
      <Link
        key={post._id}
        href={`/posts/${post._id}`}
        className="group relative w-full flex items-end justify-start text-left bg-cover bg-center h-[450px]  rounded-md bg-slate-400"
        style={{ backgroundImage: `url(${post.imgurl})` }}
      >
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <main className="p-5 z-10">
          <h4 className="text-md tracking-tight font-medium leading-7 font-regular text-white group-hover:underline group-hover:text-indigo-700">
            {post.title.slice(0,data.limit_title)}
          </h4>
        </main>
      </Link>
    </>
  );
};

export default VerticalPost;
