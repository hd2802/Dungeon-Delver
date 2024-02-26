import Image from "next/image";
import svgTitle from "../public/title.svg";
import "./page.css";

export default function Home() {
  return (
    <main>
      <div className="image-container"> 
        <Image src={svgTitle} alt="website title" width="700" />
      </div>
    </main>
  );
}
