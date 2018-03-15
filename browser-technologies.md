# Opdracht 1.2 - Fork je OBA

## Progressive Enhancement issues
### 1. Afbeeldingen

Ik kwam erachter dat ik teveel afbeeldingen inlaadde, hierdoor werd de app een stuk trager. Aangezien de afbeeldingen via Javascript werden ingeladen heb ik een if else geschreven waarin maximaal 50 van alle afbeeldingen van een gebouw getoont worden. De gebruiker kan dan zelf bepalen of hij meer afbeeldingen wilt zien door op een knop te drukken.

### 2. Custom fonts

Met met custom fonts heb ik bij mijn OBA applicatie ondervonden dat ik niet genoeg fallback fonts had. Daarnaast gebruikte ik voor iconen FontAwesome dit is een font wat aanvoelt als een hack. Dit heb ik dus ook omgezet naar normale SVG's en meer fallback fonts toegevoegd.

### 3. Javascript(Volledig)

Het probleem wat ik gelijk ondervond is dat als er geen javascript aanwezig is er geen kaart getoont wordt. Dit komt door dat Mapbox javascript nodig heeft om de kaart te renderen ook wordt de data via javascript ingeladen. Hier kan ik dus niks aan veranderen. Wel bevatte mijn app een accordion met een introductie over applicatie. De content werd daarin zonder javascript niet weergegeven. Dit kwam doordat ik het element met CSS standaard verborg. Dit heb opgelost.

### 4. Kleur

Qua kleur heb ik geen problemen ondervonden. Het enige is dat ik een lichte opacity op de cirkels heb ingesteld om verschil tussen deze elementen te kunnen inzien.

### 5. Breedband internet
De performance heb ik verbeterd door het optimalizeren en minifien van de css en javascript files. Doordat de bestandgrootte van deze files kleiner werd kan de site sneller geladen worden.

### 6. Cookies

### 7. Local storage
Ik werkte eerst alleen met local storage om data op te slaan. Als dit het niet deed werkte de app niet meer. Ik heb daarom een if else om de functie van het data ophalen heen gezet die checkt of de data al in localStorage bevindt. Als dit zo is haalt hij daar de data uit, maar als dit niet zo is (ook als localStorage niet werkt) haalt hij de data op en slaat dit op in een Javascript object.

### 8. Muis/trackpad
De applicatie was eerst alleen te gebruiken met muis/trackpad, omdat de elemnten die klikbaar waren div's waren. Dit heb ik veranderd naar linkjes waarmee je met je toetstenbord doorheen kan navigeren. Daarnaast heb ik op alle links focus styles toegevoegd om duidelijk te maken waar de gebruiker zich bevindt.

## Accessibility issues

Voor de cirkels op mijn kaart waren geen links en hadden daarom niet via tab genavigeert worden. Dit heb ik veranderd waardoor de gebruiker nu door de verschillende gebouwen heen kan navigeren met tab. Dit verbeterd de Accessibility van de applicatie. Daarnaast had ik nog geen focus styles toegevoegd.
