import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const konumlar = [
  "İstanbul, Beşiktaş",
  "İstanbul, Kadıköy",
  "İstanbul, Şişli",
  "Ankara, Çankaya",
  "İzmir, Konak",
];

const konutTipleri = ["Daire", "Villa", "Arsa", "Rezidans"];
const odaSayilari = ["1+0", "1+1", "2+1", "3+1", "4+1", "5+"];
const binaYaslari = ["0-5 Yaş", "5-10 Yaş", "10-15 Yaş", "15-20 Yaş"];

const Filtreleme_sayfasi_tr = () => {
  const [emlakTipi, setEmlakTipi] = useState("Satılık");
  const [konum, setKonum] = useState("İstanbul, Beşiktaş");
  const [minFiyat, setMinFiyat] = useState("");
  const [maxFiyat, setMaxFiyat] = useState("");
  const [konutTipi, setKonutTipi] = useState("Villa");
  const [oda, setOda] = useState("2+1");
  const [minM2, setMinM2] = useState("");
  const [maxM2, setMaxM2] = useState("");
  const [binaYasi, setBinaYasi] = useState(["10-15 Yaş"]);

  const toggleBinaYasi = (y: string) =>
    setBinaYasi((prev) =>
      prev.includes(y) ? prev.filter((b) => b !== y) : [...prev, y]
    );

  const temizle = () => {
    setEmlakTipi("Satılık");
    setKonum("İstanbul, Beşiktaş");
    setMinFiyat("");
    setMaxFiyat("");
    setKonutTipi("");
    setOda("");
    setMinM2("");
    setMaxM2("");
    setBinaYasi([]);
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        body { background-color: #f4f4f4; }
        .page-wrapper { max-width: 430px; min-height: 100vh; background-color: #f4f4f4; }
        .section-card { background: #fff; border-radius: 14px; padding: 18px; margin-bottom: 12px; }
        .section-title { font-size: 15px; font-weight: 700; color: #1a1a1a; margin-bottom: 14px; }

        .emlak-tab { border-radius: 10px; font-size: 14px; font-weight: 600; border: none; padding: 10px 0; }
        .emlak-tab.active { background: #fff; color: #E85B2A; box-shadow: 0 1px 6px rgba(0,0,0,0.1); }
        .emlak-tab.inactive { background: transparent; color: #888; }
        .emlak-tabs-bg { background: #f0f0f0; border-radius: 12px; padding: 4px; }

        .chip { border-radius: 20px; font-size: 13px; font-weight: 500; padding: 7px 18px; cursor: pointer; border: 1.5px solid #e0e0e0; background: #fff; color: #444; transition: all 0.15s; }
        .chip.active { background: #E85B2A; color: #fff; border-color: #E85B2A; font-weight: 700; }
        .chip:hover:not(.active) { border-color: #E85B2A; color: #E85B2A; }

        .oda-chip { border-radius: 50%; width: 46px; height: 46px; font-size: 12px; font-weight: 600; cursor: pointer; border: 1.5px solid #e0e0e0; background: #fff; color: #444; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
        .oda-chip.active { background: #E85B2A; color: #fff; border-color: #E85B2A; }
        .oda-chip:hover:not(.active) { border-color: #E85B2A; color: #E85B2A; }

        .filter-input { background: #f7f7f7; border: 1px solid #e8e8e8; border-radius: 10px; font-size: 13px; color: #444; padding: 10px 14px; width: 100%; outline: none; }
        .filter-input:focus { border-color: #E85B2A; }
        .filter-input::placeholder { color: #bbb; }

        .input-suffix { font-size: 12px; color: #bbb; position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; }

        .filter-select { background: #f7f7f7; border: 1px solid #e8e8e8; border-radius: 10px; font-size: 14px; color: #444; padding: 11px 14px; width: 100%; appearance: none; outline: none; cursor: pointer; }
        .filter-select:focus { border-color: #E85B2A; }

        .select-wrap { position: relative; }
        .select-arrow { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); pointer-events: none; }

        .bina-checkbox { width: 20px; height: 20px; border-radius: 5px; border: 2px solid #ddd; accent-color: #E85B2A; cursor: pointer; flex-shrink: 0; }

        .btn-temizle { background: transparent; border: none; color: #1a1a1a; font-size: 15px; font-weight: 600; padding: 14px 0; }
        .btn-goster { background: #E85B2A; border: none; border-radius: 14px; color: #fff; font-size: 15px; font-weight: 700; padding: 14px 0; flex: 1; }

        .bottom-bar { background: #fff; border-top: 1px solid #eee; padding: 12px 20px 24px; }
      `}</style>

      <div className="page-wrapper mx-auto d-flex flex-column">

        <div className="bg-white border-bottom px-3 py-3 d-flex align-items-center justify-content-between sticky-top">
          <button className="btn btn-link p-0 text-dark text-decoration-none">
            <X size={20} />
          </button>
          <span className="fw-bold text-dark" style={{ fontSize: 17 }}>Filtrele</span>
          <button className="btn btn-link p-0 text-decoration-none fw-semibold" style={{ color: "#E85B2A", fontSize: 14 }} onClick={temizle}>
            Temizle
          </button>
        </div>

        <div className="flex-grow-1 overflow-auto px-3 pt-3" style={{ paddingBottom: 100 }}>

          <div className="section-card">
            <div className="section-title">Emlak Tipi</div>
            <div className="emlak-tabs-bg d-flex">
              {["Satılık", "Kiralık"].map((t) => (
                <button
                  key={t}
                  className={`emlak-tab flex-fill ${emlakTipi === t ? "active" : "inactive"}`}
                  onClick={() => setEmlakTipi(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="section-card">
            <div className="section-title">Konum Seçin</div>
            <div className="select-wrap">
              <select className="filter-select" value={konum} onChange={(e) => setKonum(e.target.value)}>
                {konumlar.map((k) => (
                  <option key={k} value={k}>{k}</option>
                ))}
              </select>
              <span className="select-arrow"><ChevronDown size={16} color="#aaa" /></span>
            </div>
          </div>

          <div className="section-card">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span className="section-title mb-0">Fiyat Aralığı</span>
              <span className="fw-semibold" style={{ color: "#E85B2A", fontSize: 13 }}>TL</span>
            </div>

            <div className="d-flex gap-2">
              <input className="filter-input" type="number" placeholder="Min. Fiyat" value={minFiyat} onChange={(e) => setMinFiyat(e.target.value)} />
              <input className="filter-input" type="number" placeholder="Max. Fiyat" value={maxFiyat} onChange={(e) => setMaxFiyat(e.target.value)} />
            </div>
          </div>

          <div className="section-card">
            <div className="section-title">Konut Tipi</div>
            <div className="d-flex flex-wrap gap-2">
              {konutTipleri.map((k) => (
                <button key={k} className={`chip ${konutTipi === k ? "active" : ""}`} onClick={() => setKonutTipi(k)}>
                  {k}
                </button>
              ))}
            </div>
          </div>

          <div className="section-card">
            <div className="section-title">Oda Sayısı</div>
            <div className="d-flex gap-2 flex-wrap">
              {odaSayilari.map((o) => (
                <button key={o} className={`oda-chip ${oda === o ? "active" : ""}`} onClick={() => setOda(o)}>
                  {o}
                </button>
              ))}
            </div>
          </div>

          <div className="section-card">
            <div className="section-title">Metrekare (m²)</div>
            <div className="d-flex gap-2">
              <input className="filter-input" type="number" placeholder="Minimum" value={minM2} onChange={(e) => setMinM2(e.target.value)} />
              <input className="filter-input" type="number" placeholder="Maksimum" value={maxM2} onChange={(e) => setMaxM2(e.target.value)} />
            </div>
          </div>

          <div className="section-card">
            <div className="section-title">Bina Yaşı</div>
            <div className="row g-3">
              {binaYaslari.map((y) => (
                <div key={y} className="col-6">
                  <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: 14 }}>
                    <input type="checkbox" className="bina-checkbox" checked={binaYasi.includes(y)} onChange={() => toggleBinaYasi(y)} />
                    {y}
                  </label>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="bottom-bar d-flex align-items-center gap-3 position-fixed bottom-0"
          style={{ maxWidth: 430, width: "100%", left: "50%", transform: "translateX(-50%)", zIndex: 100 }}>
          <button className="btn-temizle px-3" onClick={temizle}>Temizle</button>
          <button className="btn-goster">Sonuçları Göster</button>
        </div>

      </div>
    </>
  );
};

export default Filtreleme_sayfasi_tr;