import React from "react";
import { motion } from "framer-motion";

const logos = [
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Apple",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Facebook",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    name: "IBM",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Intel",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcBom7gOyiIp3WgrY2MgsA2cVvu-NRpyn0g&s",
  },
  {
    name: "Oracle",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
  {
    name: "Samsung",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Adobe",
    src: "https://images.icon-icons.com/2699/PNG/512/adobe_acrobat_logo_icon_169638.png",
  },
];

const CompanyLogos = () => {
  return (
    <section className="py-12 bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-5xl font-bold text-white mb-2">
            Our Alumni Work At
          </h3>
          <p className="text-5xl text-white mb-2 text-sm">
            Join the ranks of successful professionals at leading global companies
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="py-20 overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-14 w-auto object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
