"use client"
import { SECTIONS_API_URL } from "@/etc/config/apiConstants";
import { SECTIONS_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";

//@ts-ignore
const MainItem = ({ post }) => {
  const { data } = useFetch(SECTIONS_QUERY_KEY, SECTIONS_API_URL);
  return (
    <div className="col-span-12 md:col-span-6">
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md transition-all hover:scale-105   ">
          <Link
            className="relative block aspect-video"
            href={`/posts/${post._id}`}
            title={post.title.slice(0,data.limit_title)}
          >
            <Image
              src={post.imgurl}
              alt={post.title}
              title={post.title.slice(0,data.limit_title)}
              width={500}
              height={270}
              className="w-full h-full bg-gray-600"
            />
          </Link>
        </div>
        <div className="">
          <div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-4  ">
              <Link
                href={`/posts/${post._id}`}
                title={post.title.slice(0,data.limit_title)}
              >
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                  {post.title.slice(0,data.limit_title)}
                </span>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
