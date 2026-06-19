import { cn } from "@/lib/utils";

const DEFAULT_ITEMS = [
  "⚡ FREE BONUS: 14-Day Ancient Energy Plan included today only",
  "🔥 Over 3,200 men restored their energy using these recipes",
  "✦ Limited time: Get both ebooks for just $17",
] as const;

// Render 4 copies for seamless infinite loop at any viewport width
const COPIES = 4;

interface AnnouncementBarProps {
  items?: readonly string[];
}

export function AnnouncementBar({ items = DEFAULT_ITEMS }: AnnouncementBarProps) {
  return (
    <div
      className={cn("overflow-hidden py-3 md:py-4")}
      style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
      aria-label="Promotional announcements"
    >
      {/* Scrolling track */}
      <div
        className={cn(
          "announcement-ticker flex whitespace-nowrap",
          "gap-x-[60px] md:gap-x-[100px]"
        )}
      >
        {Array.from({ length: COPIES }).flatMap((_, copyIndex) =>
          items.map((text, itemIndex) => (
            <p
              key={`${copyIndex}-${itemIndex}`}
              className="whitespace-nowrap shrink-0 announcement-ticker-text"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.6rem",
                color: "#ffffff",
              }}
            >
              {text}
            </p>
          ))
        )}
      </div>

      {/* Responsive font-size for ticker text */}
      <style>{`
        @media (min-width: 750px) {
          .announcement-ticker-text {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </div>
  );
}
