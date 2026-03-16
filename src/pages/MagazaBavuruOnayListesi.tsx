import { useState } from "react";

const magazalar = [
  {
    id: 1,
    ad: "Mavi Emlak Ofisi",
    tarih: "12.10.2023",
    kategori: "EMLAK",
    gorsel: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    durum: "beklemede",
  },
  {
    id: 2,
    ad: "Aslan Otomotiv",
    tarih: "14.10.2023",
    kategori: "VASITA",
    gorsel: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    durum: "beklemede",
  },
  {
    id: 3,
    ad: "Zirve Gayrimenkul",
    tarih: "15.10.2023",
    kategori: "EMLAK",
    gorsel: "https://images.unsplash.com/photo-1497366754035-f200968a7db9?w=600&q=80",
    durum: "beklemede",
  },
];

const TAB_LIST = ["Tümü", "Emlak", "Vasıta"];

const MagazaBavuruOnayListesi = () => {
  const [aktifTab, setAktifTab] = useState("Tümü");

  const [durumlar, setDurumlar] = useState(
    Object.fromEntries(magazalar.map((m) => [m.id, "beklemede"]))
  );

  const handleDurum = (id: number, yeniDurum: string) => {
    setDurumlar((prev) => ({
      ...prev,
      [id]: yeniDurum,
    }));
  };

  const filtrelenmis = magazalar.filter((m) => {
    if (aktifTab === "Tümü") return true;
    if (aktifTab === "Emlak") return m.kategori === "EMLAK";
    if (aktifTab === "Vasıta") return m.kategori === "VASITA";
    return true;
  });

  const kategoriStyle: Record<string, { background: string; color: string }> = {
    EMLAK: { background: "#FFD600", color: "#1a1a1a" },
    VASITA: { background: "#1a1a1a", color: "#fff" },
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-start py-3"
      style={{ background: "#f5f4ef" }}
    >
      <div
        className="bg-white rounded-4 shadow-sm w-100 d-flex flex-column"
        style={{ maxWidth: 430, minHeight: "100vh" }}
      >
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom bg-white rounded-top-4">
          <button className="btn btn-link text-dark p-0 text-decoration-none fs-5">
            ←
          </button>

          <span className="fw-semibold fs-6">
            Mağaza Başvuru Onay Listesi
          </span>

          <button className="btn btn-link p-0" style={{ color: "#FFD600" }}>
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path
                d="M13.73 21a2 2 0 0 1-3.46 0"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="d-flex gap-0 px-3 pt-3 border-bottom">
          {TAB_LIST.map((tab) => (
            <button
              key={tab}
              type="button"
              className="btn btn-link text-decoration-none px-3 pb-2 fw-semibold"
              style={{
                fontSize: "0.9rem",
                color: aktifTab === tab ? "#1a1a1a" : "#999",
                borderBottom:
                  aktifTab === tab
                    ? "2.5px solid #FFD600"
                    : "2.5px solid transparent",
                borderRadius: 0,
              }}
              onClick={() => setAktifTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Kart Listesi */}
        <div className="px-3 py-3 d-flex flex-column gap-3 flex-grow-1">
          {filtrelenmis.map((m) => {
            const durum = durumlar[m.id];

            return (
              <div
                key={m.id}
                className="rounded-4 overflow-hidden shadow-sm bg-white border"
                style={{ borderColor: "#eee" }}
              >
                {/* Görsel */}
                <div style={{ position: "relative" }}>
                  <img
                    src={m.gorsel}
                    alt={m.ad}
                    className="w-100"
                    style={{
                      height: 180,
                      objectFit: "cover",
                      display: "block",
                    }}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const img = e.currentTarget;
                      img.style.background = "#e9ecef";
                      img.src = "";
                    }}
                  />

                  <span
                    className="rounded-2 fw-bold px-2 py-1"
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      fontSize: "0.68rem",
                      letterSpacing: "0.06em",
                      ...kategoriStyle[m.kategori],
                    }}
                  >
                    {m.kategori}
                  </span>
                </div>

                {/* Bilgi */}
                <div className="px-3 pt-2 pb-1 d-flex align-items-start justify-content-between">
                  <div>
                    <div
                      className="fw-bold text-dark"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {m.ad}
                    </div>

                    <div
                      className="text-muted"
                      style={{ fontSize: "0.78rem" }}
                    >
                      Başvuru: {m.tarih}
                    </div>
                  </div>

                  <button className="btn btn-link p-0 text-muted">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        d="M12 16v-4M12 8h.01"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Butonlar / Durum */}
                <div className="px-3 pb-3 pt-1">
                  {durum === "beklemede" && (
                    <div className="d-flex gap-2">
                      <button
                        className="btn flex-fill rounded-pill fw-semibold py-2 text-dark d-flex align-items-center justify-content-center gap-1"
                        style={{
                          background: "#FFD600",
                          fontSize: "0.85rem",
                        }}
                        onClick={() =>
                          handleDurum(m.id, "onaylandi")
                        }
                      >
                        Onayla
                      </button>

                      <button
                        className="btn flex-fill rounded-pill fw-semibold py-2 d-flex align-items-center justify-content-center gap-1"
                        style={{
                          background: "#fff0f0",
                          color: "#e53935",
                          border: "1px solid #ffd5d5",
                          fontSize: "0.85rem",
                        }}
                        onClick={() =>
                          handleDurum(m.id, "reddedildi")
                        }
                      >
                        Reddet
                      </button>
                    </div>
                  )}

                  {durum === "onaylandi" && (
                    <div
                      className="rounded-pill text-center py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
                      style={{
                        background: "#e8f5e9",
                        color: "#2e7d32",
                        fontSize: "0.85rem",
                      }}
                    >
                      Onaylandı
                    </div>
                  )}

                  {durum === "reddedildi" && (
                    <div
                      className="rounded-pill text-center py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
                      style={{
                        background: "#fff0f0",
                        color: "#e53935",
                        fontSize: "0.85rem",
                      }}
                    >
                      Reddedildi
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {filtrelenmis.length === 0 && (
            <div
              className="text-center text-muted py-5"
              style={{ fontSize: "0.9rem" }}
            >
              Bu kategoride başvuru bulunamadı.
            </div>
          )}
        </div>

        {/* Bottom Nav */}
        <div className="border-top bg-white rounded-bottom-4 px-2 py-2 d-flex justify-content-around align-items-center mt-auto">
          {[
            {
              label: "Panel",
              aktif: false,
              ikon: (
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              ),
            },
            {
              label: "Başvurular",
              aktif: true,
              ikon: (
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                    strokeLinecap="round"
                  />
                </svg>
              ),
            },
            {
              label: "Mesajlar",
              aktif: false,
              ikon: (
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              label: "Profil",
              aktif: false,
              ikon: (
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
                </svg>
              ),
            },
          ].map((item) => (
            <button
              key={item.label}
              className="btn btn-link p-0 d-flex flex-column align-items-center gap-1 text-decoration-none"
              style={{ color: item.aktif ? "#FFD600" : "#aaa", minWidth: 56 }}
            >
              {item.ikon}
              <span style={{ fontSize: "0.68rem", fontWeight: item.aktif ? 700 : 400 }}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagazaBavuruOnayListesi;