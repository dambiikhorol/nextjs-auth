import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import NavbarModern from "@/components/web/NavbarModern";
import Hero from "@/components/web/Hero";
import Industries from "@/components/web/Industries";
import Logos from "@/components/web/Logos";
import BlogSection from "@/components/web/BlogSection";
import ContactSection from "@/components/web/ContactSection";
import Footer from "@/components/web/Footer";
import BigdataSection from "@/components/web/BigdataSection";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
  
     <NavbarModern/>
     <Hero />
    <Industries />
    <BigdataSection />
    <Logos />
    <BlogSection />
    <ContactSection />
    <Footer />
 
    </>
   
  );
}
