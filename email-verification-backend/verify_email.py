from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import re
import os

app = Flask(__name__)
CORS(app)  # Permitir solicitudes CORS de cualquier origen

# Función para validar formato de correo
def is_valid_email(email):
    """
    Valida el formato básico del correo electrónico.
    """
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None

# Ruta para verificar el correo electrónico
@app.route('/verify-email', methods=['POST'])
def verify_email():
    """
    Endpoint para verificar un correo electrónico usando la API de MailboxLayer.
    """
    # print("Datos recibidos:", request.json)

    # Recibir el email del cuerpo de la solicitud
    email = request.json.get('email')
    if not email:
        return jsonify({"status": "error", "message": "El campo 'email' es obligatorio"}), 400

    if not is_valid_email(email):
        return jsonify({"status": "error", "message": "Formato de correo inválido"}), 400

    # API Key de MailboxLayer desde variable de entorno
    api_key = os.getenv('MAILBOXLAYER_API_KEY', '00d91ca1ac283381b18482c46f962261')  # Cambia a tu clave válida
    url = f"http://apilayer.net/api/check?access_key={api_key}&email={email}&smtp=1&format=1"

    try:
        # Hacer la solicitud a MailboxLayer
        response = requests.get(url)
        response.raise_for_status()  # Lanza excepción si la solicitud falla
        data = response.json()
        # print("Respuesta de MailboxLayer:", data)

        # Procesar los resultados de MailboxLayer
        if data.get("format_valid") and (data.get("smtp_check") or data.get("free")):
            return jsonify({"status": "success", "message": "Correo válido"}), 200
        else:
            return jsonify({
                "status": "error",
                "message": "Correo no válido o no comprobable",
                "details": data  # Detalles para entender el fallo
            }), 400
    except requests.exceptions.RequestException as e:
        # Manejo de errores en la solicitud HTTP a MailboxLayer
        return jsonify({"status": "error", "message": f"Error en la solicitud a MailboxLayer: {str(e)}"}), 500

# Iniciar el servidor Flask
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
