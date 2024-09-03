import { useRouter } from "next/router";
import case1 from "../../../public/assets/media/case/case1.png";
import case2 from "../../../public/assets/media/case/case2.png";
import case3 from "../../../public/assets/media/case/case3.png";
import case4 from "../../../public/assets/media/case/case4.png";
import Link from "next/link";

const CaseStudy = () => {
  const router = useRouter();
  return (
    <>
      <section className="case-back-studies">
        <div className="container">
          <div className="row">
            <div className="case-back-btn">
              <span className="me-2">
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              <Link href="/">Back to the homepage</Link>
            </div>
            <div className="case-studies-btn-main">
              <button className="case-studies-btn">Case Studies</button>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies-start">
        <div className="container">
          <div className="row">
            <div className="case-studies-flex">
              <div className="commom-heading">
                <h2>Case Studies</h2>
                <p>
                  Discover how we've helped businesses overcome challenges and
                  achieve
                  <br /> their goals. Our case studies showcase the innovative
                  solutions and
                  <br /> tangible results we've delivered for our clients.
                </p>
              </div>
              <div className="">
                <Link
                  className="common-project-button"
                  href="/contact"
                  style={{ textDecoration: "none" }}
                >
                  Start a project with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-blog">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 case-pad">
            <div className="col">
              <div className="">
                <div>
                  <img src={case1.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Edtech
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Turn your dreams into reality with AcadSpace - Google Maps
                    for your career journey.
                  </h4>
                  <Link className="case-read-more" href="/casestudy/1">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div>
                  <img src={case2.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Edtech
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Personalized makeup and Hairstyle services, beautician
                    services at of home - MakeupCentral
                  </h4>
                  <Link className="case-read-more" href="/casestudy/2">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div>
                  <img src={case3.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Edtech
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Hub for students & professionals to learn new skills -
                    Abhyan
                  </h4>
                  <Link className="case-read-more" href="/casestudy/3">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div>
                  <img src={case4.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Edtech
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Fashion store for kids to keep with new fashion - TOTDOT
                  </h4>
                  <Link className="case-read-more" href="/casestudy/4">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
