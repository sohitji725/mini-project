function dragfile() {
    document.getElementById('fileinput').addEventListener('change', function() {
        const selectedfile = this.files[0];
        
        alert('Selected file: ' + selectedfile.name);
    });
}