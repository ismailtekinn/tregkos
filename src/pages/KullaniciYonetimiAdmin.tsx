import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    type: "Bireysel",
    status: "Aktif",
    email: "ahmet@example.com",
    phone: "0532 111 22 33",
    avatar: "AY",
    avatarColor: "#f39c12",
  },
  {
    id: 2,
    name: "Zeynep Kaya",
    type: "Kurumsal",
    status: "Aktif",
    email: "zeynep@example.com",
    phone: "0533 222 33 44",
    avatar: "ZK",
    avatarColor: "#8e44ad",
  },
  {
    id: 3,
    name: "Mehmet Özkan",
    type: "Bireysel",
    status: "Engellenmiş",
    email: "mehmet@example.com",
    phone: "0534 333 44 55",
    avatar: "MÖ",
    avatarColor: "#2ecc71",
  },
  {
    id: 4,
    name: "Elif Demir",
    type: "Kurumsal",
    status: "Aktif",
    email: "elif@example.com",
    phone: "0535 444 55 66",
    avatar: "ED",
    avatarColor: "#e74c3c",
  },
  {
    id: 5,
    name: "Caner Aras",
    type: "Bireysel",
    status: "Aktif",
    email: "caner@example.com",
    phone: "0536 555 66 77",
    avatar: "CA",
    avatarColor: "#3498db",
  },
];

const NAV_ITEMS = [
  { icon: "bi-grid", label: "Panel", key: "panel" },
  { icon: "bi-people", label: "Kullanıcılar", key: "users" },
  { icon: "bi-tag", label: "İlanlar", key: "listings" },
  { icon: "bi-arrow-left-right", label: "İşlemler", key: "transactions" },
  { icon: "bi-gear", label: "Ayarlar", key: "settings" },
];

const KullaniciYonetimiAdmin = () => {
  const [activeNav, setActiveNav] = useState("users");
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [userList, setUserList] = useState(users);

  const filters = ["Tümü", "Bireysel", "Kurumsal"];

  const filtered = userList.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.phone.includes(search);

    const matchFilter =
      activeFilter === "Tümü" || u.type === activeFilter;

    return matchSearch && matchFilter;
  });

  const visible = filtered.slice(0, visibleCount);

  const handleAction = (action: string, userId: number) => {
    setOpenMenuId(null);

    if (action === "block") {
      setUserList((prev) =>
        prev.map((u) =>
          u.id === userId
            ? {
                ...u,
                status:
                  u.status === "Engellenmiş"
                    ? "Aktif"
                    : "Engellenmiş",
              }
            : u
        )
      );
    } else if (action === "delete") {
      setUserList((prev) => prev.filter((u) => u.id !== userId));
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ background: "#f0f2f5" }}
    >
      <div
        className="position-relative bg-white shadow-lg"
        style={{
          width: 390,
          minHeight: 780,
          borderRadius: 36,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          border: "6px solid #1a1a2e",
        }}
      >
        <div
          className="px-3 pt-4 pb-2"
          style={{ background: "#fff", borderBottom: "1px solid #f0f0f0" }}
        >
          <div className="d-flex align-items-center justify-content-between mb-1">
            <div className="d-flex align-items-center gap-2">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                style={{
                  width: 38,
                  height: 38,
                  background: "linear-gradient(135deg, #f7c948, #e6a817)",
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                G
              </div>

              <div>
                <div style={{ fontSize: 10, color: "#999", fontWeight: 500 }}>
                  PAZAR YERİ PANELİ
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#1a1a2e",
                  }}
                >
                  Kullanıcı Yönetimi
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <div className="position-relative">
                <i className="bi bi-bell" style={{ fontSize: 20, color: "#555" }}></i>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: 8 }}
                >
                  3
                </span>
              </div>

              <div
                className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
                style={{
                  width: 32,
                  height: 32,
                  background: "#2c3e7a",
                  fontSize: 12,
                }}
              >
                AB
              </div>
            </div>
          </div>

          <div className="position-relative mt-3 mb-2">
            <i
              className="bi bi-search position-absolute"
              style={{
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#aaa",
                fontSize: 14,
              }}
            ></i>

            <input
              type="text"
              className="form-control ps-4 py-2"
              placeholder="İsim, e-posta veya telefon ile ara..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(5);
              }}
              style={{
                borderRadius: 12,
                border: "1.5px solid #e8e8e8",
                background: "#f8f9fb",
                fontSize: 13,
              }}
            />
          </div>

          <div className="d-flex gap-2 mt-2 mb-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setActiveFilter(f);
                  setVisibleCount(5);
                }}
                className="btn btn-sm fw-semibold"
                style={{
                  borderRadius: 20,
                  padding: "4px 14px",
                  fontSize: 13,
                  border: "none",
                  background: activeFilter === f ? "#f7c948" : "#f0f0f0",
                  color: activeFilter === f ? "#1a1a2e" : "#666",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div
          className="flex-grow-1 overflow-auto px-3 py-2"
          style={{ background: "#f8f9fb" }}
          onClick={() => setOpenMenuId(null)}
        >
          {visible.map((user) => (
            <div
              key={user.id}
              className="bg-white d-flex align-items-center gap-3 mb-2 px-3 py-2 position-relative"
              style={{
                borderRadius: 14,
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                border: "1px solid #f0f0f0",
              }}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white flex-shrink-0"
                style={{
                  width: 44,
                  height: 44,
                  background: user.avatarColor,
                  fontSize: 14,
                }}
              >
                {user.avatar}
              </div>

              <div className="flex-grow-1">
                <div
                  className="fw-semibold"
                  style={{ fontSize: 14, color: "#1a1a2e" }}
                >
                  {user.name}
                </div>

                <div className="d-flex gap-1 mt-1 flex-wrap">
                  <span
                    className="badge"
                    style={{
                      background:
                        user.type === "Kurumsal"
                          ? "#e8f0fe"
                          : "#fff3cd",
                      color:
                        user.type === "Kurumsal"
                          ? "#1a56db"
                          : "#92400e",
                    }}
                  >
                    {user.type}
                  </span>

                  <span
                    className="badge"
                    style={{
                      background:
                        user.status === "Aktif"
                          ? "#d1fae5"
                          : "#fee2e2",
                      color:
                        user.status === "Aktif"
                          ? "#065f46"
                          : "#991b1b",
                    }}
                  >
                    {user.status}
                  </span>
                </div>
              </div>

              <button
                className="btn p-0 border-0 bg-transparent"
                onClick={() =>
                  setOpenMenuId(openMenuId === user.id ? null : user.id)
                }
              >
                <i className="bi bi-three-dots-vertical"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KullaniciYonetimiAdmin;