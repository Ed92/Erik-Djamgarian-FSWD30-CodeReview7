
var myObj, i, x = ""; 
var People ={
				"Anna" :[{
					"Name": "Anna",
					"Surname": "Doe",
					"Gender": "female",
					"Age": 22,
					"Location": "Vienna",
					"inRelation": false,
					"Photo": "img/Amy.jpg"
				}],
				"Bart": [{
					"Name": "Bart",
					"Surname": "Simpson",
					"Gender": "male",
					"Age": 25,
					"Location": "Toronto",
					"inRelation": false,
					"Photo": "img/Brad.jpg"	

				}],
				"Clara": [{
					"Name": "Clara",
					"Surname": "Kessel",
					"Gender": "female",
					"Age": 30,
					"Location": "Berlin",
					"inRelation": false,
					"Photo": "img/Clara.jpg"	
				}],
				"David":[{
					"Name": "David",
					"Surname": "Dohn",
					"Gender": "male",
					"Age": 26,
					"Location": "New York",
					"inRelation": true,
					"Photo": "img/Donald.jpg"		
				}],
				"Elena":[{
					"Name": "Elena",
					"Surname": "Kitz",
					"Gender": "female",
					"Age": 24,
					"Location": "Rio di Janero",
					"inRelation": false,
					"Photo": "img/Elena.jpg"
				}],
				"Frank": [{
					"Name": "Frank",
					"Surname": "Giovanni",
					"Gender": "male",
					"Age": 27,
					"Location": "Venice",
					"inRelation": false,
					"Photo": "img/Frank.jpg"
				}],
				"Gigi": [{
					"Name": "Gigi",
					"Surname": "Neem",
					"Gender": "female",
					"Age": 22,
					"Location": "California",
					"inRelation": true,
					"Photo": "img/Gig.jpg"
				}],
				"Harry": [{
					"Name": "Harry",
					"Surname": "Potter",
					"Gender": "male",
					"Age": 26,
					"Location": "London",
					"inRelation": false,
					"Photo": "img/Harry.jpg"
				}],
				"Ida": [{
					"Name": "Ida",
					"Surname": "MacDonald",
					"Gender": "female",
					"Age": 23,
					"Location": "Dublin",
					"inRelation": true,
					"Photo": "img/Isla.jpg"
				}],
				"Jack":[{
					"Name": "Jack",
					"Surname": "Wolf",
					"Gender": "male",
					"Age": 25,
					"Location": "Amsterdam",
					"inRelation": false,
					"Photo": "img/Jack.jpg"
				}],
				"Karoline":[{
					"Name": "Karoline",
					"Surname": "Mayer",
					"Gender": "female",
					"Age": 24,
					"Location": "Vienna",
					"inRelation": false,
					"Photo": "img/Karoline.jpg"
				}],
				"Lenny":[{
					"Name": "Lenny",
					"Surname": "Schmidt",
					"Gender": "male",
					"Age": 29,
					"Location": "Berlin",
					"inRelation": false,
					"Photo": "img/Lenny.jpg"
				}],
				"Maya": [{
					"Name": "Maya",
					"Surname": "Macdougle",
					"Gender": "female",
					"Age": 29,
					"Location": "Dublin",
					"inRelation": false,
					"Photo": "img/Maya.jpg"
				}],
				"Nino": [{
					"Name": "Nino",
					"Surname": "Piallo",
					"Gender": "male",
					"Age": 26,
					"Location": "Rome",
					"inRelation": true,
					"Photo": "img/Nino.jpg"
				}],
				"Olga": [{
					"Name": "Olga",
					"Surname": "Wyzymki",
					"Gender": "female",
					"Age": 29,
					"Location": "Warsaw",
					"inRelation": false,
					"Photo": "img/Olga.jpg"
				}],
				"Peter": [{
					"Name": "Peter",
					"Surname": "Carrigan",
					"Gender": "male",
					"Age": 30,
					"Location": "London",
					"inRelation": false,
					"Photo": "img/Paul.jpg"
				}],
				"Quartz": [{
					"Name": "Quartz",
					"Surname": "Fabrey",
					"Gender": "female",
					"Age": 31,
					"Location": "California",
					"inRelation": false,
					"Photo": "img/Quinn.jpg"
				}],
				"Rudolf": [{
					"Name": "Rudolf",
					"Surname": "Weinmann",
					"Gender": "male",
					"Age": 29,
					"Location": "Vienna",
					"inRelation": true,
					"Photo": "img/Rudi.jpg"
				}],
				"Sarah": [{
					"Name": "Sarah",
					"Surname": "Golding",
					"Gender": "female",
					"Age": 28,
					"Location": "Toronto",
					"Photo": "img/Sarah.jpg"
				}],
				"The": [{
					"Name": "Theo",
					"Surname": "Pedigrom",
					"Gender": "male",
					"Age": 23,
					"Location": "New York",
					"Photo": "img/Theo.jpg"
				}]
			};

for (i in People.Anna){
	x += People.Anna[i] + "<br>";
}
document.getElementById("output").innerHTML= x;