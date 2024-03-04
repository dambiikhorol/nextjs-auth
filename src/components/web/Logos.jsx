"use client"
import Image from "next/image";
import React from "react";
import Container from "./Containerweb";
import oneImg from "../../../public/img/Amazon_Web_Services_Logo-1.svg";
import twoImg from "../../../public/img/Microsoft_Azure_Logo-2.svg";
import threeImg from "../../../public/img/Google_Cloud_logo-1-1.svg";
import fourImg from "../../../public/img/SAP_2011_logo-1-2.svg";

const Logos = () => {
    return (
        <Container className="pb-20">
            <div className="grid gap-10 grid-cols-4 ">

                <div className="col-span-4 md:col-span-1 flex flex-col justify-between w-full h-full bg-gray-100 rounded-2xl p-4 md:p-14 hover:bg-yellow-400">
                    <div className="flex flex-col justify-between items-center">
                        <Avatar
                            image={oneImg}
                        />
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1 flex flex-col justify-between w-full h-full bg-gray-100 rounded-2xl p-4 md:p-14 hover:bg-yellow-400">
                    <div className="flex flex-col justify-between items-center">
                        <Avatar
                            image={twoImg}
                        />
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1 flex flex-col justify-between w-full h-full bg-gray-100 rounded-2xl p-4 md:p-14 hover:bg-yellow-400">
                    <div className="flex flex-col justify-between items-center">
                        <Avatar
                            image={threeImg}
                        />
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1 flex flex-col justify-between w-full h-full bg-gray-100 rounded-2xl p-4 md:p-14 hover:bg-yellow-400">
                    <div className="flex flex-col justify-between items-center">
                        <Avatar
                            image={fourImg}
                        />
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

            alt="Avatar"
        />
    );
}

export default Logos;