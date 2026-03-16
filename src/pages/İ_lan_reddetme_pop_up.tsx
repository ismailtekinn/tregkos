import { useState } from "react";

type İlanReddetmePopUpProps = {
  onClose?: () => void;
  onSubmit?: (data: { reason?: string; aciklama: string }) => void;
};

const İlanReddetmePopUp = ({ onClose, onSubmit }: İlanReddetmePopUpProps) => {
  const REJECTION_REASONS = [
    { id: "hatali_kategori", label: "Hatalı Kategori Seçimi" },
    { id: "eksik_bilgi", label: "Eksik veya Hatalı Bilgi" },
    { id: "dusuk_fotograf", label: "Düşük Kaliteli Fotoğraflar" },
    { id: "fiyat_gercekci_degil", label: "Fiyat Bilgisi Gerçekçi Değil" },
    { id: "iletisim_bilgisi", label: "İletişim Bilgisi İçeriyor" },
    { id: "diger", label: "Diğer (Açıklayınız)" },
  ];

  const [selectedReason, setSelectedReason] = useState("hatali_kategori");
  const [aciklama, setAciklama] = useState("");

  const handleSubmit = () => {
    const reason = REJECTION_REASONS.find((r) => r.id === selectedReason);
    if (onSubmit) {
      onSubmit({ reason: reason?.label, aciklama });
    } else {
      alert(`Reddedildi: ${reason?.label}${aciklama ? "\nAçıklama: " + aciklama : ""}`);
    }
  };

  return (
    <div
      className="modal d-flex align-items-end align-items-sm-center justify-content-center"
      style={{ display: "flex !important", backgroundColor: "rgba(0,0,0,0.4)", minHeight: "100vh" }}
    >
      <div
        className="bg-white rounded-4 w-100 p-4"
        style={{ maxWidth: 420, borderBottomLeftRadius: "0 !important", borderBottomRightRadius: "0 !important" }}
      >
        {/* Drag Handle */}
        <div className="d-flex justify-content-center mb-3">
          <div
            className="bg-secondary rounded-pill"
            style={{ width: 40, height: 4, opacity: 0.3 }}
          />
        </div>

        {/* Title */}
        <h5 className="fw-bold mb-1" style={{ fontSize: "1.1rem" }}>
          İlanı Reddet
        </h5>
        <p className="text-muted mb-3" style={{ fontSize: "0.85rem" }}>
          Lütfen reddetme nedenini seçin veya belirtin.
        </p>

        {/* Radio Options */}
        <div className="d-flex flex-column gap-2 mb-3">
          {REJECTION_REASONS.map((reason) => {
            const isSelected = selectedReason === reason.id;
            return (
              <div
                key={reason.id}
                onClick={() => setSelectedReason(reason.id)}
                className="d-flex align-items-center px-3 py-2 rounded-3"
                style={{
                  cursor: "pointer",
                  border: isSelected ? "1.5px solid #F5A623" : "1.5px solid #e0e0e0",
                  backgroundColor: isSelected ? "#FFF8EC" : "#fff",
                  transition: "all 0.15s ease",
                }}
              >
                {/* Custom Radio */}
                <div
                  className="me-3 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: 20,
                    height: 20,
                    border: isSelected ? "2px solid #F5A623" : "2px solid #ccc",
                    backgroundColor: "#fff",
                    transition: "all 0.15s ease",
                  }}
                >
                  {isSelected && (
                    <div
                      className="rounded-circle"
                      style={{ width: 10, height: 10, backgroundColor: "#F5A623" }}
                    />
                  )}
                </div>
                <span
                  className="fw-medium"
                  style={{
                    fontSize: "0.875rem",
                    color: isSelected ? "#1a1a1a" : "#555",
                  }}
                >
                  {reason.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Optional Explanation */}
        <div className="mb-4">
          <label
            className="form-label fw-semibold"
            style={{ fontSize: "0.85rem", color: "#333" }}
          >
            Ek Açıklama (Opsiyonel)
          </label>
          <textarea
            className="form-control rounded-3"
            rows={3}
            placeholder="Lütfen detaylı bilgi giriniz..."
            value={aciklama}
            onChange={(e) => setAciklama(e.target.value)}
            style={{
              fontSize: "0.85rem",
              border: "1.5px solid #e0e0e0",
              resize: "none",
              outline: "none",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="d-flex flex-column gap-2">
          <button
            className="btn btn-light w-100 fw-semibold rounded-3 py-2"
            style={{
              border: "1.5px solid #e0e0e0",
              color: "#333",
              fontSize: "0.95rem",
            }}
            onClick={onClose}
          >
            Vazgeç
          </button>
          <button
            className="btn w-100 fw-bold rounded-3 py-2"
            style={{
              backgroundColor: "#F5A623",
              color: "#fff",
              fontSize: "0.95rem",
              border: "none",
            }}
            onClick={handleSubmit}
          >
            İlanı Reddet ve Bildir
          </button>
        </div>
      </div>
    </div>
  );
};

export default İlanReddetmePopUp;