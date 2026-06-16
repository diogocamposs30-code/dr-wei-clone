import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductInfo } from "@/components/ProductInfo";
import { WaveDivider } from "@/components/WaveDivider";
import { ContentSections } from "@/components/ContentSections";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { SiteFooter } from "@/components/SiteFooter";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { BottomBar } from "@/components/BottomBar";

export default function Home() {
  return (
    <>
      {/* Announcement Ticker Bar */}
      <AnnouncementBar />

      {/* Sticky Navigation Header */}
      <SiteHeader />

      {/* Main Product Section */}
      <main id="MainContent" tabIndex={-1}>
        <section
          style={{
            backgroundColor: "#ffffff",
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          {/* 2-column grid: gallery left, product info right */}
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              padding: "0 20px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "40px",
              paddingTop: "24px",
              paddingBottom: "24px",
            }}
            className="product-layout"
          >
            <ProductGallery />
            <ProductInfo />
          </div>

          {/* Responsive grid */}
          <style>{`
            @media (min-width: 750px) {
              .product-layout {
                grid-template-columns: 1fr 1fr !important;
                padding-top: 36px !important;
                padding-bottom: 36px !important;
                align-items: start;
              }
            }
          `}</style>
        </section>

        {/* Transition: white → dark */}
        <WaveDivider fromColor="#ffffff" toColor="#0e0e0e" />

        {/* Dark content sections: delivery, book contents, guarantee */}
        <ContentSections />

        {/* Testimonials on dark background */}
        <TestimonialsSection />

        {/* Transition: dark → white */}
        <WaveDivider fromColor="#0e0e0e" toColor="#ffffff" />

        {/* FAQ on white */}
        <FaqSection />
      </main>

      {/* Site Footer */}
      <SiteFooter />

      {/* Exit-Intent Offer Popup */}
      <ExitIntentPopup />

      {/* Fixed bottom CTA bar */}
      <BottomBar />
    </>
  );
}
