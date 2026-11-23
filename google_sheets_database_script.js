// =========================================================================
// AQUA ESSENCE - BASE DE DATOS EN LA NUBE & NOTIFICACIONES POR CORREO
// =========================================================================
// Correo del Administrador: andresfj20023@gmail.com
// WhatsApp Oficial: 3206062038
//
// FUNCIONALIDAD:
// 1. Guarda registros de clientes y pedidos en Google Sheets.
// 2. Envía notificación completa del pedido al correo del Administrador.
// 3. Envía AUTOMÁTICAMENTE desde tu correo (andresfj20023@gmail.com) el correo de
//    "Confirmación de pedido #XXXXX" al cliente, con el diseño editorial idéntico a Clemont.
// =========================================================================

var ADMIN_NOTIFICATION_EMAIL = "andresfj20023@gmail.com";
var WHATSAPP_NUMBER = "3206062038";

function doPost(e) {
  try {
    var sheetApp = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);

    // TABLA 1: REGISTRO DE CLIENTES
    if (data.type === 'registro_cliente') {
      var sheetClientes = sheetApp.getSheetByName("Clientes");
      if (!sheetClientes) {
        sheetClientes = sheetApp.insertSheet("Clientes");
        sheetClientes.appendRow([
          "Fecha de Registro",
          "ID Cliente",
          "Nombre Completo",
          "Teléfono / WhatsApp",
          "Correo Electrónico",
          "Ciudad",
          "Dirección de Entrega"
        ]);
        sheetClientes.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#F0EFEA");
        sheetClientes.setFrozenRows(1);
      }

      sheetClientes.appendRow([
        data.fecha || new Date().toLocaleString(),
        data.id || "",
        data.nombre || "",
        data.telefono || "",
        data.correo || "",
        data.ciudad || "",
        data.direccion || ""
      ]);

      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Cliente guardado" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // TABLA 2: NUEVOS PEDIDOS CON # DE PEDIDO ÚNICO + CORREOS AUTOMÁTICOS
    if (data.type === 'nuevo_pedido') {
      var sheetPedidos = sheetApp.getSheetByName("Pedidos");
      if (!sheetPedidos) {
        sheetPedidos = sheetApp.insertSheet("Pedidos");
        sheetPedidos.appendRow([
          "Fecha",
          "# Pedido Único",
          "Nombre Cliente",
          "WhatsApp / Teléfono",
          "Correo",
          "Ciudad",
          "Dirección",
          "Productos",
          "Método de Envío",
          "Total COP",
          "Estado"
        ]);
        sheetPedidos.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#D4EAD8");
        sheetPedidos.setFrozenRows(1);
      }

      sheetPedidos.appendRow([
        data.fecha || new Date().toLocaleString(),
        data.orderCode || "",
        data.cliente || "",
        data.telefono || "",
        data.correo || "",
        data.ciudad || "",
        data.direccion || "",
        data.productos || "",
        data.metodoEnvio || "",
        data.total || 0,
        "Pendiente"
      ]);

      var cleanPhone = (data.telefono || "").toString().replace(/\D/g, '');
      var waCustomerLink = cleanPhone ? ("https://wa.me/57" + cleanPhone) : "#";
      var waAdminDirect = "https://wa.me/57" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent("¡Hola Aqua Essence! Adjunto el comprobante de pago para mi pedido #" + (data.orderCode || ""));
      var totalFormatted = "$" + Number(data.total || 0).toLocaleString('es-CO') + " COP";

      // -------------------------------------------------------------
      // 1. CORREO AL ADMINISTRADOR (andresfj20023@gmail.com)
      // -------------------------------------------------------------
      try {
        var adminSubject = "🛍️ Nuevo Pedido #" + (data.orderCode || "") + " en Aqua Essence - " + (data.cliente || "Cliente");
        var adminHtml =
          "<div style='font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden;'>" +
          "<div style='background: #111111; color: #ffffff; padding: 24px; text-align: center;'>" +
          "<h1 style='margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;'>AQUA ESSENCE</h1>" +
          "<p style='margin: 6px 0 0; font-size: 13px; color: #dcdcdc;'>Notificación de Nuevo Pedido para el Administrador</p>" +
          "</div>" +
          "<div style='padding: 24px;'>" +
          "<div style='background: #FAF9F6; border: 1px solid #ECEAE4; border-radius: 8px; padding: 16px; margin-bottom: 24px;'>" +
          "<table style='width: 100%; border-collapse: collapse; font-size: 14px;'>" +
          "<tr><td style='color: #666; width: 140px; padding: 4px 0;'><strong>N° de Pedido:</strong></td><td style='color: #111; font-weight: bold; font-size: 16px;'>#" + (data.orderCode || "") + "</td></tr>" +
          "<tr><td style='color: #666; padding: 4px 0;'><strong>Fecha:</strong></td><td>" + (data.fecha || new Date().toLocaleString()) + "</td></tr>" +
          "<tr><td style='color: #666; padding: 4px 0;'><strong>Total a Cobrar:</strong></td><td style='color: #1b5e20; font-weight: bold; font-size: 16px;'>" + totalFormatted + "</td></tr>" +
          "</table>" +
          "</div>" +
          "<h3 style='margin: 0 0 12px; font-size: 15px; text-transform: uppercase; letter-spacing: 1px; color: #111; border-bottom: 2px solid #111; padding-bottom: 6px;'>📍 Información de Envío y Contacto</h3>" +
          "<table style='width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6; margin-bottom: 24px;'>" +
          "<tr><td style='width: 140px; color: #666; font-weight: 600; padding: 4px 0;'>Cliente:</td><td style='color: #111; font-weight: 600;'>" + (data.cliente || "N/A") + "</td></tr>" +
          "<tr><td style='color: #666; font-weight: 600; padding: 4px 0;'>WhatsApp / Tel:</td><td><a href='" + waCustomerLink + "' target='_blank' style='color: #25D366; font-weight: bold; text-decoration: none;'>💬 " + (data.telefono || "N/A") + " (Abrir Chat)</a></td></tr>" +
          "<tr><td style='color: #666; font-weight: 600; padding: 4px 0;'>Correo:</td><td>" + (data.correo || "N/A") + "</td></tr>" +
          "<tr><td style='color: #666; font-weight: 600; padding: 4px 0;'>Ciudad:</td><td style='font-weight: 600; color: #111;'>" + (data.ciudad || "N/A") + "</td></tr>" +
          "<tr><td style='color: #666; font-weight: 600; padding: 4px 0;'>Dirección:</td><td style='font-weight: 600; color: #111;'>" + (data.direccion || "N/A") + "</td></tr>" +
          "<tr><td style='color: #666; font-weight: 600; padding: 4px 0;'>Método de Envío:</td><td>" + (data.metodoEnvio || "N/A") + "</td></tr>" +
          "</table>" +
          "<h3 style='margin: 0 0 12px; font-size: 15px; text-transform: uppercase; letter-spacing: 1px; color: #111; border-bottom: 2px solid #111; padding-bottom: 6px;'>🛍️ Productos para Despacho</h3>" +
          "<div style='background: #fbfbfb; border: 1px solid #eee; border-radius: 8px; padding: 14px 18px; margin-bottom: 24px; font-size: 14px; line-height: 1.8; color: #222;'>" +
          (data.productosHtml || ("• " + (data.productos || "").split(', ').join("<br/>• "))) +
          "</div>" +
          "<div style='text-align: center; padding: 16px 0;'>" +
          "<a href='" + waCustomerLink + "' target='_blank' style='background: #25D366; color: #ffffff; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block;'>Contactar Cliente por WhatsApp</a>" +
          "</div>" +
          "</div>" +
          "<div style='background: #FAF9F6; border-top: 1px solid #ECEAE4; padding: 16px; text-align: center; font-size: 12px; color: #888;'>" +
          "<p style='margin: 0;'>Aqua Essence · Panel de Control de Pedidos</p>" +
          "</div>" +
          "</div>";

        MailApp.sendEmail({
          to: ADMIN_NOTIFICATION_EMAIL,
          subject: adminSubject,
          htmlBody: adminHtml
        });
      } catch (adminMailErr) {
        Logger.log("Error enviando email al admin: " + adminMailErr.toString());
      }

      // -------------------------------------------------------------
      // 2. CORREO AL CLIENTE (ESTILO OFICIAL CLEMONT)
      //    Enviado directamente desde andresfj20023@gmail.com
      // -------------------------------------------------------------
      if (data.correo && data.correo.indexOf('@') > -1) {
        try {
          var clientSubject = "Confirmación de pedido #" + (data.orderCode || "");
          var clientHtml = buildClemontStyleCustomerEmail(data, totalFormatted, waAdminDirect);

          MailApp.sendEmail({
            to: data.correo,
            subject: clientSubject,
            name: "Aqua Essence",
            htmlBody: clientHtml
          });
          Logger.log("Correo de confirmación enviado exitosamente al cliente: " + data.correo);
        } catch (clientMailErr) {
          Logger.log("Error enviando email al cliente: " + clientMailErr.toString());
        }
      }

      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Pedido guardado y correos enviados" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "ignored" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// =========================================================================
// PLANTILLA DE CORREO AL CLIENTE (RÉPLICA EXACTA DEL FORMATO CLEMONT)
// =========================================================================
function buildClemontStyleCustomerEmail(data, totalFormatted, waLink) {
  var orderCode = data.orderCode || "";
  var cliente = data.cliente || "Cliente";
  var subtotalFormatted = "$" + Number(data.subtotal || data.total || 0).toLocaleString('es-CO');
  var envioFormatted = data.metodoEnvio || "Envío estándar";

  var itemsRowsHtml = "";
  if (data.items && Array.isArray(data.items) && data.items.length > 0) {
    for (var i = 0; i < data.items.length; i++) {
      var item = data.items[i];
      var qty = item.qty || 1;
      var priceFormatted = "$" + Number((item.price || 0) * qty).toLocaleString('es-CO');
      var imgTag = item.image 
        ? ("<img src='" + item.image + "' width='64' height='64' style='display:block; border-radius: 8px; border: 1px solid #ebebeb; object-fit: contain; background: #fafafa;' alt='Loción' />")
        : ("<div style='width:64px; height:64px; border-radius:8px; background:#f4f4f4; border:1px solid #e0e0e0; text-align:center; line-height:64px; font-size:24px;'>🧴</div>");

      itemsRowsHtml += 
        "<tr style='border-bottom: 1px solid #f0f0f0;'>" +
          "<td style='padding: 16px 0; width: 74px; vertical-align: top;'>" + imgTag + "</td>" +
          "<td style='padding: 16px 12px; vertical-align: top;'>" +
            "<div style='font-size: 13px; font-weight: bold; color: #111111; letter-spacing: 0.3px; text-transform: uppercase;'>" +
              item.name + " <span style='font-weight: normal; color: #777777;'>× " + qty + "</span>" +
            "</div>" +
            "<div style='font-size: 11px; color: #777777; margin-top: 4px;'>" + (item.variant || "") + "</div>" +
          "</td>" +
          "<td style='padding: 16px 0; vertical-align: top; text-align: right; font-size: 14px; font-weight: 600; color: #111111;'>" +
            priceFormatted +
          "</td>" +
        "</tr>";
    }
  } else {
    itemsRowsHtml = 
      "<tr style='border-bottom: 1px solid #f0f0f0;'>" +
        "<td colspan='3' style='padding: 16px 0; font-size: 13px; color: #333333; line-height: 1.8;'>" +
          (data.productosHtml || ("• " + (data.productos || "").split(', ').join("<br/>• "))) +
        "</td>" +
      "</tr>";
  }

  return "<!DOCTYPE html>" +
    "<html>" +
    "<head><meta charset='utf-8'></head>" +
    "<body style='margin: 0; padding: 24px 12px; background-color: #f7f7f7; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;'>" +
    "<div style='max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e6e6e6; overflow: hidden;'>" +

      // CABECERA IDÉNTICA A CLEMONT: LOGO A LA IZQUIERDA, # PEDIDO A LA DERECHA
      "<div style='padding: 32px 32px 20px 32px; border-bottom: 1px solid #f2f2f2;'>" +
        "<table style='width: 100%; border-collapse: collapse;'>" +
          "<tr>" +
            "<td style='vertical-align: middle;'>" +
              "<span style='font-family: Georgia, Garamond, serif; font-size: 28px; font-weight: bold; letter-spacing: -0.5px; color: #111111;'>Aqua Essence</span>" +
            "</td>" +
            "<td style='vertical-align: middle; text-align: right;'>" +
              "<span style='font-size: 12px; font-weight: 600; color: #888888; letter-spacing: 1px; text-transform: uppercase;'>PEDIDO #" + orderCode + "</span>" +
            "</td>" +
          "</tr>" +
        "</table>" +
      "</div>" +

      // CUERPO PRINCIPAL: ¡Gracias por tu compra!
      "<div style='padding: 32px;'>" +
        "<h2 style='margin: 0 0 10px 0; font-size: 22px; font-weight: 700; color: #111111; letter-spacing: -0.3px;'>¡Gracias por tu compra!</h2>" +
        "<p style='margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #555555;'>" +
          "Estamos preparando tu pedido para enviarlo. Te notificaremos cuando haya sido enviado." +
        "</p>" +

        // BOTÓN NEGRO IDÉNTICO A CLEMONT: [ Ver tu pedido ] o Visita nuestra tienda
        "<div style='margin-bottom: 36px;'>" +
          "<table style='border-collapse: collapse;'>" +
            "<tr>" +
              "<td style='background: #111111; border-radius: 6px; text-align: center;'>" +
                "<a href='" + waLink + "' target='_blank' style='display: inline-block; padding: 13px 28px; font-size: 13px; font-weight: bold; color: #ffffff; text-decoration: none; border-radius: 6px;'>Ver tu pedido</a>" +
              "</td>" +
              "<td style='padding-left: 14px; font-size: 13px; color: #777777;'>" +
                "o <a href='https://aquaessence.co' target='_blank' style='color: #111111; font-weight: 500; text-decoration: underline;'>Visita nuestra tienda</a>" +
              "</td>" +
            "</tr>" +
          "</table>" +
        "</div>" +

        // SECCIÓN RESUMEN DEL PEDIDO
        "<h3 style='margin: 0 0 16px 0; font-size: 16px; font-weight: 700; color: #111111;'>Resumen del pedido</h3>" +
        "<table style='width: 100%; border-collapse: collapse; margin-bottom: 20px;'>" +
          itemsRowsHtml +
        "</table>" +

        // TOTALES
        "<div style='border-top: 1px solid #f0f0f0; padding-top: 16px; margin-bottom: 28px;'>" +
          "<table style='width: 100%; border-collapse: collapse; font-size: 13px; line-height: 1.8;'>" +
            "<tr>" +
              "<td style='color: #666666;'>Subtotal</td>" +
              "<td style='text-align: right; color: #111111; font-weight: 500;'>" + subtotalFormatted + "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style='color: #666666;'>Envío</td>" +
              "<td style='text-align: right; color: #111111; font-weight: 500;'>" + envioFormatted + "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style='padding-top: 10px; font-size: 16px; font-weight: bold; color: #111111;'>Total</td>" +
              "<td style='padding-top: 10px; text-align: right; font-size: 17px; font-weight: bold; color: #111111;'>" + totalFormatted + "</td>" +
            "</tr>" +
          "</table>" +
        "</div>" +

        // CUADRO DE PAGO Y VALIDACIÓN CON WHATSAPP
        "<div style='background: #FAF9F6; border: 1px solid #EAE8E3; border-radius: 8px; padding: 20px; margin-bottom: 28px;'>" +
          "<div style='font-size: 11px; font-weight: bold; color: #B08D44; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;'>Datos para consignar tu pago:</div>" +
          "<div style='font-size: 13px; color: #222222; line-height: 1.6;'>" +
            "• <strong>Bancolombia Ahorros:</strong> <span style='font-family: monospace; font-size: 14px;'>10362869492</span><br/>" +
            "• <strong>Llave de Transferencia:</strong> <span style='font-family: monospace; font-size: 14px;'>1001132365</span>" +
          "</div>" +
          "<div style='margin-top: 14px; padding-top: 12px; border-top: 1px dashed #DDD9CE; font-size: 12px; color: #444444; line-height: 1.5;'>" +
            "Envía la foto de tu comprobante a nuestro WhatsApp <strong>3206062038</strong> indicando tu número de pedido <strong>#" + orderCode + "</strong> para coordinar el despacho." +
          "</div>" +
          "<div style='margin-top: 14px; text-align: center;'>" +
            "<a href='" + waLink + "' target='_blank' style='background: #25D366; color: #ffffff; padding: 11px 22px; border-radius: 999px; text-decoration: none; font-size: 12px; font-weight: bold; display: inline-block;'>💬 Enviar Comprobante por WhatsApp</a>" +
          "</div>" +
        "</div>" +

        // INFORMACIÓN DE CONTACTO Y ENTREGA
        "<div style='border-top: 1px solid #f0f0f0; padding-top: 18px; font-size: 12px; color: #555555; line-height: 1.7;'>" +
          "<strong style='color: #111111;'>Dirección de Entrega:</strong> " + (data.direccion || "") + " · " + (data.ciudad || "") + "<br/>" +
          "<strong style='color: #111111;'>Destinatario:</strong> " + cliente + " (" + (data.telefono || "") + ")" +
        "</div>" +

      "</div>" +

      // PIE DE PÁGINA
      "<div style='background: #fbfbfb; border-top: 1px solid #eeeeee; padding: 20px; text-align: center; font-size: 11px; color: #999999;'>" +
        "<p style='margin: 0;'>Aqua Essence · Alta Perfumería, Originales, Réplicas 1.1 y Fragancias</p>" +
        "<p style='margin: 4px 0 0;'>Medellín, Colombia · WhatsApp: 3206062038</p>" +
      "</div>" +

    "</div>" +
    "</body></html>";
}
