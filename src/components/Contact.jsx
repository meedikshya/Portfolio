import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Title from "./title";

const Contact = () => {
  return (
    <div
      id="contact"
      className="font-sans antialiased leading-normal tracking-wider bg-cover"
    >
      <div className="max-w-4xl mx-auto my-32 lg:my-0 flex items-center h-auto lg:h-screen flex-wrap justify-center">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Dikshya Sharma</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <HiOutlineMail className="h-4 fill-current text-green-700 pr-4" />
              Let's Connect
            </p>
            <p className="pt-8 text-sm text-justify">
              I'm always open to new opportunities, collaborations, or simply
              connecting with like-minded professionals. If you're interested in
              working together, have any questions, or just want to say hello,
              feel free to reach out!
            </p>

            <div className="pt-12 pb-8 text-center">
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                <a href="mailto:dikshya.sharma.inbox@gmail.com">Contact Me</a>
              </button>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center">
              <a
                className="link mx-2"
                href="https://www.linkedin.com/in/dikshyasharma0405/"
              >
                <FaLinkedin className="h-6 fill-current text-gray-600 hover:text-green-700" />
              </a>
              <a className="link mx-2" href="">
                <FaTwitter className="h-6 fill-current text-gray-600 hover:text-green-700" />
              </a>
              <a className="link mx-2" href="https://github.com/meedikshya">
                <FaGithub className="h-6 fill-current text-gray-600 hover:text-green-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
