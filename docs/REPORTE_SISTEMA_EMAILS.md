# 📧 Reporte: Sistema de Envío de Emails

**Fecha:** 2025-01-27  
**Proyecto:** Nelvb-portfolio  
**Autor:** Nelson Valero

---

## 📋 Resumen Ejecutivo

El sistema de envío de emails utiliza una arquitectura **híbrida cliente-servidor**:
- **EmailJS** para envío directo desde el frontend (sin backend propio)
- **Backend Flask** para validación de emails con MailboxLayer API
- **Validación en dos capas**: formato básico + verificación SMTP

---

## 🏗️ Arquitectura del Sistema

```
┌─────────────────┐
│   Frontend      │
│  (React)        │
│  contact.js     │
└────────┬────────┘
         │
         ├─────────────────┬─────────────────┐
         │                 │                 │
         ▼                 ▼                 ▼
    ┌─────────┐    ┌──────────────┐    ┌─────────────┐
    │ EmailJS │    │ Flask Backend│    │CustomAlert  │
    │ Service │    │ verify_email │    │ Component   │
    └─────────┘    └───────┬───────┘    └─────────────┘
                          │
                          ▼
                   ┌──────────────┐
                   │ MailboxLayer │
                   │     API      │
                   └──────────────┘
```

---

## 📁 Archivos Involucrados

### Frontend (React)

#### 1. `src/js/views/contact.js`
**Ubicación:** `src/js/views/contact.js`  
**Responsabilidad:** Lógica principal del formulario de contacto

**Funciones clave:**
- `sendEmail(e)` - Envía el email mediante EmailJS
- `validateEmail(email)` - Valida el email con el backend Flask

**Líneas relevantes:**
- **242-272:** Función `validateEmail()` - Validación con backend
- **274-296:** Función `sendEmail()` - Envío con EmailJS
- **369-403:** Formulario HTML con campos: name, email, subject, message

**Dependencias:**
```javascript
import emailjs from "emailjs-com";
import CustomAlert from "../component/customAlert";
```

---

#### 2. `src/js/component/customAlert.js`
**Ubicación:** `src/js/component/customAlert.js`  
**Responsabilidad:** Componente de alertas personalizadas

**Funcionalidad:**
- Modal overlay con mensajes de éxito/error
- Animación de entrada
- Botón de cierre

**Props:**
- `message` (string): Mensaje a mostrar
- `type` (string): "success" | "error" | "info"
- `onClose` (function): Callback al cerrar

---

### Backend (Flask)

#### 3. `email-verification-backend/verify_email.py`
**Ubicación:** `email-verification-backend/verify_email.py`  
**Responsabilidad:** Servidor Flask para validación de emails

**Estructura:**
- **Líneas 1-8:** Configuración Flask con CORS
- **Líneas 11-16:** Función `is_valid_email()` - Validación regex básica
- **Líneas 19-56:** Endpoint `/verify-email` (POST)
- **Líneas 59-60:** Inicialización del servidor (puerto 5000)

**Endpoint:**
```
POST /verify-email
Content-Type: application/json
Body: { "email": "usuario@ejemplo.com" }
```

**Respuesta exitosa:**
```json
{
  "status": "success",
  "message": "Correo válido"
}
```

**Respuesta error:**
```json
{
  "status": "error",
  "message": "Correo no válido o no comprobable",
  "details": {...}
}
```

---

## 🔄 Flujo Completo de Envío

### Paso 1: Usuario completa el formulario
**Ubicación:** `src/js/views/contact.js` (líneas 369-403)

**Campos del formulario:**
- `from_name` → Nombre del remitente
- `reply_to` → Email del remitente (usado para respuesta)
- `subject` → Asunto del mensaje
- `message` → Contenido del mensaje

**Validación HTML5:**
- `required` en todos los campos
- `type="email"` en campo de email (validación básica del navegador)

---

### Paso 2: Submit del formulario
**Función:** `sendEmail(e)` - Línea 274

**Proceso:**
1. `e.preventDefault()` - Previene recarga de página
2. Inicializa EmailJS con `emailjs.init(USER_ID)`
3. Envía formulario con `emailjs.sendForm()`

**Código:**
```javascript
const sendEmail = async (e) => {
  e.preventDefault();
  emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
  emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    e.target  // Formulario completo
  )
  .then(() => {
    // Éxito: muestra alerta
    setAlertMessage("Mensaje enviado con éxito.");
    setAlertType("success");
    setShowAlert(true);
  })
  .catch((error) => {
    // Error: muestra alerta de error
    console.error("Error al enviar el mensaje:", error);
    setAlertMessage("Error al enviar el mensaje, intenta de nuevo.");
    setAlertType("error");
    setShowAlert(true);
  });
  
  e.target.reset(); // Limpia el formulario
};
```

**Nota:** Actualmente NO se llama a `validateEmail()` antes de enviar. La validación está disponible pero no se ejecuta automáticamente.

---

### Paso 3: EmailJS procesa el envío
**Servicio:** EmailJS (https://www.emailjs.com/)

**Proceso:**
1. EmailJS recibe los datos del formulario
2. Usa la plantilla configurada (`REACT_APP_EMAILJS_TEMPLATE_ID`)
3. Envía el email al destinatario configurado en el servicio
4. Retorna Promise (éxito o error)

**Ventajas:**
- No requiere backend propio
- Envío directo desde el cliente
- Gratis hasta cierto límite de emails

---

### Paso 4: Feedback al usuario
**Componente:** `CustomAlert` (líneas 427-433)

**Estados:**
- **Éxito:** Mensaje verde "Mensaje enviado con éxito."
- **Error:** Mensaje rojo "Error al enviar el mensaje, intenta de nuevo."

---

## ✅ Sistema de Validación (Opcional)

### Función `validateEmail()`
**Ubicación:** `src/js/views/contact.js` (líneas 242-272)

**Flujo:**
1. Frontend envía email al backend Flask
2. Backend valida formato con regex
3. Backend consulta MailboxLayer API
4. Backend retorna resultado

**Implementación:**
```javascript
const validateEmail = async (email) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/verify-email`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }
  );
  
  const data = await response.json();
  if (data.status === "success") {
    return true;
  } else {
    setAlertMessage(data.message || "El correo no es válido.");
    setAlertType("error");
    setShowAlert(true);
    return false;
  }
};
```

**Estado actual:** Función definida pero **NO se llama** automáticamente en `sendEmail()`. Está disponible para uso futuro.

---

### Backend Flask - Validación
**Ubicación:** `email-verification-backend/verify_email.py`

**Validación en dos niveles:**

#### 1. Validación Regex (Líneas 11-16)
```python
def is_valid_email(email):
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None
```

#### 2. Validación MailboxLayer (Líneas 38-46)
```python
response = requests.get(f"http://apilayer.net/api/check?access_key={api_key}&email={email}&smtp=1&format=1")
data = response.json()

if data.get("format_valid") and (data.get("smtp_check") or data.get("free")):
    return jsonify({"status": "success", "message": "Correo válido"}), 200
```

**Criterios de validación:**
- `format_valid`: Formato de email correcto
- `smtp_check`: Verificación SMTP (servidor de email existe)
- `free`: Email de dominio gratuito (Gmail, Yahoo, etc.)

---

## 🔐 Variables de Entorno

### Frontend (.env)
```env
# EmailJS Configuration
REACT_APP_EMAILJS_USER_ID=tu_user_id
REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id

# Backend URL (para validación)
REACT_APP_BACKEND_URL=http://localhost:5000
```

**Configuración en Webpack:**
- `webpack.dev.js` (líneas 52-57): Define variables para desarrollo
- `webpack.prod.js` (líneas 73-78): Define variables para producción

### Backend
```env
MAILBOXLAYER_API_KEY=tu_api_key_mailboxlayer
```

**Configuración:**
- Variable de entorno o fallback hardcodeado (línea 35 de verify_email.py)
- ⚠️ **Nota de seguridad:** La API key está hardcodeada como fallback. Debería usar solo variable de entorno en producción.

---

## 📦 Dependencias

### Frontend
```json
{
  "emailjs-com": "^3.2.0"
}
```

### Backend
```python
flask
flask-cors
requests
```

---

## 🚀 Configuración Requerida

### 1. EmailJS
1. Crear cuenta en https://www.emailjs.com/
2. Configurar servicio de email (Gmail, Outlook, etc.)
3. Crear plantilla de email
4. Obtener:
   - `USER_ID`
   - `SERVICE_ID`
   - `TEMPLATE_ID`

### 2. MailboxLayer (Opcional - para validación)
1. Crear cuenta en https://mailboxlayer.com/
2. Obtener API Key
3. Configurar variable de entorno `MAILBOXLAYER_API_KEY`

### 3. Backend Flask
1. Instalar dependencias:
   ```bash
   pip install flask flask-cors requests
   ```
2. Configurar variable de entorno `MAILBOXLAYER_API_KEY`
3. Ejecutar servidor:
   ```bash
   python verify_email.py
   ```
4. Servidor escucha en `http://localhost:5000`

---

## 🔍 Flujo de Datos Detallado

### Envío de Email (EmailJS)

```
Usuario → Formulario (contact.js)
  ↓
sendEmail() ejecuta
  ↓
emailjs.init(USER_ID)
  ↓
emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
  ↓
EmailJS Service
  ↓
Email enviado al destinatario
  ↓
Promise resuelta
  ↓
CustomAlert: "Mensaje enviado con éxito"
```

### Validación de Email (Backend Flask)

```
Usuario → validateEmail(email) [NO SE LLAMA AUTOMÁTICAMENTE]
  ↓
fetch → POST /verify-email
  ↓
Backend Flask (verify_email.py)
  ↓
is_valid_email() → Validación regex
  ↓
MailboxLayer API → Verificación SMTP
  ↓
Respuesta JSON
  ↓
CustomAlert: "Correo válido" o "Correo no válido"
```

---

## ⚠️ Observaciones Importantes

### 1. Validación no se ejecuta automáticamente
- La función `validateEmail()` está definida pero **NO se llama** en `sendEmail()`
- El email se envía directamente sin validación previa
- Para activarla, agregar antes de `emailjs.sendForm()`:
  ```javascript
  const isValid = await validateEmail(formData.email);
  if (!isValid) return;
  ```

### 2. API Key hardcodeada
- En `verify_email.py` línea 35 hay una API key como fallback
- ⚠️ **Riesgo de seguridad:** Debería usar solo variable de entorno

### 3. CORS configurado para cualquier origen
- `CORS(app)` en línea 8 permite todas las solicitudes
- En producción, debería restringirse al dominio del frontend

### 4. Backend no es requerido para envío
- EmailJS funciona sin backend
- El backend Flask solo es necesario si se usa validación con MailboxLayer

---

## 📊 Resumen de Archivos

| Archivo | Ubicación | Función |
|---------|-----------|---------|
| `contact.js` | `src/js/views/contact.js` | Lógica del formulario y envío |
| `customAlert.js` | `src/js/component/customAlert.js` | Componente de alertas |
| `verify_email.py` | `email-verification-backend/verify_email.py` | Backend de validación |
| `webpack.dev.js` | `webpack.dev.js` | Config variables dev |
| `webpack.prod.js` | `webpack.prod.js` | Config variables prod |

---

## 🛠️ Mejoras Sugeridas

1. **Activar validación antes de enviar:**
   - Llamar `validateEmail()` en `sendEmail()` antes de enviar

2. **Eliminar API key hardcodeada:**
   - Usar solo variable de entorno en producción

3. **Restringir CORS:**
   - Configurar CORS solo para dominios permitidos

4. **Manejo de errores mejorado:**
   - Logging más detallado
   - Mensajes de error más específicos

5. **Rate limiting:**
   - Prevenir spam en el backend Flask

---

**Documentación generada el:** 2025-01-27  
**Última actualización:** 2025-01-27

