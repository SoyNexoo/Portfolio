import { motion } from "framer-motion";
const Appear = ({ props }) => {
  return (
    <>
      {props.map((ele, index) => {
        return (
          <motion.div
            key={ele}
            initial={{ opacity: 0, y: -50, x: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {ele}
          </motion.div>
        );
      })}
    </>
  );
};

export default Appear;
