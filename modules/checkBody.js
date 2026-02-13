function checkBody(body, keys) {
  let isValid = true;

  for (const field of keys) {
    // Vérifie que le champ existe et n'est pas une chaîne vide
    if (!body[field] || body[field] === "") {
      isValid = false;
    }
  }

  return isValid;
}

module.exports = { checkBody };
