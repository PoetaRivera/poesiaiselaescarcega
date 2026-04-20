# Seguimiento Fase 1 - POESIAISELAESCARCEGA

**Fecha de evaluación:** 2026-04-19

## Estado: LOCAL SINCRONIZADO CON PRODUCCIÓN ✓

---

## Descripción del proyecto
Sitio web estático de poesía y literatura de María Isela Escárcega Villezcas.
Desplegado en Firebase Hosting (proyecto: `poesiaiselaescarcega`).

---

## Estructura del sitio
- `index.html` — Página principal con carrusel de pensamientos/frases
- `acercademi.html` — Biografía de la autora
- `mipoesia.html` — Poemas organizados en árbol por libro/sección
- `misrelatos.html` — Relatos cortos
- `mislibros.html` — Catálogo de libros con links a Amazon
- `misnovelas.html` — Novelas (solo 1 capítulo disponible)

## Contenido existente
- **Poemas:** 42 en total (2 libros: "Relatos de pueblo" y "El perfume de la espera")
- **Relatos:** 6 relatos cortos + 1 "próximamente"
- **Audios:** 4 poemas con audio (milola, nuestraultimanoche, ninosanto, palomastristes)
- **Pensamientos/frases:** 12
- **Libros en Amazon:** 3 (Relatos de pueblo, El perfume de la espera, Un amor que nunca llegó)
- **Novelas:** 1 capítulo de "Un amor que nunca llegó"

---

## COMPLETADO

### Sincronización local ← producción (2026-04-19)
Los siguientes archivos locales estaban desactualizados y fueron reemplazados con la versión de producción:
- `index.html` (local tenía versión incompleta de 3446b, prod=8325b)
- `mipoesia.html`, `misrelatos.html`, `mislibros.html`, `misnovelas.html`
- `menuPrincipal.html`, `paginas.css`
- Backups del estado anterior guardados en `backup_local/`

---

## PROBLEMAS PENDIENTES (por corregir)

### ~~MEDIO - Archivos basura~~ ELIMINADOS (2026-04-19)
- ~~`alosojosforasteros copy 2..7.html`~~ — eliminados
- ~~`1.html`, `1.js`, `indexbootstrap.html`~~ — eliminados

### BAJO - Otros
- `menuPrincipal.html` existe pero no está enlazado desde ninguna página
- Variables CSS repetidas en cada archivo HTML (podría centralizarse en `paginas.css`)
- Sin control de versiones git

---

### Mejora de código y visualización (2026-04-19)
**Archivos modificados:**
- `paginas.css` — centralizado: todas las fuentes declaradas, variables únicas, nuevo diseño de header/nav/tipografía
- `paginas1.css` — limpiado y actualizado
- `poemas/relatosdepueblo/poemas.css` — fondo oscuro, fuentes literarias (AlmendraDisplay, Sevillana)
- `poemas/elperfumedelaespera/poemas.css` — ídem con acento magenta
- `pensamientos/pensamientos.css` — fuente ZenLoopItalic aplicada
- `index.html` — JS simplificado (switch→array), Bootstrap removido, código limpio
- `acercademi.html` — limpiado, lang=es, variables CSS removidas
- `mipoesia.html`, `misrelatos.html`, `mislibros.html`, `misnovelas.html` — limpiados

**Mejoras aplicadas:**
- Fuentes locales ahora activas: Sevillana (h1), AlmendraDisplay (h2), ZenLoopItalic (pensamientos), ShareTechMono (nav)
- Variables CSS centralizadas solo en `paginas.css` (eliminadas de cada HTML)
- `lang="es"` en todos los archivos
- Google Analytics en lugar correcto
- Bootstrap duplicado eliminado
- Código JS simplificado

---

## PENDIENTE - Por donde continuar

**Próxima tarea:** Hacer `firebase deploy` para publicar los cambios en producción.
Luego: inicializar repositorio git para control de versiones.
