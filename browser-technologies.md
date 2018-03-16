# Opdracht 1.2 - Fork je OBA

## Progressive Enhancement issues
### 1. Afbeeldingen

Ik kwam erachter dat ik teveel afbeeldingen inlaadde, hierdoor werd de app een stuk trager. Aangezien de afbeeldingen via Javascript werden ingeladen heb ik een if else geschreven waarin maximaal 50 van alle afbeeldingen van een gebouw getoont worden. De gebruiker kan dan zelf bepalen of hij meer afbeeldingen wilt zien door op een knop te drukken.

### 2. Custom fonts

Met met custom fonts heb ik bij mijn OBA applicatie ondervonden dat ik niet genoeg fallback fonts had. Daarnaast gebruikte ik voor iconen FontAwesome dit is een font wat aanvoelt als een hack. Deze wil dus ook omzetten naar normale SVG's en meer fallback fonts toegevoegd.

### 3. Javascript(Volledig)

Het probleem wat ik gelijk ondervond is dat als er geen javascript aanwezig is er geen kaart getoont wordt. Dit komt door dat Mapbox javascript nodig heeft om de kaart te renderen ook wordt de data via javascript ingeladen. Hier kan ik dus niks aan veranderen. Wel bevatte mijn app een accordion met een introductie over applicatie. De content werd daarin zonder javascript niet weergegeven. Dit kwam doordat ik het element met CSS standaard verborg. Dit heb opgelost.

### 4. Kleur

Qua kleur heb ik geen problemen ondervonden. Contrasten waren in orde. Het enige wat ik verandert heb is een lichte opacity op de cirkels om het verschil tussen de elementen beter te kunnen inzien.

### 5. Breedband internet
De performance heb ik verbeterd door het optimalizeren en minifien van de css en javascript files. Doordat de bestandgrootte van deze files kleiner werd kan de site sneller geladen worden. Ook wil ik de statische bestanden cachen zodat ze niet nog een keer door de browser gedownload hoeven worden.

### 6. Cookies
Voor mijn applicatie heb ik nog geen gebruik gemaakt van cookies. Deze hoefde dus ook niet geoptimaliseerd te worden.

### 7. Local storage
Ik werkte eerst alleen met local storage om data op te slaan. Als dit het niet deed werkte de app niet meer. Ik heb daarom een if else om de functie van het data ophalen heen gezet die checkt of de data al in localStorage bevindt. Als dit zo is haalt hij daar de data uit, maar als dit niet zo is (ook als localStorage niet werkt) haalt hij de data op en slaat dit op in een Javascript object.

### 8. Muis/trackpad
De applicatie was eerst alleen te gebruiken met muis/trackpad, omdat de elemnten die klikbaar waren div's waren. Dit heb ik veranderd naar linkjes waarmee je met je toetstenbord doorheen kan navigeren. Daarnaast heb ik op alle links focus styles toegevoegd om duidelijk te maken waar de gebruiker zich bevindt.

## Accessibility issues

Voor de cirkels op mijn kaart waren geen links en hadden daarom niet via tab genavigeert worden. Dit heb ik veranderd waardoor de gebruiker nu door de verschillende gebouwen heen kan navigeren met tab. Dit verbeterd de Accessibility van de applicatie. Daarnaast heb ik nog focus styles toegevoegd.

## To do

Als ik meer tijd zou hebben dan zou ik de problemen met het gebruik van een offline map oplossen. Zodat de gebruiker alsnog de applicatie zonder netwerk/javascript kan gebruiken. Ook zou ik het probleem met navigeren tussen afbeeldingen verbeteren zodat je de applicatie volledig met je toetstenbord kan bedienen.
