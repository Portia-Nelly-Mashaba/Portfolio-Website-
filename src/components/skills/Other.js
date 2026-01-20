import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function Other() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Other Skills
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Advanced</p>

      <p className="text-base text-textDark mt-6">
        Beyond technical skills, I bring valuable soft skills and methodologies that enhance team collaboration, project delivery, and overall software quality.
      </p>

      <div className="mt-6">
        <h4 className="text-textGreen font-medium mb-3">Skills:</h4>
        <ul className="flex flex-col gap-2">
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Agile Methodologies</span> - Scrum, Kanban, and iterative development practices for efficient project management</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Collaboration</span> - Working effectively in cross-functional teams, code reviews, and knowledge sharing</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">UI/UX Design</span> - Creating intuitive, user-friendly interfaces with focus on user experience and accessibility</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Security & Compliance Awareness</span> - Implementing secure coding practices and ensuring compliance with industry standards</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Other;
