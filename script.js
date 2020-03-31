$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

/*после полной прогрузки страницы*/
$(document).bind("ready", function() {
	/*функция сработает через 3 минуты - 3000 миллисекунд*/
	setTimeout(function() {
		/*создаём элемент script*/
		var script = document.createElement('script');
		/*прописываем путь к файлу скрипта*/
		script.src = 'calc/ajax.js';
		/*прописываем значение для атрибута type*/
		script.type = 'text/javascript';
		/*добавляем наш элемент script в конец элемента body*/
		document.body.appendChild(script);
	}, 30);
});





	function nav_menu() {
		$("#nav__head").toggleClass("show");
	}

	// /* Nav Toggle */
	// let nav = $("#nav__head");
	// let navToggle = $("#navToggle");

    // navToggle.on("click", function(event) {
    //     event.preventDefault();

    //     nav.toggleClass("show");
    // });
