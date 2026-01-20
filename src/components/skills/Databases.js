import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function Databases() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Databases & Storage
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Intermediate</p>

      <p className="text-base text-textDark mt-6">
        I work with both SQL and NoSQL databases, managing data efficiently across different application types. My experience includes database design, query optimization, and data management.
      </p>

      <div className="mt-6">
        <h4 className="text-textGreen font-medium mb-3">Technologies:</h4>
        <ul className="flex flex-col gap-2">
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">MongoDB</span> - NoSQL database for flexible document storage, used in e-commerce and recipe management applications</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">MySQL</span> - Relational database management for structured data in Laravel applications</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">Firebase</span> - Real-time database, authentication, and cloud services for rapid app development</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">SQLite</span> - Lightweight database for mobile applications and local data storage</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">TSQL</span> - Transact-SQL for Microsoft SQL Server, writing complex queries, stored procedures, and database management</span>
          </li>
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span><span className="text-textGreen">PostgreSQL</span> - Advanced open-source relational database with robust features for complex data operations</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Databases;
