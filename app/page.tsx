import Image from "next/image";
import svgTitle from "../public/title.svg";
import "./page.css";
import Link from 'next/link';
import svglogo2 from "../public/logo2.svg";

export default function Home() {
  return (
    <main>
      <div className="dash-center">
        <div className="logo-image-container">
          <Image src={svglogo2} alt="logo image" width="180" /> 
          </div>
        <div className="image-container"> 
          <Image src={svgTitle} alt="website title" width="700" />
        </div>
        <p>
          Welcome to Dungeon Delver - a website that aims to teach people how to play Dungeons and Dragons in a way that is fun, interactive and informative.
        </p>
        <div className="button-container">
          <Link href="/new-player" passHref>
            <button type="button">New Player</button>
          </Link>
        </div> 
      </div>
    </main>
  )
}


