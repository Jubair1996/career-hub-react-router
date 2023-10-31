import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" p-10 bg-black text-white ">
      <div className="footer max-w-6xl mx-auto">
        <aside>
          <h1>Career Hub</h1>
          <p className="my-3">
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br />
            suffered alteration in some form.
          </p>
          <div className="flex gap-4 text-3xl text-blue-400">
          <Link>
            <BsFacebook></BsFacebook>
          </Link>
          <Link>
            <AiFillTwitterCircle></AiFillTwitterCircle>
          </Link>
          <Link>
            <AiFillInstagram></AiFillInstagram>
          </Link>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <hr className="max-w-6xl mx-auto my-8"/>
      <p className="text-white text-center text-xl">@2023 CareerHub. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
