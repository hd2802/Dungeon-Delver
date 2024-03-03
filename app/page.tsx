import Image from "next/image";
import svgTitle from "../public/title.svg";
import "./page.css";
import Link from 'next/link';
import svglogo2 from "../public/logo2.svg";

export default function Home() {
  return (
    <main>
      <div className="logo-image-container">
        <Image src={svglogo2} alt="logo image" width="180" /> 
        </div>
      <div className="image-container"> 
        <Image src={svgTitle} alt="website title" width="700" />
      </div>
      <div className="button-container">
        <Link href="/trial-campaign" passHref>
          <button type="button">Go to Trial Campaign</button>
        </Link>
      </div> 
    </main>
  );
}


