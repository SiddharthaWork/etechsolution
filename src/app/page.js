import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import Things from "@/Components/Things";
import Education from "@/Components/Education";
import Form from "@/Components/Form";
import Process from "@/Components/Process";
import Benefits from "@/Components/Benefits";
export default function Home() {
  return (
   <div className="overflow-hidden">
    <Navbar/>
    <Hero/>
    <Education/>
    <Benefits/>
    <Process/>
    <Things/>
    <Form/>
    <Footer/>
   </div>
  );
}
