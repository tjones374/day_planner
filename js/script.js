$(document).ready(function() {
	$('.saveBtn').on('click', function() {
		var value = $(this)
			.siblings('.description')
			.val();

		var time = $(this)
			.parent()
			.attr('id');

		localStorage.setItem(time, value);
	});

	function hourUpdate() {
		var currentHour = moment().hours();

		$('.time-block').each(function() {
			var blockHour = parseInt(
				$(this)
					.attr('id')
					.split('-')[0]
			);

			if (blockHour < currentHour) {
				$(this).addClass('past');
			} else if (blockHour === currentHour) {
				$(this).removeClass('past');
				$(this).addClass('present');
			} else {
				$(this).removeClass('past');
				$(this).removeClass('present');
				$(this).addClass('future');
			}
		});
	}
	hourUpdate();

	var setInterval = setInterval(hourUpdate, 15000);

	$('#9AM .description').val(localStorage.getItem('9AM'));
	$('#10AM .description').val(localStorage.getItem('10AM'));
	$('#11AM .description').val(localStorage.getItem('11AM'));
	$('#12PM .description').val(localStorage.getItem('12PM'));
	$('#13PM .description').val(localStorage.getItem('13PM'));
	$('#14PM .description').val(localStorage.getItem('14PM'));
	$('#15PM .description').val(localStorage.getItem('15PM'));
	$('#16PM .description').val(localStorage.getItem('16PM'));
	$('#17PM .description').val(localStorage.getItem('17PM'));

	$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
});
