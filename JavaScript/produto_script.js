document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Adiciona um listener de evento para cada checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Se o checkbox atual estiver marcado
            if (this.checked) {
                // Desmarca todos os outros checkboxes
                checkboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== this) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
});