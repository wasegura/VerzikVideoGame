var BossHealth = 15000;
var PlayerHP = 400;
var PillarOne = 600;
var PillarTwo = 600;
var PillarThree = 600;
var PillarFour = 600;
var PillarFive = 600;
var PillarSix = 600;
var movevertical = 220;
var movehorizontal = 280;
var VerzikAttack = 0;
var MagneticEyes = 0;
var SafetyProtocol = 0;
var ReadyAimFire = 0;

var PrimedProjectile = 0;
var Target = 0;

var HideState = 0;
var HidePlayerHealth = 0;

var Primed = 0;
var Charge = 0;
var Cooldown = 0;
var ShowBar = 0;

var DeathState = 1;
var ProjectileX = 10;
var ProjectileY = 280;

var PlayerY = 0;
var PlayerX = 0;


var SpecBarShowing = 0;
var PillarDisplay = 0;

var DawnbringerX = 0;
var DawnbringerY = 0;

var LaunchTheDawn = 0;
var Critical = 0;
var HealthTransparency = 0;
var CalculateHealth = 0;
var StartingBlast = 0;
var Enrage = 0;

var DisplayVerzikHealth = 0;
var HideVerzikHealth = 0;
var CalculateVerzHealth = 0;

var EmptyOut = 0;
var DisplayOfDeath = 0;

var TimeTracker = 0;
var EndTime = 0;
var FareWell = 300;
var HideMessage = 0;
var killmusicfunction = 0;
var EnragePriority = 0;
var Page = 1;
var ShowMenu = 0;

var HardMode = 1;
var Completion = 0;
var HardModeDone = 0;
let ScoreTracker = 0;
var AdventurersName = "";
let GameMode = "";

let ScoreBoard = [];

var myVar = setInterval(ProjectileOfDeath, 1);


var myVar = setInterval(DefineProjectileTarget, 12);

var myVar = setInterval(PillarParameters, 5);

var myVar = setInterval(HitpointsFadeout, 20);

var myVar = setInterval(DisplayPlayerHitpoints, 1);

var myVar = setInterval(ProjectileTrace, 5);

var myVar = setInterval(DisplayBossHealth, 1);

var myVar = setInterval(DisplayMessage, 1);

var myVar = setInterval(TrackOfTime, 1);

var myVar = setInterval(TrackTheSeconds, 1000);

var myVar = setInterval(HideInfoPrints, 12);

var myVar = setInterval(GuideToTheVideoGame, 1);

var myVar = setInterval(ResetGame, 1);

var Guide = document.getElementById("ChangingInformation");

var TheMenu = document.getElementById("GameGuide");
var DearDiary = document.getElementById("EntryNumber");


var myMusic = document.getElementById("music");

document.getElementById("guide").addEventListener('click', function()

{
document.getElementById("guide").style.visibility = "hidden";
ShowMenu = 1;

}

)
/*gamestart*/
document.getElementById("start").addEventListener('click', function()
{
alert("Best of luck adventurer!");
killmusicfunction = 0;
GameMode = "Normal";
HardMode = 1;
BossHealth = 15000*HardMode;
 PlayerHP = 400/HardMode;
 PillarOne = 600;
 PillarTwo = 600;
 PillarThree = 600;
 PillarFour = 600;
 PillarFive = 600;
 PillarSix = 600;
 movevertical = 220;
 movehorizontal = 280;
 VerzikAttack = 0;
 MagneticEyes = 1;
 SafetyProtocol = 0;
 ReadyAimFire = 0;

 PrimedProjectile = 0;
 Target = 0;

 HideState = 0;
 HidePlayerHealth = 0;

 Primed = 0;
 Charge = 0;
 Cooldown = 0;
 ShowBar = 0;

 DeathState = 1;
 ProjectileX = 10;
 ProjectileY = 280;

 PlayerY = 0;
 PlayerX = 0;


 SpecBarShowing = 0;
 PillarDisplay = 0;

 LaunchTheDawn = 0;
 Critical = 0;
 HealthTransparency = 0;
 CalculateHealth = 0;
 StartingBlast = 0;
 Enrage = 0;

 DisplayVerzikHealth = 0;
 HideVerzikHealth = 0;
 CalculateVerzHealth = 0;

 EmptyOut = 0;
 DisplayOfDeath = 0;

 TimeTracker = 0;
 EndTime = 0;
 FareWell = 300;
 HideMessage = 0;
 EnragePriority = 0;
 document.getElementById("ItBegins").style.marginTop = "220px";
 document.getElementById("ItBegins").style.marginLeft = "280px";
document.getElementById('start').style.visibility = 'hidden';
document.getElementById('start2').style.visibility= "hidden";
document.getElementById('guide').style.visibility = 'hidden';
document.getElementById('ItBegins').style.visibility = 'visible';
document.getElementById('Pillar1').style.visibility = 'visible';
document.getElementById('Pillar2').style.visibility = 'visible';
document.getElementById('Pillar3').style.visibility = 'visible';
document.getElementById('Pillar4').style.visibility = 'visible';
document.getElementById('Pillar5').style.visibility = 'visible';
document.getElementById('Pillar6').style.visibility = 'visible';
document.getElementById('VerzikVitur').style.visibility = 'visible';
ShowMenu = 0;
document.getElementById("pageshift").style.visibility = "hidden";
document.getElementById("background").style.visibility = "visible";
document.getElementById("HealthBar").style.visibility = "visible";
});
/*hardmode*/
document.getElementById("start2").addEventListener('click', function()
{
alert("You're in for a treat foolish adventurer.");
GameMode = "Hard"
HardMode = 2;
killmusicfunction = 0;
BossHealth = 15000*HardMode;
 PlayerHP = 400/HardMode;
 PillarOne = 600;
 PillarTwo = 600;
 PillarThree = 600;
 PillarFour = 600;
 PillarFive = 600;
 PillarSix = 600;
 movevertical = 220;
 movehorizontal = 280;
 VerzikAttack = 0;
 MagneticEyes = 1;
 SafetyProtocol = 0;
 ReadyAimFire = 0;

 PrimedProjectile = 0;
 Target = 0;

 HideState = 0;
 HidePlayerHealth = 0;

 Primed = 0;
 Charge = 0;
 Cooldown = 0;
 ShowBar = 0;

 DeathState = 1;
 ProjectileX = 10;
 ProjectileY = 280;

 PlayerY = 0;
 PlayerX = 0;


 SpecBarShowing = 0;
 PillarDisplay = 0;

 LaunchTheDawn = 0;
 Critical = 0;
 HealthTransparency = 0;
 CalculateHealth = 0;
 StartingBlast = 0;
 Enrage = 0;

 DisplayVerzikHealth = 0;
 HideVerzikHealth = 0;
 CalculateVerzHealth = 0;

 EmptyOut = 0;
 DisplayOfDeath = 0;

 TimeTracker = 0;
 EndTime = 0;
 FareWell = 300;
 HideMessage = 0;
 EnragePriority = 0;
 document.getElementById("ItBegins").style.marginTop = "220px";
 document.getElementById("ItBegins").style.marginLeft = "280px";
document.getElementById('start').style.visibility = 'hidden';
document.getElementById('start2').style.visibility = 'hidden';
document.getElementById('guide').style.visibility = 'hidden';
document.getElementById('ItBegins').style.visibility = 'visible';
document.getElementById('Pillar1').style.visibility = 'visible';
document.getElementById('Pillar2').style.visibility = 'visible';
document.getElementById('Pillar3').style.visibility = 'visible';
document.getElementById('Pillar4').style.visibility = 'visible';
document.getElementById('Pillar5').style.visibility = 'visible';
document.getElementById('Pillar6').style.visibility = 'visible';
document.getElementById('VerzikVitur').style.visibility = 'visible';
ShowMenu = 0;
document.getElementById("pageshift").style.visibility = "hidden";
document.getElementById("background").style.visibility = "visible";
});
/*gameover*/
document.getElementById("TotalRecall").addEventListener('click', function()
{
  myMusic.pause();
  myMusic.volume = 0;
  myMusic.currentTime = 0;
if (HardMode == 1)
{
alert("Congratulations on beating the game, but just know that she's not actually dead... You'll have to return to her throne room and face her again. (Hard Mode)");
Completion = 1;
}

if (HardMode==2)
{
  HardModeDone = 1;
  alert("You may have bested me... but just wait for when even harder mode gets coded. I'll be waiting until then.");
}
 VerzikAttack = 0;
 MagneticEyes = 0;
 SafetyProtocol = 0;
 ReadyAimFire = 0;

 PrimedProjectile = 0;
 Target = 0;

 HideState = 0;
 HidePlayerHealth = 0;

 Primed = 0;
 Charge = 0;
 Cooldown = 0;
 ShowBar = 0;

 DeathState = 0;
 ProjectileX = 10;
 ProjectileY = 280;

 PlayerY = 0;
 PlayerX = 0;


 SpecBarShowing = 0;
 PillarDisplay = 0;

 LaunchTheDawn = 0;
 Critical = 0;
 HealthTransparency = 0;
 CalculateHealth = 0;
 StartingBlast = 0;
 Enrage = 0;

 DisplayVerzikHealth = 0;
 HideVerzikHealth = 0;
 CalculateVerzHealth = 0;

 EmptyOut = 0;
 DisplayOfDeath = 0;

 TimeTracker = 0;
 EndTime = 0;
 HideMessage = 0;
 EnragePriority = 0;

document.getElementById('start').style.visibility = 'visible';
document.getElementById('start2').style.visibility = 'visible';
document.getElementById('guide').style.visibility = 'visible';
document.getElementById('ItBegins').style.visibility = 'hidden';
document.getElementById('Pillar1').style.visibility = 'hidden';
document.getElementById('Pillar2').style.visibility = 'hidden';
document.getElementById('Pillar3').style.visibility = 'hidden';
document.getElementById('Pillar4').style.visibility = 'hidden';
document.getElementById('Pillar5').style.visibility = 'hidden';
document.getElementById('Pillar6').style.visibility = 'hidden';
document.getElementById('VerzikVitur').style.visibility = 'hidden';
ShowMenu = 0;
document.getElementById("background").style.visibility = "hidden";
document.getElementById("MissionComplete").style.visibility = "hidden";
document.getElementById("TotalRecall").style.visibility = "hidden";
});
/*Loss + Head To Menu*/
document.getElementById("returntomenu").addEventListener('click', function()
{
  myMusic.pause();
  myMusic.volume = 0;
  myMusic.currentTime = 0;
if (Completion==0)
{
  alert("COME BACK WHEN YOU HAVE READ THE GAME INSTRUCTIONS FOOL!!!!!");
}

 VerzikAttack = 0;
 MagneticEyes = 0;
 SafetyProtocol = 0;
 ReadyAimFire = 0;

 PrimedProjectile = 0;
 Target = 0;

 HideState = 0;
 HidePlayerHealth = 0;

 Primed = 0;
 Charge = 0;
 Cooldown = 0;
 ShowBar = 0;

 DeathState = 0;
 ProjectileX = 10;
 ProjectileY = 280;

 PlayerY = 0;
 PlayerX = 0;


 SpecBarShowing = 0;
 PillarDisplay = 0;

 LaunchTheDawn = 0;
 Critical = 0;
 HealthTransparency = 0;
 CalculateHealth = 0;
 StartingBlast = 0;
 Enrage = 0;

 DisplayVerzikHealth = 0;
 HideVerzikHealth = 0;
 CalculateVerzHealth = 0;

 EmptyOut = 0;
 DisplayOfDeath = 0;

 TimeTracker = 0;
 EndTime = 0;
 HideMessage = 0;
 EnragePriority = 0;

document.getElementById('start').style.visibility = 'visible';
if (Completion==1)
{
document.getElementById('start2').style.visibility = 'visible';

if (HardMode==1)
{
  alert("HAHA YOU MAY HAVE BEAT ME ONCE BUT NOT TWICE FOOL!");
}

else if (HardMode==2)
{
  alert("STICK TO EASY MODE PEASANT!");
}

}
document.getElementById('guide').style.visibility = 'visible';
document.getElementById('ItBegins').style.visibility = 'hidden';
document.getElementById('Pillar1').style.visibility = 'hidden';
document.getElementById('Pillar2').style.visibility = 'hidden';
document.getElementById('Pillar3').style.visibility = 'hidden';
document.getElementById('Pillar4').style.visibility = 'hidden';
document.getElementById('Pillar5').style.visibility = 'hidden';
document.getElementById('Pillar6').style.visibility = 'hidden';
document.getElementById('VerzikVitur').style.visibility = 'hidden';
ShowMenu = 0;
document.getElementById("background").style.visibility = "hidden";
document.getElementById("MissionComplete").style.visibility = "hidden";
document.getElementById("returntomenu").style.visibility = "hidden";
document.getElementById("wegoagain").style.visibility = "hidden";
});


/*reset*/
document.getElementById("wegoagain").addEventListener('click', function()
{
alert("Here we go again!");
BossHealth = 15000*HardMode;
 PlayerHP = 400/HardMode;
 PillarOne = 600;
 PillarTwo = 600;
 PillarThree = 600;
 PillarFour = 600;
 PillarFive = 600;
 PillarSix = 600;
 movevertical = 220;
 movehorizontal = 280;
 VerzikAttack = 0;
 MagneticEyes = 1;
 SafetyProtocol = 0;
 ReadyAimFire = 0;

 PrimedProjectile = 0;
 Target = 0;

 HideState = 0;
 HidePlayerHealth = 0;

 Primed = 0;
 Charge = 0;
 Cooldown = 0;
 ShowBar = 0;

 DeathState = 1;
 ProjectileX = 10;
 ProjectileY = 280;

 PlayerY = 0;
 PlayerX = 0;


 SpecBarShowing = 0;
 PillarDisplay = 0;

 LaunchTheDawn = 0;
 Critical = 0;
 HealthTransparency = 0;
 CalculateHealth = 0;
 StartingBlast = 0;
 Enrage = 0;

 DisplayVerzikHealth = 0;
 HideVerzikHealth = 0;
 CalculateVerzHealth = 0;

 EmptyOut = 0;
 DisplayOfDeath = 0;

 TimeTracker = 0;
 EndTime = 0;
 FareWell = 300;
 HideMessage = 0;
 killmusicfunction = 0;
 EnragePriority = 0;

document.getElementById("ItBegins").style.marginTop = "220px";
document.getElementById("ItBegins").style.marginLeft = "280px";
document.getElementById('start').style.visibility = 'hidden';
document.getElementById('guide').style.visibility = 'hidden';
document.getElementById('ItBegins').style.visibility = 'visible';
document.getElementById('Pillar1').style.visibility = 'visible';
document.getElementById('Pillar2').style.visibility = 'visible';
document.getElementById('Pillar3').style.visibility = 'visible';
document.getElementById('Pillar4').style.visibility = 'visible';
document.getElementById('Pillar5').style.visibility = 'visible';
document.getElementById('Pillar6').style.visibility = 'visible';
document.getElementById('VerzikVitur').style.visibility = 'visible';

document.getElementById("HealthBar").style.visibility = "visible";
document.getElementById("HealthBarRed").style.visibility = "visible";
ShowMenu = 0;
document.getElementById("pageshift").style.visibility = "hidden";
document.getElementById("background").style.visibility = "visible";
document.getElementById("ResetBoard").style.visibility = "hidden";
document.getElementById("wegoagain").style.visibility = "hidden";
document.getElementById("returntomenu").style.visibility = "hidden";
});

function NameOfTheGame()
{
  var person = prompt("Fellow adventurer... What do they call you by?");

  if (person == null || person == ""){
  AdventurersName = "Adventurer";
  console.log(AdventurersName);
}

else {
  AdventurersName = person;
  console.log(AdventurersName);
}
  alert("Welcome to the theatre, " + AdventurersName + ". I wish you only the best of luck.");
}

function PleaseWorkTM(par)
{
	if ((!(PlayerHP<=0))&&(MagneticEyes==1)&&(DeathState==1))
	{
	if (par.keyCode === 68)
	{
		if ((movehorizontal>=70)&&(movehorizontal<=160)&&(movevertical>=100)&&(movevertical<=160)&&(PillarOne>0))

		{
			movehorizontal = movehorizontal + 0;
	    document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=370)&&(movehorizontal<=460)&&(movevertical>=100)&&(movevertical<=160)&&(PillarTwo>0))

		{
			movehorizontal = movehorizontal + 0;
	    document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=70)&&(movehorizontal<=160)&&(movevertical>=280)&&(movevertical<=340)&&(PillarThree>0))

		{
			movehorizontal = movehorizontal + 0;
	    document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=370)&&(movehorizontal<=460)&&(movevertical>=280)&&(movevertical<=340)&&(PillarFour>0))

		{
			movehorizontal = movehorizontal + 0;
			document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=70)&&(movehorizontal<=160)&&(movevertical>=460)&&(movevertical<=520)&&(PillarFive>0))

		{
			movehorizontal = movehorizontal + 0;
	    document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=370)&&(movehorizontal<=460)&&(movevertical>=460)&&(movevertical<=520)&&(PillarSix>0))

		{
			movehorizontal = movehorizontal + 0;
	    document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=550))

		{
		movehorizontal = movehorizontal + 0;
		document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px"
		}

		else
		{
    movehorizontal = movehorizontal + 30;
    document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
	}

}

/*Code for moving left*/
	else if (par.keyCode === 65)
	{

		if ((movehorizontal>=100)&&(movehorizontal<=190)&&(movevertical>=100)&&(movevertical<=160)&&(PillarOne>0))

		{
			movehorizontal = movehorizontal + 0;
			document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=400)&&(movehorizontal<=490)&&(movevertical>=100)&&(movevertical<=160)&&(PillarTwo>0))

		{
			movehorizontal = movehorizontal + 0;
			document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=100)&&(movehorizontal<=190)&&(movevertical>=280)&&(movevertical<=340)&&(PillarThree>0))

		{
			movehorizontal = movehorizontal + 0;
			document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=400)&&(movehorizontal<=490)&&(movevertical>=280)&&(movevertical<=340)&&(PillarFour>0))

		{
			movehorizontal = movehorizontal + 0;
			document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=100)&&(movehorizontal<=190)&&(movevertical>=460)&&(movevertical<=520)&&(PillarFive>0))

		{
			movehorizontal = movehorizontal + 0;
			document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if ((movehorizontal>=400)&&(movehorizontal<=490)&&(movevertical>=460)&&(movevertical<=520)&&(PillarSix>0))

		{
			movehorizontal = movehorizontal + 0;
			document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
		}

		else if (movehorizontal<=10)

		{
			movehorizontal = 10;
		}


		else
		{
    movehorizontal = movehorizontal - 30;
    document.getElementById("ItBegins").style.marginLeft = movehorizontal + "px";
	}
  }


	else if (par.keyCode === 83)
	{
		if ((movehorizontal>=100)&&(movehorizontal<=160)&&(movevertical>=70)&&(movevertical<=160)&&(PillarOne>0))

		{
			movevertical = movevertical + 0;
			document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if ((movehorizontal>=400)&&(movehorizontal<=460)&&(movevertical>=70)&&(movevertical<=160)&&(PillarTwo>0))

		{
			movevertical = movevertical + 0;
			document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if ((movehorizontal>=100)&&(movehorizontal<=160)&&(movevertical>=250)&&(movevertical<=340)&&(PillarThree>0))

		{
			movevertical = movevertical + 0;
			document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if ((movehorizontal>=400)&&(movehorizontal<=460)&&(movevertical>=250)&&(movevertical<=340)&&(PillarFour>0))

		{
			movevertical = movevertical + 0;
			document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if ((movehorizontal>=100)&&(movehorizontal<=160)&&(movevertical>=430)&&(movevertical<=520)&&(PillarFive>0))

		{
			movevertical = movevertical + 0;
			document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if ((movehorizontal>=400)&&(movehorizontal<=460)&&(movevertical>=430)&&(movevertical<=520)&&(PillarSix>0))

		{
			movevertical = movevertical + 0;
			document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if (movevertical>=580)

		{
			movevertical = movevertical + 0;
			document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else
		{
    movevertical = movevertical + 30;
    document.getElementById("ItBegins").style.marginTop = movevertical + "px";
	}

		}
/* main character up moving commands */

	else if (par.keyCode === 87)
	{

		if ((movehorizontal>=100)&&(movehorizontal<=160)&&(movevertical>=100)&&(movevertical<=190)&&(PillarOne>0))

		{
			movevertical = movevertical + 0;
	    document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if ((movehorizontal>=400)&&(movehorizontal<=460)&&(movevertical>=100)&&(movevertical<=190)&&(PillarTwo>0))

		{
			movevertical = movevertical + 0;
	    document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if ((movehorizontal>=100)&&(movehorizontal<=160)&&(movevertical>=280)&&(movevertical<=370)&&(PillarThree>0))

		{
			movevertical = movevertical + 0;
	    document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if ((movehorizontal>=400)&&(movehorizontal<=460)&&(movevertical>=280)&&(movevertical<=370)&&(PillarFour>0))

		{
			movevertical = movevertical + 0;
			document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if ((movehorizontal>=100)&&(movehorizontal<=160)&&(movevertical>=460)&&(movevertical<=550)&&(PillarFive>0))

		{
			movevertical = movevertical + 0;
	    document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if ((movehorizontal>=400)&&(movehorizontal<=460)&&(movevertical>=460)&&(movevertical<=550)&&(PillarSix>0))

		{
			movevertical = movevertical + 0;
	    document.getElementById("ItBegins").style.marginTop = movevertical + "px";
		}

		else if (movevertical<=10)

		{
			movevertical = 10;
		}


		else
		{
    movevertical = movevertical - 30;
    document.getElementById("ItBegins").style.marginTop = movevertical + "px";
	}
  }
}
}
function ChargeWeapon(par)

{
if ((par.keyCode===32)&&(!(PlayerHP<=0))&&(MagneticEyes==1)&&(Cooldown==0)&&(Primed==0)&&(!(Charge==100))&&(LaunchTheDawn==0))
/*((par.keyCode===32)&&((Primed==0)&&(MagneticEyes==1)&&()||((Charge==100)))&&(Cooldown<=0))*/
{
	Charge = Charge + 10;
	SpecialAttack = 1;
	Cooldown = 100;
	ShowBar = (Charge/10)*3;
	document.getElementById("SpecialAttackBar").style.visibility = 'visible';
	document.getElementById("SpecialAttackBarGray").style.visibility = 'visible';
	document.getElementById("SpecialAttackBar").style.width = ShowBar + "px";
	document.getElementById("SpecialAttackBar").style.marginTop = movevertical  -20 + "px";
	document.getElementById("SpecialAttackBar").style.marginLeft = movehorizontal + "px";
	document.getElementById("SpecialAttackBarGray").style.marginTop = movevertical -20 + "px";
	document.getElementById("SpecialAttackBarGray").style.marginLeft = movehorizontal + "px";
	document.getElementById("dawnprojectile").style.marginLeft = DawnbringerX + "px";
	document.getElementById("dawnprojectile").style.marginTop = DawnbringerY + "px";
SpecBarShowing = 1;
}



else if (!(par.keyCode===32)||(PlayerHP<=0))

{
	document.getElementById("SpecialAttackBar").style.visibility = 'hidden';
	document.getElementById("SpecialAttackBarGray").style.visibility = 'hidden';
	SpecBarShowing = 0;
}

else if ((par.keyCode===32)&&((Cooldown>0)))

{

	Cooldown = Cooldown - 10;
}

}

function PrimeWeapon(par)
{
if ((par.keyCode===32)&&(Charge>0)&&(Primed==0))

{
	SpecBarShowing = 0;
	Primed = 1;
	document.getElementById("SpecialAttackBar").style.visibility = 'hidden';
	document.getElementById("SpecialAttackBarGray").style.visibility = 'hidden';
	if (!(PlayerHP<=0))
	{
		EmptyOut = 450;
	document.getElementById("dawnbringerstatus").innerHTML = "Your special attack has been primed.";
}
}
}

function KillBoss(par)
{
if ((par.keyCode===32)&&(Primed == 1)&&(!(SafetyProtocol==1))&&(!(Charge==100))&&(!(PlayerHP<=0)))
{
document.getElementById("dawnprojectile").style.backgroundImage = "url('images/dawnbringer.gif')";
DawnBringerBlast = ((Math.floor(Math.random() * 69) + 40)*(Charge/10));
Primed = 0;
Charge = 0;
LaunchTheDawn = 1;

}

else if ((par.keyCode===32)&&(Primed == 1)&&(Charge==100)&&(!(SafetyProtocol==1))&&(!(PlayerHP<=0)))
{
	document.getElementById("dawnprojectile").style.backgroundImage = "url('images/dawnbringer2.gif')";
	DawnBringerBlast = ((Math.floor(Math.random() * 100) + 50)*20);
	Primed = 0;
	Charge = 0;
	Critical = 1;
	LaunchTheDawn = 1;
}

else if ((par.keyCode===32)&&(Primed == 1)&&(SafetyProtocol==1)&&(!(PlayerHP<=0)))

{
	document.getElementById("dawnbringerstatus").innerHTML = "You can't get a clear sighting of the boss while behind the pillar. You hold your special attack.";
	EmptyOut = 450;
}
}


function ProjectileTrace()
{
	if (LaunchTheDawn==1)
	{
		document.getElementById("dawnprojectile").style.marginLeft = DawnbringerX + "px";
		document.getElementById("dawnprojectile").style.marginTop = DawnbringerY + "px";

		if (StartingBlast==0)
		{
		DawnbringerX = movehorizontal + 10;
		DawnbringerY = movevertical + 10;
		document.getElementById("dawnprojectile").style.visibility = "visible";

		StartingBlast = 1;
	}

	if (!((DawnbringerX==290)&&(DawnbringerY==-45)))

	{
		if (!(DawnbringerX==290))
		{
			if (DawnbringerX>290)

			{
				DawnbringerX = DawnbringerX - 5;
			}

			else if (DawnbringerX<290)
			{
				DawnbringerX = DawnbringerX + 5;
			}
		}

		if (!(DawnbringerY==-45))
		{
			if (DawnbringerY>-45)
			{
				DawnbringerY = DawnbringerY - 5;
			}

			else if (DawnbringerY<-45)
			{
				DawnbringerY = DawnbringerY + 5;
			}
		}
	}

	else if ((DawnbringerX==290)&&(DawnbringerY==-45)&&(Critical==0))
	{
		document.getElementById("dawnprojectile").style.visibility = "hidden";
		BossHealth = BossHealth - DawnBringerBlast;
    if (!(BossHealth<=0))
    {
    document.getElementById("dawnbringerstatus").innerHTML = "The boss took " + DawnBringerBlast + " Damage! " + BossHealth + " Health remaining.";
    }
    else
    {
      document.getElementById("dawnbringerstatus").innerHTML = "The boss took " + DawnBringerBlast + " Damage! Verzik Vitur is no more!";
    }

		EmptyOut = 450;
		LaunchTheDawn = 0;
		StartingBlast = 0;
		DisplayVerzikHealth = 1;

	}

	else if ((DawnbringerX==290)&&(DawnbringerY==-45)&&(Critical==1))
	{
		document.getElementById("dawnprojectile").style.visibility = "hidden";
		BossHealth = BossHealth - DawnBringerBlast;
		document.getElementById("dawnbringerstatus").innerHTML = "Your dawnbringer sparkles brightly! The boss took " + DawnBringerBlast + " Damage! " + BossHealth + " Health remaining.";
    Critical = 0;
    EmptyOut = 450;
		LaunchTheDawn = 0;
		StartingBlast = 0;
		DisplayVerzikHealth = 1;
	}
}
}


function ProjectileOfDeath()

{

if ((MagneticEyes == 1)&&(!(BossHealth<=0))&&(DeathState==1))
{

	if (killmusicfunction == 0)
	{
	myMusic.play();
	myMusic.volume = 1;
	myMusic.loop = true;
	}

if (BossHealth>(5000*HardMode))
{
VerzikAttack = VerzikAttack + 1;
}

else {
	if (Enrage == 0)
	{
		EnragePriority = 130;
		Enrage = 1;

	}
	else if (!(Enrage>=3))
	{
	Enrage = Enrage + .05;
	}
	VerzikAttack = VerzikAttack + Enrage;
}



}

if ((VerzikAttack>=600)&&(!(BossHealth<=0))&&(PrimedProjectile==0))
{

	DisplayOfDeath = (1/400)*(VerzikAttack - 600);
	document.getElementById("DeathAwaits").style.visibility = "visible";
	document.getElementById("DeathAwaits").style.opacity = DisplayOfDeath;
}

else if ((VerzikAttack>=600)&&((BossHealth<=0)))
{

	DisplayOfDeath = 0;
	document.getElementById("DeathAwaits").style.visibility = "hidden";
	document.getElementById("DeathAwaits").style.opacity = DisplayOfDeath;
}

if ((VerzikAttack>=1000)&&(MagneticEyes == 1)&&(Target==0))


{

PrimedProjectile = 1;

if (ReadyAimFire==0)
{
	VerzikAttack = 0;
	Target = 1;
}

else if (ReadyAimFire==1)
{
VerzikAttack = 0;
Target = 2;
}

else if (ReadyAimFire==2)
{
VerzikAttack = 0;
Target = 3;
}

else if (ReadyAimFire==3)
{
VerzikAttack = 0;
Target = 4;
}

else if (ReadyAimFire==4)
{
VerzikAttack = 0;
Target = 5;
}

else if (ReadyAimFire==5)
{
VerzikAttack = 0;
Target = 6;
}

else if (ReadyAimFire==6)
{
VerzikAttack = 0;
Target = 7;
}

}

}

function DefineProjectileTarget()

{
/*Target Equals Player*/
if ((Target==1)&&(PrimedProjectile==1))

{
	document.getElementById('DeathAwaits').style.visibility = 'visible';

	if (ProjectileX != movevertical)
	{
	if (ProjectileX > movevertical)
	{
		ProjectileX = ProjectileX - 5;
document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
	}

	if (ProjectileX<movevertical)
	{
	ProjectileX = ProjectileX + 5;
	document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
}
}

if (ProjectileY != movehorizontal)
{

if (ProjectileY>movehorizontal)
{
ProjectileY = ProjectileY - 5;
document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
}

if (ProjectileY<movehorizontal)
{
ProjectileY = ProjectileY + 5;
document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
}



}

else if ((ProjectileX==movevertical)&&(ProjectileY==movehorizontal))
{


	if (PlayerHP>0)
	{
	 DeathBallDMG = Math.floor(Math.random() * 69);
	 document.getElementById("informationprinter").innerHTML = "You have taken " + DeathBallDMG + " Damage!";
	 PlayerHP = PlayerHP - DeathBallDMG;
	 DeathBallDMG = 0;
	 HideMessage = 130;

 }

 if ((PlayerHP<=0)&&(DeathState==1))
 {
	document.getElementById("informationprinter").innerHTML = "You have died!";
	HideMessage = 130;
	DeathState = 0;
 }

	VerzikAttack = 0;
	ProjectileX = 10;
	ProjectileY = 280;
	document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	document.getElementById('DeathAwaits').style.visibility = 'hidden';
	Target = 0;
	PrimedProjectile = 0;
	HidePlayerHealth = 130;




}

}
/*Target Equals Pillar 1*/
else if ((PrimedProjectile==1)&&(Target==2))

{


	{
		document.getElementById('DeathAwaits').style.visibility = 'visible';

	if (ProjectileX != 130)
	{
		if (ProjectileX > 130)
		{
			ProjectileX = ProjectileX - 5;
			document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		}

		if (ProjectileX<130)
		{
		ProjectileX = ProjectileX + 5;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
	}
	}

	if (ProjectileY != 130)
	{

	if (ProjectileY>130)
	{
	ProjectileY = ProjectileY - 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

	if (ProjectileY<130)
	{
	ProjectileY = ProjectileY + 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

}
/*Target Equals Pillar 1 */
	else if ((ProjectileX==130)&&(ProjectileY==130))
	{


		if (PillarOne>0)
		{
		 DeathBallDMG = (Math.floor(Math.random() * 100)) + 50;
		 document.getElementById("informationprinter").innerHTML = "The pillar has taken " + DeathBallDMG + " Damage!";
		 PillarOne = PillarOne - DeathBallDMG;
		 DeathBallDMG = 0;
		 PillarDisplay = 1;
		 HideState = 130;
		 HideMessage = 130;

	 }

	 if (PillarOne<=0)
	 {
		document.getElementById("Pillar1").style.visibility = 'hidden';
		document.getElementById("informationprinter").innerHTML = "The pillar has fallen! You'll need to find new cover now!";
		HideMessage = 130;
		if (ReadyAimFire==1)

		{
			PlayerHP = 0;
			HidePlayerHealth = 130;
		document.getElementById("informationprinter").innerHTML = "A pillar has fallen on you! You have died!";
		DeathState = 0;
		}
	 }

		VerzikAttack = 0;
		ProjectileX = 10;
		ProjectileY = 280;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
		document.getElementById("DeathAwaits").style.visibility = "hidden";
		Target = 0;
		PrimedProjectile = 0;
}





}

}
/*Target Equals Pillar 2 */
else if ((PrimedProjectile==1)&&(Target==3))

{


	{
		document.getElementById('DeathAwaits').style.visibility = 'visible';

	if (ProjectileX != 130)
	{
		if (ProjectileX > 130)
		{
			ProjectileX = ProjectileX - 5;
			document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		}

		if (ProjectileX<130)
		{
		ProjectileX = ProjectileX + 5;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
	}
	}

	if (ProjectileY != 430)
	{

	if (ProjectileY>430)
	{
	ProjectileY = ProjectileY - 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

	if (ProjectileY<430)
	{
	ProjectileY = ProjectileY + 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

}

	else if ((ProjectileX==130)&&(ProjectileY==430))
	{


		if (PillarTwo>0)
		{
		 DeathBallDMG = (Math.floor(Math.random() * 100)) + 50;
		 document.getElementById("informationprinter").innerHTML = "The pillar has taken " + DeathBallDMG + " Damage!";
		 PillarTwo = PillarTwo - DeathBallDMG;
		 DeathBallDMG = 0;
		 PillarDisplay = 2;
		 HideState = 130;
		 HideMessage = 130;
	 }

	 if (PillarTwo<=0)
	 {
		document.getElementById("Pillar2").style.visibility = 'hidden';
		document.getElementById("informationprinter").innerHTML = "The pillar has fallen! You'll need to find new cover now!";
		HideMessage = 130;
		if (ReadyAimFire==2)

		{
			PlayerHP = 0;
			HidePlayerHealth = 130;
		document.getElementById("informationprinter").innerHTML = "A pillar has fallen on you! You have died!";
		DeathState = 0;
		}
	 }

		VerzikAttack = 0;
		ProjectileX = 10;
		ProjectileY = 280;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
		document.getElementById("DeathAwaits").style.visibility = "hidden";
		Target = 0;
		PrimedProjectile = 0;
}


}


}
/*Target Equals Pillar 3*/
else if ((PrimedProjectile==1)&&(Target==4))

{


	{
		document.getElementById('DeathAwaits').style.visibility = 'visible';

	if (ProjectileX != 310)
	{
		if (ProjectileX > 310)
		{
			ProjectileX = ProjectileX - 5;
			document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		}

		if (ProjectileX<310)
		{
		ProjectileX = ProjectileX + 5;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
	}
	}

	if (ProjectileY != 130)
	{

	if (ProjectileY>130)
	{
	ProjectileY = ProjectileY - 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

	if (ProjectileY<130)
	{
	ProjectileY = ProjectileY + 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

}

	else if ((ProjectileX==310)&&(ProjectileY==130))
	{


		if (PillarThree>0)
		{
		 DeathBallDMG = (Math.floor(Math.random() * 100)) + 50;
		 document.getElementById("informationprinter").innerHTML = "The pillar has taken " + DeathBallDMG + " Damage!";
		 PillarThree = PillarThree - DeathBallDMG;
		 DeathBallDMG = 0;
		 PillarDisplay = 3;
		 HideState = 130;
		 HideMessage = 130;
	 }

	 if (PillarThree<=0)
	 {
		document.getElementById("Pillar3").style.visibility = 'hidden';
		document.getElementById("informationprinter").innerHTML = "The pillar has fallen! You'll need to find new cover now!";
		HideMessage = 130;
		if (ReadyAimFire==3)

		{
			PlayerHP = 0;
			HidePlayerHealth = 130;
		document.getElementById("informationprinter").innerHTML = "A pillar has fallen on you! You have died!";
		DeathState = 0;
		}
	 }

		VerzikAttack = 0;
		ProjectileX = 10;
		ProjectileY = 280;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
		document.getElementById("DeathAwaits").style.visibility = "hidden";
		Target = 0;
		PrimedProjectile = 0;
}


}


}
/*Target Equals Pillar 4*/
else if ((PrimedProjectile==1)&&(Target==5))

{


	{
		document.getElementById('DeathAwaits').style.visibility = 'visible';

	{
		if (ProjectileX > 310)
		{
			ProjectileX = ProjectileX - 5;
			document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		}

		if (ProjectileX<310)
		{
		ProjectileX = ProjectileX + 5;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
	}
	}

	if (ProjectileY != 430)
	{

	if (ProjectileY>430)
	{
	ProjectileY = ProjectileY - 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

	if (ProjectileY<430)
	{
	ProjectileY = ProjectileY + 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

}

	else if ((ProjectileX==310)&&(ProjectileY==430))
	{


		if (PillarFour>0)
		{
		 DeathBallDMG = (Math.floor(Math.random() * 100)) + 50;
		 document.getElementById("informationprinter").innerHTML = "The pillar has taken " + DeathBallDMG + " Damage!";
		 PillarFour = PillarFour - DeathBallDMG;
		 DeathBallDMG = 0;
		 PillarDisplay = 4;
		 HideState = 130;
		 HideMessage = 130;
	 }

	 if (PillarFour<=0)
	 {
		HideMessage = 130;
		document.getElementById("Pillar4").style.visibility = 'hidden';
		document.getElementById("informationprinter").innerHTML = "The pillar has fallen! You'll need to find new cover now!";

		if (ReadyAimFire==4)

		{
			PlayerHP = 0;
			HidePlayerHealth = 130;
		document.getElementById("informationprinter").innerHTML = "A pillar has fallen on you! You have died!";
		DeathState = 0;
		}
	 }

		VerzikAttack = 0;
		ProjectileX = 10;
		ProjectileY = 280;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
		document.getElementById("DeathAwaits").style.visibility = "hidden";
		Target = 0;
		PrimedProjectile = 0;
}


}


}
/*Target Equals Pillar 5*/
else if ((PrimedProjectile==1)&&(Target==6))

{


	{
		document.getElementById('DeathAwaits').style.visibility = 'visible';

	if (ProjectileX != 490)
	{
		if (ProjectileX > 490)
		{
			ProjectileX = ProjectileX - 5;
			document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		}

		if (ProjectileX<490)
		{
		ProjectileX = ProjectileX + 5;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
	}
	}

	if (ProjectileY != 130)
	{

	if (ProjectileY>130)
	{
	ProjectileY = ProjectileY - 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

	if (ProjectileY<130)
	{
	ProjectileY = ProjectileY + 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

}

	else if ((ProjectileX==490)&&(ProjectileY==130))
	{


		if (PillarFive>0)
		{
		 DeathBallDMG = (Math.floor(Math.random() * 100)) + 50;
		document.getElementById("informationprinter").innerHTML = "The pillar has taken " + DeathBallDMG + " Damage!";
		 PillarFive = PillarFive - DeathBallDMG;
		 DeathBallDMG = 0;
		 PillarDisplay = 5;
		 HideState = 130;
		 HideMessage = 130;
	 }

	 if (PillarFive<=0)
	 {
		HideMessage = 130;
		document.getElementById("Pillar5").style.visibility = 'hidden';
		document.getElementById("informationprinter").innerHTML = "The pillar has fallen! You'll need to find new cover now!";

		if (ReadyAimFire==5)

		{
			PlayerHP = 0;
			HidePlayerHealth = 130;
		document.getElementById("informationprinter").innerHTML = "A pillar has fallen on you! You have died!";
		DeathState = 0;
		}
	 }

		VerzikAttack = 0;
		ProjectileX = 10;
		ProjectileY = 280;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
		document.getElementById("DeathAwaits").style.visibility = "hidden";
		Target = 0;
		PrimedProjectile = 0;
}


}


}
/*Target Equals Pillar 6*/
else if ((PrimedProjectile==1)&&(Target==7))

{


	{
		document.getElementById('DeathAwaits').style.visibility = 'visible';

	if (ProjectileX != 490)
	{
		if (ProjectileX > 490)
		{
			ProjectileX = ProjectileX - 5;
			document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		}

		if (ProjectileX<490)
		{
		ProjectileX = ProjectileX + 5;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
	}
	}

	if (ProjectileY != 430)
	{

	if (ProjectileY>430)
	{
	ProjectileY = ProjectileY - 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

	if (ProjectileY<430)
	{
	ProjectileY = ProjectileY + 5;
	document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
	}

}

	else if ((ProjectileX==490)&&(ProjectileY==430))
	{


		if (PillarSix>0)
		{
		 DeathBallDMG = (Math.floor(Math.random() * 100)) + 50;
		 document.getElementById("informationprinter").innerHTML = "The pillar has taken " + DeathBallDMG + " Damage!";
		 PillarSix = PillarSix - DeathBallDMG;
		 DeathBallDMG = 0;
		 PillarDisplay = 6;
		 HideState = 130;
		 HideMessage = 130;
	 }

	 if (PillarSix<=0)
	 {
		HideMessage = 130;
		document.getElementById("Pillar6").style.visibility = 'hidden';
		document.getElementById("informationprinter").innerHTML = "The pillar has fallen! You'll need to find new cover now!";

		if (ReadyAimFire==6)

		{
			PlayerHP = 0;
			HidePlayerHealth = 130;
		document.getElementById("informationprinter").innerHTML = "A pillar has fallen on you! You have died!";
		DeathState = 0;
		}
	 }

		VerzikAttack = 0;
		ProjectileX = 10;
		ProjectileY = 280;
		document.getElementById("DeathAwaits").style.marginTop = ProjectileX + "px";
		document.getElementById("DeathAwaits").style.marginLeft = ProjectileY + "px";
		document.getElementById("DeathAwaits").style.visibility = "hidden";
		Target = 0;
		PrimedProjectile = 0;
}


}


}

}


function PillarParameters()

{
/*pillar 1*/
if ((movehorizontal>=100)&&(movehorizontal<=160)&&(movevertical==190)&&(!(PillarOne<=0)))

{
SafetyProtocol = 1;
ReadyAimFire = 1;

}

else if ((movevertical>=100)&&(movevertical<=190)&&(movehorizontal==70)&&(!(PillarOne<=0)))

{
SafetyProtocol = 1;
ReadyAimFire = 1;

}

/*pillar 2*/
else if ((movehorizontal>=400)&&(movehorizontal<=460)&&(movevertical==190)&&(!(PillarTwo<=0)))

{
SafetyProtocol = 1;
ReadyAimFire = 2;

}

else if ((movevertical>=100)&&(movevertical<=190)&&(movehorizontal==490)&&(!(PillarTwo<=0)))

{
	SafetyProtocol = 1;
	ReadyAimFire = 2;

}

/*pillar 3*/

else if ((movehorizontal>=100)&&(movehorizontal<=160)&&(movevertical==370)&&(!(PillarThree<=0)))

{
SafetyProtocol = 1;
ReadyAimFire = 3;

}

else if ((movevertical>=280)&&(movevertical<=370)&&(movehorizontal==70)&&(!(PillarThree<=0)))

{
SafetyProtocol = 1;
ReadyAimFire = 3;

}

/*pillar 4*/
else if ((movehorizontal>=400)&&(movehorizontal<=460)&&(movevertical==370)&&(!(PillarFour<=0)))

{
SafetyProtocol = 1;
ReadyAimFire = 4;

}

else if ((movevertical>=280)&&(movevertical<=370)&&(movehorizontal==490)&&(!(PillarFour<=0)))

{
	SafetyProtocol = 1;
	ReadyAimFire = 4;

}



/*pillar 5*/

else if ((movehorizontal>=100)&&(movehorizontal<=160)&&(movevertical==550)&&(!(PillarFive<=0)))

{
SafetyProtocol = 1;
ReadyAimFire = 5;

}

else if ((movevertical>=460)&&(movevertical<=550)&&(movehorizontal==70)&&(!(PillarFive<=0)))

{
SafetyProtocol = 1;
ReadyAimFire = 5;

}

/*pillar 6*/
else if ((movehorizontal>=400)&&(movehorizontal<=460)&&(movevertical==550)&&(!(PillarSix<=0)))

{
SafetyProtocol = 1;
ReadyAimFire = 6;

}

else if ((movevertical>=460)&&(movevertical<=550)&&(movehorizontal==490)&&(!(PillarSix<=0)))

{
	SafetyProtocol = 1;
	ReadyAimFire = 6;

}

else

{
ReadyAimFire = 0;
SafetyProtocol = 0;
}

}

function HitpointsFadeout()

{

	document.getElementById("PillarHealthBar").style.opacity = HealthTransparency;
	document.getElementById("PillarHealthBarRed").style.opacity = HealthTransparency;

	if (!(CalculateHealth<=0)&&(MagneticEyes==1))
	{
		document.getElementById("PillarHealthBar").style.visibility = "visible";
	}

	else if ((CalculateHealth<=0)&&(MagneticEyes==1))
	{
	document.getElementById("PillarHealthBar").style.visibility = "hidden";
	}

	HideState = HideState - 1;
	if (HideState<=0)
	{
		HealthTransparency = 0;
	}

	if (HideState>=0)
	{
		HealthTransparency = 1.0;
	}

	if (PillarDisplay == 1)
	{

		document.getElementById("PillarHealthBar").style.marginTop = 80 + "px";
		document.getElementById("PillarHealthBar").style.marginLeft = 100 + "px";
		document.getElementById("PillarHealthBarRed").style.marginTop = 80 + "px";
		document.getElementById("PillarHealthBarRed").style.marginLeft = 100 + "px";
		if (!(PillarOne==0))
		{
		CalculateHealth = (90/600)*PillarOne;
		}
		else if (PillarOne==0)
		{
		CalculateHealth = 0;
		}
		document.getElementById("PillarHealthBar").style.width = CalculateHealth + "px";
	}

	else if (PillarDisplay == 2)
	{

		document.getElementById("PillarHealthBar").style.marginTop = 80 + "px";
		document.getElementById("PillarHealthBar").style.marginLeft = 400 + "px";
		document.getElementById("PillarHealthBarRed").style.marginTop = 80 + "px";
		document.getElementById("PillarHealthBarRed").style.marginLeft = 400 + "px";
		if (!(PillarTwo==0))
		{
		CalculateHealth = (90/600)*PillarTwo;
		}
		else if (PillarTwo==0)
		{
		CalculateHealth = 0;
		}
		document.getElementById("PillarHealthBar").style.width = CalculateHealth + "px";


	}

	else if (PillarDisplay == 3)
	{

		document.getElementById("PillarHealthBar").style.marginTop = 260 + "px";
		document.getElementById("PillarHealthBar").style.marginLeft = 100 + "px";
		document.getElementById("PillarHealthBarRed").style.marginTop = 260 + "px";
		document.getElementById("PillarHealthBarRed").style.marginLeft = 100 + "px";
		if (!(PillarThree==0))
		{
		CalculateHealth = (90/600)*PillarThree;
		}
		else if (PillarThree==0)
		{
		CalculateHealth = 0;
		}
		document.getElementById("PillarHealthBar").style.width = CalculateHealth + "px";


	}

	else if (PillarDisplay == 4)
	{

		document.getElementById("PillarHealthBar").style.marginTop = 260 + "px";
		document.getElementById("PillarHealthBar").style.marginLeft = 400 + "px";
		document.getElementById("PillarHealthBarRed").style.marginTop = 260 + "px";
		document.getElementById("PillarHealthBarRed").style.marginLeft = 400 + "px";
		if (!(PillarFour==0))
		{
		CalculateHealth = (90/600)*PillarFour;
		}
		else if (PillarFour==0)
		{
		CalculateHealth = 0;
		}
		document.getElementById("PillarHealthBar").style.width = CalculateHealth + "px";


	}

	else if (PillarDisplay == 5)
	{

		document.getElementById("PillarHealthBar").style.marginTop = 440 + "px";
		document.getElementById("PillarHealthBar").style.marginLeft = 100 + "px";
		document.getElementById("PillarHealthBarRed").style.marginTop = 440 + "px";
		document.getElementById("PillarHealthBarRed").style.marginLeft = 100 + "px";
		if (!(PillarFive==0))
		{
		CalculateHealth = (90/600)*PillarFive;
		}
		else if (PillarFive==0)
		{
		CalculateHealth = 0;
		}
		document.getElementById("PillarHealthBar").style.width = CalculateHealth + "px";


	}

	else if (PillarDisplay == 6)
	{

		document.getElementById("PillarHealthBar").style.marginTop = 440 + "px";
		document.getElementById("PillarHealthBar").style.marginLeft = 400 + "px";
		document.getElementById("PillarHealthBarRed").style.marginTop = 440 + "px";
		document.getElementById("PillarHealthBarRed").style.marginLeft = 400 + "px";
		if (!(PillarSix==0))
		{
		CalculateHealth = (90/600)*PillarSix;
		}
		else if (PillarSix==0)
		{
		CalculateHealth = 0;
		}
		document.getElementById("PillarHealthBar").style.width = CalculateHealth + "px";


	}


	}


function DisplayPlayerHitpoints()
{


	CalcPlayerHealth = (30/(400/HardMode))*PlayerHP;

	if (SpecBarShowing==0)
	{
	PlayerX = movehorizontal;
	PlayerY = movevertical- 20;
	}

	else if (SpecBarShowing==1)
	{
	PlayerY = movevertical - 40;
	}


	document.getElementById("HealthBar").style.width = CalcPlayerHealth + "px";
	document.getElementById("HealthBar").style.marginTop = PlayerY + "px";
	document.getElementById("HealthBar").style.marginLeft = PlayerX + "px";
	document.getElementById("HealthBarRed").style.marginTop = PlayerY + "px";
	document.getElementById("HealthBarRed").style.marginLeft = PlayerX + "px";




if (PlayerHP<=0)
{
	document.getElementById("HealthBar").style.visibility = "hidden";
}







if ((HidePlayerHealth<=0)&&(!(PlayerHP<=0)))
{
	document.getElementById("HealthBarRed").style.opacity = "0";
	document.getElementById("HealthBar").style.opacity = "0";
	document.getElementById("ItBegins").style.backgroundImage = "url('images/maincharacter.png')";

}

else if ((HidePlayerHealth>0)&&(!(PlayerHP<=0)))
{
	document.getElementById("HealthBarRed").style.opacity = "1.0";
	document.getElementById("HealthBar").style.opacity = "1.0";
	document.getElementById("ItBegins").style.backgroundImage = "url('images/electrocuted.gif')";
HidePlayerHealth = HidePlayerHealth - .2;
}

else if (PlayerHP<=0)

{
document.getElementById("ItBegins").style.backgroundImage = "url('images/deadplayer.png')";
}

}

function DisplayBossHealth()
{
	CalculateVerzHealth = (90/(15000*HardMode))*BossHealth;
	document.getElementById("VerzikHP").style.width = CalculateVerzHealth + "px";

if ((DisplayVerzikHealth==1)&&(HideVerzikHealth==0))
{
	if (Enrage==0)
	{
	document.getElementById("VerzikVitur").style.backgroundImage = "url('images/finalbossmad.jpg')";
	}
	document.getElementById("VerzikHP").style.opacity = "1.0";
	document.getElementById("VerzikHPRed").style.opacity = "1.0";
	HideVerzikHealth = 650;
	DisplayVerzikHealth = 0;
}

else if (HideVerzikHealth > 0)
{
HideVerzikHealth = HideVerzikHealth - 1;
}

else if ((HideVerzikHealth==0)&&(DisplayVerzikHealth<=0)&&(!(VerzikHP<=0)))
{
if (Enrage==0)
{
document.getElementById("VerzikVitur").style.backgroundImage = "url('images/finalboss.jpg')";
}
document.getElementById("VerzikHP").style.opacity = "0.0";
document.getElementById("VerzikHPRed").style.opacity = "0.0";
}

if ((Enrage>0)&&(!(BossHealth<=0)))
{
document.getElementById("VerzikVitur").style.backgroundImage = "url('images/finalbossenraged.gif')";
}

if (BossHealth <= 0)
{
	document.getElementById("VerzikHP").style.visibility = "hidden";
	document.getElementById("VerzikVitur").style.backgroundImage = "url('images/deadboss.jpg')";
}

else if (!(BossHealth<=0))
{
	document.getElementById("VerzikHP").style.visibility = "visible";
}
}

function DisplayMessage()
{
	document.getElementById("adjustprint").style.marginLeft = movehorizontal - 60 + "px";
if (SpecBarShowing==1)
{
	document.getElementById("adjustprint").style.marginTop = movevertical - 120 + "px";
}

else
{
	document.getElementById("adjustprint").style.marginTop = movevertical - 100 + "px";
}

	if (EmptyOut <=0)
	{
		document.getElementById("dawnbringerstatus").style.opacity = "0";
		document.getElementById("dawnbringerstatus").innerHTML = "";
	}

	else if (!(EmptyOut <=0))
	{
		document.getElementById("dawnbringerstatus").style.opacity = "1.0";
		EmptyOut = EmptyOut - 1;
	}



}
function TrackTheSeconds()
{
  if ((MagneticEyes==1)&&(!(BossHealth<=0)))
  {
    TimeTracker = TimeTracker + 1;
    ScoreTracker = 1;
  }
}

function TrackOfTime()
{

  if ((BossHealth<=0)&&(!(FareWell<=1)))
	{
	FareWell = FareWell - 1;
	myMusic.volume = FareWell/300;
	}

	else if (FareWell<=1 || MagneticEyes == 0)
	{
    myMusic.volume = 0;
		killmusicfunction = 1;
	}

	if ((BossHealth<=0)&&((TimeTracker>0)))

	{
		EndTime = TimeTracker;
    if (ScoreTracker == 1)
  {
    ScoreBoard.push({"Name": AdventurersName, "Time": + EndTime, "Difficulty": GameMode,});
    ScoreTracker = 0 ;
    console.log(ScoreBoard);
  }
    document.getElementById("MissionComplete").style.visibility = "visible";
		document.getElementById("MissionComplete").innerHTML = "The boss has fallen! Encounter Time: " + EndTime + " seconds!";
	}


}

function HideInfoPrints()

{
	if (EnragePriority>0)
	{
		document.getElementById("informationprinter").innerHTML = "The boss is fighting for her life!";
		document.getElementById("informationprinter").style.opacity = "1.0";
		EnragePriority = EnragePriority - 1;
	}


if (!(HideMessage<=0))

{
	document.getElementById("informationprinter").style.opacity = "1.0";
	HideMessage = HideMessage - 1;
}

else if ((HideMessage<=0)&&(EnragePriority<=0))
{
	document.getElementById("informationprinter").style.opacity = "0.0";
}

}

function GuideToTheVideoGame()
{
if (ShowMenu==1)
{
document.getElementById("pageshift").style.visibility = "visible";
TheMenu.style.visibility = "visible";


if (Page==1)
{
	Guide.innerHTML = "Hello brave adventurer. I am a former spirit, of a brave adventurer who found their fate at the hands of the boss you are about to face off against: Verzik Vitur. I haunt the halls of this HTML file, in hopes of someone to slay the boss and save all of the land from her treacherous rule.";
DearDiary.innerHTML = "1 out of 6";
}

else if (Page==2)

{
Guide.innerHTML = "Movement: To move, use the WASD keys. Be aware, you won’t be able to move through any of the pillars.";
DearDiary.innerHTML = "2 out of 6";
}

else if (Page==3)

{
Guide.innerHTML = "Damaging the boss: Before entering the room, you must’ve found a staff known as the dawnbringer. You must charge it by holding the Spacebar key. The longer you charge it for, the more damage your attack will do.";
DearDiary.innerHTML = "3 out of 6";
}

else if (Page==4)

{
Guide.innerHTML = "Once you let go of the Spacebar key, whatever charge you have will be utilized to damage the boss. To fire off a charged shot, press the Spacebar key again to deal damage to the boss.";
DearDiary.innerHTML = "4 out of 6";
}

else if (Page==5)

{
Guide.innerHTML = "Pillars: in the arena, there are various pillars you can utilize for cover, but keep in mind, only a few areas in the pillars will provide sufficient cover from the boss’s attacks. You can also charge your dawnbringer behind pillars, but keep in mind, you cannot attack the boss while in cover. If you are by a pillar as it falls, you will die. So, make sure you don’t camp one pillar.";
DearDiary.innerHTML = "5 out of 6";
}

else if (Page==6)

{
Guide.innerHTML = "Boss’s Attacks: The boss charges up an attack, and once it’s been released, it will continue to track it's initial target. Her attacks have a long cooldown, so the ideal time to strike would be after she launches a projectile. That’s all the information I can offer you. Best of luck adventurer, don’t share the same fate as I.";
DearDiary.innerHTML = "6 out of 6";
}

else if (Page==7)

{
  if ((Completion ==1)&&(HardModeDone==0))
  {
  Guide.innerHTML = "FOOLISH MORTAL! DO YOU THINK YOU CAN FIND THE ANSWER TO BEAT ME ON HARD MODE? ALL I CAN SAY IS GET GOOD MORTAL!";
  DearDiary.innerHTML = "? out of ?";
}
else if ((Completion ==1)&&(HardModeDone==1))
{
  Guide.innerHTML = "Why are you still reading this? You already beat me at my CURRENT best. What more could you find pondering in the video game guide? Cookies? The solution to world peace? Someone that will get your little brother to stop hogging the XBOX? Well you won't find any of that here sadly. Now SCRAM!";
  DearDiary.innerHTML = "? out of ?";
}
}

}

else if (ShowMenu==0)
{
	TheMenu.style.visibility = "hidden";
}


}

function MenuSwapper(par)
{

	if (ShowMenu == 1)
	{

	if ((par.keyCode === 65)&&(!(Page==1)))
	{
		Page = Page - 1;
	}

else	if ((par.keyCode === 68)&&(!(Page==6))&&(Completion==0))
	{
		Page = Page + 1;
	}

  else	if ((par.keyCode === 68)&&(!(Page==7))&&(Completion==1))
  	{
  		Page = Page + 1;
  	}

	else if (par.keyCode==27)
	{
		Page = 1;
		ShowMenu = 0;
		document.getElementById("pageshift").style.visibility = "hidden";
		document.getElementById("guide").style.visibility = "visible";
	}
}

}

function ResetGame()
{
if ((MagneticEyes==1)&&(DeathState==0))
{
document.getElementById("ResetBoard").style.visibility = "visible";
document.getElementById("wegoagain").style.visibility = "visible";
document.getElementById("returntomenu").style.visibility = "visible";
}
if ((BossHealth<=0)&&(DeathState==1)&&(MagneticEyes==1))

{
  document.getElementById("TotalRecall").style.visibility = "visible";
  MagneticEyes = 0;
}

}
