import React from "react";

const MagazaBasvuruDetay = () => {
  return (
    <div className="container py-3">

      {/* Başlık */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Mağaza Başvuru Detayı</h5>
        <span className="badge bg-warning text-dark">BEKLEMEDE</span>
      </div>

      {/* Mağaza Kartı */}
      <div className="card mb-3">
        <div className="card-body">

          <div className="d-flex align-items-center mb-3">
            <div className="bg-warning rounded-circle d-flex justify-content-center align-items-center me-3"
              style={{ width: "50px", height: "50px" }}>
              🏪
            </div>

            <div>
              <h6 className="mb-0">Asım Boray Sulakcı</h6>
              <small className="text-muted">
                Emlak ve Gayrimenkul Danışmanlığı
              </small>
            </div>
          </div>

          <hr />

          <div className="row mb-2">
            <div className="col-6 text-muted small">Başvuru Tarihi</div>
            <div className="col-6 text-end">12 Eylül 2023, 14:30</div>
          </div>

          <div className="row">
            <div className="col-6 text-muted small">Kategori</div>
            <div className="col-6 text-end text-warning">Emlak</div>
          </div>

        </div>
      </div>

      {/* Mağaza Açıklaması */}
      <div className="mb-3">
        <h6 className="text-secondary">MAĞAZA AÇIKLAMASI</h6>

        <div className="card">
          <div className="card-body small">
            Lüks konut ve ticari gayrimenkul danışmanlığı. 10 yıllık sektör
            tecrübesiyle İstanbul Avrupa yakasında butik hizmet sağlamaktayız.
          </div>
        </div>
      </div>

      {/* Kurumsal Bilgiler */}
      <div className="mb-3">
        <h6 className="text-secondary">KURUMSAL VE VERGİ BİLGİLERİ</h6>

        <div className="card">
          <div className="card-body small">

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Ticari Ünvan</span>
              <span>Asım Boray Sulakcı Gayrimenkul Ltd. Şti.</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Vergi Numarası</span>
              <span>9827364510</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Vergi Dairesi</span>
              <span>Maslak Vergi Dairesi</span>
            </div>

            <div className="d-flex justify-content-between">
              <span className="text-muted">Yetkili Kişi</span>
              <span>Asım Boray Sulakcı</span>
            </div>

          </div>
        </div>
      </div>

      {/* Adres */}
      <div className="mb-3">
        <h6 className="text-secondary">ADRES BİLGİLERİ</h6>

        <div className="card">
          <div className="card-body small">

            <div className="mb-2">
              <strong>İstanbul, Sarıyer</strong>
            </div>

            <div className="text-muted mb-3">
              Maslak Mah. AOS 55. Sokak 42 Maslak Plaza No:2 D:14
            </div>

            <img
              src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
              className="img-fluid rounded"
              alt="map"
            />

          </div>
        </div>
      </div>

      {/* Belgeler */}
      <div className="mb-4">
        <h6 className="text-secondary">YÜKLENEN BELGELER</h6>

        <div className="card mb-2">
          <div className="card-body d-flex justify-content-between align-items-center">

            <div>
              <strong>Mesleki Yetki Belgesi</strong>
              <div className="small text-muted">2.4 MB · PDF</div>
            </div>

            <button className="btn btn-outline-warning btn-sm">
              Gör
            </button>

          </div>
        </div>

        <div className="card">
          <div className="card-body d-flex justify-content-between align-items-center">

            <div>
              <strong>Vergi Levhası</strong>
              <div className="small text-muted">1.1 MB · JPG</div>
            </div>

            <button className="btn btn-outline-warning btn-sm">
              Gör
            </button>

          </div>
        </div>
      </div>

      {/* Alt Butonlar */}
      <div className="d-flex gap-2">

        <button className="btn btn-outline-secondary w-50">
          Reddet
        </button>

        <button className="btn btn-warning w-50">
          Onayla
        </button>

      </div>

    </div>
  );
};

export default MagazaBasvuruDetay;