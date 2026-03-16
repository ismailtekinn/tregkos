import { useState } from "react";
import { ArrowLeft, Heart, Share2, MapPin, Clock, CheckCircle, Phone, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=400&fit=crop",
];

const details = [
  { label: "Oda Sayısı", value: "4 + 1" },
  { label: "Brüt m²", value: "220 m²" },
  { label: "Net m²", value: "195 m²" },
  { label: "Isıtma", value: "Doğalgaz (Kombi)" },
  { label: "Bina Yaşı", value: "5-10 Arası" },
  { label: "Bulunduğu Kat", value: "12. Kat" },
  { label: "Toplam Kat", value: "20" },
  { label: "Eşyalı", value: "Hayır" },
];

const Emlak_ilan_detay_gorsel_ve_konumlu_1=() =>{
  const [currentImg, setCurrentImg] = useState(0);
  const [liked, setLiked] = useState(false);

  const prev = () => setCurrentImg((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setCurrentImg((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        body { background-color: #f5f5ee; }
        .page-wrapper { max-width: 430px; min-height: 100vh; background-color: #f5f5ee; }
        .hero-img { width: 100%; height: 240px; object-fit: cover; }
        .img-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.5); }
        .img-dot.active { background: #fff; width: 18px; border-radius: 4px; }
        .img-nav-btn { width: 28px; height: 28px; border-radius: 50%; background: rgba(0,0,0,0.3); border: none; color: #fff; display: flex; align-items: center; justify-content: center; }
        .tag-yeni { background-color: #F5C842; color: #2a2200; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .detail-row { border-bottom: 1px solid #f0ede4; }
        .detail-row:last-child { border-bottom: none; }
        .avatar-sm { width: 38px; height: 38px; object-fit: cover; }
        .btn-mesaj { background-color: #F5C842; color: #2a2200; border: none; border-radius: 50px; font-weight: 700; font-size: 14px; }
        .btn-mesaj:hover { background-color: #e0b530; color: #2a2200; }
        .btn-ara { background-color: #F5C842; color: #2a2200; border: none; border-radius: 50px; font-weight: 700; font-size: 14px; }
        .btn-ara:hover { background-color: #e0b530; color: #2a2200; }
        .map-frame { width: 100%; height: 160px; border-radius: 12px; border: none; }
        .seller-card { background: #fff; border-radius: 14px; }
        .detail-card { background: #fff; border-radius: 14px; }
        .btn-seller { background-color: #F5C842; color: #2a2200; border: none; border-radius: 20px; font-size: 12px; font-weight: 700; padding: 6px 14px; }
      `}</style>

      <div className="page-wrapper mx-auto d-flex flex-column">

        {/* HEADER */}
        <div className="d-flex align-items-center justify-content-between px-3 py-3 bg-white border-bottom sticky-top">
          <button className="btn btn-link p-0 text-dark text-decoration-none">
            <ArrowLeft size={20} />
          </button>
          <span className="fw-bold text-dark" style={{ fontSize: 15 }}>Asım Boray Sulakcı</span>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link p-0 text-decoration-none" onClick={() => setLiked(!liked)}>
              <Heart size={20} fill={liked ? "#F5C842" : "none"} color={liked ? "#F5C842" : "#333"} />
            </button>
            <button className="btn btn-link p-0 text-dark text-decoration-none">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* IMAGE SLIDER */}
        <div className="position-relative overflow-hidden" style={{ background: "#ddd" }}>
          <img className="hero-img" src={images[currentImg]} alt="ilan görseli" />

          {/* Nav arrows */}
          <button className="img-nav-btn position-absolute top-50 start-0 translate-middle-y ms-2" onClick={prev}>
            <ChevronLeft size={16} />
          </button>
          <button className="img-nav-btn position-absolute top-50 end-0 translate-middle-y me-2" onClick={next}>
            <ChevronRight size={16} />
          </button>

          {/* Counter */}
          <span className="position-absolute top-0 end-0 mt-2 me-2 badge bg-dark bg-opacity-50 text-white" style={{ fontSize: 11, borderRadius: 20 }}>
            {currentImg + 1}/{images.length}
          </span>

          {/* Dots */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-1 align-items-center">
            {images.map((_, i) => (
              <div key={i} className={`img-dot ${i === currentImg ? "active" : ""}`} />
            ))}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="px-3 py-3 flex-grow-1" style={{ paddingBottom: 90 }}>

          {/* Title & Price */}
          <div className="d-flex align-items-start justify-content-between gap-2 mb-1">
            <h6 className="fw-bold text-dark mb-0" style={{ fontSize: 17, lineHeight: 1.3 }}>
              Deniz Manzaralı Lüks 4+1 Daire
            </h6>
            <span className="tag-yeni flex-shrink-0 mt-1">YENİ</span>
          </div>

          <div className="fw-bold mb-1" style={{ fontSize: 22, color: "#1a1a1a" }}>42.500.000 TL</div>

          <div className="d-flex align-items-center gap-3 text-muted mb-4" style={{ fontSize: 12 }}>
            <span className="d-flex align-items-center gap-1">
              <MapPin size={12} /> Beşiktaş, İstanbul
            </span>
            <span className="d-flex align-items-center gap-1">
              <Clock size={12} /> 2 saat önce
            </span>
          </div>

          {/* Detail Table */}
          <div className="fw-bold text-dark mb-2" style={{ fontSize: 14 }}>Açıklama</div>
          <div className="detail-card px-3 mb-3">
            {details.map((d, i) => (
              <div key={i} className="detail-row d-flex justify-content-between py-2">
                <span className="text-muted" style={{ fontSize: 13 }}>{d.label}</span>
                <span className="fw-semibold text-dark" style={{ fontSize: 13 }}>{d.value}</span>
              </div>
            ))}
          </div>

          {/* Seller Card */}
          <div className="seller-card p-3 d-flex align-items-center gap-3 mb-3">
            <img
              className="avatar-sm rounded-circle border border-warning flex-shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl9PHFm4mSoknaRXBa02-EKU-G3XvApSSZBZ8oHEodcqg9VYxKkblgh0wVvuifvZk9awdAdWEI6sLIfwKnyIHFa9GLbYtiWA_gQd4ZsARj-ntlqN2bZoxNots1trSJEQScaF_XhID6fZsPizOB5mxvWsHOTpEusv3TwHXvbiLHmrMiFg8xHk_icMyrtX1GD3gxq3ADweiDzxS7mQhkojO1SxNDnBHR3hhA3YTxkASe0E-xz4cYxiFUymAFTOGB4rb3kNGEtCJaVL0"
              alt="satıcı"
            />
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-1">
                <span className="fw-bold text-dark" style={{ fontSize: 14 }}>Asım Boray Sulakcı</span>
                <CheckCircle size={14} color="#3b82f6" fill="#3b82f6" />
              </div>
              <div className="text-muted" style={{ fontSize: 11 }}>
                Ocak 2020'den beri üye • 5.0 (249 değerlendirme)
              </div>
            </div>
            <button className="btn-seller flex-shrink-0">Mağazayı Gör</button>
          </div>

          {/* Description */}
          <div className="fw-bold text-dark mb-2" style={{ fontSize: 14 }}>Açıklama</div>
          <p className="text-secondary mb-4" style={{ fontSize: 13, lineHeight: 1.7 }}>
            Beşiktaş'ın kalbinde yer alan bu ferah 4+1 dairede lüks yaşamın keyfini çıkarın. Panoramik deniz manzarası, modern mimarisi ve yüksek kaliteli ekipmanları ile öne çıkmaktadır. Bina 7/24 güvenlik, kapalı otopark ve spor salonu sunmaktadır. Ana ulaşım bağlantılarına ve alışveriş bölgelerine mükemmel bir konumdadır.
          </p>

          {/* Map */}
          <div className="d-flex align-items-center gap-2 mb-2">
            <div style={{ width: 4, height: 16, background: "#F5C842", borderRadius: 2 }} />
            <span className="fw-bold text-dark" style={{ fontSize: 14 }}>Konum</span>
          </div>
          <div className="overflow-hidden mb-1" style={{ borderRadius: 12 }}>
            <iframe
              className="map-frame"
              src="https://www.openstreetmap.org/export/embed.html?bbox=29.00%2C41.04%2C29.02%2C41.06&layer=mapnik&marker=41.05%2C29.01"
              title="Konum Haritası"
            />
          </div>
          <div className="text-muted text-center mb-4" style={{ fontSize: 11 }}>
            Ortaköy Mah. Beşiktaş, İstanbul
          </div>

        </div>

        {/* BOTTOM BUTTONS */}
        <div
          className="bg-white border-top d-flex gap-2 px-3 py-3 position-fixed bottom-0"
          style={{ maxWidth: 430, width: "100%", left: "50%", transform: "translateX(-50%)", zIndex: 100 }}
        >
          <button className="btn btn-mesaj flex-fill d-flex align-items-center justify-content-center gap-2 py-2">
            <MessageSquare size={16} /> Mesaj Gönder
          </button>
          <button className="btn btn-ara flex-fill d-flex align-items-center justify-content-center gap-2 py-2">
            <Phone size={16} /> Hemen Ara
          </button>
        </div>

      </div>
    </>
  );
}
export default Emlak_ilan_detay_gorsel_ve_konumlu_1