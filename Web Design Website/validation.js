function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var county = document.getElementById("county").value;
  var post = document.getElementById("post").value;

  if (name.trim() === "" || email.trim() === "" || address.trim() === "" || city.trim() === "" || county.trim() === "" || post.trim() === "") {
      alert("Please fill in all required fields");
      return false;
  }

  if (!/^[A-Za-z\s]+$/.test(name)) {
      alert("Name can only contain letters and spaces");
      return false;
  }

  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      alert("Please enter a valid email address");
      return false;
  }

  return true;
}