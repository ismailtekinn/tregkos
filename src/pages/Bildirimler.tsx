import { useState } from "react";
import {
  ArrowLeft, CheckCheck, MessageSquare, CheckCircle,
  Tag, ShieldCheck, Heart, Home, Search, Bell, User, Plus
} from "lucide-react";

const notifications = {
  BUGÜN: [
    {
      id: 1,
      icon: <CheckCircle size={22} color="#F5C842" />,
      title: "İlanınız onaylandı",
      desc: "'iPhone 13 Pro Max' ilanınız kontrol edildi ve yayına alındı. Artık teklif alabilirsiniz.",
      time: "2 dk önce",
      unread: false,
    },
    {
      id: 2,
      icon: <MessageSquare size={22} color="#F5C842" />,
      title: "Yeni mesajınız var",
      desc: "Bir kullanıcı 'PlayStation 5' ilanınız için size soru sordu: \"Son fiyat ne olur?\"",
      time: "15 dk önce",
      unread: true,
    },
  ],
  DÜN: [
    {
      id: 3,
      icon: <Tag size={22} color="#F5C842" />,
      title: "Fiyatı düştü!",
      desc: "Favorilerinize eklediğiniz 'MacBook Air M2' ürününde %12 indirim yapıldı.",
      time: "1 g önce",
      unread: false,
    },
    {
      id: 4,
      icon: <ShieldCheck size={22} color="#F5C842" />,
      title: "Güvenlik İpucu",
      desc: "Alışverişlerinizde her zaman uygulama içindeki güvenli ödeme sistemini kullanın.",
      time: "1 g önce",
      unread: false,
    },
    {
      id: 5,
      icon: <Heart size={22} color="#F5C842" />,
      title: "Sizin için yeni öneriler",
      desc: "İlgilendiğiniz kategorilerde 15 yeni ürün listelendi. Hemen göz atın.",
      time: "2 g önce",
      unread: false,
    },
  ],
};

const tabs = [
  { key: "ANA SAYFA",   icon: <Home size={20} />,  label: "Ana Sayfa"   },
  { key: "ARAMA",       icon: <Search size={20} />, label: "Arama"       },
  { key: "İLAN VER",    icon: <Plus size={26} strokeWidth={2.5} color="#fff" />, label: "İlan Ver", special: true },
  { key: "BİLDİRİMLER", icon: <Bell size={20} />,  label: "Bildirimler" },
  { key: "HESABIM",     icon: <User size={20} />,  label: "Hesabım"     },
];

export default function Bildirimler() {
  const [activeTab, setActiveTab] = useState("BİLDİRİMLER");

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        body { background: #f5f5f0; }
        .page-wrapper { max-width: 430px; min-height: 100vh; }
        .notif-item:hover { background-color: #fffef5 !important; }
        .nav-tab-special {
          position: relative;
          top: -14px;
          box-shadow: 0 4px 16px rgba(245,200,66,0.5);
        }
        .nav-icon-wrap { color: #bbb; transition: color 0.15s; }
        .nav-icon-wrap.active { color: #F5C842; }
      `}</style>

      <div className="page-wrapper mx-auto bg-light d-flex flex-column">

        {/* ── HEADER ── */}
        <div className="bg-white border-bottom px-3 py-3 d-flex align-items-center justify-content-between sticky-top">
          <button className="btn btn-link p-0 text-dark text-decoration-none lh-1">
            <ArrowLeft size={22} />
          </button>
          <span className="fw-bold fs-5 text-dark">Bildirimler</span>
          <button className="btn btn-link p-0 text-secondary text-decoration-none lh-1">
            <CheckCheck size={22} />
          </button>
        </div>

        {/* ── CONTENT ── */}
        <div className="flex-grow-1" style={{ paddingBottom: 90 }}>
          {Object.entries(notifications).map(([group, items]) => (
            <div key={group}>

              {/* Group Label */}
              <div className="px-3 pt-3 pb-1">
                <span
                  className="text-secondary fw-bold text-uppercase"
                  style={{ fontSize: 11, letterSpacing: "1.2px" }}
                >
                  {group}
                </span>
              </div>

              {/* Items */}
              {items.map((notif) => (
                <div
                  key={notif.id}
                  className="notif-item bg-white border-bottom d-flex align-items-start gap-3 px-3 py-3 position-relative"
                  style={{ cursor: "pointer" }}
                >
                  {/* Icon circle */}
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 46, height: 46, background: "#FFF3CD" }}
                  >
                    {notif.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
                      <span className="fw-bold text-dark" style={{ fontSize: 14 }}>
                        {notif.title}
                      </span>
                      <span className="text-muted text-nowrap flex-shrink-0" style={{ fontSize: 11 }}>
                        {notif.time}
                      </span>
                    </div>
                    <p className="mb-0 text-secondary" style={{ fontSize: 13, lineHeight: 1.5 }}>
                      {notif.desc}
                    </p>
                  </div>

                  {/* Unread dot */}
                  {notif.unread && (
                    <span
                      className="position-absolute rounded-circle"
                      style={{ width: 8, height: 8, background: "#F5C842", bottom: 18, right: 16 }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── BOTTOM NAV ── */}
        <nav
          className="bg-white border-top d-flex align-items-center justify-content-around position-fixed bottom-0"
          style={{
            maxWidth: 430,
            width: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
            paddingTop: 8,
            paddingBottom: 14,
          }}
        >
          {tabs.map((tab) =>
            tab.special ? (
              <button
                key={tab.key}
                className="nav-tab-special btn border-0 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: 52, height: 52, background: "#F5C842" }}
              >
                {tab.icon}
              </button>
            ) : (
              <button
                key={tab.key}
                className="btn border-0 bg-transparent d-flex flex-column align-items-center gap-1 p-0 flex-fill"
                onClick={() => setActiveTab(tab.key)}
              >
                <span className={`nav-icon-wrap ${activeTab === tab.key ? "active" : ""}`}>
                  {tab.icon}
                </span>
                <span
                  className={`fw-semibold text-uppercase ${activeTab === tab.key ? "text-warning" : "text-secondary"}`}
                  style={{ fontSize: 9, letterSpacing: "0.4px" }}
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