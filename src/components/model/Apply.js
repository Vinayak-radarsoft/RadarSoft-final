import Link from "next/link";
import React from "react";

const Apply = () => {
    return (
        <>
            <div
                className="modal fade"
                id="ApplyModal"
                tabindex="-1"
                aria-labelledby="ApplyModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ApplyModalLabel">
                                <span className="me-2">
                                    <Link href="#">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </Link>
                                </span>
                                Web developer
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="contact-form">
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Name*"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Email address*"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="phone">Phone number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone*"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="phone">Current ctc</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="current ctc*"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="phone">Expected ctc</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="Expected ctc*"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="phone">Upload resume</label>
                                        <br />
                                        <div
                                            className="upload-area"
                                            onclick="document.getElementById('resumeUpload').click();"
                                        >
                                            <i className="fa-solid fa-cloud-arrow-up"></i>
                                            <p>
                                                Drag your file(s) or <span>browse</span>
                                            </p>
                                            <p>Max 5MB file allowed</p>
                                            <input
                                                type="file"
                                                id="resumeUpload"
                                                name="resumeUpload"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="co-button"
                                data-bs-dismiss="modal"
                            >
                                Apply now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Apply;
