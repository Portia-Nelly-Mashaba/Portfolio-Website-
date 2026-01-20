import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function Backend() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Backend Development
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Intermediate</p>

      <p className="text-base text-textDark mt-6">
        I build scalable server-side applications and RESTful APIs, handling authentication, data processing, and integration with databases. My backend experience spans multiple frameworks and languages.
      </p>

      <div className="mt-6">
        <h4 className="text-textGreen font-medium mb-3">Technologies:</h4>
        <ul className="flex flex-col gap-2">
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Node.js & Express.js</span> - Building RESTful APIs, handling CRUD operations, JWT authentication, and server-side logic</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Laravel (PHP)</span> - Full-stack PHP framework for building robust web applications and help desk systems</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Python</span> - Backend scripting, data processing, and building AI-powered applications</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">REST APIs</span> - Designing and implementing API endpoints for seamless frontend-backend communication</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">GraphQL</span> - Query language and runtime for APIs, enabling efficient data fetching and flexible queries</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">.NET (C#)</span> - Microsoft framework for building robust, scalable enterprise applications and web services</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Backend;
