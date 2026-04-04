# Política de Seguridad

## 🔒 Versiones Soportadas

Este proyecto educativo está en desarrollo activo. Mantenemos las siguientes versiones:

| Versión | Soportada          |
| ------- | ------------------ |
| main    | :white_check_mark: |
| develop | :white_check_mark: |
| < 1.0   | :x:                |

---

## 🐛 Reportar una Vulnerabilidad

La seguridad de nuestros estudiantes y contribuidores es nuestra prioridad. Si descubres una vulnerabilidad de seguridad en el bootcamp, por favor repórtala de manera responsable.

### ¿Qué es una Vulnerabilidad de Seguridad?

En el contexto de este bootcamp educativo, consideramos vulnerabilidades:

#### 🚨 Críticas

- Exposición de credenciales o claves API en el código
- Inyección de código (XSS, SQL injection) en ejemplos
- Configuraciones inseguras que puedan ser copiadas por estudiantes
- Enlaces maliciosos o recursos comprometidos
- Dependencias con vulnerabilidades conocidas

#### ⚠️ Moderadas

- Prácticas de código inseguras en ejemplos
- Falta de validación de inputs en proyectos de ejemplo
- Uso de APIs o servicios sin HTTPS
- Almacenamiento inseguro de datos sensibles

#### ℹ️ Informativas

- Mejoras en la enseñanza de seguridad
- Sugerencias de mejores prácticas
- Actualizaciones de documentación de seguridad

---

## 📧 Cómo Reportar

### Opción 1: Email Privado (Preferido para vulnerabilidades críticas)

Envía un email a: **[security@ejemplo.com](mailto:security@ejemplo.com)**

**Incluye:**
- Descripción de la vulnerabilidad
- Pasos para reproducirla
- Impacto potencial
- Ubicación en el código (archivo, línea)
- Tu sugerencia de solución (opcional)

### Opción 2: GitHub Security Advisory (Para vulnerabilidades moderadas)

1. Ve a la pestaña "Security" del repositorio
2. Click en "Report a vulnerability"
3. Completa el formulario

### Opción 3: Issue Privado

Para problemas de seguridad menores:
- Crea un issue con la etiqueta `security`
- **NO incluyas detalles sensibles** en el título
- Menciona `@mantenedores` para atención inmediata

---

## ⏱️ Tiempo de Respuesta

| Severidad | Tiempo de Respuesta | Tiempo de Resolución |
| --------- | ------------------- | -------------------- |
| Crítica   | 24 horas            | 48-72 horas          |
| Moderada  | 48 horas            | 1-2 semanas          |
| Baja      | 1 semana            | Próximo release      |

---

## 🔄 Proceso de Manejo

1. **Acuse de Recibo**
   - Confirmaremos la recepción en el tiempo establecido
   - Asignaremos un identificador de seguimiento

2. **Evaluación**
   - Verificaremos y reproduciremos la vulnerabilidad
   - Evaluaremos el impacto y severidad

3. **Desarrollo de Fix**
   - Crearemos un fix en una rama privada
   - Probaremos la solución

4. **Divulgación**
   - Coordinaremos la divulgación contigo
   - Publicaremos un Security Advisory
   - Actualizaremos el código

5. **Reconocimiento**
   - Te acreditaremos en el CHANGELOG (si lo deseas)
   - Incluiremos tu nombre en el Security Advisory

---

## 🏆 Programa de Reconocimiento

Aunque este es un proyecto educativo sin recompensas monetarias, reconocemos públicamente a quienes reportan vulnerabilidades:

### Hall of Fame

Los contribuidores de seguridad serán listados en:
- `SECURITY_HALL_OF_FAME.md`
- Release notes
- README principal

### Niveles de Reconocimiento

- 🥇 **Gold**: Vulnerabilidades críticas
- 🥈 **Silver**: Vulnerabilidades moderadas
- 🥉 **Bronze**: Vulnerabilidades menores o mejoras

---

## 🛡️ Mejores Prácticas de Seguridad para Estudiantes

### Al Trabajar con el Bootcamp

1. **Variables de Entorno**
   ```javascript
   // ❌ NUNCA hagas esto
   const API_KEY = 'mi-clave-secreta-123';

   // ✅ Usa variables de entorno
   const API_KEY = process.env.API_KEY;
   ```

2. **No Commitear Secretos**
   - Usa `.env` para credenciales
   - Verifica `.gitignore` incluya `.env`
   - Proporciona `.env.example` sin valores reales

3. **Validación de Inputs**
   ```javascript
   // ❌ Vulnerable a XSS
   element.innerHTML = userInput;

   // ✅ Escapar contenido del usuario
   element.textContent = userInput;
   ```

4. **HTTPS Siempre**
   ```javascript
   // ❌ Conexión insegura
   fetch('http://api.example.com/data');

   // ✅ Conexión segura
   fetch('https://api.example.com/data');
   ```

5. **Sanitizar Datos**
   ```javascript
   // ✅ Validar antes de usar
   const isValidEmail = (email) => {
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return regex.test(email);
   };
   ```

---

## 📚 Recursos de Seguridad

### Para Aprender

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [JavaScript Security Best Practices](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)

### Herramientas

- [pnpm audit](https://pnpm.io/cli/audit) - Auditar dependencias (gestor oficial)
- [Snyk](https://snyk.io/) - Escaneo de vulnerabilidades
- [ESLint Security Plugin](https://github.com/nodesecurity/eslint-plugin-security)
- [StepSecurity Harden Runner](https://github.com/step-security/harden-runner) - Hardening GitHub Actions

---

## 📌 Regla de Oro: Versiones Pinadas (Zero Floating Versions)

> **⚠️ PROHIBIDO usar rangos de versión flotantes. Toda dependencia debe estar pinada a una versión exacta.**

### ❌ Prohibido

```json
// package.json — NUNCA usar rangos flotantes
{
  "dependencies": {
    "express": "^4.18.0",    // ❌ ^ acepta minor/patch sin control
    "lodash": ">=4.0.0",     // ❌ >= acepta cualquier versión futura
    "axios": "~1.4.0",       // ❌ ~ acepta patch sin control
    "react": "*"             // ❌ * acepta todo, inaceptable
  }
}
```

```yaml
# GitHub Actions — NUNCA usar tags mutables
uses: actions/checkout@v4          # ❌ tag mutable, puede ser modificado
uses: actions/setup-node@main      # ❌ rama flotante
```

### ✅ Obligatorio

```json
// package.json — versiones exactas siempre
{
  "dependencies": {
    "express": "4.18.2",     // ✅ versión exacta
    "lodash": "4.17.21",    // ✅ versión exacta
    "axios": "1.4.0"        // ✅ versión exacta
  }
}
```

```yaml
# GitHub Actions — SHA de commit inmutable
# actions/checkout@v4.1.1
uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11   # ✅ SHA pinado
# actions/github-script@v7.1.0
uses: actions/github-script@f28e40c7f34bde8b3046d885e986cb6290c5673b  # ✅ SHA pinado
```

### Por qué esto importa

| Vector | Riesgo con versión flotante | Mitigación con SHA pinado |
|---|---|---|
| `npm install` con `^` | Instala versión comprometida automáticamente | Instala solo la versión auditada |
| GitHub Action con tag `@v4` | El tag puede ser movido a un commit malicioso | SHA inmutable, imposible redirigir |
| Supply chain attack | Un paquete popular comprometido compromete tu CI/CD | El SHA solo coincide si el código es exactamente el auditado |

### Flujo de Actualización Segura

```bash
# 1. Auditar dependencias actuales
pnpm audit

# 2. Ver qué paquetes tienen CVEs
pnpm audit --audit-level=moderate

# 3. Actualizar solo el paquete afectado a versión exacta
pnpm add nombre-paquete@X.Y.Z

# 4. Volver a auditar para confirmar
pnpm audit

# 5. Para GitHub Actions: obtener SHA del nuevo tag
# gh api repos/OWNER/ACTION/git/refs/tags/vX.Y.Z --jq '.object.sha'
```

**Frecuencia de Revisión**: Mensual o cuando se publique un CVE de severidad ≥ CVSS 7.0

---

## ⚖️ Divulgación Responsable

Solicitamos:

- **No divulgar públicamente** la vulnerabilidad hasta que hayamos publicado un fix
- **Dar tiempo razonable** para resolver el problema
- **No explotar** la vulnerabilidad más allá de lo necesario para demostrarla

Nos comprometemos a:

- **Responder rápidamente** a tu reporte
- **Mantener comunicación** sobre el progreso
- **Acreditar tu descubrimiento** (si lo deseas)
- **Publicar un fix** en el tiempo acordado

---

## 📞 Contacto de Seguridad

- **Email Principal**: [security@ejemplo.com](mailto:security@ejemplo.com)
- **Email Alternativo**: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
- **PGP Key**: [Disponible aquí](link-to-pgp-key) (opcional)

---

## 📋 Checklist para Reportar

Antes de enviar tu reporte, asegúrate de incluir:

- [ ] Descripción clara de la vulnerabilidad
- [ ] Pasos detallados para reproducirla
- [ ] Impacto potencial
- [ ] Versión afectada
- [ ] Archivos/líneas específicas
- [ ] Captura de pantalla o video (si aplica)
- [ ] Sugerencia de fix (opcional)
- [ ] Tu información de contacto

---

## 🙏 Agradecimientos

Agradecemos a todos los investigadores de seguridad y contribuidores que nos ayudan a mantener este proyecto seguro para nuestra comunidad de estudiantes.

---

*Última actualización: Abril 2026*
*Versión: 1.1*

**Para consultas urgentes de seguridad, contacta: [security@ejemplo.com](mailto:security@ejemplo.com)**
