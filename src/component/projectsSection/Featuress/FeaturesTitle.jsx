import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaBed, FaBath, FaRulerCombined, FaCar } from "react-icons/fa";

const FeatureTitleDuplicate = () => {
  return (
    <>
   
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[#111612] text-[#faf8f7] py-20"
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Section: Property Images */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-4 flex flex-col justify-between"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="/off plane/1/WhatsApp Image 2024-11-05 at 02.53.56_1ad882a6.jpg" alt="Property Image 1" className="w-full h-[250px] object-cover rounded-lg" />
              <img src="/off plane/1/WhatsApp Image 2024-11-05 at 02.53.59_9387b975.jpg" alt="Property Image 2" className="w-full h-[250px] object-cover rounded-lg" />
            </div>
            <img src="/off plane/1/WhatsApp Image 2024-11-05 at 02.54.00_551ce4f0.jpg" alt="Property Image 3" className="w-full h-[300px] object-cover rounded-lg" />
          </motion.div>

          {/* Right Section: Property Details */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-6 flex flex-col justify-between"
          >
            {/* Property Highlights */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="grid grid-cols-5 gap-4 text-center"
            >
              <div className="flex flex-col items-center">
                <FaBed className="text-2xl" />
                <h4 className="text-lg font-semibold">5 Beds</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaBath className="text-2xl" />
                <h4 className="text-lg font-semibold">5 Baths</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaRulerCombined className="text-2xl" />
                <h4 className="text-lg font-semibold">26,000 Sq. ft.</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaRulerCombined className="text-2xl" />
                <h4 className="text-lg font-semibold">26,000 Sq. ft.</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaCar className="text-2xl" />
                <h4 className="text-lg font-semibold">5 Cars</h4>
              </div>
            </motion.div>

            {/* Agent Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.3, delay: 0.7 }}
              className="flex flex-col items-center mt-4 space-y-2"
            >
              <img src="/features/image.png" alt="Agent" className="w-24 h-24 rounded-full border-4 border-[#404740]" />
              <h4 className="text-xl font-semibold text-center mt-2">Mohamed Nabil</h4>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center space-x-2 text-sm font-medium">
                  <FaPhoneAlt /> <span>CALL NOW</span>
                </button>
                <button className="flex items-center space-x-2 text-sm font-medium">
                  <FaWhatsapp /> <span>SEND US A MESSAGE</span>
                </button>
              </div>
            </motion.div>

            {/* Property Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.4, delay: 0.9 }}
              className="space-y-4 mt-6"
            >
              <h4 className="text-lg font-semibold">Description</h4>
              <p className="text-[#d3d3d3] leading-relaxed">
                This stunning residence exemplifies modern elegance in an exclusive enclave. 
                The home offers remarkable amenities, open-plan spaces, and high ceilings, making it a 
                haven for luxury seekers. Perfect for those desiring refined living.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>




    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[#111612] text-[#faf8f7] py-20"
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Section: Property Images */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-4 flex flex-col justify-between"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="/off plane/2/WhatsApp Image 2024-11-05 at 02.56.21_b639dddf.jpg" alt="Property Image 1" className="w-full h-[250px] object-cover rounded-lg" />
              <img src="/off plane/2/WhatsApp Image 2024-11-05 at 02.56.28_38b5b347.jpg" alt="Property Image 2" className="w-full h-[250px] object-cover rounded-lg" />
            </div>
            <img src="/off plane/2/WhatsApp Image 2024-11-05 at 02.56.29_36f40446.jpg" alt="Property Image 3" className="w-full h-[300px] object-cover rounded-lg" />
          </motion.div>

          {/* Right Section: Property Details */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-6 flex flex-col justify-between"
          >
            {/* Property Highlights */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="grid grid-cols-5 gap-4 text-center"
            >
              <div className="flex flex-col items-center">
                <FaBed className="text-2xl" />
                <h4 className="text-lg font-semibold">3 Beds</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaBath className="text-2xl" />
                <h4 className="text-lg font-semibold">9 Baths</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaRulerCombined className="text-2xl" />
                <h4 className="text-lg font-semibold">26,000 Sq. ft.</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaRulerCombined className="text-2xl" />
                <h4 className="text-lg font-semibold">26,000 Sq. ft.</h4>
              </div>
              <div className="flex flex-col items-center">
                <FaCar className="text-2xl" />
                <h4 className="text-lg font-semibold">5 Cars</h4>
              </div>
            </motion.div>

            {/* Agent Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.3, delay: 0.7 }}
              className="flex flex-col items-center mt-4 space-y-2"
            >
              <img src="/features/image.png" alt="Agent" className="w-24 h-24 rounded-full border-4 border-[#404740]" />
              <h4 className="text-xl font-semibold text-center mt-2">Mohamed Nabil</h4>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center space-x-2 text-sm font-medium">
                  <FaPhoneAlt /> <span>CALL NOW</span>
                </button>
                <button className="flex items-center space-x-2 text-sm font-medium">
                  <FaWhatsapp /> <span>SEND US A MESSAGE</span>
                </button>
              </div>
            </motion.div>

            {/* Property Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.4, delay: 0.9 }}
              className="space-y-4 mt-6"
            >
              <h4 className="text-lg font-semibold">Description</h4>
              <p className="text-[#d3d3d3] leading-relaxed">
                This stunning residence exemplifies modern elegance in an exclusive enclave. 
                The home offers remarkable amenities, open-plan spaces, and high ceilings, making it a 
                haven for luxury seekers. Perfect for those desiring refined living.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>




    
    </>
  );
};

export default FeatureTitleDuplicate;
