import Image from "next/image";

// Part A: Decorative SVG Divider
function DecorativeDivider() {
  return (
    <div style={{ maxWidth: "560px", margin: "0 auto", padding: "5px 14px" }}>
      <svg
        viewBox="0 0 400 24"
        width="100%"
        style={{
          display: "block",
          maxWidth: "360px",
          margin: "0 auto",
          height: "auto",
          overflow: "visible",
        }}
      >
        <rect
          x="14"
          y="9"
          width="6"
          height="6"
          fill="#9A7636"
          transform="rotate(45 17 12)"
        />
        <polygon points="36,12 103,10 170,12 103,14" fill="#9A7636" />
        <path
          d="M200 3 C 209 8, 209 16, 200 21 C 191 16, 191 8, 200 3 Z"
          fill="#9A7636"
        />
        <polygon points="230,12 297,10 364,12 297,14" fill="#9A7636" />
        <rect
          x="380"
          y="9"
          width="6"
          height="6"
          fill="#9A7636"
          transform="rotate(45 383 12)"
        />
      </svg>
    </div>
  );
}

// Part B: Brand + Heading + Subtitle
function BrandHeading() {
  return (
    <div
      style={{
        maxWidth: "560px",
        margin: "0 auto",
        padding: "2px 14px 8px",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.03em",
          fontSize: "23px",
          color: "#9A7636",
          marginBottom: "14px",
          display: "block",
          whiteSpace: "nowrap",
        }}
      >
        Dr. Wei Longshan
      </span>
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 600,
          fontSize: "32px",
          lineHeight: 1.14,
          color: "#17140F",
          margin: "0 0 16px",
        }}
      >
        The Ancient Chinese Secret That Restores Male Energy After 45
        <br />
        (Western Medicine Has Never Taught You This)
      </h1>
      <p
        style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontStyle: "italic",
          color: "#6B655C",
          fontSize: "17px",
          lineHeight: 1.45,
          maxWidth: "600px",
          margin: "0 auto 16px",
        }}
      >
        88 time-tested recipes from 5,000 years of Chinese Medicine — used by
        warriors, monks, and emperors to maintain extraordinary energy, vitality,
        and strength well into their 70s and 80s.
      </p>
    </div>
  );
}

// Star SVG icon
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width="14"
      height="14"
      style={{ display: "inline-block", verticalAlign: "middle" }}
      aria-hidden="true"
    >
      <path
        fill="#ffcc00"
        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
      />
    </svg>
  );
}

// Part C: Star Rating
function StarRating() {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <span style={{ display: "flex", gap: "2px", alignItems: "center" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </span>
      <span
        style={{ fontWeight: 700, fontSize: "14px", marginLeft: "4px" }}
      >
        4.9
      </span>
      <span style={{ color: "#6B655C", fontSize: "14px" }}>
        {" "}
        · 3,200+ men restored
      </span>
    </div>
  );
}

// Gift item type
interface GiftItem {
  img: string;
  name: string;
  originalPrice: string;
  label: string;
}

const gifts: GiftItem[] = [
  {
    img: "/images/book-main.png",
    name: "Ancient Chinese Secrets to Restore Male Energy & Vitality After 45",
    originalPrice: "$17",
    label: "Included",
  },
  {
    img: "/images/book-bonus.png",
    name: "BONUS — The 14-Day Ancient Energy Restoration Plan",
    originalPrice: "$17",
    label: "FREE",
  },
];

// Part D: Gift Bundle Box
function GiftBundleBox() {
  return (
    <div style={{ maxWidth: "560px", margin: "16px auto 8px", padding: "0 14px" }}>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: "20px",
          color: "#17140F",
          marginBottom: "8px",
        }}
      >
        Order today and receive
      </p>
      <div style={{ border: "1px solid #17140F", padding: "4px 14px" }}>
        {gifts.map((gift, index) => (
          <div
            key={gift.name}
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              padding: "11px 0",
              borderBottom:
                index < gifts.length - 1 ? "1px solid #D9D4CC" : "none",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                border: "1px solid #D9D4CC",
                background: "#fff",
                overflow: "hidden",
                padding: "3px",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src={gift.img}
                alt={gift.name}
                width={56}
                height={56}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#17140F",
                }}
              >
                {gift.name}
              </div>
              <div>
                <s style={{ color: "#6B655C", fontSize: "13px" }}>
                  {gift.originalPrice}
                </s>
              </div>
              <div
                style={{
                  color: "#9A7636",
                  textTransform: "uppercase",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                }}
              >
                {gift.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Part E: Price Display
function PriceDisplay() {
  return (
    <div
      style={{
        maxWidth: "560px",
        margin: "0 auto",
        padding: "16px 14px 8px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span
          style={{ fontSize: "24px", fontWeight: 700, color: "#121212" }}
        >
          $17
        </span>
        <s style={{ color: "#9A7636", fontSize: "16px" }}>$34</s>
        <span
          style={{
            background: "#0e0e0e",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: "4px",
            textTransform: "uppercase",
          }}
        >
          SAVE 50%
        </span>
      </div>
    </div>
  );
}

// Part F: Add to Cart Button
function AddToCartButton() {
  return (
    <div
      style={{
        maxWidth: "560px",
        margin: "0 auto",
        padding: "8px 14px 24px",
      }}
    >
      <a
        href="https://drweilongshan.gumroad.com/l/secretcode"
        className="product-atc-btn"
      >
        <span style={{ display: "block" }}>
          YES — I Want Both Ebooks for Just $17
        </span>
        <span
          style={{
            display: "block",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.02em",
            textTransform: "none",
            marginTop: "4px",
            opacity: 0.9,
          }}
        >
          Instant Digital Download · 90-Day Money-Back Guarantee
        </span>
      </a>
      <style>{`
        .product-atc-btn {
          background-color: #0e0e0e;
          color: #ffffff;
          width: 100%;
          padding: 14px 24px;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          border: none;
          transition: background-color 0.15s ease;
          display: block;
          text-align: center;
          text-decoration: none;
          box-sizing: border-box;
        }
        .product-atc-btn:hover {
          background-color: rgba(14,14,14,0.85);
        }
      `}</style>
    </div>
  );
}

export function ProductInfo() {
  return (
    <div>
      <DecorativeDivider />
      <BrandHeading />
      <StarRating />
      <GiftBundleBox />
      <PriceDisplay />
      <AddToCartButton />
    </div>
  );
}
