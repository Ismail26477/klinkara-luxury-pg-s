import { motion } from "framer-motion";
import { useState } from "react";
import { Check, User, Phone, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const SiteVisitSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    visitDate: "",
    visitTime: "",
    purpose: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Visit Scheduled!",
      description: "We look forward to meeting you at Klinkara.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section id="site-visit" className="section-padding bg-secondary/50">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="heading-luxury text-3xl mb-4 text-foreground">Visit Scheduled!</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're excited to show you around Klinkara. Our team will call you to confirm the visit details.
            </p>
            <Button variant="luxury" onClick={() => setIsSubmitted(false)}>
              Schedule Another Visit
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="site-visit" className="section-padding bg-secondary/50">
      <div className="container-luxury">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Experience It Firsthand
            </span>
            <h2 className="heading-luxury text-foreground mb-4">
              Schedule a Site Visit
            </h2>
            <div className="gold-divider mb-6" />
            <p className="subheading-luxury mx-auto">
              See our premium facilities in person. Book a visit at your convenience.
            </p>
          </motion.div>

          {/* Visit Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="luxury-card-elevated p-8"
          >
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
                  className="pl-12 h-14 bg-background border-0 rounded-xl"
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
                  className="pl-12 h-14 bg-background border-0 rounded-xl"
                />
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="date"
                    name="visitDate"
                    required
                    value={formData.visitDate}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-background border-0 rounded-xl"
                  />
                </div>
                <div>
                  <select
                    name="visitTime"
                    required
                    value={formData.visitTime}
                    onChange={handleChange}
                    className="w-full h-14 px-4 bg-background border-0 rounded-xl text-foreground appearance-none cursor-pointer"
                  >
                    <option value="">Select Time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Purpose */}
              <div className="relative">
                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  name="purpose"
                  required
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full h-14 pl-12 pr-4 bg-background border-0 rounded-xl text-foreground appearance-none cursor-pointer"
                >
                  <option value="">Purpose of Visit</option>
                  <option value="pg-stay">Looking for PG Stay</option>
                  <option value="enquiry">General Enquiry</option>
                  <option value="partnership">Business Partnership</option>
                </select>
              </div>

              <Button type="submit" variant="luxury" size="xl" className="w-full">
                Schedule My Visit
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default SiteVisitSection;
