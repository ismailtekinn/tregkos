import { useState } from "react";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Home, Search, User } from "lucide-react";

const Giris_ve_kayit=()=> {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeNav, setActiveNav] = useState("Hesabım");

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        body { background-color: #f5f5ee; }
        .page-wrapper { max-width: 430px; min-height: 100vh; background-color: #f5f5ee; }

        .logo-box {
          width: 64px; height: 64px;
          background: #F5C842;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px;
        }

        .input-wrap {
          background: #fff;
          border: 1.5px solid #e8e4d8;
          border-radius: 12px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 10px;
          transition: border-color 0.15s;
        }
        .input-wrap:focus-within { border-color: #F5C842; }

        .input-wrap input {
          border: none;
          background: transparent;
          font-size: 14px;
          color: #333;
          padding: 13px 0;
          flex: 1;
          outline: none;
        }
        .input-wrap input::placeholder { color: #bbb; }

        .btn-giris {
          background: #F5C842;
          border: none;
          border-radius: 14px;
          color: #2a1a00;
          font-size: 16px;
          font-weight: 700;
          padding: 14px 0;
          width: 100%;
          transition: background 0.15s;
        }
        .btn-giris:hover { background: #e0b530; color: #2a1a00; }

        .divider-text {
          font-size: 13px;
          color: #bbb;
          text-align: center;
          position: relative;
        }
        .divider-text::before,
        .divider-text::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 38%;
          height: 1px;
          background: #e0ddd4;
        }
        .divider-text::before { left: 0; }
        .divider-text::after { right: 0; }

        .btn-social {
          flex: 1;
          background: #fff;
          border: 1.5px solid #e8e4d8;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #333;
          padding: 12px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: border-color 0.15s, background 0.15s;
        }
        .btn-social:hover { border-color: #F5C842; background: #fffbee; }

        .nav-icon-wrap { color: #bbb; }
        .nav-icon-wrap.active { color: #F5C842; }
      `}</style>

      <div className="page-wrapper mx-auto d-flex flex-column">

        {/* HEADER */}
        <div className="bg-white border-bottom px-3 py-3 d-flex align-items-center sticky-top">
          <button className="btn btn-link p-0 text-dark text-decoration-none me-3">
            <ArrowLeft size={20} />
          </button>
          <span className="fw-bold text-dark mx-auto pe-4" style={{ fontSize: 16 }}>Asım Boray Sulakcı</span>
        </div>

        {/* CONTENT */}
        <div className="flex-grow-1 px-4 pt-4 pb-4 d-flex flex-column" style={{ paddingBottom: 90 }}>

          {/* Logo */}
          <div className="d-flex justify-content-center mb-4">
            <div className="logo-box">🛒</div>
          </div>

          {/* Title */}
          <div className="text-center mb-4">
            <h4 className="fw-bold text-dark mb-2" style={{ fontSize: 26 }}>Tekrar Hoş Geldiniz</h4>
            <p className="text-secondary mb-0" style={{ fontSize: 14 }}>Devam etmek için hesabınıza giriş yapın</p>
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label className="fw-semibold text-dark mb-2 d-block" style={{ fontSize: 14 }}>E-posta</label>
            <div className="input-wrap">
              <Mail size={16} color="#bbb" />
              <input
                type="email"
                placeholder="eposta@adresiniz.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-1">
            <label className="fw-semibold text-dark mb-2 d-block" style={{ fontSize: 14 }}>Şifre</label>
            <div className="input-wrap">
              <Lock size={16} color="#bbb" />
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn btn-link p-0 text-decoration-none"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass
                  ? <EyeOff size={16} color="#bbb" />
                  : <Eye size={16} color="#bbb" />
                }
              </button>
            </div>
          </div>

          {/* Forgot */}
          <div className="text-end mb-4">
            <button className="btn btn-link p-0 text-decoration-none fw-semibold" style={{ color: "#F5C842", fontSize: 13 }}>
              Şifremi Unuttum
            </button>
          </div>

          {/* Login Button */}
          <button className="btn-giris mb-4">Giriş Yap</button>

          {/* Divider */}
          <div className="divider-text mb-4">veya şununla devam et</div>

          {/* Social Buttons */}
          <div className="d-flex gap-3 mb-4">
            <button className="btn-social">
              <span style={{ fontSize: 16 }}>G</span> Google
            </button>
            <button className="btn-social">
              <span style={{ fontSize: 16 }}>🍎</span> Apple
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center" style={{ fontSize: 14, color: "#555" }}>
            Hesabınız yok mu?{" "}
            <button className="btn btn-link p-0 text-decoration-none fw-bold" style={{ color: "#F5C842", fontSize: 14 }}>
              Kayıt Ol
            </button>
          </div>

        </div>

        {/* BOTTOM NAV */}
        <nav
          className="bg-white border-top d-flex align-items-center justify-content-around position-fixed bottom-0"
          style={{ maxWidth: 430, width: "100%", left: "50%", transform: "translateX(-50%)", zIndex: 100, paddingTop: 8, paddingBottom: 14 }}
        >
          {[
            { label: "Anasayfa", icon: <Home size={22} /> },
            { label: "Ara",      icon: <Search size={22} /> },
            { label: "Hesabım", icon: <User size={22} /> },
          ].map((tab) => (
            <button
              key={tab.label}
              className="btn border-0 bg-transparent d-flex flex-column align-items-center gap-1 p-0 flex-fill"
              onClick={() => setActiveNav(tab.label)}
            >
              <span className={`nav-icon-wrap ${activeNav === tab.label ? "active" : ""}`}>
                {tab.icon}
              </span>
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
export default Giris_ve_kayit