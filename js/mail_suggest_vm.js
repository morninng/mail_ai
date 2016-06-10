function MailSuggestVM(){
	var self = this;
	self.title = ko.observable('Bob');

	self.highlighted_from = 0;
	self.highlighted_to = 0;
	self.mail_sentence_array = ko.observableArray();
}

MailSuggestVM.prototype.initialize = function(){
	console.log("initialize Mail_suggest");
}

MailSuggestVM.prototype.set_context = function(context_array){

	var self = this;
	self.mail_sentence_array.removeAll();
	for(var i=0; i< context_array.length; i++){
		var obj = {line_class:"default", line_num:i+1, line_context:context_array[i]}
		self.mail_sentence_array.push(obj)
	}
}



MailSuggestVM.prototype.select_all = function(){

	self.mail_sentence_array.removeAll();
	self.highlighted_from = 0;
	self.highlighted_to = context_array.length;

	for(var i=0; i< context_array.length; i++){
		var obj = {line_class:"selected", line_num:i+1, line_context:context_array[i]}
		self.mail_sentence_array.push(obj)
	}

}

