// Problem - 1

function totalFine(fare) {
  if (typeof fare !== "number" || 0 >= fare) {
    return "Invalid";
  } else {
    const fine = fare + fare * (20 / 100) + 30;
    return fine;
  }
}

// Problem - 2

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  } else {
    const output = str.replaceAll(" ", "");
    return output.toUpperCase();
  }
}

// Problem - 3
