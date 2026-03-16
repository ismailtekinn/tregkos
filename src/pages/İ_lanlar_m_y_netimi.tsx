import { useState } from "react";

const listings = [
  {
    id: 1,
    category: "KONUT / SATILIK",
    title: "3+1 Ultra Lüks Villa - Çekmeköy",
    price: "14.500.000 TL",
    date: "12.05.2024",
    views: 1240,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&h=180&fit=crop",
    status: "active",
  },
  {
    id: 2,
    category: "VASITA / OTOMOBİL",
    title: "2023 Model Ferrari 296...",
    price: "28.000.000 TL",
    date: "08.05.2024",
    views: 3560,
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=300&h=180&fit=crop",
    status: "active",
  },
  {
    id: 3,
    category: "TİCARİ / OFİS",
    title: "Plaza Katı 450m2 - Maslak",
    price: "65.000 TL / Ay",
    date: "01.05.2024",
    views: 890,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=180&fit=crop",
    status: "active",
  },
];

const tabs = [
  { label: "Aktif", count: 12, key: "active" },
  { label: "Pasif", count: 3, key: "passive" },
  { label: "Satıldı", count: 45, key: "sold" },
];

const İ_lanlar_m_y_netimi=()=> {
  const [activeTab, setActiveTab] = useState("active");
  const [search, setSearch] = useState("");

  const filtered = listings.filter(
    (l) =>
      l.status === activeTab &&
      (l.title.toLowerCase().includes(search.toLowerCase()) ||
        l.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div
      className="d-flex justify-content-center align-items-start min-vh-100"
      style={{ background: "#f0f2f5" }}
    >
      <div
        className="d-flex flex-column"
        style={{
          width: 390,
          minHeight: "100vh",
          background: "#fff",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          className="d-flex align-items-center justify-content-between px-3 pt-4 pb-2"
          style={{ background: "#fff" }}
        >
          <div className="d-flex align-items-center gap-2">
            <div
              style={{
                width: 42,
                height: 42,
                background: "#FFC107",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              🏪
            </div>
            <div>
              <div className="fw-bold" style={{ fontSize: 15, lineHeight: 1.2 }}>
                Asım Boray Sulakcı
              </div>
              <div className="text-muted" style={{ fontSize: 12 }}>
                Mağaza Paneli
              </div>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center"
              style={{ width: 36, height: 36, border: "1.5px solid #e0e0e0" }}
            >
              🔔
            </button>
            <button
              className="btn rounded-circle p-0 d-flex align-items-center justify-content-center"
              style={{
                width: 36,
                height: 36,
                background: "#FFC107",
                border: "none",
                fontSize: 20,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              +
            </button>
          </div>
        </div>

        {/* Page Title */}
        <div className="px-3 pb-2 pt-1">
          <h5 className="fw-bold mb-0" style={{ fontSize: 20 }}>
            İlan Yönetimi
          </h5>
        </div>

        {/* Tabs */}
        <div className="d-flex gap-2 px-3 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="btn fw-semibold"
              style={{
                borderRadius: 22,
                padding: "6px 18px",
                fontSize: 14,
                background: activeTab === tab.key ? "#FFC107" : "#f3f4f6",
                color: activeTab === tab.key ? "#fff" : "#555",
                border: "none",
                boxShadow: activeTab === tab.key ? "0 2px 8px rgba(255,193,7,0.4)" : "none",
                transition: "all 0.18s",
              }}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="px-3 pb-3">
          <div
            className="d-flex align-items-center gap-2"
            style={{
              background: "#f7f8fa",
              borderRadius: 12,
              padding: "10px 14px",
              border: "1.5px solid #ececec",
            }}
          >
            <span style={{ fontSize: 16, color: "#aaa" }}>🔍</span>
            <input
              className="border-0 bg-transparent flex-grow-1"
              placeholder="İlan No veya Başlık ile Ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ outline: "none", fontSize: 14, color: "#444" }}
            />
            <span style={{ fontSize: 16, color: "#aaa" }}>⚙️</span>
          </div>
        </div>

        {/* Listing Cards */}
        <div
          className="px-3 d-flex flex-column gap-3 pb-4"
          style={{ overflowY: "auto", flex: 1 }}
        >
          {filtered.length === 0 ? (
            <div className="text-center text-muted py-5" style={{ fontSize: 14 }}>
              Bu sekmede ilan bulunamadı.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-4"
                style={{
                  background: "#fff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  border: "1px solid #f0f0f0",
                }}
              >
                {/* Card Image */}
                <div style={{ position: "relative" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                {/* Card Body */}
                <div className="px-3 pt-2 pb-1">
                  <div
                    className="fw-semibold"
                    style={{ fontSize: 11, color: "#FFC107", letterSpacing: 0.5 }}
                  >
                    {item.category}
                  </div>
                  <div
                    className="fw-bold"
                    style={{ fontSize: 15, color: "#222", marginBottom: 2 }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="fw-bold"
                    style={{ fontSize: 17, color: "#111", marginBottom: 4 }}
                  >
                    {item.price}
                  </div>
                  <div
                    className="d-flex align-items-center gap-3 text-muted"
                    style={{ fontSize: 12, marginBottom: 10 }}
                  >
                    <span>📅 {item.date}</span>
                    <span>👁 {item.views.toLocaleString("tr-TR")}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div
                  className="d-flex gap-2 px-3 pb-3"
                  style={{ borderTop: "1px solid #f3f3f3", paddingTop: 10 }}
                >
                  <button
                    className="btn btn-outline-secondary d-flex align-items-center gap-1 fw-semibold"
                    style={{ borderRadius: 10, fontSize: 13, padding: "6px 14px" }}
                  >
                    ✏️ Düzenle
                  </button>
                  <button
                    className="btn d-flex align-items-center gap-1 fw-semibold"
                    style={{
                      borderRadius: 10,
                      fontSize: 13,
                      padding: "6px 14px",
                      background: "#fff0f0",
                      color: "#e53935",
                      border: "1px solid #ffd0d0",
                    }}
                  >
                    ❌ Pasife Al
                  </button>
                  <button
                    className="btn fw-bold ms-auto"
                    style={{
                      borderRadius: 10,
                      fontSize: 13,
                      padding: "6px 18px",
                      background: "#FFC107",
                      color: "#fff",
                      border: "none",
                      boxShadow: "0 2px 8px rgba(255,193,7,0.35)",
                    }}
                  >
                    ⬆️ Öne Çıkar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Navigation */}
        <div
          className="d-flex justify-content-around align-items-center pt-2 pb-3"
          style={{
            background: "#fff",
            borderTop: "1px solid #f0f0f0",
            position: "sticky",
            bottom: 0,
          }}
        >
          {[
            { icon: "🏠", label: "Panel" },
            { icon: "📋", label: "İlanlarım", active: true },
            { icon: "💬", label: "Mesajlar" },
            { icon: "📊", label: "Raporlar" },
            { icon: "👤", label: "Profil" },
          ].map((nav) => (
            <button
              key={nav.label}
              className="btn p-0 d-flex flex-column align-items-center gap-1"
              style={{
                border: "none",
                background: "transparent",
                fontSize: 20,
                color: nav.active ? "#FFC107" : "#aaa",
                minWidth: 52,
              }}
            >
              <span>{nav.icon}</span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: nav.active ? 700 : 400,
                  color: nav.active ? "#FFC107" : "#aaa",
                }}
              >
                {nav.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default İ_lanlar_m_y_netimi
