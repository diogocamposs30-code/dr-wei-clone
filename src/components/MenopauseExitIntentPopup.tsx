"use client";

import { useCallback, useEffect, useState } from "react";

const SESSION_KEY = "menopauseExitIntentShown";
const COUNTDOWN_SECONDS = 30;
const SPECIAL_OFFER_LINK = "https://drweilongshan.gumroad.com/l/menopausecodeSpecialOffer";

export function MenopauseExitIntentPopup() {
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

    window.history.pushState({ exitIntent: true }, "");

    const handlePopState = () => {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      showPopup();
      window.history.pushState({ exitIntent: true }, "");
    };

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) showPopup();
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
      className="meno-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="meno-popup-title"
      onClick={handleClose}
    >
      <div className="meno-popup-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="meno-popup-close"
          aria-label="Close"
          onClick={handleClose}
        >
          ×
        </button>

        <h2 id="meno-popup-title" className="meno-popup-title">
          WAIT! Special One-Time Offer
        </h2>
        <p className="meno-popup-subtitle">
          Get The Complete Menopause Code for just $19 today only
        </p>

        <p className="meno-popup-countdown">
          ⏱ This offer expires in: {secondsLeft}s
        </p>

        <a href={SPECIAL_OFFER_LINK} className="meno-popup-cta">
          Yes! I Want It For $19
        </a>

        <button
          type="button"
          className="meno-popup-decline"
          onClick={handleClose}
        >
          No thanks, I&apos;ll pay full price later
        </button>
      </div>

      <style>{`
        .meno-popup-overlay {
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
          animation: menoPopupFadeIn 0.25s ease;
        }

        .meno-popup-box {
          position: relative;
          background: #ffffff;
          border-radius: 12px;
          width: 100%;
          max-width: 420px;
          padding: 36px 28px 28px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
          animation: menoPopupScaleIn 0.25s ease;
        }

        .meno-popup-close {
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

        .meno-popup-close:hover {
          background-color: #f3f3f3;
          color: #17140F;
        }

        .meno-popup-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 800;
          font-size: 26px;
          color: #17140F;
          margin: 0 0 12px;
          line-height: 1.2;
        }

        .meno-popup-subtitle {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 17px;
          color: #C96490;
          font-weight: 600;
          margin: 0 0 16px;
          line-height: 1.45;
        }

        .meno-popup-countdown {
          font-family: Poppins, sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #d32f2f;
          margin: 0 0 24px;
        }

        .meno-popup-cta {
          display: block;
          width: 100%;
          background-color: #2E8B6E;
          color: #ffffff;
          padding: 16px 24px;
          font-family: Poppins, sans-serif;
          font-size: 14px;
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

        .meno-popup-cta:hover {
          background-color: #237a5e;
        }

        .meno-popup-decline {
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

        .meno-popup-decline:hover {
          color: #6B655C;
        }

        @keyframes menoPopupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes menoPopupScaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @media (max-width: 480px) {
          .meno-popup-box {
            padding: 32px 20px 24px;
          }
          .meno-popup-title {
            font-size: 22px;
          }
          .meno-popup-subtitle {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
