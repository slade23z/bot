$(document).ready(function(){
	displayChat();
});

$(document).keypress(function(e) {
	if(e.which == 13) {
		getUserInput();
	}
});

function getUserInput(){
	var inputFromUser = $(".send-textbox").val();

	if(inputFromUser == null || inputFromUser != null && inputFromUser.length == 0){
		error("Erro: Input não pode estar em branco");
	}else{
		sendElizaNewMessage(inputFromUser);
	}
}

function error(message){
	//console.log(message);
	createNegativeNotification(message, 9);
}

function displayChat(){
	//console.log("displayChat");
	
	var html = '';
	if(chatHistory.length == 0){
		startElizaChat();
	}else{
		for(var i = 0;i < chatHistory.length;i++){

			var currentMessage = chatHistory[i];
			// console.log("loop");

			if(currentMessage.isEliza){
				html += getElizaMessageHTML(currentMessage.content);
			}else{
				html += getUserMessageHTML(currentMessage.content);
			}
		}

		$("#chat-area").html(html);
		$('#chat-area').scrollTop($('#chat-area')[0].scrollHeight);
	}
	$('#body').scrollTop($('#body')[0].scrollHeight);
	//console.log($('#body')[0].scrollHeight);
}

function getElizaMessageHTML(message){
	return '<div class="chat-message-outter-wrapper"><img src="./assets/imgs/anamaria.png" class="chat-message-icon"><div class="chat-message-wrapper eliza-message"><p class="chat-message-text text-left">' + message + '</p><p class="chat-user-text">Ana Maria Bolos</p></div></div>';
}

function getUserMessageHTML(message){
	return '<div class="chat-message-outter-wrapper text-right"><div class="chat-message-wrapper you-message"><p class="chat-message-text text-left">' + message + '</p><p class="chat-user-text">Você</p></div><img src="./assets/imgs/laptop.png" class="chat-message-icon"></div>';
}
function clearSendTextbox(){
	$(".send-textbox").val('');
}