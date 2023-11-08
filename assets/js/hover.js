<script>
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.center-image');

        images.forEach(img => {
            img.addEventListener('mouseenter', function() {
                img.src = img.getAttribute('data-hover');
            });
            
            img.addEventListener('mouseleave', function() {
                img.src = img.getAttribute('src');
            });
        });
    });
</script>
