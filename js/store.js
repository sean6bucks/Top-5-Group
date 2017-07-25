'use strict'

$( document ).ready( function() {

	var quantity = 0,
		newOrder = {},
		orders = [];

	var seriesSets = [
		{
			name: 'Series 2',
			tag: 'series2',
			artists: [ 'beryl', 'sean', 'yulong', 'duofen', 'alessandro', 'yanzhen', 'garrett', 'zoe', 'jesse' ],
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
							tag: 'orange'
						},
						{
							name: 'Stephen King',
							tag: 'red'
						},
						{
							name: 'Brian Wilson',
							tag: 'turquoise'
						},
						{
							name: 'Larry David',
							tag: 'yellow'
						},
						{
							name: 'John Carpenter',
							tag: 'blue'
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

	emailjs.init("user_17IFxUh62EclEap0rJrrN");

	// EVENTUALLY ADD SEPERATE PAGE FOR SERIES 1 PURCHASES
	// TODO: DISABLE OTTO POSTERS FROM STORE

	var series = seriesSets[0];

	series.artists.forEach( function( key ) {
		var artist = series.artist_info[ key ];
		var pieces = artist.pieces;

		var store = $( '<div class="store" id="' + key + '"></div>' );

		$( store ).append( "<h3 class='store-title'>" + artist.name+"</h3>" );

		var previews = $( '<div></div>' ).addClass( 'store-wrapper clearfix' );
		pieces.forEach( function( piece ) {
			var itemEl = "<div class='store-item' data-name='" + artist.name + "' data-piece='" + piece.name + "'><img src='img/" + series.tag + "/" + key + "/" + piece.tag + "_thumb.jpg'/><h6 class='title'>" + piece.name + "</h6><input type='number'></div>";
			$( previews ).append( itemEl );
		});

		$( store ).append( previews );
		$( '#stores' ).append( store );
	});

	$( '#stores' ).append( '<button class="submit-btn" id="submitChoices">Check Out</button>' );

	$('#submitQuantity').click( function( event ) {
		quantity = document.getElementById('quantityInput').value;
		if ( quantity > 0 ) {
			$('.quantity-shade').removeClass('show');
			$('#stores').addClass('show');
			$('#quantityInput').val("");
		}
	});

	var selectedQuantity;
	$('.store-item img').click( function( event ) {
		selectedQuantity = 0;
		var parent = $(this).parent();
		$('.store-item.selected input').each(function() {
			selectedQuantity += parseInt( $(this).val() );
		});
		if( parent.hasClass('selected') ) {
			parent.removeClass('selected');
			selectedQuantity -= parseInt(parent.children('input').val());
			parent.children('input').val(0);
		} else if ( selectedQuantity < quantity ) {
			parent.addClass('selected');
			parent.children('input').val(1);
			selectedQuantity += 1
			if ( selectedQuantity == quantity ) {
				$('#submitChoices').addClass('active');
			}
		}
	});

	$( '#submitChoices' ).click( function() {
		if( !$(this).hasClass('active') ) return;

		selectedQuantity = 0;
		$( '.store-item.selected input' ).each(function(){
			selectedQuantity += parseInt($(this).val());
		});

		if ( selectedQuantity > quantity ) {
			if ( $('.store-item.selected') ) {
				var topScroll = $('.store-item.selected').offset().top;
				$( 'body' ).animate( { scrollTop: topScroll - 40 }, 200 );
				setTimeout( function(){ alert( 'Too many posters selected' ); }, 400 );
			}
			return;
		}

		newOrder.items = [];
		$( '.store-item.selected' ).each( function() {
			newOrder.items.push({
				artist: $(this).data('name'),
				title: $(this).data('piece'),
				quantity: parseInt($(this).children('input').val())
			});
		});

		$('.info-wrapper').addClass('show');
		window.scrollTo( 0, 0 );
		$('.customer-info').addClass('show');
		$('#stores').removeClass('show');
	});

	$('#backButton').click( function() {
		$('#stores').addClass('show');
		$('.info-wrapper').removeClass('show');
		$('.customer-info').removeClass('show');
		$('#stores').scrollTop(0);
	});

	var submitting = false;
	$( '#submitOrder' ).click( function() {
		if ( submitting ) return;
		submitting = true;
		var submitTries = 0;

		// check required fields
		var flag = false;
		$('.required').each(function(){
			if( !$(this).val() ) {
				$(this).addClass('has-error');
				flag = true;
			}
		});
		if ( flag ) {
			submitting = false;
			return;
		}

		newOrder.contact = {
			name: $('#contactName').val(),
			email: $('#contactEmail').val(),
			address: $('#contactAddress').val(),
			wechat: $('#contactWechat').val(),
			phone: $('#contactPhone').val()
		};

		console.log( newOrder );

		var loaderEl = '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
		$( '#submitOrder' ).html( loaderEl );

		var sendOrders = function() {
			// ORDER FUNCTIONS -------
			var completeOrder = function(response) {
				if ( response ) {
					console.log("SUCCESS. status=%d, text=%s", response.status, response.text );
				}
				// store any unsent messages in local
				if ( stashedOrders && stashedOrders.length )
					localStorage.stashedOrders = JSON.stringify( stashedOrders );
				else
					localStorage.stashedOrders = '';

				// show success message
				$('.customer-info').removeClass('show');
				window.scrollTo( 0, 0 );
				$('.success-message').addClass('show');
				$('#submitOrder').html("Submit");
				// reset form values
				$('#contactName').val("");
				$('#contactEmail').val("");
				$('#contactAddress').val("");
				$('#contactWechat').val("");
				$('#contactPhone').val("");

				// reset order object
				newOrder = {};
				quantity = 0;

				submitting = false;
				console.log( localStorage )
			};

			var stashOrder = function( order ) {
				stashedOrders.push( order );
				orders.splice( orders.length - 1, 1 );

				if ( orders && orders.length ) {
					sendEmail( orders[ orders.length - 1 ] );
					submitTries = 0;
				} else {
					completeOrder({ text: 'Order saved in Local Storage' });
				}
			};

			var sendEmail = function( order ) {
				emailjs.send( "outlook", "top5_order", order )
				.then(
					function( response ) {
						orders.splice( orders.length - 1, 1 );
						if ( orders && orders.length ) {
							sendEmail( orders[ orders.length - 1 ] );
							submitTries = 0;
						} else {
							completeOrder( response );
						}
					}, 
					function(err) {
						console.log("FAILED. error=", err);
						submitTries++;
						// If less than twice, try email again
						if ( submitTries < 2 ) {
							sendEmail( order );
						// else stash message in local and move on
						} else {
							stashOrder( order );
						}
					}
				);
			}

			// check for unsent local orders
			var stashedOrders = [];
			if ( localStorage.stashedOrders ) {
				stashedOrders = JSON.parse( localStorage.stashedOrders );
			}
			// if stashed add to orders array
			stashedOrders.forEach( function( order ) { orders.push( order ); } );
			stashedOrders = [];
			// add newOrder to array of orders
			orders.push( newOrder );

			if ( orders && orders.length ) {
				// send last order in array and begin send loop
				sendEmail( orders[ orders.length - 1 ] );
			}
		};

		sendOrders();
	});

	$('#submitReset').click(function(){
		quantity = 0;
		newOrder = {};
		$('#stores').scrollTop(0);
		$('.store-item').removeClass('selected');
		$('.store-item').children('input').val(0);
		$('.success-message').removeClass('show');
		$('.quantity-shade').addClass('show');
		$('.info-wrapper').removeClass('show');
	});

});

