$(function(){
	$('a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 800);
	return false;
	});
});

 const tabNavItems = document.querySelectorAll('.tabs-work__button');
 const tabItems = document.querySelectorAll('.item-tabs');
 document.addEventListener("click", function (e){
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if(targetElement.closest('.tabs-work__button')){
		tabNavItems.forEach((tabNavItem, index) => {
			if(tabNavItem.classList.contains('active')){
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if(tabNavItem === targetElement){
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[newActiveIndex].classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
	}
 });