Chat = function(el) {
  this.init(el);
  this.isShow = true;
}

Chat.prototype.init = function(el) {
  this.$el = $(el);
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
  this.$el.animate({scrollTop: this.$el[0].scrollHeight}, 'fast');
};