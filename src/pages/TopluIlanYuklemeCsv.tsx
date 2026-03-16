import { useState, useRef } from "react";

const previewRows = [
  { baslik: "iPhone 14 Pro Max 256GB", fiyat: "62.500 TL", durum: "ok" },
  { baslik: "Samsung Galaxy S23 Ultra", fiyat: "48.900 TL", durum: "ok" },
  { baslik: "PlayStation 5 (Hatalı)", fiyat: "---", durum: "error" },
  { baslik: 'MacBook Air M2 13"', fiyat: "39.000 TL", durum: "ok" },
];

const rules = [
  "Sütun başlıklarını ve sıralamasını değiştirmeyin.",
  "Tarih formatı GG/AA/YYYY şeklinde olmalıdır.",
  "Fiyat alanında sadece rakam ve nokta kullanın.",
];

const TopluIlanYuklemeCsv = () => {
  const [dragOver, setDragOver] = useState(false);
  const [fileName] = useState("ilanlar_temmuz.csv");

  // SADECE BURASI DÜZELTİLDİ
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#f0f2f5" }}
    >
      <div
        className="d-flex flex-column bg-white shadow position-relative"
        style={{
          width: "100%",
          maxWidth: 430,
          height: "100vh",
          maxHeight: 900,
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center px-3 py-3 border-bottom bg-white flex-shrink-0">
          <button className="btn p-0 me-3" style={{ color: "#333" }}>
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                d="M15 19l-7-7 7-7"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="fw-bold" style={{ fontSize: 17 }}>
            Toplu İlan Yükleme
          </span>
        </div>

        {/* Scrollable Content */}
        <div
          className="flex-grow-1 overflow-auto px-3 py-3"
          style={{ paddingBottom: 100 }}
        >
          {/* Drop Zone */}
          <div
            className="rounded-4 d-flex flex-column align-items-center justify-content-center py-4 mb-3"
            style={{
              border: `2px dashed ${dragOver ? "#e8600a" : "#f5c4a8"}`,
              background: dragOver ? "#fff5f0" : "#fff9f6",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              className="d-none"
            />

            <div
              className="rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 64, height: 64, background: "#fff0e8" }}
            >
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                <rect
                  x="4"
                  y="3"
                  width="12"
                  height="16"
                  rx="2"
                  fill="#e8600a"
                  opacity="0.15"
                />
                <path
                  d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z"
                  stroke="#e8600a"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 3v6h6"
                  stroke="#e8600a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13v5M9.5 15.5L12 13l2.5 2.5"
                  stroke="#e8600a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="fw-bold mb-1" style={{ fontSize: 15 }}>
              CSV Dosyası Seçin veya Sürükleyin
            </div>
            <div className="text-muted mb-3" style={{ fontSize: 13 }}>
              Dosya boyutu maksimum 10MB olmalıdır.
            </div>

            <button
              className="btn fw-semibold px-4 py-2 rounded-3"
              style={{
                background:
                  "linear-gradient(135deg, #f07030 0%, #e8600a 100%)",
                color: "#fff",
                border: "none",
                fontSize: 14,
                boxShadow: "0 3px 10px rgba(232,96,10,0.3)",
              }}
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
            >
              Dosya Seç
            </button>
          </div>

          {/* Kurallar */}
          <div className="mb-3">
            <div
              className="fw-bold mb-2"
              style={{
                fontSize: 13,
                letterSpacing: 0.5,
                color: "#444",
              }}
            >
              YÜKLEME KURALLARI
            </div>

            <div className="d-flex flex-column gap-2">
              {rules.map((rule, i) => (
                <div
                  key={i}
                  className="d-flex align-items-start gap-2"
                >
                  <span className="flex-shrink-0 mt-1">
                    <svg
                      width="17"
                      height="17"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" fill="#e8f7ee" />
                      <path
                        d="M7 12l3.5 3.5L17 8"
                        stroke="#28a745"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span style={{ fontSize: 13.5, color: "#333" }}>
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Önizleme */}
          <div className="rounded-3 overflow-hidden"
            style={{ border: "1.5px solid #efefef" }}
          >
            {previewRows.map((row, i) => (
              <div
                key={i}
                className="d-flex align-items-center px-3 py-2"
                style={{
                  borderBottom:
                    i < previewRows.length - 1
                      ? "1px solid #f0f0f0"
                      : "none",
                  background: "#fff",
                }}
              >
                <div className="flex-grow-1">{row.baslik}</div>
                <div className="me-4">{row.fiyat}</div>
                <div>{row.durum}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div
          className="position-absolute bottom-0 start-0 end-0 px-3 py-3 bg-white border-top"
          style={{ borderRadius: "0 0 20px 20px" }}
        >
          <button
            className="btn w-100 fw-bold py-3 rounded-3"
            style={{
              background:
                "linear-gradient(135deg, #f5c842 0%, #e8a800 100%)",
              border: "none",
              fontSize: 15,
              color: "#fff",
            }}
          >
            Dosyayı İşle ve Yayınla
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopluIlanYuklemeCsv;