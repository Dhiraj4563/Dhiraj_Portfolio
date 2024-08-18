import{INTERNSHIPS} from"../constants";
import { motion } from 'framer-motion';

const Internship = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Internship
      </motion.h1>
      <div>
        {INTERNSHIPS.map((internship, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -100 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="w-full lg:w-1/4">
              <motion.p
                className="mb-2 text-sm text-neutral-400"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                {internship.year}
              </motion.p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                className="mb-2 font-semibold"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 100 }}
                transition={{ duration: 1}}
              >
                {internship.role} -{" "}
                <span className="text-sm text-purple-100">
                  {internship.company}
                </span>
              </motion.h6>
              <motion.p
                className="text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                {internship.description}
              </motion.p>
              <motion.p
                className="mt-2 text-sm text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Technologies: {internship.technologies.join(", ")}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
