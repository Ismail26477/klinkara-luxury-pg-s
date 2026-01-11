import { motion } from "framer-motion";
import { 
  Wifi, 
  Shield, 
  Sparkles, 
  Zap, 
  Car, 
  Droplets,
  UtensilsCrossed,
  Wind,
  Tv
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description: "100 Mbps dedicated connection for seamless work and entertainment",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "Premium split ACs in all rooms for year-round comfort",
  },
  {
    icon: Shield,
    title: "24/7 Security + CCTV",
    description: "Round-the-clock security with biometric access and CCTV surveillance",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Professional cleaning services to keep your space pristine",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply with generator backup",
  },
  {
    icon: Car,
    title: "Parking Space",
    description: "Secure covered parking for two-wheelers and cars",
  },
  {
    icon: Droplets,
    title: "Hot Water 24/7",
    description: "Instant geyser hot water available round the clock",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Options",
    description: "Delicious home-style meals with veg and non-veg options",
  },
  {
    icon: Tv,
    title: "Entertainment Zone",
    description: "Common areas with TV, gaming, and recreation facilities",
  },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="section-padding bg-secondary/50">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            World-Class Facilities
          </span>
          <h2 className="heading-luxury text-foreground mb-4">
            Premium Amenities
          </h2>
          <div className="gold-divider mb-6" />
          <p className="subheading-luxury mx-auto">
            Every detail is designed to elevate your living experience with comfort and convenience at its core.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="luxury-card p-8 h-full hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
