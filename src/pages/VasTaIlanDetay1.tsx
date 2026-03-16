import { useState } from "react";

const VasTaIlanDetay1 = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Volkswagen_Golf_VII_Facelift_IMG_0792.jpg/1280px-Volkswagen_Golf_VII_Facelift_IMG_0792.jpg",
  ];

  const specs = [
    { label: "Marka", value: "Volkswagen" },
    { label: "Seri", value: "Golf" },
    { label: "Model", value: "1.5 eTSI Style" },
    { label: "Gövde Tipi", value: "Hatchback 5 Kapı" },
    { label: "Motor Gücü", value: "150 hp" },
    { label: "Çekiş", value: "Önden Çekiş" },
    { label: "Renk", value: "İnci Beyazı" },
    { label: "Kimden", value: "Sahibinden" },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* Top Nav */}
      <div className="bg-white border-bottom sticky-top">
        <div className="container-fluid px-3 py-2 d-flex align-items-center justify-content-between">
          <button className="btn btn-link text-dark p-0">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="fw-semibold" style={{ fontSize: "15px" }}>İlan Detayı</span>
          <div className="d-flex gap-3">
            <button className="btn btn-link text-dark p-0">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
            <button className="btn btn-link text-dark p-0">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="position-relative bg-white" style={{ height: "240px", overflow: "hidden" }}>
        <img
          src={images[0]}
          alt="Volkswagen Golf"
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <div
          className="position-absolute bottom-0 end-0 m-2 rounded px-2 py-1 text-white"
          style={{ background: "rgba(0,0,0,0.55)", fontSize: "12px" }}
        >
          1/12
        </div>
        {/* Dot indicators */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="rounded-circle"
              style={{
                width: "7px",
                height: "7px",
                background: i === activeImage ? "#fff" : "rgba(255,255,255,0.5)",
                display: "inline-block",
              }}
            />
          ))}
        </div>
      </div>

      {/* Title & Price */}
      <div className="bg-white px-3 pt-3 pb-2 border-bottom">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="fw-bold mb-1" style={{ fontSize: "16px", flex: 1 }}>
            Volkswagen Golf 1.5 eTSI Style 2022
          </h5>
          <div className="text-end ms-2">
            <span className="fw-bold" style={{ color: "#f5a623", fontSize: "18px", whiteSpace: "nowrap" }}>
              850.000 TL
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center text-muted" style={{ fontSize: "12px" }}>
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="me-1">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          İstanbul, Kadıköy, Caddebostan
          <span className="ms-3">İlan No: 1030274</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white px-3 py-2 border-bottom">
        <div className="row text-center g-0">
          {[
            { icon: "📅", label: "MODEL", value: "2022" },
            { icon: "📍", label: "KİLOMETRE", value: "45.000" },
            { icon: "⛽", label: "YAKIT", value: "Benzin" },
            { icon: "⚙️", label: "VİTES", value: "Otomatik" },
          ].map((item) => (
            <div className="col-3" key={item.label}>
              <div className="d-flex flex-column align-items-center py-1">
                <span style={{ fontSize: "18px" }}>{item.icon}</span>
                <span className="text-muted" style={{ fontSize: "10px" }}>{item.label}</span>
                <span className="fw-semibold" style={{ fontSize: "12px" }}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seller */}
      <div className="bg-white px-3 py-2 border-bottom mt-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
              style={{ width: "42px", height: "42px", background: "#e65c00", fontSize: "16px", flexShrink: 0 }}
            >
              A
            </div>
            <div>
              <div className="fw-semibold" style={{ fontSize: "14px" }}>Asım Boray Sulakcı</div>
              <div className="d-flex align-items-center gap-1">
                <span className="text-warning" style={{ fontSize: "13px" }}>★</span>
                <span className="fw-bold" style={{ fontSize: "13px" }}>4.9</span>
                <span className="text-muted" style={{ fontSize: "12px" }}>(128 Değerlendirme)</span>
              </div>
              <div className="text-muted" style={{ fontSize: "11px" }}>3 yıldır üye</div>
            </div>
          </div>
          <div
            className="rounded-circle d-flex align-items-center justify-content-center border"
            style={{ width: "36px", height: "36px" }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Technical Specs */}
      <div className="bg-white px-3 pt-3 pb-1 border-bottom mt-2">
        <h6 className="fw-bold mb-2" style={{ fontSize: "15px", borderLeft: "4px solid #f5a623", paddingLeft: "8px" }}>
          Teknik Özellikler
        </h6>
        <table className="table table-sm mb-0" style={{ fontSize: "13px" }}>
          <tbody>
            {specs.map((s, i) => (
              <tr key={i} className={i % 2 === 0 ? "table-light" : ""}>
                <td className="text-muted py-2" style={{ width: "45%" }}>{s.label}</td>
                <td className="fw-semibold py-2 text-end">{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Description */}
      <div className="bg-white px-3 pt-3 pb-3 border-bottom mt-2">
        <h6 className="fw-bold mb-2" style={{ fontSize: "15px", borderLeft: "4px solid #f5a623", paddingLeft: "8px" }}>
          Açıklama
        </h6>
        <p className="text-muted mb-0" style={{ fontSize: "13px", lineHeight: "1.6" }}>
          Aracım 2022 model olup yetkili servis bakımlıdır. İçerisinde sigara içilmemiş, döşemelerinde
          yanak yatık deformasyon yoktur.
        </p>
        <p className="text-muted mt-2 mb-0" style={{ fontSize: "13px", lineHeight: "1.6" }}>
          Style paketi ek olarak geri görüş kamerası ve panoramik cam tavan mevcuttur. Hasar, boya, tramer
          kaydı bulunmamaktadır. Alıcısına şimdiden hayırlı olsun.
        </p>
      </div>

      {/* Map / Location */}
      <div className="bg-white px-3 pt-3 pb-3 mt-2 mb-5">
        <h6 className="fw-bold mb-2" style={{ fontSize: "15px", borderLeft: "4px solid #f5a623", paddingLeft: "8px" }}>
          Konum
        </h6>
        <div
          className="rounded overflow-hidden position-relative"
          style={{ height: "160px", background: "#d1e7dd" }}
        >
          {/* Simple map placeholder */}
          <div
            className="w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              background: "linear-gradient(135deg, #c8dfc8 0%, #a8c8b8 50%, #8ab8a8 100%)",
            }}
          >
            {/* Grid lines simulating map */}
            <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, opacity: 0.3 }}>
              {[...Array(8)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 22} x2="100%" y2={i * 22} stroke="#666" strokeWidth="0.5" />
              ))}
              {[...Array(15)].map((_, i) => (
                <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="100%" stroke="#666" strokeWidth="0.5" />
              ))}
              {/* Roads */}
              <line x1="30%" y1="0" x2="60%" y2="100%" stroke="#aaa" strokeWidth="2.5" />
              <line x1="0" y1="55%" x2="100%" y2="45%" stroke="#aaa" strokeWidth="2.5" />
              <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#bbb" strokeWidth="1.5" />
              <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#bbb" strokeWidth="1.5" />
            </svg>
            {/* Pin */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#e65c00",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="position-absolute bottom-0 start-0 end-0 text-center text-muted py-1"
            style={{ fontSize: "11px", background: "rgba(255,255,255,0.75)" }}
          >
            Caddebostan Mah, Kadıköy, İstanbul
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div
        className="position-fixed bottom-0 start-0 end-0 bg-white border-top px-3 py-2 d-flex gap-2"
        style={{ zIndex: 100 }}
      >
        <button
          className="btn btn-outline-secondary flex-fill d-flex align-items-center justify-content-center gap-2"
          style={{ fontSize: "14px", fontWeight: "600", borderRadius: "10px", height: "48px" }}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Mesaj Gönder
        </button>
        <button
          className="btn flex-fill d-flex align-items-center justify-content-center gap-2 text-white"
          style={{
            fontSize: "14px",
            fontWeight: "600",
            borderRadius: "10px",
            height: "48px",
            background: "#f5a623",
            border: "none",
          }}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Hemen Ara
        </button>
      </div>
    </div>
  );
};

export default VasTaIlanDetay1;