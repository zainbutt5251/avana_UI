document.getElementById('header').innerHTML = Header();
        document.getElementById('footer').innerHTML = Footer();
        $(document).ready(function() {
        $('#navbar-toggle').click(function() {
            $('#navbar-menu').toggleClass('active');
        });
    });
    // carousel 
    $(document).ready(function() {
        let currentIndex = 0;
        const items = $('.one-carousel-item');
        const itemCount = items.length;
    
        function showItem(index) {
            items.removeClass('active');
            items.eq(index).addClass('active');
        }
    
        $('.one-next').click(function(e) {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % itemCount;
            showItem(currentIndex);
        });
    
        $('.one-prev').click(function(e) {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + itemCount) % itemCount;
            showItem(currentIndex);
        });
    
        // Optional: Auto-play functionality
        setInterval(function() {
            $('.one-next').click();
        }, 3000); // Change image every 3 seconds
    });
    //carousel2
    $(document).ready(function() {
        let currentIndex = 0;
        const items = $('.two-carousel-item');
        const itemCount = items.length;
    
        function showItem(index) {
            items.removeClass('active');
            items.eq(index).addClass('active');
        }
    
        $('.two-next').click(function(e) {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % itemCount;
            showItem(currentIndex);
        });
    
        $('.two-prev').click(function(e) {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + itemCount) % itemCount;
            showItem(currentIndex);
        });
    
        // Optional: Auto-play functionality
        setInterval(function() {
            $('.two-next').click();
        }, 3000); // Change image every 3 seconds
    });
    