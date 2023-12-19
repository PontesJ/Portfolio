const passInput = document.querySelector("#inputPasswordId");
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="inputLengthId"]');
const btnGerar = document.querySelector("#btnGerar");

const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbols = document.querySelector("#chkSymbolsId");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("input", () => {
    infoLength.innerHTML = lenInput.value;
    generatePassword(
      chkNumber.checked,
      chkSymbols.checked,
      chkLower.checked,
      chkUpper.checked,
      lenInput.value
    );
});

btnGerar.addEventListener("click", () => {
  generatePassword(
    chkNumber.checked,
    chkSymbols.checked,
    chkLower.checked,
    chkUpper.checked,
    lenInput.value
  );
});

const generatePassword = (
  hasNumbers,
  hasSymbols,
  hasLowercase,
  hasUppercase,
  lenght
) => {
  const newArray = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowercase ? LowercaseCaracters : []),
    ...(hasUppercase ? UppercaseCaracters : []),
  ];

  if (newArray.length === 0) return;

  let password = "";

  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    password += newArray[randomIndex];
  }

  passInput.value = password;
};

document.getElementById('copyButtonId').addEventListener('click', function() {
    var copyText = document.getElementById("inputPasswordId");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* Para dispositivos móveis */
  
    document.execCommand("copy");
  
    var copyConfirm = document.getElementById("copyConfirmId");
    copyConfirm.style.display = "block";
    setTimeout(function() {
      copyConfirm.style.display = "none";
    }, 2000);
  });
  
lenInput.value = 6;
infoLength.innerHTML = lenInput.value;

[chkLower, chkUpper, chkNumber, chkSymbols].forEach(chk => {
  chk.addEventListener('click', () => {
    generatePassword(
      chkNumber.checked,
      chkSymbols.checked,
      chkLower.checked,
      chkUpper.checked,
      lenInput.value
    );
  });
});

document.onload = generatePassword( false, false, true, false, 6);
document.onload = chkLower.checked = true;
document.onload = chkUpper.checked = false;
document.onload = chkNumber.checked = false;
document.onload = chkSymbols.checked = false;