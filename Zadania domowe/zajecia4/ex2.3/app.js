function main() {
  const x = "Hello world!";
  if (typeof x == "string") {
    throw new Error(200, "x jest typu string!");
  }
  try {
    const result = run(x);
  } catch (e) {
    console.log(e.name + ": " + e.message);
  }
  console.log(x.lowerCase());
}

window.onload = main;

window.onerror = function(msg, url, line) {
  console.log("komunikat bledu : " + msg);
  console.log("url : " + url);
  console.log("numer linii : " + line);
}
