<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Verzik Video Game XD</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body onKeyDown = "PleaseWorkTM(event); ChargeWeapon(event); ; MenuSwapper(event);" onkeyup = "PrimeWeapon(event);" onkeypress = "KillBoss(event);" onload="ProjectileOfDeath(); PillarParameters(); DefineProjectileTarget();">
<!-- partial:index.partial.html -->
<div> <input id = "start" type = "button" value="Start the game."</input> <input id= "guide" type = "button" value="Guide to the video game."</input> </div>


<div id = "GameGuide">
<p id = "ChangingInformation"> </p>

<p id = "EntryNumber"> </p>
<p id = "pageshift"> A or D to move between pages. ESC to close the guide.</p>

</div>

<div id = "background"> </div>


<div id = "gameboard">

<div id="ItBegins"></div>
<div id = "dawnprojectile"> </div>
<div id="VerzikVitur"></div>
<div id = "VerzikHPRed"></div>
<div id = "VerzikHP"></div>


<div id = "Pillar1" class ="pillar row1 column1"> </div>
<div id = "Pillar2" class ="pillar row1 column2"> </div>
<div id = "Pillar3" class ="pillar row2 column1"> </div>
<div id = "Pillar4" class ="pillar row2 column2"> </div>
<div id = "Pillar5" class ="pillar row3 column1"> </div>
<div id = "Pillar6" class ="pillar row3 column2"> </div>
<div id = "DeathAwaits" class = "projectile"> </div>


</div>

<div id = "SpecialAttackBarGray"> </div>
<div id= "SpecialAttackBar"> </div>
<div id = "PillarHealthBarRed"> </div>
<div id = "PillarHealthBar"> </div>
<div id = "HealthBarRed"> </div>
<div id = "HealthBar"> </div>
<p id = "informationprinter"> </p>
<div id = "adjustprint"><p id = "dawnbringerstatus"> </p></div>

<div id = "ResetBoard"> <input id = "wegoagain" type= "button" value = "Play Again"> </input> </div>




<audio controls id="music">
<source src="fatladysings.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
<!-- partial -->
  <script  src="./script.js"></script>

</body>
</html>