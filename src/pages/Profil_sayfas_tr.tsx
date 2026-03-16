import { useState } from "react";

const menuItems = [
  {
    id: 1,
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="3" rx="1.5" fill="currentColor" />
        <rect x="3" y="10" width="18" height="3" rx="1.5" fill="currentColor" />
        <rect x="3" y="16" width="18" height="3" rx="1.5" fill="currentColor" />
      </svg>
    ),
    label: "İlanlarım",
    badge: 12,
  },
  {
    id: 2,
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 13 5.08C14.09 3.81 15.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 14.5 12 21 12 21Z"
          fill="currentColor"
        />
      </svg>
    ),
    label: "Favorilerim",
    badge: null,
  },
  {
    id: 3,
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
          fill="currentColor"
        />
      </svg>
    ),
    label: "Mesajlarım",
    badge: null,
  },
  {
    id: 4,
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="2"
          fill="currentColor"
          opacity="0.2"
        />
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
        <circle cx="7" cy="15" r="1.5" fill="currentColor" />
      </svg>
    ),
    label: "Ödemelerim & Faturalarım",
    badge: null,
  },
  {
    id: 5,
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.3" />
        <circle
          cx="12"
          cy="8"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M4 20C4 17.24 7.58 15 12 15C16.42 15 20 17.24 20 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="19" cy="19" r="4" fill="#FFC107" />
        <path
          d="M19 17V19L20.5 20.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Hesap Ayarları",
    badge: null,
  },
];

const navItems = [
  {
    id: "anasayfa",
    label: "Anasayfa",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "kategoriler",
    label: "Kategoriler",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="3" width="8" height="8" rx="1.5" fill="currentColor" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" fill="currentColor" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" fill="currentColor" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "mesajlar",
    label: "Mesajlar",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "profil",
    label: "Profilim",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" fill="currentColor" />
        <path
          d="M4 20C4 17.24 7.58 15 12 15C16.42 15 20 17.24 20 20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
];

const ProfilSayfasi = () => {
  const [activeNav, setActiveNav] = useState("profil");
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F5F6FA",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Phone Frame */}
      <div
        style={{
          width: "100%",
          maxWidth: 430,
          minHeight: "100vh",
          backgroundColor: "#F5F6FA",
          position: "relative",
          paddingBottom: 80,
        }}
      >
        {/* Header */}
        <div
          className="d-flex align-items-center justify-content-between px-3 py-3"
          style={{ backgroundColor: "#fff", borderBottom: "1px solid #EFEFEF" }}
        >
          <button
            className="btn btn-link text-dark p-0"
            style={{ fontSize: 22 }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="#1A1A2E"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h6
            className="mb-0 fw-bold"
            style={{ fontSize: 17, color: "#1A1A2E" }}
          >
            Profilim
          </h6>
          <button className="btn btn-link text-dark p-0">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                stroke="#1A1A2E"
                strokeWidth="2"
              />
              <path
                d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.65 2.57 9.61 2.81L9.25 5.35C8.66 5.59 8.12 5.92 7.63 6.29L5.24 5.33C5.02 5.25 4.77 5.33 4.65 5.55L2.74 8.87C2.62 9.08 2.66 9.34 2.86 9.48L4.89 11.06C4.84 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.08 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94Z"
                stroke="#1A1A2E"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {/* Profile Info */}
        <div
          className="text-center pt-4 pb-3 px-3"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="position-relative d-inline-block mb-3">
            <div
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #FFC107",
                boxShadow: "0 4px 16px rgba(255,193,7,0.25)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  color: "white",
                  fontWeight: 700,
                }}
              >
                AB
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 2,
                right: 2,
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "#FFC107",
                border: "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="white"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <h5
            className="fw-bold mb-1"
            style={{ color: "#1A1A2E", fontSize: 20 }}
          >
            Asım Boray Sulakcı
          </h5>
          <p
            className="mb-1"
            style={{ color: "#FFC107", fontSize: 14, fontWeight: 600 }}
          >
            Bireysel Üye
          </p>
          <p className="text-muted mb-0" style={{ fontSize: 12 }}>
            Üyelik Tarihi: Ocak 2024
          </p>
        </div>

        {/* Mağaza Paneli Card */}
        <div className="mx-3 mt-3 mb-3">
          <div
            className="d-flex align-items-center justify-content-between p-3 rounded-3"
            style={{
              backgroundColor: "#FFFBEA",
              border: "1.5px solid #FFE68A",
            }}
          >
            <div>
              <p
                className="fw-bold mb-1"
                style={{ color: "#1A1A2E", fontSize: 15 }}
              >
                Mağaza Panelim
              </p>
              <p className="text-muted mb-0" style={{ fontSize: 13 }}>
                Satışlarını ve mağazanı buradan yönet
              </p>
            </div>
            <button
              className="btn fw-bold rounded-3 px-4"
              style={{
                backgroundColor: "#FFC107",
                color: "#1A1A2E",
                fontSize: 14,
                border: "none",
                boxShadow: "0 4px 12px rgba(255,193,7,0.4)",
                whiteSpace: "nowrap",
              }}
            >
              Yönet
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div
          className="mx-3 rounded-3 overflow-hidden"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          {menuItems.map((item, index) => (
            <div key={item.id}>
              <button
                className="btn w-100 d-flex align-items-center justify-content-between px-3 py-3"
                style={{
                  backgroundColor:
                    activeMenu === item.id ? "#FFFBEA" : "transparent",
                  border: "none",
                  borderRadius: 0,
                  transition: "background 0.18s",
                }}
                onClick={() =>
                  setActiveMenu(activeMenu === item.id ? null : item.id)
                }
              >
                <div className="d-flex align-items-center gap-3">
                  <span
                    style={{
                      color: activeMenu === item.id ? "#FFC107" : "#555",
                      width: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="fw-semibold"
                    style={{
                      fontSize: 15,
                      color: activeMenu === item.id ? "#1A1A2E" : "#333",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  {item.badge && (
                    <span
                      className="badge rounded-pill"
                      style={{
                        backgroundColor: "#FFC107",
                        color: "#1A1A2E",
                        fontSize: 12,
                        fontWeight: 700,
                        padding: "3px 9px",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    style={{
                      color: "#BBBBBB",
                      transform:
                        activeMenu === item.id ? "rotate(90deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              {index < menuItems.length - 1 && (
                <div
                  style={{
                    height: 1,
                    backgroundColor: "#F2F2F2",
                    marginLeft: 56,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div
          className="position-fixed bottom-0 d-flex align-items-center justify-content-around"
          style={{
            width: "100%",
            maxWidth: 430,
            height: 68,
            backgroundColor: "#fff",
            borderTop: "1px solid #EFEFEF",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.07)",
            zIndex: 100,
          }}
        >
          {navItems.map((nav) => {
            const isActive = activeNav === nav.id;
            const isCenter = nav.id === "ilanver";
            return (
              <button
                key={nav.id}
                className="btn p-0 d-flex flex-column align-items-center justify-content-center"
                style={{
                  flex: 1,
                  height: "100%",
                  border: "none",
                  backgroundColor: "transparent",
                  color: isActive ? "#FFC107" : "#AAAAAA",
                  gap: 2,
                  position: "relative",
                }}
                onClick={() => setActiveNav(nav.id)}
              >
                {nav.id === "ilanver" ? (
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      backgroundColor: "#FFC107",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 16px rgba(255,193,7,0.5)",
                      marginBottom: 4,
                    }}
                  >
                    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="white"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                ) : (
                  nav.icon
                )}
                <span
                  style={{ fontSize: 10, fontWeight: isActive ? 700 : 500 }}
                >
                  {nav.label}
                </span>
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 24,
                      height: 3,
                      borderRadius: 2,
                      backgroundColor: "#FFC107",
                    }}
                  />
                )}
              </button>
            );
          })}

          {/* İlan Ver button in center */}
          <button
            className="btn p-0 d-flex flex-column align-items-center justify-content-center"
            style={{
              flex: 1,
              height: "100%",
              border: "none",
              backgroundColor: "transparent",
              color: "#AAAAAA",
              gap: 2,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: "20%",
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor: "#FFC107",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(255,193,7,0.5)",
                marginTop: -20,
              }}
            >
              <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span style={{ fontSize: 10, fontWeight: 500, color: "#AAAAAA" }}>
              İlan Ver
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfilSayfasi;
