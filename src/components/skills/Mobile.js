import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function Mobile() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Mobile Development
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Intermediate</p>

      <p className="text-base text-textDark mt-6">
        I develop cross-platform mobile applications for iOS and Android, leveraging native device features and creating seamless user experiences. My mobile development focuses on performance and native functionality.
      </p>

      <div className="mt-6">
        <h4 className="text-textGreen font-medium mb-3">Technologies:</h4>
        <ul className="flex flex-col gap-2">
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">React Native</span> - Building cross-platform mobile apps with native features, local storage, and device APIs</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Flutter</span> - Cross-platform mobile development with Dart for building native-performance apps</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">SQLite</span> - Local database storage for offline-first mobile applications</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">.NET (C#) Mobile</span> - Cross-platform mobile development using Xamarin/.NET MAUI for native iOS and Android apps</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Mobile;
