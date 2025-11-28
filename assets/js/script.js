const intervalo = 300000;
setInterval(() => {
    const iframe = document.getElementById("calendario");
    const baseUrl = iframe.src.split("?")[0];
    const params = iframe.src.split("?")[1];
    iframe.src = baseUrl + "?" + params + "&t=" + Date.now();
}, intervalo);