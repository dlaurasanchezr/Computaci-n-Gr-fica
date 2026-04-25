# 🔢 Taller VII: Bootstrap

---

## 🚀 Ejercicios

### Exercise 1 — Responsive (Taller 4: Puntos 1 y 3)
Se implementó diseño responsivo sobre los puntos 1 y 3 del Taller 4
usando el **Grid System de Bootstrap 5**.

**Punto 1 — Login / Registro:**
- Dos tarjetas (`col-12 col-md-6`): se apilan en móvil,
  lado a lado en tablet/desktop
- Formulario de registro con `input-group` y Font Awesome
- Botones sociales (Facebook, Twitter, Correo)

**Punto 3 — Interfaz MusicFlow:**
- Grid responsivo con `row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4`
- Barra de búsqueda, categorías con tabs y player fijo en la parte inferior
- El player se adapta: controles ocultos en móvil, visibles en desktop

---

### Exercise 2 — 6 Componentes Bootstrap Personalizados

| # | Componente | Personalización aplicada |
|---|---|---|
| 1 | **Badges** | Paleta de colores propia, fuente monoespaciada, punto de estado animado |
| 2 | **Alerts** | Borde lateral de color, fondo translúcido, botón de cierre funcional |
| 3 | **Buttons** | 6 variantes con gradientes, efecto hover de elevación y estado loading |
| 4 | **Cards** | 3 variantes: producto, perfil y horizontal con hover animado |
| 5 | **Progress** | Colores por tecnología, altura 8px, animación al entrar al viewport |
| 6 | **Accordion** | Variante clara y oscura, ícono de flecha personalizado con CSS |

---

### Exercise 3 — Carrusel de Imágenes Personalizado

Se implementaron **4 variantes** del componente Carousel de Bootstrap:

1. **Principal** — Transición deslizante con barra de tiempo,
   botón play/pause y contador de slide
2. **Fade** — Transición de fundido (`carousel-fade`),
   indicadores en forma de línea
3. **Con miniaturas** — Miniaturas sincronizadas usando el evento
   `slid.bs.carousel` de Bootstrap JS
4. **De tarjetas** — Carrusel multi-item con Grid dentro del
   `carousel-item`, responsivo con `col-12 col-sm-6 col-md-4`

---

## 🛠️ Tecnologías usadas
- HTML5
- CSS3 (Variables CSS, Flexbox, Grid, Animaciones)
- JavaScript ES6+ (IntersectionObserver, API Bootstrap JS)
- Bootstrap 5.3.3
- Bootstrap Icons 1.11.3
- Font Awesome 5.7.2
- Google Fonts (Poppins, Space Mono)

---

## ▶️ Cómo ejecutar
1. Clonar el repositorio:
```bash
   git clone https://github.com/TU_USUARIO/taller7-bootstrap.git
```
2. Abrir cualquiera de los archivos `.html` en el navegador
   o usar la extensión **Live Server** de VS Code

---

## 📸 Vistas previas

| Exercise 1 | Exercise 2 | Exercise 3 |
|---|---|---|
| Login + MusicFlow | 6 Componentes | 4 Carruseles |

✍️ ## Autor

Desarrollado con ❤️ por **Laura Dayanna Sánchez y Santiago Osorio Jimenez** para la asignatura de Computación Gráfica.
