from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Permitir solicitudes CORS de cualquier origen

# Ruta para verificar el correo electrónico
@app.route('/verify-email', methods=['POST'])
def verify_email():
    # Recibir el email del cuerpo de la solicitud
    email = request.json.get('email')
    if not email:
        return jsonify({"status": "error", "message": "El campo 'email' es obligatorio"}), 400

    # API Key de Kickbox
    api_key = "live_6315ef1fdca6e1794133335927f848b952234ccbad73d3723a31f5cb1c08b17f"  # Reemplaza con tu API Key
    url = f"https://api.kickbox.com/v2/verify?email={email}&apikey={api_key}"

    try:
        # Hacer la solicitud a Kickbox
        response = requests.get(url)
        data = response.json()

        # Procesar los resultados de Kickbox
        if data.get("result") == "deliverable":
            return jsonify({"status": "success", "message": "Correo válido"}), 200
        else:
            return jsonify({
                "status": "error",
                "message": "Correo no válido",
            }), 400
    except Exception as e:
        return jsonify({"status": "error", "message": f"Error verificando el correo: {str(e)}"}), 500

# Iniciar el servidor Flask
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
