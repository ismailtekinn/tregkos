import { useState, useRef, useEffect } from "react";

const messages = [
  {
    id: 1,
    sender: "other",
    name: "Asım Boray",
    text: "Merhaba, Beşiktaş'taki ilanınızla ilgileniyorum. Konumu tam olarak neresi ve ne zaman görebiliriz?",
    time: "10:24",
    avatar: "AB",
  },
  {
    id: 2,
    sender: "me",
    text: "Merhaba Asım Bey, villa Beşiktaş sahil hattına 5 dakika yürüme mesafesindedir. Yarın öğleden sonra için randevu oluşturabiliriz.",
    time: "10:26",
    avatar: "me",
    status: "read",
  },
  {
    id: 3,
    sender: "other",
    name: "Asım Boray",
    text: "Harika, saat 15:00 sizin için uygun mu? Ayrıca krediye uygunluk durumunu da sormak isterim.",
    time: "10:28",
    avatar: "AB",
  },
  {
    id: 4,
    sender: "me",
    text: "Evet, saat 15:00 uygundur. Villa krediye tam uygun durumdadır, tüm evrakları hazır.",
    time: "10:30",
    avatar: "me",
    status: "read",
  },
];

const SohbetDetayTr = () => {
  const [inputValue, setInputValue] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSend = () => {
    if (inputValue.trim()) setInputValue("");
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#f0f2f5" }}
    >
      <div
        className="d-flex flex-column bg-white shadow"
        style={{
          width: "100%",
          maxWidth: 430,
          height: "100vh",
          maxHeight: 812,
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          className="d-flex align-items-center px-3 py-2 border-bottom bg-white"
          style={{ minHeight: 64, gap: 10 }}
        >
          <button className="btn p-0 me-1" style={{ color: "#555" }}>
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                d="M15 19l-7-7 7-7"
                stroke="#555"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
            style={{
              width: 44,
              height: 44,
              background: "linear-gradient(135deg, #f5c842 0%, #e8a800 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              position: "relative",
            }}
          >
            AB
            <span
              style={{
                position: "absolute",
                bottom: 2,
                right: 2,
                width: 10,
                height: 10,
                background: "#4CAF50",
                borderRadius: "50%",
                border: "2px solid #fff",
              }}
            />
          </div>

          <div className="flex-grow-1 ms-1">
            <div className="fw-bold" style={{ fontSize: 15 }}>
              Asım Boray Sulakcı
            </div>
            <div style={{ fontSize: 12, color: "#4CAF50" }}>Çevrimiçi</div>
          </div>

          <button
            className="btn d-flex align-items-center gap-1 fw-semibold px-3 py-2"
            style={{
              background: "linear-gradient(135deg, #f5c842 0%, #e8a800 100%)",
              color: "#fff",
              borderRadius: 20,
              fontSize: 13,
              border: "none",
            }}
          >
            Hemen Ara
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-grow-1 px-3 py-3 overflow-auto"
          style={{
            background: "#f5f6fa",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div className="text-center my-1">
            <span
              className="px-3 py-1 rounded-pill"
              style={{
                background: "#e0e0e0",
                fontSize: 11,
                color: "#888",
                fontWeight: 600,
              }}
            >
              BUGÜN
            </span>
          </div>

          {messages.map((msg) =>
            msg.sender === "other" ? (
              <div key={msg.id} className="d-flex align-items-end gap-2">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: 32,
                    height: 32,
                    background: "linear-gradient(135deg,#f5c842,#e8a800)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {msg.avatar}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#888",
                      marginBottom: 2,
                      marginLeft: 2,
                    }}
                  >
                    {msg.name}
                  </div>

                  <div
                    className="px-3 py-2"
                    style={{
                      background: "#fff",
                      borderRadius: "18px 18px 18px 4px",
                      fontSize: 14,
                      color: "#222",
                      maxWidth: 260,
                    }}
                  >
                    {msg.text}
                  </div>

                  <div
                    style={{ fontSize: 11, color: "#aaa", marginTop: 3 }}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ) : (
              <div key={msg.id} className="d-flex flex-column align-items-end">
                <div
                  className="px-3 py-2"
                  style={{
                    background:
                      "linear-gradient(135deg,#f5c842 0%,#e8a800 100%)",
                    borderRadius: "18px 18px 4px 18px",
                    fontSize: 14,
                    color: "#fff",
                    maxWidth: 270,
                  }}
                >
                  {msg.text}
                </div>

                <div
                  className="d-flex align-items-center gap-1 mt-1 me-1"
                  style={{ fontSize: 11, color: "#aaa" }}
                >
                  {msg.time}
                </div>
              </div>
            )
          )}

          <div ref={messagesEndRef}></div>
        </div>

        {/* Input */}
        <div className="d-flex align-items-center px-3 py-2 border-top bg-white gap-2">
          <input
            type="text"
            className="form-control border-0 bg-light rounded-pill px-3"
            placeholder="Mesajınızı yazın..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button
            className="btn rounded-circle"
            style={{
              width: 42,
              height: 42,
              background:
                "linear-gradient(135deg,#f5c842 0%,#e8a800 100%)",
              border: "none",
              color: "#fff",
            }}
            onClick={handleSend}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SohbetDetayTr;