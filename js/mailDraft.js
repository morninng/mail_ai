var maildraft = {
  template_type : "default",
  head : [],
  body : [],
  footer : []
}

function makeMailDraft(type, to, from) {
  if (type) {
    maildraft.template_type = type;
  }
  switch (maildraft.template_type) {
    case "default":
      maildraft.head.push(to + "様");
      maildraft.head.push("いつもお世話になっております。" + from + "です。");
      maildraft.footer.push("宜しくお願いいたします。");
    break;
  }
}

function addMailDraft(add) {
  maildraft.body.push(add);
}

function getMailDraft() {
  var mail = "";
  for (var i = 0;i < maildraft.head.length; i++) {
    mail += maildraft.head[i] + "\n";
  }
  for (var i = 0;i < maildraft.body.length; i++) {
    for (var j = 0;j < maildraft.body[i].length; j++) {
      mail += maildraft.body[i][j] + "\n";
    }
  }
  for (var i = 0;i < maildraft.footer.length; i++) {
    mail += maildraft.footer[i] + "\n";
  }
  return mail;
}
