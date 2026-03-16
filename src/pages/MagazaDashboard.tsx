import { useState } from "react";

const stats = [
  {
    icon: "👁️",
    label: "Toplam Görüntülenme",
    value: "48.204",
    change: "+8.4%",
    positive: true,
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: "🔍",
    label: "Tıklama Sayısı",
    value: "3.150",
    change: "+12.1%",
    positive: true,
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    icon: "👥",
    label: "Yeni Potansiyel Müşteri",
    value: "128",
    change: "-2.4%",
    positive: false,
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
  {
    icon: "🏠",
    label: "Satılan / Kiralanan",
    value: "12",
    change: "+5.0%",
    positive: true,
    color: "#f97316",
    bg: "#fff7ed",
  },
];

const ilanlar = [
  {
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=60&h=40&fit=crop",
    title: "Lüks Villa - Beykoz",
    date: "Ekleme: 12.05.2024",
    views: "1.240",
    durum: "Aktif",
    durumColor: "success",
    fiyat: "₺12.500.000",
  },
  {
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=60&h=40&fit=crop",
    title: "BMW M4 Competition",
    date: "Ekleme: 10.05.2024",
    views: "4.502",
    durum: "Öne Çıkarıldı",
    durumColor: "warning",
    fiyat: "₺6.200.000",
  },
  {
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=60&h=40&fit=crop",
    title: "Mustakil Bahçeli Ev",
    date: "Ekleme: 08.05.2024",
    views: "850",
    durum: "Satıldı",
    durumColor: "secondary",
    fiyat: "₺4.750.000",
  },
];

const musteriler = [
  { initials: "MK", name: "Mert Korkmaz", detail: "İlgiLenen: BMW M4", color: "#3b82f6" },
  { initials: "SE", name: "Selin Erden", detail: "İlgiLenen: Beykoz Villa", color: "#f59e0b" },
  { initials: "BA", name: "Burak Aydın", detail: "İlgilenilen: 3 İlan", color: "#8b5cf6" },
];

const yorumlar = [
  {
    name: "Ayşe Nur",
    text: "Çok ilgili ve profesyonel bir yaklaşım. Aracı kısa sürede sattık.",
    rating: 5,
  },
  {
    name: "Kemal Can",
    text: "Ev kiralama sürecinde her şey çok pürüzsüz. Teşekkürler.",
    rating: 4,
  },
];

const barData = [60, 75, 55, 80, 70, 90, 65];
const barLabels = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

const navItems = [
  { section: "YÖNETİM", items: [
    { icon: "📋", label: "İlanlarım" },
    { icon: "➕", label: "Yeni İlan Ekle" },
    { icon: "📦", label: "Toplu İlan Yükle" },
    { icon: "💬", label: "Mesajlar", badge: 3 },
    { icon: "👤", label: "Müşteri Yönetimi" },
  ]},
  { section: "PAZARLAMA & FİNANS", items: [
    { icon: "🚀", label: "Reklam / Boost" },
    { icon: "💳", label: "Paket & Ödeme" },
    { icon: "⭐", label: "Yorumlar" },
  ]},
  { section: "MAĞAZA", items: [
    { icon: "✏️", label: "Profil Düzenle" },
    { icon: "🚪", label: "Çıkış Yap" },
  ]},
];

const MagazaDashboard=()=> {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [activeTab, setActiveTab] = useState("Hepsi");

  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#f5f5f0", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Sidebar */}
      <div
        className="d-flex flex-column"
        style={{
          width: 220,
          minHeight: "100vh",
          background: "#fff",
          borderRight: "1px solid #ebebeb",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          padding: "0 0 20px 0",
        }}
      >
        {/* Logo */}
        <div className="d-flex align-items-center gap-2 px-3 py-3" style={{ borderBottom: "1px solid #f0f0f0" }}>
          <div
            className="d-flex align-items-center justify-content-center rounded fw-bold"
            style={{ width: 36, height: 36, background: "#fbbf24", color: "#fff", fontSize: 13 }}
          >
            ABS
          </div>
          <div>
            <div className="fw-bold" style={{ fontSize: 13, lineHeight: 1.2 }}>Asım Boray</div>
            <div style={{ fontSize: 11, color: "#999" }}>Sulakcı</div>
          </div>
        </div>

        {/* Dashboard link */}
        <div className="px-2 pt-2">
          <button
            onClick={() => setActiveNav("Dashboard")}
            className="btn w-100 text-start d-flex align-items-center gap-2 fw-semibold"
            style={{
              background: activeNav === "Dashboard" ? "#fef9c3" : "transparent",
              color: activeNav === "Dashboard" ? "#ca8a04" : "#333",
              borderRadius: 8,
              fontSize: 14,
              padding: "8px 12px",
              border: "none",
            }}
          >
            <span>📊</span> Dashboard
          </button>
        </div>

        {navItems.map((group) => (
          <div key={group.section} className="mt-3 px-2">
            <div className="px-2 mb-1" style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: 1 }}>
              {group.section}
            </div>
            {group.items.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                className="btn w-100 text-start d-flex align-items-center justify-content-between"
                style={{
                  background: activeNav === item.label ? "#fef9c3" : "transparent",
                  color: activeNav === item.label ? "#ca8a04" : "#555",
                  borderRadius: 8,
                  fontSize: 13,
                  padding: "7px 12px",
                  border: "none",
                }}
              >
                <span className="d-flex align-items-center gap-2">
                  <span>{item.icon}</span>
                  {item.label}
                </span>
                {item.badge && (
                  <span className="badge rounded-pill" style={{ background: "#ef4444", fontSize: 10 }}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}

        {/* Package info */}
        <div className="mx-2 mt-auto rounded p-2" style={{ background: "#fef9c3", marginTop: 16 }}>
          <div className="fw-semibold" style={{ fontSize: 12, color: "#92400e" }}>Kurumsal Paket</div>
          <div style={{ fontSize: 11, color: "#a16207" }}>Bitiş Tarihi: 12 Haz 2024</div>
          <div className="progress mt-1" style={{ height: 5 }}>
            <div className="progress-bar" style={{ width: "45%", background: "#fbbf24" }}></div>
          </div>
          <div style={{ fontSize: 10, color: "#a16207", marginTop: 4 }}>45 / 100 İlan Hakkı</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: 220, flex: 1, padding: "0 0 32px 0" }}>
        {/* Top Header */}
        <div
          className="d-flex align-items-center justify-content-between px-4 py-3"
          style={{ background: "#fff", borderBottom: "1px solid #ebebeb", position: "sticky", top: 0, zIndex: 50 }}
        >
          <div>
            <h5 className="mb-0 fw-bold">Hoş Geldin, Asım</h5>
            <small style={{ color: "#22c55e", fontSize: 12 }}>Mağaza performansın bu ay %12 daha iyi.</small>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-light btn-sm rounded-circle" style={{ width: 36, height: 36 }}>🔔</button>
            <div className="d-flex align-items-center gap-2">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle text-white fw-bold"
                style={{ width: 36, height: 36, background: "#fbbf24", fontSize: 14 }}
              >
                A
              </div>
              <div>
                <div className="fw-semibold" style={{ fontSize: 13 }}>Asım Boray S.</div>
                <div style={{ fontSize: 11, color: "#999" }}>Emlak & Galeri</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pt-4">
          {/* Stats Cards */}
          <div className="row g-3 mb-4">
            {stats.map((s, i) => (
              <div className="col-md-3" key={i}>
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: 14 }}>
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle"
                        style={{ width: 38, height: 38, background: s.bg, fontSize: 18 }}
                      >
                        {s.icon}
                      </div>
                      <span
                        className="badge rounded-pill"
                        style={{
                          background: s.positive ? "#dcfce7" : "#fee2e2",
                          color: s.positive ? "#16a34a" : "#dc2626",
                          fontWeight: 600,
                          fontSize: 12,
                        }}
                      >
                        {s.change}
                      </span>
                    </div>
                    <div style={{ fontSize: 12, color: "#888" }}>{s.label}</div>
                    <div className="fw-bold mt-1" style={{ fontSize: 26 }}>{s.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-3">
            {/* Son İlanlar */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm mb-3" style={{ borderRadius: 14 }}>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="fw-bold mb-0">Son İlanlar</h6>
                    <div className="d-flex gap-1">
                      {["Hepsi", "Aktif", "Satıldı"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className="btn btn-sm"
                          style={{
                            background: activeTab === tab ? "#fbbf24" : "transparent",
                            color: activeTab === tab ? "#fff" : "#666",
                            borderRadius: 8,
                            fontWeight: 600,
                            fontSize: 12,
                            border: "none",
                            padding: "4px 12px",
                          }}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-borderless align-middle mb-0">
                      <thead>
                        <tr style={{ fontSize: 11, color: "#aaa", fontWeight: 700 }}>
                          <th>İLAN DETAYI</th>
                          <th>İSTATİSTİK</th>
                          <th>DURUM</th>
                          <th>FİYAT</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {ilanlar.map((ilan, i) => (
                          <tr key={i} style={{ borderTop: "1px solid #f5f5f5" }}>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <img
                                  src={ilan.img}
                                  alt={ilan.title}
                                  className="rounded"
                                  style={{ width: 52, height: 36, objectFit: "cover" }}
                                />
                                <div>
                                  <div className="fw-semibold" style={{ fontSize: 13 }}>{ilan.title}</div>
                                  <div style={{ fontSize: 11, color: "#aaa" }}>{ilan.date}</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div style={{ fontSize: 14, fontWeight: 700 }}>{ilan.views}</div>
                              <div style={{ fontSize: 11, color: "#aaa" }}>görüntülenme</div>
                            </td>
                            <td>
                              <span
                                className={`badge bg-${ilan.durumColor}`}
                                style={{ fontSize: 11, borderRadius: 8, padding: "4px 10px" }}
                              >
                                {ilan.durum}
                              </span>
                            </td>
                            <td>
                              <span className="fw-bold" style={{ fontSize: 14 }}>{ilan.fiyat}</span>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-light rounded-circle" style={{ width: 28, height: 28, padding: 0 }}>⋮</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-center mt-3">
                    <button className="btn btn-sm" style={{ color: "#f59e0b", fontWeight: 600, border: "none", background: "transparent" }}>
                      Tüm İlanları Gör →
                    </button>
                  </div>
                </div>
              </div>

              {/* Son Yorumlar */}
              <div className="card border-0 shadow-sm" style={{ borderRadius: 14 }}>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="fw-bold mb-0">Son Yorumlar</h6>
                    <div className="d-flex align-items-center gap-1">
                      <span style={{ color: "#fbbf24", fontSize: 16 }}>★</span>
                      <span className="fw-bold" style={{ fontSize: 14 }}>4.8</span>
                      <span style={{ fontSize: 12, color: "#aaa" }}>(120 Yorum)</span>
                    </div>
                  </div>
                  {yorumlar.map((y, i) => (
                    <div key={i} className={i > 0 ? "mt-3 pt-3" : ""} style={{ borderTop: i > 0 ? "1px solid #f5f5f5" : "none" }}>
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <span className="fw-semibold" style={{ fontSize: 14 }}>{y.name}</span>
                        <span style={{ color: "#fbbf24", fontSize: 14 }}>
                          {"★".repeat(y.rating)}{"☆".repeat(5 - y.rating)}
                        </span>
                      </div>
                      <p style={{ fontSize: 13, color: "#666", marginBottom: 0 }}>{y.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              {/* Yeni Potansiyel Müşteriler */}
              <div className="card border-0 shadow-sm mb-3" style={{ borderRadius: 14 }}>
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Yeni Potansiyel Müşteriler</h6>
                  {musteriler.map((m, i) => (
                    <div key={i} className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle text-white fw-bold"
                          style={{ width: 36, height: 36, background: m.color, fontSize: 12 }}
                        >
                          {m.initials}
                        </div>
                        <div>
                          <div className="fw-semibold" style={{ fontSize: 13 }}>{m.name}</div>
                          <div style={{ fontSize: 11, color: "#aaa" }}>{m.detail}</div>
                        </div>
                      </div>
                      <button className="btn btn-sm btn-light rounded-circle" style={{ width: 28, height: 28, padding: 0 }}>📞</button>
                    </div>
                  ))}
                  <div className="text-center mt-2">
                    <button className="btn btn-sm" style={{ color: "#f59e0b", fontWeight: 600, border: "none", background: "transparent" }}>
                      Müşteri Yönetimine Git →
                    </button>
                  </div>
                </div>
              </div>

              {/* Boost Banner */}
              <div className="card border-0 mb-3" style={{ borderRadius: 14, background: "#fbbf24" }}>
                <div className="card-body position-relative">
                  <span
                    className="badge position-absolute top-0 end-0 m-2"
                    style={{ background: "#ef4444", fontSize: 10, borderRadius: 6 }}
                  >
                    HOT!
                  </span>
                  <div className="mb-2" style={{ fontSize: 22 }}>🚀</div>
                  <h6 className="fw-bold mb-1">Daha Fazla Satış Yap!</h6>
                  <p style={{ fontSize: 12, color: "#78350f", marginBottom: 12 }}>
                    İlanlarını %50 daha fazla kişiye göstermek için Turbo paketlerini incele.
                  </p>
                  <button
                    className="btn w-100 fw-semibold"
                    style={{ background: "#1a1a1a", color: "#fff", borderRadius: 10, fontSize: 13 }}
                  >
                    Reklam Ver / Boost
                  </button>
                </div>
              </div>

              {/* Dönüşüm Oranı */}
              <div className="card border-0 shadow-sm" style={{ borderRadius: 14 }}>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="fw-bold mb-0">Dönüşüm Oranı</h6>
                    <span style={{ fontSize: 11, color: "#aaa" }}>Son 30 Gün</span>
                  </div>
                  <div className="d-flex align-items-end gap-1" style={{ height: 80 }}>
                    {barData.map((val, i) => (
                      <div key={i} className="d-flex flex-column align-items-center" style={{ flex: 1 }}>
                        <div
                          className="rounded-top w-100"
                          style={{
                            height: `${val}%`,
                            background: i === 5 ? "#fbbf24" : "#fef3c7",
                            transition: "height 0.3s",
                          }}
                        ></div>
                        <div style={{ fontSize: 9, color: "#aaa", marginTop: 4 }}>{barLabels[i]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MagazaDashboard