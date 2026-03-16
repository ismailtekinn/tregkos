import { useState } from "react";

const İ_lan_y_kleme_sayfas_1=()=> {
  const [kategori, setKategori] = useState("konut");
  const [yayinSuresi, setYayinSuresi] = useState("30");

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"
      />

      <div className="min-vh-100" style={{ backgroundColor: "#f5f5f0" }}>
        {/* Navbar */}
        <nav
          className="navbar navbar-light px-4 py-2 border-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: 32,
                height: 32,
                backgroundColor: "#f5c518",
              }}
            >
              <i className="bi bi-house-fill text-dark" style={{ fontSize: 14 }}></i>
            </div>
            <span style={{ fontSize: 15 }}>Asım Boray</span>
            <span
              className="badge ms-1"
              style={{ backgroundColor: "#f5c518", color: "#000", fontSize: 10 }}
            >
              Sulalım
            </span>
          </a>
          <div className="d-flex gap-3">
            <a href="#" className="text-dark text-decoration-none" style={{ fontSize: 14 }}>
              Yardım
            </a>
            <a href="#" className="fw-semibold text-decoration-none" style={{ fontSize: 14, color: "#f5c518" }}>
              Vasıgeç
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container py-4" style={{ maxWidth: 600 }}>
          <h4 className="fw-bold mb-1">Yeni İlan Oluştur</h4>
          <p className="text-muted mb-4" style={{ fontSize: 13 }}>
            Gayrimenkul veya vasıta ilanınızı detaylandırarak hızlıca yayınlayın.
          </p>

          {/* Kategori Seçimi */}
          <div className="card border-0 shadow-sm rounded-3 mb-3 p-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-tag-fill" style={{ color: "#f5c518" }}></i>
              <span className="fw-semibold" style={{ fontSize: 14 }}>
                Kategori Seçimi
              </span>
            </div>
            <div className="row g-2">
              <div className="col-6">
                <div
                  className={`rounded-2 p-3 d-flex align-items-center gap-2 border cursor-pointer ${
                    kategori === "konut"
                      ? "border-warning"
                      : "border-light bg-light"
                  }`}
                  style={{
                    cursor: "pointer",
                    backgroundColor: kategori === "konut" ? "#fffbea" : "",
                  }}
                  onClick={() => setKategori("konut")}
                >
                  <i
                    className="bi bi-house-fill"
                    style={{
                      color: "#f5c518",
                      fontSize: 18,
                    }}
                  ></i>
                  <div>
                    <div className="fw-semibold" style={{ fontSize: 13 }}>
                      Konut
                    </div>
                    <div className="text-muted" style={{ fontSize: 11 }}>
                      Daire, Villa, Müstakil Ev...
                    </div>
                  </div>
                  {kategori === "konut" && (
                    <i className="bi bi-star-fill ms-auto" style={{ color: "#f5c518", fontSize: 12 }}></i>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div
                  className={`rounded-2 p-3 d-flex align-items-center gap-2 border cursor-pointer ${
                    kategori === "vasita" ? "border-warning" : "border-light bg-light"
                  }`}
                  style={{
                    cursor: "pointer",
                    backgroundColor: kategori === "vasita" ? "#fffbea" : "",
                  }}
                  onClick={() => setKategori("vasita")}
                >
                  <i
                    className="bi bi-car-front-fill"
                    style={{ color: "#aaa", fontSize: 18 }}
                  ></i>
                  <div>
                    <div className="fw-semibold" style={{ fontSize: 13 }}>
                      Vasıta
                    </div>
                    <div className="text-muted" style={{ fontSize: 11 }}>
                      Otomobil, Motosiklet, Arazi...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fotoğraf & Video */}
          <div className="card border-0 shadow-sm rounded-3 mb-3 p-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-folder-fill" style={{ color: "#f5c518" }}></i>
              <span className="fw-semibold" style={{ fontSize: 14 }}>
                Fotoğraf &amp; Video
              </span>
            </div>
            <div className="d-flex gap-2">
              {/* Upload Button */}
              <div
                className="rounded-2 d-flex flex-column align-items-center justify-content-center border border-dashed"
                style={{
                  width: 90,
                  height: 80,
                  cursor: "pointer",
                  borderColor: "#f5c518",
                  backgroundColor: "#fffbea",
                  border: "2px dashed #f5c518",
                }}
              >
                <i className="bi bi-image-fill" style={{ color: "#f5c518", fontSize: 20 }}></i>
                <span style={{ fontSize: 10, color: "#f5c518", marginTop: 4 }}>
                  Görsel Ekle
                </span>
              </div>
              {/* Placeholder slots */}
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-2 d-flex align-items-center justify-content-center bg-light border"
                  style={{ width: 90, height: 80, borderColor: "#e0e0e0" }}
                >
                  <i className="bi bi-image text-muted" style={{ fontSize: 20 }}></i>
                </div>
              ))}
            </div>
            <p className="text-muted mt-2 mb-0" style={{ fontSize: 11 }}>
              * En fazla 15 fotoğraf ve 1 video ekleyebilirsiniz.
            </p>
          </div>

          {/* Temel Bilgiler */}
          <div className="card border-0 shadow-sm rounded-3 mb-3 p-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="rounded-circle"
                style={{ width: 10, height: 10, backgroundColor: "#f5c518" }}
              ></div>
              <span className="fw-semibold" style={{ fontSize: 14 }}>
                Temel Bilgiler
              </span>
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ fontSize: 13 }}>
                İlan Başlığı
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Örn: Modern Site İçerisinde 3+1 Ferah Daire"
                style={{ fontSize: 13 }}
              />
            </div>

            <div className="row g-2 mb-3">
              <div className="col-6">
                <label className="form-label" style={{ fontSize: 13 }}>
                  Fiyat (TL)
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  defaultValue="0"
                  style={{ fontSize: 13 }}
                />
              </div>
              <div className="col-6">
                <label className="form-label" style={{ fontSize: 13 }}>
                  Konum
                </label>
                <div className="input-group input-group-sm">
                  <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-geo-alt text-muted" style={{ fontSize: 12 }}></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="İl, İlçe, Mahalle"
                    style={{ fontSize: 13 }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-1">
              <label className="form-label" style={{ fontSize: 13 }}>
                Açıklama
              </label>
              <textarea
                className="form-control form-control-sm"
                rows={4}
                placeholder="İlanınız hakkında detaylı bilgi verin..."
                style={{ fontSize: 13, resize: "none" }}
              ></textarea>
            </div>
          </div>

          {/* Teknik Detaylar */}
          <div className="card border-0 shadow-sm rounded-3 mb-3 p-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-list-ul" style={{ color: "#f5c518" }}></i>
              <span className="fw-semibold" style={{ fontSize: 14 }}>
                Teknik Detaylar &amp; Özellikler
              </span>
            </div>

            {kategori === "konut" ? (
              <>
                <div className="row g-2 mb-2">
                  <div className="col-4">
                    <label className="form-label" style={{ fontSize: 12 }}>
                      m² (Brüt)
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      style={{ fontSize: 13 }}
                    />
                  </div>
                  <div className="col-4">
                    <label className="form-label" style={{ fontSize: 12 }}>
                      Oda Sayısı
                    </label>
                    <select className="form-select form-select-sm" style={{ fontSize: 13 }}>
                      <option>Seçiniz</option>
                      <option>1+0</option>
                      <option>1+1</option>
                      <option>2+1</option>
                      <option>3+1</option>
                      <option>4+1</option>
                      <option>5+1</option>
                    </select>
                  </div>
                  <div className="col-4">
                    <label className="form-label" style={{ fontSize: 12 }}>
                      Isıtma
                    </label>
                    <select className="form-select form-select-sm" style={{ fontSize: 13 }}>
                      <option>Doğalgaz (Kombi)</option>
                      <option>Merkezi</option>
                      <option>Klima</option>
                      <option>Elektrik</option>
                    </select>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row g-2 mb-2">
                  <div className="col-4">
                    <label className="form-label" style={{ fontSize: 12 }}>
                      Kilometre
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Sadece Vasıta İçin"
                      style={{ fontSize: 12 }}
                    />
                  </div>
                  <div className="col-4">
                    <label className="form-label" style={{ fontSize: 12 }}>
                      Yakıt Tipi
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Sadece Vasıta İçin"
                      style={{ fontSize: 12 }}
                    />
                  </div>
                  <div className="col-4">
                    <label className="form-label" style={{ fontSize: 12 }}>
                      Vites
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Sadece Vasıta İçin"
                      style={{ fontSize: 12 }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* İlan Süresi & Yayın Planı */}
          <div className="card border-0 shadow-sm rounded-3 mb-5 p-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-calendar-fill" style={{ color: "#f5c518" }}></i>
              <span className="fw-semibold" style={{ fontSize: 14 }}>
                İlan Süresi &amp; Yayın Planı
              </span>
            </div>
            <div className="row g-3">
              <div className="col-6">
                <label className="form-label" style={{ fontSize: 13 }}>
                  İlan Yayın Süresi
                </label>
                <div className="d-flex gap-2">
                  {["30", "60", "90"].map((gun) => (
                    <button
                      key={gun}
                      type="button"
                      className="btn btn-sm rounded-pill"
                      style={{
                        fontSize: 12,
                        padding: "4px 12px",
                        backgroundColor: yayinSuresi === gun ? "#f5c518" : "#e9e9e9",
                        color: yayinSuresi === gun ? "#000" : "#555",
                        border: "none",
                      }}
                      onClick={() => setYayinSuresi(gun)}
                    >
                      {gun} Gün
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-6">
                <label className="form-label" style={{ fontSize: 13 }}>
                  Yayın Tarihi Planlama
                </label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  style={{ fontSize: 13 }}
                />
                <p className="text-muted mt-1 mb-0" style={{ fontSize: 11 }}>
                  Boş bırakılırsa hemen yayınlanır.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="position-fixed bottom-0 start-0 end-0 bg-white border-top d-flex align-items-center justify-content-between px-4 py-2"
          style={{ zIndex: 100 }}
        >
          <div style={{ width: 120 }}>
            <div className="text-muted mb-1" style={{ fontSize: 10 }}>
              İlerliyoruz
            </div>
            <div
              className="rounded-pill"
              style={{ height: 4, backgroundColor: "#e9e9e9" }}
            >
              <div
                className="rounded-pill"
                style={{ width: "35%", height: "100%", backgroundColor: "#f5c518" }}
              ></div>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
              style={{ fontSize: 13 }}
            >
              <i className="bi bi-floppy"></i> Taslak Kaydet
            </button>
            <button
              type="button"
              className="btn btn-sm d-flex align-items-center gap-1"
              style={{
                backgroundColor: "#f5c518",
                color: "#000",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              Devam Et <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default İ_lan_y_kleme_sayfas_1