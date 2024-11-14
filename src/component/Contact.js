import React from "react";
import gmailIcon from '../asset/gmail.svg';
import linkedinIcon from '../asset/linkedin.svg';
import githubIcon from '../asset/github.svg';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div id="contact" ref={ref} className="bg-gray-100 p-6 flex justify-between items-start">
      {/* Left side: Contact Us heading */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Feel free to reach out through any of the following platforms:</h2>
      </div>

      {/* Right side: "Feel free..." text with images as links */}
      <div>
        <div className="space-y-2 flex gap-10">
          {/* Gmail Image Link */}
          <a href="mailto:suhas.gangadhar508@gmail.com" className="flex justify-center items-center">
            <img src={gmailIcon} alt="Gmail" className="w-8 h-8 cursor-pointer mt-2" />
          </a>

          {/* LinkedIn Image Link */}
          <a
            href="https://www.linkedin.com/in/suhas-g-ab0165313"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 cursor-pointer" />
          </a>

          {/* GitHub Image Link */}
          <a
            href="https://github.com/Suhas50"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center mb-5"
          >
            <img src={githubIcon} alt="GitHub" className="w-8 h-8 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Contact;
