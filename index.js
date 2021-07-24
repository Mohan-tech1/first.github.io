// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();
//for contact

function messagecontact() {
  var email = document.getElementById('email').value;//contact email Id
  var comment = document.getElementById('comment').value;//contact comment
  var name = document.getElementById('name').value;//contact name
  //contact body
  // alert(email)
  Email.send({
    Host: 'smtp.gmail.com',
    Username: "mtech737703@gmail.com",
    Password: "9058843284",
    To: email,
    From: "mtech737703@gmail.com",
    Subject: "MTech Foundation",
    Body: `Hi ${name} \n what can I help you. \n ohh sorry \n you are contact my orgniztion for this metter ${comment} .but I'm really sorry I can't help you because this site is fronted so I can't replly any Querry.\n And after all thanks for contact me and subcribe my website.\n\n with regards\n Mohan Lal Sharma `,
  }).then(function (message) {
    alert("thanks for contact")
  });
}

// for subscription
function sendMail() {
  var email = document.getElementById('subc_email').value;//contact comment
  Email.send({
    Host: 'smtp.gmail.com',
    Username: "mtech737703@gmail.com",
    Password: "9058843284",
    To: email,
    From: "mtech737703@gmail.com",
    Subject: "MTech Foundation",
    Body: `thanks for subcribe`,
  }).then(function (message) {
    alert(`thanks for subcribe`)
  });
  // location.reload();
}
