import "./styles/Footer.css";

export default function Footer() {
    return (
        <div className="outer-div">
            <footer className="footer">
                <div className="footer-container">
                    <p className="footer-info">
                    Dungeon Delver is unofficial Fan Content permitted under the <a className="footer-link" href="https://company.wizards.com/en/legal/fancontentpolicy">Fan Content Policy</a>. It is not approved/endorsed by Wizards of the Coast.
                    </p>
                    <p className="footer-info">
                    Dungeon Delver may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under the Open Gaming Liscence (OGL).
                    </p>
                    <p className="footer-info">
                    Unless otherwise stated, the content of this page is licensed under <a className="footer-link" href="https://creativecommons.org/licenses/by-sa/3.0/"> Creative Commons Attribution-ShareAlike 3.0 License </a>
                    </p>
                </div>
        </footer>
        </div>
    )
}