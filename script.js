function addWish() {
    const input = document.getElementById('wishInput');
    const wishText = input.value.trim();
    
    if (wishText) {
        const wishList = document.getElementById('wishList');
        const li = document.createElement('li');
        li.textContent = wishText;
        wishList.appendChild(li);
        input.value = ''; // Clear the input field
    } else {
        alert('Please enter your wish!');
    }
}
