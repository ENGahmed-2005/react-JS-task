function filterText(input) {
    return input.replace(/[^\p{L}\p{N}\s]/gu, "").trim().replace(/\s+/g, " ");

}
let text = "   Mohammad  /*  Naji   ";

console.log(filterText(text));
