"use client"
import Image from "next/image";
import React from "react";
import Container from "./Containerweb";
import Link from "next/link";
import OneImg from "../../../public/img/Rectangle-1299.jpg";
import TwoImg from "../../../public/img/Rectangle-1309.jpg";
import ThreeImg from "../../../public/img/Rectangle-1311.jpg";

const BlogSection = () => {
    return (
        <Container className="!p-0 bg-black max-w-screen-2xl rounded-lg ">

            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 p-20" id="blog">
                <div className="col-span-3 md:row-span-3 self-center md:col-span-1">

                    <h3 className="text-7xl text-white ">
                        Read &  <br /> Reflect
                    </h3>

                    <p className="py-8 font-light text-white">
                        Explore untold project stories, lessons, work culture, and business curiosities behind the scenes.
                    </p>

                    <p className="py-3">
                        <Link href="#" className="p-3 text-black rounded-md font-medium hover:text-black hover:bg-yellow-400 bg-gray-100 border border-black">
                            More news
                        </Link>
                    </p>
                </div>




                <div className="relative mt-8 md:flex items-center gap-x-4 col-span-2">

                    <Avatar
                        image={OneImg}
                        className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                        <h3 className="mt-3 text-2xl font-semibold leading-6 text-white py-10">
                            <Link href="#"><span className="absolute inset-0" />ARTIFICIAL INTELLIGENCE: SALVATION OR DAMNATION?</Link>

                        </h3>

                        <div className="flex items-center gap-x-4 text-xs">
                            <a
                                href="#"
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                DIGITAL
                            </a>
                            <time dateTime="Dec 12, 2023" className="text-gray-500">
                                Dec 12, 2023
                            </time>
                        </div>
                    </div>
                </div>

                <div className="relative mt-8 md:flex items-center gap-x-4 col-span-2">

                    <Avatar
                        image={TwoImg}
                        className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                        <h3 className="mt-3 text-2xl font-semibold leading-6 text-white py-10">
                            <Link href="#"><span className="absolute inset-0" />CYBER SECURITY FOR BUSINESS: THREATS AND STRATEGIES</Link>

                        </h3>

                        <div className="flex items-center gap-x-4 text-xs">
                            <a
                                href="#"
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                DIGITAL
                            </a>
                            <time dateTime="Dec 12, 2023" className="text-gray-500">
                                Dec 12, 2023
                            </time>
                        </div>
                    </div>
                </div>

                <div className="relative mt-8 md:flex items-center gap-x-4 col-span-2">

                    <Avatar
                        image={ThreeImg}
                        className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                        <h3 className="mt-3 text-2xl font-semibold leading-6 text-white py-10">
                            <Link href="#"><span className="absolute inset-0" />DEVOPS VS AUTOMATION</Link>

                        </h3>

                        <div className="flex items-center gap-x-4 text-xs">
                            <a
                                href="#"
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                DIGITAL
                            </a>
                            <time dateTime="Dec 12, 2023" className="text-gray-500">
                                Dec 12, 2023
                            </time>
                        </div>
                    </div>
                </div>



            </div>

        </Container>
    );
}

function Avatar(props) {
    return (
        <Image
            src={props.image}
            className="rounded-2xl "
            alt="Avatar"
            width="300"
            height="auto"
        />
    );
}

export default BlogSection;