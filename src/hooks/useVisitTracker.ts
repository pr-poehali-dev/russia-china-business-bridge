import { useEffect } from "react";

const VISITS_URL = "https://functions.poehali.dev/d2fa8ce2-4e8e-4656-84e7-2c2befb0909a";

export default function useVisitTracker() {
  useEffect(() => {
    if (sessionStorage.getItem("visit_tracked")) return;
    sessionStorage.setItem("visit_tracked", "1");
    fetch(VISITS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: window.location.pathname }),
    }).catch(() => {});
  }, []);
}
