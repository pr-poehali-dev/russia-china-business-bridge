import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, LINE, LOGO, BRAND } from "./theme";

export default function SiteFooter() {
  return (
    <footer className="py-8 px-4 md:px-8" style={{ borderTop: `1px solid ${LINE}` }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={LOGO}
            alt={BRAND}
            style={{ width: 28, height: 28, objectFit: "contain", mixBlendMode: "multiply" }}
          />
          <span className="font-bold text-sm" style={{ color: INK }}>{BRAND}</span>
        </Link>
        <div className="flex gap-2">
          {["Globe", "MessageCircle", "Phone"].map((ic) => (
            <div key={ic} className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-50"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <Icon name={ic as "Globe"} size={15} style={{ color: INK }} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
