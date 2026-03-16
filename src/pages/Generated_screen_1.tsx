const  Generated_screen_1=()=> {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" />
      <style>{`
        body { background-color: #f0f0ee; font-family: 'Inter', sans-serif; }
        .hero { background: #F5C842; padding: 28px 0 22px; }
        .hero-title { font-size: 24px; font-weight: 800; color: #1a1100; }
        .hero-sub { font-size: 14px; color: #5a4400; margin-top: 4px; }
        .section-head { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: #555; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
        .card-panel { background: #fff; border-radius: 12px; padding: 20px; margin-bottom: 12px; border: 1px solid #e8e8e0; }
        .flow-group-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #bbb; margin-bottom: 8px; }
        .flow-box { background: #f5f5ee; border-radius: 6px; font-size: 12px; font-weight: 600; padding: 5px 12px; color: #333; display: inline-block; }
        .flow-box.highlight { background: #F5C842; color: #2a1a00; }
        .flow-box.highlight2 { background: #e8f4ff; color: #0056b3; border: 1px solid #b8d9f8; }
        .flow-arrow { color: #bbb; font-size: 13px; font-weight: 700; margin: 0 4px; }
        .integ-group-title { font-size: 13px; font-weight: 700; color: #1a1a1a; padding-bottom: 8px; border-bottom: 1px solid #f0f0e8; margin-bottom: 2px; }
        .integ-row { display: flex; align-items: center; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid #f8f8f4; }
        .integ-row:last-child { border-bottom: none; }
        .integ-label { font-size: 12px; color: #555; }
        .integ-val { font-size: 11px; color: #e05; font-family: monospace; }
        .integ-val.blue { color: #0066cc; }
        .integ-val.gray { color: #888; }
        .tag { font-size: 9px; font-weight: 700; padding: 2px 7px; border-radius: 4px; letter-spacing: 0.5px; display: inline-block; }
        .tag-blue { background: #0d6efd; color: #fff; }
        .tag-green { background: #198754; color: #fff; }
        .tag-purple { background: #7c4dff; color: #fff; }
        .admin-card { background: #1e1e1e; border-radius: 12px; padding: 20px; }
        .step-badge { width: 30px; height: 30px; border-radius: 50%; background: #F5C842; color: #2a1a00; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .step-title { font-size: 13px; font-weight: 700; color: #F5C842; margin-bottom: 4px; }
        .step-desc { font-size: 12px; color: #aaa; line-height: 1.6; }
        .tech-card { background: #fff; border-radius: 12px; padding: 20px; border: 1px solid #e8e8e0; }
        .tech-item { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; font-size: 12px; color: #444; }
        .tech-item:last-child { margin-bottom: 0; }
        .tech-dot { width: 7px; height: 7px; border-radius: 50%; background: #F5C842; flex-shrink: 0; margin-top: 4px; }
        .footer-bar { font-size: 11px; color: #aaa; text-align: center; padding: 20px 0 28px; border-top: 1px solid #e8e8e0; margin-top: 8px; }
      `}</style>

      {/* HERO */}
      <div className="hero text-center">
        <div className="hero-title">Yazılımcı Entegrasyon Rehberi</div>
        <div className="hero-sub">Asım Boray Sulakcı — Marketplace App</div>
      </div>

      {/* PAGE BODY */}
      <div className="container py-4" style={{ maxWidth: 860 }}>

        {/* ── TEMEL AKIŞLAR ── */}
        <div className="section-head">
          <span style={{ color: "#E85B2A" }}>▲</span> Temel Akışlar (Sayfalar)
        </div>

        <div className="card-panel mb-4">
          {/* İlan Arama & Detay */}
          <div className="mb-4">
            <div className="flow-group-label">İlan Arama & Detay</div>
            <div className="d-flex align-items-center flex-wrap gap-1">
              <span className="flow-box">Ana Sayfa</span>
              <span className="flow-arrow">→</span>
              <span className="flow-box">Kategori Listesi</span>
              <span className="flow-arrow">→</span>
              <span className="flow-box highlight">İlan Detay</span>
            </div>
          </div>

          {/* Mağaza Yönetimi */}
          <div className="mb-4">
            <div className="flow-group-label">Mağaza Yönetimi</div>
            <div className="d-flex align-items-center flex-wrap gap-1">
              <span className="flow-box">Profil</span>
              <span className="flow-arrow">→</span>
              <span className="flow-box">Mağaza Paneli</span>
              <span className="flow-arrow">→</span>
              <span className="flow-box highlight">İlan Yönetimi</span>
            </div>
          </div>

          {/* İletişim Akışı */}
          <div>
            <div className="flow-group-label">İletişim Akışı</div>
            <div className="d-flex align-items-center flex-wrap gap-1">
              <span className="flow-box">İlan Detay</span>
              <span className="flow-arrow">→</span>
              <span className="flow-box highlight2">Mesajlaşma / Arama</span>
            </div>
          </div>
        </div>

        {/* ── VERİ ENTEGRASYON NOKTALARI ── */}
        <div className="section-head">
          <span style={{ color: "#0d6efd" }}>■</span> Veri Entegrasyon Noktaları
        </div>

        <div className="card-panel mb-4">
          {/* İlan Verileri */}
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="integ-group-title">İlan Verileri</span>
            <span className="tag tag-blue">REST API</span>
          </div>
          <div className="integ-row"><span className="integ-label">Fiyat Bilgisi</span><span className="integ-val">price_decimal</span></div>
          <div className="integ-row"><span className="integ-label">Lokasyon</span><span className="integ-val blue">geo_lat_lng</span></div>
          <div className="integ-row mb-3"><span className="integ-label">Özellikler</span><span className="integ-val gray">m2, yıl, km, yakit</span></div>

          {/* Kullanıcı Profili */}
          <div className="d-flex align-items-center justify-content-between mb-2 mt-2">
            <span className="integ-group-title">Kullanıcı Profili</span>
            <span className="tag tag-green">OAUTH2</span>
          </div>
          <div className="integ-row"><span className="integ-label">Kimlik Doğrulama</span><span className="integ-val gray">Bearer Token</span></div>
          <div className="integ-row"><span className="integ-label">Mağaza Durumu</span><span className="integ-val gray">is_vendor: bool</span></div>
          <div className="integ-row mb-3"><span className="integ-label">Favoriler</span><span className="integ-val gray">saved_ids[]</span></div>

          {/* Ödeme Sistemleri */}
          <div className="d-flex align-items-center justify-content-between mb-2 mt-2">
            <span className="integ-group-title">Ödeme Sistemleri</span>
            <span className="tag tag-purple">İYZİCO/STRIPE</span>
          </div>
          <div className="integ-row"><span className="integ-label">Paket ID'leri</span><span className="integ-val gray">listing_package_ids</span></div>
          <div className="integ-row"><span className="integ-label">Geri Dönüş</span><span className="integ-val gray">success/fail_callback</span></div>
        </div>

        {/* ── ADMİN & ONAY MEKANİZMASI ── */}
        <div className="section-head">
          <span style={{ color: "#F5C842" }}>◆</span> Admin & Onay Mekanizması
        </div>

        <div className="admin-card mb-4">
          <div className="d-flex flex-column gap-4">
            {/* Step 01 */}
            <div className="d-flex align-items-start gap-3">
              <div className="step-badge">01</div>
              <div>
                <div className="step-title">Onay İş Akışı</div>
                <div className="step-desc">
                  Yeni ilanlar varsayılan olarak 'Beklemede' statüsünde açılır. Admin paneli üzerinden 'Onaylandı' veya 'Reddedildi' açıklama zorunlu olarak güncellenir.
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="d-flex align-items-start gap-3">
              <div className="step-badge">02</div>
              <div>
                <div className="step-title">Analitik Veri Kaynağı</div>
                <div className="step-desc">
                  Firebase Analytics ve dahili DB günlükleri üzerinden günlük aktif kullanıcı (DAU) ve ilan dönüşüm oranları takip edilir.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TEKNİK NOTLAR ── */}
        <div className="section-head">
          <span>🔧</span> Teknik Notlar & Kısıtlamalar
        </div>

        <div className="tech-card mb-4">
          <div className="tech-item">
            <div className="tech-dot mt-1" />
            <div><strong>Ana Renk:</strong> #F5C107 (Primary Yellow)</div>
          </div>
          <div className="tech-item">
            <div className="tech-dot mt-1" />
            <div><strong>Font Ailesi:</strong> Modern Sans-serif (Inter/Roboto)</div>
          </div>
          <div className="tech-item">
            <div className="tech-dot mt-1" />
            <div><strong>Kategori Kısıtı:</strong> Sadece "Emlak" ve "Vasıta" kategorilerine izin verilir.</div>
          </div>
          <div className="tech-item">
            <div className="tech-dot mt-1" />
            <div><strong>Responsive:</strong> Mobile-first yaklaşımı zorunludur. (iOS & Android uyumlu)</div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer-bar">
          © 2024 Asım Boray Sulakcı Marketplace Infrastructure. Tüm hakları saklıdır.
        </div>

      </div>
    </>
  );
}
export default Generated_screen_1 