const riddlesData = {
  easy: [
    {
      title: "Zielony Oddech Miasta",
      text: "Jestem przestrzenią porośniętą roślinnością w środku miejskiej dżungli. Nie jestem lasem, ale daję cień, tlen i miejsce odpoczynku. Projektują mnie absolwenci technikum architektury krajobrazu. Co to jestem?",
      answers: ["Park miejski", "Cmentarz", "Ogród botaniczny", "Szkółka drzew"],
      correct: 0,
      hint: "Znajdziesz mnie w każdym mieście. Mam alejki, ławki i rabaty kwiatowe.",
      success: "Park miejski — podstawowy element terenów zieleni urządzonej (podstawa programowa AK)."
    },
    {
      title: "Tajemnica pH",
      text: "Jestem liczbą, która decyduje, czy roślina zakwitnie, czy usycha. Mówię, jak kwaśna lub zasadowa jest gleba. Różaneczniki kochają mnie niskiego, lawenda — wyższego. Co to jestem?",
      answers: ["Wilgotność gleby", "Odczyn gleby (pH)", "Temperatura gleby", "Zasolenie gleby"],
      correct: 1,
      hint: "Skala wynosi od 0 do 14. Wartość 7 to odczyn obojętny.",
      success: "Odczyn gleby (pH) — kluczowy parametr w uprawie roślin ozdobnych (gleboznawstwo)."
    },
    {
      title: "Królowa Ogrodu",
      text: "Jestem najbardziej rozpoznawalną rośliną ozdobną na świecie. Moje kwiaty symbolizują miłość. Mam kolce na łodydze i wymagam regularnego cięcia formującego. Jak mnie nazywają?",
      answers: ["Piwonia (Paeonia)", "Róża (Rosa)", "Dalia (Dahlia)", "Irys (Iris)"],
      correct: 1,
      hint: "Należę do rodziny Rosaceae. Moja uprawa to osobna dziedzina — różanictwo.",
      success: "Róża — królowa ogrodu, jeden z najważniejszych gatunków w kształtowaniu krajobrazu."
    },
    {
      title: "Zielona Ściana",
      text: "Jestem rzędem gęsto posadzonych krzewów lub drzew, przycinanych w regularny kształt. Pełnię funkcję ogrodzenia, ochrony przed wiatrem i tłem dla kompozycji. Co to jestem?",
      answers: ["Szpaler", "Żywopłot", "Aleja", "Masyw zieleni"],
      correct: 1,
      hint: "Tworzę mnie z grabów, ligustru, cisu lub bukszpanu. Wymaga regularnego strzyżenia.",
      success: "Żywopłot — podstawowy element kompozycji ogrodowej (projektowanie terenów zieleni)."
    },
    {
      title: "Pierwsze Narzędzie Projektanta",
      text: "Jestem dokumentem, który architekt krajobrazu tworzy jako pierwszy. Pokazuję podział terenu na strefy — wypoczynkową, komunikacyjną, użytkową — bez szczegółów roślinnych. Co to jestem?",
      answers: ["Projekt wykonawczy", "Kosztorys prac", "Koncepcja funkcjonalna", "Projekt nasadzeń"],
      correct: 2,
      hint: "Czasem zwę się 'bubble diagram'. Używam prostych kształtów zamiast precyzyjnych rysunków.",
      success: "Koncepcja funkcjonalna — pierwszy etap procesu projektowego w architekturze krajobrazu."
    }
  ],

  medium: [
    {
      title: "Włoski Mistrz Symetrii",
      text: "Jestem stylem ogrodowym narodzonym we Włoszech w epoce renesansu. Cechuje mnie ścisła symetria, tarasy, posągi i strzyżone formowane rośliny. Wersale to moje francuskie dziecko. Jak mnie nazywają?",
      answers: ["Ogród angielski (krajobrazowy)", "Ogród japoński", "Ogród regularny (formalny)", "Ogród ziołowy"],
      correct: 2,
      hint: "Przeciwieństwo ogrodu swobodnego. Geometria rządzi kompozycją.",
      success: "Ogród regularny (formalny) — klasyczny styl europejski omawiany w historii sztuki ogrodowej."
    },
    {
      title: "Rośliny Bez Drewna",
      text: "Jestem grupą roślin, których nadziemne części obumierają na zimę, a przeżywają tylko podziemne organy spichrzowe — cebule, kłącza, bulwy. Kwitniemy wiosną i latem w rabatach. Co to jesteśmy?",
      answers: ["Rośliny jednoroczne", "Byliny (rośliny wieloletnie)", "Rośliny dwuletnie", "Krzewy liściaste"],
      correct: 1,
      hint: "Tulipany, hosty, funkia — wracamy co roku bez dosadzania.",
      success: "Byliny — wieloletnie rośliny zielne, podstawa projektu rabat i ogrodów naturalistycznych."
    },
    {
      title: "Skala na Papierze",
      text: "Na moim rysunku 1 cm odpowiada 2 metrom w terenie. Używam mnie do planów ogrodów przydomowych, gdzie ważna jest każda grządka. Jaką skalą jestem?",
      answers: ["1 : 500", "1 : 1000", "1 : 200", "1 : 50"],
      correct: 2,
      hint: "1 cm = 200 cm = 2 m. Popularny wybór do projektów ogrodów.",
      success: "Skala 1:200 — typowa skala projektu ogrodu przydomowego (rysunek techniczny i dokumentacja)."
    },
    {
      title: "Strażnik Wilgoci",
      text: "Pokrywam powierzchnię gleby warstwą materiału organicznego lub mineralnego. Chronię przed wysychaniem, wahaniami temperatury i chwastami. Może mnie tworzyć kora sosnowa, żwir lub słoma. Co to jestem?",
      answers: ["Nawożenie", "Mulczowanie (ściółkowanie)", "Skaryfikacja", "Wertykutacja"],
      correct: 1,
      hint: "Warstwa powinna mieć 5–10 cm grubości wokół roślin.",
      success: "Mulczowanie — podstawowy zabieg agrotechniczny w pielęgnacji terenów zieleni."
    },
    {
      title: "Drzewo Żałobnych Alei",
      text: "Mam wąski, kolumnowy pokrój i zawsze zielone igły. Sadzą mnie przy cmentarzach i w ogrodach śródziemnomorskich jako symbol wieczności. Moja łacińska nazwa to Cupressus sempervirens. Co to jestem?",
      answers: ["Tuja zachodnia", "Cyprys włoski", "Jałowiec kolumnowy", "Cis pospolity"],
      correct: 1,
      hint: "Pochodzi z basenu Morza Śródziemnego. Sempervirens znaczy 'zawsze zielony'.",
      success: "Cyprys włoski (Cupressus sempervirens) — ważny gatunek w dendrologii i kompozycji krajobrazu."
    }
  ],

  hard: [
    {
      title: "Lawinowy Efekt w Glebie",
      text: "Jestem procesem, w którym mikroorganizmy glebowe rozkładają materię organiczną do prostych związków mineralnych. Dzięki mnie składniki pokarmowe wracają do obiegu i są dostępne dla roślin. Co to jestem?",
      answers: ["Fotosynteza", "Transpiracja", "Mineralizacja materii organicznej", "Symbioza mikoryzowa"],
      correct: 2,
      hint: "To jeden z etapów krążenia materii w ekosystemie glebowym.",
      success: "Mineralizacja — kluczowy proces glebowy omawiany w gleboznawstwie i ekologii krajobrazu."
    },
    {
      title: "Serce Ogrodu Japońskiego",
      text: "Jestem filozofią projektową wywodzącą się z japońskiego ogrodu Zen. Każdy kamień, każde drzewo, każda ścieżka ma symboliczne znaczenie. Dbam o harmonię, asymetrię i naturalne formy roślin. Jak mnie nazywają?",
      answers: ["Styl ogrodów chińskich", "Styl ogrodów barokowych", "Styl ogrodów japońskich (karesansui)", "Styl ogrodów arabskich"],
      correct: 2,
      hint: "Suchy ogród skalny z grabionym żwirem to mój najbardziej znany wariant.",
      success: "Ogród japoński/karesansui — styl omawiany w historii ogrodnictwa i kulturowych aspektach krajobrazu."
    },
    {
      title: "Nauka o Drzewach",
      text: "Jestem działem botaniki zajmującym się drzewami i krzewami — ich systematyką, morfologią, wymaganiami siedliskowymi i zastosowaniem w kompozycjach. Uczniowie technikum AK studiują mnie przez cały cykl nauczania. Jak mnie nazywają?",
      answers: ["Fitosocjologia", "Dendrologia", "Fenologia", "Bryologia"],
      correct: 1,
      hint: "Dendron po grecku znaczy drzewo.",
      success: "Dendrologia — podstawowy przedmiot w technikum architektury krajobrazu."
    },
    {
      title: "Sukcesja bez Ogrodnika",
      text: "Jestem naturalnym procesem, w którym jeden ekosystem jest stopniowo zastępowany przez inny — od murawy przez zarośla po las. Architekt krajobrazu musi mnie uwzględnić w planowaniu przestrzeni. Co to jestem?",
      answers: ["Inwazja biologiczna", "Sukcesja ekologiczna", "Fragmentacja krajobrazu", "Erozja gleby"],
      correct: 1,
      hint: "Wyróżniamy sukcesję pierwotną (nowe siedlisko) i wtórną (po zaburzeniu).",
      success: "Sukcesja ekologiczna — kluczowe pojęcie ekologii krajobrazu w podstawie programowej AK."
    },
    {
      title: "Złota Proporcja Ogrodu",
      text: "Jestem zasadą kompozycji, według której linie podziału terenu i rozmieszczenie dominant roślinnych powinny tworzyć harmonijne proporcje zbliżone do stosunku 1:1,618. Stosowali mnie starożytni Grecy i renesansowi ogrodnicy. Co to jestem?",
      answers: ["Zasada trójpodziału", "Złoty podział (złota proporcja)", "Zasada kontrastu kolorystycznego", "Reguła osi symetrii"],
      correct: 1,
      hint: "Symbol φ (phi). Znajdziesz mnie w spirali słonecznika i w proporcjach liści.",
      success: "Złoty podział — estetyczna zasada kompozycji stosowana w projektowaniu ogrodów i krajobrazu."
    }
  ]
};
