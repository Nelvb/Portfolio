# Reporte: Problema de Parpadeo en Animaciones Mobile

**Fecha:** Diciembre 2024  
**Autor:** Nelson Valero  
**Archivo afectado:** `src/js/views/skills.js` (y otros componentes con animaciones)

---

## 1. Descripción del Problema

### 1.1 Síntoma Visual
Al entrar a la vista de Skills (y otras vistas) en dispositivos móviles (≤768px), los elementos animados (`skill-card`, `nav-link`, etc.) presentan un **parpadeo breve** antes de que se ejecuten las animaciones.

### 1.2 Cuándo Ocurre
- **Solo en mobile** (pantallas ≤768px)
- **Al cargar la vista por primera vez**
- **Al hacer scroll** cuando los elementos entran/salen del viewport
- **No ocurre en desktop** (pantallas >768px)

### 1.3 Elementos Afectados
- `.skill-card` (tarjetas de tecnologías)
- `.nav-link` (enlaces de navegación)
- `.title-text` (títulos)
- `.animate-on-scroll` (cualquier elemento con esta clase)

---

## 2. Cómo Funcionan las Animaciones Actualmente

### 2.1 Arquitectura de Animaciones

El proyecto usa una **estrategia dual** según el tamaño de pantalla:

#### **Desktop (>768px):**
- Animaciones **secuenciales** con `anime.js`
- Se ejecutan **una sola vez** al cargar la vista
- Usan `animationState` para evitar repeticiones
- Timeline controlado con delays

#### **Mobile (≤768px):**
- Animaciones **on-scroll** con `IntersectionObserver`
- Se ejecutan **cada vez** que el elemento entra en el viewport
- Se ocultan cuando salen del viewport (para re-animación)

### 2.2 Flujo de Ejecución en Mobile

```javascript
// 1. Componente se monta (React renderiza)
// 2. useEffect se ejecuta (después del render)
// 3. Detecta si es mobile: window.matchMedia("(max-width: 768px)")
// 4. Oculta elementos: el.style.opacity = 0 (inline style)
// 5. Configura IntersectionObserver
// 6. Observa elementos con clase .animate-on-scroll
// 7. Cuando elemento entra en viewport → anima
// 8. Cuando elemento sale de viewport → oculta (opacity: 0)
```

### 2.3 Código Actual (skills.js)

```javascript
useEffect(() => {
  if (!animationState.contact) return;

  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

  // ⚠️ PROBLEMA: Esto se ejecuta DESPUÉS del render
  document
    .querySelectorAll(
      ".title-text, .devices-image-wrapper, .skills-contain-container, .skills-description, .skills-section-title, .skill-card, .nav-link"
    )
    .forEach((el) => {
      el.style.opacity = 0; // Inline style
    });

  if (isSmallScreen) {
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateElement(entry.target); // Anima con anime.js
          } else {
            entry.target.style.opacity = 0; // Oculta al salir
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsToAnimate.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }
}, [animationState.skills, setAnimationState]);
```

### 2.4 Función animateElement

```javascript
const animateElement = (element) => {
  if (element.classList.contains("title-text")) {
    anime({
      targets: element,
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeInOutQuad",
      duration: 2000,
    });
  } else if (element.classList.contains("skill-card")) {
    anime({
      targets: element,
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: anime.stagger(100),
      easing: "easeInOutQuad",
      duration: 2000,
    });
  }
  // ... más casos
};
```

---

## 3. Causa Raíz del Parpadeo

### 3.1 Race Condition (Condición de Carrera)

El problema es una **condición de carrera** entre:

1. **Render de React** → Elementos visibles (`opacity: 1` por defecto en CSS)
2. **Ejecución de useEffect** → Oculta elementos (`opacity: 0` inline style)
3. **IntersectionObserver** → Detecta entrada y anima

### 3.2 Timeline del Parpadeo

```
T0 (0ms):     React renderiza → Elementos visibles (opacity: 1)
              ↓
T1 (50-200ms): useEffect ejecuta → Oculta elementos (opacity: 0)
              ↓
T2 (200-500ms): IntersectionObserver detecta → Anima (opacity: 0 → 1)
```

**El parpadeo ocurre entre T0 y T1**: Los elementos son visibles brevemente antes de que JS los oculte.

### 3.3 Por Qué Ocurre

- **CSS no tiene regla inicial** para ocultar elementos en mobile
- **React renderiza** con estilos por defecto (opacity: 1)
- **useEffect es asíncrono** y se ejecuta después del render
- **Hay un gap temporal** donde los elementos son visibles

### 3.4 Por Qué No Ocurre en Desktop

En desktop, las animaciones se ejecutan **inmediatamente** con `anime.js` y no dependen de scroll, por lo que el gap temporal es menor y menos perceptible.

---

## 4. Intentos de Solución Realizados

### 4.1 Intento #1: CSS con `!important` (FALLIDO)

**Estrategia:** Ocultar elementos desde CSS antes de que JS se ejecute.

**Código agregado a `index.css`:**
```css
@media (max-width: 768px) {
  .animate-on-scroll,
  .nav-link,
  .home-nav-link,
  .skill-card {
    opacity: 0 !important;
  }
}
```

**Resultado:** ❌ **FALLIDO**
- El usuario reportó: "ha quedado mal, siempre hay parpadeo"
- **Razón:** El `!important` interfería con las animaciones de `anime.js` que también usan inline styles
- **Estado:** Revertido por el usuario

### 4.2 Intento #2: Inline Styles en JSX (FALLIDO)

**Estrategia:** Añadir `opacity: 0` directamente en el JSX con detección de mobile.

**Código propuesto:**
```javascript
const isMobile = window.innerWidth <= 768;

// En el JSX:
<div className="skill-card" style={{ opacity: isMobile ? 0 : 1 }}>
```

**Resultado:** ❌ **NO IMPLEMENTADO** (usuario lo rechazó antes de probar)
- **Razón:** El usuario prefirió analizar la estrategia antes de implementar
- **Problema potencial:** `window.innerWidth` se evalúa una vez, no es reactivo

### 4.3 Intento #3: Estrategia `.js-ready` (PENDIENTE)

**Estrategia propuesta por el usuario:**

**CSS:**
```css
@media (max-width: 768px) {
  .skill-card:not(.js-ready),
  .nav-link:not(.js-ready) {
    opacity: 0;
  }
}
```

**JavaScript:**
```javascript
// En useEffect, inmediatamente después de configurar IntersectionObserver:
elementsToAnimate.forEach((el) => {
  el.classList.add('js-ready'); // Añadir UNA VEZ, nunca quitar
  observer.observe(el);
});
```

**Ventajas:**
- CSS oculta solo hasta que JS está listo
- Una vez JS añade `.js-ready`, CSS deja de afectar
- IntersectionObserver controla después sin conflictos
- La clase es permanente (no se quita nunca)

**Estado:** ⏳ **PENDIENTE DE IMPLEMENTACIÓN**

---

## 5. Análisis Técnico Detallado

### 5.1 Comparación de Estrategias

| Estrategia | Ventajas | Desventajas | Estado |
|------------|---------|-------------|--------|
| **CSS `!important`** | Simple, se ejecuta antes de JS | Interfiere con anime.js | ❌ Fallido |
| **Inline styles JSX** | Control total desde React | No reactivo, evalúa una vez | ⏸️ No probado |
| **`.js-ready` class** | Balance entre CSS y JS | Requiere añadir clase | ⏳ Pendiente |
| **CSS siempre oculto** | Más simple, sin clases | Menos controlado | ✅ Funcionaría |

### 5.2 Por Qué `.js-ready` Funciona

1. **CSS oculta** elementos sin `.js-ready` → Evita parpadeo inicial
2. **JS añade clase** → CSS deja de ocultar
3. **IntersectionObserver controla** → Sin conflictos
4. **Clase permanente** → No se quita, evita re-parpadeo al hacer scroll

### 5.3 Flujo con `.js-ready`

```
T0: CSS oculta (.skill-card:not(.js-ready) { opacity: 0 })
    ↓
T1: React renderiza → Elementos ocultos (CSS aplica)
    ↓
T2: useEffect ejecuta → Añade .js-ready
    ↓
T3: CSS deja de ocultar → IntersectionObserver controla
    ↓
T4: IntersectionObserver detecta → Anima
```

**Sin parpadeo** porque los elementos nunca son visibles antes de que JS esté listo.

---

## 6. Elementos Afectados en Otras Vistas

El mismo problema puede ocurrir en:

- **`home.js`**: `.home-title-text`, `.home-nav-link`
- **`projects.js`**: `.animate-on-scroll`
- **`projectDetail.js`**: `.animate-on-scroll`
- **`aboutMe.js`**: Elementos con animaciones on-scroll
- **`contact.js`**: Elementos con animaciones on-scroll

**Solución:** Aplicar la misma estrategia (`.js-ready` o CSS siempre oculto) a todas las vistas.

---

## 7. Recomendaciones

### 7.1 Solución Recomendada: `.js-ready`

**Razones:**
- Balance entre CSS y JS
- Control explícito del estado "JS listo"
- No interfiere con animaciones
- Escalable a otras vistas

### 7.2 Implementación Sugerida

1. **CSS global** (`index.css` o `skills.css`):
```css
@media (max-width: 768px) {
  .skill-card:not(.js-ready),
  .nav-link:not(.js-ready),
  .animate-on-scroll:not(.js-ready) {
    opacity: 0;
  }
}
```

2. **JavaScript** (en cada vista afectada):
```javascript
useEffect(() => {
  // ... código existente ...
  
  if (isSmallScreen) {
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    
    // Añadir clase ANTES de observar
    elementsToAnimate.forEach((el) => {
      el.classList.add('js-ready'); // ✅ Permanente
    });
    
    const observer = new IntersectionObserver(/* ... */);
    elementsToAnimate.forEach((el) => observer.observe(el));
  }
}, [dependencies]);
```

### 7.3 Alternativa: CSS Siempre Oculto

Si prefieres una solución más simple:

```css
@media (max-width: 768px) {
  .skill-card,
  .nav-link,
  .animate-on-scroll {
    opacity: 0; /* Sin !important, anime.js sobrescribirá */
  }
}
```

**Ventaja:** Más simple, no requiere clases JS.  
**Desventaja:** Menos controlado, todos los elementos empiezan ocultos.

---

## 8. Conclusión

El parpadeo es causado por una **condición de carrera** entre el render de React y la ejecución de JavaScript. La solución requiere que los elementos **empiecen ocultos desde CSS** antes de que React los renderice.

**Estrategia recomendada:** Implementar `.js-ready` para un control explícito y escalable.

**Próximos pasos:**
1. Implementar `.js-ready` en `skills.js`
2. Probar en dispositivo móvil real
3. Si funciona, aplicar a otras vistas afectadas
4. Documentar la solución en el código

---

**Última actualización:** Diciembre 2024  
**Estado:** Pendiente de implementación

