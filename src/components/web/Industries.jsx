"use client"
import React from "react";
import Container from "./Containerweb";
import Link from "next/link";

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

import iotanimationData from '@/lotties/test-automation-3-1';
import DevopsanimationData from '@/lotties/Devops-2';
import aidevanimationData from '@/lotties/Cloud-_computing-2';
import appdevanimationData from '@/lotties/Application-development-1';
import bigdataanimationData from '@/lotties/Icon-rotation-1';


const bigdataOptions = {
    loop: true,
    autoplay: true,
    animationData: bigdataanimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const appdevOptions = {
    loop: true,
    autoplay: true,
    animationData: appdevanimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const DevopsOptions = {
    loop: true,
    autoplay: true,
    animationData: DevopsanimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const iotOptions = {
    loop: true,
    autoplay: true,
    animationData: iotanimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const aidevOptions = {
    loop: true,
    autoplay: true,
    animationData: aidevanimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const Industries = () => {
    return (
        <Container >
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 pt-10">
                <div className="lg:col-span-2 xl:col-auto">

                    <div className=" justify-between w-full h-full  ">


                        <h3 className="text-7xl font-medium text-gray-800">
                            Bringing innovation across all industries
                        </h3>
                        <p className="mt-6">
                            <Link href="#" className="px-5 py-3 text-white rounded-md font-medium hover:text-black hover:bg-yellow-400 bg-black">
                                Learn more
                            </Link>
                        </p>
                    </div>

                </div>

                
                <div >

                    <div className="flex flex-col justify-between w-full h-full bg-yellow-400 px-10 rounded-2xl py-14 ">
                        <div className="flex flex-col justify-between items-center">
                        <Lottie 
                            options={bigdataOptions}
                            
                        
                        />
                        </div>

                        <h3 className="text-3xl text-gray-800">
                            Big <br /> Data
                        </h3>

                        <p className="py-8 font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>

                </div>

                <div id="systemdev">

                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-14 ">
                        <div className="flex flex-col justify-between items-center">
                        <Lottie 
                            options={appdevOptions}
                            
                        
                        />
                        </div>

                        <h3 className="text-3xl text-gray-800">
                            System <br /> Dev
                        </h3>

                        <p className="py-8 font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>

                </div>
                
                <div id="iot">

                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-14 ">
                        <div className="flex flex-col justify-between items-center">
                        <Lottie 
                            options={iotOptions}
                        />
                            
                        </div>

                        <h3 className="text-3xl text-gray-800">
                            IoT
                        </h3>

                        <p className="py-8 font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>

                </div>

                <div id="aidev">

                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-14 ">
                        <div className="flex flex-col justify-between items-center">
                        <Lottie 
                            options={aidevOptions}
                            
                        
                        />
                        </div>

                        <h3 className="text-3xl text-gray-800">
                            AI <br /> Dev
                        </h3>

                        <p className="py-8 font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>

                </div>


                <div id="devops">

                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-14 ">
                        <div className="flex flex-col justify-between items-center">
                        <Lottie 
                            options={DevopsOptions}
                            
                        
                        />
                        </div>

                        <h3 className="text-3xl text-gray-800">
                            Dev <br /> Ops
                        </h3>

                        <p className="py-8 font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>

                </div>

                

            </div>
        </Container>
    );
}



export default Industries;