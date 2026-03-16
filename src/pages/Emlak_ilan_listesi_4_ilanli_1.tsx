import { useState } from "react";
import {
  ArrowLeft,
  Search,
  Heart,
  SlidersHorizontal,
  ArrowUpDown,
  Bed,
  Maximize2,
  Layers,
  Home,
  Plus,
  MessageSquare,
  User,
} from "lucide-react";

const ilanlar = [
  {
    id: 1,
    title: "Boğaz Manzaralı Lüks Villa",
    price: "12.500.000 TL",
    tags: ["SIFIR", "PREMIUM"],
    oda: "4+1",
    m2: "320 m²",
    kat: "Müstakil",
    konum: "Sarıyer, İstanbul",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=220&fit=crop",
  },
  {
    id: 2,
    title: "3+1 Geniş Aile Dairesi - Site İçi",
    price: "4.750.000 TL",
    tags: ["YENİ"],
    oda: "3+1",
    m2: "165 m²",
    kat: "6. Kat",
    konum: "Ataşehir, İstanbul",
    img: "https://images.unsplash.com/photo-1614625341598-4f5bf0e44b48?w=800&h=220&fit=crop",
  },
  {
    id: 3,
    title: "Merkezi Lokasyon 1+1 Eşyalı",
    price: "2.900.000 TL",
    tags: ["SIFIR"],
    oda: "1+1",
    m2: "68 m²",
    kat: "12. Kat",
    konum: "Şişli, Karagümrük",
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=220&fit=crop",
  },
  {
    id: 4,
    title: "4+1 Modern Dubleks Daire",
    price: "6.250.000 TL",
    tags: ["PAKET"],
    oda: "4+1",
    m2: "210 m²",
    kat: "Dubleks",
    konum: "Sarıyer, Maslak",
    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=220&fit=crop",
  },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  SIFIR: { bg: "#F5C842", color: "#2a2200" },
  PREMIUM: { bg: "#1a1a1a", color: "#fff" },
  YENİ: { bg: "#F5C842", color: "#2a2200" },
  PAKET: { bg: "#F5C842", color: "#2a2200" },
};

const Emlak_ilan_listesi_4_ilanli_1 = () => {
  const [activeTab, setActiveTab] = useState("İLANLAR");
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});
  const [activeNav, setActiveNav] = useState("İlan Ver");

  const toggleLike = (id: number) =>
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
      />

      <style>{`
        body { background-color: #f5f5ee; }
        .page-wrapper { max-width: 480px; min-height: 100vh; background-color: #f5f5f0; }
        .ilan-img { width: 100%; height: 200px; object-fit: cover; }
        .tag-badge { font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .ilan-card { background: #fff; cursor: pointer; }
        .ilan-card:hover { background: #fafaf7; }
        .tab-active { border-bottom: 2px solid #F5C842; color: #1a1a1a; font-weight: 700; }
        .tab-inactive { border-bottom: 2px solid transparent; color: #aaa; }
        .btn-sort { background: #fff; border: 1px solid #e5e3d8; border-radius: 8px; font-size: 13px; color: #444; }
        .btn-filter { background: #fff; border: 1px solid #e5e3d8; border-radius: 8px; font-size: 13px; color: #444; }
        .nav-icon-wrap { color: #bbb; }
        .nav-icon-wrap.active { color: #F5C842; }
        .nav-add-btn { width: 48px; height: 48px; background: #F5C842; border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; position: relative; top: -10px; box-shadow: 0 4px 14px rgba(245,200,66,0.45); }
      `}</style>

      <div className="page-wrapper mx-auto d-flex flex-column">

        {/* HEADER */}
        <div className="bg-dark px-3 py-3 d-flex align-items-center justify-content-between sticky-top">
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-link p-0 text-white text-decoration-none">
              <ArrowLeft size={20} />
            </button>
            <span className="fw-bold text-white" style={{ fontSize: 15 }}>
              Asım Boray Sulakcı
            </span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link p-0 text-white text-decoration-none">
              <Search size={20} />
            </button>
            <button className="btn btn-link p-0 text-decoration-none">
              <Heart size={20} color="#fff" />
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="bg-dark d-flex px-3 border-bottom border-secondary">
          {["İLANLAR", "FAVORT"].map((tab) => (
            <button
              key={tab}
              className={`btn btn-link text-decoration-none px-3 py-2 me-1 ${
                activeTab === tab
                  ? "tab-active text-white"
                  : "tab-inactive text-secondary"
              }`}
              style={{ fontSize: 12, fontWeight: 600 }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* SORT FILTER */}
        <div className="d-flex gap-2 px-3 py-2 bg-white border-bottom">
          <button className="btn btn-sort flex-fill d-flex align-items-center justify-content-center gap-2 py-2">
            <ArrowUpDown size={14} /> Sırala
          </button>

          <button className="btn btn-filter flex-fill d-flex align-items-center justify-content-center gap-2 py-2">
            <SlidersHorizontal size={14} /> Filtrele
          </button>
        </div>

        {/* ILAN LIST */}
        <div className="flex-grow-1 overflow-auto" style={{ paddingBottom: 90 }}>
          {ilanlar.map((ilan) => (
            <div key={ilan.id} className="ilan-card border-bottom">

              <div className="position-relative">
                <img className="ilan-img" src={ilan.img} alt={ilan.title} />

                <div className="position-absolute top-0 start-0 mt-2 ms-2 d-flex gap-1">
                  {ilan.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="tag-badge"
                      style={{
                        background: tagColors[tag]?.bg,
                        color: tagColors[tag]?.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="btn btn-link p-0 position-absolute top-0 end-0 mt-2 me-2 text-decoration-none"
                  onClick={() => toggleLike(ilan.id)}
                >
                  <Heart
                    size={20}
                    fill={liked[ilan.id] ? "#F5C842" : "none"}
                    color={liked[ilan.id] ? "#F5C842" : "#fff"}
                  />
                </button>
              </div>

              <div className="px-3 pt-2 pb-3">
                <div className="fw-semibold text-dark mb-1" style={{ fontSize: 14 }}>
                  {ilan.title}
                </div>

                <div className="fw-bold text-dark mb-2" style={{ fontSize: 16 }}>
                  {ilan.price}
                </div>

                <div className="d-flex align-items-center gap-3 text-muted mb-1" style={{ fontSize: 12 }}>
                  <span className="d-flex align-items-center gap-1">
                    <Bed size={13} /> {ilan.oda}
                  </span>

                  <span className="d-flex align-items-center gap-1">
                    <Maximize2 size={13} /> {ilan.m2}
                  </span>

                  <span className="d-flex align-items-center gap-1">
                    <Layers size={13} /> {ilan.kat}
                  </span>
                </div>

                <div className="text-muted d-flex align-items-center gap-1" style={{ fontSize: 12 }}>
                  📍 {ilan.konum}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM NAV */}
        <nav
          className="bg-white border-top d-flex align-items-center justify-content-around position-fixed bottom-0"
          style={{
            maxWidth: 480,
            width: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
            paddingTop: 8,
            paddingBottom: 12,
          }}
        >
          {[
            { label: "Anasayfa", icon: <Home size={22} /> },
            { label: "Vitrin", icon: <Layers size={22} /> },
            { label: "İlan Ver", icon: null, special: true },
            { label: "Mesajlar", icon: <MessageSquare size={22} /> },
            { label: "Hesabım", icon: <User size={22} /> },
          ].map((tab) =>
            tab.special ? (
              <button
                key={tab.label}
                className="nav-add-btn flex-shrink-0"
                onClick={() => setActiveNav(tab.label)}
              >
                <Plus size={26} color="#2a2200" strokeWidth={2.5} />
              </button>
            ) : (
              <button
                key={tab.label}
                className="btn border-0 bg-transparent d-flex flex-column align-items-center gap-1 p-0 flex-fill"
                onClick={() => setActiveNav(tab.label)}
              >
                <span
                  className={`nav-icon-wrap ${
                    activeNav === tab.label ? "active" : ""
                  }`}
                >
                  {tab.icon}
                </span>

                <span
                  style={{ fontSize: 11, fontWeight: 600 }}
                  className={
                    activeNav === tab.label
                      ? "text-warning"
                      : "text-secondary"
                  }
                >
                  {tab.label}
                </span>
              </button>
            )
          )}
        </nav>
      </div>
    </>
  );
};

export default Emlak_ilan_listesi_4_ilanli_1;