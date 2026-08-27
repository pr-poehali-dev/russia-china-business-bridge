import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, ACCENT, SUB, LINE, PANEL, LOGO, BRAND } from "@/components/landing/theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";

const AUTH_URL = "https://functions.poehali.dev/6d242237-1045-4f33-8502-7385b80072c9";

export default function Register() {
  const navigate = useNavigate();
  const { lang } = useLang();
  const t = useT(lang);
  const [mode, setMode] = useState<"register" | "login">("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch(AUTH_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: mode, name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Что-то пошло не так");
        return;
      }
      localStorage.setItem("client_token", data.token);
      localStorage.setItem("client_name", data.client.name);
      navigate("/cabinet");
    } catch {
      setError("Ошибка соединения, попробуйте ещё раз");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#000000" }}>
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2.5 mb-8">
          <img src={LOGO} alt={BRAND} style={{ width: 34, height: 34, objectFit: "contain", mixBlendMode: "normal" }} />
          <span className="font-bold text-lg" style={{ color: INK }}>{BRAND}</span>
        </Link>

        <div className="bg-[#17171D] rounded-3xl p-8 shadow-sm" style={{ border: `1px solid ${LINE}` }}>
          <div className="flex gap-2 p-1 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.05)" }}>
            {(["register", "login"] as const).map((m) => (
              <button
                key={m}
                onClick={() => { setMode(m); setError(""); }}
                className="flex-1 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={mode === m ? { background: PANEL, color: INK, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" } : { color: SUB }}
              >
                {m === "register" ? t("regTab") : t("loginTab")}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {mode === "register" && (
              <input type="text" placeholder={t("phYourName")} value={name} onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all text-white placeholder:text-gray-500 focus:border-white/30"
                style={{ border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.05)" }} />
            )}
            <input type="email" placeholder={t("phEmail")} value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all text-white placeholder:text-gray-500 focus:border-white/30"
              style={{ border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.05)" }} />
            <input type="password" placeholder={t("phPassword")} value={password} onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all text-white placeholder:text-gray-500 focus:border-white/30"
              style={{ border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.05)" }} />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button onClick={submit} disabled={loading}
              className="w-full py-3.5 rounded-full text-[15px] font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
              style={{ background: ACCENT }}>
              {loading ? t("wait") : mode === "register" ? t("signUp") : t("signIn")}
            </button>
          </div>

          <p className="text-center text-sm mt-5" style={{ color: SUB }}>
            {mode === "register" ? t("haveAccount") : t("noAccount")}
            <button onClick={() => { setMode(mode === "register" ? "login" : "register"); setError(""); }}
              className="font-semibold" style={{ color: ACCENT }}>
              {mode === "register" ? t("signIn") : t("signUp")}
            </button>
          </p>
        </div>

        <Link to="/" className="flex items-center justify-center gap-1.5 mt-6 text-sm hover:opacity-70" style={{ color: SUB }}>
          <Icon name="ArrowLeft" size={15} /> {t("toHome")}
        </Link>
      </div>
    </div>
  );
}