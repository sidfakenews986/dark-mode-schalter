# Dark-Mode-Schalter

## Einführung
Dieser Dark-Mode-Schalter ermöglicht es Entwicklern, ihren Benutzern eine einfache und intuitive Möglichkeit zu bieten, zwischen hellen und dunklen Designs zu wechseln. Er ist leichtgewichtig, einfach zu implementieren und kann in jede Webseite integriert werden.

## Funktionen
- Automatische Erkennung des System-Themes (hell/dunkel)
- Manuelles Umschalten zwischen den Modi
- Anpassbare Farben und Designs
- Unterstützung für verschiedene Frameworks (z.B. React, Vue, Angular)
- Speichern der Benutzereinstellung im lokalen Speicher

## Installation
```
npm install dark-mode-schalter
```

## Nutzung
```javascript
import DarkMode from 'dark-mode-schalter';

const darkMode = new DarkMode();
darkMode.init();
```

## Anpassung
Die Farben und das Erscheinungsbild können leicht über die CSS-Datei angepasst werden. Fügen Sie einfach Ihre benutzerdefinierten Stile hinzu:
```css
body {
  background-color: var(--background);
  color: var(--text-color);
}
```

## Beitrag
Beiträge sind willkommen! Bitte lesen Sie die Beitragsrichtlinien in der CONTRIBUTING.md-Datei.

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Informationen finden Sie in der LICENSE-Datei.