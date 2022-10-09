const saveBtn = document.getElementById("save");
    saveBtn.addEventListener('click', function () {
        domtoimage.toBlob(document.getElementById('poster-container'))
            .then(function (blob) {
                window.saveAs(blob, 'my-node.png');
            });
            
    });