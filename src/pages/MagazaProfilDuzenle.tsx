import { useState } from "react";

const iller = [
  "Adana","Ankara","Antalya","Bursa","Diyarbakır","Erzurum",
  "Eskişehir","Gaziantep","İstanbul","İzmir","Kayseri","Konya",
  "Mersin","Samsun","Trabzon"
];

const ilceler: Record<string, string[]> = {
  İstanbul: ["Kadıköy","Beşiktaş","Üsküdar","Fatih","Şişli","Beyoğlu","Bakırköy","Maltepe"],
  Ankara: ["Çankaya","Keçiören","Mamak","Yenimahalle","Altındağ"],
  İzmir: ["Konak","Karşıyaka","Bornova","Buca","Çiğli"]
};

const magazaTipleri = ["Galeri","Emlak","Elektronik","Giyim","Gıda","Mobilya","Diğer"];

const MagazaProfilDuzenle = () => {

  const [form, setForm] = useState({
    magazaAdi: "Asım Boray Sulakcı Mağazası",
    aciklama: "Kaliteli hizmet ve güvenilir alışverişin adresi. Galeri ve emlak sektöründe öncü çözümler sunuyoruz.",
    vergiNo: "",
    magazaTipi: "Galeri",
    il: "İstanbul",
    ilce: "Kadıköy",
    tamAdres: ""
  });

  const [saved,setSaved] = useState(false);
  const [coverHover,setCoverHover] = useState(false);
  const [avatarHover,setAvatarHover] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {

    const {name,value} = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
      ...(name === "il" ? {ilce:""} : {})
    }));
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setSaved(true);

    setTimeout(()=>{
      setSaved(false);
    },2500);
  };

  const availableIlceler = ilceler[form.il] || [];

  return (

<div className="min-vh-100 bg-light">

{/* HEADER */}

<div className="bg-white border-bottom sticky-top shadow-sm">
<div className="container-sm py-3 d-flex align-items-center gap-3">

<button className="btn btn-light btn-sm rounded-circle p-2" style={{width:38,height:38}}>
<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
<path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>

<h6 className="mb-0 fw-semibold" style={{fontSize:"1rem"}}>
Mağaza Profilini Düzenle
</h6>

</div>
</div>

<div className="container-sm" style={{maxWidth:520}}>

{/* COVER */}

<div className="position-relative mb-5">

<div
className="position-relative overflow-hidden"
style={{
height:160,
background:"linear-gradient(135deg,#7a8c6e,#c8b89a)",
cursor:"pointer"
}}
onMouseEnter={()=>setCoverHover(true)}
onMouseLeave={()=>setCoverHover(false)}
>

{coverHover && (
<div
className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
style={{background:"rgba(0,0,0,0.4)"}}
>
<span className="text-white">Kapak fotoğrafını değiştir</span>
</div>
)}

</div>

{/* AVATAR */}

<div
className="position-absolute rounded-circle border border-3 border-white"
style={{
width:90,
height:90,
bottom:-45,
left:"50%",
transform:"translateX(-50%)",
background:"#1a2718",
cursor:"pointer"
}}
onMouseEnter={()=>setAvatarHover(true)}
onMouseLeave={()=>setAvatarHover(false)}
>

{avatarHover && (
<div
className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center rounded-circle"
style={{background:"rgba(0,0,0,0.5)"}}
>
<span className="text-white small">Değiştir</span>
</div>
)}

</div>

</div>

{/* FORM */}

<div className="bg-white rounded-4 shadow-sm mb-4 p-4">

<h6 className="fw-bold mb-4">
Mağaza Bilgileri
</h6>

<div className="mb-3">

<label className="form-label">Mağaza Adı</label>

<input
type="text"
className="form-control"
name="magazaAdi"
value={form.magazaAdi}
onChange={handleChange}
/>

</div>

<div className="mb-3">

<label className="form-label">Mağaza Açıklaması</label>

<textarea
className="form-control"
rows={3}
name="aciklama"
value={form.aciklama}
onChange={handleChange}
/>

</div>

<div className="mb-3">

<label className="form-label">Vergi Numarası</label>

<input
type="text"
className="form-control"
name="vergiNo"
value={form.vergiNo}
onChange={handleChange}
maxLength={11}
/>

</div>

<div className="mb-3">

<label className="form-label">Mağaza Tipi</label>

<select
className="form-select"
name="magazaTipi"
value={form.magazaTipi}
onChange={handleChange}
>

{magazaTipleri.map(tip=>(
<option key={tip}>{tip}</option>
))}

</select>

</div>

{/* IL ILCE */}

<div className="row g-3">

<div className="col-6">

<label className="form-label">İl</label>

<select
className="form-select"
name="il"
value={form.il}
onChange={handleChange}
>

{iller.map(il=>(
<option key={il}>{il}</option>
))}

</select>

</div>

<div className="col-6">

<label className="form-label">İlçe</label>

<select
className="form-select"
name="ilce"
value={form.ilce}
onChange={handleChange}
>

{availableIlceler.map(ilce=>(
<option key={ilce}>{ilce}</option>
))}

</select>

</div>

</div>

<div className="mt-3">

<label className="form-label">Tam Adres</label>

<textarea
className="form-control"
rows={3}
name="tamAdres"
value={form.tamAdres}
onChange={handleChange}
/>

</div>

</div>

{/* BUTTON */}

<button
className="btn w-100 fw-semibold py-3"
style={{
background:saved ? "#27ae60" : "#f5c518",
color:saved ? "white" : "black"
}}
onClick={handleSave}
>

{saved ? "Kaydedildi!" : "Değişiklikleri Kaydet"}

</button>

</div>
</div>

  );
};

export default MagazaProfilDuzenle;