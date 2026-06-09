import type { ReactNode } from "react";

const benefits = [
  "Wake up with real, lasting energy — not just caffeine spikes",
  "Restore your vitality naturally after 45 without supplements or prescriptions",
  "88 recipes across 4 ancient pillars: Energy, Vitality, Mind & Focus, Strength",
  "No exotic equipment — ordinary ingredients found at any grocery store",
  "The same formulas used by Shaolin monks to maintain peak performance into their 70s",
  "Backed by modern research confirming what Chinese Medicine has known for 5,000 years",
];

const recipeSections = [
  {
    title: "⚡ Energy Boosters",
    description: "Recipes 1–22 — Fast-acting morning tonics that restore sustained energy without caffeine crashes",
  },
  {
    title: "🔥 Vitality Tonics",
    description: "Recipes 23–44 — Ancient formulas for hormonal balance, drive, and deep physical recovery",
  },
  {
    title: "🧠 Mind & Focus",
    description: "Recipes 45–66 — Clarity and concentration blends used by scholar-monks for centuries",
  },
  {
    title: "💪 Strength & Recovery",
    description: "Recipes 67–88 — Muscle support, joint comfort, and overnight repair for men over 45",
  },
];

function SectionDivider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        margin: 0,
      }}
    />
  );
}

interface ContentBlockProps {
  emoji?: string;
  heading?: string;
  children: ReactNode;
  first?: boolean;
}

function ContentBlock({ emoji, heading, children, first = false }: ContentBlockProps) {
  return (
    <div
      style={{
        padding: "32px 0",
        borderTop: first ? "none" : "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {emoji && (
        <span
          style={{
            fontSize: "28px",
            display: "block",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          {emoji}
        </span>
      )}
      {heading && (
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
            fontSize: "26px",
            color: "#ffffff",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          {heading}
        </h2>
      )}
      {children}
    </div>
  );
}

function BodyText({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'EB Garamond', Georgia, serif",
        fontSize: "17px",
        lineHeight: 1.7,
        color: "rgba(255,255,255,0.75)",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {children}
    </p>
  );
}

export function ContentSections() {
  return (
    <section style={{ backgroundColor: "#0e0e0e", padding: "64px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* Block 1: Benefits */}
        <ContentBlock emoji="✦" heading="What You'll Discover" first>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 auto",
              maxWidth: "580px",
            }}
          >
            {benefits.map((benefit, index) => (
              <li
                key={index}
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.85)",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  textAlign: "left",
                }}
              >
                <span
                  style={{ color: "#9A7636", fontWeight: 700, flexShrink: 0 }}
                >
                  ✦
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </ContentBlock>

        <SectionDivider />

        {/* Block 2: Recipe Sections */}
        <ContentBlock emoji="📖" heading="What's Inside the Book">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {recipeSections.map((section, index) => (
              <li
                key={index}
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.75)",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  textAlign: "left",
                }}
              >
                <span style={{ fontWeight: 700, color: "#ffffff" }}>
                  {section.title}
                </span>
                {" — "}
                {section.description}
              </li>
            ))}
          </ul>
          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontStyle: "italic",
              fontSize: "15px",
              color: "rgba(255,255,255,0.5)",
              textAlign: "center",
              marginTop: "16px",
              marginBottom: 0,
            }}
          >
            + BONUS: The 14-Day Ancient Energy Restoration Plan — 2 recipes per day, structured for maximum results by Day 4
          </p>
        </ContentBlock>

        <SectionDivider />

        {/* Block 3: Guarantee */}
        <ContentBlock emoji="🛡️" heading="90-Day Money-Back Guarantee">
          <BodyText>
            Your purchase is fully protected for{" "}
            <span style={{ color: "#9A7636" }}>90 days</span>. If you follow
            the recipes and don{"'"}t feel a real difference in your energy and
            vitality, write to us. No questions asked. Full refund, immediately.
            The ebooks are yours to keep either way.
          </BodyText>
        </ContentBlock>

        <SectionDivider />

        {/* Block 4: CTA Text */}
        <div style={{ padding: "32px 0", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontSize: "22px",
              color: "#9A7636",
              margin: "0 0 16px",
            }}
          >
            5,000 years of wisdom. Proven by warriors. Available to you today.
          </p>
          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontStyle: "italic",
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
              margin: 0,
            }}
          >
            The energy you{"'"}re missing isn{"'"}t gone. It{"'"}s waiting to
            be restored.
          </p>
        </div>
      </div>
    </section>
  );
}
