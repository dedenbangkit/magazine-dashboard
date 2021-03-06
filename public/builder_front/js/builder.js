/* SETTINGS */

var pageContainer = "#page";
var editableItems = new Array();

editableItems['.frameCover'] = [];
editableItems['span.fa'] = ['color', 'font-size'];
editableItems['.bg.bg1'] = ['background-color', 'background-size'];
editableItems['nav a, a.edit'] = ['color', 'font-weight', 'text-transform'];
editableItems['h1'] = ['background-color', 'text-align', 'font-family', 'text-transform'];
editableItems['h2'] = ['background-color', 'text-align', 'font-family', 'text-transform'];
editableItems['h3'] = ['background-color', 'text-align', 'font-family', 'text-transform'];
editableItems['h4'] = ['background-color', 'text-align', 'font-family', 'text-transform'];
editableItems['h5'] = ['background-color', 'text-align', 'font-family', 'text-transform'];
editableItems['p'] = ['column-count','background-color','text-align', 'text-indent', 'font-family', 'padding', 'border-radius'];
editableItems['a.btn'] = ['border-radius', 'font-size', 'background-color'];
editableItems['img'] = ['opacity','border-radius','float','padding', 'border-color', 'border-style', 'border-width'];
editableItems['.carousels'] = [];
editableItems['.panimage'] = [];
editableItems['hr.dashed'] = ['border-color', 'border-width'];
editableItems['.divider > span'] = ['color', 'font-size'];
editableItems['hr.shadowDown'] = ['margin-top', 'margin-bottom'];
editableItems['.footer a'] = ['color'];
editableItems['.bg.bg1, .bg.bg2'] = ['background-image','background-color','background-size'];
editableItems['.column'] = ['height','background-color','background-size','opacity', 'border-color', 'border-style', 'border-width', 'padding', 'border-radius'];
editableItems['.page'] = ['background-color','background-size','border-color', 'border-style', 'border-width', 'padding','border-radius'];
editableItems['#nivoSlider img.edit'] = [];

var editableItemOptions = new Array();

editableItemOptions['nav a : font-weight'] = ['400', '700'];
editableItemOptions['a.btn : border-radius'] = ['0px', '4px', '10px'];
editableItemOptions['img : border-radius'] = ['0px', '10px', '20px', '30px', '100%'];
editableItemOptions['img : padding'] = ['0px', '5px', '10px', '20px'];
editableItemOptions['img : border-style'] = ['none', 'dotted', 'dashed', 'solid'];
editableItemOptions['img : border-width'] = ['1px', '2px', '3px', '4px'];
editableItemOptions['img : float'] = ['none', 'left', 'right'];
editableItemOptions['img : opacity'] = ['1','0.9','0.8','0.7'];
editableItemOptions['.column : border-style'] = ['none', 'dotted', 'dashed', 'solid'];
editableItemOptions['.column : border-width'] = ['1px', '2px', '3px', '4px'];
editableItemOptions['.column : border-radius'] = ['0px', '4px', '10px', '100%'];
editableItemOptions['.column : background-size'] = ['cover', 'contain', 'initial'];

editableItemOptions['p : text-align'] = ['left','right','center','justify'];
editableItemOptions['p : border-radius'] = ['0px', '4px', '10px', '100%'];
editableItemOptions['h1 : text-align'] = ['left','right','center'];
editableItemOptions['h2 : text-align'] = ['left','right','center'];
editableItemOptions['h3 : text-align'] = ['left','right','center'];
editableItemOptions['h4 : text-align'] = ['left','right','center'];
editableItemOptions['h5 : text-align'] = ['left','right','center'];

editableItemOptions['p : text-indent'] = ['0px','10px','20px','30px','40px'];
editableItemOptions['p : padding'] = ['0px','10px','20px','30px','40px'];
editableItemOptions['p : column-count'] = ['1','2','3','4'];

editableItemOptions['h1 : font-family'] = ['Lato', 'Helvetica', 'Arial', 'Times New Roman', 'Book Antiqua', 'Andale Mono', 'Georgia'];
editableItemOptions['h2 : font-family'] = ['Lato', 'Helvetica', 'Arial', 'Times New Roman', 'Book Antiqua', 'Andale Mono', 'Georgia'];
editableItemOptions['h3 : font-family'] = ['Lato', 'Helvetica', 'Arial', 'Times New Roman', 'Book Antiqua', 'Andale Mono', 'Georgia'];
editableItemOptions['h4 : font-family'] = ['Lato', 'Helvetica', 'Arial', 'Times New Roman', 'Book Antiqua', 'Andale Mono', 'Georgia'];
editableItemOptions['h5 : font-family'] = ['Lato', 'Helvetica', 'Arial', 'Times New Roman', 'Book Antiqua', 'Andale Mono', 'Georgia'];
editableItemOptions['p : font-family'] = ['Lato', 'Helvetica', 'Arial', 'Times New Roman', 'Book Antiqua', 'Andale Mono', 'Georgia'];

editableItemOptions['h1 : text-transform'] = ['UPPERCASE', 'lowercase', 'Capitalize'];
editableItemOptions['h2 : text-transform'] = ['UPPERCASE', 'lowercase', 'Capitalize'];
editableItemOptions['h3 : text-transform'] = ['UPPERCASE', 'lowercase', 'Capitalize'];
editableItemOptions['h4 : text-transform'] = ['UPPERCASE', 'lowercase', 'Capitalize'];
editableItemOptions['h5 : text-transform'] = ['UPPERCASE', 'lowercase', 'Capitalize'];
var editableContent = ['.editContent', '.navbar a', 'button', 'a.btn', '.footer a:not(.fa)', '.tableWrapper'];

/* FLAT UI PRO INITS */

$(function(){
	// Tabs
	$(".nav-tabs a").on('click', function (e) {
	  e.preventDefault();
	  $(this).tab("show");
	})
})

$('#wrapper').click(
function(){
	bindHeightWidth();
});


/* END SETTINGS */

var mainMenuWidth = 230;
var secondMenuWidth = 300;

function bindHeightWidth(){
	screenWidth = $('#screen').width();
		$.each($('.container li.element'),
			function(){
				$('iframe').css({'width':screenWidth});
          newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
				if (typeof newHeight !== undefined){
				$(this).find('iframe').css({'height':newHeight});
				$(this).css({'height':newHeight});
				}
		});
		$('#screen').css({'height': $('#screen ul').innerHeight});
}

function checkPageAvailability(){
	if($("iframe").length > 1) {
  	alert('available');
	}
}

function autoBindHeight() {
    setTimeout(function () {
        bindHeightWidth();
        autoBindHeight();
    }, 3000);
}

$( window ).load(function() {
	$('#loader').fadeOut();
	$('header').animateCss('fadeInDown').promise().done(function() {
    $('#screen').animateCss('fadeInUp').promise().done(function() {
			$('ul#elements').animateCss('fadeInUp');
		});
  });
});


var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function pageEmpty() {
	if( $('#pageList ul:visible > li').size() == 0 ) {
		$('#start').show();
		$('#frameWrapper').addClass('empty');
	} else {
		$('#start').hide();
		$('#frameWrapper').removeClass('empty');
	}
}

function allEmpty() {
	var allEmpty = false;
	if( $('#pageList li').size() == 0 ) {
		allEmpty = true;
	} else {
		allEmpty = false;
	}
	if( allEmpty ) {
		$('a.actionButtons').each(function(){
			$(this).addClass('disabled');
		});
		$('header .modes input').each(function(){
			// $(this).prop('disabled', true).parent().addClass('disabled');
		});
	} else {
		$('header .modes input').each(function(){
			$(this).prop('disabled', false).parent().removeClass('disabled');
		});
		$('a.actionButtons').each(function(){
			$(this).removeClass('disabled');
		});
	}
}


function makeDraggable(theID) {
	$('#second #elements li').each(function(){
		$(this).draggable({
			helper: function() {
				return $('<div style="height: 100px; width: 300px; background: #F9FAFA; box-shadow: 5px 5px 1px rgba(0,0,0,0.1); text-align: center; line-height: 100px; font-size: 28px; color: #16A085"><span class="fui-list"></span></div>');
			},
			revert: 'invalid',
			appendTo: 'body',
			connectToSortable: theID,
			stop: function(){
				pageEmpty();
				allEmpty();
			},
			start: function(){
				//switch to block mode
				$('input:radio[name=mode]').parent().addClass('disabled');
				$('input:radio[name=mode]#modeBlock').radio('check');
				// Trigger for Clicking Body to close all active element tinymce
				$.each($('.container li.element'),
					function(){
				 $(this).find('iframe')[0].contentWindow.document.body.click();
				});
				//show all iframe covers and activate designMode
				$('#pageList ul .zoomer-wrapper .zoomer-cover').each(function(){
					$(this).show();
				})
				//deactivate designmode
				$('#pageList ul li iframe').each(function(){
					this.contentDocument.designMode = "off";
				})
			}
		});
	})
	$('#elements li a').each(function(){
		$(this).unbind('click').bind('click', function(e){
			e.preventDefault();
		})
	})
}
var frameContents = '';//holds frame contents
function makeSortable(el) {
	el.sortable({
		revert: true,
		placeholder: "drop-hover",
		handle: ".frameCover",
		beforeStop: function(event, ui){
			if( ui.item.find('.frameCover').size() == 0 ) {
				if( ui.item.find('iframe').size() > 0 ) {//iframe thumbnails
					theHeight = ui.item.height();
					var attr = ui.item.find('iframe').attr('data-sandbox');
					if (typeof attr !== typeof undefined && attr !== false) {
						//sandboxed
						theID = getRandomArbitrary(10000, 1000000000);
						sandboxedFrame = $('<iframe src="'+ui.item.find('iframe').attr('src')+'" id="'+theID+'" sandbox="allow-same-origin"></iframe>');
						$('#sandboxes').append( sandboxedFrame );
						if (typeof ui.item.find('iframe').attr('data-loaderfunction') !== typeof undefined && ui.item.find('iframe').attr('data-loaderfunction') !== false) {
							loaderFunction_ = 'data-loaderfunction="'+ui.item.find('iframe').attr('data-loaderfunction')+'"';
						}
						ui.item.html('<iframe src="'+ui.item.find('iframe').attr('src')+'" scrolling="no" frameborder="0" data-sandbox="'+theID+'" '+loaderFunction_+'><iframe>');
					} else {
						ui.item.html('<iframe src="'+ui.item.find('iframe').attr('src')+'" scrolling="no" frameborder="0"><iframe>');
					}
					ui.item.find('iframe').uniqueId();
					ui.item.find('iframe').height(theHeight+"px");
				} else {//image thumbnails
					theHeight = ui.item.find('img').attr('data-height');
					//is this iframe to be sandboxed?
					var attr = ui.item.find('img').attr('data-sandbox');
					if (typeof attr !== typeof undefined && attr !== false) {
						//sandboxed
						theID = getRandomArbitrary(10000, 1000000000);
						sandboxedFrame = $('<iframe src="'+ui.item.find('img').attr('data-srcc')+'" id="'+theID+'" sandbox="allow-same-origin"></iframe>');
						$('#sandboxes').append( sandboxedFrame );
						if (typeof ui.item.find('img').attr('data-loaderfunction') !== typeof undefined && ui.item.find('img').attr('data-loaderfunction') !== false) {
							loaderFunction_ = 'data-loaderfunction="'+ui.item.find('img').attr('data-loaderfunction')+'"';
						}
						ui.item.html('<iframe src="'+ui.item.find('img').attr('data-srcc')+'" scrolling="no" frameborder="0" data-sandbox="'+theID+'" '+loaderFunction_+'><iframe>');
					} else {
						ui.item.html('<iframe src="'+ui.item.find('img').attr('data-srcc')+'" scrolling="no" frameborder="0"><iframe>');
					}
					ui.item.find('iframe').uniqueId();
					ui.item.find('iframe').height(theHeight+"px");
					ui.item.find('iframe').css('background', '#ffffff url(builder_front/images/loading.gif) 50% 50% no-repeat');
					ui.item.find('iframe').load(function(){
						heightAdjustment( ui.item.find('iframe').attr('id'), true );
					})
				}

				//add a delete button
				delButton = $('<button type="button" class="btn btn-danger deleteBlock"><i class="fui-trash"></i></button>');
				resetButton = $('<button type="button" class="btn btn-warning resetBlock"><i class="fa fa-refresh"></i> reset</button>');
				htmlButton = $('<button type="button" class="btn btn-inverse htmlBlock"><i class="fa fa-code"></i> source</button>');
				frameCover = $('<div class="frameCover"></div>');
				frameCover.append( delButton );
				//frameCover.append( resetButton );
				//frameCover.append( htmlButton );
				ui.item.append( frameCover );
			} else {
				//sorted
				ui.item.find('iframe').load(function(){
					$(this).contents().find( pageContainer ).html( frameContents )
				})
			}
		},
		stop: function(){
			$('#pageList ul:visible li').each(function(){
				$(this).find('.zoomer-cover > a').remove();
			});
		},
		start: function(event, ui){
			if( ui.item.find('.frameCover').size() != 0 ) {
				frameContents = ui.item.find('iframe').contents().find( pageContainer ).html();
			}
		},
		over: function(){
			$('#start').hide();
		}
	});

}


function buildeStyleElements(el, theSelector) {
	for( x=0; x<editableItems[theSelector].length; x++ ) {
		//create style elements
		//alert( $(el).get(0).tagName )
		newStyleEl = $('#styleElTemplate').clone();
		newStyleEl.attr('id', '');
		newStyleEl.find('.control-label').text( editableItems[theSelector][x]+":" );
		if( theSelector+" : "+editableItems[theSelector][x] in editableItemOptions) {//we've got a dropdown instead of open text input
			//alert( theSelector+" "+editableItems[kkey][x] )
			newStyleEl.find('input').remove();
			newDropDown = $('<select></select>');
			newDropDown.attr('name', editableItems[theSelector][x]);
			for( z=0; z<editableItemOptions[ theSelector+" : "+editableItems[theSelector][x] ].length; z++ ) {
				newOption = $('<option value="'+editableItemOptions[theSelector+" : "+editableItems[theSelector][x]][z]+'">'+editableItemOptions[theSelector+" : "+editableItems[theSelector][x]][z]+'</option>');
				if( editableItemOptions[theSelector+" : "+editableItems[theSelector][x]][z] == $(el).css( editableItems[theSelector][x] ) ) {
					//current value, marked as selected
					newOption.attr('selected', 'true')
				}
				newDropDown.append( newOption )
			}
			newStyleEl.append( newDropDown );
			newDropDown.selectpicker({style: 'btn-sm btn-inverse btn-embossed', menuStyle: 'dropdown-inverse'});
		} else {
			newStyleEl.find('input').val( $(el).css( editableItems[theSelector][x] ) ).attr('name', editableItems[theSelector][x])
			if( editableItems[theSelector][x].indexOf("color") > -1 ) {
				//alert( editableItems[theSelector][x]+" : "+$(el).css( editableItems[theSelector][x] ) )
				if( $(el).css( editableItems[theSelector][x] ) != 'transparent' && $(el).css( editableItems[theSelector][x] ) != 'none' && $(el).css( editableItems[theSelector][x] ) != '' ) {
					newStyleEl.val( $(el).css( editableItems[theSelector][x] ) )
				}
				newStyleEl.find('input').spectrum({
					preferredFormat: "rgb",
					showPalette: true,
					allowEmpty: true,
					showInput: true,
					showAlpha: true,
					palette: [
						["#000000","#444444","#666666","#999999","#cccccc","#eeeeee","#f3f3f3","#ffffff"],
						["#f20000","#ff9000","#ff0000","#00f200","#00f2f2","#2f2fff","#7400c2","#ff00b5"],
						["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
						["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
						["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
						["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
						["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
						["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
					]
				});
			}
		}
		newStyleEl.css('display', 'block');
		$('#styleElements').append( newStyleEl );
		$('#styleEditor form#stylingForm').height('auto')
	}
}

function getParentFrameID(el) {
	theID = '';
	$('#pageList li:visible iframe').each(function(){
		theBody = $(this).contents().find('body');
		if( $.contains( document.getElementById( $(this).attr('id') ).contentWindow.document, el ) ) {
			theID = $(this).attr('id');
		}
	})
	if( theID != '' ) {
		return theID;
	}
}


function heightAdjustment(el, par) {
	par = typeof par !== 'undefined' ? par : false;
	if( par == false ) {
		$('#pageList li:visible iframe').each(function(){
			theBody = $(this).contents().find('body');
			if( $.contains( document.getElementById( $(this).attr('id') ).contentWindow.document, el ) ) {
				frameID = $(this).attr('id');
			}
		})
		theFrame = document.getElementById(frameID);
	} else {
		theFrame = document.getElementById(el)
	}
	//realHeight = theFrame.contentWindow.document.body.offsetHeight;
	realHeight = theFrame.contentWindow.document.body.offsetHeight;
	//alert(theFrame.contentWindow.document.body.offsetHeight)
	$(theFrame).height( realHeight+"px" );
	$(theFrame).parent().height( (realHeight)+"px" );
	$(theFrame).next().height( (realHeight)+"px" );
	//$(theFrame).parent().parent().height( (realHeight)+"px" );
}

function hasSandbox(el) {
	var attr = $('#'+getParentFrameID( el.get(0) )).attr('data-sandbox');
	if (typeof attr !== typeof undefined && attr !== false) {
		return attr;
	} else {
		return false;
	}
}

var _oldIcon = new Array();

function styleClick(el) {
	theSelector = $(el).attr('data-selector');
	$('#editingElement').text( theSelector );

	//activate first tab
	$('#detailTabs a:first').click();

	//hide all by default

	$('a#css_Setup').show();
	$('a#link_Link').parent().hide();
	$('a#img_Link').parent().hide();
	$('a#bg_Link').parent().hide();
	$('a#slide_Link').parent().hide();
	$('a#360_Link').parent().hide();
	$('a#icon_Link').parent().hide();
	$('a#video_Link').parent().hide();
	$('a#audio_Link').parent().hide();

	//is the element an ancor tag?
	if( $(el).prop('tagName') == 'A' || $(el).parent().prop('tagName') == 'A' ) {
		$('a#css_Setup').show();
		$('a#img_Link').hide();
		$('a#bg_Link').hide();
		$('a#slide_Link').hide();
		$('a#360_Link').hide();
		$('a#link_Link').parent().show();
		if( $(el).prop('tagName') == 'A' ) {
			theHref = $(el).attr('href');
		} else if( $(el).parent().prop('tagName') == 'A' ) {
			theHref = $(el).parent().attr('href');
		}
		zIndex = 0;
		pageLink = false;

		//the actual select
		$('select#internalLinksDropdown').prop('selectedIndex', 0);
		$('select#internalLinksDropdown option').each(function(){
			if( $(this).attr('value') == theHref ) {
				$(this).attr('selected', true);
				zIndex = $(this).index();
				pageLink = true;
			}
		})

		//the pretty dropdown
		$('.link_Tab .btn-group.select .dropdown-menu li').removeClass('selected');
		$('.link_Tab .btn-group.select .dropdown-menu li:eq('+zIndex+')').addClass('selected');
		$('.link_Tab .btn-group.select:eq(0) .filter-option').text( $('select#internalLinksDropdown option:selected').text() )
		$('.link_Tab .btn-group.select:eq(1) .filter-option').text( $('select#pageLinksDropdown option:selected').text() )
		if( pageLink == true ) {
			$('input#internalLinksCustom').val('');
		} else {
			if( $(el).prop('tagName') == 'A' ) {
				if( $(el).attr('href')[0] != '#' ) {
					$('input#internalLinksCustom').val( $(el).attr('href') )
				} else {
					$('input#internalLinksCustom').val( '' )
				}
			} else if( $(el).parent().prop('tagName') == 'A' ) {
				if( $(el).parent().attr('href')[0] != '#' ) {
					$('input#internalLinksCustom').val( $(el).parent().attr('href') )
				} else {
					$('input#internalLinksCustom').val( '' )
				}
			}
		}
		//list available blocks on this page, remove old ones first
		$('select#pageLinksDropdown option:not(:first)').remove();
		$('#pageList ul:visible iframe').each(function(){
			if( $(this).contents().find( pageContainer + " > *:first" ).attr('id') != undefined ) {
				if( $(el).attr('href') == '#'+$(this).contents().find( pageContainer + " > *:first" ).attr('id') ) {
					newOption = '<option selected value=#'+$(this).contents().find( pageContainer + " > *:first" ).attr('id')+'>#'+$(this).contents().find( pageContainer + " > *:first" ).attr('id')+'</option>';
				} else {
					newOption = '<option value=#'+$(this).contents().find( pageContainer + " > *:first" ).attr('id')+'>#'+$(this).contents().find( pageContainer + " > *:first" ).attr('id')+'</option>';
				}
				$('select#pageLinksDropdown').append( newOption );
			}
		})
	}

	if( $(el).attr('data-type') == 'video' ) {
		$('a#css_Setup').hide();
		$('a#img_Link').hide();
		$('a#bg_Link').hide();
		$('a#360_Link').hide();
		$('a#video_Link').parent().show();
		$('a#video_Link').click();
		addStyling();
		//inject current video ID,check if we're dealing with Youtube or Vimeo
		if( $(el).prev().attr('src').indexOf("vimeo.com") > -1 ) {//vimeo
			match = $(el).prev().attr('src').match(/player\.vimeo\.com\/video\/([0-9]*)/);
			//console.log(match);
			$('#video_Tab input#vimeoID').val( 'https://vimeo.com/'+ match[match.length-1] );
			$('#video_Tab input#youtubeID').val('');
		} else {
			var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
			$('#video_Tab input#youtubeID').val($(el).prev().attr('src'));
			$('#video_Tab input#vimeoID').val('');
		}
	}

	if( $(el).attr('data-type') == 'audio' ) {
		$('a#css_Setup').hide();
		$('a#img_Link').hide();
		$('a#bg_Link').hide();
		$('a#audio_Link').parent().show();
		$('a#audio_Link').click();
		addStyling();
			$('.audioFileTab').find('input#audioURL').val( $(el).prev().children('source').attr('src') )
			$('.audioFileTab').find('a.fileinput-exists').click();
	}

	if( $(el).prop('tagName') == 'IMG' ){
		$('a#css_Setup').show();
		$('a#img_Link').show();
		$('a#bg_Link').hide();
		$('a#slide_Link').hide();
		$('a#360_Link').hide();
		$('a#img_Link').parent().show();
		//set the current SRC
		$('.imageFileTab').find('input#imageURL').val( $(el).attr('src') );
		//reset the file upload
		$('.imageFileTab').find('a.fileinput-exists').click();
	}

	if( $(el).hasClass('panimage')){
		$('a#css_Setup').hide();
		$('a#360_Link').show();
		$('a#img_Link').hide();
		$('a#bg_Link').hide();
		$('a#slide_Link').hide();
		$('a#360_Link').parent().show();
		$('a#360_Link').click();
		//set the current SRC
		$('.360FileTab').find('input#360URL').val( $(el).children().css('background-image') );
		//reset the file upload
		$('.360FileTab').find('a.fileinput-exists').click();
	}

	if( $(el).hasClass('container') ){
		$('a#css_Setup').show();
		$('a#bg_Link').show();
		$('a#img_Link').hide();
		$('a#slide_Link').hide();
		$('a#360_Link').hide();
		$('a#bg_Link').parent().show();
		addStyling();
		//set the current SRC
		$('.bgFileTab').find('input#bgURL').val( $(el).css('background-image') )
		//reset the file uploa
		$('.bgFileTab').find('a.fileinput-exists').click();
	}

	if( $(el).hasClass('carousels') ){
		$('a#css_Setup').hide();
		$('a#slide_Link').show();
		$('a#bg_Link').hide();
		$('a#img_Link').hide();
		$('a#360_Link').hide();
		$('a#slide_Link').parent().show();
		$('a#slide_Link').parent().addClass('active');
		$('.slideFileTab').addClass('active');
		addStyling();
		//set the current SRC
		$('.slideFileTab').find('input#slideURL').val( $(el).attr('src') );
		//reset the file upload
		$('.slideFileTab').find('a.fileinput-exists').click();
	}

	if( $(el).hasClass('column') ){
		$('a#css_Setup').show();
		$('a#bg_Link').show();
		$('a#img_Link').hide();
		$('a#slide_Link').hide();
		$('a#360_Link').hide();
		$('a#bg_Link').parent().show();
		addStyling();
		//set the current SRC
		$('.bgFileTab').find('input#bgURL').val( $(el).css('background-image') )
		//reset the file uploa
		$('.bgFileTab').find('a.fileinput-exists').click();
	}

	if( $(el).hasClass('fa') ) {
		$('a#css_Setup').show();
		$('a#icon_Link').parent().show();
		//get icon class name, starting with fa
		var get = $.grep(el.className.split(" "), function(v, i){
			return v.indexOf('fa-') === 0;
		}).join();
		$('select#icons option').each(function(){
			if( $(this).val() == get ) {
				$(this).attr('selected', true);
				$('#icons').trigger('chosen:updated');
			}
		})
	}

	//$(el).addClass('builder_active');
	//remove borders from other elements
	$('#pageList ul:visible li iframe').each(function(){
		//remove borders
		for( var key in editableItems ) {
			$('#editingMode').data('editingStyle');
			$(this).contents().find( pageContainer + ' '+ key ).css({'outline': 'none', 'cursor': 'default'});
			$(this).contents().find( pageContainer + ' '+ key ).hover( function(e){
				e.stopPropagation();
				if( $(this).closest('body').width() != $(this).width() ) {
					$(this).css({'outline': '3px dashed red', 'cursor': 'pointer'});
				} else {
					$(this).css({'outline': '3px dashed red', 'outline-offset': '-3px', 'cursor': 'pointer'});
				}
			}, function(){
				if( $(this).closest('body').width() != ($(this).width()+6) ) {
					$(this).css({'outline': '', 'cursor': ''});
				} else {
					$(this).css({'border': '', 'cursor': '', 'outline-offset': ''});
				}
			})
		}
	});
	//unbind event
	$(el).unbind('mouseenter mouseleave');
	if( $(el).closest('body').width() != $(el).width() ) {
		$(el).css({'outline': '3px dashed red', 'cursor': 'pointer'});
	} else {
		$(el).css({'outline': '3px dashed red', 'outline-offset':'-3px',  'cursor': 'pointer'});
	}
	//remove all style attributes
	$('#styleElements > *:not(#styleElTemplate)').each(function(){
		$(this).remove();
	})

	//load the attributes
	buildeStyleElements(el, theSelector)
	//show style editor if hidden
	if( $('#styleEditor').css('left') == '-300px' ) {
		$('#editingMode').removeData('editingStyle');
		$('#styleEditor').animate({'left': '0px'}, 250);
		$('#editingMode').addClass('btn-danger');
		$('#editingMode').removeClass('btn-info');
		$('#editingMode').removeData('editing-mode');
	}
	$('#styleElements').click(function(){
		$('button#saveStyling').click();
	});

	//save button
	$('button#saveStyling').change().unbind('click').bind('click', function(){
		$('#styleEditor #tab1 .form-group:not(#styleElTemplate) input, #styleEditor #tab1 .form-group:not(#styleElTemplate) select').each(function(){
			//alert( $(this).attr('name')+":"+$(this).val() )
			$(el).css( $(this).attr('name'),  $(this).val());

			/* SANDBOX */
			sandboxID = hasSandbox($(el))
			if( sandboxID ) {
				elementID = $(el).attr('id');
				$('#'+sandboxID).contents().find('#'+elementID).css( $q )
			}
			/* END SANDBOX */
		})

		screenWidth = $('#screen').width();
		$.each($('.container li.element'),
			function(){
				$('iframe').css({'width':screenWidth});
				newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
				$(this).find('iframe').css({'height':newHeight});
				$(this).css({'height':newHeight});
		});
		$('#screen').css({'height': $('#screen ul').innerHeight});

		//links
		if( $(el).prop('tagName') == 'A' ) {
			//change the href prop?
			if( $('select#internalLinksDropdown').val() != '#' ) {
				$(el).attr('href', $('select#internalLinksDropdown').val());
			} else if( $('select#pageLinksDropdown').val() != '#' ) {
				$(el).attr('href', $('select#pageLinksDropdown').val() );
			} else if( $('input#internalLinksCustom').val() != '' ) {
				$(el).attr('href', $('input#internalLinksCustom').val());
			}
			/* SANDBOX */
			sandboxID = hasSandbox( $(el) )
			if( sandboxID ) {
				elementID = $(el).attr('id');
				if( $('select#internalLinksDropdown').val() != '#' ) {
					$('#'+sandboxID).contents().find('#'+elementID).attr('href', $('select#internalLinksDropdown').val());
				} else if( $('select#pageLinksDropdown').val() != '#' ) {
					$('#'+sandboxID).contents().find('#'+elementID).attr('href', $('select#pageLinksDropdown').val() );
				} else if( $('input#internalLinksCustom').val() != '' ) {
					$('#'+sandboxID).contents().find('#'+elementID).attr('href', $('input#internalLinksCustom').val());
				}
			}
			/* END SANDBOX */
		}

		if( $(el).parent().prop('tagName') == 'A' ) {
			//change the href prop?
			if( $('select#internalLinksDropdown').val() != '#' ) {
				$(el).parent().attr('href', $('select#internalLinksDropdown').val());
			} else if( $('select#pageLinksDropdown').val() != '#' ) {
				$(el).parent().attr('href', $('select#pageLinksDropdown').val() );
			} else if( $('input#internalLinksCustom').val() != '' ) {
				$(el).parent().attr('href', $('input#internalLinksCustom').val());
			}

			/* SANDBOX */
			sandboxID = hasSandbox( $(el) )
			if( sandboxID ) {
				elementID = $(el).attr('id');
				if( $('select#internalLinksDropdown').val() != '#' ) {
					$('#'+sandboxID).contents().find('#'+elementID).parent().attr('href', $('select#internalLinksDropdown').val());
				} else if( $('select#pageLinksDropdown').val() != '#' ) {
					$('#'+sandboxID).contents().find('#'+elementID).parent().attr('href', $('select#pageLinksDropdown').val() );
				} else if( $('input#internalLinksCustom').val() != '' ) {
					$('#'+sandboxID).contents().find('#'+elementID).parent().attr('href', $('input#internalLinksCustom').val());
				}
			}
			/* END SANDBOX */
		}

		//Audio

		if( $('a#audio_Link').css('display') == 'block' ) {
		  //no audio to upload, just a SRC change
		  if( $('input#audioURL').val() != '' && $('input#audioURL').val() != $(el).attr('src') ) {
		    $(el).prev().children('source').attr('src', $('input#audioURL').val());
				$(el).prev().load();
		    /* SANDBOX */
		    sandboxID = hasSandbox( $(el) )
		    if( sandboxID ) {
		      elementID = $(el).attr('id').prev().children('source');
		      $('#'+sandboxID).contents().find('#'+elementID).attr('src', $('input#audioURL').val());
		    }
		  }
		}

		//do we need to upload an image?
		if( $('a#img_Link').css('display') == 'block' && $('input#imageFileField').val() != '' ) {
		  var form = $('form#imageUploadForm');
		  var formdata = false;
		  if (window.FormData){
		    formdata = new FormData(form[0]);
		  }
			console.log(form);
		        $(el).attr('src', "/builder_front/images/loading.gif").css("width", "100%");
		  var formAction = form.attr('action');
		  $.ajax({
		    url : formAction,
		    data : formdata ? formdata : form.serialize(),
		    cache : false,
		    contentType : false,
		    processData : false,
		    dataType: "json",
		    type : 'POST',
		  }).done(function(response){
		    if( response.code == 1 ) {//success
		      $('input#imageURL').val( response.response );
		      if( $(el).prop('tagName') == 'IMG' ){
		      $(el).attr('src', response.response);
		      }
		      //reset the file upload
		      $('.imageFileTab').find('a.fileinput-exists').click();
		      /* SANDBOX */
		      sandboxID = hasSandbox( $(el) )
		      if( sandboxID ) {
		        if( $(el).prop('tagName') == 'IMG' ){
		        elementID = $(el).attr('id');
		        $('#'+sandboxID).contents().find('#'+elementID).attr('src', response.response);
		        }
		      }
		      /* END SANDBOX */
		    } else if( response.code == 0 ) {//error
		      alert('Something went wrong: '+response.response)
		    }
		  })
		} else if( $('a#img_Link').css('display') == 'block' ) {
		  //no image to upload, just a SRC change
		  if( $('input#imageURL').val() != '' && $('input#imageURL').val() != $(el).attr('src') ) {
		    $(el).attr('src', $('input#imageURL').val());
		    /* SANDBOX */
		    sandboxID = hasSandbox( $(el) )
		    if( sandboxID ) {
		      elementID = $(el).attr('id');
		      $('#'+sandboxID).contents().find('#'+elementID).attr('src', $('input#imageURL').val());
		    }
		  }
		}

		//do we need to upload background?
		if( $('a#bg_Link').css('display') == 'block' && $('input#bgFileField').val() != '' ) {
		  var form = $('form#bgUploadForm');
		  var formdata = false;
		  if (window.FormData){
		    formdata = new FormData(form[0]);
		  }
			console.log(form);
		        $(el).css('background-image', 'url("/builder_front/images/loading.gif")');
		  var formAction = form.attr('action');
		  $.ajax({
		    url : formAction,
		    data : formdata ? formdata : form.serialize(),
		    cache : false,
		    contentType : false,
		    processData : false,
		    dataType: "json",
		    type : 'POST',
		  }).done(function(response){
		    if( response.code == 1 ) {//success
		      $('input#bgURL').val( response.response );
		      if( $(el).hasClass('column') ){
		      $(el).css('background-image', 'url('+ response.response +')');
		      }
		      //reset the file upload
		      $('.bgFileTab').find('a.fileinput-exists').click();
		      /* SANDBOX */
		      sandboxID = hasSandbox( $(el) )
		      if( sandboxID ) {
		        if( $(el).hasClass('column')){
		        elementID = $(el).attr('id');
		        $('#'+sandboxID).contents().find('#'+elementID).css('background-image', 'url('+ response.response +')');
		        }
		      }
		      /* END SANDBOX */
		    } else if( response.code == 0 ) {//error
		      alert('Something went wrong: '+response.response)
		    }
		  })
		} else if( $('a#bg_Link').css('display') == 'block' ) {
			if( $('input#bgURL').val() != '' && $('input#bgURL').val() != $(el).css('background-image') ) {
			    $(el).css('background-image', 'url('+ $('input#bgURL').val() +')');
			    /* SANDBOX */
			    sandboxID = hasSandbox( $(el) )
			    if( sandboxID ) {
			      elementID = $(el).attr('id');
			      $('#'+sandboxID).contents().find('#'+elementID).css('background-image', 'url('+ $('input#bgURL').val() +')');
			    }
			  }
		}

		//do we need to upload an image?
		if( $('a#slide_Link').css('display') == 'block' && $('input#slideFileField').val() != '' ) {
		  var form = $('form#slideUploadForm');
		  var formdata = false;
		  if (window.FormData){
		    formdata = new FormData(form[0]);
		  }
		  console.log(form);
		        $(el).attr('src', "/builder_front/images/loading.gif").css("width", "100%");
		  var formAction = form.attr('action');
		  $.ajax({
		    url : formAction,
		    data : formdata ? formdata : form.serialize(),
		    cache : false,
		    contentType : false,
		    processData : false,
		    dataType: "json",
		    type : 'POST',
		  }).done(function(response){
		    if( response.code == 1 ) {//success
		      $('input#slideURL').val( response.response );
		      if( $(el).prop('tagName') == 'IMG' ){
		      $(el).attr('src', response.response);
		      }
		      //reset the file upload
		      $('.slideFileTab').find('a.fileinput-exists').click();
		      /* SANDBOX */
		      sandboxID = hasSandbox( $(el) )
		      if( sandboxID ) {
		        if( $(el).prop('tagName') == 'IMG' ){
		        elementID = $(el).attr('id');
		        $('#'+sandboxID).contents().find('#'+elementID).attr('src', response.response);
		        }
		      }
		      /* END SANDBOX */
		    } else if( response.code == 0 ) {//error
		      alert('Something went wrong: '+response.response)
		    }
		  })
		} else if( $('a#slide_Link').css('display') == 'block' ) {
		  //no image to upload, just a SRC change
		  if( $('input#slideURL').val() != '' && $('input#slideURL').val() != $(el).attr('src') ) {
		    $(el).attr('src', $('input#slideURL').val());
		    /* SANDBOX */
		    sandboxID = hasSandbox( $(el) )
		    if( sandboxID ) {
		      elementID = $(el).attr('id');
		      $('#'+sandboxID).contents().find('#'+elementID).attr('src', $('input#slideURL').val());
		    }
		  }
		}



		//icons

		if( $(el).hasClass('fa') ) {
			//out with the old, in with the new :)
			//get icon class name, starting with fa-
			var get = $.grep(el.className.split(" "), function(v, i){
				return v.indexOf('fa-') === 0;
			}).join();
			//if the icons is being changed, save the old one so we can reset it if needed
			if( get != $('select#icons').val() ) {
				$(el).uniqueId();
				_oldIcon[$(el).attr('id')] = get;
				//alert( _oldIcon[$(el).attr('id')] )
			}
			$(el).removeClass( get ).addClass( $('select#icons').val() );
			/* SANDBOX */
			sandboxID = hasSandbox( $(el) )
			if( sandboxID ) {
				elementID = $(el).attr('id');
				$('#'+sandboxID).contents().find('#'+elementID).removeClass( get ).addClass( $('select#icons').val() );
			}
			/* END SANDBOX */
		}

		//video URL
		if( $(el).attr('data-type') == 'video' ) {
			if( $('input#youtubeID').val() != '' ) {
				// $(el).prev().attr('src', "//www.youtube.com/embed/"+$('#video_Tab input#youtubeID').val());
				$(el).prev().attr('src', $('#video_Tab input#youtubeID').val());
				var regex = /[^/]*$/.exec($('#video_Tab input#youtubeID').val())[0];
				var ytid = regex.replace("watch?v=", "");
								$(el).prev().attr('ng-click', 'openWindow("https://www.youtube.com/embed/' + ytid +'")');
                $(el).prev().children().attr('src','http://img.youtube.com/vi/'+ytid+'/maxresdefault.jpg');
			} else if( $('input#vimeoID').val() != '' ) {

				var vimid = /[^/]*$/.exec($('#video_Tab input#vimeoID').val())[0];
				$(el).prev().attr('src', 'https://player.vimeo.com/video/' + vimid);
				$(el).prev().attr('ng-click', 'openWindow("https://player.vimeo.com/video/' + vimid + '")');
				$.getJSON('http://www.vimeo.com/api/v2/video/' + vimid + '.json?callback=?', {format: "json"}, function(data) {
					$(el).prev().children().attr('src', data[0].thumbnail_large);
			 	});
			}
			/* SANDBOX */
			sandboxID = hasSandbox( $(el) )
			if( sandboxID ) {
				elementID = $(el).attr('id');
				if( $('input#youtubeID').val() != '' ) {
					// $('#'+sandboxID).contents().find('#'+elementID).prev().attr('src', "//www.youtube.com/embed/"+$('#video_Tab input#youtubeID').val());
					$('#'+sandboxID).contents().find('#'+elementID).prev().attr('src', $('#video_Tab input#youtubeID').val());
					$('#'+sandboxID).contents().find('#'+elementID).prev().attr('ng-click', $('#video_Tab input#youtubeID').val());
					$('#'+sandboxID).contents().find('#'+elementID).prev().children().attr('src', "//www.youtube.com/embed/"+$('#video_Tab input#youtubeID').val()+'/maxresdefault.jpg');
				} else if( $('input#vimeoID').val() != '' ) {
					var vimid = /[^/]*$/.exec($('#video_Tab input#vimeoID').val())[0];
					$('#'+sandboxID).contents().find('#'+elementID).prev().attr('src', 'https://player.vimeo.com/video/' + vimid);
					$('#'+sandboxID).contents().find('#'+elementID).prev().attr('ng-click', 'https://player.vimeo.com/video/' + vimid);
					$.getJSON('http://www.vimeo.com/api/v2/video/' + vimid + '.json?callback=?', {format: "json"}, function(data) {
						$('#'+sandboxID).contents().find('#'+elementID).prev().children().attr('src', data[0].thumbnail_large);
				 	});
				}
			}
			/* END SANDBOX */
		}

		//Pan image
		if( $('a#360_Link').css('display') == 'block' && $('input#360FileField').val() != '' ) {
		  var form = $('form#360UploadForm');
		  var formdata = false;
		  if (window.FormData){
		    formdata = new FormData(form[0]);
		  }
		  console.log(form);
		  $(el).children().css('background-image', 'url("/builder_front/images/loading.gif")');
		  var formAction = form.attr('action');
		  $.ajax({
		    url : formAction,
		    data : formdata ? formdata : form.serialize(),
		    cache : false,
		    contentType : false,
		    processData : false,
		    dataType: "json",
		    type : 'POST',
		  }).done(function(response){
		    if( response.code == 1 ) {//success
		      $('input#360URL').val( response.response );
		      if( $(el).hasClass('panimage') ){
		      $(el).children().css('background-image', 'url('+ response.response +')');
		      }
		      //reset the file upload
		      $('.360FileTab').find('a.fileinput-exists').click();
		      /* SANDBOX */
		      sandboxID = hasSandbox( $(el) )
		      if( sandboxID ) {
		        if( $(el).hasClass('panimage')){
		        elementID = $(el).attr('id');
		        $('#'+sandboxID).contents().find('#'+elementID).children().css('background-image', 'url('+ response.response +')');
		        }
		      }
		      /* END SANDBOX */
		    } else if( response.code == 0 ) {//error
		      alert('Something went wrong: '+response.response)
		    }
		  })
		} else if( $('a#360_Link').css('display') == 'block' ) {
		  if( $('input#360URL').val() != '' && $('input#360URL').val() != $(el).children().css('background-image') ) {
		      $(el).children().css('background-image', 'url('+ $('input#360URL').val() +')');
		      /* SANDBOX */
		      sandboxID = hasSandbox( $(el) )
		      if( sandboxID ) {
		        elementID = $(el).attr('id');
		        $('#'+sandboxID).contents().find('#'+elementID).children().css('background-image', 'url('+ $('input#360URL').val() +')');
		      }
		    }
		}


		$('#detailsAppliedMessage').fadeIn(600, function(){
			setTimeout(function(){ $('#detailsAppliedMessage').fadeOut(1000) }, 3000)
		})
	});


	//delete button
	$('button#removeElementButton').unbind('click').bind('click', function(){
		if( $(el).prop('tagName') == 'A' ) {//ancor
			if( $(el).parent().prop('tagName') == 'LI' ) {//clone the LI
				toDel = $(el).parent();
			} else {
				toDel = $(el);
			}
		} else if( $(el).prop('tagName') == 'IMG' ) {//image
			if( $(el).parent().prop('tagName') == 'A' ) {//clone the A
				toDel = $(el).parent();
			} else {
				toDel = $(el);
			}
		} else {//everything else
			toDel = $(el);
		}
		$('#styleEditor').on('click', 'button#removeElementButton', function(){
			$('#deleteElement').modal('show');
			$('#deleteElement button#deleteElementConfirm').unbind('click').bind('click', function(){
				toDel.fadeOut(500, function(){
					randomEl = $(this).closest('body').find('*:first');
					toDel.remove();
					bindHeightWidth();
				})
				$('#deleteElement').modal('hide');
				closeStyleEditor();
			})
		})
	})


	//clone button
	$('button#cloneElementButton').unbind('click').bind('click', function(){
		if( $(el).parent().hasClass('propClone') ) {//clone the parent element
			theClone = $(el).parent().clone();
			theClone.find( $(el).prop('tagName') ).attr('style', '');
			theOne = theClone.find( $(el).prop('tagName') );
			cloned = $(el).parent();
			cloneParent = $(el).parent().parent();
		} else {//clone the element itself
			theClone = $(el).clone();
			theClone.attr('style', '');
			theOne = theClone;
			cloned = $(el);
			cloneParent = $(el).parent();
		}
		cloned.after( theClone );
		//theClone.insertAfter( cloned );
		for( var key in editableItems ) {
			$(el).closest('body').find( pageContainer + ' '+ key ).each( function(){
				if( $(this)[0] === $(theOne)[0] ) {
					theOne.hover( function(){
						if( $(this).closest('body').width() != $(this).width() ) {
							$(this).css({'outline': '3px dashed red', 'cursor': 'pointer'});
						} else {
							$(this).css({'outline': '3px dashed red', 'outline-offset': '-3px', 'cursor': 'pointer'});
						}
					}, function(){
						if( $(this).closest('body').width() != ($(this).width()+6) ) {
							$(this).css({'outline': '', 'cursor': ''});
						} else {
							$(this).css({'outline': '', 'cursor': '', 'outline-offset': ''});
						}
					}).click( function(e){
						e.preventDefault();
						e.stopPropagation();
						styleClick(this, key)
					}).each( function(){
						$(this).attr('data-selector', key)
					});
				}
			});
		}
		//possible height adjustments
		bindHeightWidth();
	})


	//reset button
	$('button#resetStyleButton').unbind('click').bind('click', function(){
		if( $(el).closest('body').width() != $(el).width() ) {
			$(el).attr('style', '').css({'outline': '3px dashed red', 'cursor': 'pointer'})
		} else {
			$(el).attr('style', '').css({'outline': '3px dashed red', 'outline-offset':'-3px', 'cursor': 'pointer'})
		}
		$('#styleEditor form#stylingForm').height( $('#styleEditor form#stylingForm').height()+"px" );
		$('#styleEditor form#stylingForm .form-group:not(#styleElTemplate)').fadeOut(500, function(){
			$(this).remove()
		})

		//reset icon
		if( _oldIcon[$(el).attr('id')] != null ) {
			var get = $.grep(el.className.split(" "), function(v, i){
				return v.indexOf('fa-') === 0;
			}).join();
			$(el).removeClass( get ).addClass( _oldIcon[$(el).attr('id')] );
			$('select#icons option').each(function(){
				if( $(this).val() == _oldIcon[$(el).attr('id')] ) {
					$(this).attr('selected', true);
					$('#icons').trigger('chosen:updated');
				}
			})
		}

		setTimeout( function(){buildeStyleElements(el, theSelector)}, 550)
	})
}

function addStyling(){
		$('#pageSetting').addClass('btn-info');
		$('#pageSetting').removeClass('btn-primary');
		$('#styleEditor').animate({'background-color': '#f9f9f9'}, 250);
		$('#styleEditor ul.breadcrumb').show();
		$('#styleEditor ul.tabcontent').show();
		$('#styleEditor .nav').show();
		$('#styleEditor .tab-content').show();
		$('#styleEditor .margin-bottom-5').show();
		$('#styleEditor .sideButtons').show();
		$('#editorTittle').html('<span class="fui-new"></span> Detail Editor');
		$('#pageSetting').data('clickSetting');
		$('#editingMode').removeData('editingStyle');
		$('#editingMode').html('<span class="fui-plus"></span> Add Element');
}


function closeStyleEditor() {
	// Trigger for Clicking Body to close all active element tinymce
	$.each($('.container li.element'),
		function(){
		if( $(this).find('iframe')[0].contentWindow.document.body==''){
	 $(this).find('iframe')[0].contentWindow.document.body.click();
		}
	});
	$('#editingMode').addClass('btn-info');
	$('#editingMode').removeClass('btn-danger');
	$('#editingMode').html('<span class="fui-play"></span> Start Editing');
	$('#editingMode').data('editingStyle');
	//only if visible
	$('#pageSetting').removeData('clickSetting');
	$('#pageSetting').addClass('btn-info');
	$('#pageSetting').removeClass('btn-primary');
	if( $('#styleEditor').css('left') == '0px' ) {
		$('#styleEditor').animate({'left': '-300px', 'background-color': '#f9f9f9'}, 250);
		$('#pageList ul li iframe').each(function(){
			//remove hover events used by Styling modus
			for( var key in editableItems ) {
				$(this).contents().find( pageContainer + ' '+ key ).unbind('mouseenter mouseleave click').css({'outline': '', 'cursor': ''});
			}
			if ( $('input:radio[name=mode]:checked').val() == 'styling' ) {
				$('#pageList ul li iframe').each(function(){
					for( var key in editableItems ) {
						$(this).contents().find( pageContainer + ' '+ key ).hover( function(e){
							e.stopPropagation();
							if( $(this).closest('body').width() != $(this).width() ) {
								$(this).css({'outline': '3px dashed red', 'cursor': 'pointer'});
							} else {
								$(this).css({'outline': '3px dashed red', 'outline-offset': '-3px', 'cursor': 'pointer'});
							}
						}, function(){
							if( $(this).closest('body').width() != ($(this).width()+6) ) {
								$(this).css({'outline': '', 'cursor': ''});
							} else {
								$(this).css({'outline': '', 'cursor': '', 'outline-offset': ''});
							}
						}).click( function(e){
							e.preventDefault();
							e.stopPropagation();
							styleClick(this, key)
						});
					}
				})
			}
		})
	}
}


$(function(){
	//video ID toggle
	$('input#youtubeID').focus(function(){
		$('input#vimeoID').val('');
	})
	$('input#vimeoID').focus(function(){
		$('input#youtubeID').val('');
	})
	//chosen font-awesome dropdown
	$('select#icons').chosen({
		'search_contains': true
	});
	//detect mode
	if( window.location.protocol == 'file:' ) {
		_mode = "local";
	} else {
		_mode = "server";
	}
	//check if formData is supported
	if (!window.FormData){
		//not supported, hide file upload
		$('form#imageUploadForm').hide();
		$('form#bgUploadForm').hide();
		$('form#slideUploadForm').hide();
		$('.imageFileTab .or').hide();
		$('.bgFileTab .or').hide();
		$('.slideFileTab .or').hide();
	}
	//internal links dropdown
	$('select#internalLinksDropdown').selectpicker({style: 'btn-sm btn-default', menuStyle: 'dropdown-inverse'});
	$('select#internalLinksDropdown').change(function(){
		$('select#pageLinksDropdown option').attr('selected', false);
		$('.link_Tab .btn-group.select:eq(1) .dropdown-menu li').removeClass('selected');
		$('.link_Tab .btn-group.select:eq(1) > button .filter-option').text( $('.link_Tab .btn-group.select:eq(1) .dropdown-menu li:first').text() )
	})
	$('select#pageLinksDropdown').selectpicker({style: 'btn-sm btn-default', menuStyle: 'dropdown-inverse'});
	$('select#pageLinksDropdown').change(function(){
		$('select#internalLinksDropdown option').attr('selected', false);
		$('.link_Tab .btn-group.select:eq(0) .dropdown-menu li').removeClass('selected');
		$('.link_Tab .btn-group.select:eq(0) > button .filter-option').text( $('.link_Tab .btn-group.select:eq(0) .dropdown-menu li:first').text() )
	})
	$('input#internalLinksCustom').focus(function(){
		$('select#internalLinksDropdown option').attr('selected', false);
		$('select#pageLinksDropdown option').attr('selected', false);
		$('.link_Tab .dropdown-menu li').removeClass('selected');
		$('.link_Tab .btn-group.select > button .filter-option').text( $('.link_Tab .dropdown-menu li:first').text() )
		this.select();
	})
	$('#detailsAppliedMessageHide').click(function(){
		$(this).parent().fadeOut(500)
	})


	//hide style editor option?

	if( typeof editableItems === 'undefined' ) {
		$('#modeStyle').parent().remove();
	}
	$('#closeStyling').click(function(){
		closeStyleEditor();
	})


	$('#styleEditor form').on("focus", "input", function(){
		$(this).css('position', 'absolute');
		$(this).css('right', '0px')
		$(this).animate({'width': '100%'}, 500);
		$(this).focus(function(){
		    this.select();
		});

	}).on("blur", "input", function(){
		$(this).animate({'width': '100%'}, 500, function(){
			$(this).css('position', 'relative');
			$(this).css('right', 'auto');
		})
	})

	for( var key in _Elements.elements ) {
		niceKey = key.toLowerCase().replace(" ", "_");
		$('<li><a href="" id="'+niceKey+'"><img src="builder_front/images/icon/icon-'+niceKey+'.png"/>'+key+'</a></li>').appendTo('#menu #main ul#elements');
		$('#menu #main ul#elements li:first').children('a').addClass('active');
		for( x=0; x<_Elements.elements[key].length; x++ ) {
			//alert( data.elements[key][x].url )

			//buat eleman baru
			if( _Elements.elements[key][x].sandbox != null ) {
				if( _Elements.elements[key][x].loaderFunction != null ) {
					loaderFunction = 'data-loaderfunction="'+_Elements.elements[key][x].loaderFunction+'"';
				}
				//newItem = $('<li class="element '+niceKey+'"><img src="'+_Elements.elements[key][x].thumbnail+'" data-srcc="'+_Elements.elements[key][x].url+'" data-height="'+_Elements.elements[key][x].height+'" data-sandbox="" '+loaderFunction+'></li>')
				newItem = $('<li class="element '+niceKey+'"><img src="'+_Elements.elements[key][x].icon+'" data-srcc="'+_Elements.elements[key][x].url+'" data-sandbox="" '+loaderFunction+'>'+_Elements.elements[key][x].title+'</li>')
			} else {
				//newItem = $('<li class="element '+niceKey+'"><img src="'+_Elements.elements[key][x].thumbnail+'" data-srcc="'+_Elements.elements[key][x].url+'" data-height="'+_Elements.elements[key][x].height+'"></li>')
				newItem = $('<li class="element '+niceKey+'"><img src="'+_Elements.elements[key][x].icon+'" data-srcc="'+_Elements.elements[key][x].url+'">'+_Elements.elements[key][x].title+'</li>')
			}
			newItem.appendTo('#menu #second ul');
			//zoomer works
			/*if( _Elements.elements[key][x].height ) {
				theHeight = _Elements.elements[key][x].height*0.25;
			} else {
				theHeight = 'auto'
			}
			newItem.find('iframe').zoomer({
				zoom: 0.25,
				width: 270,
				height: theHeight,
				message: "Drag&Drop Me!"
			});*/
		}
		//draggables
		makeDraggable( '#page1' )
	}
	//main menu hide/show

	$('#menu').mouseenter(function(){
		//$(this).stop().animate({'left': '0px'}, 500);
	}).mouseleave(function(){
		//$(this).stop().animate({'left': '-190px'}, 500);
	})

	//use function call to make the ULs sortable
	makeSortable( $('#pageList ul#page1') );
	//second menu animation
	$('#menu #main #elements').on('click', 'a:not(.btn)', function(){
		$('#menu #main a').removeClass('active');
		$(this).addClass('active');
		//show only the right elements
		$('#menu #second ul li').hide();
		$('#menu #second ul li.'+$(this).attr('id')).show();
		if( $(this).attr('id') == 'all' ) {
			$('#menu #second ul li').show();
		}
		/*$('.menu .second').css('display', 'block').stop().animate({
			width: secondMenuWidth
		}, 500);	*/
	})

	//second nav hide button
	$('#menu #second > #hideSecond').click(function(){
		$('.menu .second').stop().animate({
			width: 0
		}, 500, function(){
			$('#menu #second').hide();
		});
	})


	$('#menu #main').on('click', 'a:not(.actionButtons)', function(e){
		e.preventDefault();
	})

	$('#menu').mouseleave(function(){
		//$('#menu #main a').removeClass('active');
		/*$('.menu .second').stop().animate({
			width: 0
		}, 500, function(){
			$('#menu #second').hide();
		});*/
	});

	//disable on load
	$('input:radio[name=mode]').parent().addClass('disabled');
	$('input:radio[name=mode]#modeBlock').radio('check');
	var elToUpdate;

	//design mode toggle
	$('input:radio[name=mode]').on('toggle', function(){
		if( $(this).val() == 'content' ) {
			//close style editor
			closeStyleEditor();
			//hide all iframe covers and activate designMode
			$('#pageList ul .frameCover').each(function(){
				$(this).hide();
			})
			$('#pageList ul li iframe').each(function(){
				//remove old click events
				for( var key in editableItems ) {
					$(this).contents().find( pageContainer + ' '+ key ).unbind('hover').unbind('click');
				}
			})
			//active content edit mode
			$('#pageList ul li iframe').each(function(){
				for (i=0; i<editableContent.length; ++i) {
					//remove old events
					$(this).contents().find( pageContainer + ' '+editableContent[i] ).unbind('click').unbind('hover');
					$(this).contents().find( pageContainer + ' '+editableContent[i] ).hover( function(){
						$(this).css({'outline': '3px dashed red', 'cursor': 'pointer'})
					}, function(){
						$(this).css({'outline': '', 'cursor': ''})
					} ).click( function(e){
						elToUpdate = $(this);
						e.preventDefault();
						e.stopPropagation();
						$('#editContentModal #contentToEdit').val( $(this).html() )
						$('#editContentModal').modal('show');
						//for the elements below, we'll use a simplyfied editor, only direct text can be done through this one
						if( this.tagName == 'SMALL' || this.tagName == 'A' || this.tagName == 'LI' || this.tagName == 'SPAN' || this.tagName == 'B' || this.tagName == 'I' || this.tagName == 'TT' || this.tageName == 'CODE' ||
						this.tagName == 'EM' || this.tagName == 'STRONG' || this.tagName == 'SUB' || this.tagName == 'BUTTON' || this.tagName == 'LABEL' || this.tagName == 'P' || this.tagName == 'H1' || this.tagName == 'H2' ||
						this.tagName == 'H2' || this.tagName == 'H3' || this.tagName == 'H4' || this.tagName == 'H5' || this.tagName == 'H6' ) {
							$('#editContentModal #contentToEdit').redactor({
								buttons: ['html', 'bold', 'italic', 'deleted'],
								focus: true,
								plugins: ['bufferbuttons'],
								buttonSource: true,
								paragraphize: false,
								linebreaks: true
							});
						} else if( this.tagName == 'DIV' && $(this).hasClass('tableWrapper') ) {
							$('#editContentModal #contentToEdit').redactor({
								buttons: ['html', 'formatting', 'bold', 'italic', 'deleted', 'table', 'image', 'link', 'alignment'],
								focus: true,
								plugins: ['table', 'bufferbuttons'],
								buttonSource: true,
								paragraphize: false,
								linebreaks: false
							});
						} else {
							$('#editContentModal #contentToEdit').redactor({
								buttons: ['html', 'formatting', 'bold', 'italic', 'deleted', 'unorderedlist', 'orderedlist', 'outdent', 'indent', 'image', 'file', 'link', 'alignment', 'horizontalrule'],
								focus: true,
								buttonSource: true,
								paragraphize: false,
								linebreaks: false
							});
						}
					}).each( function(){
						$(this).attr('data-selector', key)
					});
				}
			})
		} else if( $(this).val() == 'block' ) {
			//close style editor
			closeStyleEditor();
			//show all iframe covers and activate designMode
			$('#pageList ul .frameCover').each(function(){
				$(this).show();
			})
			//deactivate designmode
			$('#pageList ul li iframe').each(function(){
				for( var key in editableItems ) {
					$(this).contents().find( pageContainer + ' '+ key ).unbind('mouseenter mouseleave');
				}
				this.contentDocument.designMode = "off";
			})
		} else if( $(this).val() == 'styling' ) {
			//hide all iframe covers and activate designMode
			addStyling();
			$('#pageList ul .frameCover').each(function(){
				$(this).hide();
			})
			//active styling mode
			$('#pageList ul li iframe').each(function(){
				//remove old click events
				$(this).contents().find( pageContainer + ' p' ).unbind('click').unbind('hover');
				for( var key in editableItems ) {
					$(this).contents().find( pageContainer + ' '+ key ).hover( function(e){
						e.stopPropagation();
						if( $(this).closest('body').width() != $(this).width() ) {
							$(this).css({'outline': '3px dashed red', 'cursor': 'pointer'});
						} else {
							$(this).css({'outline': '3px dashed red', 'outline-offset': '-3px', 'cursor': 'pointer'});
						}
					}, function(){
						$(this).css({'outline': '', 'cursor': '', 'outline-offset': ''})
					}).click( function(e){
						e.preventDefault();
						e.stopPropagation();
						addStyling();
						styleClick(this, key)
					}).each( function(){
						$(this).attr('data-selector', key)
					});
				}
			})
		}
	});

	$('button#updateContentInFrameSubmit').click(function(){
		//alert( elToUpdate.text() )
		elToUpdate.html( $('#editContentModal #contentToEdit').redactor('code.get') ).css({'outline': '', 'cursor':''});
		/* SANDBOX */
		sandboxID = hasSandbox( elToUpdate )
		if( sandboxID ) {
			elementID = elToUpdate.attr('id');
			$('#'+sandboxID).contents().find('#'+elementID).html( $('#editContentModal #contentToEdit').redactor('code.get') );
		}
		/* END SANDBOX */
		$('#editContentModal textarea').each(function(){
			$(this).redactor('core.destroy');
			$(this).val('');
		});
		$('#editContentModal').modal('hide');
		$(this).closest('body').removeClass('modal-open').attr('style', '');
	})

	//close styleEditor
	$('#styleEditor > a.close').click(function(e){
		e.preventDefault();
		closeStyleEditor();
		bindHeightWidth();
		$('#modeBlock').click();
		var iframeLength = $('iframe').length;
    for (i=1; i < iframeLength; i++){
    	$('iframe')[i].contentWindow.sortableClose();
	  }
	})

	//delete blocks from window
	var blockToDelete;
	$('#pageList').on("click", ".frameCover > .deleteBlock", function(){
		$('#deleteBlock').modal('show');
		blockToDelete = $(this).closest('li');
		$('#deleteBlock').off('click', '#deleteBlockConfirm').on('click', '#deleteBlockConfirm', function(){
			/* SANDBOX */
			var attr = blockToDelete.find('iframe').attr('data-sandbox');
			if (typeof attr !== typeof undefined && attr !== false) {
				//has sandbox, delete it
				$('#sandboxes #'+attr).remove();
			}
			/* END SANDBOX */
			$('#deleteBlock').modal('hide');
			blockToDelete.fadeOut(500, function(){
				$(this).remove();
				pageEmpty();
				allEmpty();
			})
		})
	});

	//reset block
	$('#pageList').on("click", ".frameCover > .resetBlock", function(){
		$('#resetBlock').modal('show');
		frameToReset = $(this).closest('li').find('iframe');
		$('#resetBlock').off('click', '#resetBlockConfirm').on('click', '#resetBlockConfirm', function(){
			$('#resetBlock').modal('hide');
			frameToReset.get(0).contentWindow.location.reload();
			/* SANDBOX */
			var attr = frameToReset.attr('data-sandbox');
			if (typeof attr !== typeof undefined && attr !== false) {
				//has sandbox, reset it
				document.getElementById(attr).contentDocument.location.reload(true);
			}
			/* END SANDBOX */
		})
	});
	var aceEditors = new Array();//store all ace editors

	//block source code
	$('#pageList').on("click", ".frameCover > .htmlBlock", function(){
		//hide the iframe
		$(this).closest('.li').find('iframe').hide();
		//disable draggable on the LI
		$(this).closest('li').parent().sortable('disable');
		//built editor element
		theEditor = $('<div class="aceEditor"></div>');
		theEditor.uniqueId();
		//set the editor height
		theEditor.height( $(this).closest('li').height() )
		$(this).closest('li').append( theEditor );
		theId = theEditor.attr('id');
		var editor = ace.edit( theId );
		//sandbox?
		var attr = $(this).closest('li').find('iframe').attr('data-sandbox');
		if (typeof attr !== typeof undefined && attr !== false) {
			editor.setValue( $('#sandboxes #'+attr).contents().find( pageContainer ).html() );
			//has sandbox, reset it
			document.getElementById(attr).contentDocument.location.reload(true);
		} else {
			editor.setValue( $(this).closest('li').find('iframe').contents().find( pageContainer ).html() );
		}
		editor.setTheme("ace/theme/twilight");
		editor.getSession().setMode("ace/mode/html");
		//buttons
		cancelButton = $('<button type="button" class="btn btn-danger editCancelButton btn-wide"><span class="fui-cross"></span> Cancel</button>');
		saveButton = $('<button type="button" class="btn btn-primary editSaveButton btn-wide"><span class="fui-check"></span> Save</button>');
		buttonWrapper = $('<div class="editorButtons"></div>');
		buttonWrapper.append( cancelButton );
		buttonWrapper.append( saveButton );
		$(this).closest('li').append( buttonWrapper );
		aceEditors[ theId ] = editor;
	});

	$('#pageList').on("click", "li .editorButtons .editCancelButton", function(){
		//theId = $(this).closest('.editorButtons').prev().attr('id');
		//enable draggable on the LI
		$(this).closest('li').parent().sortable('enable');
		$(this).parent().prev().remove();
		$(this).closest('li').find('.zoomer-small iframe').fadeIn(500);
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		})
	});

	$('#pageList').on("click", "li .editorButtons .editSaveButton", function(){
		//enable draggable on the LI
		$(this).closest('li').parent().sortable('enable');
		theId = $(this).closest('.editorButtons').prev().attr('id');
		theContent = aceEditors[theId].getValue();
		theiFrame = $(this).closest('li').find('iframe');
		$(this).parent().prev().remove();

		//theiFrame.contents().find( pageContainer ).html( theContent );

		/* SANDBOX */
		var attr = $(this).closest('li').find('iframe').attr('data-sandbox');
		if (typeof attr !== typeof undefined && attr !== false) {
			$('#sandboxes #'+attr).contents().find( pageContainer ).html( theContent );
			$(this).closest('li').find('iframe').show().contents().find( pageContainer ).html( theContent );
			//do we need to execute a loader function?
			if (typeof theiFrame.attr('data-loaderfunction') !== typeof undefined && theiFrame.attr('data-loaderfunction') !== false) {
				var codeToExecute = "theiFrame[0].contentWindow."+theiFrame.attr('data-loaderfunction')+"()";
				var tmpFunc = new Function(codeToExecute);
				tmpFunc();
			}
		} else {
			$(this).closest('li').find('iframe').show().contents().find( pageContainer ).html( theContent );
		}
		/* END SANDBOX */
		//height adjustment
		bindHeightWidth();
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		})
	});

	//export markup

	$('#exportModal').on('show.bs.modal', function (e) {
		$('#exportModal > form #exportSubmit').show('');
		$('#exportModal > form #exportCancel').text('Cancel & Close');
		closeStyleEditor();
	});
	$('#exportModal').on('shown.bs.modal', function (e) {
		//delete older hidden fields
		$('#exportModal form input[type="hidden"]').remove();
		//loop through all pages
		$('#pageList > ul').each(function(){
			//grab the skeleton markup
			newDocMainParent = $('iframe#skeleton').contents().find( pageContainer );
			//empty out the skeleton
			newDocMainParent.find('*').remove();
			//loop through page iframes and grab the body stuff
			$(this).find('iframe').each(function(){
				//sandbox or regular?
				var attr = $(this).attr('data-sandbox');
				if (typeof attr !== typeof undefined && attr !== false) {
					theContents = $('#sandboxes #'+attr).contents().find( pageContainer );
				} else {
					theContents = $(this).contents().find( pageContainer );
				}
				//remove .frameCovers

				theContents.find('.frameCover').each(function(){
					$(this).remove();
				});


				//remove inline styling leftovers

				for( var key in editableItems ) {

					//alert('Key :'+key)

					theContents.find( key ).each(function(){

						//alert( "Data before: "+ $(this).attr('data-selector') );

						$(this).removeAttr('data-selector');

						//alert( "Data after: "+ $(this).attr('data-selector') );

						if( $(this).attr('style') == '' ) {
							$(this).removeAttr('style')
						}

					})

				}
				for (i=0; i<editableContent.length; ++i) {

					$(this).contents().find( editableContent[i] ).each(function(){

						$(this).removeAttr('data-selector');

					})

				}


				toAdd = theContents.html();

				//grab scripts

				scripts = $(this).contents().find( pageContainer ).find('script');

				if( scripts.size() > 0 ) {

					theIframe = document.getElementById("skeleton");

					scripts.each(function(){

						if( $(this).text() != '' ) {//script tags with content

							var script = theIframe.contentWindow.document.createElement("script");
							script.type = 'text/javascript';
							script.innerHTML = $(this).text();

							theIframe.contentWindow.document.getElementById( pageContainer.substring(1) ).appendChild(script);

						} else if( $(this).attr('src') != null ) {

							var script = theIframe.contentWindow.document.createElement("script");
							script.type = 'text/javascript';
							script.src = $(this).attr('src');

							theIframe.contentWindow.document.getElementById( pageContainer.substring(1) ).appendChild(script)

						}

					})

				}

				newDocMainParent.append( $(toAdd) );

			});

			//theStyle = $('<style>body{width:100%}</style>');

			//$('iframe#skeleton').contents().find('head').append( $('<style>body{width:100%}</style>') )

			//create the hidden input

			//alert( $('#pages li:eq('+$(this).index()+1+') a:first').text() )

			newInput = $('<input type="hidden" name="pages['+$('#pages li:eq('+($(this).index()+1)+') a:first').text()+']" value="">');

			$('#exportModal form').prepend( newInput );

			newInput.val( "<html>"+$('iframe#skeleton').contents().find('html').html()+"</html>" )

		})

	});



	$('#exportModal > form').submit(function(){

		$('#exportModal > form #exportSubmit').hide('');

		$('#exportModal > form #exportCancel').text('Close Window');

	})


	//clear screen
	$('#clearScreen').click(function(){

		$('#deleteAll').modal('show');

		$('#deleteAll').on('click', '#deleteAllConfirm', function(){

			$('#deleteAll').modal('hide');

			$('#pageList ul:visible li').fadeOut(500, function(){

				$(this).remove();

				pageEmpty();

				allEmpty();

			});

			//remove possible sandboxes
			$('#sandboxes iframe').each(function(){

				$(this).remove();

			})

		})



	});


	//page menu buttons

	//add page

	$('#pages').on('blur', 'li > input', function(){

		if( $(this).parent().find('a.plink').size() == 0 ) {

			theLink = $('<a href="#'+$(this).val()+'" class="plink">'+$(this).val()+'</a>');

			$(this).hide();

			$(this).closest('li').prepend( theLink );

			$(this).closest('li').removeClass('edit');


			//update the page dropdown

			$('#internalLinksDropdown option:eq('+$(this).parent().index()+')').text( $(this).val() ).attr('value', $(this).val()+".html");

			$('select#internalLinksDropdown').selectpicker({style: 'btn-sm btn-default', menuStyle: 'dropdown-inverse'})

			//alert( ($(this).parent().index())+" : "+$(this).val() )


			$(this).remove();

		}

	})

	$('#addPage').click(function(e){
			$(this).addClass('disabled');
		e.preventDefault();
		var pageIDs;
        function callback(response) {
            pageIDs = response;
            //use return_first variable here
        }
		//turn inputs into links
		$('#pages li.active').each(function(){

			if( $(this).find('input').size() > 0 ) {

				theLink = $('<a href="#">'+$(this).find('input').val()+'</a>');

				$(this).find('input').remove();

				$(this).prepend( theLink );

			}

		})

		$('#pages li').removeClass('active');

		newPageLI = $('#newPageLI').clone();
		newPageLI.css('display', 'block');
		newPageLI.find('input').val( 'page'+$('#pages li').size() );
		newPageLI.attr('id', '');
        $.ajax({
            type: 'GET',
            url: "/add-page",
            async: false,
            data: {'id':'page'+$('#pages li').size()},
        }).done(function(data) {
        	pageIDs=data;
            callback(pageIDs);
            newPageLI.attr('data-id', data);
            $('#addPage').removeClass('disabled');
        });

        newPageLI.attr('data-page',$('#pages li').size());

		$('ul#pages').append( newPageLI );


		theInput = newPageLI.find('input');

		theInput.focus();

		var tmpStr = theInput.val();
		theInput.val('');
		theInput.val(tmpStr);

		theInput.keyup( function(){

			$('#pageTitle span span').text( $(this).val() )

		} )

		newPageLI.addClass('active');


		//create the page structure

		newPageList = $('<ul></ul>');
		newPageList.css('display','block');
		newPageList.attr('id', 'page'+($('#pages li').size()-1) );
        newPageList.attr('data-id', pageIDs);
		$('#pageList > ul').hide();
		$('#pageList').append( newPageList );


		makeSortable( newPageList );

		//draggables
		makeDraggable( '#'+'page'+($('#pages li').size()-1) )


		//alter page title
		$('#pageTitle span span').text( 'page'+($('#pages li').size()-1) );

		$('#frameWrapper').addClass('empty')
		$('#start').fadeIn();


		//add page to page dropdown

		newItem = $('<option value="'+'page'+($('#pages li').size()-1)+'.html">'+'page'+($('#pages li').size()-1)+'</option>')

		$('#internalLinksDropdown').append( newItem );

		$('select#internalLinksDropdown').selectpicker({style: 'btn-sm btn-default', menuStyle: 'dropdown-inverse'})

	})


	$('#pages').on('click', 'li:not(.active)', function(){

		$('#pageList > ul').hide();

		$('#pageList > ul:eq('+($(this).index()-1)+')').show();

		pageEmpty();

		//draggables
		makeDraggable( '#'+'page'+($(this).index()) )

		$('#pages li').removeClass('active').removeClass('edit');

		$(this).addClass('active');
		if($(this).data('revision')==0){
			$('#responsive-comment').hide();
		}else{
            $('#responsive-comment').show();
		}

		$('#pageTitle span span').text( $(this).find('a').text() );
        closeStyleEditor();
	})


	$('#pages').on('click', 'li.active .fileSave', function(){

		//do something

		theLI = $(this).closest('li');

		if( theLI.find('input').size() > 0 ) {

			theLink = $('<a href="#'+theLI.find('input').val()+'">'+theLI.find('input').val()+'</a>');

			theLI.find('input').remove();

			theLI.prepend( theLink );

		}

		$('#pages li').removeClass('edit');

	});

	//edit page button
	$('.page-panel').on('click','.page-panel-toggler',function(){
		if($('.page-panel').hasClass('active')){
			$('.page-panel').removeClass('active');
			$('.screen').removeClass('active');
		} else {
			$('.page-panel').addClass('active');
			$('.screen').addClass('active');
		}
	});

	$('#wrapper').on('click','.page-panel-toggler',function(){
		if($('#wrapper').hasClass('active')){
			$('#wrapper').removeClass('active');
		} else {
			$('#wrapper').addClass('active');
		}
	});

	$('#pages').on('click', 'li.active .fileEdit', function(){


		theLI = $(this).closest('li');

		newInput = $('<input type="text" value="'+theLI.find('a:first').text()+'" name="page">');

		theLI.find('a:first').remove();

		theLI.prepend( newInput );

		newInput.focus();

		var tmpStr = newInput.val();
		newInput.val('');
		newInput.val(tmpStr);

		newInput.keyup( function(){

			$('#pageTitle span span').text( $(this).val() )

		} )

		theLI.addClass('edit');

	})

	var theLIIndex;

	//delete page button
	$('#pages').on('click', 'li.active .fileDel', function(){

		theLIIndex = $(this).parent().parent().index();

		$('#deletePage').modal('show');

		$('#deletePageCancel').click(function(){

			$('#deletePage').modal('hide');

		})

		$('#deletePage').off('click').on('click', '#deletePageConfirm', function(){

			$('#deletePage').modal('hide');
            $.ajax({
                type: 'GET',
                url: "/del-page",
                data: {'id':$('#pages li.active').data('id')},
            }).done(function(data) {

            });
			$('#pages li:eq('+theLIIndex+')').remove();

			$('#pageList ul:visible').remove();


			//update the page dropdown list

			$('select#internalLinksDropdown option:eq('+theLIIndex+')').remove();

			$('.link_Tab .dropdown-menu li:eq('+theLIIndex+')').remove();


			//activate the first page

			$('#pages li:eq(1)').addClass('active');

			$('#pageList ul:first').show();

			$('#pageTitle span span').text( $('#pages li:eq(1)').find('a:first').text() )


			//draggables
			makeDraggable( '#'+'page1' )


			//show the start block?

			pageEmpty();

			allEmpty();


		})

	});


	//content modal, destroy redactor when modal closes
	$('#editContentModal').on('hidden.bs.modal', function (e) {

		$('#editContentModal #contentToEdit').redactor('core.destroy');

	});



	$('#responsive-toolbar ul li a').on('click',function(){
		theHeight = $('li.element iframe').find('BODY').height();
		theWidth = $('#frameWrapper').width();
		newScreenMobile = 1 * 480;
		newScreenTabletSm = 1 * 768;
		newScreenTabletLg = 1 * 1024;

		newScreenMobileLand = 1 * 720;
		newScreenTabletSmLand = 1 * 1024;
		newScreenTabletLgLand = 1 * 1600;

		var target = $(this).data('responsive');
		var orientation = $('#responsive-orientation ul li.active a').data('orientation');

		$(this).parent().addClass('active').siblings().removeClass('active');
		if(target == 'phone' && orientation == 'portrait'){
			$('#screen').css({'width': newScreenMobile})
			$.each($('.container li.element'),
				function(){
					$('iframe').css({'width':newScreenMobile});
					newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
					$(this).find('iframe').css({'height':newHeight});
					$(this).css({'height':newHeight});
			});
			$('#screen').css({'height': $('#screen ul').innerHeight});
		}else if(target == 'phone' && orientation == 'landscape'){
			$('#screen').css({'width': newScreenMobileLand})
			$.each($('.container li.element'),
				function(){
					$('iframe').css({'width':newScreenMobileLand});
					newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
					$(this).find('iframe').css({'height':newHeight});
					$(this).css({'height':newHeight});
			});
			$('#screen').css({'height': $('#screen ul').innerHeight});
		} else if(target == 'tablet-sm' && orientation == 'portrait'){
				$('#screen').css({'width': newScreenTabletSm})
				$.each($('.container li.element'),
					function(){
						$('iframe').css({'width':newScreenTabletSm});
			 			newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
			 			$(this).find('iframe').css({'height':newHeight});
						$(this).css({'height':newHeight});
				});
				$('#screen').css({'height': $('#screen ul').innerHeight});
		}else if(target == 'tablet-sm' && orientation == 'landscape'){
				$('#screen').css({'width': newScreenTabletSmLand})
				$.each($('.container li.element'),
					function(){
						$('iframe').css({'width':newScreenTabletSmLand});
			 			newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
			 			$(this).find('iframe').css({'height':newHeight});
						$(this).css({'height':newHeight});
				});
				$('#screen').css({'height': $('#screen ul').innerHeight});
		}else if(target == 'tablet-lg' && orientation == 'portrait'){
			$('#screen').css({'width': newScreenTabletLg})
			$.each($('.container li.element'),
				function(){
					$('iframe').css({'width':newScreenTabletLg});
					newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
					$(this).find('iframe').css({'height':newHeight});
					$(this).css({'height':newHeight});
			});
			$('#screen').css({'height': $('#screen ul').innerHeight});
		}else if(target == 'tablet-lg' && orientation == 'landscape'){
			$('#screen').css({'width': newScreenTabletLgLand})
			$.each($('.container li.element'),
				function(){
					$('iframe').css({'width':newScreenTabletLgLand});
					newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
					$(this).find('iframe').css({'height':newHeight});
					$(this).css({'height':newHeight});
			});
			$('#screen').css({'height': $('#screen ul').innerHeight});
		}
	});

	$('#responsive-orientation ul li a').on('click',function(){
		theHeight = $('li.element iframe').find('BODY').height();
		theWidth = $('#frameWrapper').width();
		newScreenMobile = 1 * 480;
		newScreenTabletSm = 1 * 768;
		newScreenTabletLg = 1 * 1024;

		newScreenMobileLand = 1 * 720;
		newScreenTabletSmLand = 1 * 1024;
		newScreenTabletLgLand = 1 * 1600;

		var target = $('#responsive-toolbar ul li.active a').data('responsive');
		var orientation = $(this).data('orientation');

		$(this).parent().addClass('active').siblings().removeClass('active');
		if(target == 'phone' && orientation == 'portrait'){
			$('#screen').css({'width': newScreenMobile})
			$.each($('.container li.element'),
				function(){
					$('iframe').css({'width':newScreenMobile});
					newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
					$(this).find('iframe').css({'height':newHeight});
					$(this).css({'height':newHeight});
			});
			$('#screen').css({'height': $('#screen ul').innerHeight});
		}else if(target == 'phone' && orientation == 'landscape'){
			$('#screen').css({'width': newScreenMobileLand})
			$.each($('.container li.element'),
				function(){
					$('iframe').css({'width':newScreenMobileLand});
					newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
					$(this).find('iframe').css({'height':newHeight});
					$(this).css({'height':newHeight});
			});
			$('#screen').css({'height': $('#screen ul').innerHeight});
		} else if(target == 'tablet-sm' && orientation == 'portrait'){
				$('#screen').css({'width': newScreenTabletSm})
				$.each($('.container li.element'),
					function(){
						$('iframe').css({'width':newScreenTabletSm});
			 			newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
			 			$(this).find('iframe').css({'height':newHeight});
						$(this).css({'height':newHeight});
				});
				$('#screen').css({'height': $('#screen ul').innerHeight});
		}else if(target == 'tablet-sm' && orientation == 'landscape'){
				$('#screen').css({'width': newScreenTabletSmLand})
				$.each($('.container li.element'),
					function(){
						$('iframe').css({'width':newScreenTabletSmLand});
			 			newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
			 			$(this).find('iframe').css({'height':newHeight});
						$(this).css({'height':newHeight});
				});
				$('#screen').css({'height': $('#screen ul').innerHeight});
		}else if(target == 'tablet-lg' && orientation == 'portrait'){
			$('#screen').css({'width': newScreenTabletLg})
			$.each($('.container li.element'),
				function(){
					$('iframe').css({'width':newScreenTabletLg});
					newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
					$(this).find('iframe').css({'height':newHeight});
					$(this).css({'height':newHeight});
			});
			$('#screen').css({'height': $('#screen ul').innerHeight});
		}else if(target == 'tablet-lg' && orientation == 'landscape'){
			$('#screen').css({'width': newScreenTabletLgLand})
			$.each($('.container li.element'),
				function(){
					$('iframe').css({'width':newScreenTabletLgLand});
					newHeight = $(this).find('iframe')[0].contentWindow.document.body.clientHeight + 20;
					$(this).find('iframe').css({'height':newHeight});
					$(this).css({'height':newHeight});
			});
			$('#screen').css({'height': $('#screen ul').innerHeight});
		}
	});

		// Zoom Function #wrapper

		zoomValue = 1;

		function checkZoomIn(){
			if(zoomValue > 0.9){
				$('#zoomIn span').addClass('disabled');
			}else if(zoomValue <= 0.9){
				$('#zoomIn span').removeClass('disabled');
			}
		};

		function checkZoomOut(){
			if(zoomValue < 0.3){
				$('#zoomOut span').addClass('disabled');
			}else if(zoomValue >= 0.3){
				$('#zoomOut span').removeClass('disabled');
			}
		};

		checkZoomIn();
		checkZoomOut();

		$('#zoomIn').click(function(){
		if (zoomValue <= 0.9) {
				zoomValue = zoomValue + 0.1;
				$('#screen').css({'transform': 'scale(' + zoomValue + ')'});
				zoomText = Math.floor(zoomValue * 100);
				$('#zoomValue').html(zoomText + '%');
				checkZoomIn();
				checkZoomOut();
			}
		});

		$('#zoomOut').click(function(){
		if (zoomValue >= 0.3) {
				zoomValue = zoomValue - 0.1;
				$('#screen').css({'transform': 'scale(' + zoomValue + ')'});
				zoomText = Math.floor(zoomValue * 100);
				$('#zoomValue').html(zoomText + '%');
				checkZoomIn();
				checkZoomOut();
			}
		});

		$(document).on('keydown',function(e){
			if((e.which === 187) && zoomValue <= 0.9){
					zoomValue = zoomValue + 0.1;
					$('#screen').css({'transform': 'scale(' + zoomValue + ')'});
					zoomText = Math.floor(zoomValue * 100);
					$('#zoomValue').html(zoomText + '%');
					checkZoomIn();
					checkZoomOut();
			}else if ((e.which === 189) && zoomValue >= 0.3){
				zoomValue = zoomValue - 0.1;
				$('#screen').css({'transform': 'scale(' + zoomValue + ')'});
				zoomText = Math.floor(zoomValue * 100);
				$('#zoomValue').html(zoomText + '%');
				checkZoomIn();
				checkZoomOut();
			}else{
				console.log('Zoom Max');
			};
		});



})
