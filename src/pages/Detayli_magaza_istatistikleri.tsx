import { useState } from "react";
import { Eye, MessageSquare, MousePointerClick, Heart, Bell, ChevronRight, Home, List, User } from "lucide-react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

const chartData = [
  { gun: "Pzt", value: 55 },
  { gun: "Sal", value: 70 },
  { gun: "Çar", value: 85 },
  { gun: "Per", value: 100 },
  { gun: "Cum", value: 78 },
  { gun: "Cmt", value: 60 },
  { gun: "Paz", value: 50 },
];

const ilanlar = [
  {
    id: 1,
    title: "Lüks Müstakil Havuzlu Villa",
    views: "3.4k",
    messages: 42,
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=120&h=120&fit=crop",
  },
  {
    id: 2,
    title: "2023 Model Full Donanımlı SUV",
    views: "2.1k",
    messages: 18,
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=120&h=120&fit=crop",
  },
  {
    id: 3,
    title: "Merkezi Konumda Modern Ofis",
    views: "1.8k",
    messages: 31,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=120&fit=crop",
  },
];

const tabs = ["Bugün", "Haftalık", "Aylık"];

const statCards = [
  { icon: <Eye size={18} color="#b8860b" />, label: "Toplam Görüntülenme", value: "24.500", badge: "+12%" },
  { icon: <MessageSquare size={18} color="#b8860b" />, label: "Alınan Mesajlar", value: "142", badge: "+5%" },
  { icon: <MousePointerClick size={18} color="#b8860b" />, label: "İlan Tıklanma (CTR)", value: "%4.2", badge: "+1.2%" },
  { icon: <Heart size={18} color="#b8860b" />, label: "Favoriye Eklenme", value: "856", badge: "+8%" },
];

const Detayli_magaza_istatistikleri=()=> {
  const [activeTab, setActiveTab] = useState("Haftalık");
  const [activeNav, setActiveNav] = useState("Ana Sayfa");

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        body { background-color: #f5f5ee; }
        .page-wrapper { max-width: 430px; min-height: 100vh; background-color: #f5f5ee; }
        .avatar { width: 42px; height: 42px; object-fit: cover; }
        .stat-card { background: #fff; border-radius: 14px; }
        .badge-green { background-color: #e6f9ec; color: #1a8c3a; font-size: 11px; }
        .tab-btn { border-radius: 20px; font-size: 13px; font-weight: 500; border: none; background: transparent; color: #888; padding: 6px 16px; }
        .tab-btn.active { background-color: #F5C842; color: #2a2200; font-weight: 700; }
        .tab-wrapper { background: #eeede4; border-radius: 24px; }
        .ilan-card { background: #fff; border-radius: 14px; }
        .ilan-img { width: 56px; height: 56px; object-fit: cover; border-radius: 10px; flex-shrink: 0; }
        .nav-icon-wrap { color: #bbb; }
        .nav-icon-wrap.active { color: #F5C842; }
        .nav-label { font-size: 10px; font-weight: 600; }
        .nav-label.active { color: #F5C842; }
      `}</style>

      <div className="page-wrapper mx-auto d-flex flex-column">

        {/* HEADER */}
        <div className="d-flex align-items-center justify-content-between px-3 pt-4 pb-2">
          <div className="d-flex align-items-center gap-2">
            <img
              className="avatar rounded-circle border border-warning"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl9PHFm4mSoknaRXBa02-EKU-G3XvApSSZBZ8oHEodcqg9VYxKkblgh0wVvuifvZk9awdAdWEI6sLIfwKnyIHFa9GLbYtiWA_gQd4ZsARj-ntlqN2bZoxNots1trSJEQScaF_XhID6fZsPizOB5mxvWsHOTpEusv3TwHXvbiLHmrMiFg8xHk_icMyrtX1GD3gxq3ADweiDzxS7mQhkojO1SxNDnBHR3hhA3YTxkASe0E-xz4cYxiFUymAFTOGB4rb3kNGEtCJaVL0"
              alt="profil"
            />
            <div>
              <div className="text-muted" style={{ fontSize: 12 }}>Hoş Geldin,</div>
              <div className="fw-bold text-dark" style={{ fontSize: 15 }}>Asım Boray Sulakcı</div>
            </div>
          </div>
          <button className="btn btn-link p-0 text-dark text-decoration-none position-relative">
            <Bell size={22} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning" style={{ fontSize: 8, padding: "2px 4px" }}>3</span>
          </button>
        </div>

        {/* SCROLL AREA */}
        <div className="flex-grow-1 overflow-auto px-3 pb-5 mb-4">

          {/* TABS */}
          <div className="tab-wrapper d-flex p-1 mb-3">
            {tabs.map((t) => (
              <button
                key={t}
                className={`tab-btn flex-fill ${activeTab === t ? "active" : ""}`}
                onClick={() => setActiveTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* STAT CARDS — 2x2 grid */}
          <div className="row g-2 mb-3">
            {statCards.map((s, i) => (
              <div key={i} className="col-6">
                <div className="stat-card p-3 h-100">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    {s.icon}
                    <span className="badge badge-green rounded-pill px-2 py-1">{s.badge}</span>
                  </div>
                  <div className="text-muted mb-1" style={{ fontSize: 12 }}>{s.label}</div>
                  <div className="fw-bold text-dark" style={{ fontSize: 22 }}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CHART */}
          <div className="bg-white rounded-4 p-3 mb-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="fw-bold text-dark" style={{ fontSize: 15 }}>İlan Performans Analizi</span>
              <span className="text-muted" style={{ fontSize: 13 }}>ℹ</span>
            </div>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={chartData} barSize={28} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="gun" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#aaa" }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.gun === "Per" ? "#F5C842" : "#fde68a"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* TOP LISTINGS */}
          <div className="mb-2">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span className="fw-bold text-dark" style={{ fontSize: 15 }}>En Çok İlgi Gören İlanlar</span>
              <button className="btn btn-link p-0 text-decoration-none fw-semibold" style={{ color: "#F5C842", fontSize: 13 }}>
                Tümünü Gör
              </button>
            </div>

            <div className="d-flex flex-column gap-2">
              {ilanlar.map((ilan) => (
                <div key={ilan.id} className="ilan-card p-3 d-flex align-items-center gap-3">
                  <img className="ilan-img" src={ilan.img} alt={ilan.title} />
                  <div className="flex-grow-1">
                    <div className="fw-semibold text-dark mb-1" style={{ fontSize: 14 }}>{ilan.title}</div>
                    <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: 12 }}>
                      <span className="d-flex align-items-center gap-1">
                        <Eye size={13} /> {ilan.views}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <MessageSquare size={13} /> {ilan.messages}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} color="#ccc" className="flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM NAV */}
        <nav
          className="bg-white border-top d-flex align-items-center justify-content-around position-fixed bottom-0"
          style={{ maxWidth: 430, width: "100%", left: "50%", transform: "translateX(-50%)", zIndex: 100, paddingTop: 8, paddingBottom: 14 }}
        >
          {[
            { label: "Ana Sayfa", icon: <Home size={22} /> },
            { label: "İlanlarım", icon: <List size={22} /> },
            { label: "Mesajlar", icon: <MessageSquare size={22} /> },
            { label: "Profil", icon: <User size={22} /> },
          ].map((tab) => (
            <button
              key={tab.label}
              className="btn border-0 bg-transparent d-flex flex-column align-items-center gap-1 p-0 flex-fill"
              onClick={() => setActiveNav(tab.label)}
            >
              <span className={`nav-icon-wrap ${activeNav === tab.label ? "active" : ""}`}>
                {tab.icon}
              </span>
              <span className={`nav-label text-uppercase ${activeNav === tab.label ? "active text-warning" : "text-secondary"}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </nav>

      </div>
    </>
  );
}

export default Detayli_magaza_istatistikleri