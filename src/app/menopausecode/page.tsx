import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";
import { WaveDivider } from "@/components/WaveDivider";
import { SiteFooter } from "@/components/SiteFooter";
import { MenopauseExitIntentPopup } from "@/components/MenopauseExitIntentPopup";
import { MenopauseBottomBar } from "@/components/MenopauseBottomBar";

const MENOPAUSE_LINK = "https://drweilongshan.gumroad.com/l/menopausecode";

// ─── Color palette ───────────────────────────────────────────
const ROSE = "#C96490";
const JADE = "#2E8B6E";
const GOLD = "#9A7636";
const DARK_BG = "#0e0e0e";

// ─── Data ────────────────────────────────────────────────────

const books = [
  {
    img: "/images/women/ebook-menopause-code.png",
    title: "The Menopause Vitality Code",
    description:
      "88 ancient recipes to balance hormones and restore physical energy. Cooling teas for hot flashes, blood-building tonics, Kidney Jing restoration formulas.",
  },
  {
    img: "/images/women/ebook-calm-code.png",
    title: "The Menopause Calm Code",
    description:
      "80 mind-body practices to master mood swings, anxiety & emotional overwhelm. Acupressure points, breathing techniques, Qigong rituals, calming mantras.",
  },
  {
    img: "/images/women/ebook-sleep-code.png",
    title: "The Menopause Sleep Code",
    description:
      "80 rituals to fall asleep naturally and stay asleep through the night, without medication.",
  },
];

const testimonials = [
  {
    name: "Linda M., 52",
    text: "I'd tried everything for the hot flashes and the sleepless nights. The cooling teas in the Vitality Code were the first thing that actually helped — within two weeks I was sleeping through the night again.",
    avatar: "/images/women/testimonial-linda.jpeg",
  },
  {
    name: "Susan K., 58",
    text: "The mood swings were affecting my marriage and I didn't even realize how much. The breathing practices in the Calm Code gave me something to do in the moment instead of just snapping. Game changer.",
    avatar: "/images/women/testimonial-susan.jpeg",
  },
  {
    name: "Patricia R., 49",
    text: "I was skeptical about 'ancient Chinese medicine' honestly. But the Sleep Code rituals are simple, and after years of insomnia I'm finally falling asleep without medication.",
    avatar: "/images/women/testimonial-patricia.jpeg",
  },
];

const faqItems = [
  {
    question: "Is this a supplement or medication?",
    answer:
      "No. These are ancient recipes, food-based tonics, and mind-body practices — no pills, no prescriptions, no side effects.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Many women notice changes in sleep and mood within the first 1-2 weeks of starting the practices.",
  },
  {
    question: "Do I need any special ingredients or equipment?",
    answer:
      "No. Every recipe uses ingredients you can find at any grocery store, and every practice can be done at home with no equipment.",
  },
  {
    question: "Is this a one-time payment?",
    answer:
      "Yes. One single payment of $27 gives you lifetime access to all three books, with all future updates included.",
  },
];

// ─── Sub-components ──────────────────────────────────────────

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
        <rect x="14" y="9" width="6" height="6" fill={ROSE} transform="rotate(45 17 12)" />
        <polygon points="36,12 103,10 170,12 103,14" fill={ROSE} />
        <path d="M200 3 C 209 8, 209 16, 200 21 C 191 16, 191 8, 200 3 Z" fill={ROSE} />
        <polygon points="230,12 297,10 364,12 297,14" fill={ROSE} />
        <rect x="380" y="9" width="6" height="6" fill={ROSE} transform="rotate(45 383 12)" />
      </svg>
    </div>
  );
}

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

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      width={28}
      height={28}
      fill={ROSE}
      style={{ opacity: 0.8, flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="M119.472 66.59C53.489 66.59 0 120.094 0 186.1c0 65.983 53.489 119.487 119.472 119.487c0 0-0.578 44.392-36.642 108.284c-4.006 12.802 3.135 26.435 15.945 30.418c9.089 2.859 18.653 0.08 24.829-6.389c82.925-90.7 115.385-197.448 115.385-251.8C238.989 120.094 185.501 66.59 119.472 66.59z" />
      <path d="M392.482 66.59c-65.983 0-119.472 53.505-119.472 119.51c0 65.983 53.489 119.487 119.472 119.487c0 0-0.578 44.392-36.642 108.284c-4.006 12.802 3.136 26.435 15.945 30.418c9.089 2.859 18.653 0.08 24.828-6.389C479.539 347.2 512 240.452 512 186.1C512 120.094 458.511 66.59 392.482 66.59z" />
    </svg>
  );
}

function CaretIcon() {
  return (
    <svg
      viewBox="0 0 10 6"
      width={10}
      height={6}
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
        fill="currentColor"
      />
    </svg>
  );
}

// ─── Hero right column ────────────────────────────────────────

function MenopauseHeroInfo() {
  return (
    <div>
      <DecorativeDivider />

      {/* Brand */}
      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "2px 14px 8px", textAlign: "center" }}>
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.03em",
            fontSize: "23px",
            color: GOLD,
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
          Ancient Chinese Wisdom for Your Menopause Journey
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
          5,000 years of Traditional Chinese Medicine, distilled into 3 complete systems
          for your body, mind, and sleep.
        </p>
      </div>

      {/* Star rating */}
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
          {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
        </span>
        <span style={{ fontWeight: 700, fontSize: "14px", marginLeft: "4px" }}>4.9</span>
        <span style={{ color: "#6B655C", fontSize: "14px" }}> · 2,800+ women helped</span>
      </div>

      {/* Bundle box */}
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
          {books.map((book, index) => (
            <div
              key={book.title}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                padding: "11px 0",
                borderBottom: index < books.length - 1 ? "1px solid #D9D4CC" : "none",
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
                  src={book.img}
                  alt={book.title}
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
                    fontSize: "17px",
                    color: "#17140F",
                  }}
                >
                  {book.title}
                </div>
                <div
                  style={{
                    color: ROSE,
                    textTransform: "uppercase",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    fontWeight: 600,
                  }}
                >
                  Included
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "16px 14px 8px" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "24px", fontWeight: 700, color: "#121212" }}>$27</span>
          <s style={{ color: GOLD, fontSize: "16px" }}>$51</s>
          <span
            style={{
              background: DARK_BG,
              color: "#fff",
              fontSize: "12px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "4px",
              textTransform: "uppercase",
            }}
          >
            SAVE 47%
          </span>
        </div>
      </div>

      {/* CTA button */}
      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "8px 14px 24px" }}>
        <a href={MENOPAUSE_LINK} className="meno-atc-btn">
          <span style={{ display: "block" }}>Get The Complete Menopause Code</span>
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
            Instant Digital Download · 3 Complete Ebooks
          </span>
        </a>
        <style>{`
          .meno-atc-btn {
            background-color: ${JADE};
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
          .meno-atc-btn:hover {
            background-color: #237a5e;
          }
          @media (min-width: 750px) {
            .meno-product-layout {
              grid-template-columns: 1fr 1fr !important;
              padding-top: 36px !important;
              padding-bottom: 36px !important;
              align-items: start;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

// ─── Dark content sections ────────────────────────────────────

function IntroSection() {
  return (
    <div style={{ padding: "48px 0 32px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <p
        style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: "18px",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.82)",
          textAlign: "center",
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        You&apos;ve been told menopause is just something you &apos;push through.&apos; Hot
        flashes, sleepless nights, mood swings that feel like they&apos;re hijacking your own
        mind — and the answer you keep hearing is &apos;it&apos;s just hormones, it&apos;ll
        pass.&apos; It doesn&apos;t have to be that way. For over 5,000 years, Chinese medicine
        has treated menopause not as a problem to survive, but as a transition the body can move
        through with balance. Dr. Wei Longshan, 5th-generation TCM practitioner, has distilled
        three complete systems into one definitive collection.
      </p>
    </div>
  );
}

function BooksSection() {
  return (
    <div style={{ padding: "48px 0" }}>
      <span
        style={{
          fontSize: "28px",
          display: "block",
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        📖
      </span>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 600,
          fontSize: "28px",
          color: "#ffffff",
          textAlign: "center",
          marginTop: 0,
          marginBottom: "40px",
        }}
      >
        Three Complete Systems
      </h2>

      <div className="meno-books-grid">
        {books.map((book) => (
          <div
            key={book.title}
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                aspectRatio: "3/4",
                position: "relative",
                backgroundColor: "#111",
              }}
            >
              <Image
                src={book.img}
                alt={book.title}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 750px) 90vw, 33vw"
              />
            </div>
            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#ffffff",
                  margin: "0 0 10px",
                }}
              >
                {book.title}
              </h3>
              <p
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.72)",
                  margin: 0,
                }}
              >
                {book.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .meno-books-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 750px) {
          .meno-books-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

function PriceCTASection() {
  return (
    <div
      style={{
        padding: "32px 0 48px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: "italic",
          fontSize: "22px",
          color: ROSE,
          margin: "0 0 8px",
        }}
      >
        5,000 years of wisdom for the modern woman.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <span style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff" }}>$27</span>
        <s style={{ color: GOLD, fontSize: "18px" }}>$51</s>
        <span
          style={{
            background: ROSE,
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: "4px",
            textTransform: "uppercase",
          }}
        >
          Save 47% Today
        </span>
      </div>
      <a
        href={MENOPAUSE_LINK}
        style={{
          display: "inline-block",
          backgroundColor: JADE,
          color: "#ffffff",
          padding: "16px 36px",
          fontFamily: "Poppins, sans-serif",
          fontSize: "15px",
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          textDecoration: "none",
          borderRadius: "6px",
          transition: "background-color 0.15s ease",
        }}
      >
        Get All 3 Books Now — $27
      </a>
    </div>
  );
}

function GuaranteeSection() {
  return (
    <div
      style={{
        padding: "32px 0",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <span style={{ fontSize: "28px", display: "block", marginBottom: "12px" }}>🛡️</span>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 600,
          fontSize: "24px",
          color: "#ffffff",
          marginTop: 0,
          marginBottom: "12px",
        }}
      >
        90-Day Money-Back Guarantee
      </h2>
      <p
        style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: "17px",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.72)",
          maxWidth: "560px",
          margin: "0 auto",
        }}
      >
        Your purchase is fully protected for{" "}
        <span style={{ color: ROSE }}>90 days</span>. If you follow the
        practices and don&apos;t feel a real difference, write to us. No questions asked.
        Full refund, immediately. The ebooks are yours to keep either way.
      </p>
    </div>
  );
}

function MenopauseTestimonials() {
  return (
    <section style={{ backgroundColor: DARK_BG, color: "#ffffff" }}>
      <div style={{ padding: "51px 20px 40px" }} className="meno-testimonials-inner">
        <style>{`
          @media (min-width: 750px) {
            .meno-testimonials-inner { padding: 68px 20px 48px !important; }
            .meno-testimonials-heading { font-size: 36px !important; }
            .meno-testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 24px !important; }
          }
        `}</style>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            className="meno-testimonials-heading"
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "32px",
              marginTop: 0,
            }}
          >
            Real Women. Real Results.
          </h2>
          <div
            className="meno-testimonials-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <QuoteIcon />
                {/* 5 stars */}
                <div style={{ display: "flex", gap: "2px" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" width={14} height={14} fill="#ffcc00" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "16px",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.9)",
                    margin: 0,
                  }}
                >
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: `2px solid ${ROSE}66`,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={44}
                      height={44}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                  <em>
                    <strong
                      style={{
                        fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                        fontStyle: "italic",
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {t.name}
                    </strong>
                  </em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MenopauseFAQ() {
  return (
    <section style={{ backgroundColor: DARK_BG }}>
      <div style={{ padding: "51px 20px 27px" }} className="meno-faq-inner">
        <style>{`
          @media (min-width: 750px) {
            .meno-faq-inner { padding: 68px 20px 36px !important; }
          }
        `}</style>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "32px",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "40px",
              marginTop: 0,
            }}
          >
            Frequently Asked Questions
          </h2>
          <div>
            {faqItems.map((item, index) => (
              <details
                key={index}
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.15)",
                  ...(index === faqItems.length - 1
                    ? { borderBottom: "1px solid rgba(255,255,255,0.15)" }
                    : {}),
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 0",
                    cursor: "pointer",
                    gap: "12px",
                    color: "#ffffff",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#ffffff",
                      flex: 1,
                    }}
                  >
                    {item.question}
                  </span>
                  <CaretIcon />
                </summary>
                <div style={{ paddingBottom: "20px", paddingLeft: "32px" }}>
                  <p
                    style={{
                      fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      style={{
        backgroundColor: DARK_BG,
        padding: "48px 20px 80px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "22px",
            color: "rgba(255,255,255,0.75)",
            margin: "0 0 32px",
            lineHeight: 1.6,
          }}
        >
          Most women your age have already accepted the discomfort as &apos;just how it
          is.&apos; You don&apos;t have to. The Code is waiting.
        </p>
        <a
          href={MENOPAUSE_LINK}
          style={{
            display: "inline-block",
            backgroundColor: JADE,
            color: "#ffffff",
            padding: "18px 40px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "6px",
            transition: "background-color 0.15s ease",
          }}
        >
          Get The Complete Menopause Code — $27
        </a>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────

export default function MenopauseCodePage() {
  return (
    <>
      <AnnouncementBar items={["🌿 3 ANCIENT CHINESE BOOKS FOR THE PRICE OF 1 — $27 TODAY ONLY (SAVE 47%) 🌿"]} />
      <SiteHeader />

      <main id="MainContent" tabIndex={-1}>
        {/* Hero: 2-col layout — image left, info right */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: 0, paddingBottom: 0 }}>
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
            className="meno-product-layout"
          >
            {/* Left: hero image */}
            <div style={{ width: "100%" }}>
              <div
                style={{
                  aspectRatio: "3/4",
                  borderRadius: "clamp(0px, calc((750px - 100vw) * 9999), 12px)",
                  overflow: "hidden",
                  backgroundColor: "#f5f0f0",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/women/foto-capa-feminino.jpeg"
                  alt="Ancient Chinese Wisdom for Your Menopause Journey"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 750px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Right: info */}
            <MenopauseHeroInfo />
          </div>

          <style>{`
            @media (min-width: 750px) {
              .meno-product-layout {
                grid-template-columns: 1fr 1fr !important;
                padding-top: 36px !important;
                padding-bottom: 36px !important;
                align-items: start;
              }
            }
          `}</style>
        </section>

        <WaveDivider fromColor="#ffffff" toColor={DARK_BG} />

        {/* Dark content sections */}
        <section style={{ backgroundColor: DARK_BG, padding: "0 20px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <IntroSection />
            <BooksSection />
            <PriceCTASection />
            <GuaranteeSection />
          </div>
        </section>

        {/* Testimonials */}
        <MenopauseTestimonials />

        {/* FAQ */}
        <MenopauseFAQ />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      <SiteFooter />
      <MenopauseExitIntentPopup />
      <MenopauseBottomBar />
    </>
  );
}
