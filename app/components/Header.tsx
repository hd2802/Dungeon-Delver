import "./styles/Header.css";
import logofilled from "../../public/images/favicon_full_filled.png"
import Image from "next/image";
import Link from "next/link";
/*pages: tutorial, homepage*/
export default function Header() {
    return (
        <div className = "topbar">
            <Image src={logofilled} alt="logo image" width="90"/>
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