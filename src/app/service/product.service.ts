import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private list: Array<Product> = [
    {
      "id": 1,
      "catId": 1,
      "name": "Indiana Jones kalandjai 1-4.",
      "description": "Ebben az impozáns gyűjteményben megtalálod a díjnyertes alkotópáros, Steven Spielberg és George Lucas látványos akciójelenetekkel és humorral teli, összesen 6 Oscar-szobrot nyert Indiana Jones-sorozatának mind a 4 részét, valamint a filmekhez kapcsolódó számos izgalmas extrát.",
      "image": `${this.config.imagePath}IndianaJones.jpg`,
      "price": 999,
      "stock": 20,
      "featured": false,
      "active": false
    }, {
      "id": 2,
      "catId": 1,
      "name": "Tenet",
      "description": "A legsikeresebb Batman-trilógia és az Eredet rendezője, Christopher Nolan ismét különlegesen egyedi, izgalmas és meghökkentő fordulatokban gazdag thrillert rendezett, amelyen egy angol kémnek kellene megmentenie a Földet a rá leselkedő és pusztulással fenyegető katasztrófától. Ám a szuperügynöknek nemcsak az idegen hatalmak embereivel, hanem a legnagyobb ellenséggel, az Idővel is meg kell küzdenie.",
      "image": `${this.config.imagePath}tenet.jpg`,
      "price": 1199,
      "stock": 14,
      "featured": true,
      "active": false
    }, {
      "id": 3,
      "catId": 1,
      "name": "Bad Boys 1-3.",
      "description": "A rosszfiúk, Mike Lowrey (Will Smith) és Marcus Burnett (Martin Lawrence) visszatértek, hogy újra a feje tetejére állítsák Miamit és elkapjanak néhány rosszfiút. Miután egy rejtélyes merénylő, aki az igazságszolgáltatás jó pár emberével végzett már, Mike életére tör, az örökifjú zsaru meggyőzi a már nagypapa Marcust, hogy tegye félre korai nyugdíjazásáról szőtt terveit és még egyszer utoljára lendüljenek együtt akcióba. „Smith és Lawrence is ütős alakítást nyújt” (Double Toasted) ebben a „nagyszabású, bombasztikus akciófilmben” (IGN Movies).",
      "image": `${this.config.imagePath}badboys.jpg`,
      "price": 1399,
      "stock": 5,
      "featured": false,
      "active": true
    }, {
      "id": 4,
      "catId": 1,
      "name": "Sonic, a sündisznó",
      "description": "Sonic, a sündisznó véletlenül hihetetlen erő birtokosa lesz, amit ő maga sem ért teljesen. Saját védelme érdekében a Földön rejtőzik el, és egyetlen szabályt kell betartania: nem szabad, hogy a világ tudomást szerezzen a létezéséről. Ám ez nem könnyű feladat egy 15 évesnek, főleg ha az a 15 éves Sonic képességeivel és habitusával van megáldva. Így aztán nem kell hozzá sok, hogy felfedezze őt Tom, a szarkasztikus, ám áldott jószívű kisvárosi zsaru. Ők ketten összeállnak, és hihetetlenül akciódús kalandokba keverednek, miközben átszelik a fél világot úgy, hogy közben üldözi őket a mániákus Dr. Robotnyik és robotszerkentyűi…",
      "image": `${this.config.imagePath}sonic.jpg`,
      "price": 9499,
      "stock": 7,
      "featured": true,
      "active": true,
      "salePrice": 8999
    }, {
      "id": 5,
      "catId": 1,
      "name": "Star Trek",
      "description": "Az ifjú legénység első útjára készül a valaha készült legfejlettebb csillaghajó, a U.S.S. Enterprise fedélzetén. Ezen az úton, mely csupa akció, humor, kozmikus veszély, az újonc kadétoknak meg kell állítaniuk egy gonosz lényt, akinek bosszúmissziója az emberiség létét fenyegeti. A galaxis sorsa két rivális kezében van. Egyikük, James Kirk, a bajkeverő, kalandkereső iowai farmerlegény. A másik, Spock, egy logikán alapuló társadalomban nevelkedett, amely elvet mindenféle érzelmet. Amint a heves ösztön összecsap a hideg ésszel, valószínűtlen, de erős szövetségük az egyetlen, amely átvezetheti legénységüket az elképzelhetetlen veszélyeken, hogy eljussanak oda, ahová ember még nem merészkedett!",
      "image": `${this.config.imagePath}startrek.jpg`,
      "price": 799,
      "stock": 8,
      "featured": true,
      "active": true
    }, {
      "id": 6,
      "catId": 1,
      "name": "Harry Potter: A teljes gyűjtemény",
      "description": "A Harry Potter gyűjtemény mind a 8 filmet tartalmazza!",
      "image": `${this.config.imagePath}harrypotter.jpg`,
      "price": 899,
      "stock": 17,
      "featured": true,
      "active": true
    }, {
      "id": 7,
      "catId": 1,
      "name": "Eddie, a sas",
      "description": "Taron Egerton és az Oscar®-díjra jelölt Hugh Jackman brillírozik ebben a kellemesen szórakoztató, megtörtént eseményeken alapuló filmben. Egerton alakítja Eddie Edwardsot, a Sast: ő a nem túl meggyőző, mégis vakmerő brit síugró, akinek akkor is töretlen marad az önbizalma, amikor egy egész nemzet fogad ellene. Karizmatikus, lázadó edzője (Jackman) támogatásával a szeretnivaló, abszolút esélytelen srác belopja magát a világ sportszerető nézőinek szívébe: az 1988-as téli olimpián nyújtott teljesítménye miatt igazi legendává válik.",
      "image": `${this.config.imagePath}eddie.jpg`,
      "price": 4799,
      "stock": 21,
      "featured": false,
      "active": false
    }, {
      "id": 8,
      "catId": 1,
      "name": "Augusztus Oklahomában",
      "description": "A költő Beverly Westonnak (Sam Shepard) alkoholproblémái vannak, felesége, Violet (Meryl Streep) pedig szájrákkal küzd, ráadásul egyre inkább kezd rákapni a drogokra. A férj úgy dönt, hogy felfogad egy 24 órás gondozót Violet mellé. Néhány héttel később fel is bérlik e célra Johannát (Misty Upham). Majd Beverly eltűnik, amely arra ösztönzi a családot, hogy összegyűljenek megkeresni, ám néhány nappal később kiderül, hogy a családfő öngyilkosságot követett el. Az egész család részt vesz a temetésen, köztük Violet és Beverly lányai, Barbara (Julia Roberts) és Karen (Juliette Lewis), valamint a házban lakó Ivy (Julianne Nicholson) is. A következő néhány napban azonban elharapóznak az indulatok. Ennek egyik oka, hogy Violet és Barbara sosem jöttek ki jól egymással. A másik, hogy Karen marihuánán élő vőlegénye megpróbálja molesztálni jövendőbeli unokahúgát (Abigail Breslin), Ivy pedig összekavar unokatestvérével, és azt tervezik, hogy elszöknek a diszfunkcionális család elől.",
      "image": `${this.config.imagePath}oklahoma.jpg`,
      "price": 6399,
      "stock": 10,
      "featured": true,
      "active": false
    }, {
      "id": 9,
      "catId": 1,
      "name": "Egy kivételes barát",
      "description": "Ebben a megtörtént eseményeken alapuló, a kedvesség erejéről szóló időtlen történetben „Tom Hanks és Matthew Rhys is tökéletes alakítást nyújt” (Deadline Hollywood Daily). A hatalmas népszerűségnek örvendő gyerekműsor vezetőjéről, Mister Rogersről (az alakításáért Oscar®-díjra jelölt* Tom Hanks) egy agyonhajszolt újságíró (az Emmy®-díjas** Matthew Rhys) készít portrét főnöke megbízásából. A két merőben eltérő habitusú férfi között kivételes barátság szövődik, beszélgetéseik nyomán az újságíró szép lassan megszabadul az egész életét átható cinizmustól, elengedi sérelmeit és nyitottabbá válik a megbocsátásra.",
      "image": `${this.config.imagePath}kivetelesbarat.jpg`,
      "price": 729,
      "stock": 32,
      "featured": false,
      "active": true,
      "salePrice": 699
    }, {
      "id": 10,
      "catId": 1,
      "name": "Az átok háza",
      "description": "A Japánból elszabadult átok Amerikában terjed tovább: aki a közelébe kerül a titokzatos, természetfeletti erőnek, azon gyilkos düh lesz úrrá, aminek végül maga is áldozatává válik. Az Átok-trilógia a 2000-es évek egyik legnagyobb horrorsikere volt. A sorozat a műfaj nagy szakértője, Sam Raimi bábáskodása mellett kelt új életre.",
      "image": `${this.config.imagePath}atokhaza.jpg`,
      "price": 3699,
      "stock": 14,
      "featured": false,
      "active": true
    }, {
      "id": 11,
      "catId": 1,
      "name": "Amundsen",
      "description": "A 20. század első évtizedében versenyfutás indult a Föld legészakibb és legdélibb pontjainak felfedezéséért. Az ismeretlent szeretné meghódítani Roald Amundsen (Pål Sverre Hagen – Kon-Tiki, Lótolvajok) is, akit hihetetlen erővel hajt a kalandvágy. Az Oscar®- és Arany Glóbusz®-díjra jelölt* Espen Sandberg (A Karib-tenger kalózai: Salazar bosszúja) nagyszabású filmje nemcsak a kivételes kutató élettörténetét és korát mutatja be, de hihetetlen expedíciói mellett megismerhetjük a múlt század egyik legnagyobb felfedezőjének ellentmondásos személyiségét is.",
      "image": `${this.config.imagePath}amundsen.jpg`,
      "price": 1099,
      "stock": 14,
      "featured": false,
      "active": false
    }, {
      "id": 12,
      "catId": 1,
      "name": "Judy",
      "description": "30 évvel azután, hogy az Óz, a csodák csodája főszerepe sztárt csinált belőle, az anyagi gondokkal és drogproblémákkal küzdő Judy Garland (Renée Zellweger magával ragadó alakításáért többek között az Oscar®-díjat* és az Arany Glóbusz®-szobrot** is elnyerte) londoni varietéturnéra indul annak reményében, hogy elegendő pénzt kereshet két kisebb gyermekének eltartására. A koncertsorozat alatt a színészénekesnő visszaemlékszik karrierjének fő állomásaira és tragikusan végződő házasságaira, miközben szenvedélyes viszonyba bonyolódik egy fiatal zenésszel (Finn Wittrock). A legendás amerikai sztár életének utolsó hónapjait feldolgozó Judy „megindító film, amiben Zellweger karrierje legjobb alakítását nyújtja”",
      "image": `${this.config.imagePath}judy.jpg`,
      "price": 989,
      "stock": 7,
      "featured": true,
      "active": true
    }, {
      "id": 13,
      "catId": 1,
      "name": "Roald Dahl: Boszorkányok",
      "description": "Roald Dahl (Charlie és a csokigyár, Matilda) óriási népszerűségnek örvendő művét a legendás Robert Zemeckis (Vissza a jövőbe, Forrest Gump) álmodta újra. A Boszorkányok vicces és szívmelengető történet egy kisfiúról és nagymamájáról, akik összeakadnak egy csapat elbűvölőnek tűnő, ám valójában velejéig gonosz boszorkánnyal, akik azért gyűltek össze szerte a világból, hogy véghez vigyék aljas tervüket.",
      "image": `${this.config.imagePath}boszorkanyok.jpg`,
      "price": 739,
      "stock": 9,
      "featured": false,
      "active": true
    }, {
      "id": 14,
      "catId": 1,
      "name": "Toy Story 4.",
      "description": "A Pixar Animation Studios büszkén mutatja be Woody, Buzz és a többiek legújabb életre szóló kalandját. Mikor a banda elutazik Bonnie-val és az általa összeeszkábált Villivel, az evőeszközből lett játék mókás ügyetlenkedései következtében Woody egy vad mentőakció kellős közepén találja magát, és közben különc új figurákkal és egy rég elveszettnek hitt jó baráttal is találkozik. A Toy Story 4. lenyűgöző látványvilágú, szívvel-lélekkel teli mestermű, ami csordultig van humorral, így „teljesen le fog venni a lábadról”",
      "image": `${this.config.imagePath}toystory4.jpg`,
      "price": 6399,
      "stock": 5,
      "featured": true,
      "active": true
    }, {
      "id": 15,
      "catId": 1,
      "name": "Mission Impossible 1-6.",
      "description": "A nagysikerű akciósorozat összes filmje egy dobozban.",
      "image": `${this.config.imagePath}mi.jpg`,
      "price": 3399,
      "stock": 32,
      "featured": true,
      "active": false,
      "salePrice": 2999
    }, {
      "id": 16,
      "catId": 1,
      "name": "Iron Man - A Vasember 1.",
      "description": "Tony Stark (Robert Downey, Jr.), a zseniális feltaláló és különc playboy milliárdos éppen legújabb szuperfegyverét mutatja be, amikor a csoportot támadás éri, és Tony mellkasába vasszilánk fúródik, mely lassan halad a szíve felé. Ráadásul foglyul ejtik, és azt követelik tőle, hogy építsen meg egy minden eddiginél pusztítóbb fegyvert. Tony meg is építi, azonban egy olyan páncélöltözet formájában, amely segítségére lehet a szökésben, és távol tartja a vasszilánkot a szívétől. Így születik meg a legendás Vasember.",
      "image": `${this.config.imagePath}ironman.jpg`,
      "price": 8499,
      "stock": 3,
      "featured": true,
      "active": true
    }, {
      "id": 17,
      "catId": 1,
      "name": "A könyvtolvaj",
      "description": "Liesel különös fantáziájú, bátor lány – és szüksége is van kivételes képességeire. A II. világháború idején német nevelőszülőkhöz kerül (Geoffrey Rush, Emily Watson). Tőlük tanul meg olvasni, az ő segítségükkel nyílik ki számára egy egészen új világ. Éppen akkor, amikor a valódi világ egyre félelmetesebbé és veszélyesebbé válik számára. A család egy zsidó kamasz fiút is rejteget: a kislány és Max együtt fedezik fel, milyen ereje van a szavaknak, és milyen fontos segítséget nyújthatnak a kitalált történetek. Segíthetnek olyankor is, amikor már semmi más nem segít.",
      "image": `${this.config.imagePath}konyvtolvaj.jpg`,
      "price": 799,
      "stock": 37,
      "featured": true,
      "active": true
    }, {
      "id": 18,
      "catId": 1,
      "name": "Agymanók",
      "description": "A tinédzserkor gyakran döcögős és akadályokkal teli. Nincs ez másként a fiatal lány, Riley esetében sem, akinek csendes, kertvárosi élete a feje tetejére áll, amikor édesapja a nyüzsgő San Franciscóban kap munkát. Mint mindannyiunkat, Riley-t is az érzelmei vezérlik - ők Derű, Bánat, Harag, Majré, Undor. Az érzelmek a Riley agyában található Központban laknak, mindennapi munkájuk során pedig azon dolgoznak, hogy a lányt átvezessék a mindennapok kihívásain. Ahogy Riley az érzelmeivel küzdve próbálja megszokni San Franciscót, a Központban kitör a káosz. Bár Derű, Riley elsőszámú és legfontosasbb érzelme megpróbálja a dolgok pozitív oldalát láttatni, összetűzésbe kerül a többi érzelemmel, akik másként vélekednek arról, hogyan kell viselkedni egy új városban, egy új otthonban és egy új iskolában.",
      "image": `${this.config.imagePath}agymanok.jpg`,
      "price": 7499,
      "stock": 13,
      "featured": false,
      "active": false
    }, {
      "id": 19,
      "catId": 1,
      "name": "Akihez beszél a föld",
      "description": "Bő egy évig tartott a Dardanellák ostroma Gallipolinál 1915-ben. Bár az Antant elterelő hadműveletnek szánta a törökök megtámadását, az odavezényelt ausztrál és új-zélandi hadtestek teljesen felmorzsolódtak a központi hatalmak ellenállásán. Amikor Connor (Russell Crowe) értesül róla, hogy mindhárom fia eltűnt a csatában, elindul Ausztráliából Törökországba, hogy felkutassa őket.",
      "image": `${this.config.imagePath}akihezbeszelafold.jpg`,
      "price": 4899,
      "stock": 3,
      "featured": true,
      "active": true
    }, {
      "id": 20,
      "catId": 1,
      "name": "Aladdin",
      "description": "Éld át te is a Disney animációs klasszikusából készült élőszereplős változat varázslatos élményét, amely új köntösbe bújtatja a mindenki által ismert és szeretett történetet. Ez a Guy Ritchie rendezésében készült lenyűgöző látványvilágú film „szórakoztató utazásra invitál minden régi és új rajongót, pattanjunk fel hát a repülőszőnyegre!”",
      "image": `${this.config.imagePath}aladdin.jpg`,
      "price": 8499,
      "stock": 6,
      "featured": false,
      "active": true
    }, {
      "id": 21,
      "catId": 1,
      "name": "Öldöklő szerelem",
      "description": "Tessa Connover (Katherine Heigl) a mai napig nem tudta feldolgozni, hogy véget ért a házassága Daviddel (Geoff Stults), azt pedig főleg nem, hogy az exférje azóta eljegyezte új barátnőjét, Julia Bankset (Rosario Dawson). Julia úgy érzi, David személyében végre megtalálta élete szerelmét, és leszámolhat saját zűrös múltjával. Tessa féltékenysége azonban olyannyira betegessé válik, hogy egy idő után már csak egyetlen cél lebeg a szemei előtt, hogy Julia életét pokollá tegye – és ezért semmitől sem riad vissza!",
      "image": `${this.config.imagePath}oldokloszerelem.jpg`,
      "price": 399,
      "stock": 75,
      "featured": true,
      "active": false
    }, {
      "id": 22,
      "catId": 1,
      "name": "Prometheus",
      "description": "Egy tudósokból álló expedíció az ember földi életének eredetére utaló nyomokat talál. Ezeket követve indulnak kutatóútjukra, mely az univerzum legtávolabbi, legveszélyesebb vidékére vezet. Olyan tájra jutnak, és olyan ellenségekkel kell szembenézniük, amilyenről ember eddig nem is álmodott. Még a rémálmaikban sem. Egy szörnyű csata vár rájuk: ha alul maradnak, akkor az egész emberiség velük pusztul.",
      "image": `${this.config.imagePath}prometheus.jpg`,
      "price": 5599,
      "stock": 15,
      "featured": false,
      "active": false
    }, {
      "id": 23,
      "catId": 1,
      "name": "A Tégla",
      "description": "Billy Costigan (Leonardo DiCaprio), az újonc rendőr alvilági környezetben nőtt fel. Ő az ideális tégla, akinek be kell épülnie a Frank Costello (Jack Nickolson) vezette maffiába. Az a dolga, hogy Costello bizalmába férkőzve segítsen rendőr feletteseinek (Mark Wahlberg és Martin Sheen) lebuktatni a maffiózót. Mindeközben Colin Sullivanben (Matt Damon), a különleges nyomozóegység tisztjében mindenki megbízik. Senki sem gyanítja, hogy ő Costello beépített embere.",
      "image": `${this.config.imagePath}tegla.jpg`,
      "price": 4499,
      "stock": 9,
      "featured": false,
      "active": true
    }, {
      "id": 24,
      "catId": 1,
      "name": "The Expendables - A feláldozhatók 3.",
      "description": "A Feláldozhatók csapata visszatér Barney Ross-szal (Sylvester Stallone) az élen, hogy az eddigi legáldázabb ellenségükkel nézzenek szembe. Barney, a profi főnök már megszámlálhatatlan küldetésen van túl, rengeteg szövetségest szerzett, de mindeközben ellenségei számát is szépen gyarapította.",
      "image": `${this.config.imagePath}expendables3.jpg`,
      "price": 1999,
      "stock": 1,
      "featured": false,
      "active": false
    }, {
      "id": 25,
      "catId": 1,
      "name": "Bloodshot",
      "description": "A legendás képregény alapján készült filmben Vin Diesel egy olyan ütközetben elhunyt katonát játszik, akit egy titokzatos cég visszahoz az életbe. Ray Garrison a vérébe fecskendezett nanorobotoknak köszönhetően újra bevethetővé válik, méghozzá a legkeményebb akciókban, ugyanis a kísérletnek köszönhetően szuperképességekre tesz szert: emberfeletti ereje mellett azonnal képes regenerálódni. Ahhoz, hogy saját céljaikra tudják felhasználni a férfit, a cég manipulálja Ray emlékeit, aki így nem tudja, mi a valóság és mit ültettek mesterségesen a fejébe… de feltett szándéka kideríteni. A „szuperhős zsánerbe friss vért fecskendező” (Gulf News) Bloodshotban „az izgalomról az ütős akciójelenetek, a humorfaktorról pedig a Wilfredet játszó LaMorne Morris gondoskodik” (IGN Movies).",
      "image": `${this.config.imagePath}bloodshot.jpg`,
      "price": 859,
      "stock": 30,
      "featured": true,
      "active": false
    }, {
      "id": 26,
      "catId": 1,
      "name": "Talpig fegyverben",
      "description": "Miles egy átlagos srác, aki teljesen átlagos életet él, utálja a munkáját és még fülig szerelemes az ex-barátnőjébe, Novába. Csak a televízióból értesül arról, mi folyik a városban, ahol is egy online banda, a SKIZM teljesen ismeretlen embereket kényszerít vérre menő gladiátorharcra. Egy napon aztán Miles a dolgok sűrűjében találja magát, amikor is a SKIZM felkeresi őt, mindkét tenyerébe pisztolyt szögel, és azzal a feladattal bízzák meg, hogy ölje meg a játék történetének legjobbját, Nixet.",
      "image": `${this.config.imagePath}talpigfegyverben.jpg`,
      "price": 4199,
      "stock": 4,
      "featured": true,
      "active": true
    }, {
      "id": 27,
      "catId": 1,
      "name": "Dolittle",
      "description": "Robert Downey Jr. remekel az egyik legkedveltebb irodalmi karakter, az állatokkal beszélni tudó doktor történetének legújabb, fenomenális filmváltozatában. A különc Dr. John Dolittle, Viktória királynő Angliájának híres orvosa és állatorvosa hét éve veszítette el a feleségét. Azóta remeteként él a Dolittle birtok magas falai mögött, társasága csupán egzotikus állatainak seregletéből áll. Ám amikor az ifjú királynő súlyos beteg lesz, Dolittle kénytelen-kelletlen útra kel egy titokzatos sziget felé, hogy megtalálja a gyógymódot. Útja során új erőre kap bátorsága és fürge észjárása; régi ellenfelekkel találkozik, és csodálatos lényeket fedez fel. Kalandjaiban segítőtársai is akadnak, hiszen önjelölt ifjú segédje mellett elkíséri őt egy lármás kis állatsereglet is, többek között egy gondterhelt gorilla, egy lelkes, de kelekótya kacsa, egy truccoló strucc, egy jókedvű jegesmedve, valamint egy bakafántos papagáj, aki Dolittle legközelebbi tanácsadója és bizalmasa.",
      "image": `${this.config.imagePath}drdoolittle.jpg`,
      "price": 1399,
      "stock": 16,
      "featured": true,
      "active": true
    }, {
      "id": 28,
      "catId": 1,
      "name": "Ragadozó madarak",
      "description": "Harley Quinn (Margot Robbie) sosem volt jó kislány. Sem normális. De amióta Gotham legizgalmasabb nője szakított Jokerrel, megváltozott benne valami. Feladja addigi magányát, és három nem kevésbé életveszélyes barátnőjével, Fekete Kanárival, Vadásznővel és Renee Montoyával indul újabb kalandokra. És amikor egy gonosz maffiavezér elrabol egy fiatal lányt, úgy dönt, társnőivel együtt kipróbálja, milyen érzés, ha egyszer a jó oldalon harcol. Hát, furcsa. Lehet, hogy nem is bírja így sokáig.",
      "image": `${this.config.imagePath}ragadozomadarak.jpg`,
      "price": 88,
      "stock": 30,
      "featured": false,
      "active": true
    }, {
      "id": 29,
      "catId": 1,
      "name": "A keresztapa-trilógia (3 DVD)",
      "description": "A világ egyik legjelentősebb filmalkotásának tartott Keresztapa trilógiát a rendező, Francis Ford Coppola személyes felügyelete mellett közel egy éves munkával képkockáról képkockára újították fel, így a most megjelenő új kiadás nézői a lehető legjobb minőségben élvezhetik ezt a fantasztikus alapművet!",
      "image": `${this.config.imagePath}keresztapa.jpg`,
      "price": 659,
      "stock": 3,
      "featured": true,
      "active": true
    }, {
      "id": 30,
      "catId": 1,
      "name": "Jumanji 1-2.",
      "description": "A csomag tartalma: Jumanji - Vár a dzsungel Jumnaji - A következő szint",
      "image": `${this.config.imagePath}jumanji.jpg`,
      "price": 8799,
      "stock": 41,
      "featured": true,
      "active": true
    }, {
      "id": 31,
      "catId": 1,
      "name": "Gemini Man",
      "description": "Will Smith kettős szerepben nyújt lehengerlő alakítást az Oscar®-díjas* Ang Lee (Tigris és sárkány, Pi élete) izgalmas, fordulatos és rendkívül látványos akcióthrillerjében. Amikor a visszavonult bérgyilkost, Henry Brogant (Smith) célpontba veszi egy fiatal, magasan képzett ügynök, egy fél világon átívelő macskaegér harc veszi kezdetét. Henry megpróbál túljárni üldözője eszén, de az mintha meg tudná jósolni minden lépését. Előbb-utóbb kénytelenek lesznek szembenézni egymással...",
      "image": `${this.config.imagePath}geminiman.jpg`,
      "price": 6899,
      "stock": 11,
      "featured": false,
      "active": true
    }, {
      "id": 32,
      "catId": 1,
      "name": "Pókember: Idegenben",
      "description": "A Bosszúállók: Végjáték eseményeit követően Peter Parker (Tom Holland) úgy érzi, neki is kijár a pihenés, és hogy egy kicsit az átlagos tinédzserek mindennapjait élje, ne a barátságos, hős Pókemberét.",
      "image": `${this.config.imagePath}pokember.jpg`,
      "price": 5699,
      "stock": 30,
      "featured": false,
      "active": false
    }, {
      "id": 33,
      "catId": 1,
      "name": "X-Men: Sötét Főnix",
      "description": "Egy űrbéli mentőakció során Jean Greyre (Turner) titokzatos kozmikus erő csap le, amitől bolygónkra visszatérve szuperképességei szinte korlátlanokká válnak. A lány képtelen ezt a mértékű erőt kontrollálni, és egyre inkább kicsúszik lába alól a talaj. Jean olyanoknak árt, akik fontosak számára, ez pedig lassan az X-Men összetartó erejét is kikezdi. A széthulló családnak újra egyesülnie kell, ha nem akarják, hogy saját társuk okozza az emberiség pusztulását.",
      "image": `${this.config.imagePath}xmen.jpg`,
      "price": 949,
      "stock": 83,
      "featured": false,
      "active": false
    }, {
      "id": 34,
      "catId": 1,
      "name": "Men in Black – Sötét zsaruk a Föld körül",
      "description": "Ahogy azt a rajongók milliói pontosan tudják, a Sötét zsaruk, vagyis a MIB egy titkos kormányügynökség, ami a bolygónkra érkező földönkívüliekkel való kapcsolattartásért felel. Ebben a nagyszabású, az egész Földön átívelő kalandban az ügynökök egy új generációja, H (Chris Hemsworth) és M (Tessa Thompson) minden eddiginél nagyobb fenyegetéssel néz szembe: úgy tűnik, tégla van a szervezetben.",
      "image": `${this.config.imagePath}mib.jpg`,
      "price": 999,
      "stock": 16,
      "featured": false,
      "active": false,
      "salePrice": 959
    }, {
      "id": 35,
      "catId": 1,
      "name": "Bosszúállók - Végjáték",
      "description": "Thanos súlyos tette, amivel elpusztította az univerzum élőlényeinek felét és megtörte a Bosszúállókat, a megmaradt hősöket egy végső összecsapásra készteti a Marvel Studios huszonegy filmet megkoronázó, nagyszabású fináléjában, a Bosszúállók: Végjátékban.",
      "image": `${this.config.imagePath}bosszuallok.jpg`,
      "price": 379,
      "stock": 4,
      "featured": true,
      "active": false
    }, {
      "id": 36,
      "catId": 1,
      "name": "Shazam!",
      "description": "Shazam! Billy Batson (Asher Angel) egy 14 éves, talpraesett kölyök, aki bármikor képes átváltozni Shazam!-má (Zachary Levi), a felnőtt szuperhőssé – és ehhez csak ki kell mondania a nevét. Újdonsült erejét ki is próbálhatja a gyakorlatban, mikor szembeszáll vele a gonosz Dr. Thaddeus Sivana (Mark Strong), aki el akarja venni tőle a képességeit.",
      "image": `${this.config.imagePath}shazam.jpg`,
      "price": 3799,
      "stock": 10,
      "featured": false,
      "active": false
    }, {
      "id": 37,
      "catId": 1,
      "name": "Marvel Kapitány",
      "description": "A Marvel Studios az 1990-es években játszódó filmje, a Marvel Kapitány egy teljesen új kaland a Marvel mozis univerzumának eddig nem ismert periódusából, amely Carol Danverst követi nyomon. Mikor egy két idegen faj közötti galaktikus háború eléri a Földet, Danvers néhány szövetségessel együtt az események forgatagában találja magát, s hamarosan a világegyetem egyik legerősebb hősévé válik.",
      "image": `${this.config.imagePath}marvel.jpg`,
      "price": 5099,
      "stock": 34,
      "featured": true,
      "active": false
    }, {
      "id": 38,
      "catId": 1,
      "name": "Ragadozó városok",
      "description": "A legendás Peter Jackson prezentálásában érkezik ez a lenyűgöző új kaland, melyhez foghatót még soha nem láttunk. Több száz évvel a civilizáció hanyatlása után egy új, könyörtelen világ emelkedett ki a romokból. Ebben a különleges világban egy Hester Shaw nevű titokzatos fiatal nő és szedett-vedett csapata próbálja megállítani Londont – ezt a gigantikus kerekeken guruló ragadozó várost –, mielőtt az mindent elnyel, ami az útjába kerül.",
      "image": `${this.config.imagePath}ragadozovarosok.jpg`,
      "price": 8699,
      "stock": 12,
      "featured": false,
      "active": false
    }, {
      "id": 39,
      "catId": 1,
      "name": "ŰrDongó",
      "description": "1987-ben Űrdongó menekülni kényszerül a Cybertronról, és egy kaliforniai tengerparti kisváros roncstelepén rejtőzik el. Charlie (Hailee Steinfeld) éppen 18 éves lesz, és keresi a helyét a világban. Ő talál rá az ütött-kopott, lerobbant Űrdongóra. Amikor Charlie életre kelti, hamar ráébred, hogy ez az autó nem csak egy közönséges Volkswagen Bogár... ",
      "image": `${this.config.imagePath}urdongo.jpg`,
      "price": 499,
      "stock": 36,
      "featured": false,
      "active": true
    }, {
      "id": 40,
      "catId": 1,
      "name": "Aquaman",
      "description": "Az AQUAMAN bemutatja a félig ember, félig atlantiszi ARTHUR CURRY eredettörténetét, hogy aztán elvigye őt élete kalandjára. A veszélyekkel és csodákkal teli utazás során Curry bebizonyíthatja, hogy érdemes-e a címre, ami születésétől fogva az ő joga. Hogy lehet-e ő Atlantisz királya.",
      "image": `${this.config.imagePath}aquaman.jpg`,
      "price": 6599,
      "stock": 56,
      "featured": true,
      "active": false
    }, {
      "id": 41,
      "catId": 1,
      "name": "Johnny English újra lecsap",
      "description": "2018-ban az ikonikus komikus, Rowan Atkinson visszatér a véletlenül szupermenő titkos ügynök, Johnny English szerepében.",
      "image": `${this.config.imagePath}johnnyenglish.jpg`,
      "price": 6699,
      "stock": 6,
      "featured": true,
      "active": false
    }, {
      "id": 42,
      "catId": 1,
      "name": "Taxi 5.",
      "description": "A párizsi szuperzsarut, Sylvain Marot-t, akarata ellenére a marseille-i rendőrségre helyezik át azzal a megbízással, hogy megállítson egy olasz bandát, akik felturbózott Ferrarikkal borzolják Gibert ex-felügyelő idegeit és tartják rettegésben a várost. Segítségül kapja Marseille legrosszabb sofőrjét, Daniel unokaöccsét, aki történetesen a legendás fehér TAXI örököse is.",
      "image": `${this.config.imagePath}taxi5.jpg`,
      "price": 589,
      "stock": 23,
      "featured": true,
      "active": false
    }, {
      "id": 43,
      "catId": 1,
      "name": "Escobar",
      "description": "1983-ban Virginia Vallejo, a szépségéről is híres médiaszereplő, akinek kegyeiért milliomosok versengenek, megismerkedik Pablo Escobarral. Négy évig tartó románcuk története a legendás drogbáró sötét világába enged bepillantást, amelyet kábítószer, korrupció, kegyetlen hatalmi harcok és páratlan gazdagság ural.",
      "image": `${this.config.imagePath}escobar.jpg`,
      "price": 666,
      "stock": 86,
      "featured": true,
      "active": false
    }, {
      "id": 44,
      "catId": 1,
      "name": "Kutyaparádé",
      "description": "Mit tehet egy kemény zsaru, ha a társa hozzá képest nyafogó puhány? Elviseli, vagy néha belemar. Legalábbis Max és Frank esetében ez a helyzet, előbbi ugyanis egy nyomozómunkára termett, jó szimatú rottweiler, utóbbi pedig gyáva és folyton izguló kétlábú társa (Will Arnett).",
      "image": `${this.config.imagePath}kutyaparade.jpg`,
      "price": 2799,
      "stock": 50,
      "featured": false,
      "active": false
    }, {
      "id": 45,
      "catId": 1,
      "name": "Deadpool 2.",
      "description": "A Szipi-szupi $@%!#& verzióban 15 percnyi eddig nem látott zúzás és taplóság, nagy adag szeretettel a filmbe belecuccolva.",
      "image": `${this.config.imagePath}deadpool2.jpg`,
      "price": 579,
      "stock": 8,
      "featured": true,
      "active": true
    }, {
      "id": 46,
      "catId": 1,
      "name": "Betörés",
      "description": "Shaun (Gabrielle Union) két gyerekét túszul ejtik egy olyan házban, aminek biztonsági rendszerét úgy tervezték, hogy oda képtelenség legyen betörni… egy anyának azonban senki és semmi – legyen az technika vagy ember – nem állhatja útját, ha a szerettei épségéről van szó.",
      "image": `${this.config.imagePath}betores.jpg`,
      "price": 4599,
      "stock": 9,
      "featured": true,
      "active": true
    }, {
      "id": 47,
      "catId": 1,
      "name": "Tűzgyűrű: Lázadás",
      "description": "John Boyega (Star Wars: Az ébredő Erő) alakítja a lázadó Jake Pentecostot, az egykor szépreményű Jaeger-pilótát, akinek legendás édesapja életét adta azért, hogy az emberiség legyőzhesse a Kaidzsuknak nevezett óriásszörnyeket. Jake azonban abbahagyta a kiképzést és az alvilágban kereste a boldogulását. Ám amikor újabb, még veszélyesebb támadás fenyegeti pusztulással a világot, kap egy utolsó esélyt, hogy méltó legyen apja örökségéhez.",
      "image": `${this.config.imagePath}tuzgyuru.jpg`,
      "price": 3599,
      "stock": 56,
      "featured": true,
      "active": true
    }, {
      "id": 48,
      "catId": 1,
      "name": "Rampage: Tombolás",
      "description": " Az emlős-szakértő Davis (Dwayne Johnson) különleges és szoros kapcsolatot alakított ki George-dzsal, a hihetetlenül intelligens ezüsthátú gorillával, amit egészen kölyökkora gondoz. Mikor egy kapzsi nagyvállalat genetikai kísérletei balesethez vezetnek, George és néhány más állat gigantikus méretű, agresszív szörnyetegekké mutálódnak, és mindent elpusztítanak, ami az útjukba kerül.",
      "image": `${this.config.imagePath}rampage.jpg`,
      "price": 12399,
      "stock": 20,
      "featured": true,
      "active": true
    }, {
      "id": 49,
      "catId": 1,
      "name": "Ready Player One",
      "description": "A valóságban nincs semmi jó. Szerencsére nem is kell törődnünk vele. 2044-ben már mindenkit beszippant a világot átfogó virtuális játék, az OASIS, amelyben mindenki a maga választotta avatárjával vehet részt: és nem szembesül semmi rosszal, ami a játékon kívül várná.",
      "image": `${this.config.imagePath}readyplayerone.jpg`,
      "price": 5699,
      "stock": 28,
      "featured": false,
      "active": true
    }, {
      "id": 50,
      "catId": 1,
      "name": "Tomb Raider",
      "description": "A kötöttségektől menekülő Lara Croft (Alicia Vikander) a mai napig nem hajlandó elfogadni, hogy kalandor édesapja évekkel ezelőtt eltűnt. Mindenét arra teszi fel, hogy megoldja az apja halálát övező rejtélyeket, ebben pedig nem támaszkodhat másra, csupán éles eszére, eltökéltségére és kitartására. És még így is túl kell lépnie a saját határait ahhoz, hogy veszélyekkel teli útján azzá válhasson, amire mindig is rendeltetett. ",
      "image": `${this.config.imagePath}tombraider.jpg`,
      "price": 999,
      "stock": 22,
      "featured": true,
      "active": false
    }, {
      "id": 51,
      "catId": 2,
      "name": "Csernobil",
      "description": "A Csernobil az HBO® ötrészes minisorozataként a történelem legsúlyosabb, emberi vétség által okozott katasztrófájának nagyhatású, kendőzetlen történetét meséli el. 1986-ban a Szovjetunióban található Csernobili Atomerőművet nagy erejű robbanás rázta meg, amely nem csupán Belorussziát, Oroszországot és Ukrajnát borította be radioaktív anyaggal, de még Skandináviába és a Nyugat-Európába is jutott belőle. Az éjszaka történő detonáció pillanatától kezdve az azt követő napok, hetek és hónapok súlyos emberáldozataival járó káoszát bemutatva a Csernobil magával ragadó emberi történeteket vázol fel a bátorságról és az áldozathozatalról, melyeket átjár az a sokkoló felismerés, hogy mindeközben a kormány nem csupán bűnbakokat keres, de még a katasztrófa súlyosságát is el akarja bagatellizálni.",
      "image": `${this.config.imagePath}csernobil.jpg`,
      "price": 629,
      "stock": 10,
      "featured": true,
      "active": false
    }, {
      "id": 52,
      "catId": 2,
      "name": "A leleményes Hugo",
      "description": "Légy üdvözölve a látványos kalandok varázslatos világában! Mikor Hugo, a fortélyos és talpraesett árva felfedez egy titkot, melyet apja hagyott hátra, a rejtély nyomába szegődve olyan kalandra indul, amely körülötte mindenki életét megváltoztatja, és amelynek végén egy biztonságot nyújtó, szeretetteljes hely várja, melyet talán ismét otthonának nevezhet.",
      "image": `${this.config.imagePath}hugo.jpg`,
      "price": 4699,
      "stock": 8,
      "featured": false,
      "active": true
    }, {
      "id": 53,
      "catId": 2,
      "name": "Kényszerleszállás",
      "description": "Whip Whitaker (Washington) csodával határos módon landol utasszállító gépével egy légikatasztrófát követően. De miközben a közvélemény hősként ünnepli, egyre több kérdés merül fel azzal kapcsolatban, hogy ki vagy mi tehető felelőssé a balesetért. Akciódús, lebilincselő és nagy hatású: a Kényszerleszállásban Washington olyan „fenomenális” alakítást nyújt, melyről „évekig fogunk beszélni.”",
      "image": `${this.config.imagePath}kenyszerleszallas.jpg`,
      "price": 779,
      "stock": 1,
      "featured": true,
      "active": true
    }, {
      "id": 54,
      "catId": 2,
      "name": "A Gyűrűk Ura: A gyűrű szövetsége",
      "description": "Frodó hősies útjának kezdete elképesztő HD-minőségben. 4 audiokommentár a rendező, a forgatókönyvírók, a stáb és a szereplők részvételével – több mint 30 közreműködővel.",
      "image": `${this.config.imagePath}gyurukura.jpg`,
      "price": 5299,
      "stock": 8,
      "featured": false,
      "active": false
    }, {
      "id": 55,
      "catId": 2,
      "name": "A hazafi",
      "description": "Benjamin Martin (Mel Gibson) igazi harcos volt: kegyetlen, kiismerhetetlen, engesztelhetetlen. Mára azonban egyedül neveli hét gyerekét, és rájött arra, hogy a béke létszükséglet számára. Az amerikai függetlenségi háború azonban nem kedvez a kívülállóknak és a legnagyobb fiú, Gabriel (Heath Ledger) másképp gondolkodik, mint apja: kerüljön bármibe, a függetlenséget akarja szolgálni. Aki veszélybe került, meg kell védeni, akinek baja esett, azt meg kell bosszulni! Ha eljön az idő, Benjamin Martin újra fegyverbe szólítja régi harcostársait, és elindul, hogy az őrült háborúban megkezdje a maga őrült hadjáratát.",
      "image": `${this.config.imagePath}hazafi.jpg`,
      "price": 299,
      "stock": 45,
      "featured": true,
      "active": true
    }, {
      "id": 56,
      "catId": 2,
      "name": "Terminátor - Megváltás",
      "description": "Az Ítélet Napját követően, mikor a gépek veszik át az uralmat a Földön, John Connor (Christian Bale – A tökéletes trükk), az ellenállás vezére felveszi a harcot a Skynettel, hogy megakadályozza az emberiség teljes pusztulását. Miközben maga köré gyűjti harcosait, és felkészül az ellentámadásra, Connor rádöbben, hogy a túlélés csak úgy biztosítható, ha megmenti saját apja, Kyle Reese (Anton Yelchin – Star Trek) életét. A legsokkolóbb felismerést azonban egy magányos vándor, Marcus Wright (Sam Worthington – Avatar) érkezése tartogatja, aki olyan döntés elé állítja Connort, aminek meghozatala az egész emberi faj sorsára kihatással lesz… és amely mindkettőjüket öngyilkos küldetésre vezérli az ellenséges vonalak mögé.",
      "image": `${this.config.imagePath}terminator.jpg`,
      "price": 569,
      "stock": 71,
      "featured": true,
      "active": true
    }, {
      "id": 57,
      "catId": 2,
      "name": "A válságstáb",
      "description": "Egy esélytelennek tűnő bolíviai elnökjelölt egy amerikai kampánycsapathoz fordul segítségért, amelyet Jane Bodine (az Oscar-díjas Sandra Bullock), a megtört, de rendkívül tehetséges stratéga vezet. Csak azért tér vissza önként vállalt nyugdíjából, hogy szembeszállhasson egykori legnagyobb ellenfelével, az utálatos Pat Candy-vel (az Oscar-díjas Billy Bob Thornton). ",
      "image": `${this.config.imagePath}valsagstab.jpg`,
      "price": 1599,
      "stock": 37,
      "featured": true,
      "active": true
    }, {
      "id": 58,
      "catId": 2,
      "name": "Végre otthon!",
      "description": "A Galaxis legidegesítőbben optimista űrlénye, akit az sem lendít ki mindent átfogó boldogságából, hogy saját népe üldözi keresztül a világűrön, a Földön bujkál. Egy mogorva, magányos és makacs kamaszlány talál rá, és bár sem a világlátásukban sem a végtagjaik számában nincs bennük semmi közös, mégis társulnak. Igaz, csak azért, mert muszáj. A jövevény üldözői rájuk találnak, és a nyomukba vetik magukat. Mit tehetnének erre ők? Menekülnek, és közben azon törik a fejüket, hogyan menthetnék meg a bolygót, melyet már mindketten otthonuknak éreznek.",
      "image": `${this.config.imagePath}vegreotthon.jpg`,
      "price": 1999,
      "stock": 22,
      "featured": true,
      "active": false
    }, {
      "id": 59,
      "catId": 2,
      "name": "Az utolsó boszorkányvadász",
      "description": "A modern világnak számtalan titka megfejthetetlen: meghökkentő, de a mai világban is élnek köztünk boszorkányok, gonosz természetfeletti lények, akik a világ tönkretételén dolgoznak. A boszorkányvadászok, élükön Kaulderrel, évszázadok óta küzdenek, Kaulder azonban sikeresen megöli a boszorkányok királynőjét. Ő azonban, pillanatokkal a halála előtt megátkozza Kauldert:halhatatlanná teszi, hogy a túlvilágon soha ne találkozhasson szeretteivel. Azonban a boszorkányság sohasem hal ki, és most újra fenyeget a királynő feltámadása…",
      "image": `${this.config.imagePath}boszorkanyvadasz.jpg`,
      "price": 6299,
      "stock": 20,
      "featured": true,
      "active": false
    }, {
      "id": 60,
      "catId": 2,
      "name": "Eredet",
      "description": "A profi tolvaj mindent el tud lopni. Minél nagyobb mester a szakmájában, annál kevésbé lehet előtte akadály. Dom Cobb (Leonardo DiCaprio) a legjobbak között is az első: ő mások álmait szerzi meg. Amikor áldozata éjszaka az álomfázisba jut, ő belopózik, és a legnagyobb értékekkel távozik. E tudás tette Cobbot az ipari kémkedés legkeresettebb bűnözőjévé és örökké menekülő, magányos férfivá.",
      "image": `${this.config.imagePath}eredet.jpg`,
      "price": 989,
      "stock": 21,
      "featured": false,
      "active": false
    }, {
      "id": 61,
      "catId": 2,
      "name": "A lázadó",
      "description": "Tris (Woodley) szövetségeseket és válaszokat keres a futurisztikus Chicago romjai között. Négyessel (James) együtt menekülniük kell a műveltek csoportjának hataloméhes vezetője, Jeanine (Winslet) elől. Az idővel versenyt futva Trisnek rá kell jönnie, hogy családja milyen titok miatt áldozta fel életét és miért próbálja meg a műveltek vezére megállítani őket mindenáron.",
      "image": `${this.config.imagePath}lazado.jpg`,
      "price": 7799,
      "stock": 16,
      "featured": true,
      "active": false
    }, {
      "id": 62,
      "catId": 2,
      "name": "A hűséges",
      "description": "A lázadók egy csapata, élükön Tris-szel és Négyessel veszélyes küldetésre indulnak a várost határoló falakon túlra, ahol egy furcsa új világ és egy minden eddiginél nagyobb fenyegetés várja őket. Együtt dühödt harcba fognak a túlélésért, és ez a csata immáron nem csak csoportjaik és családjaik életben maradásáról szól, hanem az egész város jövőjéről. Az igazságot a falon túl találod!",
      "image": `${this.config.imagePath}huseges.jpg`,
      "price": 4499,
      "stock": 13,
      "featured": true,
      "active": false
    }, {
      "id": 63,
      "catId": 2,
      "name": "Interjú a vámpírral",
      "description": "Az Anne Rice nagysikerű regényéből készült, Neil Jordan által rendezett, világsztárokat felvonultató filmben a főszereplőknek megadatik az örök élet. Amikor 200 évvel ezelőtt a megkeseredett Louis (Brad Pitt) elfogadja a velejéig romlott vámpír, Lestat (Tom Cruise) ajánlatát, és elfogadja az örök élet ajándékát, hamar rájön, hogy ez a sötét ajándék egyben átok is, mely örök gyilkolásra kárhoztatja. A vérrel, kéjvággyal és szenvedéssel átszőtt, sokkoló mégis lenyűgöző vizuális elemekben bővelkedő film valósággal újradefiniálta a vámpírfilmek műfaját.",
      "image": `${this.config.imagePath}vampir.jpg`,
      "price": 789,
      "stock": 5,
      "featured": true,
      "active": false
    }, {
      "id": 64,
      "catId": 2,
      "name": "Mentőexpedíció",
      "description": "Egy marsi misszió során heves viharba kerül az asztronauta Mark Watney és csapata, melynek során az űrhajós egyedül marad és eltűnik. Emiatt Watney-t halottnak hiszik, ő azonban túlélte a vihart, és egyedül találja magát egy barátságtalan bolygón, és mivel igen szegényes ellátmánnyal rendelkezik, muszáj a saját leleményességét és eszét használnia, hogy kitaláljon egy módszert, amivel jelet küldhet a Földre, hogy él, és várja a megmentést. Eközben több millió kilométerrel arrébb, a NASA és egy nemzetközi szakértőgárda fáradhatatlanul dolgozik azon, hogy hazahozzák Markot, ez azonban rendkívüli bátorságot kíván, és az egész világnak össze kell fognia, hogy hazahozzák Watney-t.",
      "image": `${this.config.imagePath}mentoexpedicio.jpg`,
      "price": 5399,
      "stock": 6,
      "featured": true,
      "active": true
    }, {
      "id": 65,
      "catId": 2,
      "name": "A nagy Gatsby",
      "description": "1922 tavaszán járunk New Yorkban, a lazuló erkölcsök, a vibráló jazz, a szeszcsempész-birodalmak és égbeszökő kötvényárak dekadens játszóterén. Az amerikai álmot üldöző, szépreményű író (a Golden Globe®- díjra jelölt Tobey Maguire) a Közép-Nyugatról érkezik Jay Gatsby (a háromszoros Oscar®-díj-jelölt Leonardo DiCaprio), a titokzatos milliomos szomszédságába, akinek birtokán végeláthatatlan estélyek zajlanak. Miután Nick gyönyörű unokatestvérét, Daisyt (az Oscar®-díjra jelölt Carey Mulligan) és kékvérű férjét, Tom Buchanant (Joel Edgerton) Gatsby a bizalmasaivá fogadja, Nick egy tiszta álmokat dédelgető ember lehetetlen szerelmének szemtanúja lesz.",
      "image": `${this.config.imagePath}gatsby.jpg`,
      "price": 1299,
      "stock": 24,
      "featured": false,
      "active": false
    }, {
      "id": 66,
      "catId": 2,
      "name": "Nagy Sándor, a hódító",
      "description": "Oliver Stone mozivászonra varázsolja Nagy Sándor (Colin Farrell) nagyszabású történetét, aki időszámításunk előtt a IV. században leigázta Görögországot, Perzsiát, Afganisztánt és Indiát – az „ismert világ” kilencven százalékát. Hatalmas seregek, harci szekerek és elefántok hadai álltak vele szemben, mégsem veszített egyetlen csatát sem! Nagy Sándor ugyanakkor nemcsak rettenthetetlen hadvezér, hódító és új utakat kereső álmodozó volt, hanem szerető fiú is, aki anyja (Angelina Jolie) szenvedélyes imádata, rendkívüli becsvágya és az apjának (Val Kilmer) való megfelelési vágy között őrlődött. Élete az egész világ történetét megváltoztatta.",
      "image": `${this.config.imagePath}nagysandor.jpg`,
      "price": 6199,
      "stock": 2,
      "featured": true,
      "active": false
    }, {
      "id": 67,
      "catId": 2,
      "name": "Need For Speed",
      "description": "Tobey Marshall (Aaron Paul, Totál szívás) bosszút akar állni a gazdag és öntelt Dino Brewsteren (Dominic Cooper), amiért az a nyakába varrt egy bűntényt, amit nem ő követett el. Tobey a képességei legvégső határait is kész feszegetni: átszeli egész Amerikát, hogy benevezzen egy őrült autóversenyre, amelyen a világ legegzotikusabb járművei vesznek részt – és ahol eszméletlen sebesség, veszély és akció várja. A nagy sikerű videojáték-széria alapján készült és soha nem látott extrákkal felturbózott Need For Speed igazi adrenalinbomba!",
      "image": `${this.config.imagePath}nfs.jpg`,
      "price": 829,
      "stock": 34,
      "featured": true,
      "active": false
    }, {
      "id": 68,
      "catId": 2,
      "name": "Noé",
      "description": "Az Oscar®-díjas Russell Crowe játssza Noét ebben a lélegzetelállító filmben, melyet a bátorság, az önfeláldozás és a remény örökérvényű története inspirált. Emma Watson, valamint két Oscar®-díjas** színész, Anthony Hopkins és Jennifer Connelly is feltűnik az elismert Darren Aronofsky (Fekete hattyú) vizuálisan lenyűgöző, akciódús kalandfilmjében, amely a kritikusok szerint az „egyik legemlékezetesebb Biblia-adaptáció, melyet valaha is filmre álmodtak.” (Richard Roeper, Chicago Sun Times)",
      "image": `${this.config.imagePath}noe.jpg`,
      "price": 1499,
      "stock": 4,
      "featured": false,
      "active": false
    }, {
      "id": 69,
      "catId": 2,
      "name": "Norm, az északi",
      "description": "Norm, a bőbeszédű jegesmedve egy egyszerű kérdésben hajthatatlan: a turistáknak semmi keresnivalója az Északi-sarkon. Amikor egy eszelős ingatlanfejlesztő a fejébe veszi, hogy luxuslakásokat épít otthona jegére, Norm azt teszi, amit minden normális jegesmedve tenne a helyében: felveszi a kesztyűt és egy csapat arasznyi, rettenthetetlen lemminggel az oldalán elindul New Yorkba, hogy egyszer és mindenkorra jegelje üzletet.",
      "image": `${this.config.imagePath}norm.jpg`,
      "price": 479,
      "stock": 18,
      "featured": false,
      "active": false
    }, {
      "id": 70,
      "catId": 2,
      "name": "Gravitáció",
      "description": "Dr. Ryan Stone (az Oscar®-díjas Sandra Bullock), a zseniális kutatótiszt élete első űrhajós kiküldetésén vesz részt a veterán asztronautával, Matt Kowalskival (az Oscar®-díjas George Clooney). Egy egyszerű űrséta során súlyos baleset történik. Az űrhajó megsemmisül, Stone és Kowalski pedig teljesen magára marad, és egymáshoz kötözve sodródik a sötétben. A félelem pánikká erősödik, minden egyes lélegzetvétellel fogy az a kis oxigén is, ami még megmaradt. Haza azonban csak úgy juthatnak, ha még messzebb merészkednek az űr végtelen, fenyegető sötétjébe.",
      "image": `${this.config.imagePath}gravitacio.jpg`,
      "price": 7099,
      "stock": 6,
      "featured": false,
      "active": true
    }, {
      "id": 71,
      "catId": 2,
      "name": "Jack Reacher",
      "description": "Jack Reacher (Tom Cruise, Mission: Impossible – Fantom protokoll), a volt katonai nyomozó végre kilép Lee Child bestseller-sorozatának lapjairól, és a vásznon folytatja kalandjait ebben a kirobbanó akciófilmben, amely a kritikusok szerint „első osztályú thriller”. Mikor többszörös gyilkosság történik, minden bizonyíték arra a letartóztatásban lévő gyanúsítottra mutat, aki védekezés gyanánt egy papírlapot nyújt át, amin ez áll: „Hívjátok Jack Reachert!”. A törvény nem szabhat korlátokat Reachernek az igazság kiderítéséért folytatott harcban, amely egy olyan váratlan ellenféllel állítja őt szembe, aki súlyos titkot őriz, és nem riad vissza az erőszak legdurvább módozataitól sem. ",
      "image": `${this.config.imagePath}jackreacher.jpg`,
      "price": 919,
      "stock": 3,
      "featured": false,
      "active": false
    }, {
      "id": 72,
      "catId": 2,
      "name": "Transformers 3.",
      "description": "Shia LaBeouf viszatér Sam Witwicky szerepében a Transformers 3-ban. Amikor a Föld múltjának egy titokzatos eseménye berobban a jelenbe, az olyan nagy háborúval fenyegeti bolygónkat, hogy még a Transzformerek sem lesznek képesek megmenteni minket.",
      "image": `${this.config.imagePath}transformers3.jpg`,
      "price": 689,
      "stock": 16,
      "featured": true,
      "active": false
    }, {
      "id": 73,
      "catId": 2,
      "name": "Halálos iramban: Hobbs és Shaw",
      "description": "Dwayne Johnson és Jason Statham visszatérnek Hobbs és Shaw feledhetetlen karaktereihez ebben a Halálos iramban-filmek világában játszódó akciódús új moziban. Luke Hobbs (Johnson), a nagyra nőtt zsaru és Deckard Shaw (Statham), a törvényenkívüli szélhámos éveken át csak osztotta egymást – verbálisan és fizikálisan egyaránt. De mikor Brixton (Idris Elba), a kibernetikus úton felpimpelt anarchista ráteszi a kezét egy nagyon veszélyes vírusra, ami akár végezhet az egész emberiséggel, Hobbs-nak és Shaw-nak össze kell állniuk, hogy lenyomják azt a fickót, aki talán még náluk is durvább.",
      "image": `${this.config.imagePath}halalosiramban.jpg`,
      "price": 1999,
      "stock": 2,
      "featured": true,
      "active": true
    }, {
      "id": 74,
      "catId": 2,
      "name": "Godzilla 2: Szörnyek királya",
      "description": "A Föld beteg, és az emberiség a betegség. De van egy gyógyszer, amely minden kórt elpusztít, és sok ezer éve itt él a világon láthatatlanul: a titánok törzse. Ezek az ősi szörnyek kegyetlenek, legyőzhetetlenek, hatalmasak és csodálatosak – ha egyszer elszabadulnak, mindent elpusztítanak, ami otthonuk ártalmára lehet. És most jönnek. Úgy érzik, az emberiség veszélyes: hát előbújnak földalatti fészkeikből, hogy egyszer és mindenkorra leszámoljanak velünk. Az ember önmagában gyenge. E mindent eldöntő, esélytelen csata során ahhoz kell segítségért fordulnia, akitől eddig rettegett: Godzillához.",
      "image": `${this.config.imagePath}godzilla2.jpg`,
      "price": 489,
      "stock": 3,
      "featured": true,
      "active": true
    }, {
      "id": 75,
      "catId": 2,
      "name": "Király ez a srác!",
      "description": "Artúr király legendája napjainkban elevenedik meg ebben a nagyszabású családi kalandfilmben. Alex, az iskolában számkivetett fiú élete fenekestül felfordul, amikor rátalál a legendás Excalibur kardra és lovagi kiképzést kap a nagyhírű varázsló, Merlin (Patrick Stewart) felügyelete alatt. Frissen szerzett tudása segítségével maga mellé állítja iskolatársait, akikkel együtt indul a világ megmentésére, amihez először le kell győznie a gonosz Morganát.",
      "image": `${this.config.imagePath}kiralyezasrac.jpg`,
      "price": 259,
      "stock": 1,
      "featured": true,
      "active": false
    }, {
      "id": 76,
      "catId": 2,
      "name": "Végtelen útvesztő",
      "description": "Hat vadidegen kap meghívást, hogy kipróbáljanak egy minden eddiginél izgalmasabb szabadulószobát. Annyit tudnak csak, hogy aki elsőként kijut, busás pénzjutalomban részesül, így belemennek a játékba. Hamarosan rájönnek, hogy az ártalmatlannak tűnő versenyben valójában az életükért küzdenek és csupán bábuk egy szadista sakktábláján. Ahogy haladnak szobáról-szobára, úgy válnak a feladatok egyre veszélyesebbé. Az útvesztőt létrehozó személy okos és kegyetlen, ráadásul úgy tűnik, mintha láthatatlan ellenfelük behatóan ismerné őket... talán, ha felfedik egymás előtt múltjuk titkait, még van esélyük életben maradni.",
      "image": `${this.config.imagePath}vegtelenutveszto.jpg`,
      "price": 7499,
      "stock": 7,
      "featured": false,
      "active": false
    }, {
      "id": 77,
      "catId": 2,
      "name": "Venom",
      "description": "Megérkezett az egyik legrejtélyesebb, legösszetettebb és legtökösebb Marvel-karakter, Venom! Eddie Brock (Tom Hardy – Fékezhetetlen, A sötét lovag: Felemelkedés, Mad Max: A harag útja) lába alól kicsúszik a talaj, amikor nemcsak a munkáját veszíti el, de menyasszonya is szakít vele. Az újságíró teljesen maga alatt van, és ha mindez nem lenne elég, egy földönkívüli szimbióta gazdateste lesz: kettejük egysége a szuperképességekkel rendelkező Venom. Szükségük is lesz emberfeletti erejükre, ugyanis egy másik, sokkal erősebb és ütős fegyverarzenállal felszerelt szimbióta el akarja pusztítani bolygónkat. ",
      "image": `${this.config.imagePath}venom.jpg`,
      "price": 769,
      "stock": 5,
      "featured": false,
      "active": true
    }, {
      "id": 78,
      "catId": 2,
      "name": "Ragadozók",
      "description": "A Ragadozók Robert Rodriguez tálalásában új, merész fejezetet nyit a földön kívüli gyilkosok univerzumában. Royce (Adrien Brody), a sokat látott zsoldos kénytelen-kelletlen az élére áll azoknak a különlegesen képzett harcosoknak, akik maguk sem tudják hogyan, egy idegen bolygón találkoztak. A hidegvérű gyilkosok egy totális háború közepén találják magukat, és rájuk az áldozat szerepét osztották. Mit tehetnének mást? Összemérik erejüket a Ragadozók legújabb generációjával.",
      "image": `${this.config.imagePath}ragadozok.jpg`,
      "price": 10099,
      "stock": 4,
      "featured": true,
      "active": false
    }, {
      "id": 79,
      "catId": 2,
      "name": "Solo - Egy Star Wars-történet",
      "description": "Szállj fel az Ezeréves Sólyomra és utazz egy messzi-messzi galaxisba egy vadonatúj Star Wars-történetben a galaxis legkedveltebb gazfickójával. Vakmerő alvilági kalandok során Han Solo megismerkedik későbbi másodpilótájával, Chewbaccával és találkozik a hírhedt szerencsejátékossal, Lando Calrissiannel, s közös utazásuk végére a Star Wars saga legszokatlanabb hőseivé válnak.",
      "image": `${this.config.imagePath}solo.jpg`,
      "price": 799,
      "stock": 11,
      "featured": false,
      "active": true
    }, {
      "id": 80,
      "catId": 2,
      "name": "The Commuter - Nincs kiszállás",
      "description": "Egy életunt biztosítási ügynök (Liam Neeson – Elrabolva, Fehér pokol) egyhangú, mindennapi ingázása hirtelen izgalmas fordulatot vesz, amikor egy titokzatos idegen (Vera Farmiga – Démonok között) leszólítja a vonaton, és arra kéri, találjon meg egy utast, még mielőtt beérnek a végállomásra. Miközben versenyt fut az idővel, hogy megoldja a rejtélyt, egy halálos terv körvonalazódik, ami veszélyezteti nemcsak saját, de utastársai, sőt még családja életét is.",
      "image": `${this.config.imagePath}commuter.jpg`,
      "price": 8799,
      "stock": 4,
      "featured": false,
      "active": false
    }, {
      "id": 81,
      "catId": 2,
      "name": "24 óra a halálig",
      "description": "Travist (Ethan Hawke), az egykori bérgyilkost volt társa újra belerángatja egy melóba: a szuperkém, akit likvidálnia kellene azonban egy anya, a férfi ezért megpróbál eltérni a bevett protokolltól, amiért nagyon drágán megfizet… 24 órája van mindent rendbe hozni és bosszút állni.",
      "image": `${this.config.imagePath}24ora.jpg`,
      "price": 979,
      "stock": 1,
      "featured": true,
      "active": true
    }, {
      "id": 82,
      "catId": 2,
      "name": "Halálfutam: Totális anarchia",
      "description": "Connor Gibson (Zach McGowan) szeme előtt csupán egy cél lebeg: be akar jutni a világ egyik legjobban őrzött börtönébe, hogy egy szabályokat és kegyelmet nem ismerő, illegális autóverseny, a Halálfutam során legyőzze a brutális börtönsport legendás sofőrjét, Frankensteint. Terve megvalósításában Baltimore Bob (Danny Glover) és Lists (Fred Koehler) segítségét kéri. Miután beleszeret egy gyönyörű csaposlányba, Jane-be (Christine Marzano), már nem csak saját maga miatt akar életben maradni ebben a brutális világban, ahol nincsenek őrök, nincsenek szabályok, nincsenek utak, de legfőképp: nincs félelem!",
      "image": `${this.config.imagePath}halalfutam.jpg`,
      "price": 7799,
      "stock": 4,
      "featured": false,
      "active": true
    }, {
      "id": 83,
      "catId": 2,
      "name": "Az Igazság Ligája",
      "description": "Superman önfeláldozó tettétől hajtva és az emberiségbe vetett hitét visszanyerő Bruce Wayne új szövetségese, Diana Prince segítségét kéri abban, hogy szembesüljenek egy minden eddiginél veszélyesebb ellenféllel. Batman és Wonder Woman azonnal akcióba lendülnek, hogy különleges képeségekkel rendelkező embereket toborozva együtt szálljanak szembe az új fenyegetéssel. Csakhogy hiába sikerült olyan hihetetlen hősökből csapatot alakítani, mint Batman, Wonder Woman, Aquaman, Cyborg és a Villám, talán már túl késő ahhoz, hogy megmentsék a világot a katasztrófától.",
      "image": `${this.config.imagePath}justiceleague.jpg`,
      "price": 7499,
      "stock": 15,
      "featured": true,
      "active": false
    }, {
      "id": 84,
      "catId": 2,
      "name": "Dunkirk",
      "description": "A történet szárazföldön, tengeren és a levegőben bontakozik ki, és arra a több százezer brit és szövetséges katonára összpontosít, akik Dunkerque partjainál ragadtak, miközben az ellenség marka egyre szorosabbra zárult körülöttük. Odafenn Spitfire típusú repülők szállnak szembe az ellenséges gépekkel, miközben több száz kisebb hajó indul el Anglia partjairól többnyire civil legénységgel a fedélzeten, hogy életük kockáztatásával kimentsék a francia partoknál rekedt katonákat – vagy legalábbis egy részüket.",
      "image": `${this.config.imagePath}dunkirk.jpg`,
      "price": 919,
      "stock": 6,
      "featured": true,
      "active": false
    }, {
      "id": 85,
      "catId": 2,
      "name": "Páncélba zárt szellem",
      "description": "A Páncélba zárt szellem főhőse az Őrnagy, a különleges erőknél szolgáló egyedi humán-kiborg hibrid, a 9-es Részleg nevű kommandós osztag vezetője. A legveszélyesebb bűnözők és szélsőségesek kiiktatására szakosodott 9-es Részleg egy olyan ellenséggel kerül szembe, amelynek egyetlen célja, hogy elpusztítsa a HankaRobotika kibertechnológia fejlesztéseit.",
      "image": `${this.config.imagePath}pancel.jpg`,
      "price": 759,
      "stock": 4,
      "featured": false,
      "active": false
    }, {
      "id": 86,
      "catId": 2,
      "name": "Wonder Woman",
      "description": "Nem hívták mindig Wonder Womannek. Valaha ő volt Diana (Gal Gadot), az amazonok hercegnője, aki egy távoli, titkos szigeten, csupa nő között élt. Uralkodónak nevelték, legyőzhetetlen harcosnak képezték ki, de békében teltek a napjai. Míg meg nem látta az első férfit. Egy pilóta (Chris Pine) lezuhan Sa parton, és óriási háborúról beszél a páncélba öltözött nőknek, amely a kinti világban dúl. Diana biztos benne, hogy ő véget tudna vetni a vérengzésnek, a lábadozó pilótával együtt elhagyja az otthonát, és beleveti magát a harcba.",
      "image": `${this.config.imagePath}ww.jpg`,
      "price": 3199,
      "stock": 2,
      "featured": true,
      "active": true
    }, {
      "id": 87,
      "catId": 2,
      "name": "Arthur király: A kard legendája",
      "description": "Guy Ritchie a tőle megszokott pörgős módon kelti életre az Excalibur ősi legendáját, amely Arthur történetét követi nyomon a nyomortól egészen a trónig. Amikor az apját megölik, a nagybátyja pedig elfoglalja a trónt, Arthur elveszíti uralkodói jogát, és mostoha körülmények között, a város sikátoraiban kell felnevelkednie. Ám amikor neki sikerül kihúzni a mitikus kardot a sziklából, az élete egy csapásra megváltozik, ő pedig kénytelen szembesülni valódi örökségével.",
      "image": `${this.config.imagePath}arthur.jpg`,
      "price": 809,
      "stock": 4,
      "featured": false,
      "active": true
    }, {
      "id": 88,
      "catId": 2,
      "name": "Kong: Koponya-sziget",
      "description": "„SZÍNTISZTA AKCIÓ.” - Stephen Whitty, THE STAR-LEDGER",
      "image": `${this.config.imagePath}kong.jpg`,
      "price": 1399,
      "stock": 17,
      "featured": false,
      "active": false
    }, {
      "id": 89,
      "catId": 2,
      "name": "Lego Batman - A film",
      "description": "Ugyanazzal az őrületes tempóval felvértezve, mint ami A LEGO®-kalandból is világszenzációt csinált, az eredeti csapat önjelölt vezetője, LEGO® Batman most saját egész estés kalanddal tér vissza. De Gotham óriási változások elé néz, és ha Batman meg akarja akadályozni Jokert a hatalomátvételben, akkor fel kell hagynia ezzel az „egyedül dolgozom” mizériával, és együtt kell működnie másokkal, no meg talán az sem ártana, ha egy kicsit, egy icipicikét felengedne.",
      "image": `${this.config.imagePath}legobatman.jpg`,
      "price": 7399,
      "stock": 9,
      "featured": false,
      "active": true
    }, {
      "id": 90,
      "catId": 2,
      "name": "Underworld - Vérözön",
      "description": "A vámpírok és vérfarkasok háborúja tovább folytatódik, és tartogat még néhány váratlan fordulatot! Selene, a halálosztó (Kate Beckinsale) egyszerre próbálja túlélni a lycan klánok brutális támadásait és az őt eláruló vámpírok ostromát. Egyedüli szövetségesei – David (Theo James) és apja, Thomas (Charles Dance) – segítségével el kell érnie, hogy véget érjenek a csatározások. Még akkor is, ha a béke csak egy módon születhet meg: a legnagyobb áldozat árán...",
      "image": `${this.config.imagePath}underworld.jpg`,
      "price": 649,
      "stock": 8,
      "featured": false,
      "active": true,
      "salePrice": 599
    }, {
      "id": 91,
      "catId": 2,
      "name": "Doctor Strange",
      "description": "A világhírű idegsebész, Dr. Stephen Strange élete tragikus fordulatot vesz egy szörnyű autóbaleset következtében. Miután a kezeit attól kezdve használni képtelen orvosnak a hagyományos gyógymódok nem használnak, valószínűtlen helyen talál segítséget - egy titokzatos himalájai enklávé, a Kamar-Taj az utolsó reménye.",
      "image": `${this.config.imagePath}drstrange.jpg`,
      "price": 14999,
      "stock": 11,
      "featured": true,
      "active": true
    }, {
      "id": 92,
      "catId": 2,
      "name": "Inferno",
      "description": "Langdon professzor (Tom Hanks – Forrest Gump, A számkivetett), a Harvard veszélyes kalandoktól sem visszariadó szimbólumkutatója egy firenzei kórházban tér magához. Nem tudja, hogyan került oda, ahogy azt sem, miképp szerzett lőtt sebet. Az viszont egyértelmű, hogy most is egyszerre kénytelen menekülni és nyomozni. A kórházban megismert Sienna Brooks (Felicity Jones – A mindenség elmélete, Zsivány Egyes: Egy Star Wars történet) segítségével próbálja visszanyerni emlékezetét, miközben Európát átszelve igyekeznek megakadályozni, hogy egy vírus kiirtsa a Föld népességének felét.",
      "image": `${this.config.imagePath}inferno.jpg`,
      "price": 9899,
      "stock": 1,
      "featured": false,
      "active": true
    }, {
      "id": 93,
      "catId": 2,
      "name": "A hét mesterlövész (2016)",
      "description": "Antoine Fuqua rendező bújtatta modern köntösbe a filmklasszikust, amelyben a kegyetlen Bartholomew Bogue (Peter Sarsgaard) tart rettegésben egy kisvárost. A kétségbeesett lakók, élükön Emma Cullennel (Haley Bennett), hét törvényenkívülihez fordulnak segítségért.",
      "image": `${this.config.imagePath}hetmesterlovesz.jpg`,
      "price": 399,
      "stock": 10,
      "featured": false,
      "active": true
    }, {
      "id": 94,
      "catId": 2,
      "name": "A Vadász és a Jégkirálynő",
      "description": "Az új történetben Ravenna (az Oscar®-díjas Charlize Theron ) húga, Freya (Emily Blunt) kapja a főszerepet, aki képes jéggé dermeszteni ellenségeit, ám nem elég neki ennyi hatalom: hosszú évek alatt pusztító erejű vadászsereget képez ki magának. A Jégkirálynő kiköti harcosai számára: örökre keményítsék meg szívüket a szerelemmel szemben. Eric (Chris Hemsworth) és Sara (Jessica Chastain) azonban képtelenek teljesíteni úrnőjük parancsát, ezért pedig lakolniuk kell...",
      "image": `${this.config.imagePath}vadasz.jpg`,
      "price": 6099,
      "stock": 5,
      "featured": true,
      "active": true
    }, {
      "id": 95,
      "catId": 2,
      "name": "Victor Frankenstein",
      "description": "Paul McGuigan (Alvilági játékok, Sherlock–sorozat) akciódús thrillerében napjaink két legismertebb brit színésze, James McAvoy és Daniel Radcliffe lehel új életet Mary Shelley klasszikus horrormeséjébe. Victor Frankenstein (McAvoy), a vadul kísérletező tudós hűséges segédjével, Igorral (Radcliffe) az oldalán a halhatatlanság lehetőségeit kutatja. Amikor azonban Victor túl messzire megy, megszállottsága borzalmas következményekhez vezet. Egyedül Igornak sikerülhet visszarángatni barátját az őrület határáról – és megmenteni őt, saját magát és mindenki mást is a világra szabadított szörnyű teremtménytől.",
      "image": `${this.config.imagePath}victor.jpg`,
      "price": 759,
      "stock": 8,
      "featured": false,
      "active": false
    }, {
      "id": 96,
      "catId": 2,
      "name": "Trónok harca: 5. évad",
      "description": "Varys alapos tervet eszelt ki arra az esetre, ha meggyengülne a jelelegi uralkodó helye a trónon, terveit azonban titkolja. Csak Tyrionnak mondja el, hogy jó lenne Westeros trónjára egy olyan embert ültetni, akit a nép is kedvel és támogat, de neki nemigen tűnik fel, hogy magára gondol. A Trónok harca történetében először ebben az évadban láthatunk egy flashback-et is, melyben Cersei tűnik fel fiatal korában. Északon pedig valami nagy esemény készül: a Bolton-sereg ugyanis támadásra kész...",
      "image": `${this.config.imagePath}got.jpg`,
      "price": 4499,
      "stock": 2,
      "featured": true,
      "active": false
    }, {
      "id": 97,
      "catId": 2,
      "name": "Hitman - A 47-es ügynök",
      "description": "A 47-es ügynök (Rupert Friend – Homeland) a tökéletes fegyver: gyors, kegyetlen, embertelen. Nem is ember igazán: egy génlaboratóriumban született, és minden tulajdonságát úgy alakították, hogy megfeleljen a célnak, azaz gondolkodás nélkül, halálos pontossággal teljesítsen bármilyen parancsot. Ám úgy látszik, nincs tökéletes gyilkológép… A 47-es szembekerül a legendás bérgyilkossal, John Smithszel (Zachary Quinto – Star Trek): mindketten ugyanannak a menekülő nőnek (Hannah Ware) próbálnak segíteni. Ám a játszma sokkal bonyolultabb ennél, mert itt mindenki egyszerre áruló és áldozat. Valaki mégis győzni fog…",
      "image": `${this.config.imagePath}hitman.jpg`,
      "price": 4699,
      "stock": 21,
      "featured": false,
      "active": true,
      "salePrice": 4299
    }, {
      "id": 98,
      "catId": 2,
      "name": "Fantasztikus Négyes",
      "description": "A MARVEL egyik legsikeresebb és legrégebben futó képregénye A FANTASZTIKUS NÉGYES. Amikor a szuperhős csapat négy különc tagja átsodródik egy alternatív univerzumba, és ott megdöbbentő átalakuláson megy keresztül, az életük visszavonhatatlanul megváltozik: először rá kell jönniük, mit kezdjenek különös, új erejükkel, azután meg kell tanulniuk, hogyan használják azt, végül össze kell fogniuk, hogy megmentsék a Földet egy egykori baráttól, aki mára ellenség lett.",
      "image": `${this.config.imagePath}fantastic4.jpg`,
      "price": 8199,
      "stock": 20,
      "featured": true,
      "active": true
    }, {
      "id": 99,
      "catId": 2,
      "name": "Az U.N.C.L.E. embere",
      "description": " Az 1960-as évek elején, a hidegháború évei alatt Napoleon Solo segíteni szeretne Gaby Teller-nek disszidálni Nyugat-Németországba, ám ehhez meg kell küzdenie Illya Kuryakin-nal, aki hátráltatja őket ebben. Ellentétük alapja, hogy  Napoleon Solo egy CIA ügynök, Illya Kuryakin pedig a KGB-nek dolgozik. Azonban hárman egy közös feladatot kapnak: meg kell állítani a bűnbandát, amely az atomfegyverek kifejlesztésén és elterjesztésén dogozik. Az ügy megoldásához pedig elengedhetetlen, hogy félretegyék személyes nézeteltéréseiket.",
      "image": `${this.config.imagePath}uncle.jpg`,
      "price": 6099,
      "stock": 6,
      "featured": false,
      "active": true
    }, {
      "id": 100,
      "catId": 2,
      "name": "Törésvonal",
      "description": "Kalifornia lakói fel vannak készülve a földrengésekre. Azt hitték. De ilyen méretű katasztrófára senki sem számított:miután a Szent András-törésvonal mentén húzódó Kaliforniát egy kilencesnél is erősebb földrengés rázza meg, és gyakorlatilag a földdel teszi egyenlővé, egy mentőhelikopter-pilóta és különélő felesége együtt indulnak el Los Angelesből San Franciscóba, hogy megmentsék egyetlen lányukat. De a rendkívüli kihívásokkal teli út csak a kezdet, és mikor azt hinnék, hogy már túl vannak a nehezén... a legrosszabb még csak akkor jön.",
      "image": `${this.config.imagePath}toresvonal.jpg`,
      "price": 2499,
      "stock": 4,
      "featured": true,
      "active": false
    }
  ];

  constructor(private config: ConfigService) {
  }

  getProducts(categoryId: number = 0, filterStr: string = ''): Array<Product> {
    let filteredList = this.list;

    if (categoryId > 0) {
      filteredList = this.list.filter(product => product.catId === categoryId);
    }
    if (filterStr) {
      return filteredList.filter(product => product.name.toLocaleLowerCase().includes(filterStr.toLocaleLowerCase()));
    } else {
      return filteredList;
    }
  }

  getFiveRandomFeatured(): Array<Product> {
    const topFiveFeaturedProducts: Product[] = this.list.filter(product => product.featured)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    return topFiveFeaturedProducts;
  }

  update(movie: Product): Array<Product> {
    return;
  };

  remove(movie: Product): Array<Product> {
    return;
  };

}
