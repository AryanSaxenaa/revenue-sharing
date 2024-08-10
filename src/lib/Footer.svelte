<script>
    import { faYoutube, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<style>
    footer {
        background-color: #0C1238; /* Dark Blue Background */
        color: #ffffff; /* White Text Color */
        padding: 20px 40px;
        font-family: Arial, sans-serif;
        font-size: 14px;
    }

    .footer-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .footer-section {
        flex: 1;
        margin: 10px 20px;
    }

    .footer-section h4 {
        margin-bottom: 15px;
        font-weight: bold;
    }

    .footer-section p, .footer-section a {
        margin: 5px 0;
        color: #ffffff;
        text-decoration: none;
    }

    .footer-section a:hover {
        text-decoration: underline;
    }

    .social-icons a {
        margin-right: 10px;
        font-size: 20px;
        color: #ffffff;
    }

    .copyright {
        text-align: center;
        margin-top: 20px;
        border-top: 1px solid #ffffff;
        padding-top: 10px;
    }
</style>

<footer>
    <div class="footer-container">
        <div class="footer-section">
            <h4>DRMS 24.</h4>
            <p>Jl. Lebak Bulus I Kav. 29 Cilandak<br>
            Jakarta Selatan, DKI Jakarta, Indonesia 12340</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>

        <div class="footer-section">
            <h4>Company Info</h4>
            <p><a href="#">Tentang Kami</a></p>
            <p><a href="#">Karir</a></p>
            <p><a href="#">Blog</a></p>
            <p><a href="#">Info Layanan</a></p>
        </div>

        <div class="footer-section">
            <h4>Cabang</h4>
            <p>Tangerang</p>
            <p>Jakarta</p>
            <p>Surabaya</p>
            <p>Bekasi</p>
        </div>

        <div class="footer-section">
            <h4>Kontak Kami</h4>
            <p>+626564465455</p>
            <p><a href="mailto:info@klinik24.com">info@klinik24.com</a></p>
            <p>Telp: +5646544654</p>
        </div>
    </div>
    <div class="copyright">
        Copyright © 2022
    </div>
</footer>
