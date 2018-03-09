
var People = { profiles: [
                {
                    "Name": "Anna",
                    "Surname": "Doe",
                    "Gender": "female",
                    "Age": 23,
                    "Location": "Vienna",
                    "inRelation": false,
                    "Photo": "img/Amy.jpg",
                    "Likes": 5
                },
                {
                    "Name": "Bart",
                    "Surname": "Simpson",
                    "Gender": "male",
                    "Age": 25,
                    "Location": "Toronto",
                    "inRelation": false,
                    "Photo": "img/Brad.jpg",
                    "Likes": 5

                },
                {
                    "Name": "Clara",
                    "Surname": "Kessel",
                    "Gender": "female",
                    "Age": 30,
                    "Location": "Berlin",
                    "inRelation": false,
                    "Photo": "img/Clara.jpg",
                    "Likes": 5
                },
                {
                    "Name": "David",
                    "Surname": "Dohn",
                    "Gender": "male",
                    "Age": 26,
                    "Location": "New York",
                    "inRelation": true,
                    "Photo": "img/Donald.jpg",
                    "Likes": 5
                },
                {
                    "Name": "Elena",
                    "Surname": "Kitz",
                    "Gender": "female",
                    "Age": 24,
                    "Location": "Rio di Janero",
                    "inRelation": false,
                    "Photo": "img/Elena.jpg",
                    "Likes": 5
                },
                {
                    "Name": "Frank",
                    "Surname": "Giovanni",
                    "Gender": "male",
                    "Age": 27,
                    "Location": "Venice",
                    "inRelation": false,
                    "Photo": "img/Frank.jpg",
                    "Likes": 5

                },
                {
                    "Name": "Gigi",
                    "Surname": "Neem",
                    "Gender": "female",
                    "Age": 22,
                    "Location": "California",
                    "inRelation": true,
                    "Photo": "img/Gigi.jpg",
                    "Likes": 5
                },
                {
                    "Name": "Harry",
                    "Surname": "Potter",
                    "Gender": "male",
                    "Age": 26,
                    "Location": "London",
                    "inRelation": false,
                    "Photo": "img/Harry.jpg",
                    "Likes": 5
                },
                {
                    "Name": "Ida",
                    "Surname": "MacDonald",
                    "Gender": "female",
                    "Age": 23,
                    "Location": "Dublin",
                    "inRelation": true,
                    "Photo": "img/Isla.jpg",
                    "Likes": 5
                },
                {
                    "Name": "Jack",
                    "Surname": "Wolf",
                    "Gender": "male",
                    "Age": 25,
                    "Location": "Amsterdam",
                    "inRelation": false,
                    "Photo": "img/Jack.jpg",
                    "Likes": 5
                },
                {
                    "Name": "Karoline",
                    "Surname": "Mayer",
                    "Gender": "female",
                    "Age": 24,
                    "Location": "Vienna",
                    "inRelation": false,
                    "Photo": "img/Karoline.jpg",
                    "Likes": 5
                },
                {
                    "Name": "Lenny",
                    "Surname": "Schmidt",
                    "Gender": "male",
                    "Age": 29,
                    "Location": "Berlin",
                    "inRelation": false,
                    "Photo": "img/Lenny.jpg",
                    "Likes": 23
                },
                {
                    "Name": "Maya",
                    "Surname": "Macdougle",
                    "Gender": "female",
                    "Age": 29,
                    "Location": "Dublin",
                    "inRelation": false,
                    "Photo": "img/Maya.jpg",
                    "Likes": 23
                },
                {
                    "Name": "Nino",
                    "Surname": "Piallo",
                    "Gender": "male",
                    "Age": 26,
                    "Location": "Rome",
                    "inRelation": true,
                    "Photo": "img/Nino.jpg",
                    "Likes": 5
                },
                {
                    "Name": "Olga",
                    "Surname": "Wyzymki",
                    "Gender": "female",
                    "Age": 29,
                    "Location": "Warsaw",
                    "inRelation": false,
                    "Photo": "img/Olga.jpg",
                    "Likes": 56

                },
                {
                    "Name": "Paul",
                    "Surname": "Carrigan",
                    "Gender": "male",
                    "Age": 30,
                    "Location": "London",
                    "inRelation": false,
                    "Photo": "img/Paul.jpg",
                    "Likes": 25
                },
                {
                    "Name": "Quartz",
                    "Surname": "Fabrey",
                    "Gender": "female",
                    "Age": 31,
                    "Location": "California",
                    "inRelation": false,
                    "Photo": "img/Quinn.jpg",
                    "Likes": 65
                },
                {
                    "Name": "Rudolf",
                    "Surname": "Weinmann",
                    "Gender": "male",
                    "Age": 29,
                    "Location": "Vienna",
                    "inRelation": true,
                    "Photo": "img/Rudi.jpg",
                    "Likes": 65
                },
                {
                    "Name": "Sarah",
                    "Surname": "Golding",
                    "Gender": "female",
                    "Age": 28,
                    "Location": "Toronto",
                    "inRelation": false,
                    "Photo": "img/Sarah.jpg",
                    "Likes": 5
                },
                {
                    "Name": "Theo",
                    "Surname": "Pedigrom",
                    "Gender": "male",
                    "Age": 23,
                    "Location": "New York",
                    "inRelation": false,
                    "Photo": "img/Theo.jpg",
                    "Likes": 5
                }]
        };



  var card =  "<div class='col-md-6 col-sm-12 col-lg-3 profile-card'> </div>";
  var user =     "<div class='row user'> \
                    <div class='col-md-4 col-sm-6 picture'> \
                       <div class='prof-img-wrapper'> \
                       </div> \
                    </div>\
                    <div class='col-md-8 col-sm-6 data'> \
                    </div> \
                  </div>";
 var hearts =  "<div class='row hearts'> \
                 <div class='col-md-3 col-md-offset-6 col-sm-3 col-sm-offset-6 col-xs-6 like align-items-center'> \
                   <button type='button' class='like-btn'>Like</button> \
                  </div> \
                  <div class='col-md-3 col-sm-3 col-xs-6 hearts text-center'>  \
                   <img src='img/heart.png' alt='img' class='heart'> \
                </div> \
              </div> ";



function displayEachPerson(gender, mode=null, age=null, relation=null){
  $.each(People.profiles, function(index, person) {
    if(person.Gender == gender || gender == null){
      var prof_card = $(card);

      //populate user data
      var user_card = $(user);

     user_card.find('.data').append("<div class='name'>Name: <a href='person.html?name="+ person.Name +"'><b>"+ person.Name +"</b></a></div>");
     user_card.find('.data').append("<div class='name'>Surname: <b>"+ person.Surname +"</b></div>");
     user_card.find('.data').append("<div class='name'>Age: <b>"+ person.Age +"</b></div>");

     user_card.find('.picture').children().append("<img src='"+ person.Photo +"' class='profile-pic'>");

     var hearts_card = $(hearts);
     var num_hearts = $("<span class='num-hearts'>"+person.Likes+"</span>");
     num_hearts.val(person.Likes);
     //hearts_card.find('.hearts').children()[0].append(person.likes);
     hearts_card.find('.hearts').prepend(num_hearts);

     $(prof_card).append(user_card);
     $(prof_card).append(hearts_card);

     if(mode == true){
      var tally = 0;
      var total_age = parseInt(person.Age) - parseInt(age);
      if(total_age < 10 && total_age > -10){
        tally += 50;
      }
      if(person.inRelation == false && relation == false){
        tally += 50;
      }
      $(prof_card).prepend("<div class='progress'>\
        <div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='"+tally+"' aria-valuemin='0' aria-valuemax='100' style='width: "+tally+"%'>\
        </div>\
        </div>")
     }


      $("#profile-container-row").append(prof_card);
    }
  });
}





var p_card =  "<div class='col-md-12 col-sm-12 col-lg-12 main-person'>";
var p_user =     "<div class='row user'> \
                <div class='col-md-4 col-sm-6 picture-main'> \
                   <div class='prof-img-wrapper'></div> \
                </div>\
                <div class='col-md-8 col-sm-6 data'> </div> \
              </div>";
var p_hearts =  "<div class='row hearts'> \
             <div style='margin-top:2px;padding:5px;' class='col-md-6  col-sm-6 col-xs-6 like align-items-center'> \
               <button type='button' class='like-btn'>Like</button> \
              </div> \
              <div class='col-md-6 col-sm-6 col-xs-6 hearts text-center'>  \
               <img src='img/heart.png' alt='img' class='heart'> \
            </div> \
          </div> ";

function displayPerson(name){
  var user = {};
  $.each(People.profiles, function(index, person) {
    if(person.Name == name ){
      var prof_card = $(p_card);

      //populate user data
      var user_card = $(p_user);

      //in relation ?
      var relation = "";
      if(person.inRelation){
      relation="yes";}
      else{relation="no";}

     user_card.find('.data').append("<div class='name'>Gender: <b>"+ person.Gender +"</b></div>");
     user_card.find('.data').append("<div class='name'>Age: <b>"+ person.Age +"</b></div>");
     user_card.find('.data').append("<div class='name'>Location: <b>"+ person.Location +"</b></div>");
     user_card.find('.data').append("<div class='name'>In Realationship?: <b>"+ relation +"</b></div>");

     user_card.find('.picture-main').children().append("<img src='"+ person.Photo +"' class='profile-pic'>");

     var hearts_card = $(p_hearts);
     var num_hearts = $("<span class='num-hearts'>"+person.Likes+"</span>");
     num_hearts.val(person.Likes);
     //hearts_card.find('.hearts').children()[0].append(person.likes);
     hearts_card.find('.hearts').prepend(num_hearts);

    $(prof_card).append(user_card);
    $(prof_card).append(hearts_card);
    $("#main-person").append(prof_card);


    //set title
    $("#user-name").html( person.Name+" "+ person.Surname);
    user.age = person.Age;
    user.relation = person.inRelation;
    user.gender = person.Gender;
    }
  });
  return(user);
}


function matchmaking(){

}
