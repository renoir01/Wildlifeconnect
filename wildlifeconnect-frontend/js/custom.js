// Function to get the current year and display it in the footer
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

// Call the function to display the current year when the page loads
window.onload = function() {
    getYear();

    // Initialize the Owl Carousel for the client section
    $(".client_owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    // Initialize Google Map with markers for East African parks
    if (typeof google !== 'undefined' && document.getElementById("googleMap")) {
        myMap();
    }
};

// Google Map initialization function with markers for East African parks
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-1.2921, 36.8219), // Center the map to Nairobi, Kenya
        zoom: 6,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // List of East African parks with their coordinates and names
    var parks = [
        { lat: -1.2921, lng: 36.8219, name: "Nairobi National Park, Kenya" },
        { lat: -3.4167, lng: 39.6167, name: "Tsavo National Park, Kenya" },
        { lat: -1.9651, lng: 36.8042, name: "Aberdare National Park, Kenya" },
        { lat: -2.1191, lng: 35.3634, name: "Masai Mara National Reserve, Kenya" },
        { lat: -2.7792, lng: 37.3295, name: "Serengeti National Park, Tanzania" },
        { lat: -1.7036, lng: 34.8353, name: "Ngorongoro Crater, Tanzania" },
        { lat: -3.1684, lng: 39.3692, name: "Selous Game Reserve, Tanzania" },
        { lat: -1.2207, lng: 30.1234, name: "Volcanoes National Park, Rwanda" },
        { lat: -1.5401, lng: 29.2290, name: "Akagera National Park, Rwanda" },
    ];

    // Add markers to the map for each park
    parks.forEach(function(park) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(park.lat, park.lng),
            map: map,
            title: park.name
        });

        // Add info window to the marker
        var infowindow = new google.maps.InfoWindow({
            content: park.name
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}