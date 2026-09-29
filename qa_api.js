/**
 * Q&A API Service for Q&Yay! Game
 * Simulates fetching question and category data from an external dataset/API.
 */
const QAApi = (function() {
    // Database parsed directly from the 2026 KH RoadShow T_F Q&A Dataset
    const qaDatabase = [
        {
            id: 1,
            question: "I cannot find a restaurant in GrabMap. Which category should I choose?",
            category: "POI"
        },
        {
            id: 2,
            question: "The place name in GrabMap is wrong. Which category should I choose?",
            category: "POI"
        },
        {
            id: 3,
            question: "A shop has moved to a new location. Which category should I choose?",
            category: "POI"
        },
        {
            id: 4,
            question: "The pin shows the wrong location. Which category should I choose?",
            category: "POI"
        },
        {
            id: 5,
            question: "I want to add a new place to GrabMap. Which category should I choose?",
            category: "POI"
        },
        {
            id: 6,
            question: "A passenger reports that a place name or opening-hours information is incorrect. Which category does this feedback belong to?",
            category: "POI"
        },
        {
            id: 7,
            question: "GrabMap shows me the wrong route. Which category should I choose?",
            category: "Routing"
        },
        {
            id: 8,
            question: "The ETA shown in the app is incorrect. Which category should I choose? ",
            category: "Routing"
        },
        {
            id: 9,
            question: "The road shown in the app is closed. Which category should I choose?",
            category: "Routing"
        },
        {
            id: 10,
            question: "The route takes me to a difficult pickup location. Which category should I choose?",
            category: "Routing"
        },
        {
            id: 11,
            question: "The service area does not cover my university. Which category should I choose?",
            category: "Geofence / Grab Area / Admin Boundary / Geohash"
        },
        {
            id: 12,
            question: "I need a pickup area at the airport. Which category should I choose?",
            category: "Geofence / Grab Area / Admin Boundary / Geohash"
        },
        {
            id: 13,
            question: "I need a special service area for an event. Which category should I choose?",
            category: "Geofence / Grab Area / Admin Boundary / Geohash"
        },
        {
            id: 14,
            question: "The service area should exclude the airport. Which category should I choose?",
            category: "Geofence / Grab Area / Admin Boundary / Geohash"
        },
        {
            id: 15,
            question: "A six-seater service needs a new geofence copied from an existing one, including the Techo Airport area. Which category does this feedback belong to?",
            category: "Geofence / Grab Area / Admin Boundary / Geohash"
        },
        {
            id: 16,
            question: "I want to receive my food at a Food Locker. Which category should I choose?",
            category: "IoT"
        },
        {
            id: 17,
            question: "I cannot scan the Food Locker to collect my food. Which category should I choose?",
            category: "IoT"
        },
        {
            id: 18,
            question: "The Food Locker says it is full, but it has available space. Which category should I choose? ",
            category: "IoT"
        },
        {
            id: 19,
            question: "I cannot see the scan option for opening the Food Locker. Which category should I choose? ",
            category: "IoT"
        },
        {
            id: 20,
            question: "I selected Food Locker delivery, but the app shows the wrong drop-off location. Which category should I choose?",
            category: "IoT"
        },
        {
            id: 21,
            question: "A passenger reports that a place name or opening-hours information is incorrect. Which category does this feedback belong to?",
            category: "POI"
        }
    ];

    const categories = [
        "POI",
        "Routing",
        "Geofence / Grab Area / Admin Boundary / Geohash",
        "IoT"
    ];

    return {
        /**
         * Fetch all available questions shuffled randomly
         * @returns {Promise<Array>}
         */
        getQuestions: function() {
            return new Promise((resolve) => {
                // Simulate quick API latency (100ms)
                setTimeout(() => {
                    const shuffled = [...qaDatabase].sort(() => Math.random() - 0.5);
                    resolve(shuffled);
                }, 100);
            });
        },

        /**
         * Get the list of standard answer categories
         * @returns {Array<string>}
         */
        getCategories: function() {
            return [...categories];
        }
    };
})();