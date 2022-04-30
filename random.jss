<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hit To Fit</title>
    <script src="https://kit.fontawesome.com/20fdc2d30c.js" crossorigin="anonymous"></script>
</head>

<link rel="stylesheet" href="style.css">
<body>
    <header class="header">
        <!-- left box for logo -->
        <div class="left">
            <i class="fa-solid fa-dumbbell"></i>
           <!-- <img src="/logo.png" alt=""> -->
            <div>Manas fitness</div>
        </div>
        <!-- mid box for navbar -->
        <div class="mid">
            <ul class="navbar">
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Details</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </div>
        <!-- right box for buttons -->
        <div class="right">
              <button class="btn">Call us</button>
              <button class="btn">Email us</button>
        </div>
    </header>
    <div class="container">
        <h1>Enter your credentials</h1>
        <form action="noaction.php">
            <div class="form-group">
                <input type="text" name="" placeholder="Enter your Name">
            </div>
            <div class="form-group">
                <input type="text" name="" placeholder="Enter your Age">
            </div>
            <div class="form-group">
                <input type="text" name="" placeholder="Enter your Gender">
            </div>
            <div class="form-group">
                <input type="number" name="" placeholder="Enter your Phone number">
            </div>
            <button class="btn">Submit</button>
        </form>
    </div>
</body>
</html>






body{
    font-family: Arial, Helvetica, sans-serif;
    color: white ;
    padding: 0px;
    margin: 0px;
    background: url(/image.jpg);
    height:3400px;
}
.left{
    display: inline-block;
     /* border: 2px solid red; */
     position: absolute;
     left: 34px;
     top: 20px;

}
.left img{
    width: 63px;
}
.left div{
    text-align: center;
    line-height: 19px;
    font-size: 26px;
}
.mid{
    display: block;
    width: 40%;
    margin: 20px auto;
    /* border: 2px solid yellow; */
}
.right{
    position: absolute;
    right: 34px;
    top: 33px;
    display: inline-block;
    /* border: 2px solid green; */
}
.navbar{
    display: inline-block;
}
.navbar li{
    display: inline-block;
    font-size: 25px;
}
.navbar li a{
    color: aliceblue;
    text-decoration: none;
    padding: 34px 23px;
}
.navbar li a:hover, .navbar li a.active{
   text-decoration: underline;
   color: grey;
}
.btn{
    margin: 0px 9px;
    background-color: black;
    color: aliceblue;
    padding: 4px 14px;
    border: 2px solid grey;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
}
.btn:hover{
    background-color: orange;
}
.container{
    border: 2px solid white;
    margin: 106px 80px;
    padding: 75px;
    width: 33%;
    border-radius: 28px;
}
.form-group input{
    text-align: center;
    display: block;
    width: 484px;
    padding: 1px;
    border: 2px solid black;
    margin: 11px auto;
    font-size: 25px;
    border-radius: 100px;
}
.container h1{
    text-align: center;
}
.container  button{
    display: block;
    width: 23%;
    margin: auto;
}