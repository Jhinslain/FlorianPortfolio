# Guide des Couleurs du Portfolio

Ce document liste toutes les couleurs personnalisées disponibles dans le projet et comment les utiliser.

## Utilisation avec Tailwind CSS

Toutes les couleurs peuvent être utilisées avec les classes Tailwind standard :

```jsx
// Couleurs de fond
<div className="bg-portfolio-dark">...</div>
<div className="bg-portfolio-dark-bg">...</div>

// Couleurs de texte
<p className="text-portfolio-text-primary">...</p>
<p className="text-portfolio-text-secondary">...</p>
<p className="text-portfolio-text-muted">...</p>

// Couleurs d'accent
<span className="text-portfolio-accent">...</span>
<span className="text-portfolio-accent-yellow">...</span>

// Bordures
<div className="border-portfolio-border">...</div>

// Overlays
<div className="bg-portfolio-overlay">...</div>
<div className="hover:bg-portfolio-overlay-hover">...</div>
```

## Liste des Couleurs

### Couleurs de Fond
- `portfolio-dark` / `portfolio-dark-bg`: `#231f2c` - Fond sombre principal utilisé dans les sections Project

### Couleurs de Gradient
- `portfolio-gradient-start`: `#581c87` (purple-900)
- `portfolio-gradient-mid`: `#7c3aed` (purple-800)
- `portfolio-gradient-end`: `#4338ca` (indigo-700)

**Exemple d'utilisation :**
```jsx
<div className="bg-gradient-to-b from-portfolio-gradient-start via-portfolio-gradient-mid to-portfolio-gradient-end">
```

### Couleurs Hero
- `portfolio-hero-start`: `#3b0764` (purple-950)
- `portfolio-hero-mid`: `#7c3aed` (purple-800)
- `portfolio-hero-end`: `#93c5fd` (blue-300)

**Exemple d'utilisation :**
```jsx
<div className="bg-gradient-to-bl from-portfolio-hero-start via-portfolio-hero-mid to-portfolio-hero-end">
```

### Couleurs d'Accent
- `portfolio-accent` / `portfolio-accent-yellow`: `#fbbf24` (yellow-300) - Pour les tags et catégories

**Exemple d'utilisation :**
```jsx
<span className="text-portfolio-accent">Tag</span>
```

### Couleurs de Texte
- `portfolio-text-primary`: `#ffffff` - Texte principal blanc
- `portfolio-text-secondary`: `rgba(255, 255, 255, 0.8)` - Texte secondaire avec opacité
- `portfolio-text-muted`: `rgba(255, 255, 255, 0.5)` - Texte atténué

### Couleurs de Bordure/Overlay
- `portfolio-border`: `rgba(255, 255, 255, 0.3)` - Bordures avec opacité
- `portfolio-overlay`: `rgba(255, 255, 255, 0.1)` - Overlay léger
- `portfolio-overlay-hover`: `rgba(255, 255, 255, 0.2)` - Overlay au survol

**Exemple d'utilisation :**
```jsx
<div className="bg-portfolio-overlay border-2 border-portfolio-border hover:bg-portfolio-overlay-hover">
```

## Migration depuis les couleurs inline

### Avant
```jsx
<div style={{ backgroundColor: '#231f2c' }}>...</div>
<div className="bg-white/10 border-2 border-white/30">...</div>
```

### Après
```jsx
<div className="bg-portfolio-dark">...</div>
<div className="bg-portfolio-overlay border-2 border-portfolio-border">...</div>
```

## Notes

- Toutes les couleurs sont définies dans `tailwind.config.js`
- Les couleurs peuvent être utilisées avec toutes les variantes Tailwind (bg-, text-, border-, etc.)
- Les couleurs avec opacité peuvent être combinées avec les utilitaires Tailwind d'opacité si nécessaire

