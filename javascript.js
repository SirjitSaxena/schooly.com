window.addEventListener('scroll', function () {
   const header = document.querySelector('header');
   header.classList.toggle("sticky", window.scrollY > 0);
});
function togglemenu() {
   const menutoggle = document.querySelector('.menutoggle');
   const navigation = document.querySelector('.navigation');
   menutoggle.classList.toggle('active');
   navigation.classList.toggle('active');
}
var x = false;
function validate() {

   if (document.myForm.Name.value == "") {
      alert("Please provide your name!");
      document.myForm.Name.focus();
      return false;
   }
   if (document.myForm.Email.value == "") {
      alert("Please provide your Email!");
      document.myForm.Email.focus();
      return false;
   }
   var emailID = document.myForm.Email.value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");

   if (atpos < 1 || (dotpos - atpos < 2)) {
      alert("Please enter correct email ID.")
      document.myForm.Email.focus();
      return false;
   }
   if (document.myForm.Query.value == "") {
      alert("Please provide your Query!");
      return false;
   }
   if (document.myForm.Number.value == "" || isNaN(document.myForm.Number.value) ||
      document.myForm.Number.value.length != 10) {

      alert("Mobile number must be of 10 digit.");
      document.myForm.Number.focus();
      return false;
   }
   x = true;
   if (x == true) {
      alert("Your query is successfully received by us. We will contact you shortly.");
   }
   return (true);
}