"use client";

export function BottomBar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#0e0e0e",
        borderTop: "1px solid rgba(147,124,30,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "7px 16px",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          color: "#e8e0cc",
          fontSize: "0.8rem",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        Get The Male Vitality Code —{" "}
        <span style={{ color: "#937c1e", fontWeight: 700 }}>$17</span>
      </span>

      <a
        href="https://drweilongshan.gumroad.com/l/secretcode"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#22c55e",
          color: "#fff",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "0.8rem",
          padding: "7px 20px",
          borderRadius: "6px",
          textDecoration: "none",
          letterSpacing: "0.02em",
          whiteSpace: "nowrap",
          boxShadow: "0 2px 8px rgba(34,197,94,0.35)",
          transition: "background-color 0.15s ease, box-shadow 0.15s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#16a34a";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 4px 14px rgba(34,197,94,0.45)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#22c55e";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 2px 8px rgba(34,197,94,0.35)";
        }}
      >
        Buy Now
      </a>
    </div>
  );
}
