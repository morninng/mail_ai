var Chat;
Chat = function(el) {
  this.init(el);
  this.isShow = true;
}

Chat.prototype.init = function(el) {
  this.$el = $(el);
  this.$msgs = this.$el.find("#conversation_container");
  this._timer = null;
};

Chat.prototype.hide = function() {
  this.$el.addClass('is-hide');
};

Chat.prototype.show = function() {
  this.$el.removeClass('is-hide');

  if (this._timer) clearTimeout(this.timer);
  if (this.isShow) return;

  var self = this;
  this._timer = setTimeout(function(){
    self.hide();
  }, 10000);
};

Chat.prototype.scrollBottom = function() {
  console.log(this.$el);
  console.log(this.$el[0].scrollHeight);
  this.$msgs.animate({scrollTop: this.$msgs[0].scrollHeight}, 0);
};