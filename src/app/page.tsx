import Hero from "@/components/sections/home/hero";
import LogoCloud from "@/components/sections/home/logo-cloud";
import Quote from "@/components/sections/home/H-Quote";
import SuccessStories from "@/components/sections/home/Success Stories";

export default async function Home() {

  return (
    <>
    <Hero/>
    <LogoCloud/>
    <Quote/>
    <SuccessStories/>
    </>
    
  );
}
