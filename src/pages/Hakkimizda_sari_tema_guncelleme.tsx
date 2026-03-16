import { useState } from "react";
import { ShieldCheck, Star, Lightbulb, CheckCircle, MapPin, Mail, Home, Tag, MessageSquare, User, Menu } from "lucide-react";

const degerler = [
  { icon: <ShieldCheck size={28} color="#F5C842" />, title: "Güven", desc: "Şeffaf süreçler ve doğrulanmış ilanlar." },
  { icon: <Star size={28} color="#F5C842" />, title: "Kalite", desc: "Sadece en seçkin portföylere odaklanıyoruz." },
  { icon: <Lightbulb size={28} color="#F5C842" />, title: "İnovasyon", desc: "En son teknolojiyle kolay kullanım." },
];

const nedenBiz = [
  { title: "Uzmanlık Alanı", desc: "Sadece gayrimenkul ve vasıta kategorilerinde derinlemesine uzmanlaşmış bir ekip." },
  { title: "Hızlı İşlem", desc: "İleri düzey filtreleme ve akıllı eşleştirme algoritmaları ile zaman kazanıyoruz." },
  { title: "Geniş Ağ", desc: "Türkiye genelinde yayılmış geniş portföy ve güvenilir satıcı ağı." },
];

const Hakkimizda_sari_tema_guncelleme=()=> {
  const [activeNav, setActiveNav] = useState("Profil");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        body { background-color: #f5f5ee; }
        .page-wrapper { max-width: 430px; min-height: 100vh; background-color: #f5f5ee; }

        /* NAV */
        .top-nav { background: #fff; padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #eee; position: sticky; top: 0; z-index: 50; }
        .logo-box { width: 36px; height: 36px; background: #F5C842; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .brand-name { font-size: 16px; font-weight: 700; color: #1a1a1a; }

        /* HERO */
        .hero-wrap { position: relative; height: 200px; overflow: hidden; }
        .hero-img { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 100%); }
        .hero-text { position: absolute; bottom: 20px; left: 20px; }

        /* DEĞERLER */
        .deger-card { background: #fff; border-radius: 12px; padding: 18px 12px; text-align: center; border: 1px solid #ece9de; }

        /* NEDEN BİZ */
        .neden-card { background: #F5C842; border-radius: 16px; padding: 22px; }

        /* İLETİŞİM */
        .iletisim-row { background: #fff; border-radius: 12px; padding: 16px 18px; border: 1px solid #ece9de; display: flex; align-items: center; gap: 14px; }

        /* NAV BOTTOM */
        .nav-icon-wrap { color: #bbb; }
        .nav-icon-wrap.active { color: #F5C842; }
      `}</style>

      <div className="page-wrapper mx-auto d-flex flex-column">

        {/* TOP NAV */}
        <div className="top-nav">
          <div className="d-flex align-items-center gap-2">
            <div className="logo-box">🏷️</div>
            <span className="brand-name">Asım Boray Sulakcı</span>
          </div>
          <button className="btn btn-link p-0 text-dark text-decoration-none" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={22} color="#F5C842" />
          </button>
        </div>

        {/* SCROLL AREA */}
        <div className="flex-grow-1 overflow-auto" style={{ paddingBottom: 80 }}>

          {/* HERO */}
          <div className="hero-wrap">
            <img
              className="hero-img"
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop"
              alt="hero"
            />
            <div className="hero-overlay" />
            <div className="hero-text">
              <h4 className="fw-bold text-white mb-1" style={{ fontSize: 22 }}>Geleceğin Pazar Yeri</h4>
              <p className="text-white mb-0" style={{ fontSize: 12, opacity: 0.85 }}>Gayrimenkul ve Vasıta Yatırımlarınızın Adresi</p>
            </div>
          </div>

          {/* BİZ KİMİZ */}
          <div className="px-3 pt-4 pb-2">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span style={{ color: "#F5C842", fontSize: 16 }}>ℹ</span>
              <span className="fw-bold text-dark" style={{ fontSize: 17 }}>Biz Kimiz?</span>
            </div>
            <p className="text-secondary mb-0" style={{ fontSize: 13, lineHeight: 1.7 }}>
              Asım Boray Sulakcı olarak, gayrimenkul ve vasıta sektöründe yenilikçi bir pazar yeri deneyimi sunuyoruz. Vizyonumuz, güven ve teknolojiyi birleştirerek hayalinizdeki yatırım ve yaşam alanlarına en hızlı, en şeffaf şekilde ulaşmanızı sağlamaktır. Kullanıcı odaklı yaklaşımımızla sektördeki standartları yeniden belirliyoruz.
            </p>
          </div>

          {/* DEĞERLER */}
          <div className="px-3 pt-4 pb-2">
            <div className="d-flex align-items-center mb-3">
              <div style={{ width: 4, height: 20, background: "#F5C842", borderRadius: 2, marginRight: 10 }} />
              <span className="fw-bold text-dark" style={{ fontSize: 17 }}>Değerlerimiz</span>
            </div>
            <div className="row g-2">
              {degerler.map((d, i) => (
                <div key={i} className="col-4">
                  <div className="deger-card h-100">
                    <div className="d-flex justify-content-center mb-2">{d.icon}</div>
                    <div className="fw-bold text-dark mb-1" style={{ fontSize: 13 }}>{d.title}</div>
                    <p className="text-secondary mb-0" style={{ fontSize: 11, lineHeight: 1.4 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NEDEN BİZ */}
          <div className="px-3 pt-4 pb-2">
            <div className="neden-card">
              <h6 className="fw-bold text-dark mb-3" style={{ fontSize: 18 }}>Neden Biz?</h6>
              <div className="d-flex flex-column gap-3">
                {nedenBiz.map((n, i) => (
                  <div key={i} className="d-flex align-items-start gap-3">
                    <CheckCircle size={18} color="#2a1a00" className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="fw-bold text-dark" style={{ fontSize: 13 }}>{n.title}</div>
                      <p className="mb-0" style={{ fontSize: 12, color: "#5a3a00", lineHeight: 1.5 }}>{n.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BİZE ULAŞIN */}
          <div className="px-3 pt-4 pb-2">
            <div className="text-center mb-4">
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: 17 }}>Bize Ulaşın</h6>
              <p className="text-secondary mb-0" style={{ fontSize: 13 }}>Her türlü sorunuz için buradayız</p>
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="iletisim-row">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: 40, height: 40, background: "#fff9e0", border: "1px solid #ffe680" }}
                >
                  <MapPin size={18} color="#F5C842" />
                </div>
                <div>
                  <div className="fw-bold text-uppercase" style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.8px" }}>Adres</div>
                  <div className="fw-semibold text-dark" style={{ fontSize: 13 }}>Büyükdere Cad. No:193 Levent, İstanbul</div>
                </div>
              </div>

              <div className="iletisim-row">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: 40, height: 40, background: "#fff9e0", border: "1px solid #ffe680" }}
                >
                  <Mail size={18} color="#F5C842" />
                </div>
                <div>
                  <div className="fw-bold text-uppercase" style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.8px" }}>E-Posta</div>
                  <div className="fw-semibold text-dark" style={{ fontSize: 13 }}>iletisim@asimboray.com</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM NAV */}
        <nav
          className="bg-white border-top d-flex align-items-center justify-content-around position-fixed bottom-0"
          style={{ maxWidth: 430, width: "100%", left: "50%", transform: "translateX(-50%)", zIndex: 100, paddingTop: 8, paddingBottom: 14 }}
        >
          {[
            { label: "Anasayfa", icon: <Home size={22} /> },
            { label: "İlanlar",  icon: <Tag size={22} /> },
            { label: "Mesajlar", icon: <MessageSquare size={22} /> },
            { label: "Profil",   icon: <User size={22} /> },
          ].map((tab) => (
            <button
              key={tab.label}
              className="btn border-0 bg-transparent d-flex flex-column align-items-center gap-1 p-0 flex-fill"
              onClick={() => setActiveNav(tab.label)}
            >
              <span className={`nav-icon-wrap ${activeNav === tab.label ? "active" : ""}`}>{tab.icon}</span>
              <span
                className="fw-semibold text-uppercase"
                style={{ fontSize: 9, color: activeNav === tab.label ? "#F5C842" : "#aaa", letterSpacing: "0.3px" }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </nav>

      </div>
    </>
  );
}
export default Hakkimizda_sari_tema_guncelleme