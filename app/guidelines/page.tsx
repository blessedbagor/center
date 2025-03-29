import { HoverBottomSection } from "@/components/hover-bottom-section";
import Link from "next/link";
import { GuidelinesHeroSection } from "./guidelines-hero-section";

const Guidelines = () => {
    return ( <>
    <GuidelinesHeroSection />
    <div className='my-6 mx-auto max-w-3xl p-4'>
      <ol className="space-y-6">
      {[
        { title: "Strategic Location", description: "Must be in high-traffic areas near banks, ATMs, drugstores, restaurants, government offices, or transport stations." },
        { title: "Exclusive Area", description: "Only one iGift Center per town, city, or province. No competition within your designated area." },
        { title: "Core Business", description: "Serve as a distribution hub, presentation venue, and future e-services center for iGift." },
        { title: "Investment Needed", description: "Start-up cost $5,000 for a town, $10,000 for a city, and $25,000 for a province. This is used to buy products." },
        { title: "Earnings & Bonuses", description: "Earn up to 43% on retail sales and receive extra income from distributor purchases in your area." },
        { title: "Marketing Support", description: "iGift provides promotional support, but centers must also engage in local marketing." },
        { title: "Honest Business", description: "Operate with honesty, transparency, and excellent customer service." },
        { title: "Who Can Apply", description: "Must have enough funds, marketing skills, a great location, and a strong drive to grow the business." }
      ].map((item, index) => (
        <li key={index} className="flex items-start space-x-6">
          <div className="w-4 h-4 flex items-center justify-center bg-yellow-400 font-bold rounded-full p-4">
            {index + 1}
          </div>
          <p>
            <span className="font-semibold text-lg md:text-2xl">{item.title}</span> <br />{item.description}
          </p>
        </li>
      ))}
    </ol>
    
  </div>
  <div className="mx-auto text-center mt-20">
  <Link href='/discovery-call' className="bg-yellow-400 text-black rounded-xl px-3 py-3 text-xl font-semibold hover:bg-yellow-500 transition duration-300 ease-in-out">
  Book a Discovery Call
  </Link>
  </div>
  <HoverBottomSection />
    </> );
}
 
export default Guidelines;