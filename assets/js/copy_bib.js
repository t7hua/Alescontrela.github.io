var hiddenBibs = document.querySelectorAll('.language-bibtex');


hiddenBibs.forEach(function (hiddenBib) {

  hiddenBib = hiddenBib.parentElement;

  linebreak = document.createElement("hr");
  hiddenBib.append(linebreak);

  var copyButton = document.createElement('button');
  copyButton.className = 'copy';
  copyButton.classList.add("btn");
  copyButton.classList.add("btn-sm");
  copyButton.classList.add("z-depth-2");
  copyButton.classList.add("rounded");
  copyButton.classList.add("border");
  copyButton.type = 'button';
  copyButton.ariaLabel = 'Copy code to clipboard';
  copyButton.innerText = 'Copy';
  hiddenBib.append(copyButton);

  copyButton.addEventListener('click', function () {
    var bib = hiddenBib.querySelector('code').innerText.trim();
    window.navigator.clipboard.writeText(bib);

    copyButton.innerText = 'Copied';
    var fourSeconds = 4000;

    setTimeout(function () {
      copyButton.innerText = 'Copy';
    }, fourSeconds);
  });
});
