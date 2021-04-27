function loadScript(url, callback = callback) {
  function check() {
    let type = typeof url;

    switch (type) {
      case "function":
        alert("Маловато");
        break;
      case "string":
        const file = document.createElement("script");
        file.src = type;
        file.type = "text/javascript";
        file.onload = callback;
        file.body.appendChild(element);
        break;
      case "object":
        type.forEach((element) => {
          const file = document.createElement("script");
          file.src = element;
          file.type = "text/javascript";
          file.onload = callback;
          file.body.appendChild(element);
        });
        break;
      default:
        alert("Нет таких значений");
    }
  }
}
