'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PenLine } from 'lucide-react';

const items = [
  {
    icon: <FileText className="w-4 h-4 text-white" />,
    text: 'Notaris: 10 Tahun 2017',
  },
  {
    icon: <PenLine className="w-4 h-4 text-white" />,
    text: 'Nomor: AHU-0023456.AH.01.04.Tahun 2017',
  },
];

const Info = () => {
  const marqueeContent = (
    <div className="flex items-center gap-8 ml-8">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          {item.icon}
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-green-700 fixed top-[0px] w-full z-50 shadow overflow-hidden py-5">
      <motion.div
        className="absolute left-0 top-5.5 -translate-y-1/2 text-white text-sm font-semibold whitespace-nowrap"
        initial={{ x: '250%' }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {marqueeContent}
      </motion.div>
    </div>
  );
};

export default Info;
