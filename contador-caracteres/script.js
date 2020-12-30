const textArea = document.querySelector('textarea')
const characterCount = document.querySelector('span')

textArea.addEventListener('keyup', () => {
    characterCount.textContent = textArea.value.length
})