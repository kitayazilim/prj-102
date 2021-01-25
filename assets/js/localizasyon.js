// Process translation
$(function () {

  var lang = getCookie("_culture");
  if (lang == null) {
    lang = navigator.language.substring(0, 2);
    if (!lang.length > 0) {
      lang = "tr";
    }
  }

  //$body.attr("lang").val() = arrLang[lang][$(this).attr('dil')] 
  $('.lang').each(function (index, item) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
    //href atrribute için
    //$(this).attr("href", arrLangLink[lang][$(this).attr('key')]);
  });

  $('.translate').click(function () {
    var lang = $(this).attr('id');
    document.cookie = "_culture=" + lang;
    $('.lang').each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});

var arrLang = {
  'tr': {

    // 'Değişken' : 'Değişken Değeri'
    //navigasyon menü
    'telefon': 'TELEFON',
    'mail': 'Email',
    'anasayfa': 'Anasayfa',
    'kurumsal': 'Kurumsal',
    'hakkimizda': 'Hakkımızda',
    'vizyon': 'Vizyon & Misyon',
    'kalite': 'Kalite Politikamız',
    'cevre': 'Çevre & Isg',
    //faaliyetler
    'faaliyet': 'Faaliyet Alanlarımız',
    'gres': 'GRES',
    'segman': 'SEGMAN',
    'kayis': 'KAYIŞ',
    'kasnak': 'KASNAK',
    'kaplin': 'KAPLİN',
    'kremayer': 'KREMAYER',
    'konik': 'KONİK BURÇ',
    'sizdirmaz': 'SIZDIRMAZLIK ELEMANLARI',
    'zincir': 'ZİNCİR',
    'sanayi': 'SANAYİ TEKERİ',
    'elektrik': 'ELEKTRİK MOTORLARI',
    'reduktor': 'REDÜKTÖR',
    'konveyor': 'KONVEYOR BANT',
    'rulman': 'RULMAN',
    //kütüphane
    'kutuphane': 'KÜTÜPHANE',
    //insan kaynakları
    'insan': 'İnsan Kaynakları',
    'basvuru': 'İş Başvurusu',
    'sosyal': 'Sosyal Sorumluluk',
    'kvkk': 'KVKK',
    'iletisim': 'İLETİŞİM',
    'soz1sat1': 'Boş zaman yoktur;',
    'soz1sat2': 'boşa geçen  zaman vardır.',
    'soz2': 'Gelecek, çalışkan olanlarındır.',
    'soz3': 'Hayal gücü olmayan insanın kanatları yoktur.',
    // Başvuru Formu
    'basvuruform': 'BAŞVURU FORMU',
    'adi': 'ADINIZ',
    'soyadi': 'SOYADINIZ',
    'telefon': 'TELEFON',
    'mesaj': 'MESAJINIZ',
    'adres': 'ADRES',
    'butongonder': 'GÖNDER',
    'btncv': 'CV YÜKLE',
    'email': 'E-POSTA',

    // kurumsal- cevre
    'cevre_adi': 'Çevre & Isg Politikamız',
    'cevre1': 'Yatırım ve proses tasarımlarında çevre etkileri göz önünde bulundurarak, çevreye en az atık veren ve doğal kaynakları etkili kullanan teknolojileri uygulamak.',
    'cevre2': 'Çalışanların ve çevrenin tehlikelerden korunması için tehlikeleri tanımlamak, değerlendirmek ve bunlara karşı gerekli önlemleri almak.',
    'cevre3': 'Çevre,  İş sağlığı ve Güvenliği ’ne ilişkin uygulanabilir yasa, yönetmelik ve diğer gerekliliklere kesinlikle uymak',

    // kurumsal- kalite politikası
    'kalite1': 'Müşteri taleplerine kaliteli olduğu kadar ekonomik de çözümler sunan Optimal Makine, Yurt içi - Yurt dışı tüm kaynakları kullanarak en verimli hizmeti verebilmek adına çalışmalarını sürdürmektedir.',
    'kalite2': 'Müşteri memnuniyetinde sürekliliği sağlamak için hizmet politikalarımızı sürekli güncellemekteyiz. Değişen ve gelişen piyasa taleplerine hızlı, ekonomik ve kaliteli  bir şekilde cevap verebilmek için yenilikçi, öncü ve  güvenilir olmaya devam edeceğiz.',

    // kurumsal- vizyon misyon
    'vizyon_adi': 'Vizyon',
    'misyon_adi': 'Misyon',
    'vizyon1': 'Müşteri beklentilerini karşılamak için tüm verileri ve tüm kaynakları en etkin şekilde kullanarak sektörün en hızlı, kaliteli ve güvenilir tedarikçisi olmaktır.',
    'misyon1': 'Müşterilerimize değer yaratmak için ekonomik, kaliteli ve hızlı bir hizmeti en doğru şekliyle sunabilmek, sürdürülebilir bir hizmet politikasına dönüştürebilmek, operasyonel mükemmelliğe ulaşmak ve her faaliyetmizde değerimizi arttırmaktır.',

    // kurumsal- hakkımızda
    'hakkimizda1': 'Optimal Makine , sektörde 15 yılı aşkın tecrübe ve bilgi birikimiyle, müşteri isteklerini karşılamak için tüm kaynaklarını en etkin biçimde kullanmayı kendisine ilke edinmiştir.',
    'hakkimizda2': 'Müşteri taleplerine kaliteli olduğu kadar ekonomik de çözümler sunan Optimal Makine, Yurt içi - Yurt dışı tüm kaynakları kullanarak en verimli hizmeti verebilmek adına çalışmalarını sürdürmektedir.',
    'hakkimizda3': 'Müşteri memnuniyetinde sürekliliği sağlamak için hizmet politikalarımızı sürekli güncellemekteyiz. Değişen ve gelişen piyasa taleplerine hızlı, ekonomik ve kaliteli bir şekilde cevap verebilmek için yenilikçi, öncü ve güvenilir olmaya devam edeceğiz.',
  },
  'en': {
    //navigasyon menü
    'telefon': 'PHONE',
    'mail': 'EMAIL',
    'anasayfa': 'HOME',
    'kurumsal': 'Cooparate',
    'hakkimizda': 'ABOUT Us',
    'vizyon': 'VISION & MISSION',
    'kalite': 'QUALİTY POLICY',
    'cevre': 'EOHS',
    //faaliyetler
    'faaliyet': 'BUSINESS LINES',
    'gres': 'LUBRICANTS',
    'segman': 'SNAP RING',
    'kayis': 'V-BELT',
    'kasnak': 'PULLEY',
    'kaplin': 'COUPLING',
    'kremayer': 'CREMAYOR',
    'konik': 'TAPE BUSHE',
    'sizdirmaz': 'SEALING COMPONENT',
    'zincir': 'CHAIN',
    'sanayi': 'INDUSTRIAL WHEEL',
    'elektrik': 'ELECTRICAL ENGINE',
    'reduktor': 'REDUCER',
    'konveyor': 'CONVEYOR BELT',
    'rulman': 'ROLLER',
    //kütüphane
    'kutuphane': 'LIBRARY',
    //insan kaynakları
    'insan': 'HUMAN RESOURCE',
    'basvuru': 'APPLICATION FORM',
    'sosyal': 'SOCıAL RESPONSIBILITY',
    'kvkk': 'PDPL',
    'iletisim': 'CONTACT US',
    'soz1sat1': 'There is no spare time;',
    'soz1sat2': 'there is just the time wasting.',
    'soz2': 'The future belongs to those who are hardworking.',
    'soz3': 'The man who has no imagination has no wings.',
    // Başvuru Formu
    'basvuruform': 'APLICATION FORM',
    'adi': 'NAME',
    'soyadi': 'SURNAME',
    'telefon': 'PHONE',
    'adres': 'ADDRESS',
    'mesaj': 'MESSAGE',
    'butongonder': 'SEND',
    'btncv': 'CV UPLOAD ',
    'email': 'E-MAIL',

    // kurumsal- cevre
    'cevre_adi': 'Environmental&Occupational Health and Safety',
    'cevre1': 'Ronesans Teknik adapts making the most of its capabilities to meet the demands of its customers as a principle with its experience in the sector of more than fifteen years.',
    'cevre2': 'In order to sustain continuity at customer satisfaction, we constantly upgrade our service policies. We will keep on being innovative, pioneering and trustworthy to meet the changing and developing market conditions in a rapid, economical and sterling way.',
    'cevre3': '',

    // kurumsal- kalite politikası
    'kalite1': 'Ronesans Teknik adapts making the most of its capabilities to meet the demands of its customers as a principle with its experience in the sector of more than fifteen years.',
    'kalite2': 'In order to sustain continuity at customer satisfaction, we constantly upgrade our service policies. We will keep on being innovative, pioneering and trustworthy to meet the changing and developing market conditions in a rapid, economical and sterling way.',

    // kurumsal- vizyon misyon
    'vizyon_adi': 'Our Vision',
    'misyon_adi': 'Our Mission',
    'vizyon1': 'Becoming the fastest, most sterling and trustworthy supplier of the sector by making the most of all the resources and data to meet the customers demands.',
    'misyon1': 'To be able to present a sterling and rapid service at its best, to turn it into a sustainable service policy, to reach an operational excellence and to raise our value in every business we do in order to create a value for our customers.',

    // kurumsal- hakkımızda
    'hakkimizda1': 'Ronesans Teknik adapts making the most of its capabilities to meet the demands of its customers as a principle with its experience in the sector of more than fifteen years.',
    'hakkimizda2': 'In order to sustain continuity at customer satisfaction, we constantly upgrade our service policies. We will keep on being innovative, pioneering and trustworthy to meet the changing and developing market conditions in a rapid, economical and sterling way.',
    'hakkimizda3': '',
  },
  'fr': {
    //navigasyon menü
    'telefon': 'TÉLÉPHONE',
    'mail': 'EMAIL',
    'anasayfa': 'HOME',
    'kurumsal': 'ENTREPRISE',
    'hakkimizda': 'NOUS CONTACTER',
    'vizyon': 'VISION & MISSION',
    'kalite': 'POLITIQUE DE QUALITE',
    'cevre': 'SSEP',
    //faaliyetler
    'faaliyet': 'LIGNES D AFFAIRES',
    'gres': 'LUBRIFIANTS',
    'segman': 'ANNEAUX À PRESSION',
    'kayis': 'COURROIES ',
    'kasnak': 'RACCORDS',
    'kaplin': 'CONIQUE SERRURES',
    'kremayer': 'CREMAILLERS',
    'konik': 'DOUILLES CONIQUES',
    'sizdirmaz': 'COMPOSANTS D ÉTANCHÉITÉ',
    'zincir': 'CHAÎNES',
    'sanayi': 'ROUES INDUSTRIELLES',
    'elektrik': 'MOTEURS ÉLECTRIQUES',
    'reduktor': 'RÉDUCTEURS',
    'konveyor': 'BANDES TRANSPORTEUSES',
    //kütüphane
    'kutuphane': 'BIBLIOTHÈQUE',
    //insan kaynakları
    'insan': 'RESSOURCES HUMAINES',
    'basvuru': 'FORMULAIRE DE DEMANDE D EMPLOI',
    'sosyal': 'RESPONSABILITÉ SOCIALE',
    'kvkk': 'LPDDP',
    'iletisim': 'NOUS CONTACTER',
    'soz1sat1': 'Il n y a pas de temps libre,',
    'soz1sat2': 'juste le temps perdu',
    'soz2': 'L avenir appartient à ceux qui travaillent dur',
    'soz3': 'L homme qui n a pas d imagination n a pas d ailes',
    // Başvuru Formu
    'basvuruform': 'FORMULAIRE DE DEMANDE',
    'adi': 'NOM',
    'soyadi': 'NOM DE FAMILLE',
    'telefon': 'TÉLÉPHONE',
    'adres': 'ADRESSE',
    'mesaj': 'MESSAGE',
    'butongonder': 'ENVOYER',
    'btncv': 'CV ENVOYER',
    'email': 'E-MAIL',

    // kurumsal- cevre
    'cevre_adi': 'Santé et sécurité environnementales et professionnelles',
    'cevre1': 'Appliquer les technologies qui produisent le moins de déchets dans l environnement et utiliser les ressources naturelles le plus efficacement possible en tenant compte des enjeux environnementaux lors de la conception des investissements et des processus.',
    'cevre2': 'Faire la définition des dangers, les évaluer et prendre les précautions nécessaires contre eux afin d en protéger les employés et l environnement.',
    'cevre3': 'Respecter les lois, réglementations et autres exigences applicables en matière de santé et de sécurité au travail et en matière d environnement.',

    // kurumsal- kalite politikası
    'kalite1': 'Répondant aux demandes de ses clients avec des solutions à la fois de haute qualité et autant économiques, Ronesans Teknik a poursuivi son travail afin de donner le service le plus efficace en tirant le meilleur parti de l ensemble des ressources internationales et nationales.',
    'kalite2': 'Nous améliorons constamment nos politiques de service afin de maintenir la cohérence dans la satisfaction de la clientèle. Nous continuerons toujours à être dignes de confiance, pionniers et innovants afin de répondre aux conditions changeantes et en développement du marché d une manière rapide, économique et de qualité.',

    // kurumsal- vizyon misyon
    'vizyon_adi': 'Notre Vision',
    'misyon_adi': 'Notre Mission',
    'vizyon1': 'Devenir le fournisseur le plus rapide, le plus solide et le plus fiable du secteur en tirant le meilleur parti de toutes les ressources et données pour répondre aux demandes des clients.',
    'misyon1': 'Être en mesure de présenter un service solide et rapide à son meilleur, de le transformer en une politique de service durable, d atteindre une excellence opérationnelle et d augmenter notre valeur dans chacune de nos activités afin de créer une valeur pour nos clients.',

    // kurumsal- hakkımızda
    'hakkimizda1': 'Ronesans Teknik s adapte en tirant le meilleur parti de ses capacités pour répondre par principe aux demandes de ses clients avec son expérience dans le secteur de plus de quinze ans.',
    'hakkimizda2': 'Afin de maintenir la continuité de la satisfaction du client, nous améliorons constamment nos politiques de service. Nous continuerons d être innovants, pionniers et dignes de confiance pour répondre aux conditions changeantes et en développement du marché d une manière rapide, économique et solide.',
    'hakkimizda3': '',
  },
  'de': {
    //navigasyon menü
    'telefon': 'PHONE',
    'mail': 'EMAIL',
    'anasayfa': 'HOME',
    'kurumsal': 'UNTERNEHMEN',
    'hakkimizda': 'ÜBER UNS',
    'vizyon': 'VISION UND MISSION',
    'kalite': 'QUALITÄTSRICHTLINIE',
    'cevre': 'UUAP',
    //faaliyetler
    'faaliyet': 'GESCHAFTSBEREICHE',
    'gres': 'SCHMIERSTOFFE',
    'segman': 'SNAP RINGE',
    'kayis': 'V GÜRTEL',
    'kasnak': 'RIEMENSCHEIBEN',
    'kaplin': 'KUPPLUNGEN',
    'kremayer': 'CREMAYERS',
    'konik': 'TAPER BUCHEN',
    'sizdirmaz': 'DICHTUNGSKOMPONENTEN',
    'zincir': 'KETTEN',
    'sanayi': 'INDUSTRIELLE RÄDER',
    'elektrik': 'ELEKTROMOTOREN',
    'reduktor': 'REDUZIERER',
    'konveyor': 'FÖRDERBÄNDER',
    //kütüphane
    'kutuphane': 'BIBLIOTHEK',
    //insan kaynakları
    'insan': 'PERSONAL ABTEILUNG',
    'basvuru': 'BEWERBUNGSBOGEN',
    'sosyal': 'GESELLSCHAFTLICHE VERANTWORTUNG',
    'kvkk': 'GZGPD',
    'iletisim': 'KONTAKTIERE UNS',
    'soz1sat1': 'Es gibt keine Freizeit,',
    'soz1sat2': 'es wird nur Zeit verschwendet',
    'soz2': 'Die Zukunft gehört denen,die fleißig sind',
    'soz3': 'Der Mann, der keine Phantasie hat, hat keine Flügel.',
    // Başvuru Formu
    'basvuruform': 'BEWERBUNGSBOGEN',
    'adi': 'NAME',
    'soyadi': 'NACHNAME',
    'telefon': 'TELEFON',
    'adres': 'ADRESSE',
    'mesaj': 'BOTSCHAFT',
    'butongonder': 'SENDEN',
    'btncv': 'CV SENDEN',
    'email': 'E-MAIL',

    // kurumsal- cevre
    'cevre_adi': 'UNSERE UMWELT UND ARBEITSSCHUTZ POLITIK',
    'cevre1': 'Anwendung der Technologien, die den geringsten Abfall in der Umwelt produzieren und die natürlichen Ressourcen am effizientesten nutzen, indem Umweltaspekte bei der Investitions- und Prozessgestaltung berücksichtigt werden.',
    'cevre2': 'Um die Gefahren zu definieren, bewerten Sie sie und treffen Sie die erforderlichen Vorkehrungen, um die Mitarbeiter und die Umwelt vor ihnen zu schützen.',
    'cevre3': 'Einhaltung aller geltenden Umwelt- und Arbeitsschutzgesetze, -vorschriften und anderer Anforderungen.',

    // kurumsal- kalite politikası
    'kalite1': 'Ronesans Teknik hat die Anforderungen seiner Kunden mit qualitativ hochwertigen und ebenso wirtschaftlichen Lösungen erfüllt und seine Arbeit fortgesetzt, um den effizientesten Service zu bieten, indem die gesamten internationalen und nationalen Ressourcen optimal genutzt werden.',
    'kalite2': 'Wir aktualisieren ständig unsere Servicerichtlinien, um die Kundenzufriedenheit zu gewährleisten. Wir werden immer vertrauenswürdig, wegweisend und innovativ sein, um den sich ändernden und sich entwickelnden Marktbedingungen schnell, wirtschaftlich und qualitativ gerecht zu werden.',

    // kurumsal- vizyon misyon
    'vizyon_adi': 'Unsere Vision',
    'misyon_adi': 'Unsere Mission',
    'vizyon1': 'Werden Sie zum schnellsten, besten und vertrauenswürdigsten Lieferanten der Branche, indem Sie alle Ressourcen und Daten optimal nutzen, um die Anforderungen der Kunden zu erfüllen.',
    'misyon1': 'In der Lage zu sein, einen erstklassigen und schnellen Service von seiner besten Seite zu präsentieren, ihn in eine nachhaltige Servicepolitik umzuwandeln, eine operative Exzellenz zu erreichen und unseren Wert in jedem Geschäft zu steigern, das wir tun, um einen Wert für unsere Kunden zu schaffen.',

    // kurumsal- hakkımızda
    'hakkimizda1': 'Ronesans Teknik passt sich mit seiner mehr als fünfzehnjährigen Erfahrung in der Branche an, um die Anforderungen seiner Kunden grundsätzlich zu erfüllen.',
    'hakkimizda2': 'Um die Kontinuität bei der Kundenzufriedenheit aufrechtzuerhalten, aktualisieren wir ständig unsere Servicerichtlinien. Wir werden weiterhin innovativ, wegweisend und vertrauenswürdig sein, um den sich ändernden und sich entwickelnden Marktbedingungen schnell, wirtschaftlich und auf hervorragende Weise gerecht zu werde.',
    'hakkimizda3': '',

  }
};


function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}