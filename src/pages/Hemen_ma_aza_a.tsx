import { useState } from "react";

const Hemen_ma_aza_a = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />

      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg sticky-top py-3"
        style={{ backgroundColor: "#fff", borderBottom: "1px solid #eee" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-5" href="#">
            <span
              className="d-flex align-items-center justify-content-center rounded"
              style={{ width: 32, height: 32, backgroundColor: "#FFC107", fontSize: 16 }}
            >
              🏠
            </span>
            Asım Boray Sulakcı
          </a>
          <button
            className="btn btn-warning fw-semibold px-4 rounded-pill ms-auto"
            style={{ backgroundColor: "#FFC107", border: "none", color: "#111" }}
          >
            Giriş Yap
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="position-relative d-flex align-items-center"
        style={{
          minHeight: 380,
          background:
            "linear-gradient(rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.45) 100%), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80') center/cover no-repeat",
        }}
      >
        <div className="container py-5">
          <span
            className="badge mb-3 px-3 py-2 text-uppercase fw-semibold"
            style={{
              backgroundColor: "#FFC107",
              color: "#111",
              letterSpacing: 1,
              fontSize: 11,
            }}
          >
            Kurumsal Çözümler
          </span>
          <h1
            className="text-white fw-bold mb-3"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              lineHeight: 1.15,
            }}
          >
            Hemen Mağaza Aç
          </h1>
          <p
            className="text-white mb-4 opacity-85"
            style={{ maxWidth: 440, fontSize: "1.05rem" }}
          >
            Emlak ofisiniz veya galeriniz için profesyonel çözümlerle işinizi
            dijitale taşıyın, milyonlarca potansiyel alıcıya ulaşarak
            satışlarınızı katlayın.
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <button
              className="btn fw-semibold px-4 py-2 rounded-pill"
              style={{
                backgroundColor: "#FFC107",
                color: "#111",
                border: "none",
                fontSize: "0.97rem",
              }}
            >
              Hemen Başla
            </button>
            <button
              className="btn fw-semibold px-4 py-2 rounded-pill"
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #fff",
                fontSize: "0.97rem",
              }}
            >
              Bilgi Al
            </button>
          </div>
        </div>
      </section>

      {/* AVANTAJLAR */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2" style={{ fontSize: "1.7rem" }}>
              Mağaza Açmanın Avantajları
            </h2>
            <div
              className="mx-auto"
              style={{
                width: 48,
                height: 3,
                backgroundColor: "#FFC107",
                borderRadius: 4,
              }}
            />
          </div>

          <div className="row g-4">
            {[
              {
                icon: "bi-eye",
                title: "Daha Fazla Görünürlük",
                desc: "İlanlarınız arama sonuçlarında en üst sıralarda yer alır, daha fazla ilgi çekecek şekilde.",
              },
              {
                icon: "bi-upload",
                title: "Toplu İlan Yükleme",
                desc: "CSV veya XML entegrasyonu ile yüzlerce ilanınızı saniyeler içinde mağazanıza ekleyin.",
              },
              {
                icon: "bi-grid",
                title: "Gelişmiş Panel",
                desc: "Kapsamlı istatistikler ve yönetim araçlarıyla portföyünüzün performansını takip edin.",
              },
              {
                icon: "bi-building",
                title: "Kurumsal Profil",
                desc: "Marka logonuz ve özel mağaza sayfasıyla müşterilerde güven verin.",
              },
            ].map((item, i) => (
              <div className="col-12 col-sm-6 col-lg-3" key={i}>
                <div
                  className="h-100 p-4 rounded-4"
                  style={{
                    border: "1.5px solid #f0f0f0",
                    transition: "box-shadow 0.2s",
                    boxShadow:
                      hoveredCard === `av${i}`
                        ? "0 8px 32px rgba(255,193,7,0.15)"
                        : "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={() => setHoveredCard(`av${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{
                      width: 44,
                      height: 44,
                      backgroundColor: "#FFF8E1",
                    }}
                  >
                    <i
                      className={`bi ${item.icon}`}
                      style={{ fontSize: 20, color: "#FFC107" }}
                    />
                  </div>

                  <h6 className="fw-bold mb-2">{item.title}</h6>

                  <p
                    className="text-muted small mb-0"
                    style={{ lineHeight: 1.6 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KURUMSAL PAKETLER */}
      <section className="py-5" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2" style={{ fontSize: "1.7rem" }}>
              Kurumsal Paketler
            </h2>
            <p className="text-muted" style={{ fontSize: "0.97rem" }}>
              İşinize en uygun paketi seçin, profesyonel dünyaya adım atın.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Emlak Ofisi */}
            <div className="col-12 col-md-6 col-lg-5">
              <div
                className="bg-white rounded-4 p-4 h-100"
                style={{
                  border: "1.5px solid #f0f0f0",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <h5 className="fw-bold mb-0">Emlak Ofisi</h5>
                  <i
                    className="bi bi-house-door"
                    style={{ fontSize: 22, color: "#FFC107" }}
                  />
                </div>

                <p className="text-muted small mb-4">
                  Emlak danışmanları için
                </p>

                <ul className="list-unstyled mb-4">
                  {[
                    "Sınırsız İlan Girişi",
                    "5 Danışman Hesabı",
                    "Bölgesel Öne Çıkarma",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-center gap-2 mb-2"
                    >
                      <i
                        className="bi bi-check-circle-fill"
                        style={{ color: "#FFC107", fontSize: 15 }}
                      />
                      <span style={{ fontSize: "0.95rem" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="btn w-100 fw-semibold py-2 rounded-pill"
                  style={{
                    backgroundColor: "#FFC107",
                    border: "none",
                    color: "#111",
                  }}
                >
                  Seç ve Başla
                </button>
              </div>
            </div>

            {/* Oto Galeri */}
            <div className="col-12 col-md-6 col-lg-5">
              <div
                className="bg-white rounded-4 p-4 h-100"
                style={{
                  border: "1.5px solid #f0f0f0",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <h5 className="fw-bold mb-0">Oto Galeri</h5>
                  <i
                    className="bi bi-car-front"
                    style={{ fontSize: 22, color: "#FFC107" }}
                  />
                </div>

                <p className="text-muted small mb-4">
                  Vasıta satıcıları için
                </p>

                <ul className="list-unstyled mb-4">
                  {[
                    "Detaylı Araç Künyesi",
                    "Ekspertiz Raporu Alanı",
                    "Toplu Fotoğraf Yükleme",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-center gap-2 mb-2"
                    >
                      <i
                        className="bi bi-check-circle-fill"
                        style={{ color: "#FFC107", fontSize: 15 }}
                      />
                      <span style={{ fontSize: "0.95rem" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="btn w-100 fw-semibold py-2 rounded-pill"
                  style={{
                    backgroundColor: "#FFC107",
                    border: "none",
                    color: "#111",
                  }}
                >
                  Seç ve Başla
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-3 text-center text-muted"
        style={{ backgroundColor: "#f8f8f8", fontSize: "0.85rem" }}
      >
        © {new Date().getFullYear()} Asım Boray Sulakcı — Tüm hakları saklıdır.
      </footer>
    </>
  );
};

export default Hemen_ma_aza_a;