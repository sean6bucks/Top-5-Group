'use strict'

$(document).ready(function(){

	var quantity = 0,
		order = {};

	var seriesSets = [
		{
			name: 'Series 2',
			tag: 'series2',
			colors: [ '#ffd304', '#f7893a', '#ce2738', '#152445', '#47d6d6' ],
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
							name: "Y'all Know About Killin'?",
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
							name: "I'll Swallow Your Soul",
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
			colors: [ '#ffda00', '#ec242e', '#169cc2', '#603256', '#d3184d' ],
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

	$('.top_nav').click(function(event){
		if ( $(event.target).hasClass('active') ) return;
		$( '.top_nav' ).removeClass('active');
		$(event.target).addClass('active');

		var id = event.target.id.replace(/_nav/g, '');
		console.log( $('#' + id) );
		var scrollTop = $('#' + id).offset().top - 19;
		console.log( scrollTop );
		$('body').animate({ scrollTop: scrollTop }, 200);
	});

	$( '#about-more' ).click( function( event ) {
		$( '#about-more-block' ).addClass('show');
	});
	$( '#about-close' ).click( function( event ) {
		$( '#about-more-block' ).removeClass('show');
	});

	// DISABLE SERIES 2 FROM MAIN PAGE UNTIL POST-SHOW
	var series = seriesSets[1];
	seriesSets.forEach( function( series ) {

		var colorBar = $( '<div></div>' ).addClass( 'color-bar' );
		series.colors.forEach( function( color ) {
			colorBar.append('<div class="color-block" style="background: ' + color + '"></div>')
		});
		$( '#' + series.tag ).append( colorBar );
		$( '#' + series.tag ).append('<h1 class="text-center">' + series.name + '</h1>');
		
		series.artists.forEach( function( key ) {
			var artist = series.artist_info[ key ];
			var pieces = artist.pieces;

			var store = $( '<div class="store show artist-set" id="' + key + '"></div>' );
			$(store).append("<h3 class='artist-name'>" + artist.name + "</h3>");


			var previews = $( '<div></div>' ).addClass( 'store-wrapper clearfix' );
			$( previews ).append("<div class='click-enlarge'>click images to englarge 点击图片放大</div>");
			pieces.forEach( function( piece ) {
				var itemEl = "<div class='store-item' data-name='" + artist.name + "' data-piece='" + piece.name + "'><a href='img/" + series.tag + "/" + key + "/" + piece.tag + ".jpg' data-lightbox='" + key + "-gallery' data-title='" + piece.name + "'><img src='img/" + series.tag + "/" + key + "/" + piece.tag + "_thumb.jpg'/></a><h6 class='title'>" + piece.name;
				$( previews ).append( itemEl );
			});

			$( store ).append( previews );
			$( '#' + series.tag ).append( store );
		});
	});

	$( window ).scroll( function() {
		var scrollTop = ( $(window).scrollTop() + 20 );
		var scroll2 = $('#series2')[0].offsetTop;
		var scroll1 = $('#series1')[0].offsetTop;
		if ( scrollTop > scroll2 && scrollTop < scroll1 ) {
			$('#series2 .color-bar').addClass( 'fixed' );
			$('#series1 .color-bar').removeClass( 'fixed' );
		} else if ( scrollTop > scroll1 ) {
			$('#series1 .color-bar').addClass( 'fixed' );
			$('#series2 .color-bar').removeClass( 'fixed' );
		} else {
			$( '.section .color-bar' ).removeClass( 'fixed' );
		}
	});

	if ( window.tongdao ) {
		$('.store-item').click(function(){
			tongdao.track('poster_viewed', {
				artist: $(this).data('name'),
				poster_name: $(this).data('piece')
			});
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