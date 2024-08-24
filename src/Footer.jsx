import "./App"
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>© Copyright {year} Ekene Azubuko.</p>
                {/* <p>And yes this date is dynamic</p> */}
            </div>
        </footer>
    );
};
export default Footer;