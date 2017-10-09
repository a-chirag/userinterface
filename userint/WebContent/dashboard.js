function portfolio() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("portfolio").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "portfolio.jsp", true);
  xhttp.send();
}
function overview() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("overview").innerHTML =
	      this.responseText;
	    }
	  };
	  xhttp.open("GET", "overview.jsp", true);
	  xhttp.send();
	}
function pending() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("pending").innerHTML =
	      this.responseText;
	    }
	  };
	  xhttp.open("GET", "pending.jsp", true);
	  xhttp.send();
	}
function executed() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("executed").innerHTML =
	      this.responseText;
	    }
	  };
	  xhttp.open("GET", "executed.jsp", true);
	  xhttp.send();
	}