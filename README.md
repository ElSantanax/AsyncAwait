# Async/Await JavaScript Examples

Este proyecto es una colección de ejemplos prácticos que demuestran el uso de **Async/Await** en JavaScript, desde conceptos básicos hasta implementaciones más avanzadas.

## 📋 Descripción

El proyecto contiene múltiples ejemplos que ilustran diferentes aspectos de la programación asíncrona en JavaScript:

- Manejo básico de errores con try/catch
- Implementación de Promises con async/await
- Ejecución paralela de operaciones asíncronas
- Consumo de APIs externas

## 🚀 Estructura del Proyecto

```
AsyncAwait/
├── index.html          # Página principal
├── assets/
│   └── css/
│       └── style.css   # Estilos del proyecto
├── js/
│   ├── 01-app.js      # Ejemplo básico de try/catch
│   ├── 02-app.js      # Async/await con función tradicional
│   ├── 03-app.js      # Async/await con arrow function
│   ├── 04-app.js      # Promise.all con async/await
│   └── 05-app.js      # Consumo de API externa (Rick and Morty)
└── README.md          # Este archivo
```

## 📚 Ejemplos Incluidos

### 1. Manejo Básico de Errores (`01-app.js`)
Demuestra el uso básico de `try/catch` para el manejo de errores síncronos.

### 2. Async/Await con Función Tradicional (`02-app.js`)
- Implementa una Promise que simula la descarga de clientes
- Usa `async function` tradicional
- Manejo de errores con try/catch

### 3. Async/Await con Arrow Function (`03-app.js`)
- Misma funcionalidad que el ejemplo anterior
- Implementado con arrow functions (`const ejecutar = async () => {}`)

### 4. Ejecución Paralela con Promise.all (`04-app.js`)
- Demuestra cómo ejecutar múltiples operaciones asíncronas en paralelo
- Usa `Promise.all()` para esperar que todas las operaciones se completen
- Simula descarga de clientes y pedidos simultáneamente

### 5. Consumo de API Externa (`05-app.js`)
- Consume la API de Rick and Morty
- Demuestra el uso de `fetch()` con async/await
- Se ejecuta automáticamente cuando el DOM está cargado

## 🛠️ Cómo Usar

1. **Clona o descarga** el proyecto
2. **Abre** `index.html` en tu navegador
3. **Abre las herramientas de desarrollador** (F12) para ver la consola
4. **Cambia el script activo** en `index.html` descomentando el archivo que quieras probar:

```html
<!-- Descomenta el ejemplo que quieras ejecutar -->
<!-- <script src="js/01-app.js"></script> -->
<!-- <script src="js/02-app.js"></script> -->
<!-- <script src="js/03-app.js"></script> -->
<!-- <script src="js/04-app.js"></script> -->
<script src="js/05-app.js"></script>
```

5. **Recarga la página** para ver el resultado en la consola

## 🎯 Conceptos Aprendidos

- **Async/Await**: Sintaxis moderna para manejar operaciones asíncronas
- **Promises**: Manejo de operaciones asíncronas con resolve/reject
- **Try/Catch**: Manejo de errores en código asíncrono
- **Promise.all()**: Ejecución paralela de múltiples promises
- **Fetch API**: Consumo de APIs externas
- **DOM Events**: Ejecución de código cuando el DOM está listo

## 🌐 APIs Utilizadas

- **Rick and Morty API**: `https://rickandmortyapi.com/api/character`
  - API pública que no requiere autenticación
  - Retorna información de personajes de la serie

## 💡 Notas Importantes

- Cada ejemplo está diseñado para ser independiente
- Los tiempos de espera (`setTimeout`) simulan operaciones reales como llamadas a APIs o bases de datos
- El proyecto usa Google Fonts (Carrois Gothic SC) para el estilo tipográfico
- Solo un script puede estar activo a la vez en `index.html`

## 🔧 Requisitos

- Navegador web moderno con soporte para ES6+
- Conexión a internet (para cargar fuentes y API externa)
- No requiere instalación de dependencias adicionales

## 📖 Recursos Adicionales

Para profundizar en estos conceptos, se recomienda estudiar:

- [MDN - Async/Await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN - Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

---

**Autor**: ElSantanax  
**Propósito**: Aprendizaje de programación asíncrona en JavaScript
