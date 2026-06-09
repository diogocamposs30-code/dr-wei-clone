import Image from "next/image";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus T., 52 — Dallas, TX",
    rating: 5,
    text: "I was skeptical at first — I've tried energy supplements, sleep trackers, all of it. But three weeks into these recipes and I feel like I did at 38. My wife noticed before I did.",
    avatar: "/images/testimonial-marcus.jpeg",
  },
  {
    name: "Robert K., 48 — Phoenix, AZ",
    rating: 5,
    text: "By Day 4 I already felt different. Not a placebo. I'm sleeping deeper, waking up without an alarm, and I don't need three cups of coffee to feel human. $17 was the best money I've spent this year.",
    avatar: "/images/testimonial-robert.jpeg",
  },
  {
    name: "James H., 57 — Atlanta, GA",
    rating: 5,
    text: "My doctor was surprised by my bloodwork at my last checkup. I told him I'd been using some old Chinese recipes. He didn't believe me until I showed him the book. Highly recommend.",
    avatar: "/images/testimonial-james.jpeg",
  },
];

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      width={28}
      height={28}
      fill="#9A7636"
      style={{ opacity: 0.8, flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="M119.472 66.59C53.489 66.59 0 120.094 0 186.1c0 65.983 53.489 119.487 119.472 119.487c0 0-0.578 44.392-36.642 108.284c-4.006 12.802 3.135 26.435 15.945 30.418c9.089 2.859 18.653 0.08 24.829-6.389c82.925-90.7 115.385-197.448 115.385-251.8C238.989 120.094 185.501 66.59 119.472 66.59z" />
      <path d="M392.482 66.59c-65.983 0-119.472 53.505-119.472 119.51c0 65.983 53.489 119.487 119.472 119.487c0 0-0.578 44.392-36.642 108.284c-4.006 12.802 3.136 26.435 15.945 30.418c9.089 2.859 18.653 0.08 24.828-6.389C479.539 347.2 512 240.452 512 186.1C512 120.094 458.511 66.59 392.482 66.59z" />
    </svg>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }} aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width={14}
          height={14}
          fill="#ffcc00"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        borderRadius: '16px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <QuoteIcon />
      <StarRating count={testimonial.rating} />
      <p
        style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontStyle: 'italic',
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.9)',
          margin: 0,
        }}
      >
        {testimonial.text}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            border: '2px solid rgba(154,118,54,0.4)',
            position: 'relative',
          }}
        >
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={44}
            height={44}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <p style={{ margin: 0 }}>
          <em>
            <strong
              style={{
                fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              {testimonial.name}
            </strong>
          </em>
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      style={{
        backgroundColor: '#0e0e0e',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          padding: '51px 20px 27px',
        }}
        className="testimonials-section-inner"
      >
        <style>{`
          @media (min-width: 750px) {
            .testimonials-section-inner {
              padding: 68px 20px 36px !important;
            }
            .testimonials-heading {
              font-size: 36px !important;
            }
            .testimonials-grid {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 24px !important;
            }
          }
        `}</style>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            className="testimonials-heading"
            style={{
              fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '28px',
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: '32px',
              marginTop: 0,
            }}
          >
            Real Men. Real Results.
          </h2>
          <div
            className="testimonials-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '20px',
            }}
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
