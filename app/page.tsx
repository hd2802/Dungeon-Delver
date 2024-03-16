import Image from "next/image";
import svgTitle from "../public/title.svg";
import svglogo2 from "../public/logo2.svg";
import "./page.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
        <div className="logo-image-container">
          <Image src={svglogo2} alt="logo image" width="300" /> 
          </div>

        <div className="image-container"> 
          <Image src={svgTitle} alt="website title" width="700" />
        </div>
          <p className="intro-text">
            Welcome to Dungeon Delver - a website that aims to teach people how to play Dungeons and Dragons in a way that is fun, interactive and informative.
          </p>
        <div className="button-container">
          <Link href="/new-player" passHref>
            <button id="route-button" type="button">New Player</button>
          </Link>
        </div>
        <div className="button-container">
          <Link href="/about" passHref>
            <button id="route-button" type="button">About</button>
          </Link>
        </div> 
    </main>
  )
}


