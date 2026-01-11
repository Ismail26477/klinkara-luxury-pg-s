import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import RoomsSection from "@/components/RoomsSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import SiteVisitSection from "@/components/SiteVisitSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AmenitiesSection />
        <RoomsSection />
        <VideoSection />
        <GallerySection />
        <TestimonialsSection />
        <BookingSection />
        <SiteVisitSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
