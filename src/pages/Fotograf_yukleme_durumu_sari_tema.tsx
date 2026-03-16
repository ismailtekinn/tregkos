import { useState, useEffect } from "react";
import { X, Upload, CheckCircle, RotateCcw, Image, XCircle } from "lucide-react";

const TOTAL = 10;

const Fotograf_yukleme_durumu_sari_tema = () => {
  const [uploaded, setUploaded] = useState(3);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running || uploaded >= TOTAL) return;
    const t = setTimeout(() => setUploaded((p) => p + 1), 1200);
    return () => clearTimeout(t);
  }, [uploaded, running]);

  const iptalEt = () => {
    setRunning(false);
  };

  const percent = Math.round((uploaded / TOTAL) * 100);

  const slots = Array.from({ length: 6 }, (_, i) => {
    if (i < uploaded) return "done";
    if (i === uploaded && running) return "loading";
    return "pending";
  });

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        body { background-color: #f5f5ee; }
        .page-wrapper { max-width: 430px; min-height: 100vh; background-color: #f5f5ee; }

        .upload-icon-wrap {
          width: 72px; height: 72px;
          background: #fff8d6;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        .progress-bar-track {
          height: 8px;
          background: #ece9dc;
          border-radius: 20px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: #F5C842;
          border-radius: 20px;
          transition: width 0.6s ease;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .photo-slot {
          aspect-ratio: 1;
          border-radius: 12px;
          border: 2px solid #e8e4d4;
          background: #f0ede0;
          display: flex; align-items: center; justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .photo-slot.done {
          border-color: #F5C842;
          background: #e8e0c8;
        }

        .photo-slot.loading {
          border-color: #F5C842;
          border-style: dashed;
          background: #f5f0dc;
        }

        .photo-slot.pending {
          border-color: #e0ddd0;
          background: #f0ede0;
        }

        .check-badge {
          position: absolute;
          top: 6px; right: 6px;
          width: 22px; height: 22px;
          background: #F5C842;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        .slot-label {
          font-size: 10px;
          color: #bbb;
          font-weight: 500;
        }

        .btn-iptal {
          background: #fff8d6;
          border: none;
          border-radius: 14px;
          color: #c8960a;
          font-size: 15px;
          font-weight: 700;
          padding: 15px 0;
          width: 100%;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.15s;
        }
        .btn-iptal:hover { background: #fdeea0; }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spinning { animation: spin 1.2s linear infinite; }
      `}</style>

      <div className="page-wrapper mx-auto d-flex flex-column">

        <div className="bg-white border-bottom px-3 py-3 d-flex align-items-center gap-3 sticky-top">
          <button className="btn btn-link p-0 text-dark text-decoration-none" onClick={iptalEt}>
            <X size={20} color="#E85B2A" />
          </button>
          <span className="fw-bold text-dark" style={{ fontSize: 17 }}>Fotoğraf Yükle</span>
        </div>

        <div className="flex-grow-1 px-4 pt-4 pb-4 d-flex flex-column">

          <div className="d-flex justify-content-center mb-4">
            <div className="upload-icon-wrap">
              <Upload size={30} color="#F5C842" />
            </div>
          </div>

          <div className="text-center mb-4">
            <h5 className="fw-bold text-dark mb-2" style={{ fontSize: 20 }}>
              Fotoğraflarınız Yükleniyor...
            </h5>
            <p className="text-secondary mb-0" style={{ fontSize: 13 }}>
              Lütfen pencereyi kapatmayın, ilanınız hazırlanıyor.
            </p>
          </div>

          <div className="bg-white rounded-4 p-3 mb-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="fw-semibold text-dark" style={{ fontSize: 14 }}>Yüklenen Fotoğraf Sayısı</span>
              <span className="fw-bold" style={{ color: "#F5C842", fontSize: 15 }}>
                {uploaded} / {TOTAL}
              </span>
            </div>
            <div className="progress-bar-track mb-2">
              <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
            </div>
            <div className="d-flex align-items-center gap-2" style={{ fontSize: 12, color: "#F5C842" }}>
              <span>●</span>
              <span>{uploaded >= TOTAL ? "Yükleme tamamlandı!" : running ? "İşlem devam ediyor..." : "Yükleme iptal edildi."}</span>
            </div>
          </div>

          <div className="photo-grid mb-4">
            {slots.map((status, i) => (
              <div key={i} className={`photo-slot ${status}`}>
                {status === "done" && (
                  <>
                    <span className="slot-label">150×150</span>
                    <div className="check-badge">
                      <CheckCircle size={13} color="#fff" strokeWidth={3} />
                    </div>
                  </>
                )}
                {status === "loading" && (
                  <span className="spinning">
                    <RotateCcw size={22} color="#F5C842" />
                  </span>
                )}
                {status === "pending" && (
                  <Image size={22} color="#ccc" />
                )}
              </div>
            ))}
          </div>

          <button className="btn-iptal" onClick={iptalEt}>
            <XCircle size={18} color="#c8960a" />
            Yüklemeyi İptal Et
          </button>

          <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: 12 }}>
            İptal etmeniz durumunda yüklenen görseller silinecektir.
          </p>

        </div>
      </div>
    </>
  );
};

export default Fotograf_yukleme_durumu_sari_tema;

export {};