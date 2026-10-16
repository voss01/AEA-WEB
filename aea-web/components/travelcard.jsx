import { motion } from "framer-motion";

export default function TravelCard({ title, image, date, info }) {
  return (
    <motion.div
      className="relative flex-1 h-80 rounded-xl shadow-lg overflow-hidden cursor-pointer"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 }
        }}
        transition={{ duration: 0.4 }}
      />

      <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
        <motion.h3
          className="text-white text-2xl font-bold truncate"
          variants={{
            rest: { y: 0 },
            hover: { y: -4 }
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="overflow-hidden"
          variants={{
            rest: { opacity: 0, y: 8, maxHeight: 0, marginTop: 0 },
            hover: { opacity: 1, y: 0, maxHeight: 80, marginTop: 4 }
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-1">
            <p className="text-white text-sm font-normal">{date}</p>
            <p className="text-white text-sm font-normal">{info}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
