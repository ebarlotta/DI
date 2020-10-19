var e, pd, rpd, c, ie, ipd, irpd, ic;
e = document.getElementById("e");
pd = document.getElementById("pd");
rpd = document.getElementById("rpd");
c = document.getElementById("c");
ie = document.getElementById("input-email");
ipd = document.getElementById("input-password");
irpd = document.getElementById("input-repassword");
ic = document.getElementById("input-clave");

var email, password, repassword, clave;
email = document.myForm.email;
password = document.myForm.password;
repassword = document.myForm.repassword;
clave = document.myForm.clave;

function validarEmail() {
  if (email.value == "") {
    ie.style.color = "red";
    email.style.border = "3px solid red";
    e.style.color = "red";
    e.innerHTML = "* Ingrese un Correo Electrónico";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    ie.style.color = "red";
    email.style.border = "3px solid red";
    e.style.color = "red";
    e.innerHTML = "* Correo Electrónico Invalido";
  } else if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    ie.style.color = "#47a64a";
    email.style.border = "3px solid #47a64a";
    e.style.color = "#47a64a";
    e.innerHTML = "* Correo Electrónico Válido";
  }
}

function validarPassword() {
  if (password.value == "") {
    ipd.style.color = "red";
    password.style.border = "3px solid red";
    pd.style.color = "red";
    pd.innerHTML = "* Ingrese una Contraseña";
  } else if (
    !/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
      password.value
    )
  ) {
    ipd.style.color = "red";
    password.style.border = "3px solid red";
    pd.style.color = "red";
    pd.innerHTML = "* Contraseña Inválida";
  } else if (
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
      password.value
    )
  ) {
    ipd.style.color = "#47a64a";
    password.style.border = "3px solid #47a64a";
    pd.style.color = "#47a64a";
    pd.innerHTML = "* Contraseña Válida";
  }
}

function validarRepassword() {
  if (repassword.value == "") {
    irpd.style.color = "red";
    repassword.style.border = "3px solid red";
    rpd.style.color = "red";
    rpd.innerHTML = "* Repita la Contraseña";
  } else if (repassword.value != password.value) {
    irpd.style.color = "red";
    repassword.style.border = "3px solid red";
    rpd.style.color = "red";
    rpd.innerHTML = "* La Contraseña no coincide";
  } else if (repassword.value == password.value) {
    irpd.style.color = "#47a64a";
    repassword.style.border = "3px solid #47a64a";
    rpd.style.color = "#47a64a";
    rpd.innerHTML = "* La Contraseña coincide";
  }
}

function validarClave() {
  if (clave.value == "") {
    ic.style.color = "red";
    clave.style.border = "3px solid red";
    c.style.color = "red";
    c.innerHTML = "* Ingrese una Clave";
  } else if (clave.value.length < 8) {
    ic.style.color = "red";
    clave.style.border = "3px solid red";
    c.style.color = "red";
    c.innerHTML = "* La Clave debe tener mínimo 8 caracteres";
  } else if (clave.value.length >= 8) {
    ic.style.color = "#47a64a";
    clave.style.border = "3px solid #47a64a";
    c.style.color = "#47a64a";
    c.innerHTML = "* Clave Válida";
  }
}

function validarLogin() {
  /* Validacion de espacios vacios */
  if (email.value == "") {
    ie.style.color = "red";
    email.style.border = "3px solid red";
    e.style.color = "red";
    e.innerHTML = "* Ingrese un Correo Electrónico";
    return false;
  }
  if (password.value == "") {
    ipd.style.color = "red";
    password.style.border = "3px solid red";
    pd.style.color = "red";
    pd.innerHTML = "* Ingrese una Contraseña";
    return false;
  }

  /* Validacion de expresiones regulares */
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    ie.style.color = "red";
    email.style.border = "3px solid red";
    e.style.color = "red";
    e.innerHTML = "* Correo Electrónico Invalido";
    return false;
  }
  if (
    !/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
      password.value
    )
  ) {
    ipd.style.color = "red";
    password.style.border = "3px solid red";
    pd.style.color = "red";
    pd.innerHTML = "* Contraseña Inválida";
    return false;
  }

  /* Validacion exitosa */
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    ie.style.color = "#47a64a";
    email.style.border = "3px solid #47a64a";
    e.style.color = "#47a64a";
    e.innerHTML = "* Correo Electrónico Válido";
    return true;
  }
  if (
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
      password.value
    )
  ) {
    ipd.style.color = "#47a64a";
    password.style.border = "3px solid #47a64a";
    pd.style.color = "#47a64a";
    pd.innerHTML = "* Contraseña Válida";
    return true;
  }
}

function validarRegister() {
  /* Validacion de espacios vacios */
  if (email.value == "") {
    ie.style.color = "red";
    email.style.border = "3px solid red";
    e.style.color = "red";
    e.innerHTML = "* Ingrese un Correo Electrónico";
    return false;
  }
  if (password.value == "") {
    ipd.style.color = "red";
    password.style.border = "3px solid red";
    pd.style.color = "red";
    pd.innerHTML = "* Ingrese una Contraseña";
    return false;
  }
  if (repassword.value == "") {
    irpd.style.color = "red";
    repassword.style.border = "3px solid red";
    rpd.style.color = "red";
    rpd.innerHTML = "* Repita la Contraseña";
    return false;
  }
  if (clave.value == "") {
    ic.style.color = "red";
    clave.style.border = "3px solid red";
    c.style.color = "red";
    c.innerHTML = "* Ingrese una Clave";
    return false;
  }

  /* Validacion de cantidad de caracteres */
  if (clave.value.length < 8) {
    ic.style.color = "red";
    clave.style.border = "3px solid red";
    c.style.color = "red";
    c.innerHTML = "* La Clave debe tener mínimo 8 caracteres";
    return false;
  }

  /* Validacion de repeticion */
  if (repassword.value != password.value) {
    irpd.style.color = "red";
    repassword.style.border = "3px solid red";
    rpd.style.color = "red";
    rpd.innerHTML = "* La Contraseña no coincide";
    return false;
  }

  /* Validacion de expresiones regulares */
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    ie.style.color = "red";
    email.style.border = "3px solid red";
    e.style.color = "red";
    e.innerHTML = "* Correo Electrónico Invalido";
    return false;
  }
  if (
    !/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
      password.value
    )
  ) {
    ipd.style.color = "red";
    password.style.border = "3px solid red";
    pd.style.color = "red";
    pd.innerHTML = "* Contraseña Inválida";
    return false;
  }

  /* Validacion exitosa */
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    ie.style.color = "#47a64a";
    email.style.border = "3px solid #47a64a";
    e.style.color = "#47a64a";
    e.innerHTML = "* Correo Electrónico Válido";
    return true;
  }
  if (
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
      password.value
    )
  ) {
    ipd.style.color = "#47a64a";
    password.style.border = "3px solid #47a64a";
    pd.style.color = "#47a64a";
    pd.innerHTML = "* Contraseña Válida";
    return true;
  }
  if (repassword.value == password.value) {
    irpd.style.color = "#47a64a";
    repassword.style.border = "3px solid #47a64a";
    rpd.style.color = "#47a64a";
    rpd.innerHTML = "* La Contraseña coincide";
    return true;
  }
  if (clave.value.length >= 8) {
    ic.style.color = "#47a64a";
    clave.style.border = "3px solid #47a64a";
    c.style.color = "#47a64a";
    c.innerHTML = "* Clave Válida";
    return true;
  }
}
