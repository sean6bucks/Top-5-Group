'use strict'

$(document).ready(function(){

	var quantity = 0,
			artists = ['beryl', 'sean', 'darren', 'otto', 'patti'],
			order = {};

	var artist_info = {
		beryl: {
			name: 'Beryl Chung',
			pieces: [
				{
					name: 'Bruce Lee',
					tag: 'bruce'
				},
				{
					name: 'Cassandra Cain',
					tag: 'batgirl'
				},
				{
					name: 'Pikachu',
					tag: 'pikachu'
				},
				{
					name: 'Wong Kar Wai',
					tag: 'wkw'
				},
				{
					name: 'High Fidelity',
					tag: 'hifi'
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
					name: 'The Hand of Jonny Greenwood',
					tag: 'johnny'
				},
				{
					name: 'The Hips of Iggy Pop',
					tag: 'iggy'
				},
				{
					name: 'The Heart of Leonard Cohen',
					tag: 'leonard'
				},
				{
					name: 'The Brain of Kieran Hebden',
					tag: 'keiran'
				},
				{
					name: 'The Feet of Lee "Scratch" Perry',
					tag: 'scratch'
				},
			]
		},
		patti: {
			name: 'Patti Ruan',
			pieces: [
				{
					name: 'All About My Mother',
					tag: 'mother'
				},
				{
					name: 'Live with Spongebob',
					tag: 'spongebob'
				},
				{
					name: 'Bath with DragonBall',
					tag: 'bath'
				},
				{
					name: 'Always Love the Doors',
					tag: 'doors'
				},
				{
					name: 'Everyone is HAL9000',
					tag: 'hal'
				},
				
			]
		},
		otto: {
			name: 'Otto Som',
			pieces: [
				{
					name: 'BIG LOVE',
					tag: 'love'
				},
				{
					name: 'DREAM OF SODOM',
					tag: 'sodom'
				},
				{
					name: 'TALK TO MY PUSSY',
					tag: 'pussy'
				},
				{
					name: 'THE HEAVENLY STAREAII',
					tag: 'heaven'
				},
				{
					name: 'ALL SHE HAS LEFT',
					tag: 'gold'
				},
			]
		}
	};

	if ( window.location.pathname=='/top5/' || window.location.pathname.indexOf('index')>-1 ) {

		$('.top_nav').click(function(event){
			if ( $(event.target).hasClass('active') ) return;
			$( '.top_nav' ).removeClass('active');
			$(event.target).addClass('active');

			var id = event.target.id.replace(/_nav/g, '');
			console.log($('#' + id));
			var scrollTop = $('#' + id).offset().top - 100;
			console.log( scrollTop );
			$('body').animate({ scrollTop: scrollTop }, 200);
		});

		artists.forEach(function(artist){
			var info = artist_info[artist];
			var pieces = info.pieces;

			var store = $('<div class="store show" id="'+artist+'"></div>');

			$(store).append("<h3 class='store-title'>"+info.name+"</h3>");

			var previews = $('<div></div>').addClass('store-wrapper clearfix');
			pieces.forEach(function(piece){
				var itemEl = "<div class='store-item' data-name='"+info.name+"' data-piece='"+piece.name+"'><a href='img/previews/"+artist+"_"+piece.tag+".jpg' data-lightbox='"+artist+"-gallery' data-title='"+piece.name+"'><img src='img/previews/"+artist+"_"+piece.tag+"_thumb.jpg'/></a><h6 class='title'>"+piece.name+"</h6><input type='number'></div>";
				$(previews).append(itemEl);
			});

			$(store).append(previews);
			$('#series1').append(store);
		});

		if ( tongdao ) {
			$('.store-item').click(function(){
				tongdao.track('poster_viewed', {
					artist: $(this).data('name'),
					poster_name: $(this).data('piece')
				});
			});
		}
	}

	if ( window.location.pathname.indexOf('store') > -1 ) {
		console.log('yaya');
		emailjs.init("user_17IFxUh62EclEap0rJrrN");

		artists.forEach(function(artist){
			var info = artist_info[artist];
			var pieces = info.pieces;

			var store = $('<div class="store" id="'+artist+'"></div>');

			$(store).append("<h3 class='store-title'>"+info.name+"</h3>");

			var previews = $('<div></div>').addClass('store-wrapper clearfix');
			pieces.forEach(function(piece){
				var itemEl = "<div class='store-item' data-name='"+info.name+"' data-piece='"+piece.name+"'><img src='img/previews/"+artist+"_"+piece.tag+".jpg'/><h6 class='title'>"+piece.name+"</h6><input type='number'></div>";
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

		var selectedQuantity;
		$('.store-item img').click(function(){
			selectedQuantity = 0;
			var parent = $(this).parent();
			$('.store-item.selected input').each(function(){
				selectedQuantity += parseInt($(this).val());
			});
			if( parent.hasClass('selected') ) {
				parent.removeClass('selected');
				selectedQuantity -= parseInt(parent.children('input').val());
				parent.children('input').val(0);
			} else if ( selectedQuantity < quantity ) {
				parent.addClass('selected');
				parent.children('input').val(1);
				selectedQuantity += 1
				if( selectedQuantity==quantity ) {
					$('#submitChoices').addClass('active');
				}
			}
		});

		$('#submitChoices').click(function(){
			if( !$(this).hasClass('active') ) return;

			selectedQuantity = 0;
			$('.store-item.selected input').each(function(){
				selectedQuantity += parseInt($(this).val());
			});

			if( selectedQuantity > quantity ) {
				alert('Too many posters selected');
				return;
			}

			order.items = [];
			$('.store-item.selected').each(function(){
				order.items.push({
					artist: $(this).data('name'),
					title: $(this).data('piece'),
					quantity: parseInt($(this).children('input').val())
				});
			});

			console.log(order);

			$('.info-wrapper').addClass('show');
			window.scrollTo( 0, 0 );
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
					window.scrollTo(0,0);
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
			$('.store-item').removeClass('selected');
			$('.store-item').children('input').val(0);
			$('.success-message').removeClass('display');
			$('.quantity-shade').addClass('show');
			$('.info-wrapper').removeClass('show');

		});
	}

	if( lightbox ) {
		lightbox.option({
			resizeDuration: 200,
			imageFadeDuration: 200,
			alwaysShowNavOnTouchDevices: true,
			wrapAround: true,
			disableScrolling: true
	    })
	}

});