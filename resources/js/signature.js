document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("signature-canvas");
  const clearBtn = document.getElementById("clear-btn");
  const saveBtn = document.getElementById("save-btn");
  const ctx = canvas.getContext("2d");
  let drawing = false;

  // Ajustar canvas a la pantalla y establecer tamaño adecuado
  function resizeCanvas() {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
  }

  // Llamar a la función para redimensionar el canvas
  resizeCanvas();

  // Funciones de dibujo
  function startDrawing(event) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  }

  function draw(event) {
    if (!drawing) return;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }

  function stopDrawing() {
    drawing = false;
  }

  // Eventos del canvas
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseleave", stopDrawing);

  // Limpiar el canvas
  clearBtn.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Guardar la firma
  saveBtn.addEventListener("click", function () {
    const dataUrl = canvas.toDataURL("image/png");
    sendSignatureToServer(dataUrl);
  });

  function sendSignatureToServer(dataUrl) {
    fetch("../views/save_signature.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: dataUrl }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Firma guardada exitosamente");
        } else {
          alert("Error al guardar la firma");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al guardar la firma");
      });
  }

  // Adaptar canvas al tamaño de la pantalla
  window.addEventListener("resize", resizeCanvas);
});
