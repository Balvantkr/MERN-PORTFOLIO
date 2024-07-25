import React, { useState } from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("https://mern-portfolio-7ird.onrender.com/api/v1/portfolio/sendEmail", {
        name,
        email,
        message,
      });

      // console.log(data.user.name)
      setName("");
      setEmail("");
      setMessage("");

      if (data?.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Please fill all fields!");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while sending the message.");
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    className="image"
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
                    alt="contact"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact with
                      <a href="https://www.linkedin.com">
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a href="https://www.github.com">
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <a href="https://www.facebook.com">
                        <BsFacebook color="blue" size={30} className="ms-2" />
                      </a>
                      <a href="https://www.instagram.com">
                        <BsInstagram color="red" size={30} className="ms-2" />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row px-3">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <label htmlFor="message">Message:</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Write Your message"
                        className="mb-3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <button
                        className="button"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
