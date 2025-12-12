# Aplikacja o Pokemonach

Aplikacja w React korzystająca z API [PokeAPI](https://pokeapi.co/) do wyświetlania informacji o Pokemonach, losowania własnej drużyny oraz zarządzania ulubionymi Pokemonami.

## Funkcjonalności

- Wyświetlanie Pokédexa z możliwością wyszukiwania Pokemonów po nazwie lub numerze.
- Dodawanie i usuwanie Pokemonów z listy ulubionych.
- Losowanie zespołu 6 Pokemonów, wyświetlanie zsumowanych statystyk każdego pokemona z osobna a także całej drużyny (BST).
- Strona powitalna (Lobby).
- Strona w przypadku próby wejścia na nieistniejącą podstronę.
- Responsywny interfejs dostosowany do różnych urządzeń.

## Instalacja i Uruchomienie

1. Sklonuj Repyzotrium
```
https://github.com/TomoTomovsky/Pokemon-React.git
```
2. Zainstaluj Wymagane Moduły
```
npm install
```
3. Uruchom aplikację
```
npm run dev
```
## Live Demo

https://pokemon-react-ecru.vercel.app

<img width="1913" height="889" alt="image" src="https://github.com/user-attachments/assets/649f5dc4-850a-48de-937e-0e8f5969510d" />
<img width="1907" height="875" alt="image" src="https://github.com/user-attachments/assets/0ffbe454-413f-4b7d-b0b8-40c948b346fa" />
<img width="1919" height="891" alt="image" src="https://github.com/user-attachments/assets/65c20c63-7790-43b0-acca-944d2894754d" />
<img width="1916" height="885" alt="image" src="https://github.com/user-attachments/assets/c7346be1-c516-4480-9831-2337c8811d7a" />
<img width="1911" height="874" alt="image" src="https://github.com/user-attachments/assets/ad793bcd-86ce-4900-bfec-c7b01b26b9ca" />


## Struktura Projektu
```
src/
├─ components/          # Komponenty UI
│  ├─ Header.jsx        # Nawigacja między stronami
│  ├─ Lobby.jsx         # Strona powitalna
│  ├─ Pokedex.jsx       # Wyświetlanie Pokédexa
│  ├─ PokemonCard.jsx   # Sprite Pokemona
│  ├─ TeamRandomizer.jsx    # Losowanie zespołu Pokemonów
│  ├─ Favorites.jsx     # Lista ulubionych Pokemonów
│  └─ NotFound.jsx      # Strona Błędu
├─ contexts/            
│  └─ FavoritesContext.jsx  # Kontekst do ulubionych Pokemonów
├─ hooks/             
│  └─ usePokemon.js     # Hook do pobierania danych z API
├─ App.jsx              # Główny komponent aplikacji z routingiem
├─ main.jsx             # Punkt wejściowy aplikacji
├─ index.css            # Style globalne
└─ App.css              # Style komponentów
```
## Użyte Biblioteki

React – do budowy SPA i komponentów.

React Router DOM – do routingu między stronami.

## Known Issues

1. W trakcie losowanie czasem mogą wylosować się pare razy te same pokemony
2. Niektóre nazwy są na tyle długie, że rozciągają ramkę wokół pokemona co psuje trochę estetykę

## Opis Kluczowych Komponentów

1. usePokemon – hook zarządzający pobieraniem danych z PokeAPI, obsługą błędów i loading state.
Przykład użycia: const { pokemon, loading, error, fetchPokemon } = usePokemon();

2. FavoritesContext – kontekst przechowujący listę ulubionych Pokemonów i funkcję toggleF`avorite, synchronizowaną z localStorage.
Przykład użycia w komponencie: const { favorites, toggleFavorite } = useContext(FavoritesContext);

3. PokemonCard – wyświetla obraz, nazwę i typ Pokemona. Może być użyty w Pokedex, TeamRandomizer i Favorites.

4. TeamRandomizer – losuje 6 Pokemonów i wylicza ich sumaryczne statystyki (BST).

5. Pokedex – przeglądanie Pokédexa po numerze lub nazwie i dodawanie do ulubionych 

## Co sprawiło trudność i jak rozwiązałem problem

Trudność sprawiło wyszukiwanie sposobów ewolucji danego pokemona. Poradziłem sobie z tym w prosty sposób, postanowiłem tego jednak nie dodawać do aplikacji.

## Future Improvements

Parę rzeczy które chciałbym wprowadzić w przyszłości:

1. Możliwość zapisywania wylosowanych drużyn
2. Wyświetlanie szczegółowych wszystkich statystyk danego pokemona a nie tylko BST (Wszystkich od razu zsumowanych)
3. Button przełączający między Dark i Light mode
