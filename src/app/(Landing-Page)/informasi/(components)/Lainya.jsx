import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaThumbsUp, FaUser } from "react-icons/fa";
import { formatDateWithDay } from "@/lib/utils";
import { Clock } from "lucide-react";

const Lainya = ({ bacaJuga }) => {
  return (
    <>
      {bacaJuga.length > 0 && (
        <div className="relative">
          <div className="sticky md:top-32   rounded ">
            <h4 className="text-lg font-bold mb-4">Baca Juga</h4>

            {bacaJuga.map((item, index) => (
              <motion.div
                key={item.id}
                className="mb-4 border-b-2 pb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-52 lg:h-36 rounded overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>

                  <div>
                    <Link
                      href={"/informasi/" + item.slug}
                      className="text-md font-medium hover:text-green-800 cursor-pointer"
                    >
                      {item.title}
                    </Link>
                    <div className="flex mb-2 text-xs mt-1 lg:text-sm items-center gap-1 text-gray-500 ">
                      <FaUser />
                      <p className="">{item.author}</p>
                    </div>
                    <div className="text-xs flex items-center gap-2 text-gray-400 mb-2 italic ">
                      <Clock size={14} />
                      <p>{formatDateWithDay(item.createdAt)}</p>
                    </div>

                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Lainya;
