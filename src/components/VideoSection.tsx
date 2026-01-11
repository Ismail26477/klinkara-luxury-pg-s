import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-woman-walking-through-a-modern-house-1261-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Experience Klinkara
          </span>
          <h2 className="heading-luxury text-3xl md:text-5xl mb-6">
            Where Luxury Meets <span className="luxury-gradient-text">Lifestyle</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            Step inside our premium living spaces and discover why Klinkara is the preferred choice 
            for professionals and students seeking the finest accommodation experience.
          </p>

          {/* Play Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
            <div className="relative w-20 h-20 rounded-full btn-luxury flex items-center justify-center">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </motion.button>
          <p className="mt-4 text-white/60 text-sm">Watch our virtual tour</p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10,000+", label: "Sq. Ft. Living Space" },
            { value: "3", label: "Floors" },
            { value: "100%", label: "Occupancy Rate" },
            { value: "5 Mins", label: "To Metro Station" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold luxury-gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
