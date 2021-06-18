// import React from 'react';

var twitch = window.Twitch.ext;
// window.Twitch.ext.rig.log("Hey! Rig");
function updateBlock(hex) {
    $('#color').css('background-color', hex);
}

function getRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

$(function() {
    $('#root').prop('disabled', false);

    $('#root').click(function() {
      
        const url = 'https://pr4ruevxt5gtteei7zuyecinmm.appsync-api.us-east-1.amazonaws.com/graphql';
        const stringValue = {"query":"query MyQuery {\r\n  listPlayers {\r\n    items {\r\n      activeChatGroup\r\n      activeSkinID\r\n      avatar\r\n      bedrockID\r\n      canSendPromotions\r\n      discordID\r\n      displayName\r\n      javaID\r\n      profile\r\n      staff\r\n    }\r\n  }\r\n}","variables":{}};
        const options = {
            method: 'POST',
            headers: {
                'x-api-key': 'da2-ktspne3545dhxdvvuesb5q6n2u',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(stringValue),
        };  
        fetch(url, options)
            .then(response => {
                 return response.json()
                    .then(data => {
                      console.log(data);
                      document.getElementById('playerdata').innerHTML = data.data.listPlayers.items.map(item => {
                                return `<div>${item.displayName}</div>`;
                      });
                    });
            });
        

      
    });
});



// var token, userId;
// var options = [];

// // so we don't have to write this out everytime #efficency
// const twitch = window.Twitch.ext;


// // callback called when context of an extension is fired 
// twitch.onContext((context) => {
//   //console.log(context);
// });


// // onAuthorized callback called each time JWT is fired
// twitch.onAuthorized((auth) => {
//   // save our credentials
//   token = auth.token; //JWT passed to backend for authentication 
//   userId = auth.userId; //opaque userID 

// });

// // when the config changes, update the panel! 
// twitch.configuration.onChanged(function(){
//   //console.log(twitch.configuration.broadcaster)
//   if(twitch.configuration.broadcaster){
//     try{
//       var config = JSON.parse(twitch.configuration.broadcaster.content)
//       //console.log(typeof config)
//       if(typeof config === "object"){
//         options = config
//         updateOptions()
//       }else{
//         console.log('invalid config')
//       }
//     }catch(e){
//       console.log('invalid config')
//     }
//   }
// })


// // TODO: add logic for hitting Submit on Panel View
// $(function(){
//   $("#form").submit(function(e){
//     console.log('in function')
//     if(!token) { 
//       return console.log('Not authorized'); 
//     }
//     console.log('Submitting a question');
//     var optionA = $("#selectA").val()
//     var optionB = $("#selectB").val()

//     //ajax call 
//     $.ajax({
//       type: 'POST',
//       url: location.protocol + '//localhost:3000/question',
//       data: JSON.stringify({first:optionA, second: optionB}),
//       contentType: 'application/json',
//       headers: { "Authorization": 'Bearer ' + token },
//     });
//   })  
// });








