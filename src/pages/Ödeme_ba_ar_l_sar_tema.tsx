import { ArrowLeft, Check } from "lucide-react";

const Odeme_basarili_sari_tema=() =>
    {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        body { background-color: #f5f5ee; }
        .page-wrapper { max-width: 430px; min-height: 100vh; background-color: #f5f5ee; }
        .check-outer { width: 120px; height: 120px; background-color: #ede8d5; }
        .check-inner { width: 78px; height: 78px; background-color: #ddd5b8; }
        .ilan-img { width: 64px; height: 64px; object-fit: cover; }
        .btn-light-yellow { background-color: #faeec0; color: #2a2200; }
        .btn-light-yellow:hover { background-color: #f5e49e; color: #2a2200; }
        .btn-yellow { background-color: #F5C842; color: #2a2200; }
        .btn-yellow:hover { background-color: #e0b530; color: #2a2200; }
        .tag-yellow { color: #c8960a; }
      `}</style>

      <div className="page-wrapper mx-auto d-flex flex-column">

        {/* HEADER */}
        <div className="d-flex align-items-center px-3 py-3 border-bottom bg-transparent">
          <button className="btn btn-link p-0 text-dark text-decoration-none">
            <ArrowLeft size={22} />
          </button>
          <span className="fw-bold fs-6 position-absolute start-50 translate-middle-x">
            Ödeme Başarılı
          </span>
        </div>

        {/* CONTENT */}
        <div className="d-flex flex-column align-items-center text-center px-4 pt-5 flex-grow-1">

          {/* Check Icon */}
          <div className="check-outer rounded-circle d-flex align-items-center justify-content-center mb-4">
            <div className="check-inner rounded-circle d-flex align-items-center justify-content-center">
              <Check size={36} color="#a07c20" strokeWidth={3} />
            </div>
          </div>

          {/* Title */}
          <h5 className="fw-bold mb-2 text-dark" style={{ fontSize: 20 }}>
            Ödemeniz Başarıyla Gerçekleşti!
          </h5>

          {/* Subtitle */}
          <p className="text-secondary mb-4 px-3" style={{ fontSize: 14, lineHeight: 1.6 }}>
            İlanınız başarıyla onaylandı ve yayına alınmıştır. İlginiz için teşekkür ederiz.
          </p>

          {/* Listing Card */}
          <div className="card border-0 shadow-sm w-100 p-3">
            <div className="d-flex align-items-center gap-3">
              <img
                className="ilan-img rounded-3 flex-shrink-0"
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=128&h=128&fit=crop"
                alt="ilan görseli"
              />
              <div className="text-start">
                <span className="tag-yellow fw-bold text-uppercase d-block mb-1" style={{ fontSize: 11, letterSpacing: "0.6px" }}>
                  İlan Yayında
                </span>
                <span className="fw-bold text-dark d-block" style={{ fontSize: 15 }}>
                  Asım Boray Sulakcı İlanı
                </span>
                <span className="text-secondary" style={{ fontSize: 12 }}>
                  İşlem No: #ABS-982341
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="d-flex flex-column gap-3 px-4 pb-5 pt-4">
          <button className="btn btn-light-yellow w-100 fw-semibold py-3 rounded-pill">
            İlanıma Git
          </button>
          <button className="btn btn-yellow w-100 fw-bold py-3 rounded-pill">
            Ana Sayfaya Dön
          </button>
        </div>

      </div>
    </>
  );
}
export default Odeme_basarili_sari_tema