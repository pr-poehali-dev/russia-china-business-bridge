import { useState, useEffect, useRef, useCallback } from "react";
import Icon from "@/components/ui/icon";
import { INK, ACCENT, SUB, LINE } from "@/components/landing/theme";

const CHAT_URL = "https://functions.poehali.dev/84fb9523-59f1-442a-9de7-ea2cd18437f3";

interface Message {
  id: number;
  sender: "client" | "admin";
  text: string;
  created_at: string | null;
  file_url?: string | null;
  file_name?: string | null;
}

const isImage = (name?: string | null) => !!name && /\.(png|jpe?g|gif|webp|svg|bmp)$/i.test(name);

interface ChatBoxProps {
  role: "client" | "admin";
  auth: { token?: string; password?: string };
  clientId?: number;
  onSent?: () => void;
}

export default function ChatBox({ role, auth, clientId, onSent }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const authHeaders = useCallback((): Record<string, string> => {
    const h: Record<string, string> = { "Content-Type": "application/json" };
    if (role === "admin" && auth.password) h["X-Admin-Password"] = auth.password;
    if (role === "client" && auth.token) h["X-Auth-Token"] = auth.token;
    return h;
  }, [role, auth]);

  const load = useCallback(async () => {
    const url = role === "admin" && clientId ? `${CHAT_URL}?client_id=${clientId}` : CHAT_URL;
    try {
      const res = await fetch(url, { headers: authHeaders() });
      if (!res.ok) return;
      const data = await res.json();
      setMessages(data.messages || []);
    } catch {
      /* ignore */
    }
  }, [role, clientId, authHeaders]);

  useEffect(() => {
    load();
    const t = setInterval(load, 5000);
    return () => clearInterval(t);
  }, [load]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const readFile = (f: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(",")[1] || "");
      reader.onerror = reject;
      reader.readAsDataURL(f);
    });

  const send = async () => {
    const value = text.trim();
    if ((!value && !file) || sending) return;
    setSending(true);
    try {
      const body: Record<string, unknown> = { text: value };
      if (role === "admin" && clientId) body.client_id = clientId;
      if (file) {
        body.file_data = await readFile(file);
        body.file_name = file.name;
        body.file_type = file.type;
      }
      const res = await fetch(CHAT_URL, { method: "POST", headers: authHeaders(), body: JSON.stringify(body) });
      if (res.ok) {
        const msg = await res.json();
        setMessages((prev) => [...prev, msg]);
        setText("");
        setFile(null);
        if (fileRef.current) fileRef.current.value = "";
        onSent?.();
      }
    } finally {
      setSending(false);
    }
  };

  const fmt = (iso: string | null) => (iso ? new Date(iso).toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "");

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center py-10" style={{ color: SUB }}>
            <Icon name="MessageCircle" size={36} className="mb-2" />
            <p className="text-sm">Сообщений пока нет</p>
          </div>
        )}
        {messages.map((m) => {
          const mine = m.sender === role;
          return (
            <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
              <div className="max-w-[75%]">
                <div
                  className="px-4 py-2.5 rounded-2xl text-sm whitespace-pre-wrap break-words"
                  style={mine ? { background: ACCENT, color: "#fff", borderBottomRightRadius: 6 } : { background: "#F1F2F4", color: INK, borderBottomLeftRadius: 6 }}
                >
                  {m.file_url && isImage(m.file_name) && (
                    <a href={m.file_url} target="_blank" rel="noopener noreferrer" className="block">
                      <img src={m.file_url} alt={m.file_name || ""} className="rounded-xl max-h-56 mb-1.5" />
                    </a>
                  )}
                  {m.file_url && !isImage(m.file_name) && (
                    <a href={m.file_url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 mb-1.5 underline break-all"
                      style={{ color: mine ? "#fff" : INK }}>
                      <Icon name="Paperclip" size={15} /> {m.file_name || "Файл"}
                    </a>
                  )}
                  {m.text}
                </div>
                <p className="text-[11px] mt-1 px-1" style={{ color: SUB, textAlign: mine ? "right" : "left" }}>{fmt(m.created_at)}</p>
              </div>
            </div>
          );
        })}
        <div ref={endRef} />
      </div>

      <div style={{ borderTop: `1px solid ${LINE}` }}>
        {file && (
          <div className="px-3 pt-3 flex items-center gap-2">
            <div className="flex items-center gap-2 max-w-full px-3 py-1.5 rounded-full text-xs" style={{ background: "#F1F2F4", color: INK }}>
              <Icon name={isImage(file.name) ? "Image" : "Paperclip"} size={14} />
              <span className="truncate max-w-[180px]">{file.name}</span>
              <button onClick={() => { setFile(null); if (fileRef.current) fileRef.current.value = ""; }} className="shrink-0">
                <Icon name="X" size={14} />
              </button>
            </div>
          </div>
        )}
        <div className="p-3 flex items-center gap-2">
          <input ref={fileRef} type="file" className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)} />
          <button onClick={() => fileRef.current?.click()}
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:bg-gray-100"
            style={{ color: SUB }} aria-label="Прикрепить файл">
            <Icon name="Paperclip" size={19} />
          </button>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Написать сообщение..."
            className="flex-1 px-4 py-2.5 rounded-full text-sm outline-none focus:border-gray-400"
            style={{ border: `1px solid ${LINE}` }}
          />
          <button onClick={send} disabled={sending || (!text.trim() && !file)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 disabled:opacity-50"
            style={{ background: ACCENT }}>
            <Icon name={sending ? "LoaderCircle" : "Send"} size={17} className={sending ? "animate-spin" : ""} />
          </button>
        </div>
      </div>
    </div>
  );
}