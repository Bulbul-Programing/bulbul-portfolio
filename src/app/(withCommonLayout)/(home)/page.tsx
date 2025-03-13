import Image from "next/image";

import fullStackImage from "../../../../public/programming icon/full stack developer.png";
import frontendImage from "../../../../public/programming icon/frontend developer.png";
import backendDeveloperImage from "../../../../public/programming icon/backend developer.png";
import eCommerceImage from "../../../../public/programming icon/e-commerce web.png";
import webPerformance from "../../../../public/programming icon/web Performance.png";
import webMaintenance from "../../../../public/programming icon/web Maintenance.png";

import Testimonial from "@/src/components/Testimonial";
import Client from "@/src/components/Client";
import Title from "@/src/utils/Title";

const page = () => {
  return (
    <div>
      {/* About me section */}
      <Title title="About Me" />
      <div>
        <h1 className="text-2xl font-semibold mt-3 mb-2">
          Hello! I’m Bulbul Ahammed.
        </h1>
        <p className="font-medium text-lg">
          I’m a passionate{" "}
          <span className="font-bold">MERN stack developer</span> with a mission
          to create{" "}
          <span className="font-bold">
            {" "}
            high-performance, scalable, and user-friendly web applications.
          </span>{" "}
          With a strong command over{" "}
          <span className="font-bold">
            {" "}
            React, Next.js, TypeScript, and MongoDB,{" "}
          </span>{" "}
          I help businesses and startups build their digital presence with
          cutting-edge solutions. Let’s build something amazing together!
        </p>
      </div>
      {/* My service section */}
      <Title title="My Service" />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          {/* Full-Stack Web Development */}
          <div className="border-2 hover:border-[#F6B846] transition-all cursor-pointer p-2 rounded-md">
            <Image
              alt="Full Stack Developer"
              className="border-2 border-[#F6B846] p-2 rounded-xl"
              height={70}
              src={fullStackImage}
              width={70}
            />
            <p className="font-semibold py-2 text-gray-900">
              Full-Stack Web Development:
            </p>
            <p className="text-gray-700">
              I build{" "}
              <span className="font-semibold">scalable web applications</span>{" "}
              using the <span className="font-semibold">MERN stack</span>,
              ensuring seamless front-to-back integration.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="border-2 hover:border-[#F6B846] transition-all cursor-pointer p-2 rounded-md">
            <Image
              alt="Frontend Developer"
              className="border-2 border-[#F6B846] p-2 rounded-xl"
              height={70}
              src={frontendImage}
              width={70}
            />
            <p className="font-semibold py-2 text-gray-900">
              Frontend Development:
            </p>
            <p className="text-gray-700">
              I craft{" "}
              <span className="font-semibold">modern, responsive UIs</span> with{" "}
              <span className="font-semibold">
                React, Next.js, and TypeScript
              </span>{" "}
              for an engaging user experience.
            </p>
          </div>

          {/* Backend Development */}
          <div className="border-2 hover:border-[#F6B846] transition-all cursor-pointer p-2 rounded-md">
            <Image
              alt="Backend Developer"
              className="border-2 border-[#F6B846] p-2 rounded-xl"
              height={70}
              src={backendDeveloperImage}
              width={70}
            />
            <p className="font-semibold py-2 text-gray-900">
              Backend Development:
            </p>
            <p className="text-gray-700">
              I develop{" "}
              <span className="font-semibold">secure and efficient APIs</span>{" "}
              using{" "}
              <span className="font-semibold">Node.js and Express.js</span> with
              authentication and database management.
            </p>
          </div>

          {/* E-commerce Development */}
          <div className="border-2 hover:border-[#F6B846] transition-all cursor-pointer p-2 rounded-md">
            <Image
              alt="E-commerce Developer"
              className="border-2 border-[#F6B846] p-2 rounded-xl"
              height={70}
              src={eCommerceImage}
              width={70}
            />
            <p className="font-semibold py-2 text-gray-900">
              E-commerce Development:
            </p>
            <p className="text-gray-700">
              I create{" "}
              <span className="font-semibold">custom online stores</span> with{" "}
              <span className="font-semibold">payment integration</span> and
              smooth shopping experiences.
            </p>
          </div>

          {/* Website Optimization */}
          <div className="border-2 hover:border-[#F6B846] transition-all cursor-pointer p-2 rounded-md">
            <Image
              alt="Performance Optimization"
              className="border-2 border-[#F6B846] p-2 rounded-xl"
              height={70}
              src={webPerformance}
              width={70}
            />
            <p className="font-semibold py-2 text-gray-900">
              Website Optimization:
            </p>
            <p className="text-gray-700">
              I enhance{" "}
              <span className="font-semibold">website speed & SEO</span> using
              lazy loading, caching, and Core Web Vitals improvements.
            </p>
          </div>

          {/* Deployment & Maintenance */}
          <div className="border-2 hover:border-[#F6B846] transition-all cursor-pointer p-2 rounded-md">
            <Image
              alt="Deployment & Maintenance"
              className="border-2 border-[#F6B846] p-2 rounded-xl"
              height={70}
              src={webMaintenance}
              width={70}
            />
            <p className="font-semibold py-2 text-gray-900">
              Deployment & Maintenance:
            </p>
            <p className="text-gray-700">
              I manage <span className="font-semibold">app deployment</span> on{" "}
              <span className="font-semibold">
                Vercel, Netlify, and DigitalOcean
              </span>
              , ensuring regular updates and monitoring.
            </p>
          </div>
        </div>
      </div>
      {/* My Client Section */}
      <Title title="My Client" />
      <div>
        <Client />
      </div>
      {/* Testimonials section */}
      <Title title="Testimonial" />
      <div>
        <Testimonial />
      </div>
    </div>
  );
};

export default page;
