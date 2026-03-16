import { useState } from "react";
import { ArrowLeft, Heart, MapPin, Home, Search, Plus, Bookmark, User } from "lucide-react";

const emlakIlanlar = [
  {
    id: 1,
    title: "Boğaz Manzaralı 4+1 Dubleks",
    price: "₺14.500.000",
    konum: "Beşiktaş, İstanbul",
    tag: "Acil Satılık",
    tagColor: "#e74c3c",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=280&fit=crop",
  },
  {
    id: 2,
    title: "Deniz Sıfır Modern Yazlık",
    price: "₺8.750.000",
    konum: "Bodrum, Muğla",
    tag: "Yeni İlan",
    tagColor: "#F5C842",
    tagTextColor: "#2a2200",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=280&fit=crop",
  },
];

const vasitaIlanlar = [
  {
    id: 3,
    title: "2023 Model Hasarsız Boyasız Elektrikli",
    price: "₺2.250.000",
    konum: "Çankaya, Ankara",
    tag: "12.000 KM",
    tagColor: "#888",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=280&fit=crop",
  },
];

const Favori_ilanlarim=()=> {
  const [activeTab, setActiveTab] = useState("Emlak");
  const [activeNav, setActiveNav] = useState("Favoriler");

  const ilanlar = activeTab === "Emlak" ? emlakIlanlar : vasitaIlanlar;

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        body { background-color: #f5f5ee; }
        .page-wrapper { max-width: 430px; min-height: 100vh; background-color: #f5f5ee; }
        .ilan-img { width: 100%; height: 190px; object-fit: cover; border-radius: 14px 14px 0 0; }
        .ilan-card { background: #fff; border-radius: 14px; overflow: hidden; }
        .tab-pill-active { background: #fff; color: #1a1a1a; font-weight: 700; border-radius: 20px; border: none; font-size: 14px; padding: 7px 28px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
        .tab-pill-inactive { background: transparent; color: #888; border: none; font-size: 14px; padding: 7px 28px; border-radius: 20px; font-weight: 500; }
        .tabs-bg { background: #e8e6dc; border-radius: 24px; padding: 4px; }
        .btn-incele { background: #F5C842; color: #2a2200; border: none; border-radius: 20px; font-size: 13px; font-weight: 700; padding: 6px 18px; }
        .btn-incele:hover { background: #e0b530; color: #2a2200; }
        .heart-btn { width: 36px; height: 36px; background: #fff; border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }
        .nav-add-btn { width: 50px; height: 50px; background: #F5C842; border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; position: relative; top: -10px; box-shadow: 0 4px 14px rgba(245,200,66,0.5); }
        .nav-icon-active { color: #F5C842; }
        .nav-icon-inactive { color: #bbb; }
      `}</style>

      <div className="page-wrapper mx-auto d-flex flex-column">

        {/* HEADER */}
        <div className="bg-white border-bottom px-3 py-3 d-flex align-items-center sticky-top">
          <button className="btn btn-link p-0 text-dark text-decoration-none me-3">
            <ArrowLeft size={20} />
          </button>
          <span className="fw-bold text-dark mx-auto pe-4" style={{ fontSize: 17 }}>Favorilerim</span>
        </div>

        {/* TABS */}
        <div className="px-3 pt-3 pb-2 d-flex justify-content-center">
          <div className="tabs-bg d-flex">
            {["Emlak", "Vasıta"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "tab-pill-active" : "tab-pill-inactive"}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ILAN LIST */}
        <div className="flex-grow-1 px-3 pt-2 d-flex flex-column gap-3" style={{ paddingBottom: 90 }}>
          {ilanlar.map((ilan) => (
            <div key={ilan.id} className="ilan-card">

              {/* Image */}
              <div className="position-relative">
                <img className="ilan-img" src={ilan.img} alt={ilan.title} />
                <button className="heart-btn position-absolute top-0 end-0 mt-2 me-2">
                  <Heart size={18} fill="#e74c3c" color="#e74c3c" />
                </button>
              </div>

              {/* Info */}
              <div className="p-3">
                <div className="fw-bold text-dark mb-1" style={{ fontSize: 18 }}>{ilan.price}</div>
                <div className="fw-semibold text-dark mb-1" style={{ fontSize: 14 }}>{ilan.title}</div>
                <div className="d-flex align-items-center gap-1 text-muted mb-3" style={{ fontSize: 12 }}>
                  <MapPin size={12} /> {ilan.konum}
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <span
                    className="px-3 py-1 rounded-pill fw-semibold"
                    style={{
                      fontSize: 12,
                      background: ilan.tagColor === "#F5C842" ? "#fff9e0" : ilan.tagColor === "#888" ? "#f0f0f0" : "#fde8e8",
                      color: ilan.tagColor === "#F5C842" ? "#a07c20" : ilan.tagColor === "#888" ? "#555" : "#c0392b",
                    }}
                  >
                    {ilan.tag}
                  </span>
                  <button className="btn-incele">İncele</button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM NAV */}
        <nav
          className="bg-white border-top d-flex align-items-center justify-content-around position-fixed bottom-0"
          style={{ maxWidth: 430, width: "100%", left: "50%", transform: "translateX(-50%)", zIndex: 100, paddingTop: 6, paddingBottom: 14 }}
        >
          {[
            { label: "Anasayfa", icon: <Home size={20} /> },
            { label: "Ara", icon: <Search size={20} /> },
            { label: "İlan Ver", special: true },
            { label: "Favoriler", icon: <Bookmark size={20} /> },
            { label: "Profilim", icon: <User size={20} /> },
          ].map((tab) =>
            tab.special ? (
              <button key="special" className="nav-add-btn flex-shrink-0" onClick={() => setActiveNav("İlan Ver")}>
                <Plus size={24} color="#2a2200" strokeWidth={2.5} />
              </button>
            ) : (
              <button
                key={tab.label}
                className="btn border-0 bg-transparent d-flex flex-column align-items-center gap-1 p-0 flex-fill"
                onClick={() => setActiveNav(tab.label)}
              >
                <span className={activeNav === tab.label ? "nav-icon-active" : "nav-icon-inactive"}>
                  {tab.icon}
                </span>
                <span
                  className="fw-semibold text-uppercase"
                  style={{ fontSize: 9, color: activeNav === tab.label ? "#F5C842" : "#aaa", letterSpacing: "0.3px" }}
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
}
export default Favori_ilanlarim