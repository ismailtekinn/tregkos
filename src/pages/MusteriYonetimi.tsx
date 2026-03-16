import { useState } from "react";

const customers = [
  {
    id: 1,
    initials: "MS",
    name: "Mehmet Soylu",
    contact: "+90 532 123 45 67",
    type: "phone",
    badge: "SADIK MÜŞTERİ",
    badgeVariant: "warning",
  },
  {
    id: 2,
    initials: "AY",
    name: "Ayşe Yılmaz",
    contact: "ayse.yilmaz@email.com",
    type: "email",
    badge: "YENİ",
    badgeVariant: "secondary",
  },
  {
    id: 3,
    initials: "KD",
    name: "Kemal Demir",
    contact: "+90 541 987 65 43",
    type: "phone",
    badge: "SADIK MÜŞTERİ",
    badgeVariant: "warning",
  },
  {
    id: 4,
    initials: "ZA",
    name: "Zeynep Arslan",
    contact: "zeynep.arslan@email.com",
    type: "email",
    badge: "YENİ",
    badgeVariant: "secondary",
  },
];

const MusteriYonetimi=()=> {
  const [activeTab, setActiveTab] = useState("musteriler");
  const [search, setSearch] = useState("");

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.contact.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ background: "#f0f0f0" }}
    >
      <div
        className="d-flex flex-column"
        style={{
          width: 390,
          minHeight: 844,
          background: "#f5f0e8",
          borderRadius: 32,
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          fontFamily: "'Segoe UI', sans-serif",
          position: "relative",
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between px-4 pt-4 pb-2">
          <div className="d-flex align-items-center gap-3">
            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{
                width: 48,
                height: 48,
                background: "#f5c518",
                fontSize: 22,
              }}
            >
              🏪
            </div>
            <div>
              <div className="fw-bold" style={{ fontSize: 16, color: "#1a1a1a" }}>
                Asım Boray Sulakcı
              </div>
              <div style={{ fontSize: 12, color: "#888" }}>Mağaza Yönetim Paneli</div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle"
              style={{ width: 40, height: 40, background: "#fff", cursor: "pointer" }}
            >
              🔔
            </div>
            <div
              className="rounded-circle overflow-hidden"
              style={{ width: 40, height: 40, background: "#ddd" }}
            >
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="avatar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="d-flex px-4 gap-4 mt-2 border-bottom" style={{ borderColor: "#ddd" }}>
          {["musteriler", "kampanyalar", "analiz"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="bg-transparent border-0 pb-2 fw-semibold"
              style={{
                fontSize: 14,
                color: activeTab === tab ? "#1a1a1a" : "#aaa",
                borderBottom: activeTab === tab ? "2.5px solid #f5c518" : "2.5px solid transparent",
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "all 0.2s",
              }}
            >
              {tab === "musteriler"
                ? "Müşteriler"
                : tab === "kampanyalar"
                ? "Kampanyalar"
                : "Analiz"}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="px-4 mt-3 d-flex gap-2">
          <div
            className="d-flex align-items-center flex-grow-1 rounded-pill px-3"
            style={{ background: "#fff", height: 46, boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
          >
            <span style={{ fontSize: 16, color: "#bbb", marginRight: 8 }}>🔍</span>
            <input
              type="text"
              placeholder="Müşteri adı, telefon veya e-posta"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-0 bg-transparent w-100"
              style={{ outline: "none", fontSize: 13, color: "#555" }}
            />
          </div>
          <button
            className="d-flex align-items-center justify-content-center rounded-circle border-0"
            style={{
              width: 46,
              height: 46,
              background: "#f5c518",
              fontSize: 20,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            👤+
          </button>
        </div>

        {/* Stats Card */}
        <div
          className="mx-4 mt-3 rounded-4 p-3"
          style={{ background: "#fff", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
        >
          <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, letterSpacing: 1 }}>
            TOPLAM MÜŞTERİ
          </div>
          <div
            className="fw-bold"
            style={{ fontSize: 36, color: "#1a1a1a", lineHeight: 1.1, marginTop: 2 }}
          >
            1,284
          </div>
          <div style={{ fontSize: 13, color: "#2db57a", marginTop: 4 }}>
            ↑ +12% bu ay
          </div>
        </div>

        {/* Recent Customers */}
        <div className="px-4 mt-4 d-flex justify-content-between align-items-center">
          <span className="fw-bold" style={{ fontSize: 16, color: "#1a1a1a" }}>
            Son Aktif Müşteriler
          </span>
          <span style={{ fontSize: 13, color: "#f5c518", cursor: "pointer", fontWeight: 600 }}>
            Tümünü Gör
          </span>
        </div>

        {/* Customer List */}
        <div className="px-4 mt-2 d-flex flex-column gap-3 pb-5">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="rounded-4 p-3"
              style={{ background: "#fff", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
                    style={{
                      width: 44,
                      height: 44,
                      background: "#fff8dc",
                      color: "#b8860b",
                      fontSize: 15,
                      flexShrink: 0,
                    }}
                  >
                    {c.initials}
                  </div>
                  <div>
                    <div className="fw-semibold" style={{ fontSize: 15, color: "#1a1a1a" }}>
                      {c.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>
                      {c.type === "phone" ? "📞 " : "✉️ "}
                      {c.contact}
                    </div>
                  </div>
                </div>
                <span
                  className="rounded-pill px-2 py-1"
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    background: c.badgeVariant === "warning" ? "#fff3cd" : "#e9e9e9",
                    color: c.badgeVariant === "warning" ? "#856404" : "#555",
                    whiteSpace: "nowrap",
                  }}
                >
                  {c.badge}
                </span>
              </div>
              <div className="d-flex gap-2 mt-3">
                <button
                  className="flex-grow-1 rounded-pill border-0 fw-semibold"
                  style={{
                    background: "#f5c518",
                    color: "#1a1a1a",
                    height: 40,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Not Ekle
                </button>
                <button
                  className="flex-grow-1 rounded-pill fw-semibold"
                  style={{
                    background: "transparent",
                    color: "#f5c518",
                    border: "1.5px solid #f5c518",
                    height: 40,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Detay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Nav */}
        <div
          className="d-flex justify-content-around align-items-center py-3 px-2 mt-auto"
          style={{
            background: "#fff",
            borderTop: "1px solid #eee",
            position: "sticky",
            bottom: 0,
          }}
        >
          {[
            { icon: "🏠", label: "ANA SAYFA", key: "home" },
            { icon: "👥", label: "MÜŞTERİLER", key: "musteriler" },
            { icon: "🛍️", label: "SİPARİŞLER", key: "siparisler" },
            { icon: "⚙️", label: "AYARLAR", key: "ayarlar" },
          ].map((item) => (
            <button
              key={item.key}
              className="d-flex flex-column align-items-center border-0 bg-transparent"
              style={{
                cursor: "pointer",
                color: item.key === "home" ? "#f5c518" : "#aaa",
              }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 0.5, marginTop: 2 }}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MusteriYonetimi;