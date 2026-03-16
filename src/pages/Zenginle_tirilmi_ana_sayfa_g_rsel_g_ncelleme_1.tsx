import { useState } from "react";

const categories = [
  { icon: "🏠", label: "Satılık Konut" },
  { icon: "🔑", label: "Kiralık Konut" },
  { icon: "🏗️", label: "Projeler" },
  { icon: "🏔️", label: "Arsa" },
  { icon: "🏪", label: "Ticari" },
  { icon: "🚗", label: "İkinci El Araç" },
  { icon: "🚘", label: "Sıfır Araç" },
  { icon: "🚧", label: "Hasarlı Araçlar" },
  { icon: "🏍️", label: "Motosiklet" },
];

const newProjects = [
  {
    id: 1,
    title: "Skyline Residences",
    location: "İstanbul, Sarıyer",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    big: true,
  },
  {
    id: 2,
    title: "Green Valley",
    location: "Muğla, Bodrum",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80",
    big: false,
  },
];

const urgentListings = [
  {
    id: 1,
    title: "Full Eşyalı 1+1 Daire",
    price: "1.950.000 TL",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80",
  },
  {
    id: 2,
    title: "BMW 520i Hatasız",
    price: "3.450.000 TL",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80",
  },
];

const dailyListings = [
  {
    id: 1,
    title: "Modern Rezidans Dairesi 2+1",
    location: "Ankara, Çankaya",
    price: "4.250.000 TL",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=120&q=80",
  },
  {
    id: 2,
    title: "BMW 3 Serisi 320i M Sport",
    location: "İstanbul, Beşiktaş",
    price: "2.850.000 TL",
    img: "https://images.unsplash.com/photo-1617531653332-bd46c16f4d68?w=120&q=80",
  },
];

const Zenginle_tirilmi_ana_sayfa_g_rsel_g_ncelleme_1=()=> {
  const [activeTab, setActiveTab] = useState("home");
  const [searchVal, setSearchVal] = useState("");

  return (
    <div
      style={{ maxWidth: 430, margin: "0 auto", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh", position: "relative", paddingBottom: 80 }}
    >
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between px-3 py-2" style={{ backgroundColor: "#FFC107" }}>
        <div className="d-flex align-items-center gap-2">
          <span style={{ fontSize: 22 }}>📋</span>
          <span className="fw-bold" style={{ fontSize: 16 }}>Asım Boray Sulakcı</span>
        </div>
        <div className="d-flex gap-3">
          <span style={{ fontSize: 20, cursor: "pointer" }}>🔔</span>
          <span style={{ fontSize: 20, cursor: "pointer" }}>☰</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-3 py-2" style={{ backgroundColor: "#FFC107" }}>
        <div className="input-group" style={{ borderRadius: 10, overflow: "hidden" }}>
          <span className="input-group-text bg-white border-0" style={{ borderRadius: "10px 0 0 10px" }}>
            <svg width="16" height="16" fill="#888" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </span>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Kelime, ilan no veya mağaza adı ile ara"
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            style={{ fontSize: 13, outline: "none", boxShadow: "none", borderRadius: "0 10px 10px 0" }}
          />
        </div>
      </div>

      {/* Category Grid */}
      <div className="bg-white px-2 pt-3 pb-2 mb-2">
        <div className="row g-2 mx-0">
          {categories.map((cat, i) => (
            <div key={i} className="col-4">
              <div
                className="d-flex flex-column align-items-center justify-content-center py-3 rounded-3"
                style={{ backgroundColor: "#f9f9f9", cursor: "pointer", border: "1px solid #eee", transition: "all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#FFF8E1"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#f9f9f9"}
              >
                <span style={{ fontSize: 26, color: "#FFC107" }}>{cat.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#333", marginTop: 4, textAlign: "center", lineHeight: 1.2 }}>{cat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yeni Projeler */}
      <div className="bg-white px-3 pt-3 pb-3 mb-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-bold" style={{ fontSize: 16 }}>Yeni Projeler</span>
          <span style={{ fontSize: 12, color: "#FFC107", fontWeight: 600, cursor: "pointer" }}>Tümünü Gör</span>
        </div>
        <div className="row g-2">
          {newProjects.map(proj => (
            <div key={proj.id} className={proj.big ? "col-7" : "col-5"}>
              <div
                className="rounded-3 overflow-hidden position-relative"
                style={{ height: 140, cursor: "pointer" }}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  className="position-absolute bottom-0 start-0 end-0 px-2 py-2"
                  style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}
                >
                  <div className="text-white fw-bold" style={{ fontSize: 12 }}>{proj.title}</div>
                  <div className="text-white" style={{ fontSize: 10, opacity: 0.85 }}>{proj.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Acil Acil */}
      <div className="bg-white px-3 pt-3 pb-3 mb-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center gap-2">
            <span style={{ color: "#FFC107", fontSize: 18 }}>⚡</span>
            <span className="fw-bold" style={{ fontSize: 16 }}>Acil Acil</span>
          </div>
          <span style={{ fontSize: 12, color: "#FFC107", fontWeight: 600, cursor: "pointer" }}>Tümünü Gör</span>
        </div>
        <div className="row g-2">
          {urgentListings.map(item => (
            <div key={item.id} className="col-6">
              <div className="rounded-3 overflow-hidden position-relative" style={{ cursor: "pointer", border: "1px solid #eee" }}>
                <div className="position-absolute top-0 start-0 z-1 px-2 py-1 text-white fw-bold" style={{ backgroundColor: "#e53935", fontSize: 10, borderRadius: "8px 0 8px 0" }}>
                  ACİL
                </div>
                <img src={item.img} alt={item.title} style={{ width: "100%", height: 110, objectFit: "cover" }} />
                <div className="p-2">
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#333" }}>{item.title}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#FFC107", marginTop: 2 }}>{item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Günün İlanları */}
      <div className="bg-white px-3 pt-3 pb-3 mb-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-bold" style={{ fontSize: 16 }}>Günün İlanları</span>
          <span style={{ fontSize: 12, color: "#FFC107", fontWeight: 600, cursor: "pointer" }}>Tümünü Gör</span>
        </div>
        <div className="d-flex flex-column gap-2">
          {dailyListings.map(item => (
            <div
              key={item.id}
              className="d-flex align-items-center gap-3 p-2 rounded-3"
              style={{ border: "1px solid #eee", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#fffde7"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "white"}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: 80, height: 65, objectFit: "cover", borderRadius: 8, flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#222" }}>{item.title}</div>
                <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{item.location}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#FFC107", marginTop: 4 }}>{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        className="position-fixed bottom-0 d-flex align-items-center justify-content-around bg-white border-top"
        style={{ width: "100%", maxWidth: 430, height: 60, left: "50%", transform: "translateX(-50%)", zIndex: 100 }}
      >
        {[
          { key: "home", icon: "🏠", label: "Ana Sayfa" },
          { key: "fav", icon: "🤍", label: "Favoriler" },
          { key: "add", icon: null, label: null },
          { key: "chat", icon: "💬", label: "Mesajlar" },
          { key: "profile", icon: "👤", label: "Profil" },
        ].map(tab => {
          if (!tab.icon) {
            return (
              <div
                key={tab.key}
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: 50, height: 50, backgroundColor: "#FFC107", cursor: "pointer", boxShadow: "0 2px 10px rgba(255,193,7,0.5)" }}
              >
                <span style={{ fontSize: 26, fontWeight: 300, color: "white", lineHeight: 1 }}>+</span>
              </div>
            );
          }
          return (
            <div
              key={tab.key}
              className="d-flex flex-column align-items-center"
              style={{ cursor: "pointer", opacity: activeTab === tab.key ? 1 : 0.5 }}
              onClick={() => setActiveTab(tab.key)}
            >
              <span style={{ fontSize: 20 }}>{tab.icon}</span>
              <span style={{ fontSize: 9, color: activeTab === tab.key ? "#FFC107" : "#888", marginTop: 1 }}>{tab.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Zenginle_tirilmi_ana_sayfa_g_rsel_g_ncelleme_1;