import '../assets/css/Footer.css'


const FooterComp = () => {
    return(
        <>
        <footer>
            <div className="footer-container">
                <div className="footer-sec aboutus">
                    <h2>IYMO</h2>
                    <p>The Math Olympiad is a competition held to test students abilities and knowledge in the field of Math. This event is designed to encourage students to deepen their knowledge of Math and develop their potential.</p>
                    <br />
                    <div className="hero-social-icon">
                        <span>Follow us</span>
                        <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></a>
                        <a href="https://www.instagram.com/iymo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></a>
                        <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></a>
                        <a href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></a>
                        <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></a>
                    </div>
                </div>
                <div className="footer-sec footer-quicklinks">
                    <h2>Information Links</h2>
                    <ul>
                        <li><a href="#contact-section">Contact</a></li>
                        <li><a href="https://iysa.or.id" target='_blank'>Our Main Website</a></li>
                        <li><a href="https://www.iysaolympiad.or.id/" target='_blank'>IYSA Olympiad Website</a></li>
                    </ul>
                </div>
                <div className="footer-sec footer-quicklinks">
                    <h2>Navigation</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about-section">About</a></li>
                        {/* <li><a href="#main-category-section">Category</a></li> */}
                        <li><a href="https://drive.google.com/file/d/1h9_GF9ySoPID8FtusJeDBwV9Vc9z0ni7/view?usp=sharing">Guide Book</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-sec footer-contact">
                    <h2>Office</h2>
                    <ul className='info'>
                        <li>
                            <span><i className='fa-solid fa-location-dot'></i></span><p><a href="https://goo.gl/maps/9x18coXGCmSscKec6" target='_blank'>Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519</a></p>
                        </li>
                        <li>
                            <span><i className='fa-solid fa-phone'></i></span><p><a href="https://wa.me/+6283870026877" target='_blank'>+6283870026877</a></p>
                        </li>
                        <li>
                            <span><i className='fa-solid fa-envelope'></i></span><p><a href="mailto:iysa.olympiad@gmail.com" target='_blank'>iysa.olympiad@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className='copyrightText'>
            <p>Copyright © 2024 IYMO Official. All rights reserved</p>
        </div>
        </>
    )
}

export default FooterComp