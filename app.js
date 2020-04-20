$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop(); /*При загрузки страници у нас сразу идет запуск check потом if else*/


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


	 /*smooth scroll*/
	 $("[data-scroll]").on("click", function(event) {
	 	event.preventDefault();

	 	var blockId = $(this).data("scroll"),
	 		blockOffset = $(blockId).offset().top,
	 		$this = $(this);

	 		$("#nav a").removeClass("active");
	 		$this.addClass("active");

	 		$("html, body").animate({
	 			scrollTop: blockOffset
	 		}, 500);


	 });


	 /*menu nav toggle*/

	 var nav_toggle = ("#nav_toggle")

	 $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

	 /*Collapse*/

	 $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
	 			
	 			
	 });

	 /*slider*/

	 $("[data-slider]").slick({

	 	infiniti: true,
	 	fade: false,
	 	slidesToShow: 1,
	 	slidesToScroll: 1
	 })

});
