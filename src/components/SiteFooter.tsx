interface FooterLink {
  label: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  { label: "Contact Information", href: "#" },
  { label: "Legal Notice", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: '#0e0e0e',
        color: 'rgba(255,255,255,0.7)',
      }}
    >
      <div
        style={{ padding: '48px 20px 32px' }}
        className="site-footer-inner"
      >
        <style>{`
          @media (min-width: 750px) {
            .site-footer-inner {
              padding: 64px 20px 32px !important;
            }
            .site-footer-top-grid {
              grid-template-columns: 3fr 3fr !important;
            }
          }
          .site-footer-link:hover {
            color: rgba(255,255,255,1) !important;
          }
        `}</style>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Top grid */}
          <div
            className="site-footer-top-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '32px',
            }}
          >
            {/* Quick Links column */}
            <div>
              <h3
                style={{
                  fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                  marginTop: 0,
                }}
              >
                Quick Links
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="site-footer-link"
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              marginTop: '32px',
              paddingTop: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.4)',
                margin: 0,
              }}
            >
              © 2026, Dr. Wei Longshan
            </p>
            <p
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.3)',
                margin: 0,
              }}
            >
              Visa · Mastercard · PayPal · Apple Pay · Google Pay
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
