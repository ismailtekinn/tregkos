import { useState } from "react";

const MagazaPaneli=()=> {
  const [activeTab, setActiveTab] = useState("anasayfa");

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />

      <div
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{ backgroundColor: "#e9e9e9" }}
      >
        <div
          className="d-flex flex-column"
          style={{
            width: "390px",
            minHeight: "844px",
            backgroundColor: "#f5f5f0",
            borderRadius: "40px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            position: "relative",
          }}
        >
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center px-4 pt-4 pb-2">
            <button className="btn p-0 border-0 bg-transparent">
              <i className="bi bi-list fs-4 text-dark"></i>
            </button>
            <span className="fw-bold fs-5">Mağaza Paneli</span>
            <button className="btn p-0 border-0 bg-transparent position-relative">
              <i className="bi bi-bell fs-4 text-dark"></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style={{ backgroundColor: "#f5c518", fontSize: "7px" }}
              >
                &nbsp;
              </span>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-grow-1 overflow-auto px-3 pb-3" style={{ scrollbarWidth: "none" }}>

            {/* Profile Card */}
            <div className="bg-white rounded-4 p-3 mb-3 mt-2">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profil"
                  className="rounded-circle"
                  style={{ width: "62px", height: "62px", objectFit: "cover", border: "2px solid #f5c518" }}
                />
                <div>
                  <div className="fw-bold fs-6">Asım Boray Sulakcı</div>
                  <div className="d-flex align-items-center gap-1 text-muted small">
                    <i className="bi bi-patch-check-fill" style={{ color: "#f5c518" }}></i>
                    <span>Onaylı Mağaza Sahibi</span>
                  </div>
                  <span
                    className="badge mt-1 px-2 py-1"
                    style={{
                      backgroundColor: "#fff3cd",
                      color: "#856404",
                      fontWeight: "600",
                      fontSize: "11px",
                      borderRadius: "20px",
                    }}
                  >
                    Premium Üye
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="row g-3 mb-3">
              <div className="col-6">
                <div className="bg-white rounded-4 p-3">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <span className="text-muted small">Toplam Görüntülenme</span>
                    <i className="bi bi-eye text-muted small"></i>
                  </div>
                  <div className="fw-bold fs-4">12.4K</div>
                  <div className="small mt-1" style={{ color: "#28a745" }}>
                    <i className="bi bi-graph-up-arrow me-1"></i>+15%
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-white rounded-4 p-3">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <span className="text-muted small">Toplam Tıklama</span>
                    <i className="bi bi-cursor text-muted small"></i>
                  </div>
                  <div className="fw-bold fs-4">842</div>
                  <div className="small mt-1" style={{ color: "#28a745" }}>
                    <i className="bi bi-graph-up-arrow me-1"></i>+5%
                  </div>
                </div>
              </div>
            </div>

            {/* Hızlı İşlemler */}
            <div className="mb-3">
              <div className="fw-bold mb-2 px-1">Hızlı İşlemler</div>

              <button
                className="w-100 d-flex align-items-center justify-content-between rounded-4 px-4 py-3 border-0 mb-2 fw-semibold"
                style={{ backgroundColor: "#f5c518", color: "#1a1a1a" }}
              >
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-plus-circle-fill fs-5"></i>
                  <span>Yeni İlan Ekle</span>
                </div>
                <i className="bi bi-chevron-right"></i>
              </button>

              <button
                className="w-100 d-flex align-items-center justify-content-between rounded-4 px-4 py-3 border-0 fw-semibold bg-white"
                style={{ color: "#1a1a1a" }}
              >
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-list-ul fs-5"></i>
                  <span>İlanlarımı Yönet</span>
                </div>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>

            {/* Platinum Upgrade Card */}
            <div
              className="rounded-4 p-4 mb-3 position-relative overflow-hidden"
              style={{ backgroundColor: "#f5c518" }}
            >
              {/* Decorative circle */}
              <div
                className="position-absolute"
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  border: "20px solid rgba(255,255,255,0.25)",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <i
                  className="bi bi-star-fill position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "28px",
                    color: "rgba(255,255,255,0.5)",
                  }}
                ></i>
              </div>

              <div style={{ maxWidth: "60%" }}>
                <div className="fw-bold fs-5 mb-1">Platinum'a Yükselt</div>
                <div className="small mb-3" style={{ color: "#5a4200", lineHeight: "1.4" }}>
                  Gelişmiş analizlerin, 7/24 öncelikli desteğin ve sınırsız ilan vermenin keyfini çıkarın.
                </div>
                <button
                  className="btn btn-dark rounded-pill px-4 py-2 fw-semibold d-flex align-items-center gap-2"
                  style={{ fontSize: "14px" }}
                >
                  Hemen Yükselt <i className="bi bi-rocket-takeoff-fill"></i>
                </button>
              </div>
            </div>

            {/* Abonelik */}
            <div className="bg-white rounded-4 p-3 mb-2">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="fw-bold">Aboneliğiniz</span>
                <span className="small fw-semibold" style={{ color: "#f5c518" }}>
                  Planı Değiştir
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <div className="text-muted small mb-1">CURRENT PLAN</div>
                  <div className="fw-bold" style={{ color: "#f5c518" }}>
                    Yıllık Premium
                  </div>
                </div>
                <div className="text-end">
                  <div className="text-muted small mb-1">NEXT BILL</div>
                  <div className="fw-bold">12 Eyl 2024</div>
                </div>
              </div>
              <hr className="my-2" />
              <div className="d-flex justify-content-between align-items-center">
                <span className="small text-muted">$199/yıl üzerinden otomatik yenilenir</span>
                <button className="btn p-0 border-0 bg-transparent text-muted">
                  <i className="bi bi-x-circle"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div
            className="d-flex justify-content-around align-items-center px-2 py-3"
            style={{
              backgroundColor: "#ffffff",
              borderTop: "1px solid #e8e8e8",
              borderRadius: "0 0 40px 40px",
            }}
          >
            {[
              { id: "anasayfa", icon: "bi-grid-fill", label: "ANA SAYFA" },
              { id: "ilanlarim", icon: "bi-bookmark-fill", label: "İLANLARIM" },
              { id: "istatistikler", icon: "bi-bar-chart-fill", label: "İSTATİSTİKLER" },
              { id: "ayarlar", icon: "bi-gear-fill", label: "AYARLAR" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="btn p-0 border-0 bg-transparent d-flex flex-column align-items-center gap-1"
                style={{
                  color: activeTab === tab.id ? "#f5c518" : "#9e9e9e",
                  minWidth: "60px",
                }}
              >
                <i className={`bi ${tab.icon} fs-5`}></i>
                <span style={{ fontSize: "9px", fontWeight: "700", letterSpacing: "0.3px" }}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default MagazaPaneli;