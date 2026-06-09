export function HeroBanner() {
  return (
    <div
      className="hero-banner"
      style={{
        width: "100%",
        height: "70vh",
        backgroundImage: "url(/images/foto-capa.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>{`
        @media (max-width: 749px) {
          .hero-banner {
            height: 55vh !important;
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </div>
  );
}
