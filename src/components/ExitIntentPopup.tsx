"use client";

import { useCallback, useEffect, useState } from "react";

const SESSION_KEY = "exitIntentShown";
const COUNTDOWN_SECONDS = 30;

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  const showPopup = useCallback(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "true");
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Add a history entry so the back button fires `popstate`
    // instead of immediately navigating away.
    window.history.pushState({ exitIntent: true }, "");

    const handlePopState = () => {
      if (sessionStorage.getItem(SESSION_KEY)) {
        return;
      }
      showPopup();
      // Re-push the state so the user stays on the page.
      window.history.pushState({ exitIntent: true }, "");
    };

    // Desktop exit-intent: mouse moves toward the browser's top
    // chrome (tabs/back/close button).
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        showPopup();
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [showPopup]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    setSecondsLeft(COUNTDOWN_SECONDS);

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsOpen(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="exit-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
      onClick={handleClose}
    >
      <div className="exit-popup-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="exit-popup-close"
          aria-label="Close"
          onClick={handleClose}
        >
          ×
        </button>

        <h2 id="exit-popup-title" className="exit-popup-title">
          WAIT! Special One-Time Offer
        </h2>
        <p className="exit-popup-subtitle">
          Get The Male Vitality Code for just $9 today only
        </p>

        <p className="exit-popup-countdown">
          ⏱ This offer expires in: {secondsLeft}s
        </p>

        <a
          href="https://drweilongshan.gumroad.com/l/secretcode-special"
          className="exit-popup-cta"
        >
          Yes! I Want It For $9
        </a>

        <button
          type="button"
          className="exit-popup-decline"
          onClick={handleClose}
        >
          No thanks, I&apos;ll pay full price later
        </button>
      </div>

      <style>{`
        .exit-popup-overlay {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 9999;
          animation: exitPopupFadeIn 0.25s ease;
        }

        .exit-popup-box {
          position: relative;
          background: #ffffff;
          border-radius: 12px;
          width: 100%;
          max-width: 420px;
          padding: 36px 28px 28px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
          animation: exitPopupScaleIn 0.25s ease;
        }

        .exit-popup-close {
          position: absolute;
          top: 10px;
          right: 12px;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          color: #6B655C;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .exit-popup-close:hover {
          background-color: #f3f3f3;
          color: #17140F;
        }

        .exit-popup-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 800;
          font-size: 26px;
          color: #17140F;
          margin: 0 0 12px;
          line-height: 1.2;
        }

        .exit-popup-subtitle {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 17px;
          color: #6B655C;
          margin: 0 0 16px;
          line-height: 1.45;
        }

        .exit-popup-countdown {
          font-family: Poppins, sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #d32f2f;
          margin: 0 0 24px;
        }

        .exit-popup-cta {
          display: block;
          width: 100%;
          background-color: #16a34a;
          color: #ffffff;
          padding: 16px 24px;
          font-family: Poppins, sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          border-radius: 6px;
          box-sizing: border-box;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .exit-popup-cta:hover {
          background-color: #128a3e;
        }

        .exit-popup-decline {
          display: block;
          width: 100%;
          background: none;
          border: none;
          margin-top: 14px;
          padding: 6px;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          color: #9a9a9a;
          text-decoration: underline;
          cursor: pointer;
        }

        .exit-popup-decline:hover {
          color: #6B655C;
        }

        @keyframes exitPopupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes exitPopupScaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @media (max-width: 480px) {
          .exit-popup-box {
            padding: 32px 20px 24px;
          }
          .exit-popup-title {
            font-size: 22px;
          }
          .exit-popup-subtitle {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
