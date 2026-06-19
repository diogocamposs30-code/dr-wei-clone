"use client";

const MENOPAUSE_LINK = "https://drweilongshan.gumroad.com/l/menopausecode";

export function MenopauseBottomBar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#0e0e0e",
        borderTop: "1px solid rgba(201,100,144,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        padding: "6px 14px",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          color: "#e8e0cc",
          fontSize: "0.75rem",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.25,
        }}
      >
        Get The Complete Menopause Code —{" "}
        <span style={{ color: "#C96490", fontWeight: 700 }}>$27</span>
      </span>

      <a
        href={MENOPAUSE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#2E8B6E",
          color: "#fff",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "0.75rem",
          padding: "6px 16px",
          borderRadius: "6px",
          textDecoration: "none",
          letterSpacing: "0.02em",
          whiteSpace: "nowrap",
          boxShadow: "0 2px 8px rgba(46,139,110,0.35)",
          transition: "background-color 0.15s ease, box-shadow 0.15s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#237a5e";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 4px 14px rgba(46,139,110,0.45)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2E8B6E";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 2px 8px rgba(46,139,110,0.35)";
        }}
      >
        Buy Now
      </a>
    </div>
  );
}
