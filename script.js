const inputtext = document.getElementById('inputtext');
        const count = document.getElementById('count');

        inputtext.addEventListener("input", () => {
            count.textContent = inputtext.value.length;
        });