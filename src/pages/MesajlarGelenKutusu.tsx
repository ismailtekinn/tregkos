import { useState } from "react";

type Mesaj = {
  id: number;
  isim: string;
  mesaj: string;
  saat: string;
  okunmadi: number;
  avatar: string;
  avatarBg: string;
  online: boolean;
};

const aliciMesajlar: Mesaj[] = [
  {
    id: 1,
    isim: "Ahmet Yılmaz",
    mesaj: "Daire hala kiralık mı? Hafta sonu b...",
    saat: "14:30",
    okunmadi: 2,
    avatar: "AY",
    avatarBg: "#f4a261",
    online: true,
  },
  {
    id: 2,
    isim: "Zeynep Demir",
    mesaj: "Teklifinizi değerlendiriyorum, en kı...",
    saat: "10:15",
    okunmadi: 0,
    avatar: "ZD",
    avatarBg: "#8ecae6",
    online: false,
  },
  {
    id: 3,
    isim: "Caner Özkan",
    mesaj: "Tapu işlemleri için belgeleri hazırla...",
    saat: "Dün",
    okunmadi: 1,
    avatar: "CÖ",
    avatarBg: "#457b9d",
    online: true,
  },
  {
    id: 4,
    isim: "Meltem Kılıç",
    mesaj: "İlan fiyatında bir indirim düşünür m...",
    saat: "2 gün önce",
    okunmadi: 0,
    avatar: "MK",
    avatarBg: "#a8dadc",
    online: false,
  },
];

const saticiMesajlar: Mesaj[] = [
  {
    id: 5,
    isim: "Kemal Arslan",
    mesaj: "Evin anahtarını teslim etmek için...",
    saat: "09:00",
    okunmadi: 3,
    avatar: "KA",
    avatarBg: "#e76f51",
    online: true,
  },
  {
    id: 6,
    isim: "Seda Çelik",
    mesaj: "Fiyat konusunda anlaşabiliriz san...",
    saat: "Dün",
    okunmadi: 0,
    avatar: "SÇ",
    avatarBg: "#b5838d",
    online: false,
  },
];

type AvatarProps = {
  initials: string;
  bg: string;
  online: boolean;
};

const AvatarIcon: React.FC<AvatarProps> = ({ initials, bg, online }) => {
  return (
    <div className="position-relative me-3 flex-shrink-0">
      <div
        className="rounded-circle d-flex align-items-center justify-content-center fw-semibold text-white"
        style={{
          width: 52,
          height: 52,
          background: bg,
          fontSize: "0.95rem",
          letterSpacing: "0.03em",
        }}
      >
        {initials}
      </div>

      {online && (
        <span
          className="position-absolute rounded-circle border border-2 border-white bg-success"
          style={{ width: 13, height: 13, bottom: 1, right: 1 }}
        />
      )}
    </div>
  );
};

type MesajItemProps = {
  item: Mesaj;
};

const MesajItem: React.FC<MesajItemProps> = ({ item }) => {
  return (
    <div
      className="d-flex align-items-center px-3 py-3 border-bottom"
      style={{ cursor: "pointer", transition: "background 0.15s" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafa")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <AvatarIcon
        initials={item.avatar}
        bg={item.avatarBg}
        online={item.online}
      />

      <div className="flex-grow-1 overflow-hidden">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="fw-semibold text-dark" style={{ fontSize: "0.93rem" }}>
            {item.isim}
          </span>

          <span
            className="text-muted"
            style={{ fontSize: "0.75rem", whiteSpace: "nowrap", marginLeft: 8 }}
          >
            {item.saat}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <span
            className="text-muted text-truncate"
            style={{ fontSize: "0.82rem", maxWidth: 200 }}
          >
            {item.mesaj}
          </span>

          {item.okunmadi > 0 ? (
            <span
              className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold ms-2 flex-shrink-0"
              style={{
                background: "#f5c518",
                width: 22,
                height: 22,
                fontSize: "0.7rem",
              }}
            >
              {item.okunmadi}
            </span>
          ) : (
            <span className="ms-2 flex-shrink-0" style={{ color: "#aaa" }}>
              ✓✓
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const MesajlarGelenKutusu: React.FC = () => {
  const [aktifTab, setAktifTab] = useState<"alici" | "satici">("alici");

  const mesajlar = aktifTab === "alici" ? aliciMesajlar : saticiMesajlar;

  return (
    <div
      className="d-flex flex-column bg-white"
      style={{
        minHeight: "100vh",
        maxWidth: 480,
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <div className="px-3 pt-4 pb-2 border-bottom">
        <h5 className="fw-bold">Mesajlar</h5>
      </div>

      <div className="d-flex border-bottom">
        <button
          className="btn flex-fill"
          onClick={() => setAktifTab("alici")}
        >
          Alıcı
        </button>

        <button
          className="btn flex-fill"
          onClick={() => setAktifTab("satici")}
        >
          Satıcı
        </button>
      </div>

      <div className="flex-grow-1 overflow-auto">
        {mesajlar.map((item) => (
          <MesajItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MesajlarGelenKutusu;