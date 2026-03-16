import { useState } from "react";

type NavItemProps = {
  icon: string;
  label: string;
  active: boolean;
};

type BadgePillProps = {
  label: string;
  color: string;
};

type ListingItem = {
  id: number;
  title: string;
  price: string | null;
  year: string | null;
  km: string | null;
  transmission: string | null;
  location: string | null;
  badges: string[];
  badgeColors: string[];
  image: string | null;
  isAd?: boolean;
};

type ListingCardProps = {
  item: ListingItem;
};

const listings: ListingItem[] = [
  {
    id: 1,
    title: "2022 Volkswagen Golf 1.5 eTSI R-Line",
    price: "1.450.000 TL",
    year: "2022",
    km: "15.000 km",
    transmission: "Otomatik",
    location: "İstanbul, Kadıköy",
    badges: ["ACİL", "PREMIUM"],
    badgeColors: ["danger", "warning"],
    image: "https://placehold.co/600x320/e8edf2/6c757d?text=2022+VW+Golf",
  },
  {
    id: 2,
    title: "2020 BMW 320i Sedan Sport Line",
    price: "2.150.000 TL",
    year: "2020",
    km: "42.500 km",
    transmission: "Otomatik",
    location: "Ankara, Çankaya",
    badges: [],
    badgeColors: [],
    image: "https://placehold.co/600x320/e8edf2/6c757d?text=2020+BMW+320i",
  },
  {
    id: 3,
    title: "2021 Peugeot 3008 1.5 BlueHDi GT",
    price: "1.875.000 TL",
    year: "2021",
    km: "28.000 km",
    transmission: "Tam Otomatik",
    location: "İzmir, Bornova",
    badges: ["FIRSAT"],
    badgeColors: ["success"],
    image: "https://placehold.co/600x320/e8edf2/6c757d?text=2021+Peugeot+3008",
  },
  {
    id: 4,
    title: "Reklam Alanı",
    price: null,
    year: null,
    km: null,
    transmission: null,
    location: null,
    badges: ["YENİ"],
    badgeColors: ["warning"],
    isAd: true,
    image: null,
  },
];

const NavItem = ({ icon, label, active }: NavItemProps) => (
  <div className="d-flex flex-column align-items-center" style={{ cursor: "pointer", minWidth: 48 }}>
    <span style={{ fontSize: 22, color: active ? "#f5a623" : "#adb5bd" }}>{icon}</span>
    <span style={{ fontSize: 11, color: active ? "#f5a623" : "#adb5bd", marginTop: 2 }}>{label}</span>
  </div>
);

const BadgePill = ({ label, color }: BadgePillProps) => {
  const colorMap: Record<string, { bg: string; text: string }> = {
    danger: { bg: "#e63946", text: "#fff" },
    warning: { bg: "#f5a623", text: "#fff" },
    success: { bg: "#2a9d8f", text: "#fff" },
  };

  const c = colorMap[color] || { bg: "#6c757d", text: "#fff" };

  return (
    <span
      className="me-1"
      style={{
        background: c.bg,
        color: c.text,
        borderRadius: 6,
        padding: "2px 9px",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 0.5,
      }}
    >
      {label}
    </span>
  );
};

const ListingCard = ({ item }: ListingCardProps) => {
  const [saved, setSaved] = useState(false);

  if (item.isAd) {
    return (
      <div
        className="mb-3 rounded-3 overflow-hidden position-relative"
        style={{ background: "#f1f3f5", border: "1px solid #dee2e6" }}
      >
        {item.badges.length > 0 && (
          <div className="position-absolute top-0 start-0 m-2" style={{ zIndex: 2 }}>
            {item.badges.map((b, i) => (
              <BadgePill key={i} label={b} color={item.badgeColors[i]} />
            ))}
          </div>
        )}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: 200, color: "#adb5bd", fontSize: 16, fontWeight: 500 }}
        >
          300×300
        </div>
      </div>
    );
  }

  return (
    <div
      className="mb-3 rounded-3 overflow-hidden"
      style={{
        background: "#fff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        border: "1px solid #f0f0f0",
        cursor: "pointer",
      }}
    >
      <div className="position-relative">
        <img
          src={item.image || ""}
          alt={item.title}
          className="w-100"
          style={{ height: 200, objectFit: "cover", display: "block" }}
        />

        {item.badges.length > 0 && (
          <div className="position-absolute top-0 start-0 m-2">
            {item.badges.map((b, i) => (
              <BadgePill key={i} label={b} color={item.badgeColors[i]} />
            ))}
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            setSaved(!saved);
          }}
          className="position-absolute top-0 end-0 m-2 border-0 bg-transparent p-0"
          style={{ fontSize: 20, color: saved ? "#e63946" : "#ced4da", lineHeight: 1 }}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>

      <div className="px-3 pt-2 pb-3">
        <p className="mb-1" style={{ fontSize: 15, fontWeight: 600 }}>
          {item.title}
        </p>

        <p className="mb-2" style={{ fontSize: 17, fontWeight: 700, color: "#f5a623" }}>
          {item.price}
        </p>

        <div className="d-flex flex-wrap gap-2">
          <span style={{ fontSize: 13 }}>📅 {item.year}</span>
          <span style={{ fontSize: 13 }}>🛣️ {item.km}</span>
          <span style={{ fontSize: 13 }}>⚙️ {item.transmission}</span>
          <span style={{ fontSize: 13 }}>📍 {item.location}</span>
        </div>
      </div>
    </div>
  );
};

const VastaIlanListesi = () => {
  const [activeTab, setActiveTab] = useState("anasayfa");

  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{ minHeight: "100vh", background: "#f4f6f8" }}
    >
      <div
        className="d-flex flex-column position-relative"
        style={{
          width: "100%",
          maxWidth: 430,
          minHeight: "100vh",
          background: "#f4f6f8",
        }}
      >
        <div className="px-3 py-2" style={{ background: "#fff" }}>
          <span style={{ fontSize: 16, fontWeight: 600 }}>Asım Boray Sulakcı</span>
        </div>

        <div className="px-3 pb-5" style={{ overflowY: "auto", flex: 1 }}>
          {listings.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>

        <div className="d-flex justify-content-around py-2" style={{ background: "#fff" }}>
          <NavItem icon="🏠" label="Anasayfa" active={activeTab === "anasayfa"} />
          <NavItem icon="⭐" label="Vitrin" active={activeTab === "vitrin"} />
          <NavItem icon="💬" label="Mesajlar" active={activeTab === "mesajlar"} />
          <NavItem icon="👤" label="Hesabım" active={activeTab === "hesabim"} />
        </div>
      </div>
    </div>
  );
};

export default VastaIlanListesi;