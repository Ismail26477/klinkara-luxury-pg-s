import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
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
            Get In Touch
          </span>
          <h2 className="heading-luxury text-foreground mb-4">
            Contact Us
          </h2>
          <div className="gold-divider mb-6" />
          <p className="subheading-luxury mx-auto">
            Have questions? Reach out to us anytime. We're here to help you find your perfect home.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {[
              {
                icon: MapPin,
                title: "Our Location",
                content: "123 Premium Avenue, Koramangala\nBangalore, Karnataka 560034",
              },
              {
                icon: Phone,
                title: "Phone Number",
                content: "+91 98765 43210\n+91 87654 32109",
              },
              {
                icon: Mail,
                title: "Email Address",
                content: "info@klinkarapg.com\nbooking@klinkarapg.com",
              },
              {
                icon: Clock,
                title: "Office Hours",
                content: "Monday - Saturday: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 6:00 PM",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965898744387!2d77.61474811482188!3d12.935218990879193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1452c2aacbc1%3A0xce8cf4fa25ab9e2a!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Klinkara Luxury PG Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
