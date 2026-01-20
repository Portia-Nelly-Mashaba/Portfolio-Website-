import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function Testing() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Testing
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Advanced</p>

      <p className="text-base text-textDark mt-6">
        I ensure software quality through comprehensive testing strategies, covering unit, integration, and functional testing. My testing experience spans multiple frameworks and methodologies to deliver reliable, bug-free applications.
      </p>

      <div className="mt-6">
        <h4 className="text-textGreen font-medium mb-3">Technologies:</h4>
        <ul className="flex flex-col gap-2">
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Unit Testing</span> - 5+ years | 85% - Testing individual components and functions in isolation</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Integration Testing</span> - 5+ years | 82% - Testing interactions between different modules and systems</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Functional Testing</span> - 10+ years | 88% - Validating that software functions according to requirements</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">PyTest</span> - 1+ years | 80% - Python testing framework for writing and running test cases</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">QA Testing</span> - 10+ years | 90% - Comprehensive quality assurance processes and methodologies</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Bug Tracking</span> - 10+ years | 85% - Identifying, documenting, and managing software defects</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Testing;
