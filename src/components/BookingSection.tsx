import { motion } from "framer-motion";
import { useState } from "react";
import { Check, User, Phone, Mail, Calendar, Home, Wallet, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    moveInDate: "",
    roomType: "",
    budget: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Booking Request Submitted!",
      description: "Thank you! Our team will contact you shortly.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="heading-luxury text-3xl mb-4 text-foreground">Thank You!</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Your booking request has been received. Our team will contact you within 24 hours 
              to discuss your requirements and schedule a visit.
            </p>
            <Button variant="luxury" onClick={() => setIsSubmitted(false)}>
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Reserve Your Space
            </span>
            <h2 className="heading-luxury text-foreground mb-6">
              Book Your <span className="luxury-gradient-text">Premium Stay</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Take the first step towards premium living. Fill out the form and our team 
              will get in touch with you to discuss your requirements and arrange a visit.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                "No brokerage or hidden charges",
                "Flexible payment options available",
                "Instant confirmation within 24 hours",
                "Free cancellation before move-in",
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="luxury-card-elevated p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Booking Request Form
              </h3>

              <div className="space-y-5">
                {/* Full Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-secondary/50 border-0 rounded-xl"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-secondary/50 border-0 rounded-xl"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-secondary/50 border-0 rounded-xl"
                  />
                </div>

                {/* Move-in Date */}
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="date"
                    name="moveInDate"
                    required
                    value={formData.moveInDate}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-secondary/50 border-0 rounded-xl"
                  />
                </div>

                {/* Room Type */}
                <div className="relative">
                  <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    name="roomType"
                    required
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full h-14 pl-12 pr-4 bg-secondary/50 border-0 rounded-xl text-foreground appearance-none cursor-pointer"
                  >
                    <option value="">Select Room Type</option>
                    <option value="single">Single Sharing - ₹18,000/month</option>
                    <option value="double">Double Sharing - ₹12,000/month</option>
                    <option value="triple">Triple Sharing - ₹8,500/month</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="relative">
                  <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="budget"
                    placeholder="Monthly Budget (e.g., ₹10,000 - ₹15,000)"
                    value={formData.budget}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-secondary/50 border-0 rounded-xl"
                  />
                </div>

                {/* Notes */}
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <Textarea
                    name="notes"
                    placeholder="Additional Notes (optional)"
                    value={formData.notes}
                    onChange={handleChange}
                    className="pl-12 pt-4 min-h-[100px] bg-secondary/50 border-0 rounded-xl resize-none"
                  />
                </div>

                <Button type="submit" variant="luxury" size="xl" className="w-full">
                  Submit Booking Request
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
