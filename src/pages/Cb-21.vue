<!--<!DOCTYPE html>-->
<!--<html lang="en">-->

<!--<head>-->
<!--  <meta charset="UTF-8">-->
<!--  <meta http-equiv="X-UA-Compatible" content="IE=edge">-->
<!--  <meta name="viewport" content="width=device-width, initial-scale=1.0">-->
<!--  <link rel="stylesheet" href="fonts.css">-->
<!--  <link rel="stylesheet" href="style.css">-->
<!--  <title>DOM ZUŠ Tachov | České Budějovice 2021</title>-->
<!--</head>-->

<!--<footer>-->

<!--</footer>-->
<!--</body>-->

<!--</html>-->

<template>
  <Layout>
    <template slot="header">
      <header class="mt-48 mb-24">
        <div class="container text-center">
          <h1 class="font-semibold text-8xl mb-24">Město, kde by chtěl žít každý</h1>
          <p class="font-normal text-5xl mb-14">
            Nadcházející víkend strávíme v Českých Budějovicích.<br>
            Někteří z nás poprvé, jiní se tu usadili natrvalo. Přinášíme informace k pobytu i tipy pro volný čas. Pryč
            se odtud nikomu chtít nebude.
          </p>
          <div class="text-gray font-brandon">
            <p>Daniela Tůmová (Stručková), Stanislav Kliment</p>
            <p>Kód: Marek Lovčí</p>
          </div>
        </div>
      </header>
    </template>

    <template slot="main">
      <main class="pb-24">
        <div class="mb-12">
          <g-image src="~/assets/imgs/01-namesti.jpg" class="w-screen mb-4" alt="Náměstí České Budějovice"/>
          <div class="container text-right">
            <p class="text-xl font-brandon font-light">FOTO kasakphoto/Shutterstock</p>
          </div>
        </div>
        <article class="container">
          <p class="font-argent font-normal">
            Naším domovem se stane naprosté centrum jihočeské metropole — náměstí Přemysla Otakara II., druhé
            největší čtvercové náměstí v Česku. Všechno tu máme po ruce a obejdeme se bez autobusu. Bydlet budeme ve
            čtyřhvězdičkovém Grandhotelu Zvon (budova ze 17. století vpravo na snímku). Jedno je tak jisté: lepší
            ubytování jsme ještě neměli.
          </p>

          <div class="bg-red-light border-t-6 border-red px-16 py-16 mt-16 mb-16 font-brandon" role="alert">
            <p class="font-black text-red mb-9 text-5xl uppercase">Důležité upozornění</p>
            <p>Při příjezdu do hotelu <b>je třeba prokázat bezinfekčnost</b> jedním z uvedených způsobů:</p>
            <ul class="list-disc list-inside mb-9">
              <li>před nejméně 14 dny ukončeným očkováním;</li>
              <li>negativním testem, kdy od odběru uplynulo nejvýše 72 hodin (antigenní test) nebo 7 dní (PCR
                test);
              </li>
              <li>prokázáním o prodělaném onemocnění covid-19 před nejvýše 180 dny.</li>
            </ul>
            <p>
              Počítejte prosím s tím, že kdo nesplňuje žádnou z uvedených podmínek nebo ji nebude schopen
              <b>věrohodně doložit</b>, hotel ho odmítne ubytovat a pobyt tím pro něj končí. Myslete na to prosím
              a ušetřeme si zbytečné nepříjemnosti.
            </p>
          </div>

          <p>
            Náš pobyt je s polopenzí. Vzhledem k pozdnímu pátečnímu příjezdu začínáme až sobotní snídaní. Snídaně se
            podávají od 7 hodin. Protože je náš pobyt částečně také pracovní, zkoušky budou probíhat dopoledne (od 9
            hodin) i odpoledne (dle domluvy) v moderně zrekonstruovaném koncertním sále českobudějovické
            konzervatoře (Kanovnická 391/22). Pěšky je to z hotelu ulicí Karla IV. pouhých 200 metrů.
          </p>

          <div class="mt-16">
            <g-image src="~/assets/imgs/02-sal.jpg" class="w-full mb-4" alt="Sál konzervatoře České Budějovice"/>
            <div class="container text-right">
              <p class="text-xl font-brandon font-light">FOTO Konzervatoř České Budějovice</p>
            </div>
          </div>

          <div class="bg-red-light border-t-6 border-red px-16 py-16 mt-16 mb-16 font-brandon" role="alert">
            <p>
              Upozorňujeme na <b>povinnost pohybovat se v prostorách konzervatoře a hotelu se zakrytými dýchacími
              cestami</b>. Roušku či respirátor je možné odložit až po vstupu na pokoj či po usazení ke stolu v
              hotelové restauraci. Buďte prosím ohleduplní k ostatním hostům a řiďte se pokyny personálu. Děkujeme.
            </p>
          </div>

          <div class="mb-16">
            <h2 class="text-5xl mb-8">Kde zaparkovat</h2>
            <p>
              Všichni, kdo dorazí vlastním autem, mají možnost odstavit ho na nedalekém Senovážném náměstí (250 metrů
              od hotelu). V době od pátku 20.00 hodin do pondělí 8.00 hodin zcela zdarma. V jiný čas přijde hodina
              parkování na 20 korun.
            </p>
          </div>

          <div>
            <h2 class="text-5xl mb-8">Za písničkou do Paradoxu</h2>
            <p>
              Pro všechny tancechtivé je tu hudební klub Paradox (Krajinská 33/5). Klasická diskotéka se vším, co k ní
              patří. Vstup od 18 let. Za rozbitý obličej si každý ručí sám.
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
    title: 'Hello, world!'
  },
  path: 'cb-21'
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
