"use client";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Do I need special ingredients or equipment?",
    answer:
      "No. Every recipe uses ordinary ingredients you can find at any grocery store — no exotic herbs, no special equipment. Most recipes take under 10 minutes to prepare.",
  },
  {
    question: "How quickly will I notice results?",
    answer:
      "Most men report noticeable changes within 4–7 days. The 14-Day Bonus Plan is structured so you start with the fastest-acting recipes first — many report feeling the difference by Day 4.",
  },
  {
    question: "Is this based on real science?",
    answer:
      "Yes. While these recipes come from a 5,000-year tradition, modern research increasingly validates the mechanisms behind them. Each recipe chapter includes references to current scientific literature confirming the key active compounds.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "You're protected by a 90-day money-back guarantee. If you don't feel a real difference after following the program, email us and receive a full refund — no questions asked. The ebooks are yours to keep either way.",
  },
];

function CaretIcon() {
  return (
    <svg
      className="accordion-caret"
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

export function FaqSection() {
  return (
    <section
      style={{
        backgroundColor: '#0e0e0e',
      }}
    >
      <div
        style={{ padding: '51px 20px 27px' }}
        className="faq-section-inner"
      >
        <style>{`
          @media (min-width: 750px) {
            .faq-section-inner {
              padding: 68px 20px 36px !important;
            }
          }
        `}</style>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '32px',
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: '40px',
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
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                  ...(index === faqItems.length - 1
                    ? { borderBottom: '1px solid rgba(255,255,255,0.15)' }
                    : {}),
                }}
              >
                <summary
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0',
                    cursor: 'pointer',
                    gap: '12px',
                    color: '#ffffff',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#ffffff',
                      flex: 1,
                    }}
                  >
                    {item.question}
                  </span>
                  <CaretIcon />
                </summary>
                <div
                  style={{
                    paddingBottom: '20px',
                    paddingLeft: '32px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
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
