import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function Frontend() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Development
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Intermediate</p>

      <p className="text-base text-textDark mt-6">
        I specialize in building responsive, interactive user interfaces using modern frontend technologies. My experience includes creating single-page applications, managing complex state, and implementing dynamic user experiences.
      </p>

      <div className="mt-6">
        <h4 className="text-textGreen font-medium mb-3">Technologies:</h4>
        <ul className="flex flex-col gap-2">
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">React.js</span> - Component-based UI development, state management with Redux, and integration with third-party APIs</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">JavaScript (ES6+)</span> - Core language for building dynamic web applications and understanding React fundamentals</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">HTML5 & CSS3</span> - Semantic markup and responsive styling for professional user interfaces</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Tailwind CSS</span> - Utility-first CSS framework for rapid UI development and responsive design</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Frontend;
