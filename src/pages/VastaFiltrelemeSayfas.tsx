import { useState } from "react";
import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

interface SelectRowProps {
  icon?: ReactNode;
  label: string;
  value?: string;
}

interface RangeInputsProps {
  leftPlaceholder: string;
  rightPlaceholder: string;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <div
    className="fw-bold px-3 pt-3 pb-1"
    style={{ fontSize: 12, letterSpacing: 0.8, color: "#555" }}
  >
    {children}
  </div>
);

const SelectRow = ({ icon, label, value = "Tümü" }: SelectRowProps) => (
  <div
    className="d-flex align-items-center justify-content-between px-3 py-3"
    style={{ borderBottom: "1px solid #f0f0f0", cursor: "pointer" }}
  >
    <div className="d-flex align-items-center gap-2">
      {icon && <span style={{ color: "#e8a800" }}>{icon}</span>}
      <span style={{ fontSize: 14.5, color: "#222" }}>{label}</span>
    </div>
    <div
      className="d-flex align-items-center gap-1"
      style={{ color: "#aaa", fontSize: 14 }}
    >
      <span>{value}</span>
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
        <path
          d="M9 18l6-6-6-6"
          stroke="#bbb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

const RangeInputs = ({
  leftPlaceholder,
  rightPlaceholder,
}: RangeInputsProps) => (
  <div className="d-flex gap-2 px-3 pb-3 pt-1">
    <input
      type="number"
      className="form-control rounded-3 border-0"
      placeholder={leftPlaceholder}
      style={{
        background: "#fff",
        fontSize: 14,
        height: 46,
        boxShadow: "none",
      }}
    />
    <input
      type="number"
      className="form-control rounded-3 border-0"
      placeholder={rightPlaceholder}
      style={{
        background: "#fff",
        fontSize: 14,
        height: 46,
        boxShadow: "none",
      }}
    />
  </div>
);

const VastaFiltrelemeSayfas = () => {
  const [kimden, setKimden] = useState("Tümü");

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#e8e8e8" }}
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
          background: "#f5f5f0",
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between px-3 py-3 bg-white border-bottom flex-shrink-0">
          <button
            className="btn p-0 d-flex align-items-center gap-2"
            style={{ color: "#333" }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="#333"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="fw-bold" style={{ fontSize: 17 }}>
              Filtrele
            </span>
          </button>
          <button
            className="btn p-0 fw-semibold"
            style={{ color: "#e8a800", fontSize: 15 }}
          >
            Temizle
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          className="flex-grow-1 overflow-auto"
          style={{ background: "#f5f5f0", paddingBottom: 90 }}
        >
          {/* KONUM */}
          <SectionTitle>KONUM</SectionTitle>

          <div className="mx-3 rounded-3 overflow-hidden bg-white mb-2">
            <SelectRow label="İl" value="Tümü" />
            <SelectRow label="İlçe" value="Tümü" />
          </div>

          {/* ARAÇ BİLGİLERİ */}
          <SectionTitle>ARAÇ BİLGİLERİ</SectionTitle>

          <div className="mx-3 rounded-3 overflow-hidden bg-white mb-2">
            <SelectRow label="Marka" value="Seçiniz" />
            <SelectRow label="Seri" value="Seçiniz" />
            <SelectRow label="Model" value="Seçiniz" />
          </div>

          {/* FİYAT */}
          <SectionTitle>FİYAT (TL)</SectionTitle>

          <div className="mx-3 mb-2">
            <RangeInputs leftPlaceholder="Min" rightPlaceholder="Max" />
          </div>

          {/* YIL */}
          <SectionTitle>YIL</SectionTitle>

          <div className="mx-3 mb-2">
            <RangeInputs leftPlaceholder="Min Yıl" rightPlaceholder="Max Yıl" />
          </div>

          {/* KM */}
          <SectionTitle>KİLOMETRE</SectionTitle>

          <div className="mx-3 mb-2">
            <RangeInputs leftPlaceholder="Min KM" rightPlaceholder="Max KM" />
          </div>

          {/* KİMDEN */}
          <SectionTitle>KİMDEN</SectionTitle>

          <div className="d-flex gap-2 px-3 pb-3 pt-1">
            {["Tümü", "Sahibinden", "Galeriden"].map((opt) => (
              <button
                key={opt}
                className="btn rounded-pill px-3 py-2 fw-semibold"
                style={{
                  fontSize: 13.5,
                  border:
                    kimden === opt
                      ? "2px solid #e8a800"
                      : "1.5px solid #ddd",
                  background: kimden === opt ? "#fffbe6" : "#fff",
                  color: kimden === opt ? "#e8a800" : "#555",
                }}
                onClick={() => setKimden(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="position-absolute bottom-0 start-0 end-0 px-3 py-3 bg-white border-top">
          <button
            className="btn w-100 fw-bold py-3 rounded-3"
            style={{
              background:
                "linear-gradient(135deg, #f5c842 0%, #e8a800 100%)",
              border: "none",
              fontSize: 15.5,
              color: "#fff",
            }}
          >
            Sonuçları Göster (1.240 İlan)
          </button>
        </div>
      </div>
    </div>
  );
};

export default VastaFiltrelemeSayfas;