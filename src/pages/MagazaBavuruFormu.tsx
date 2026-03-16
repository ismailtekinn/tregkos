import { useState } from "react";

const MagazaBavuruFormu = () => {
  const [kategori, setKategori] = useState<string>("emlak");

  const [form, setForm] = useState({
    magazaAdi: "",
    vergiNo: "",
    vergiDairesi: "",
    adSoyad: "",
    unvan: "",
    sehir: "",
    tamAdres: "",
    kvkk: false,
  });

  const [dosya, setDosya] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDosya = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDosya(e.target.files[0]);
    }
  };

  const kategoriler = [
    { id: "emlak", label: "Emlak Ofisi", ikon: "🏠" },
    { id: "oto", label: "Oto Galeri", ikon: "🚗" },
  ];

  const sehirler = [
    "İstanbul",
    "Ankara",
    "İzmir",
    "Bursa",
    "Antalya",
    "Adana",
    "Konya",
    "Gaziantep",
    "Mersin",
    "Kayseri",
  ];

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-start py-4"
      style={{ background: "#f5f4ef" }}
    >
      <div className="bg-white rounded-4 shadow-sm w-100" style={{ maxWidth: 430 }}>

        {/* Header */}
        <div className="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom bg-white rounded-top-4">
          <button className="btn btn-link text-dark p-0 text-decoration-none fs-5">
            ←
          </button>

          <span className="fw-semibold fs-6">Mağaza Başvurusu</span>

          <button className="btn btn-link p-0" style={{ color: "#FFD600" }}>
            ℹ
          </button>
        </div>

        <div className="px-3 pb-4">

          {/* Progress */}
          <div className="pt-3 pb-2">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <div>
                <span className="text-muted" style={{ fontSize: "0.72rem" }}>
                  ADIM 1/5
                </span>
                <div className="fw-bold">İşletme Bilgileri</div>
              </div>
              <span className="text-muted">20% Tamamlandı</span>
            </div>

            <div className="rounded-pill overflow-hidden" style={{ height: 5, background: "#e9ecef" }}>
              <div style={{ width: "20%", height: "100%", background: "#FFD600" }} />
            </div>
          </div>

          {/* Mağaza Adı */}
          <div className="mt-3">
            <label className="form-label">Mağaza Adı</label>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Örn: Boray Gayrimenkul"
              name="magazaAdi"
              value={form.magazaAdi}
              onChange={handleChange}
            />

            {/* Kategori */}
            <div className="d-flex gap-2">
              {kategoriler.map((k) => (
                <button
                  key={k.id}
                  type="button"
                  className="btn flex-fill"
                  onClick={() => setKategori(k.id)}
                  style={{
                    border:
                      kategori === k.id
                        ? "2px solid #FFD600"
                        : "2px solid #e0e0e0",
                    background: kategori === k.id ? "#FFF9E0" : "#fafafa",
                  }}
                >
                  <div style={{ fontSize: 22 }}>{k.ikon}</div>
                  {k.label}
                </button>
              ))}
            </div>
          </div>

          <hr />

          {/* Vergi Bilgileri */}
          <div className="row g-2 mb-3">
            <div className="col-6">
              <label className="form-label">Vergi No</label>
              <input
                type="text"
                className="form-control"
                name="vergiNo"
                value={form.vergiNo}
                onChange={handleChange}
              />
            </div>

            <div className="col-6">
              <label className="form-label">Vergi Dairesi</label>
              <input
                type="text"
                className="form-control"
                name="vergiDairesi"
                value={form.vergiDairesi}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Dosya */}
          <div className="text-center border rounded p-4 mb-3">

            {dosya ? (
              <div>
                <span className="text-success">✔ {dosya.name}</span>

                <button
                  className="btn btn-link text-danger ms-2"
                  onClick={() => setDosya(null)}
                >
                  Kaldır
                </button>
              </div>
            ) : (
              <label className="btn btn-warning">
                Dosya Seç
                <input
                  type="file"
                  className="d-none"
                  onChange={handleDosya}
                />
              </label>
            )}
          </div>

          <hr />

          {/* Yetkili */}
          <label className="form-label">Ad Soyad</label>

          <input
            className="form-control mb-3"
            name="adSoyad"
            value={form.adSoyad}
            onChange={handleChange}
          />

          <label className="form-label">Unvan</label>

          <input
            className="form-control mb-3"
            name="unvan"
            value={form.unvan}
            onChange={handleChange}
          />

          <hr />

          {/* Adres */}
          <label className="form-label">Şehir</label>

          <select
            className="form-select mb-3"
            name="sehir"
            value={form.sehir}
            onChange={handleChange}
          >
            <option value="">Şehir Seçiniz</option>

            {sehirler.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <label className="form-label">Tam Adres</label>

          <textarea
            className="form-control mb-3"
            rows={3}
            name="tamAdres"
            value={form.tamAdres}
            onChange={handleChange}
          />

          {/* KVKK */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="kvkk"
              checked={form.kvkk}
              onChange={handleChange}
            />

            <label className="form-check-label">
              KVKK ve Kullanım Koşullarını kabul ediyorum
            </label>
          </div>

          {/* Butonlar */}
          <div className="d-flex gap-3">

            <button className="btn btn-outline-secondary flex-fill">
              Vazgeç
            </button>

            <button
              className="btn flex-fill"
              style={{ background: "#FFD600" }}
              disabled={!form.kvkk}
            >
              Sonraki Adım →
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazaBavuruFormu;