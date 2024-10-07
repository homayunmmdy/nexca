"use client"
import { SECTIONS_API_URL } from "@/etc/config/apiConstants";
import { SECTIONS_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
//@ts-ignore
const PostCard = ({ post }) => {
  const { data } = useFetch(SECTIONS_QUERY_KEY, SECTIONS_API_URL);
    return (
      <>
        <div className="card  bg-base-100 shadow-xl md:hover:scale-105 rounded-xl transition-transform ease-in-out duration-500">
          <Link href={`/posts/${post._id}`} >
          <figure className="px-5 pt-5">
            <Image
              src={post.imgurl}
              alt={post.title.slice(0,data.limit_title)}
              width={662.172}
              height={372.469}
              className="rounded-xl aspect-video bg-gray-600 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-5">
            <h2 className="card-title">{post.title.slice(0,data.limit_title)}</h2>
            <p>{post.description.slice(0, data.limit_description)}</p>
          </div>
          </Link>
        </div>
      </>
    );
  };
  
  export default PostCard;