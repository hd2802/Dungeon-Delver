import "./styles/Header.css";
import svglogo2 from "../../public/logo2.svg"
import Image from "next/image";
import Link from "next/link";
/*pages: tutorial, homepage*/
export default function Header() {
    return (
        <div className = "topbar">
            <Image src={svglogo2} alt="logo image" width="100"/>
            <div className="topbuttons">
                <Link href ="/" passHref>
                    <button type="button">Homepage</button>
                </Link>
                <Link href ="/trial-campaign" passHref>
                    <button type="button">Trial Campaign</button>
                </Link>
                <Link href ="" passHref>
                    <button type="button">Not added yet</button>
                </Link>
                <Link href ="" passHref>
                    <button type="button">Not added yet</button>
                </Link>
                <Link href ="" passHref>
                    <button type="button">Not added yet</button>
                </Link>
                <Link href ="" passHref>
                    <button type="button">Not added yet</button>
                </Link>
            </div>

        </div>
    )
}