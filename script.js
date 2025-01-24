console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    // Fungsi untuk menampilkan elemen saat di-scroll
    const showSectionOnScroll = () => {
        const scrollY = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                section.classList.add("visible");
            }
        });
    };

    // Menambahkan event listener untuk scroll
    window.addEventListener("scroll", showSectionOnScroll);
    showSectionOnScroll(); // Memanggil fungsi saat halaman dimuat

    // Fungsi untuk pendaftaran
    function register(program) {
        alert(`Anda telah mendaftar untuk program ${program}`);
    }
    // Event listener untuk formulir kontak
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        alert(`Pesan dari ${name} (${email}): ${message}`);
    });

    function initMap() {
        var lokasi = {lat: -6.200000, lng: 106.816666}; // Ganti dengan koordinat yang diinginkan
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: lokasi,
            styles: [ // Gaya peta kustom
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#192c55"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2c5a71"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#29768a"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#406d80"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#406d80"
                        }
                    ]
                }
            ]
        });
    
        var marker = new google.maps.Marker({
            position: lokasi,
            map: map,
            title: 'Lokasi P4'
        });
    
        // Kontrol kustom
        var controlDiv = document.createElement('div');
        var resetButton = document.createElement('button');
        resetButton.innerHTML = 'Reset Peta';
        resetButton.style.backgroundColor = '#007bbf';
        resetButton.style.color = '#fff';
        resetButton.style.border = 'none';
        resetButton.style.padding = '10px';
        resetButton.style.borderRadius = '5px';
        resetButton.style.cursor = 'pointer';
        controlDiv.appendChild(resetButton);
    
        resetButton.addEventListener('click', function() {
            map.setCenter(lokasi);
            map.setZoom(10);
        });
    
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(controlDiv);
    }

    var infoWindow = new google.maps.InfoWindow({
        content: '<h3>Lokasi P4</h3><p>Ini adalah lokasi P4 Kota Administrasi Jakarta Timur.</p>'
    });
    
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

   
});