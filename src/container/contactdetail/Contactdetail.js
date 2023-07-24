import React from "react";
import "./Contactdetail.css";
const Contactdetail = () => {
  return (
    <>
      <div className="main_wrapp">
        <div className="base_wrapp aboutus-flex-column">
          <div className="h3 kind-words-heading">Contact</div>
          <div className="contact-flex">
            <div className="contact-box">
              <p className="txt_big con-head-clr-chng">Studio Dream</p>
              <p className="txt_big">
                Bhatia Complex,
                <br />
                50 Feet Ring Rd,
                <br />
                Rajkot, Gujarat 360005 <br />
                Landmark: Near Telephone Exchange, Tulsi Park.
              </p>
            </div>
            <div className="contact-box-sec">
              <div className="contact-box-inner">
                <p className="txt_big con-head-clr-chng">For Wedding Inquiry</p>
                <a href="tel:+91 82911 92151" className="txt_big">
                  +91 82911 92151
                </a>

                <a
                  href="mailto:studiodreamrajkot@gmail.com"
                  className="txt_big"
                >
                  studiodreamrajkot@gmail.com
                </a>
              </div>

              <div className="contact-box-inner">
                <p className="txt_big con-head-clr-chng">
                  For Commercial Inquiry
                </p>
                <a href="tel:+91 98795 90396" className="txt_big">
                  +91 98795 90396
                </a>

                <a
                  href="mailto:prostudiodreamrajkot@gmail.com"
                  className="txt_big"
                >
                  prostudiodreamrajkot@gmail.com
                </a>
              </div>

              <div className="contact-box-inner">
                <p className="txt_big con-head-clr-chng">
                  For Newly Born & Baby Photography Inquiry
                </p>
                <a href="tel:+91 98255 0766" className="txt_big">
                  +91 98255 0766
                </a>

                <a
                  href="mailto:studiodreamphotographyy@gmail.com"
                  className="txt_big"
                >
                  studiodreamphotographyy@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-box">
              <p className="txt_big con-head-clr-chng">Follow Our Work</p>
              <div className="contact-box-social-flex">
                <p className="txt_big">Instagram:</p>
                <p className="txt_big"> @studiodreamrajkot,</p>
                <p className="txt_big"> @nileshjoshiphotography,</p>
                <p className="txt_big"> @studiodreamrajkotbabyphotography</p>
              </div>

              <div className="contact-box-social-flex">
                <p className="txt_big">Facebook: </p>
                <p className="txt_big"> @studiodreamrajkot,</p>
                <p className="txt_big"> @nileshjoshiphotography</p>
              </div>

              <div className="contact-box-social-flex">
                <p className="txt_big">Youtube:</p>
                <p className="txt_big"> @studiodreamrajkot</p>
              </div>
            </div>

            <div className="contact-box">
              <a
                href="#"
                className="txt_big con-head-clr-chng"
                // target="_blank"
                // download
              >
                Download Our Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactdetail;
