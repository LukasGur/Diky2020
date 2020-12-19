---
title: Jak na automatický deploy webu
author:
  name: Jan Švábík
  url: https://noltio.com/cs/tym/jan-svabik/
  email: jansvabik@jansvabik.cz
---
V tomto premiérovém článku se spolu podíváme na automatický deploy statických webových stránek přímo z repozitáře pomocí Netlify.

## Co je automatický deploy

Pro tento článek chápejme automatický deploy jako nasazení webu na server bez nutnosti přímého zásahu člověka, který je automaticky spuštěn v momentě, kdy nastane nějaká akce. V tomto případě bude touto akcí **commit** do nějaké konkrétní větve v repozitáři.

## Co budete potřebovat

Budete potřebovat účet na [GitHubu](https://github.com/), [GitLabu](https://gitlab.com/) nebo [Bitbucketu](https://bitbucket.org/), kde si vytvoříte nový repozitář přímo pro tento účel. Kromě toho bude také samozřejmě nezbytný účet na [Netlify](https://www.netlify.com/).

Netlify je, zjednodušeně řečeno, hosting pro statické stránky. Kromě toho disponuje různými features, jako je například právě **automatický build a deploy webu** při provedení změny v propojeném repozitáři, postprocessing, jednoduché zpracování formulářů nebo A/B testing (o kterém připravím brzy další článek).

## Konfigurace Netlify

Jakmile budete mít vše připravené, přesuňte se do svého [účtu Netlify](https://app.netlify.com/) a klikněte na zelené tlačítko **New site from Git**.

### Výběr platformy

V následujícím kroku zvolte, se kterou platfromou budete chtít Netlify propojit. Na výběr máte tři šedá tlačítka – pro každou z výše jmenovaných platforem jedno.

![](/hp-banner-illustration-left.png)

Po kliku na tlačítko se autorizujte přihlášením se do dané platformy a případně povolte Netlify přístup ke svým repozitářům nebo repozitářům vašich organizací.

### Výběr repozitáře

Nyní klikněte na repozitář, se kterým chcete Netlify propojit. Může se stát, že uvidíte jen některé repozitáře. Pro tento případ je v tomto kroku v Netlify odkaz na dodatečnou autorizaci ve spodní části boxu.

Na obrázku níže vidíte případ propojení s GitHubem. Zmíněný odkaz pro dodatečnou autorizaci je zde „Configure the Netlify app on GitHub“.

![](/hp-banner-illustration-left.png)

### Nastavení deploye

Toto je třetí a poslední krok konfigurace Netlify. V poli **Branch to deploy** si vyberte větev repozitáře. V momentě, kdy se v této větvi objeví nový commit, dojde k automatickému nasazení nové verze webu.

Nemáte-li v repozitáři vytvořené nové větve, můžete použít výchozí branch **master**, případně **main** (podle toho, kdy a v jaké platformě jste repozitář zakládali).

Basic build settings nemusíte vyplňovat. Toto nastavení slouží ke konfiguraci buildu webu prostřednictvím některého ze static site generátorů, jako je Hugo nebo Jekyll (o těch zase příště).

Nakonec klikněte na zelené tlačítko **Deploy site**. Dojde k prvnímu nasazení webu na server Netlify. Jak si web otevřít, případně jak nastavit vlastní doménu, se dozvíte o pár řádků níže.

![](/hp-banner-illustration-left.png)

## Kde nový web najít

Po kliknutí na tlačítko Deploy site se dostanete na detail svého webu. Tam uvidíte průběh deploye a náhodně vygenerovaný název (jako například stoic-hugle-a54dfb).

Z tohoto názvu se skládá i adresa, kde svůj web najdete. V tomto případě by vypadala takto: https://stoic-hugle-a54dfb.netlify.app.

### Úprava názvu a adresy webu

Název webu a tím i adresu si můžete změnit v nastavení webu. Klikněte na tlačítko **Domain settings** v prvním obdélníkovém boxu (pod názvem webu a jeho náhledem).

Nyní se nacházíte v nastavení domény, kde můžete u (momentálně) jediné položky kliknout na **Options > Edit site name** a doménu změnit na jakoukoliv volnou.

![](/hp-banner-illustration-left.png)

![](/hp-banner-illustration-left.png)

### Vlastní doména

Kromě této domény pod .netlify.app můžete používat samozřejmě jakoukoliv jinou doménu, kterou vhodně nakonfigurujete dle svých potřeb. V tomto případě postupujte podle průvodce skrývajícím se za tlačítkem **Add custom domain**.

## Test automatického nasazení

Nyní si můžete vyzkoušet automatický deploy naklonováním repozitáře a commitnutím nějaké změny do vybrané větve, případně přímo úpravou nějakého souboru v online rozhraní git plaformy, kterou jste si vybrali.

### Postup vytvoření změny

Nejprve si naklonujte repozitář. URL adresu najdete ve webovém rozhraní zvolené platformy. Níže uvádím příklad klonování z GitHubu.

    $ git clone https://github.com/noltio/website.git

Nyní se přesuňte do složky, která klonováním vznikla, v mém případě to bude website (vždy se jedná o název repozitáře).

    $ cd website

Vytvořte soubor **index.html** s libovolným obsahem a poté vytvořte commit změn. Následně proveďte push do hostovaného repozitáře.

    $ git commit -m 'feat: add homepage' && git push

Tímto by mělo být dílo dokonáno. Na adrese svého webu nyní můžete očekávat projevení změn obsažených v tomto commitu.

## Závěr

Díky automatickému deployi odpadá starost s ručním nahráváním souborů na server. Navíc je web verzovaný verzovacím systémem Git. To vám poslouží v momentě, kdy se na webu objeví po nějaké úpravě problém a vy se budete muset vrátit (revert) na některou z předchozích verzí.

Ještě pohodlnější vše bude, až bude web i automaticky generovaný některým z výše uvedených generátorů statických stránek. Určitě počítejte s článkem zaměřeným na generování stránek pomocí [Huga](https://gohugo.io/)!
