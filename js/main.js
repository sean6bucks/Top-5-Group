'use strict'

$(document).ready(function(){

	var quantity = 0,
		order = {};

	var seriesSets = [
		{
			name: 'Series 2',
			tag: 'series2',
			artists: ['beryl', 'sean', 'yulong', 'duofen', 'alessandro', 'yanzhen', 'garrett', 'zoe', 'jesse' ],
			artist_info: {
				beryl: {
					name: 'Beryl Chung',
					pieces: [
						{
							name: 'Blue Hawaii',
							tag: 'elvis'
						},
						{
							name: 'Mad Max: Furiosa',
							tag: 'furiosa'
						},
						{
							name: 'T.O.P. Doom Dada',
							tag: 'top'
						},
						{
							name: 'Kamikaze Girls',
							tag: 'kamikaze'
						},
						{
							name: 'Pulp Fiction',
							tag: 'pulp'
						},
					]
				},
				sean: {
					name: 'Sean Kiefer',
					pieces: [
						{
							name: 'Y\'all Know About Killin\'?',
							tag: 'platoon'
						},
						{
							name: 'Cause My Life is Dope, and I Do Dope Shit',
							tag: 'kanye'
						},
						{
							name: 'Make Like a Tree, and Get Outta Here',
							tag: 'bttf2'
						},
						{
							name: 'We Made You!',
							tag: 'maximum'
						},
						{
							name: 'I\'ll Swallow Your Soul',
							tag: 'evil_dead'
						}
					]
				},
				yulong: {
					name: 'Yulong Lli 李豫陇',
					pieces: [
						{
							name: 'Tom Dixon',
							tag: 'tomdixon'
						},
						{
							name: 'David Hockney',
							tag: 'davidhockney'
						},
						{
							name: 'Breakbot',
							tag: 'breakbot'
						},
						{
							name: 'Maison Kitsune',
							tag: 'maisonkitsune'
						},
						{
							name: 'Moonrise Kingdom',
							tag: 'moonrisekingdom'
						}
					]
				},
				duofen: {
					name: 'Duofen (Frieda) Ma',
					pieces: [
						{
							name: 'Wild Jungle',
							tag: 'gaga'
						},
						{
							name: 'The Force Dances',
							tag: 'starwars'
						},
						{
							name: 'Social Networking Addiction',
							tag: 'likes'
						},
						{
							name: 'Amusing Ourselves to Death',
							tag: 'amusing'
						},
						{
							name: 'Clockworking Orange',
							tag: 'clockworking'
						}
					]
				},
				alessandro: {
					name: 'Alessandro Echevarria',
					pieces: [
						{
							name: 'Hiroshi & Moto',
							tag: 'fujikofujio'
						},
						{
							name: 'Give, Open, Close, Pick up, Look at, Talk to, Use, Push, Pull',
							tag: 'lucasarts'
						},
						{
							name: 'Wednesday Night',
							tag: 'mattgroening'
						},
						{
							name: 'Woof.',
							tag: 'miyazaki'
						},
						{
							name: 'Bird Mountain',
							tag: 'toriyama'
						}
					]
				},
				yanzhen: {
					name: 'Li Yanzhen 李炎臻',
					pieces: [
						{
							name: '孙悟空',
							tag: 'dragonball'
						},
						{
							name: '机器猫',
							tag: 'doremon'
						},
						{
							name: '海绵宝宝',
							tag: 'spongebob'
						},
						{
							name: '皮卡丘',
							tag: 'pikachu'
						},
						{
							name: '超级玛丽',
							tag: 'mario'
						}
					]
				},
				garrett: {
					name: 'Garrett Mutz',
					pieces: [
						{
							name: 'Tarantino',
							tag: 'tarantino'
						},
						{
							name: 'El Barto',
							tag: 'bart'
						},
						{
							name: 'The Texas Rattlesnake',
							tag: 'stonecold'
						},
						{
							name: 'Master Jim',
							tag: 'jim'
						},
						{
							name: 'Boba',
							tag: 'boba'
						}
					]
				},
				zoe: {
					name: 'DARTHY',
					pieces: [
						{
							name: 'KAIJUS ATTACK',
							tag: 'kaiju'
						},
						{
							name: 'RASHIN RASHIN',
							tag: 'rashin'
						},
						{
							name: 'LEGS vs. LEGS',
							tag: 'legs'
						},
						{
							name: 'SKULL WARS',
							tag: 'skullwars'
						},
						{
							name: 'CROWS ZILLA',
							tag: 'crowszilla'
						}
					]
				},
				jesse: {
					name: 'Jesse Ryan',
					pieces: [
						{
							name: 'Jack Kirby',
							tag: 'Orange'
						},
						{
							name: 'Stephen King',
							tag: 'Red'
						},
						{
							name: 'Brian Wilson',
							tag: 'Turquoise'
						},
						{
							name: 'Larry David',
							tag: 'Yellow'
						},
						{
							name: 'John Carpenter',
							tag: 'Blue'
						}
					]
				}

			}
		},
		{
			name: 'Series 1',
			tag: 'series1',
			artists: ['beryl', 'sean', 'darren', 'otto', 'patti'],
			artist_info: {
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
			}
		}
	];

	if ( window.location.pathname=='/' || window.location.pathname.indexOf('index.html')>-1 ) {

		$('.top_nav').click(function(event){
			if ( $(event.target).hasClass('active') ) return;
			$( '.top_nav' ).removeClass('active');
			$(event.target).addClass('active');

			var id = event.target.id.replace(/_nav/g, '');
			console.log( $('#' + id) );
			var scrollTop = $('#' + id).offset().top - 100;
			console.log( scrollTop );
			$('body').animate({ scrollTop: scrollTop }, 200);
		});

		// DISABLE SERIES 2 FROM MAIN PAGE UNTIL POST-SHOW
		var series = seriesSets[1];
		// seriesSets.forEach( function( series ) {
			series.artists.forEach( function( key ) {
				var artist = series.artist_info[ key ];
				var pieces = artist.pieces;

				var store = $('<div class="store show" id="' + key + '"></div>');
				$(store).append("<h3 class='store-title'>" + artist.name + "</h3>");

				var previews = $( '<div></div>' ).addClass( 'store-wrapper clearfix' );
				pieces.forEach( function( piece ) {
					var itemEl = "<div class='store-item' data-name='" + artist.name + "' data-piece='" + piece.name + "'><a href='img/" + series.tag + "/" + key + "/" + piece.tag + ".jpg' data-lightbox='" + key + "-gallery' data-title='" + piece.name + "'><img src='img/" + series.tag + "/" + key + "/" + piece.tag + "_thumb.jpg'/></a><h6 class='title'>" + piece.name + "</h6><input type='number'></div>";
					$( previews ).append( itemEl );
				});

				$( store ).append( previews );
				$( '#' + series.tag ).append( store );
			});
		// });

		if ( tongdao ) {
			$('.store-item').click(function(){
				tongdao.track('poster_viewed', {
					artist: $(this).data('name'),
					poster_name: $(this).data('piece')
				});
			});
		}
	}

	if ( window.location.pathname == '/store' || window.location.pathname.indexOf('store') > -1 ) {
		emailjs.init("user_17IFxUh62EclEap0rJrrN");

		// EVENTUALLY ADD SEPERATE PAGE FOR SERIES 1 PURCHASES
		// TODO: DISABLE OTTO POSTERS FROM STORE

		var series = seriesSets[0];
		// seriesSets.forEach( function( series ) {
			series.artists.forEach( function( key ) {
				var artist = series.artist_info[ key ];
				var pieces = artist.pieces;

				var store = $('<div class="store show" id="' + key + '"></div>');
				$(store).append("<h3 class='store-title'>" + artist.name + "</h3>");

				var previews = $( '<div></div>' ).addClass( 'store-wrapper clearfix' );
				pieces.forEach( function( piece ) {
					var itemEl = "<div class='store-item' data-name='" + artist.name + "' data-piece='" + piece.name + "'><a href='img/" + series.tag + "/" + key + "/" + piece.tag + ".jpg' data-lightbox='" + key + "-gallery' data-title='" + piece.name + "'><img src='img/" + series.tag + "/" + key + "/" + piece.tag + "_thumb.jpg'/></a><h6 class='title'>" + piece.name + "</h6><input type='number'></div>";
					$( previews ).append( itemEl );
				});

				$( store ).append( previews );
				$( '#' + series.tag ).append( store );
			});
		// });

		series.artists.forEach( function( key ) {
			var artist = series.artist_info[ key ];
			var pieces = artist.pieces;

			var store = $( '<div class="store" id="' + key + '"></div>' );

			$(store).append( "<h3 class='store-title'>" + artist.name+"</h3>" );

			var previews = $( '<div></div>' ).addClass( 'store-wrapper clearfix' );
			pieces.forEach( function( piece ) {
				var itemEl = "<div class='store-item' data-name='" + artist.name + "' data-piece='" + piece.name + "'><img src='img/" + series.tag + "/" + key + "/" + piece.tag + ".jpg'/><h6 class='title'>" + piece.name + "</h6><input type='number'></div>";
				$( previews ).append( itemEl );
			});

			$(store).append(previews);

			$('.wrapper').append(store);
		});

		$('.wrapper').append('<button class="submit-btn" id="submitChoices">Check Out</button>');

		$('#quantityInput').on( 'change', function(event) {
			if ( document.getElementById('quantityInput').value > 0 ) {
				$('#submitQuantity').addClass( 'active' );
			} else {
				$('#submitQuantity').removeClass( 'active' );
			}
		});

		$('#submitQuantity').click( function( event ) {
			console.log('click');
			console.log('here');
			quantity = document.getElementById('quantityInput').value;
			if ( quantity > 0 ) {
				$('.quantity-shade').removeClass('show');
				$('.store').addClass('show');
				$('#quantityInput').val("");
				console.log('here');
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

	if( window.lightbox ) {
		lightbox.option({
			resizeDuration: 200,
			imageFadeDuration: 200,
			alwaysShowNavOnTouchDevices: true,
			wrapAround: true,
			disableScrolling: true
	    })
	}

});