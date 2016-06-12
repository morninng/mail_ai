
var reserved_word = {
	mail_suggestion:{
		next_candidate: [
		"他","次","別","違","ない","辻","ダメ","駄目"
		],
		search_other_keyword: [
		"関する","について","検索","関して"
		],
		goto_row_selection:[
		"いいよ","いこう","これで","はい","あります","有","ります","いいです","このメール"
		]
	},
	row_selection:{
		from_keyword: [
			"行目から","から"
		],
		to_keyword: [
			"行目まで","まで"
		],
		num_keyword:[
			"5","4","3","2","1","0"
		],
		goto_make_mail_keyword:[
			"いいよ","いこう","これで","はい","あります","有","ります","いいです","このメール"
		]
	},
	make_mail:{
		default_template_keyword: [
			"社外"
		],
		office_template_keyword: [
			"社内"
		],
		apology_template_keyword: [
			"謝罪"
		],
		goto_expect_other_keyword:[
			"いいよ","いこう","これで","はい","あります","有","ります","いいです","このメール"
		]
	}

}



var num_char_array = ["一","1","位","二","2","荷","三","山","酸","3","四","4","語","五","後","5","六","6","七","7","八","蜂","鉢","8","級","九","旧","9","十"];
var num_converter = {"一":"1","位":"1","1":"1",
					"二":"2","荷":"2","2":"2",
					"三":"3","山":"3","3":"3",
					"四":"4", "４":"4", "4":"4", 
					"後":"5", "語":"5", "五":"5", "５":"5", "5":"5", 
					"六":"6", "録":"6", "６":"6", "6":"6", 
					"七":"7", "奈":"7", "菜":"7", "７":"7", "7":"7", 
					"鉢":"8", "八":"8", "８":"8", "8":"8", 
					"級":"9", "九":"9", "旧":"9", "9":"9", "９":"9" };

