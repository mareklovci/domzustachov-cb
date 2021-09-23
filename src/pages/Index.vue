<template>
  <Layout>
    <template slot="header">
      <header class="mt-48 mb-24">
        <div class="container text-center">
          <h1 class="font-semibold text-4xl mb-24">Město, kde by chtěl žít každý</h1>
          <p class="text-2xl mb-14">
            Nadcházející víkend strávíme v Českých Budějovicích.<br>
            Někteří z nás poprvé, jiní se tu usadili natrvalo. Přinášíme informace k pobytu i tipy pro volný čas. Pryč
            se odtud nikomu chtít nebude.
          </p>
          <div class="text-gray font-brandon font-normal">
            <p>Daniela Tůmová (Stručková), Stanislav Kliment</p>
            <p>Kód: Marek Lovčí</p>
          </div>
        </div>
      </header>
    </template>

    <template slot="main">
      <main class="pb-24">
        <div class="mb-12">
          <img src="https://dechari.cz/01-namesti.jpg" class="w-full mb-4"
               alt="Náměstí České Budějovice"/>
          <div class="container text-right">
            <p class="text-xs font-brandon font-light">FOTO kasakphoto/Shutterstock</p>
          </div>
        </div>
        <article class="container">
          <p>
            Naším domovem se stane naprosté centrum jihočeské metropole — náměstí Přemysla Otakara II., druhé
            největší čtvercové náměstí v Česku. Všechno tu máme po ruce a obejdeme se bez autobusu. Bydlet budeme ve
            čtyřhvězdičkovém Grandhotelu Zvon (budova ze 17. století vpravo na snímku). Jedno je tak jisté: lepší
            ubytování jsme ještě neměli.
          </p>

          <div class="bg-red-light border-t-6 border-red px-16 py-16 mt-16 mb-16 font-brandon font-normal" role="alert">
            <p class="font-black text-red mb-9 text-2xl uppercase">Důležité upozornění</p>
            <p>Při příjezdu do hotelu <b>je třeba prokázat bezinfekčnost</b> jedním z uvedených způsobů:</p>
            <ul class="list-disc list-inside mb-9">
              <li>před nejméně 14 dny ukončeným očkováním;</li>
              <li>negativním testem, kdy od odběru uplynulo nejvýše 72 hodin (antigenní test) nebo 7 dní (PCR
                test);
              </li>
              <li>potvrzením o prodělaném onemocnění covid-19 před nejvýše 180 dny.</li>
            </ul>
            <p>
              Počítejte prosím s tím, že kdo nesplňuje žádnou z uvedených podmínek nebo ji nebude schopen
              <b>věrohodně doložit</b>, hotel ho odmítne ubytovat a pobyt tím pro něj končí. Myslete na to prosím
              a ušetřeme si zbytečné nepříjemnosti.
            </p>
          </div>

          <div class="space-y-6">
            <p>
              Náš pobyt je s polopenzí. Vzhledem k pozdnímu pátečnímu příjezdu však začínáme až sobotní snídaní. Páteční
              večeři je ale možné vyřešit i celkem nízkorozpočtově, například zalitím polévky či nudlí. Všichni, kdo s
              námi zůstanou po celý pobyt, na pokoji najdou menší kuchyňský kout se základním nádobím. Rychlovarnou
              konvici pak mají úplně všechny pokoje.
            </p>
            <p>
              Snídaně se podávají od 7 hodin (samozřejmě můžete přijít i později, ale od devíti zkoušíme).
            </p>
            <p>
              Večeře jsme rezervovali na 19. hodinu v hotelové restauraci. Nemáme společné jídlo. Vybírat můžete
              z jídelního lístku, na co máte chuť. (Počítejte ale s delším čekáním vzhledem k velikosti naší skupiny.)
              Orchestr vás zve na jedno hlavní jídlo a jeden nápoj (pivo nebo nealko). <b>Prosíme vás o dodržení
              limitu cca 300 korun.</b> Pití vyjde na 50, takže na jídlo zbývá dalších 250 korun. Bez problému si tu za
              tuhle cenu vyberete. <b>Veškerá další útrata už jde na váš vlastní účet.</b> Žízeň tu hasí Pilsner Urquell
              z tanku nebo černý Kozel. Pro nezletilé velký výběr nealkoholických nápojů.
            </p>
            <p>
              Restaurace kombinuje českou a vídeňskou kuchyni. Vybírat můžete už teď, <a class="underline"
                                                                                         href="https://zvon-cb.cz/wp-content/uploads/2021/04/Jidelni_listek_NET.pdf"
                                                                                         target="_blank">nabídka je
              opravdu lákavá [PDF]</a>.
            </p>
            <p>
              Ve vaší režii tedy zůstává pouze páteční večeře, sobotní, pondělní (a případně úterní) oběd. Využít
              můžete některý z gastronomických tipů níže. Nedělní oběd plánujeme společný.
            </p>
          </div>

          <div class="mt-16">
            <h2 class="text-2xl font-normal mb-8">Kde zaparkovat</h2>
            <p>
              Všichni, kdo dorazí vlastním autem, mají možnost odstavit ho na nedalekém Senovážném náměstí (250 metrů
              od hotelu). V době od pátku 20.00 hodin do pondělí 8.00 hodin zcela zdarma. V jiný čas přijde hodina
              parkování na 20 korun.
            </p>
          </div>

          <div class="mt-16 mb-16">
            <img src="https://dechari.cz/02-sal.jpg" width="1920" class="w-full mb-4"
                 alt="Sál konzervatoře České Budějovice"/>
            <div class="container text-right">
              <p class="text-xs font-brandon font-light">FOTO Konzervatoř České Budějovice</p>
            </div>
          </div>

          <p>
            Protože je náš pobyt částečně také pracovní, zkoušky budou probíhat dopoledne (od 9 do 12 hodin) i odpoledne
            (od 14 do 16 hodin) v moderně zrekonstruovaném koncertním sále <b>českobudějovické konzervatoře</b>
            (Kanovnická 391/22). Pěšky je to z hotelu pouhých 200 metrů. Kanovnická ulice vybíhá
            z toho rohu náměstí, kde stojí Černá věž s přilehlým kostelem sv. Mikuláše. Nemůžete minout.
          </p>

          <div class="bg-red-light border-t-6 border-red px-16 py-16 mt-16 mb-16 font-brandon font-normal" role="alert">
            <p>
              Upozorňujeme na <b>povinnost pohybovat se v prostorách konzervatoře a hotelu se zakrytými dýchacími
              cestami</b>. Roušku či respirátor je možné odložit až po vstupu na pokoj či po usazení ke stolu v
              hotelové restauraci. Buďte prosím ohleduplní k ostatním hostům a řiďte se pokyny personálu. Děkujeme.
            </p>
          </div>

          <div class="space-y-3 mb-16">
            <h2 class="text-2xl font-normal mb-8">Kde se najíst, kam na pivo</h2>
            <p>
              Kdo nebyl v <b>Masných krámech</b> (Krajinská 31/9), nebyl v Budějcích! Klasická restaurace pro turisty
              v historických kulisách. Na čepu je samozřejmě Budvar. Vyzkoušet tu můžete kvasnicový ležák
              Kroužek, který běžně v obchodě neseženete.
            </p>
            <p>
              Příjemné posezení s výhledem na slepé rameno řeky Malše nabízí rodinný hotel s restaurací <b>Klika</b>
              (Hroznová 487/25). Určitě nevynechte pravou jihočeskou kulajdu se zastřeným vejcem. Ochutnat tu
              můžete pivo z Prachatic.
            </p>
            <p>
              Pokud by se mezi námi našel skalní fanoušek Budweiser Budvaru, čeká na něj <b>Budvarka</b> (Karla IV.
              8—10), značková restaurace nejznámější místní firmy nabízející skutečně stylový interiér.
            </p>
            <p>
              Za doporučení rozhodně stojí restaurace s vlastním minipivovarem <b>Krajinská 27</b>. Na výběr máte
              z několika druhů piv, od slabších až po hodně silná. Elegantní možnost, jak se vyhnout Budvaru a
              zkusit něco nového. Pivo si můžete odnést i s sebou v lahvích, třeba jako dárek domů.
            </p>
            <p>
              Kdo chce zapůsobit na svůj protějšek, pozve ho do restaurace <b>U Solné brány</b> (Radniční 138). Patří
              k tomu nejlepšímu na místní gastronomické scéně. Noblesní prostředí, vytříbená kuchyně. Při placení
              romantika rázem vezme za své, ale každý špás holt něco stojí.
            </p>
            <p>
              Za větší exotikou zajděte do restaurace <b>Gateway of India</b> (Piaristická 22/8). Trefíte sem bezpečně.
              Vůně karí se táhne celou ulicí.
            </p>
            <p>
              Jestli máte jen malý hlad, zkuste <b>Soupculture</b> (Karla IV. 92). Polévku tu dostane do kelímku, který
              nakonec taky sníte.
            </p>
            <p>
              Když už jste přijeli, chtělo by to ochutnat místní specialitu. <b>Vypečený okno</b> (Hroznová 10) vám
              nabídne pravý zelňák, tedy jihočeskou „pizzu“ s kysaným zelím.
            </p>
            <p>
              Kdo by měl chuť na burger a plzeňskou dvanáctku, otevře <b>Modrý dveře</b> (Biskupská 129/1).
            </p>
            <p>
              Jestli raději sázíte na ověřené značky, v centru města najdete i <b>Potrefenou husu</b> či <b>McDonald&#39;s</b>.
            </p>
          </div>

          <div class="space-y-3 mb-16">
            <h2 class="text-2xl font-normal mb-8">Na zmrzlinu do Zmrz.li</h2>
            <p>
              Seženete tu vanilkovou i čokoládovou, vedle nich však také třeba čaj masala, černé pivo či mátovou s
              pepřem. Majitelka si všechny vyrábí sama. Přijďte do <b>Zmrz.li</b> (Hradební 14) a nechte se překvapit
              denní nabídkou.
            </p>
            <p>
              K návštěvě zve velmi oblíbené <b>Café Datel</b> (Piaristická 22/8). Stylový podnik s širokou nabídkou
              dezertů. Najít volný stůl často bývá problém.
            </p>
            <p>
              Lákavé posezení přímo na hladině Malše nabízí <b>Kavárna Vlnna</b> (Sokolský ostrov 462/1). Je zároveň
              nástupním místem k vyhlídkové plavbě lodí. Půjčí vám tu také šlapadla.
            </p>
          </div>

          <div class="space-y-3 mb-16">
            <h2 class="text-2xl font-normal mb-8">Co s načatým večerem</h2>
            <p>
              Jestli chcete proniknout mezi místní studenty, vydejte se za písničkou do hudebního klubu <b>Paradox</b>
              (Krajinská 33/5). Klasická diskotéka se vším, co k ní patří. <b>Vstup od 18 let.</b> Za rozbitý obličej či
              nečekané početí si každý ručí sám.
            </p>
            <p>
              O poznání klidnější prostředí nabízí poetický bar <b>Žlutá ponorka</b> (Česká 141/66). Ochutnáte tu
              vyladěné drinky nevšedních kombinací podávané v originálním nádobí. Rozhodně stojí za návštěvu!
            </p>
            <p>
              Když už chce jít i barmanka z nonstopu spát, zbývá fastfood <b>Hladový vokno</b> (Kněžská 373/10).
              Otevřeno má do jedné ráno. Je to poslední možnost, kde se v centru města najíst. Slušný poměr
              cena/výkon, ale to už v tuhle hodinu stejně nebudete vnímat.
            </p>
          </div>

          <div class="space-y-3 mb-16">
            <h2 class="text-2xl font-normal mb-8">Kam za nákupy</h2>
            <p>
              Řadu obchodů najdete přímo na náměstí a v přilehlých ulicích. Kdo by potřeboval nakoupit potraviny,
              v Obchodní galerii Dvořák (rovněž na náměstí) najde <b>Normu</b>.
            </p>
            <p>
              Když stojíte před konzervatoří, směrem za mostem se tyčí budova České národní banky, která značí,
              že jste dorazili před <b>Lannovu třídu</b>, nákupní zónu místních. Dovede vás až k hlavnímu nádraží, v jehož
              těsném sousedství najdete menší <b>obchodní centrum Mercury</b>. Více obchodů a služeb nabízí <b>IGY
              centrum</b>, to už je ale z centra o něco dál. Dojet sem můžete MHD.
            </p>
          </div>

          <div class="space-y-3 mb-16">
            <h2 class="text-2xl font-normal mb-8">Tipy pro volné chvíle</h2>
            <p>
              Do odjezdu doplníme. Těšit se můžete na sobotní společnou prohlídku Budějovického Budvaru.
            </p>
          </div>

        </article>
      </main>
    </template>

  </Layout>
</template>

<script>
import Layout from '~/layouts/Budvar.vue'

export default {
  components: {
    Layout
  },
  metaInfo: {
    title: 'České Budějovice 2021'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
