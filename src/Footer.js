import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <div className="container-fluid p-4">
                    <FaFacebookSquare className="mx-2" />
                    <FaFacebookMessenger className="mx-2"/>
                    <IoLogoInstagram className="mx-2"/>
                    <FaPinterest className="mx-2"/>
                    <FaTwitter className="mx-2"/>
                <p className="text-center py-3 text-secondary ">Copyright ©2024 All rights reserved | This template is made with by Myanmar Months.</p>
            </div>
        </>
    );
}

export default Footer;