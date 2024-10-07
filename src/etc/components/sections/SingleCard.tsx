"use client";
import Titr from "@/components/Titr";
import { SECTIONS_QUERY_KEY, SINGLE_POST_QUERY_KEY } from "@/etc/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/Button";
import { SingleCardSkeleton } from "../skelton";
import React from 'react'
import useFetch from "@/hooks/useFetch";
import { SECTIONS_API_URL } from "@/etc/config/apiConstants";

const SingleCard: React.FC = () => {
  const { data, loading } = useGetSection(SINGLE_POST_QUERY_KEY, -1, 3);
  const { data: section } = useFetch(SECTIONS_QUERY_KEY, SECTIONS_API_URL);
  if (loading) {
    return <SingleCardSkeleton />;
  }

  return (
    <>
      <Titr
        title="Single Posts"
        item="text-center"
        style="mb-4 text-xl md:text-2xl lg:text-3xl"
      />
      {data?.map((post: PostsCashType) => (
        <Link
          href={`/posts/${post._id}`}
          key={post._id}
          className="card lg:card-side bg-base-100 shadow-xl my-5"
        >
          <figure>
            <Image
              src={post.imgurl}
              alt={post.title.slice(0,section.limit_title)}
              width={928}
              height={548}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.title.slice(0,section.limit_title)}</h2>
            <p>{post.description.slice(0, section.limit_description)}</p>
            <div className="card-actions justify-end">
              <Button title="Read Now" color="btn-primary" />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SingleCard;
