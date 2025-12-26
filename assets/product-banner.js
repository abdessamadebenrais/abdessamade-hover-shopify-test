document.addEventListener('DOMContentLoaded', function () {
	var productBlocks = document.querySelectorAll('.product-block');
	if (!productBlocks.length) return;
	productBlocks.forEach(function (block) {
		var planButtons = block.querySelectorAll('.product-block__plan');
		var variantInput = block.querySelector('input[data-product-block-variant-id]');
		var priceElement = block.querySelector('.product-block__cta-price');
		if (!planButtons.length || !variantInput || !priceElement) return;
		planButtons.forEach(function (button) {
			button.addEventListener('click', function () {
				planButtons.forEach(function (btn) {
					btn.classList.remove('is-active');
					btn.setAttribute('aria-pressed', 'false');
				});
				button.classList.add('is-active');
				button.setAttribute('aria-pressed', 'true');
				var variantId = button.getAttribute('data-variant-id');
				if (variantId) {
					variantInput.value = variantId;
				}
				var variantPrice = button.getAttribute('data-variant-price');
				if (variantPrice) {
					priceElement.textContent = variantPrice;
				}
			});
		});
	});
});

