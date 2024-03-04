"use client"
import Link from "next/link";
import Container from "./Containerweb";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <>
      <Container className="bg-black max-w-screen-2xl rounded-b-2xl text-white grid grid-flow-row-dense grid-cols-5">

        <div className="col-span-5 md:col-span-3 md:p-20">
          <div className="text-4xl md:text-7xl">Your trusted partner in</div>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Digital Transformation',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Microsoft Services',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-4xl md:text-7xl"
            repeat={Infinity}
          />
        </div>

        <div className="col-span-5 md:col-span-2 p- self-center">
          <div className="">
            REW helps businesses elevate their value through custom software development, product design, QA, and consultancy services.
          </div>
          <div className="pt-8">
            <Link href="#" className="p-4 text-black border border-black rounded-md font-medium hover:bg-white bg-yellow-400">

              Learn more

            </Link>
          </div>
        </div>

       
      </Container>



    </>
  );
}



export default Hero;