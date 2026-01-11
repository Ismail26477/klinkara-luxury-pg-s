import { motion } from "framer-motion";
import { Check, Users, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";

const rooms = [
  {
    type: "Single Sharing",
    price: "₹18,000",
    period: "/month",
    description: "Perfect for those who value privacy and personal space",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
    features: [
      "Private room",
      "Attached bathroom",
      "Study table & chair",
      "Wardrobe",
      "All amenities included",
    ],
    popular: false,
  },
  {
    type: "Double Sharing",
    price: "₹12,000",
    period: "/month",
    description: "Ideal balance of privacy and companionship",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80",
    features: [
      "Shared room for 2",
      "Attached bathroom",
      "Individual study areas",
      "Separate wardrobes",
      "All amenities included",
    ],
    popular: true,
  },
  {
    type: "Triple Sharing",
    price: "₹8,500",
    period: "/month",
    description: "Budget-friendly option with great community vibes",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    features: [
      "Shared room for 3",
      "Common bathroom",
      "Shared study space",
      "Individual storage",
      "All amenities included",
    ],
    popular: false,
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="section-padding bg-background">
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
            Choose Your Space
          </span>
          <h2 className="heading-luxury text-foreground mb-4">
            Room Types & Pricing
          </h2>
          <div className="gold-divider mb-6" />
          <p className="subheading-luxury mx-auto">
            Select from our range of thoughtfully designed rooms to match your lifestyle and budget.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group ${room.popular ? "lg:-translate-y-4" : ""}`}
            >
              {room.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="btn-luxury px-6 py-2 text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`luxury-card overflow-hidden h-full flex flex-col ${
                room.popular ? "ring-2 ring-accent shadow-gold" : ""
              }`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <Bed className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">{room.type}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-display font-bold text-foreground">{room.price}</span>
                      <span className="text-muted-foreground">{room.period}</span>
                    </div>
                    <p className="text-muted-foreground">{room.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#booking">
                    <Button 
                      variant={room.popular ? "luxury" : "luxuryOutline"} 
                      className="w-full"
                      size="lg"
                    >
                      Book Now
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
