import { useState } from "react";
import { X, Share2, Heart, ChevronLeft, ChevronRight, Calendar, Maximize2, Bed, MapPin } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&h=700&fit=crop",
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&h=700&fit=crop",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=700&fit=crop",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=700&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&h=700&fit=crop",
];

const Emlak_resim_galerisi=()=> {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(true);
  const total = images.length;

  const prev = () => setCurrent((p) => (p === 0 ? total - 1 : p - 1));
  const next = () => setCurrent((p) => (p === total - 1 ? 0 : p + 1));

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #000; overflow: hidden; }
        .gallery-root {
          width: 100vw;
          height: 100vh;
          position: relative;
          overflow: hidden;
        }
        .bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.35s ease;
        }
        .overlay-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%);
          padding: 20px 20px 60px;
          z-index: 10;
        }
        .overlay-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: rgba(30, 30, 30, 0.82);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 20px 20px 0 0;
          padding: 24px 24px 32px;
          z-index: 10;
        }
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          border: none;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .nav-arrow:hover { background: rgba(255,255,255,0.28); }
        .nav-arrow.left { left: 16px; }
        .nav-arrow.right { right: 16px; }
        .counter-pill {
          background: rgba(30,30,30,0.65);
          backdrop-filter: blur(6px);
          border-radius: 20px;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 5px 14px;
        }
        .icon-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .icon-btn:hover { background: rgba(255,255,255,0.25); }
        .dot {
          width: 22px;
          height: 5px;
          border-radius: 3px;
          background: rgba(255,255,255,0.35);
          transition: all 0.25s;
        }
        .dot.active {
          background: #F5C842;
          width: 28px;
        }
        .price-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #F5C842;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .btn-randevu {
          background: #F5C842;
          color: #1a1100;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          transition: background 0.2s;
        }
        .btn-randevu:hover { background: #e0b530; color: #1a1100; }
        .divider { border-top: 1px solid rgba(255,255,255,0.15); margin: 14px 0; }
      `}</style>

      <div className="gallery-root">

        {/* BACKGROUND IMAGE */}
        <img
          key={current}
          className="bg-img"
          src={images[current]}
          alt={`görsel ${current + 1}`}
        />

        {/* TOP OVERLAY */}
        <div className="overlay-top d-flex align-items-center justify-content-between">
          {/* Left: Close + Label */}
          <div className="d-flex align-items-center gap-3">
            <button className="icon-btn">
              <X size={20} color="#fff" />
            </button>
            <div>
              <div className="text-uppercase fw-semibold" style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", letterSpacing: "1px" }}>
                PORTFÖY
              </div>
              <div className="fw-bold text-white" style={{ fontSize: 15 }}>
                Asım Boray Sulakcı
              </div>
            </div>
          </div>

          {/* Right: Share + Like */}
          <div className="d-flex align-items-center gap-2">
            <button className="icon-btn">
              <Share2 size={20} color="#fff" />
            </button>
            <button className="icon-btn" onClick={() => setLiked(!liked)}>
              <Heart
                size={20}
                fill={liked ? "#F5C842" : "none"}
                color={liked ? "#F5C842" : "#fff"}
              />
            </button>
          </div>
        </div>

        {/* LEFT ARROW */}
        <button className="nav-arrow left" onClick={prev}>
          <ChevronLeft size={22} color="#fff" />
        </button>

        {/* RIGHT ARROW */}
        <button className="nav-arrow right" onClick={next}>
          <ChevronRight size={22} color="#fff" />
        </button>

        {/* CENTER COUNTER */}
        <div
          className="position-absolute d-flex justify-content-center"
          style={{ bottom: "calc(220px + 20px)", left: 0, right: 0, zIndex: 15 }}
        >
          <span className="counter-pill">{current + 1} / {total}</span>
        </div>

        {/* BOTTOM CARD */}
        <div className="overlay-bottom">

          {/* Price + Title */}
          <div className="d-flex align-items-start gap-2 mb-1">
            <div className="price-dot mt-1" />
            <div>
              <div className="fw-bold" style={{ fontSize: 24, color: "#F5C842", letterSpacing: "-0.5px" }}>
                4.750.000 TL
              </div>
              <div className="fw-semibold text-white" style={{ fontSize: 17 }}>
                3+1 Geniş Aile Dairesi - Site İçi
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="d-flex align-items-center gap-3 mt-2" style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>
            <span className="d-flex align-items-center gap-1">
              <Maximize2 size={14} /> 165 m²
            </span>
            <span className="d-flex align-items-center gap-1">
              <Bed size={14} /> 3+1
            </span>
            <span className="d-flex align-items-center gap-1">
              <MapPin size={14} /> İstanbul, Başakşehir
            </span>
          </div>

          <div className="divider" />

          {/* Dots + Randevu */}
          <div className="d-flex align-items-center justify-content-between">
            {/* Dots */}
            <div className="d-flex align-items-center gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>

            {/* Randevu Button */}
            <button className="btn-randevu">
              <Calendar size={16} />
              Randevu Al
            </button>
          </div>

        </div>

      </div>
    </>
  );
}
export default Emlak_resim_galerisi