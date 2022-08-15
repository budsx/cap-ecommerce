const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="row-1">
            <div className="footer-content">
              <h4>Menu</h4>
              <ul>
                <li className="list-footer">
                  <a href="/">Tentang Kami</a>
                </li>
                <li className="list-footer">
                  <a href="/">Clients</a>
                </li>
                <li className="list-footer">
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-content">
              <h4>Layanan</h4>
              <ul>
                <li className="list-footer">
                  <a href="/">Toko</a>
                </li>
                <li className="list-footer">
                  <a href="/">Layanan Kami</a>
                </li>
              </ul>
            </div>
            <div className="footer-content">
              <h4>Kontak</h4>
              <p>Cilandak Timur, Jakarta Selatan, DKI Jakarta</p>
              <p>+62823 0130 2964</p>
              <p>Coffe99@gmail.com</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row-2">
          <div className="copyright">
            <p>Made with ❤ - No Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
