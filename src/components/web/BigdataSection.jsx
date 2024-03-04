"use client"
import Image from "next/image";
import React from "react";
import Container from "./container";
import OneImg from "../../../public/img/engineering.png";
import TwoImg from "../../../public/img/data-warehouse.png";
import ThreeImg from "../../../public/img/data-processing.png";
import FourImg from "../../../public/img/statistics.png";
import FiveImg from "../../../public/img/analysis.png";
import SixImg from "../../../public/img/data-science.png";

const BigdataSection = () => {
    return (
        <Container  >

            <div className="grid gap-10 grid-cols-3" id="bigdata">

                <div className="col-span-3 relative cursor-pointer">
                    <div className="flex flex-col justify-between w-full h-full py-6 text-center ">


                        <h3 className="text-4xl font-body text-gray-800 ">
                           if you can't measure it,<br />you can't manage it. 
                        </h3>

                    </div>
                </div>


                <div className="col-span-3 md:col-span-1">

                    <div className="flex justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-yellow-400">

                        <h3 className="text-3xl text-gray-800">
                        Data lakehouse<br /> warehouse
                        </h3>
                        <Avatar
                            image={TwoImg}
                        />
                    </div>

                </div>

                <div className="col-span-3 md:col-span-1">

                    <div className="flex  justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-yellow-400">

                        <h3 className="text-3xl text-gray-800">
                        Data <br /> integration
                        </h3>
                        
                        <Avatar
                            image={OneImg}
                        />
                    </div>

                </div>
                <div className="col-span-3 md:col-span-1">

                    <div className="flex justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-yellow-400">

                        <h3 className="text-3xl text-gray-800">
                             Data <br /> pipeline
                        </h3>
                        <Avatar
                            image={ThreeImg}
                        />
                    </div>

                </div>
                <div className="col-span-3 md:col-span-1">

                    <div className="flex justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-yellow-400">

                        <h3 className="text-3xl text-gray-800">
                             Data <br /> visualization
                        </h3>
                        <Avatar
                            image={FourImg}
                        />
                    </div>

                </div>

                <div className="col-span-3 md:col-span-1">

                    <div className="flex justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-yellow-400">

                        <h3 className="text-3xl text-gray-800">
                             Data <br /> analytics
                        </h3>
                        <Avatar
                            image={FiveImg}
                        />
                    </div>

                </div>

                <div className="col-span-3 md:col-span-1">

                    <div className="flex justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-yellow-400">

                        <h3 className="text-3xl text-gray-800">
                             Data <br /> science
                        </h3>
                        <Avatar
                            image={SixImg}
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
        width="80"
        height="80"
        alt="Avatar"
        placeholder="blur"
      />
    );
  }

export default BigdataSection;