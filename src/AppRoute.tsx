import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard1 from "./pages/AdminDashboard1";
import Bildirimler from "./pages/Bildirimler";
import Detayli_magaza_istatistikleri from "./pages/Detayli_magaza_istatistikleri";
import Emlak_ilan_listesi_4_ilanli_1 from "./pages/Emlak_ilan_listesi_4_ilanli_1";
import Emlak_resim_galerisi from "./pages/Emlak_resim_galerisi";
import Emlak_i_lan_detay_g_rsel_ve_konumlu_1 from "./pages/Emlak_i_lan_detay_g_rsel_ve_konumlu_1";
import Favori_ilanlarim from "./pages/Favori_ilanlarim";
import Filtreleme_sayfasi_tr from "./pages/Filtreleme_sayfasi_tr";
import Fotograf_yukleme_durumu_sari_tema from "./pages/Fotograf_yukleme_durumu_sari_tema";
import Generated_screen_1 from "./pages/Generated_screen_1";
import Giris_ve_kayit from "./pages/Giris_ve_kayit";
import Hakkimizda_sari_tema_guncelleme from "./pages/Hakkimizda_sari_tema_guncelleme";
import Hemen_ma_aza_a from "./pages/Hemen_ma_aza_a";
import İ_lan_onay_listesi_admin from "./pages/İ_lan_onay_listesi_admin";
import İ_lan_reddetme_pop_up from "./pages/İ_lan_reddetme_pop_up";
import İ_lan_y_kleme_sayfas_1 from "./pages/İ_lan_y_kleme_sayfas_1";
import İ_lanlar_m_y_netimi from "./pages/İ_lanlar_m_y_netimi";
import KullaniciYonetimiAdmin from "./pages/KullaniciYonetimiAdmin";
import MagazaBavuruDetay from "./pages/MagazaBavuruDetay";
import MagazaBavuruFormu from "./pages/MagazaBavuruFormu";
import MagazaBavuruOnayListesi from "./pages/MagazaBavuruOnayListesi";
import MagazaDashboard from "./pages/MagazaDashboard";
import MagazaPaneli from "./pages/MagazaPaneli";
import MagazaProfilDuzenle from "./pages/MagazaProfilDuzenle";
import MesajlarGelenKutusu from "./pages/MesajlarGelenKutusu";
import MusteriYonetimi from "./pages/MusteriYonetimi";
import Ödeme_ba_ar_l_sar_tema from "./pages/Ödeme_ba_ar_l_sar_tema";
import Profil_sayfas_tr from "./pages/Profil_sayfas_tr";
import SohbetDetayTr from "./pages/SohbetDetayTr";
import TopluIlanYuklemeCsv from "./pages/TopluIlanYuklemeCsv";
import VasTaIlanDetay1 from "./pages/VasTaIlanDetay1";
import VastaFiltrelemeSayfas from "./pages/VastaFiltrelemeSayfas";
import VastaIlanListesi from "./pages/VastaIlanListesi";
import Zenginle_tirilmi_ana_sayfa_g_rsel_g_ncelleme_1 from "./pages/Zenginle_tirilmi_ana_sayfa_g_rsel_g_ncelleme_1";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard1 />} />
        <Route path="/bildirimler" element={<Bildirimler />} />
        <Route path="/detayliMagaza" element={<Detayli_magaza_istatistikleri />} />
        <Route path="/emlakIlanGorsel" element={<Emlak_i_lan_detay_g_rsel_ve_konumlu_1 />} />
        <Route path="/emlakIlanListesi" element={<Emlak_ilan_listesi_4_ilanli_1 />} />
        <Route path="/emlakResim" element={<Emlak_resim_galerisi />} />
        <Route path="/favoriIlanlar" element={<Favori_ilanlarim/>} />
        <Route path="/filtreleme" element={<Filtreleme_sayfasi_tr/>} />
        <Route path="/fotoYukleme" element={<Fotograf_yukleme_durumu_sari_tema/>}/>
        <Route path="/generatedScreen" element={<Generated_screen_1/>}/>
        <Route path="/login" element={<Giris_ve_kayit/>}/>
        <Route path="/hakkimizdaSariTema" element={<Hakkimizda_sari_tema_guncelleme/>}/>
        <Route path="/hemen" element={<Hemen_ma_aza_a/>}/>
        <Route path="/onaylama" element={<İ_lan_onay_listesi_admin />}/>
        <Route path="/reddetme" element={<İ_lan_reddetme_pop_up />} />
        <Route path="/yukleme" element={<İ_lan_y_kleme_sayfas_1 />} />
        <Route path="/ilanlar" element={<İ_lanlar_m_y_netimi />} />
        <Route path="/adminYonetimi" element={<KullaniciYonetimiAdmin />} />
        <Route path="/magazaBasvuruDetayli" element={<MagazaBavuruDetay />} />
        <Route path="/magazaBasvuruFormu" element={<MagazaBavuruFormu />} />
        <Route path="/magazaBasvuruOnay" element={<MagazaBavuruOnayListesi />} />
        <Route path="/magazaDashboard" element={<MagazaDashboard />} />
         <Route path="/magazaPaneli" element={<MagazaPaneli />} />
          <Route path="/magazaProfilDuzenle" element={<MagazaProfilDuzenle />} />
           <Route path="/mesajlarGelen" element={<MesajlarGelenKutusu />} />
           <Route path="/musteriYonetimi" element={<MusteriYonetimi />} />
           <Route path="/odemeBasarili" element={<Ödeme_ba_ar_l_sar_tema />} />
           <Route path="/profilSayfasi" element={<Profil_sayfas_tr />} />
           <Route path="/sohbetDetay" element={<SohbetDetayTr />} />
           <Route path="/topluIlanYukleme" element={<TopluIlanYuklemeCsv />} />
           <Route path="/vasitaFiltreleme" element={<VastaFiltrelemeSayfas />} />
           <Route path="/vasitaIlanDetay" element={<VasTaIlanDetay1 />} />
           <Route path="/vasitaIlanListesi" element={<VastaIlanListesi />} />
           <Route path="/gorselGuncelleme" element={<Zenginle_tirilmi_ana_sayfa_g_rsel_g_ncelleme_1 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;