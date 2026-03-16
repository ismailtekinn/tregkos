import { useState } from "react";

const initialListings = [
  {
    id: 1,
    title: "Modern 3+1 Lüks Daire",
    category: "Konut",
    type: "Konut",
    location: "Beşiktaş, İstanbul",
    date: "24.05.2024",
    price: "4.500.000 TL",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&q=80",
    tab: "Konut",
  },
  {
    id: 2,
    title: "Bahçeli Müstakil Ev",
    category: "Konut",
    type: "Konut",
    location: "Çeşme, İzmir",
    date: "23.05.2024",
    price: "12.750.000 TL",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=200&q=80",
    tab: "Konut",
  },
  {
    id: 3,
    title: "2023 Elektrikli SUV",
    category: "Vasıta",
    type: "Vasıta",
    location: "Ankara",
    date: "22.05.2024",
    price: "2.850.000 TL",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=200&q=80",
    tab: "Vasıta",
  },
  {
    id: 4,
    title: "Deniz Manzaralı Villa",
    category: "Konut",
    type: "Konut",
    location: "Bodrum, Muğla",
    date: "21.05.2024",
    price: "28.000.000 TL",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&q=80",
    tab: "Konut",
  },
  {
    id: 5,
    title: "2022 Sedan Otomobil",
    category: "Vasıta",
    type: "Vasıta",
    location: "İzmir",
    date: "21.05.2024",
    price: "1.450.000 TL",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=200&q=80",
    tab: "Vasıta",
  },
];

const İ_lan_onay_listesi_admin = () => {
  const [activeTab, setActiveTab] = useState("Konut");
  const [listings, setListings] = useState(initialListings);
  const [activeNav, setActiveNav] = useState("İlanlar");
  const [toast, setToast] = useState<{ msg: string; color: string } | null>(null);

  const filtered = listings.filter((l) => l.tab === activeTab);
  const pendingCount = listings.length;

  const showToast = (msg: string, color: string) => {
    setToast({ msg, color });
    setTimeout(() => setToast(null), 2200);
  };

  const handleApprove = (id: number) => {
    setListings((prev) => prev.filter((l) => l.id !== id));
    showToast("İlan onaylandı!", "#28a745");
  };

  const handleReject = (id: number) => {
    setListings((prev) => prev.filter((l) => l.id !== id));
    showToast("İlan reddedildi.", "#dc3545");
  };

  const navItems = [
    { label: "İlanlar", icon: "bi-layout-text-window-reverse" },
    { label: "Kullanıcılar", icon: "bi-people" },
    { label: "Raporlar", icon: "bi-bar-chart" },
    { label: "Ayarlar", icon: "bi-gear" },
  ];

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" />

      {toast && (
        <div
          className="position-fixed top-0 start-50 translate-middle-x mt-3 px-4 py-2 rounded-pill text-white fw-semibold shadow"
          style={{ backgroundColor: toast.color, zIndex: 9999, fontSize: "0.9rem", transition: "all 0.3s" }}
        >
          {toast.msg}
        </div>
      )}

      <div
        className="d-flex flex-column mx-auto position-relative"
        style={{ maxWidth: 430, minHeight: "100vh", backgroundColor: "#f7f7f7", fontFamily: "sans-serif" }}
      >
        {/* NAVBAR */}
        <div className="d-flex align-items-center justify-content-between px-3 py-3 bg-white" style={{ borderBottom: "1px solid #eee" }}>
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 38, height: 38, backgroundColor: "#FFC107", fontSize: 18 }}>
              🏠
            </div>
            <div>
              <div className="fw-bold" style={{ fontSize: "0.95rem" }}>Asım Boray Sulakcı</div>
              <div className="text-muted" style={{ fontSize: "0.7rem" }}>Yönetim Paneli</div>
            </div>
          </div>
          <button className="btn p-0 border-0 bg-transparent">
            <i className="bi bi-person-circle" style={{ fontSize: 26 }} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-grow-1 px-3 pt-4 pb-5">
          <h5 className="fw-bold mb-2">İlan Onay Bekleyenler</h5>

          <span className="badge rounded-pill px-3 py-1 mb-4" style={{ backgroundColor: "#FFF3CD", color: "#856404" }}>
            {pendingCount} BEKLEYEN
          </span>

          <div className="d-flex gap-4 mb-3" style={{ borderBottom: "2px solid #eee" }}>
            {["Konut", "Vasıta"].map((tab) => (
              <button
                key={tab}
                className="btn btn-link p-0 pb-2 fw-semibold text-decoration-none"
                style={{
                  color: activeTab === tab ? "#111" : "#aaa",
                  borderBottom: activeTab === tab ? "2.5px solid #FFC107" : "2.5px solid transparent",
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="d-flex flex-column gap-3">
            {filtered.map((item) => (
              <div key={item.id} className="bg-white rounded-4 overflow-hidden" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
                <div className="d-flex gap-3 p-3 align-items-center">
                  <img src={item.image} alt={item.title} className="rounded-3" style={{ width: 90, height: 70, objectFit: "cover" }} />
                  <div className="flex-grow-1">
                    <div className="fw-bold">{item.title}</div>
                    <div className="text-muted">{item.type} | {item.location}</div>
                    <div className="text-muted">{item.date}</div>
                    <div className="fw-bold" style={{ color: "#FFC107" }}>{item.price}</div>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid #f0f0f0" }} />

                <div className="d-flex gap-2 p-3">
                  <button
                    className="btn flex-grow-1 fw-semibold rounded-pill"
                    style={{ backgroundColor: "#FFC107", border: "none" }}
                    onClick={() => handleApprove(item.id)}
                  >
                    Onayla
                  </button>

                  <button
                    className="btn flex-grow-1 fw-semibold rounded-pill"
                    style={{ backgroundColor: "#FFF0F0", border: "none", color: "#dc3545" }}
                    onClick={() => handleReject(item.id)}
                  >
                    Reddet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default İ_lan_onay_listesi_admin;