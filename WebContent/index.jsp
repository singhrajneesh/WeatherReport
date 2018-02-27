<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
<title>Weather Report</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
  <link rel="stylesheet" href="theme.css" type="text/css">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body>

  <nav class="navbar navbar-expand-md bg-primary navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#"><i class="fa d-inline fa-lg fa-cloud"></i><b>WEATHER</b></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false"
        aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa d-inline fa-lg fa-bookmark-o"></i> Bookmarks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa d-inline fa-lg fa-envelope-o"></i> Contacts</a>
          </li>
        </ul>
        <a class="btn navbar-btn ml-2 text-white btn-secondary"><i class="fa d-inline fa-lg fa-user-circle-o"></i> Sign in</a>
      </div>
    </div>
  </nav>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline"> <span>WEATHER</span>
            <div class="input-group col-lg-11">
              <input type="City" class="form-control" id="data" placeholder="City">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button" onclick="getData()">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="container" id="show"></div>
  <div class="py-5 text-center" style="background-image: url(cloud.jpeg);background-size:cover;">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-3 mb-4 text-primary">Let's Clear the Air</h1>
          <p class="lead mb-5"> There aren't enough air quality sensors in the India, so it's hard to track air pollution. Please help collect this data to keep your family and neighbors healthy </p>
          <a href="#" class="btn btn-lg btn-primary mx-1">Get an Air Quality Index </a>
        </div>
      </div>
    </div>
  </div> <span class="container"><h1>Recent News</h1></span>
  <div class="container-fluid col-md-12">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <img class="card-img-top" src="flood.jpg" alt="Floods">
          <div class="card-body">
            <h4 class="card-title text-primary">Biggest Flood in 20 Years Hits Ohio River</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4" style="float:left">
        <div class="card">
          <img class="card-img-top" src="flintflood-418.jpg" alt="Floods">
          <div class="card-body">
            <h4 class="card-title text-primary">Record Atmospheric Moisture Feeding Central U.S. Flooding</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4" style="float:left">
        <div class="card">
          <img class="card-img-top" src="ny.jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title text-primary">Summer in February! 80° in Massachusetts, 78° in NYC</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
<script type="text/javascript" src="weather.js"></script>
 <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</body>
</html>