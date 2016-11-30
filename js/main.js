'use strict'

$(document).ready(function(){
	if ( window.location.pathname.indexOf('store') > -1 ) {
		var quantity = 0,
			artists = ['beryl', 'sean', 'darren', 'patti'],
			order = {};

		var artist_info = {
			beryl: {
				name: 'Beryl Chung',
				pieces: [
					{
						name: '',
						tag: 'hifi'
					},
					{
						name: '',
						tag: 'pikachu'
					},
					{
						name: '',
						tag: 'bruce'
					},
					{
						name: '',
						tag: 'batgirl'
					},
					{
						name: '',
						tag: 'wkw'
					},
				]
			},
			sean: {
				name: 'Sean Kiefer',
				pieces: [
					{
						name: 'Super Green',
						tag: 'fifth'
					},
					{
						name: 'Now, Plain Zero!',
						tag: 'action'
					},
					{
						name: 'Save the Clocktower',
						tag: 'bttf'
					},
					{
						name: 'ABACABB',
						tag: 'nes'
					},
					{
						name: 'The Velour Fog',
						tag: 'future'
					}
				]
			},
			darren: {
				name: 'Darren Crawforth',
				pieces: [
					{
						name: '',
						tag: 'iggy'
					},
					{
						name: '',
						tag: 'johnny'
					},
					{
						name: '',
						tag: 'keiran'
					},
					{
						name: '',
						tag: 'leonard'
					},
					{
						name: '',
						tag: 'scratch'
					},
				]
			},
			patti: {
				name: 'Patti Ruan',
				pieces: [
					{
						name: '',
						tag: 'bath'
					},
					{
						name: '',
						tag: 'doors'
					},
					{
						name: '',
						tag: 'mother'
					},
					{
						name: '',
						tag: 'hal'
					},
					{
						name: '',
						tag: 'spongebob'
					},
				]
			},
			otto: {
				name: 'Otto',
				pieces: [
					{
						name: '',
						tag: ''
					},
					{
						name: '',
						tag: ''
					},
					{
						name: '',
						tag: ''
					},
					{
						name: '',
						tag: ''
					},
					{
						name: '',
						tag: ''
					},
				]
			}
		};

		emailjs.init("user_17IFxUh62EclEap0rJrrN");

		artists.forEach(function(artist){
			var info = artist_info[artist];
			var pieces = info.pieces;

			var store = $('<div class="store" id="'+artist+'"></div>');

			$(store).append("<h3 class='store-title'>"+info.name+"</h3>");

			var previews = $('<div></div>').addClass('store-wrapper clearfix');
			pieces.forEach(function(piece){
				var itemEl = "<div class='store-item'><img data-name='"+info.name+"' data-piece='"+piece.name+"' src='img/previews/"+artist+"_"+piece.tag+".jpg'/><h6 class='title'>"+piece.name+"</h6></div>";
				$(previews).append(itemEl);
			});

			$(store).append(previews);

			$('.wrapper').append(store);
		});

		$('.wrapper').append('<button class="submit-btn" id="submitChoices">Next</button>');

		$('#submitQuantity').click(function(){
			quantity = document.getElementById('quantityInput').value;
			if ( quantity>0 ) {
				$('.quantity-shade').removeClass('show');
				$('.store').addClass('show');
				$('#quantityInput').val("");
			}
		});

		$('.store-item img').click(function(){
			if( $(this).hasClass('selected') ){
				$(this).removeClass('selected');
			} else if ( $('.store-item .selected').length < quantity ) {
				$(this).addClass('selected');
				if($('.store-item .selected').length==quantity) {
					$('#submitChoices').addClass('active');
				}
			}
		});

		$('#submitChoices').click(function(){
			if( !$(this).hasClass('active') ) return;

			order.items = [];
			$('img.selected').each(function(){
				order.items.push({
					artist: $(this).data('name'),
					title: $(this).data('piece'),
					quantity: 1
				});
			});

			console.log(order);

			$('.info-wrapper').addClass('show');
			$('.customer-info').addClass('display');
			$('.store').removeClass('show');
		});

		$('#submitOrder').click(function(){
			// check required fields
			var flag = false;

			$('.required').each(function(){
				if( !$(this).val() ) {
					$(this).addClass('has-error');
					flag = true;
				}
			});
			
			if (flag) return;

			order.contact = {
				name: $('#contactName').val(),
				email: $('#contactEmail').val(),
				address: $('#contactAddress').val(),
				wechat: $('#contactWechat').val(),
				phone: $('#contactPhone').val()
			};

			console.log(order);

			var loaderEl = '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
			$('#submitOrder').html(loaderEl);

			emailjs.send("outlook", "top5_order", order)
				.then(function(response) {
					console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
					$('.customer-info').removeClass('display');
					$('.success-message').addClass('display');
					$('#submitOrder').html("Submit");
					// reset form values
					$('#contactName').val("");
					$('#contactEmail').val("");
					$('#contactAddress').val("");
					$('#contactWechat').val("");
					$('#contactPhone').val("");
				}, function(err) {
					console.log("FAILED. error=", err);
					$('#submitOrder').html("Submit");
					alert('Order Failed: check connection and try again');
				});
		});

		$('#submitReset').click(function(){
			quantity = 0;
			order = {};
			$('img.selected').removeClass('selected');
			$('.success-message').removeClass('display');
			$('.quantity-shade').addClass('show');
			$('.info-wrapper').removeClass('show');

		});


	}
});