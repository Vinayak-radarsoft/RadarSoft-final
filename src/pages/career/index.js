import Image from "next/image";
import careerBanner from "../../../public/assets/media/career-banner.png";
import { openJobModal } from "@/components/common/data";
import Job from "@/components/model/Job";

const Career = () => {
  const handleOpenJobModel = () => {
    openJobModal();
  };

  return (
    <>
      {/* Career title section */}
      <section className="career-banner">
        <div className="container">
          <div className="career-banner-title">
            <div className="commom-heading">
              <h2>Join us if you want to grow in professional life</h2>
              <p>
                Sed et orci volutpat, pharetra nunc eu, ultrices urna. Etiam sed
                sapien vitae ipsum Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career banner section */}
      <section className="py-4">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={careerBanner}
            alt="Career Banner"
          />
        </div>
      </section>

      {/* Careers section */}
      <section className="career-job-area col-md-12">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>Search jobs at RadarSoft Technologies </h2>
            </div>
            <div className="input-group career-job-input mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search jobs according to your expertise"
                aria-label="Search Jobs"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Careers job list section */}
      <section className="career-job-list-area col-md-12">
        <div className="container">
          <div className="row">
            <p className="career-job-list-title">10 jobs found</p>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-3 g-5 g-lg-3">
                {[...Array(6)].map((_, index) => (
                  <div
                    className="col"
                    style={{ cursor: "pointer" }}
                    key={index}
                    onClick={handleOpenJobModel}
                  >
                    <div className="card-body">
                      <p className="text-uppercase loc mb-2">Pune, India</p>
                      <h4 className="card-title mb-4">Web developer</h4>
                      <p className="mb-3">
                        <strong>Skills Required -</strong> HTML, CSS, JS,
                        Collaborate with design teams to translate wireframes
                        and mockups into functional web pages.
                      </p>
                      <p className="mb-4">
                        <strong>Experience Required -</strong> 2+ years, can
                        include freelance work.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="career-btn">
              <a href="#">
                NEXT&nbsp;&nbsp;
                <span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Job />
    </>
  );
};

export default Career;
