// Seek It — App Logic & User Authentication

// Users database from userdatabase/users.md
const USERS_DB = [
  { id: 1, name: "Aarav Sharma", email: "aarav@mail.com", password: "Aarav@12" },
  { id: 2, name: "Riya Das", email: "riya@mail.com", password: "Riya@12" },
  { id: 3, name: "Aditya Kumar", email: "aditya@mail.com", password: "Aditya@12" },
  { id: 4, name: "Sneha Patel", email: "sneha@mail.com", password: "Sneha@12" },
  { id: 5, name: "Rahul Nayak", email: "rahul@mail.com", password: "Rahul@12" },
  { id: 6, name: "Ananya Singh", email: "ananya@mail.com", password: "Ananya@12" },
  { id: 7, name: "Rohan Mehta", email: "rohan@mail.com", password: "Rohan@12" },
  { id: 8, name: "Priya Sahu", email: "priya@mail.com", password: "Priya@12" },
  { id: 9, name: "Vivek Mishra", email: "vivek@mail.com", password: "Vivek@12" },
  { id: 10, name: "Neha Gupta", email: "neha@mail.com", password: "Neha@12" },
];

// Malkangiri Sellers database from sellerdatabase/sellserdatabase.md
// Malkangiri Sellers database from sellerdatabase/sellserdatabase.md
const SELLERS_DB = [
  {
    id: 1,
    name: "Ramesh Electronics",
    category: "Electronics",
    address: "Main Road, Malkangiri, Malkangiri, Odisha - 764087",
    email: "ramesh@mail.com",
    username: "ramesh",
    password: "Ramesh@12",
    products: [
      {
        id: 101,
        name: "HDMI Cable 2m",
        price: 250,
        stock: 11,
        available: true,
        image: "product images/Ramesh_Electronics/HDMI_Cable_2m.png",
        brand: "Terabyte Ultra",
        description: "High-speed HDMI 2.0 cable supporting 4K 60Hz Ultra HD, 3D video, and Ethernet. Built with triple shielding and gold-plated connectors for crystal-clear video transmission without signal loss.",
        features: ["4K Ultra HD & 3D Video Support", "Gold-Plated Anti-Corrosion Connectors", "Durable Flexible PVC Jacket (2 Meters)", "Compatible with TV, Monitors, Set-top Boxes & PCs"]
      },
      {
        id: 102,
        name: "USB-C Cable 1m",
        price: 180,
        stock: 11,
        available: true,
        image: "product images/Ramesh_Electronics/USB-C_Cable_1m.png",
        brand: "Portronics FastCharge",
        description: "Heavy-duty fast charging and data sync Type-C cable with 65W Power Delivery support. Tangle-free double-braided nylon exterior with reinforced connector collars.",
        features: ["Supports up to 65W Fast Charging", "480 Mbps High Speed Data Transfer", "Tangle-Free Double Nylon Braided Build", "10,000+ Bend Tested Strain Relief"]
      },
      {
        id: 103,
        name: "Bluetooth Speaker",
        price: 899,
        stock: 11,
        available: true,
        image: "product images/Ramesh_Electronics/Bluetooth_Speaker.png",
        brand: "Zebronics SoundBar",
        description: "Compact wireless speaker delivering rich 10W stereo sound with punchy bass and up to 8 hours of continuous battery playback. Features FM radio, USB, AUX, and MicroSD card inputs.",
        features: ["Dynamic 10W Deep Bass Output", "8 Hours Continuous Playtime", "Bluetooth 5.0 Wireless Range (10m)", "Built-in Mic for Hands-Free Calling"]
      },
      {
        id: 104,
        name: "Wireless Mouse",
        price: 450,
        stock: 11,
        available: true,
        image: "product images/Ramesh_Electronics/Wireless_Mouse.png",
        brand: "HP Optical Pro",
        description: "Ergonomic 2.4GHz wireless optical mouse with plug-and-play USB nano receiver. Features smart automatic sleep mode and 1600 DPI precision tracking for smooth navigation.",
        features: ["2.4GHz Wireless Nano Receiver (Plug & Play)", "Adjustable 1600 DPI Precision Optical Sensor", "Ergonomic Comfort Grip for Long Work Hours", "Up to 12-Month Battery Life with Auto-Sleep"]
      },
      {
        id: 105,
        name: "LED Bulb 12W",
        price: 120,
        stock: 11,
        available: true,
        image: "product images/Ramesh_Electronics/LED_Bulb_12W.png",
        brand: "Philips BrightLite",
        description: "Energy-saving Cool Day Light B22 LED bulb providing bright 1200 lumen illumination with wide beam spread and voltage surge protection up to 4kV.",
        features: ["Bright 1200 Lumens Output (Cool Day White)", "Up to 85% Electricity Energy Savings", "Surge Protection up to 4kV for Rural Lines", "Standard B22 Pin Base Fits All Indian Holders"]
      }
    ]
  },
  {
    id: 2,
    name: "Sahu Stationery",
    category: "Stationery",
    address: "College Road, Malkangiri, Malkangiri, Odisha - 764087",
    email: "sahu@mail.com",
    username: "sahu",
    password: "Sahu@12",
    products: [
      {
        id: 201,
        name: "A4 Notebook 200 Pages",
        price: 90,
        stock: 12,
        available: true,
        image: "product images/Sahu_Stationery/A4_Notebook_200_Pages.png",
        brand: "Classmate Long Book",
        description: "Premium A4 size notebook with smooth 70 GSM elemental chlorine-free paper. Features durable section-sewn soft cover binding with index and ruled pages for neat handwriting.",
        features: ["Smooth 70 GSM Bright White Paper", "Strong Long-Lasting Section Sewn Binding", "A4 Size (29.7cm x 21cm) with Margin Rules", "Ink-Bleed Resistant Surface for All Pens"]
      },
      {
        id: 202,
        name: "Blue Ball Pen Pack",
        price: 60,
        stock: 12,
        available: true,
        image: "product images/Sahu_Stationery/Blue_Ball_Pen_Pack.png",
        brand: "Cello Butterflow Pack",
        description: "Pack of 5 fine 0.7mm tip ballpoint pens with waterproof, smudge-free blue ink. Designed with comfortable textured rubber grip for effortless exam and daily writing.",
        features: ["Value Pack of 5 Smooth Flow Ball Pens", "0.7mm Laser Tip for Fine & Neat Writing", "Smudge-Proof & Waterproof Blue Ink", "Comfortable Non-Slip Rubber Grip"]
      },
      {
        id: 203,
        name: "Chart Paper Pack",
        price: 120,
        stock: 12,
        available: true,
        image: "product images/Sahu_Stationery/Chart_Paper_Pack.png",
        brand: "Camel Art Craft",
        description: "Set of 10 assorted vibrant colored thick chart sheets ideal for school presentations, college projects, art & craft, and poster making.",
        features: ["Pack of 10 Assorted Vibrant Color Sheets", "Heavy GSM Thick Paper Resists Tearing", "Uniform Non-Fading Bright Pigments", "Smooth Surface for Markers, Paints & Sketches"]
      },
      {
        id: 204,
        name: "Project File",
        price: 45,
        stock: 12,
        available: true,
        image: "product images/Sahu_Stationery/Project_File.png",
        brand: "Solo Document Guard",
        description: "Durable clear view PVC clip report file with sturdy sliding grip mechanism to hold official documents, certificates, and student assignments firmly without punching.",
        features: ["No Punching Required Sturdy Clip", "Holds up to 50 A4 Sheets Securely", "Water-Resistant Anti-Static Transparent Cover", "Label Strip on Spine for Easy Identification"]
      },
      {
        id: 205,
        name: "Sketch Pen Set",
        price: 110,
        stock: 12,
        available: true,
        image: "product images/Sahu_Stationery/Sketch_Pen_Set.png",
        brand: "Doms Color Splash",
        description: "Set of 12 bright sketch pens with non-toxic water-based ink and durable bullet tips that resist pushing in under pressure. Washable from most fabrics.",
        features: ["12 Rich Vivid Color Shades", "Non-Toxic & 100% Child-Safe Water Ink", "Durable Pressure-Resistant Bullet Tips", "Washable Ink from Hands & Clothes"]
      }
    ]
  },
  {
    id: 3,
    name: "Maa Laxmi Hardware",
    category: "Hardware & Spare Parts",
    address: "Bus Stand Road, Malkangiri, Malkangiri, Odisha - 764087",
    email: "maalaxmi@mail.com",
    username: "maalaxmi",
    password: "Maalaxmi@12",
    products: [
      {
        id: 301,
        name: "PVC Elbow 1/2 inch",
        price: 25,
        stock: 13,
        available: true,
        image: "product images/Maa_Laxmi_Hardware/PVC_Elbow_1_2_inch.png",
        brand: "Supreme UPVC",
        description: "Heavy-duty UPVC 90-degree 1/2-inch plumbing pipe elbow fitting designed for leak-proof residential and commercial water distribution lines.",
        features: ["Heavy Duty High Pressure UPVC", "Lead-Free & 100% Corrosion Proof", "Smooth Inner Bore for Maximum Water Flow", "Standard 1/2 Inch Socket Diameter"]
      },
      {
        id: 302,
        name: "Brass Tap 1/2 inch",
        price: 180,
        stock: 13,
        available: true,
        image: "product images/Maa_Laxmi_Hardware/Brass_Tap_1_2_inch.png",
        brand: "Prayag Solid Brass",
        description: "Solid forged brass bib cock with premium mirror chrome polish and quarter-turn ceramic disc cartridge for smooth, drip-free water control.",
        features: ["Forged Heavy Brass Body for High Durability", "Mirror Chrome Plated Scratch-Resistant Finish", "Quarter-Turn Smooth Ceramic Disc Valve", "Standard 1/2 Inch BSP Male Thread"]
      },
      {
        id: 303,
        name: "PVC Pipe Connector",
        price: 35,
        stock: 13,
        available: true,
        image: "product images/Maa_Laxmi_Hardware/PVC_Pipe_Connector.png",
        brand: "Astral Pipe Coupler",
        description: "Precision-molded straight PVC coupling connector for seamless jointing of 1/2-inch plumbing pipelines under high water pressure.",
        features: ["High Burst Pressure Tolerance", "Precision Threaded Socket for Tight Seal", "Long-Term Weather & UV Resistant", "Suitable for Hot & Cold Water Distribution"]
      },
      {
        id: 304,
        name: "Door Hinge 3 inch",
        price: 55,
        stock: 13,
        available: true,
        image: "product images/Maa_Laxmi_Hardware/Door_Hinge_3_inch.png",
        brand: "Godrej Hardware",
        description: "Pair of heavy gauge stainless steel butt door hinges with smooth ball-bearing movement and rust-resistant electroplated finish.",
        features: ["304 Grade Stainless Steel Construction", "Smooth Friction-Free Ball-Bearing Swivel", "Heavy Load Carrying Capacity for Wooden Doors", "Includes Stainless Steel Mounting Screws"]
      },
      {
        id: 305,
        name: "Teflon Tape",
        price: 20,
        stock: 13,
        available: true,
        image: "product images/Maa_Laxmi_Hardware/Teflon_Tape.png",
        brand: "Champion PTFE",
        description: "High-density PTFE thread seal plumbing tape for sealing threaded metal and plastic pipe joints against water leaks and gas seepage.",
        features: ["12mm Width x 10 Meter Long Roll", "100% Leak-Proof Thread Seal", "Resistant to High Temperatures & Chemicals", "Essential for All Plumbing Fixture Installations"]
      }
    ]
  },
  {
    id: 4,
    name: "Malkangiri Mobile Point",
    category: "Mobile Accessories",
    address: "Daily Market Road, Malkangiri, Malkangiri, Odisha - 764087",
    email: "mobilepoint@mail.com",
    username: "mobilepoint",
    password: "Mobilepoint@12",
    products: [
      {
        id: 401,
        name: "Phone Cover",
        price: 199,
        stock: 14,
        available: true,
        image: "product images/Malkangiri_Mobile_Point/Phone_Cover.png",
        brand: "AirCushion Armor",
        description: "Shock-absorbing flexible TPU transparent protective back case with reinforced corner air cushions and raised camera lip to safeguard against accidental drops.",
        features: ["Air Cushion Corner Drop Protection", "Anti-Yellowing UV Resistant Clear TPU", "Raised 1.2mm Bezel for Screen & Camera Safety", "Precise Cutouts & Tactile Button Feedback"]
      },
      {
        id: 402,
        name: "Tempered Glass",
        price: 120,
        stock: 14,
        available: true,
        image: "product images/Malkangiri_Mobile_Point/Tempered_Glass.png",
        brand: "Gorilla Shield 9H",
        description: "Edge-to-edge 9H hardness tempered screen protector with oleophobic anti-fingerprint coating, bubble-free installation, and 99.9% HD visual transparency.",
        features: ["9H Surface Hardness Scratch-Proof Glass", "Oleophobic Coating Repels Oil & Fingerprints", "2.5D Polished Curved Smooth Edges", "Case-Friendly Full Coverage Screen Fit"]
      },
      {
        id: 403,
        name: "Type-C Cable",
        price: 150,
        stock: 14,
        available: true,
        image: "product images/Malkangiri_Mobile_Point/Type-C_Cable.png",
        brand: "Realme QuickSync",
        description: "Fast data sync and super-fast charging USB-A to Type-C cable with durable reinforced strain-relief collars and pure copper wiring.",
        features: ["Supports up to 3A Rapid Fast Charging", "480 Mbps Fast File & Photo Transfer", "Tear-Resistant Flexible TPE Outer Jacket", "Universal Fit for All Type-C Android Phones"]
      },
      {
        id: 404,
        name: "Phone Holder",
        price: 250,
        stock: 14,
        available: true,
        image: "product images/Malkangiri_Mobile_Point/Phone_Holder.png",
        brand: "Portronics UnoStand",
        description: "Adjustable multi-angle foldable aluminium desktop mobile stand with anti-slip silicone padding and cable management cutout for watching videos and video calls.",
        features: ["Sturdy Heavy Aluminium Alloy Base", "Multi-Angle Adjustable Viewing (0° - 120°)", "Anti-Slip Silicone Protective Pads", "Foldable Pocket Size for Easy Travel"]
      },
      {
        id: 405,
        name: "20W Charger",
        price: 499,
        stock: 14,
        available: true,
        image: "product images/Malkangiri_Mobile_Point/20W_Charger.png",
        brand: "PowerVolt Turbo",
        description: "Compact 20W Power Delivery (PD) fast wall adapter with intelligent surge, over-voltage, and thermal protection for iPhones and modern Android phones.",
        features: ["20W USB-C Power Delivery Fast Output", "Charges 50% Battery in Just 30 Minutes", "Smart Multi-Protect Safety IC Chip", "Compact Lightweight Travel-Friendly Design"]
      }
    ]
  },
  {
    id: 5,
    name: "Sai Electricals",
    category: "Electrical",
    address: "Hospital Road, Malkangiri, Malkangiri, Odisha - 764087",
    email: "saielectricals@mail.com",
    username: "saielectricals",
    password: "Saielectricals@12",
    products: [
      {
        id: 501,
        name: "MCB 16A",
        price: 180,
        stock: 15,
        available: true,
        image: "product images/Sai_Electricals/MCB_16A.png",
        brand: "Havells Euroload",
        description: "Single pole 16 Amp C-Curve miniature circuit breaker (MCB) engineered for overload and short-circuit protection in residential and commercial electrical wiring.",
        features: ["16A Single Pole C-Curve MCB Rating", "10kA Short Circuit Breaking Capacity", "Flame Retardant PBT High-Grade Housing", "ISI & CE Certified Safety Standard"]
      },
      {
        id: 502,
        name: "6A Modular Switch",
        price: 65,
        stock: 15,
        available: true,
        image: "product images/Sai_Electricals/6A_Modular_Switch.png",
        brand: "Anchor Roma Classic",
        description: "Contemporary 1-way 6A modular switch with silver cadmium oxide contacts for spark-free switching and 1,00,000+ click lifespan in home interiors.",
        features: ["Glossy White UV-Resistant Surface", "Silver Inlay Spark-Free Contacts", "Tested for 1,00,000+ Click Lifespan", "Fits Standard Modular Concealed Plates"]
      },
      {
        id: 503,
        name: "3-Pin Plug",
        price: 55,
        stock: 15,
        available: true,
        image: "product images/Sai_Electricals/3-Pin_Plug.png",
        brand: "Goldmedal PowerTop",
        description: "Heavy-duty 16A 3-pin top plug with solid brass nickel-plated pins and unbreakable polycarbonate casing for geysers, ACs, and kitchen appliances.",
        features: ["Solid Brass Nickel-Plated Contact Pins", "Heavy Load Appliance Rating (16 Ampere)", "Internal Cable Clamping Clip Prevents Pulls", "Fire-Retardant Polycarbonate Body"]
      },
      {
        id: 504,
        name: "Extension Board",
        price: 350,
        stock: 15,
        available: true,
        image: "product images/Sai_Electricals/Extension_Board.png",
        brand: "GM Modular Spike",
        description: "4-socket spike guard extension strip with 2-meter heavy copper cord, master safety switch, LED indicator, and built-in surge suppressor.",
        features: ["4 Universal Sockets with Child Safety Shutters", "2-Meter 100% Pure Copper Power Cord", "Built-in Surge & Spike Suppressor Fuse", "LED Power Status Indicator"]
      },
      {
        id: 505,
        name: "Copper Wire 1.5mm 10m",
        price: 420,
        stock: 15,
        available: true,
        image: "product images/Sai_Electricals/Copper_Wire_1.5mm_10m.png",
        brand: "Finolex FlameGuard",
        description: "Flame Retardant (FR) PVC insulated multi-strand pure electrolytic copper conductor electrical wire for concealed and surface conduit wiring.",
        features: ["1.5 Sq mm Pure Electrolytic Copper Conductor", "Flame Retardant (FR) PVC Insulation Coating", "High Current Carrying Capacity with Low Heat", "ISI Certified 1100V Grade Wire"]
      }
    ]
  },
  {
    id: 6,
    name: "Krishna Auto Spares",
    category: "Auto Spare Parts",
    address: "NH-326 Road, Malkangiri, Malkangiri, Odisha - 764087",
    email: "krishnaauto@mail.com",
    username: "krishnaauto",
    password: "Krishnaauto@12",
    products: [
      {
        id: 601,
        name: "Bike Brake Cable",
        price: 120,
        stock: 16,
        available: true,
        image: "product images/Krishna_Auto_Spares/Bike_Brake_Cable.png",
        brand: "Endurance Pro",
        description: "Heavy-duty inner steel wire front/rear brake cable assembly with smooth nylon-lined outer casing for immediate, responsive braking response.",
        features: ["High-Tensile Galvanized Steel Core", "Smooth Frictionless Nylon Lining", "Universal Fit for 100cc-150cc Bikes", "Weather-Resistant Anti-Rust Outer Casing"]
      },
      {
        id: 602,
        name: "Engine Oil 1L",
        price: 450,
        stock: 16,
        available: true,
        image: "product images/Krishna_Auto_Spares/Engine_Oil_1L.png",
        brand: "Castrol Activ 4T",
        description: "Premium 4T 20W-40 4-stroke motorcycle engine oil with Actibond molecules for continuous engine protection during warm-up and high acceleration.",
        features: ["4T 20W-40 Synthetic Blend Formula (1 Liter)", "Actibond Molecules Cling to Engine Parts", "Prevents Engine Sludge & Piston Wear", "Smoother Clutch Engagement & Gear Shift"]
      },
      {
        id: 603,
        name: "Air Filter",
        price: 180,
        stock: 16,
        available: true,
        image: "product images/Krishna_Auto_Spares/Air_Filter.png",
        brand: "Bosch MotoFilter",
        description: "High-flow pleated micro-fiber air filter element to trap microscopic road dust particles and ensure optimum air-fuel mixture for high mileage.",
        features: ["High Dust Holding Capacity Micro-Fiber", "Maintains Crisp Throttle & Improves Mileage", "OEM Standard Direct Fit Replacement", "Tough Rubber Gasket Prevents Air Leakage"]
      },
      {
        id: 604,
        name: "Spark Plug",
        price: 140,
        stock: 16,
        available: true,
        image: "product images/Krishna_Auto_Spares/Spark_Plug.png",
        brand: "NGK CopperCore",
        description: "Corrosion-resistant copper core motorcycle spark plug delivering reliable ignition sparks under high compression in all weather conditions.",
        features: ["Corrosion-Resistant Copper Core Electrode", "Quick Cold Starts & Steady Idle Performance", "Triple Gasket Seal Prevents Gas Leakage", "Standard Thread Size for Hero, Honda & Bajaj"]
      },
      {
        id: 605,
        name: "Clutch Cable",
        price: 160,
        stock: 16,
        available: true,
        image: "product images/Krishna_Auto_Spares/Clutch_Cable.png",
        brand: "Endurance MotoClutch",
        description: "Flexible clutch wire cable with high tensile strength for feather-light clutch lever pull and reduced hand fatigue during traffic rides.",
        features: ["Feather-Light Smooth Clutch Lever Action", "Tough Weather-Proof Outer Sleeve", "Pre-Lubricated Inner Cable for Long Life", "Exact OEM Spec Length & Fittings"]
      }
    ]
  },
  {
    id: 7,
    name: "New Star General Store",
    category: "General Store",
    address: "Market Road, Malkangiri, Malkangiri, Odisha - 764087",
    email: "newstar@mail.com",
    username: "newstar",
    password: "Newstar@12",
    products: [
      {
        id: 701,
        name: "Cooking Oil 1L",
        price: 150,
        stock: 17,
        available: true,
        image: "product images/New_Star_General_Store/Cooking_Oil_1L.png",
        brand: "Fortune Sunlite",
        description: "Refined pure sunflower cooking oil enriched with Vitamins A and D. Lightweight formula for everyday healthy frying and family cooking.",
        features: ["Enriched with Essential Vitamins A & D", "Light & Easy to Digest for the Whole Family", "High Smoke Point Ideal for Deep & Shallow Frying", "100% Pure & Hygienically Processed (1L Pouch)"]
      },
      {
        id: 702,
        name: "Wheat Flour 5kg",
        price: 280,
        stock: 17,
        available: true,
        image: "product images/New_Star_General_Store/Wheat_Flour_5kg.png",
        brand: "Aashirvaad Sharbati Atta",
        description: "100% pure whole wheat MP Sharbati atta ground with traditional chakki process for soft, fluffy, golden rotis rich in dietary fiber.",
        features: ["100% Whole Wheat Traditional Chakki Atta", "Rich in Natural Dietary Fiber & Nutrients", "Guarantees Soft & Fluffy Rotis for Hours", "0% Maida, No Added Preservatives (5kg Pack)"]
      },
      {
        id: 703,
        name: "Sugar 1kg",
        price: 55,
        stock: 17,
        available: true,
        image: "product images/New_Star_General_Store/Sugar_1kg.png",
        brand: "Madhur Refined Sugar",
        description: "Pure sulphur-free sparkling white refined cane sugar crystals packed through untouched hygienic automated packaging.",
        features: ["100% Sulphur-Free Refining Process", "Uniform Sparkling White Crystal Size", "Hygienically Machine-Packed 1kg Pouch", "Dissolves Quickly for Teas, Sweets & Beverages"]
      },
      {
        id: 704,
        name: "Tea 250g",
        price: 120,
        stock: 17,
        available: true,
        image: "product images/New_Star_General_Store/Tea_250g.png",
        brand: "Tata Tea Gold",
        description: "Exquisite blend of strong Assam CTC tea granules with gently rolled aromatic long tea leaves for rich taste, golden liquor, and aroma.",
        features: ["Blend of Rich CTC Tea & Aromatic Long Leaves", "Golden Bright Liquor with Rich Flavor", "100% Pure Natural Handpicked Indian Tea", "Sealed 250g Aroma-Lock Foil Pack"]
      },
      {
        id: 705,
        name: "Bath Soap Pack",
        price: 160,
        stock: 17,
        available: true,
        image: "product images/New_Star_General_Store/Bath_Soap_Pack.png",
        brand: "Dettol Original Pack",
        description: "Pack of 4 germ protection antibacterial bathing soap bars with moisturizing agents and refreshing pine fragrance.",
        features: ["Value Pack of 4 Soap Bars (125g each)", "99.9% Protection Against Illness-Causing Germs", "Enriched with Moisturizers for Soft Skin", "Refreshing Classic Pine Fragrance"]
      }
    ]
  },
  {
    id: 8,
    name: "Maa Tarini Agri Store",
    category: "Agriculture",
    address: "Weekly Market Road, Malkangiri, Malkangiri, Odisha - 764087",
    email: "maatariniagri@mail.com",
    username: "maatariniagri",
    password: "Maatariniagri@12",
    products: [
      {
        id: 801,
        name: "Tomato Seeds Pack",
        price: 45,
        stock: 18,
        available: true,
        image: "product images/Maa_Tarini_Agri_Store/Tomato_Seeds_Pack.png",
        brand: "Syngenta Abhinav F1",
        description: "High-yielding F1 hybrid tomato seeds producing firm, deep red glossy fruits with high tolerance to leaf curl virus and extended shelf life.",
        features: ["F1 Hybrid High Yield Variety", "85%+ Germination Rate Certified", "High Resistance to Tomato Leaf Curl Virus", "Firm Fruits Suitable for Long-Distance Transport"]
      },
      {
        id: 802,
        name: "Chilli Seeds Pack",
        price: 40,
        stock: 18,
        available: true,
        image: "product images/Maa_Tarini_Agri_Store/Chilli_Seeds_Pack.png",
        brand: "Namdhari Green Hot",
        description: "Hybrid green chilli seeds known for heavy fruit setting, high pungency, uniform dark green pods, and fast germination in 6-10 days.",
        features: ["High Pungency Hot Green Chillies", "High Yield Potential with Extended Harvesting", "Robust Plant Structure Resists Sucking Pests", "Fast Uniform Germination Rate"]
      },
      {
        id: 803,
        name: "Garden Sprayer",
        price: 350,
        stock: 18,
        available: true,
        image: "product images/Maa_Tarini_Agri_Store/Garden_Sprayer.png",
        brand: "KisanKraft PressurePump",
        description: "Heavy-duty 2-liter manual compression pressure spray pump with adjustable brass nozzle for foliar fertilizers, pesticides, and water misting.",
        features: ["2-Liter Tough High-Density Polyethylene Tank", "Solid Adjustable Brass Spray Nozzle (Jet to Mist)", "Lockable Continuous Spray Trigger Mechanism", "Safety Pressure Relief Valve Built-In"]
      },
      {
        id: 804,
        name: "Hand Hoe",
        price: 220,
        stock: 18,
        available: true,
        image: "product images/Maa_Tarini_Agri_Store/Hand_Hoe.png",
        brand: "Tata Agrico Khurpi",
        description: "Forged carbon steel weeding hand hoe (khurpi) with ergonomic treated wooden handle for soil aeration, root weeding, and planting.",
        features: ["Forged High-Carbon Steel Blade", "Ergonomic Solid Hardwood Grip Handle", "Sharp Ground Edge Cuts Tough Weeds Easily", "Heavy-Duty Riveted Joint Construction"]
      },
      {
        id: 805,
        name: "Agricultural Gloves",
        price: 120,
        stock: 18,
        available: true,
        image: "product images/Maa_Tarini_Agri_Store/Agricultural_Gloves.png",
        brand: "KisanGuard Pro",
        description: "Heavy nitrile coated waterproof farming gloves offering thorn puncture resistance and non-slip wet grip during harvesting and soil work.",
        features: ["Heavy Nitrile Waterproof Dipped Palm", "Thorn, Bramble & Puncture Resistant", "Breathable Knitted Elasticated Wrist Cuff", "Washable & Reusable for Heavy Farm Duties"]
      }
    ]
  },
  {
    id: 9,
    name: "Friends Sports & Toys",
    category: "Sports & Toys",
    address: "College Road, Malkangiri, Malkangiri, Odisha - 764087",
    email: "friendssports@mail.com",
    username: "friendssports",
    password: "Friendssports@12",
    products: [
      {
        id: 901,
        name: "Cricket Tennis Ball",
        price: 60,
        stock: 19,
        available: true,
        image: "product images/Friends_Sports_Toys/Cricket_Tennis_Ball.png",
        brand: "Cosco Heavy Red",
        description: "Heavy-weight durable rubber tennis ball with high-visibility wool felt coating for gully and tournament cricket.",
        features: ["Heavy Weight Tournament Standard Specification", "Consistent True Bounce & High Seam Grip", "Durable All-Weather High-Visibility Felt", "Ideal for Box Cricket, Open Ground & Practice"]
      },
      {
        id: 902,
        name: "Badminton Racket",
        price: 550,
        stock: 19,
        available: true,
        image: "product images/Friends_Sports_Toys/Badminton_Racket.png",
        brand: "Yonex MusclePower",
        description: "Lightweight aluminium alloy frame badminton racquet with high tension pre-strung gut and full protective padded zip cover.",
        features: ["Lightweight Isometric Aluminum Frame (95g)", "Pre-Strung Durable High-Tension String", "Comfortable Non-Slip Sweat Resistant Grip", "Includes Full Protective Zipper Head Cover"]
      },
      {
        id: 903,
        name: "Skipping Rope",
        price: 150,
        stock: 19,
        available: true,
        image: "product images/Friends_Sports_Toys/Skipping_Rope.png",
        brand: "Nivia SpeedPro",
        description: "Speed jump skipping rope with smooth 360-degree ball bearing rotation and adjustable length PVC cable for cardio and endurance fitness.",
        features: ["360° Ball Bearing Mechanism for Tangle-Free Spins", "Adjustable 9-Foot Tough PVC Cable", "Sweat-Absorbent Foam Comfort Grips", "Lightweight Cardio Workout for Kids & Adults"]
      },
      {
        id: 904,
        name: "Football",
        price: 450,
        stock: 19,
        available: true,
        image: "product images/Friends_Sports_Toys/Football.png",
        brand: "Nivia Storm Size 5",
        description: "Official Size 5 all-weather stitched rubber football with 32 panels and reinforced air-lock butyl bladder for optimal shape retention.",
        features: ["Official Match Size 5 Specification", "32-Panel Stitched All-Weather Outer Rubber", "Air-Lock Butyl Bladder for High Air Retention", "Consistent Bounce on Turf, Mud & Hard Grounds"]
      },
      {
        id: 905,
        name: "Plastic Toy Car",
        price: 180,
        stock: 19,
        available: true,
        image: "product images/Friends_Sports_Toys/Plastic_Toy_Car.png",
        brand: "Centy Toys SuperSpeed",
        description: "Scale model friction pull-back toy vehicle with opening front doors, authentic exterior detailing, and durable non-toxic ABS plastic build.",
        features: ["Friction-Powered Smooth Pull-Back Mechanism", "Opening Front Doors & Detailed Cockpit Interior", "100% Non-Toxic Child-Safe ABS Plastic", "Smooth Rounded Safety Edges for Ages 3+"]
      }
    ]
  },
  {
    id: 10,
    name: "Bharat Home Needs",
    category: "Home & Kitchen",
    address: "Main Market, Malkangiri, Malkangiri, Odisha - 764087",
    email: "bharathome@mail.com",
    username: "bharathome",
    password: "Bharathome@12",
    products: [
      {
        id: 1001,
        name: "Stainless Steel Bottle",
        price: 250,
        stock: 20,
        available: true,
        image: "product images/Bharat_Home_Needs/Stainless_Steel_Bottle.png",
        brand: "Milton Thermosteel",
        description: "Double-walled vacuum insulated food-grade 18/8 stainless steel bottle that keeps beverages hot for 12 hours or ice-cold for 24 hours.",
        features: ["18/8 Food-Grade Rust-Proof Stainless Steel (750ml)", "Vacuum Insulated: 12h Hot / 24h Cold Retention", "100% Leak-Proof Threaded Cap with Carry Loop", "BPA-Free, Eco-Friendly Alternative to Plastic"]
      },
      {
        id: 1002,
        name: "Non-Stick Pan",
        price: 650,
        stock: 20,
        available: true,
        image: "product images/Bharat_Home_Needs/Non-Stick_Pan.png",
        brand: "Prestige Omega Deluxe",
        description: "Durable 3-layer granite non-stick frying pan (24cm) with heavy induction base, cool-touch handle, and PFOA-free food safety coating.",
        features: ["3-Layer Scratch-Resistant Granite Non-Stick Coating", "Gas Stove & Induction Cooktop Compatible", "Ergonomic Cool-Touch Bakelite Handle", "PFOA Free for Healthy Low-Oil Cooking"]
      },
      {
        id: 1003,
        name: "Kitchen Knife",
        price: 180,
        stock: 20,
        available: true,
        image: "product images/Bharat_Home_Needs/Kitchen_Knife.png",
        brand: "Godrej Cartini Master",
        description: "Razor-sharp laser-edge stainless steel chef's utility knife with textured non-slip comfort grip for effortless vegetable chopping and slicing.",
        features: ["High-Carbon Stainless Steel Razor Blade (8 Inch)", "Laser-Tested Precision Cutting Edge", "Anti-Slip Textured Ergonomic Handle", "Dishwasher Safe & Rust Resistant"]
      },
      {
        id: 1004,
        name: "Lunch Box",
        price: 350,
        stock: 20,
        available: true,
        image: "product images/Bharat_Home_Needs/Lunch_Box.png",
        brand: "Milton Executive Tiffin",
        description: "3-tier leak-proof stainless steel container tiffin set enclosed inside a thermal insulated fabric bag to keep home meals warm and fresh.",
        features: ["3 Stainless Steel Containers (300ml each)", "100% Spill-Proof Airtight Silicone Lids", "Thermal Insulated Zipper Bag Keeps Food Warm", "Compact & Ideal for Office, College & School"]
      },
      {
        id: 1005,
        name: "LED Emergency Lamp",
        price: 499,
        stock: 20,
        available: true,
        image: "product images/Bharat_Home_Needs/LED_Emergency_Lamp.png",
        brand: "Wipro Amber Glow",
        description: "Rechargeable high-power LED emergency lantern with automatic power-cut turn-on, step-less rotary dimmer knob, and 6-hour battery backup.",
        features: ["360-Degree Wide Glow with 24 Bright LEDs", "Up to 6 Hours Long Battery Backup", "Smooth Rotary Brightness Dimmer Switch", "Includes Built-in Overcharge Safety Protection"]
      }
    ]
  }
];

// User Session Management
function getCurrentUser() {
  try {
    const data = localStorage.getItem('seekit_user');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

function setCurrentUser(user) {
  localStorage.setItem('seekit_user', JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem('seekit_user');
}

// Seller Session Management
function getCurrentSeller() {
  try {
    const data = localStorage.getItem('seekit_seller');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

function setCurrentSeller(seller) {
  localStorage.setItem('seekit_seller', JSON.stringify(seller));
}

function clearCurrentSeller() {
  localStorage.removeItem('seekit_seller');
}

// User Cart Management (Synced to Logged-in Profile)
function getUserCart() {
  const user = getCurrentUser();
  if (!user) return [];
  try {
    const data = localStorage.getItem(`seekit_cart_${user.id}`);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function setUserCart(cart) {
  const user = getCurrentUser();
  if (!user) return;
  localStorage.setItem(`seekit_cart_${user.id}`, JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cartNavLabel = document.querySelector('#nav-cart .nav-label');
  const topCartBadge = document.getElementById('top-cart-badge');
  const user = getCurrentUser();
  const cart = getUserCart();
  const totalCount = cart.reduce((acc, item) => acc + (item.qty || 1), 0);

  if (cartNavLabel) {
    if (user) {
      cartNavLabel.textContent = totalCount > 0 ? `Cart (${totalCount})` : 'Cart';
    } else {
      cartNavLabel.textContent = 'Cart';
    }
  }

  if (topCartBadge) {
    if (user && totalCount > 0) {
      topCartBadge.textContent = totalCount;
      topCartBadge.style.display = 'inline-flex';
    } else {
      topCartBadge.style.display = 'none';
    }
  }
}

// ===== Universal User Reservations Helpers (Scoped to Active Profile) =====
function getReservationStorageKey() {
  const user = getCurrentUser();
  return user ? `seekit_user_reservations_${user.id}` : 'seekit_user_reservations_guest';
}

function getUserReservations() {
  try {
    const key = getReservationStorageKey();
    const data = localStorage.getItem(key);
    // Backward compatibility: migrate un-scoped reservations if present
    if (!data) {
      const legacy = localStorage.getItem('seekit_user_reservations');
      if (legacy) {
        localStorage.setItem(key, legacy);
        localStorage.removeItem('seekit_user_reservations');
        return JSON.parse(legacy);
      }
    }
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function updateReservationBadge() {
  const topReservedBadge = document.getElementById('top-reserved-badge');
  const reservations = getUserReservations();

  if (topReservedBadge) {
    if (reservations && reservations.length > 0) {
      topReservedBadge.textContent = reservations.length;
      topReservedBadge.style.display = 'inline-flex';
    } else {
      topReservedBadge.style.display = 'none';
    }
  }
}

function setUserReservations(reservations) {
  const key = getReservationStorageKey();
  localStorage.setItem(key, JSON.stringify(reservations));
  if (typeof renderAccountReservations === 'function') {
    renderAccountReservations();
  }
  if (typeof renderReservedProductsPage === 'function') {
    renderReservedProductsPage();
  }
  if (typeof updateReservationBadge === 'function') {
    updateReservationBadge();
  }
}

function cancelReservation(reservationId) {
  let reservations = getUserReservations();
  const index = reservations.findIndex(r => r.id === reservationId);
  if (index !== -1) {
    const cancelled = reservations.splice(index, 1)[0];
    setUserReservations(reservations);
    showToast(`🗑️ Cancelled reservation for <strong>${cancelled.productName}</strong>`);
    if (typeof renderAccountReservations === 'function') renderAccountReservations();
    if (typeof renderReservedProductsPage === 'function') renderReservedProductsPage();
    if (typeof updateReservationBadge === 'function') updateReservationBadge();
  }
}

function renderReservedProductsPage() {
  const container = document.getElementById('reserved-products-page-list');
  const countLabel = document.getElementById('reserved-count-label');
  if (!container) return;

  const reservations = getUserReservations();

  if (countLabel) {
    countLabel.textContent = reservations.length === 1 ? '1 item held for store pickup' : `${reservations.length} items held for store pickup`;
  }

  if (reservations.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 44px 16px; background: var(--surface); border-radius: var(--r-xl); border: 1px dashed var(--border-strong);">
        <p style="font-size: 2.8rem; margin-bottom: 10px;">📋</p>
        <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--ink); margin-bottom: 6px;">No Reserved Products</h3>
        <p style="font-size: 0.84rem; color: var(--ink-soft); margin-bottom: 22px; max-width: 280px; margin-left: auto; margin-right: auto; line-height: 1.45;">
          You don't have any items reserved right now. Browse nearby stores and reserve products before visiting.
        </p>
        <a href="index.html" class="btn-primary" style="display: inline-flex; align-items: center; justify-content: center; height: 44px; padding: 0 24px; text-decoration: none; border-radius: var(--r-md); font-weight: 700; font-size: 0.9rem;">
          Explore Nearby Products
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="margin-bottom: 14px; background: rgba(225, 29, 72, 0.05); border: 1px solid rgba(225, 29, 72, 0.15); border-radius: var(--r-md); padding: 12px 14px; display: flex; align-items: center; gap: 10px;">
      <span style="font-size: 1.3rem;">ℹ️</span>
      <p style="font-size: 0.78rem; color: var(--ink-secondary); line-height: 1.35; margin: 0;">
        Show your <strong>Pickup OTP</strong> at the store counter. Stores hold reserved items for <strong>2 hours</strong>.
      </p>
    </div>
    <div class="reservations-list">
      ${reservations.map(res => {
        const timeStr = res.date || ('Today, ' + new Date(res.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        return `
          <div class="reservation-card fade-in" data-res-id="${res.id}">
            <div class="reservation-header">
              <span class="shop-badge" style="font-weight: 700; color: var(--ink); display: inline-flex; align-items: center; gap: 5px;">
                🏪 ${res.shopName}
              </span>
              <span class="status-pill ready">Ready for Pickup</span>
            </div>
            
            <div class="reservation-body">
              <h4 class="reservation-prod-name" style="font-size: 1.05rem; font-weight: 800; color: var(--ink); margin-bottom: 6px;">${res.productName}</h4>
              <div class="reservation-meta" style="display: flex; align-items: center; gap: 10px; font-size: 0.84rem; color: var(--ink-soft); margin-bottom: 10px;">
                <span style="font-weight: 800; color: var(--crimson); font-size: 1.05rem;">₹${res.price}</span>
                <span>·</span>
                <span class="reservation-qty">Qty: ${res.qty || 1}</span>
                <span>·</span>
                <span class="reservation-date">⏱️ ${timeStr}</span>
              </div>
            </div>

            <!-- OTP Highlight Box -->
            <div style="background: var(--paper-soft); border: 1px solid var(--border-strong); border-radius: var(--r-sm); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <div>
                <span style="font-size: 0.7rem; font-weight: 700; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.05em; display: block;">Store Handover Code</span>
                <span style="font-family: 'Space Grotesk', monospace; font-size: 1.15rem; font-weight: 800; color: var(--crimson); letter-spacing: 0.04em;">${res.code}</span>
              </div>
              <span style="font-size: 0.72rem; font-weight: 700; color: var(--leaf); background: var(--leaf-wash); padding: 4px 8px; border-radius: var(--r-xs); border: 1px solid var(--leaf-border);">✓ Confirmed</span>
            </div>

            <div style="display: flex; gap: 8px;">
              <button class="btn-outline btn-call-shop" data-shop="${res.shopName}" style="flex: 1; height: 38px; font-size: 0.8rem; padding: 0 10px;">
                📞 Call Shop
              </button>
              <button class="btn-outline btn-cancel-res-item" data-res-id="${res.id}" data-name="${res.productName}" style="flex: 1; height: 38px; font-size: 0.8rem; padding: 0 10px; color: var(--crimson); border-color: rgba(225, 29, 72, 0.25);">
                ✕ Cancel
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Attach button events
  container.querySelectorAll('.btn-call-shop').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const shop = e.currentTarget.dataset.shop;
      showToast(`📞 Dialing store phone for <strong>${shop}</strong>...`);
    });
  });

  container.querySelectorAll('.btn-cancel-res-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.resId);
      const name = e.currentTarget.dataset.name;
      if (confirm(`Are you sure you want to cancel the reservation for "${name}"?`)) {
        cancelReservation(id);
      }
    });
  });
}

function renderAccountReservations() {
  const reservations = getUserReservations();
  const reservationsBadge = document.getElementById('reservations-badge');
  const reservationsList = document.getElementById('reservations-list');

  if (reservationsBadge) {
    reservationsBadge.textContent = reservations.length > 0 ? `${reservations.length}` : '0';
    if (reservations.length > 0) {
      reservationsBadge.style.color = 'var(--crimson)';
      reservationsBadge.style.background = 'var(--crimson-wash)';
      reservationsBadge.style.fontWeight = '800';
    } else {
      reservationsBadge.style.color = 'var(--ink-mute)';
      reservationsBadge.style.background = '#F3F4F6';
      reservationsBadge.style.fontWeight = '600';
    }
  }

  if (reservationsList) {
    if (reservations.length === 0) {
      reservationsList.innerHTML = `
        <div style="text-align: center; padding: 36px 16px;">
          <p style="font-size: 2.5rem; margin-bottom: 8px;">📦</p>
          <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--ink); margin-bottom: 6px;">No Active Reservations</h4>
          <p style="font-size: 0.82rem; color: var(--ink-soft); margin-bottom: 20px; line-height: 1.4;">
            You have no reserved items waiting for pickup at nearby local shops.
          </p>
          <a href="index.html" class="btn-primary" style="display: inline-flex; align-items: center; justify-content: center; height: 42px; padding: 0 20px; text-decoration: none; border-radius: var(--r-md); font-weight: 700; font-size: 0.88rem;">
            Explore Nearby Products
          </a>
        </div>
      `;
    } else {
      reservationsList.innerHTML = reservations.map(res => {
        const timeStr = res.date || ('Today, ' + new Date(res.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        return `
          <div class="reservation-card fade-in" data-res-id="${res.id}">
            <div class="reservation-header">
              <div class="reservation-shop">
                <span class="shop-badge">📍 ${res.shopName}</span>
              </div>
              <span class="status-pill ready">Ready for Pickup</span>
            </div>
            <div class="reservation-body">
              <h4 class="reservation-prod-name">${res.productName}</h4>
              <div class="reservation-meta">
                <span class="reservation-price">₹${res.price}</span>
                <span class="reservation-qty">Qty: ${res.qty || 1}</span>
                <span class="reservation-date">⏱️ ${timeStr}</span>
              </div>
            </div>
            <div class="reservation-footer">
              <span class="reservation-code">Pickup OTP: <strong style="color: var(--crimson); font-size: 0.95rem;">${res.code}</strong></span>
              <button class="btn-cancel-reservation" data-res-id="${res.id}" title="Cancel this reservation">
                ✕ Cancel Reservation
              </button>
            </div>
          </div>
        `;
      }).join('');

      reservationsList.querySelectorAll('.btn-cancel-reservation').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = parseInt(e.currentTarget.dataset.resId);
          if (confirm('Are you sure you want to cancel this store pickup reservation?')) {
            cancelReservation(id);
          }
        });
      });
    }
  }
}

// Universal Floating Toast Notification (Short 2 sec toast)
function showToast(message) {
  let toast = document.getElementById('seekit-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'seekit-toast';
    toast.className = 'toast-container';
    document.body.appendChild(toast);
  }
  toast.innerHTML = message;
  toast.classList.add('show');

  if (window._toastTimeout) clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

function addToUserCart(product) {
  const user = getCurrentUser();
  if (!user) {
    showToast('🔒 Please sign in to add items to your cart');
    const currentPage = encodeURIComponent(window.location.pathname.split('/').pop() || 'index.html');
    setTimeout(() => {
      window.location.href = `login.html?redirect=${currentPage}`;
    }, 1000);
    return false;
  }

  const cart = getUserCart();
  const existing = cart.find(item => item.id === product.id && item.shopName === product.shopName);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      shopName: product.shopName,
      image: product.image || '',
      qty: 1
    });
  }

  setUserCart(cart);
  showToast(`🛒 Added <strong>${product.name}</strong> to Cart`);
  return true;
}

function removeFromUserCart(productId, shopName) {
  const user = getCurrentUser();
  if (!user) return false;
  let cart = getUserCart();
  const itemToRemove = cart.find(item => item.id === productId && item.shopName === shopName);
  cart = cart.filter(item => !(item.id === productId && item.shopName === shopName));
  setUserCart(cart);
  if (itemToRemove) {
    showToast(`🗑️ Removed <strong>${itemToRemove.name}</strong> from Cart`);
  }
  return true;
}

// Universal Product Details Modal Function
function openProductDetailsModal(productId, shopName) {
  let seller = null;
  let product = null;

  if (shopName) {
    seller = SELLERS_DB.find(s => s.name === shopName);
    if (seller) {
      product = seller.products.find(p => p.id === productId);
    }
  }

  if (!product) {
    for (const s of SELLERS_DB) {
      const p = s.products.find(item => item.id === productId);
      if (p) {
        product = p;
        seller = s;
        break;
      }
    }
  }

  if (!product || !seller) return;

  let modal = document.getElementById('product-details-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'product-details-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  const imgSrc = product.image ? encodeURI(product.image) : 'logo.webp';
  const userCart = getUserCart();
  const isInCart = userCart.some(item => item.id === product.id && item.shopName === seller.name);

  const featuresList = (product.features || []).map(f => `
    <li class="prod-modal-feature-item">${f}</li>
  `).join('');

  modal.innerHTML = `
    <div class="product-modal-sheet">
      <div class="modal-handle"></div>
      <button class="prod-modal-close" id="btn-close-prod-modal" aria-label="Close">✕</button>

      <div class="prod-modal-img-wrap">
        <img src="${imgSrc}" alt="${product.name}" class="prod-modal-img" onerror="this.src='logo.webp'" />
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
        <span style="font-size: 0.76rem; font-weight: 700; color: var(--brand); background: var(--brand-light); padding: 2px 8px; border-radius: var(--radius-full);">
          ${product.brand || seller.category}
        </span>
        <span class="prod-modal-stock-badge">🟢 In Stock (${product.stock} units)</span>
      </div>

      <h3 class="prod-modal-title" style="margin-top: 6px;">${product.name}</h3>

      <div class="prod-modal-price-row">
        <span class="prod-modal-price">₹${product.price}</span>
        <span style="font-size: 0.74rem; color: var(--gray-500); font-weight: 600;">Inclusive of all taxes</span>
      </div>

      <div class="prod-modal-shop-card" id="prod-modal-open-shop-btn" style="cursor: pointer; transition: all 0.15s ease;" title="Tap to view ${seller.name} Store Profile">
        <div class="prod-modal-shop-name">
          <span>🏪 ${seller.name} <span style="font-size: 0.76rem; color: var(--brand);">➔ View Shop</span></span>
          <span style="font-size: 0.68rem; color: #059669; font-weight: 700; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 1px 6px; border-radius: var(--radius-full);">Verified Seller</span>
        </div>
        <p class="prod-modal-shop-addr">📍 ${seller.address}</p>
        <div style="font-size: 0.72rem; color: #059669; font-weight: 700; margin-top: 4px;">⚡ Instant Store Pickup Available Today</div>
      </div>

      <div style="margin-bottom: 8px;">
        <h4 class="prod-modal-desc-title">Product Overview</h4>
        <p class="prod-modal-desc-text">${product.description || 'Quality local store product backed by verified seller guarantee.'}</p>
      </div>

      ${featuresList ? `
        <div style="margin-bottom: 12px;">
          <h4 class="prod-modal-desc-title">Key Highlights & Specs</h4>
          <ul class="prod-modal-feature-list">
            ${featuresList}
          </ul>
        </div>
      ` : ''}

      <div class="prod-modal-actions">
        <button class="btn-cart-icon-action ${isInCart ? 'in-cart' : ''}" id="modal-cart-btn" style="width: 44px; height: 44px; border-radius: 50%;" title="${isInCart ? 'In Cart' : 'Add to Cart'}">
          ${isInCart ? `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ` : `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          `}
        </button>
        <button class="btn-submit" id="modal-reserve-btn" style="flex: 1; padding: 10px 14px; font-size: 0.88rem;">
          Reserve for Store Pickup (₹${product.price})
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');

  // Close button listener
  document.getElementById('btn-close-prod-modal').addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Open Shop Profile From Product Modal
  const openShopBtn = document.getElementById('prod-modal-open-shop-btn');
  if (openShopBtn) {
    openShopBtn.addEventListener('click', () => {
      openShopProfileModal(seller.name);
    });
  }

  // Modal Cart Toggle
  const modalCartBtn = document.getElementById('modal-cart-btn');
  if (modalCartBtn) {
    modalCartBtn.addEventListener('click', () => {
      const isCurrentlyInCart = modalCartBtn.classList.contains('in-cart');
      if (isCurrentlyInCart) {
        removeFromUserCart(product.id, seller.name);
        modalCartBtn.classList.remove('in-cart');
        modalCartBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        `;
      } else {
        const added = addToUserCart({
          id: product.id,
          name: product.name,
          shopName: seller.name,
          price: product.price,
          image: product.image
        });
        if (added) {
          modalCartBtn.classList.add('in-cart');
          modalCartBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          `;
        }
      }
      if (typeof renderHomeProducts === 'function') renderHomeProducts();
      if (typeof renderCategoriesPage === 'function') renderCategoriesPage();
      if (typeof renderShopsPage === 'function') renderShopsPage();
    });
  }

  // Modal Reserve Action
  const modalReserveBtn = document.getElementById('modal-reserve-btn');
  if (modalReserveBtn) {
    modalReserveBtn.addEventListener('click', () => {
      const otp = '#SK-' + Math.floor(1000 + Math.random() * 9000);
      const userReservations = getUserReservations();
      userReservations.unshift({
        id: Date.now(),
        productName: product.name,
        shopName: seller.name,
        price: product.price,
        qty: 1,
        code: otp,
        status: 'Confirmed',
        date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setUserReservations(userReservations);
      modalReserveBtn.textContent = '✓ Reserved for Pickup!';
      modalReserveBtn.style.background = '#059669';
      modalReserveBtn.style.borderColor = '#059669';
      showToast(`🎉 Reserved <strong>${product.name}</strong>! Pickup OTP: <strong>${otp}</strong>`);
    });
  }
}

// Universal Shop Profile Modal Function
// Universal Shop Profile Modal Function (Shows Shop Details & Contact Info Only)
function openShopProfileModal(shopIdentifier) {
  let seller = null;
  if (typeof shopIdentifier === 'number') {
    seller = SELLERS_DB.find(s => s.id === shopIdentifier);
  } else {
    seller = SELLERS_DB.find(s => s.name.toLowerCase() === String(shopIdentifier).toLowerCase() || s.id == shopIdentifier);
  }

  if (!seller) return;

  let modal = document.getElementById('shop-profile-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'shop-profile-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  const userCart = getUserCart();
  const shopProductRows = seller.products.map(prod => {
    const imgSrc = prod.image ? encodeURI(prod.image) : 'logo.webp';
    const isInCart = userCart.some(item => item.id === prod.id && item.shopName === seller.name);

    return `
      <div class="category-prod-row" data-prod-id="${prod.id}" style="cursor: pointer;">
        <img src="${imgSrc}" alt="${prod.name}" onerror="this.src='logo.webp'" />
        <div class="category-prod-row-info">
          <h5 class="category-prod-row-name">${prod.name}</h5>
          <div style="display: flex; align-items: center; gap: 8px; margin-top: 3px;">
            <span class="category-prod-row-price">₹${prod.price}</span>
            <span style="font-size: 0.72rem; color: #059669; font-weight: 700;">● In Stock (${prod.stock})</span>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <button class="btn-cart-icon-action ${isInCart ? 'in-cart' : ''}" data-id="${prod.id}" data-shop="${seller.name}" data-name="${prod.name}" data-price="${prod.price}" data-image="${prod.image || ''}" title="${isInCart ? 'In Cart (Tap to Remove)' : 'Add to Cart'}">
            ${isInCart ? `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ` : `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            `}
          </button>
          <button class="btn-reserve-item" data-id="${prod.id}" data-shop="${seller.name}" data-name="${prod.name}" data-price="${prod.price}">
            Reserve
          </button>
        </div>
      </div>
    `;
  }).join('');

  modal.innerHTML = `
    <div class="shop-profile-sheet">
      <div class="modal-handle"></div>
      <button class="prod-modal-close" id="btn-close-shop-modal" aria-label="Close">✕</button>

      <!-- Shop Header Banner -->
      <div class="shop-profile-banner">
        <div class="shop-profile-top">
          <div>
            <h3 class="shop-profile-name">🏪 ${seller.name}</h3>
            <span class="shop-profile-cat-badge">${seller.category}</span>
          </div>
          <span style="font-size: 0.68rem; font-weight: 700; color: #a7f3d0; background: rgba(5, 150, 105, 0.25); border: 1px solid #059669; border-radius: var(--r-pill); padding: 2px 8px; white-space: nowrap;">
            ✓ Verified Merchant
          </span>
        </div>

        <div class="shop-profile-stats-grid">
          <div class="shop-profile-stat-box">
            <span class="shop-profile-stat-val">⭐ 4.8</span>
            <span class="shop-profile-stat-lbl">120+ Reviews</span>
          </div>
          <div class="shop-profile-stat-box">
            <span class="shop-profile-stat-val">📦 ${seller.products.length}</span>
            <span class="shop-profile-stat-lbl">In-Stock Items</span>
          </div>
          <div class="shop-profile-stat-box">
            <span class="shop-profile-stat-val">⚡ 15 min</span>
            <span class="shop-profile-stat-lbl">Pickup Ready</span>
          </div>
        </div>
      </div>

      <!-- Contact Demo Buttons -->
      <div class="shop-profile-actions-bar">
        <button class="btn-shop-contact call" id="btn-demo-call" type="button" style="cursor: pointer;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call Store
        </button>
        <button class="btn-shop-contact whatsapp" id="btn-demo-whatsapp" type="button" style="cursor: pointer;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          WhatsApp
        </button>
      </div>

      <!-- Store Details Info Card -->
      <div class="shop-profile-info-card">
        <div class="shop-profile-info-row">
          <span class="shop-profile-info-icon">📍</span>
          <div>
            <strong>Store Address:</strong>
            <div>${seller.address}</div>
            <span style="font-size: 0.72rem; color: var(--crimson); font-weight: 700;">~0.8 km from your current location</span>
          </div>
        </div>

        <div class="shop-profile-info-row">
          <span class="shop-profile-info-icon">🕒</span>
          <div>
            <strong>Opening Hours:</strong>
            <div>8:30 AM – 9:00 PM · Monday to Sunday (Open 7 Days)</div>
          </div>
        </div>

        <div class="shop-profile-info-row">
          <span class="shop-profile-info-icon">💳</span>
          <div>
            <strong>Accepted Payment Methods:</strong>
            <div>UPI (GPay / PhonePe / Paytm / QR), Cash on Pickup, Cards</div>
          </div>
        </div>
      </div>

      <!-- Shop Products Catalog -->
      <div style="margin-top: 14px;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--ink); margin-bottom: 10px;">📦 In-Stock Items (${seller.products.length})</h4>
        <div class="category-products-grid">
          ${shopProductRows}
        </div>
      </div>

      <button class="btn-submit" id="btn-done-shop-modal" style="width: 100%; margin-top: 16px; padding: 10px; font-size: 0.88rem;">
        Close Store Details
      </button>
    </div>
  `;

  modal.classList.add('active');

  // Close buttons
  const closeBtn = document.getElementById('btn-close-shop-modal');
  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));

  const doneBtn = document.getElementById('btn-done-shop-modal');
  if (doneBtn) doneBtn.addEventListener('click', () => modal.classList.remove('active'));

  // Demo Call & WhatsApp Buttons
  const btnDemoCall = document.getElementById('btn-demo-call');
  if (btnDemoCall) {
    btnDemoCall.addEventListener('click', () => {
      showToast(`📞 Calling <strong>${seller.name}</strong> (Demo)`);
    });
  }

  const btnDemoWhatsapp = document.getElementById('btn-demo-whatsapp');
  if (btnDemoWhatsapp) {
    btnDemoWhatsapp.addEventListener('click', () => {
      showToast(`💬 Opening WhatsApp chat with <strong>${seller.name}</strong> (Demo)`);
    });
  }

  // Cart & Reserve listeners inside modal
  modal.querySelectorAll('.btn-cart-icon-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetBtn = e.currentTarget;
      const id = parseInt(targetBtn.dataset.id);
      const name = targetBtn.dataset.name;
      const shopName = targetBtn.dataset.shop;
      const price = parseInt(targetBtn.dataset.price);
      const image = targetBtn.dataset.image;

      const isCurrentlyInCart = targetBtn.classList.contains('in-cart');
      if (isCurrentlyInCart) {
        removeFromUserCart(id, shopName);
        targetBtn.classList.remove('in-cart');
        targetBtn.title = 'Add to Cart';
        targetBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        `;
      } else {
        const success = addToUserCart({ id, name, shopName, price, image });
        if (success) {
          targetBtn.classList.add('in-cart');
          targetBtn.title = 'In Cart (Tap to Remove)';
          targetBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          `;
        }
      }
    });
  });

  modal.querySelectorAll('.btn-reserve-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodName = e.target.dataset.name;
      const shopName = e.target.dataset.shop;
      const price = e.target.dataset.price;
      const otp = '#SK-' + Math.floor(1000 + Math.random() * 9000);

      const userReservations = getUserReservations();
      userReservations.unshift({
        id: Date.now(),
        productName: prodName,
        shopName: shopName,
        price: price,
        qty: 1,
        code: otp,
        status: 'Confirmed',
        date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setUserReservations(userReservations);

      e.target.textContent = '✓ Reserved';
      e.target.style.background = '#059669';
      e.target.style.borderColor = '#059669';
      e.target.style.color = '#fff';

      showToast(`🎉 Reserved <strong>${prodName}</strong>! OTP: <strong>${otp}</strong>`);
    });
  });

  modal.querySelectorAll('.category-prod-row').forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      const prodId = parseInt(row.dataset.prodId);
      openProductDetailsModal(prodId, seller.name);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Immediate reservation badge & reserved page rendering
  if (typeof updateReservationBadge === 'function') {
    updateReservationBadge();
  }
  if (document.getElementById('reserved-products-page-list')) {
    renderReservedProductsPage();
  }

  // ===== 1. Location Modal (Home Page) =====
  const locationBtn = document.getElementById('location-btn');
  const locationModal = document.getElementById('location-modal');
  const locationText = document.getElementById('location-text');
  const locationStatus = document.getElementById('location-status');
  const pincodeInput = document.getElementById('pincode-input');
  const pincodeSubmit = document.getElementById('pincode-submit');
  const fetchLocationBtn = document.getElementById('fetch-location-btn');

  // Load saved location or default to Malkangiri, Odisha
  const savedLocation = localStorage.getItem('seekit_location') || 'Malkangiri, Odisha';
  if (locationText) {
    locationText.textContent = savedLocation;
  }

  if (locationBtn && locationModal) {
    locationBtn.addEventListener('click', () => {
      locationModal.classList.add('active');
      if (locationStatus) locationStatus.textContent = '';
    });

    locationModal.addEventListener('click', (e) => {
      if (e.target === locationModal) {
        locationModal.classList.remove('active');
      }
    });
  }

  if (pincodeSubmit && pincodeInput && locationStatus) {
    const handlePincode = () => {
      const pin = pincodeInput.value.trim();
      if (pin.length !== 6 || isNaN(pin)) {
        locationStatus.textContent = 'Please enter a valid 6-digit pincode.';
        locationStatus.style.color = '#ef4444';
        return;
      }
      locationStatus.style.color = '';
      locationStatus.textContent = 'Looking up pincode...';

      const updateLocationState = (place) => {
        if (locationText) locationText.textContent = place;
        const shopsLocElem = document.getElementById('shops-location-text');
        if (shopsLocElem) shopsLocElem.textContent = `📍 ${place}`;
        localStorage.setItem('seekit_location', place);
        locationStatus.textContent = `📍 Location set to ${place}`;
        locationStatus.style.color = '';
        setTimeout(() => {
          locationModal.classList.remove('active');
          if (typeof renderHomeProducts === 'function') renderHomeProducts();
          if (typeof renderShopsPage === 'function') renderShopsPage();
        }, 800);
      };

      fetch(`https://api.postalpincode.in/pincode/${pin}`)
        .then(res => res.json())
        .then(data => {
          if (data[0]?.Status === 'Success' && data[0]?.PostOffice?.length > 0) {
            const po = data[0].PostOffice[0];
            const place = `${po.Block || po.Name}, ${po.State} - ${pin}`;
            updateLocationState(place);
          } else {
            // If pincode is custom demo pincode (like 764045, 764048, 764087)
            if (['764045', '764048', '764087'].includes(pin)) {
              const place = `Malkangiri, Odisha - ${pin}`;
              updateLocationState(place);
            } else {
              const customPlace = `Pincode ${pin}`;
              updateLocationState(customPlace);
            }
          }
        })
        .catch(() => {
          if (['764045', '764048', '764087'].includes(pin)) {
            const place = `Malkangiri, Odisha - ${pin}`;
            updateLocationState(place);
          } else {
            locationStatus.textContent = 'Network error. Try again.';
            locationStatus.style.color = '#ef4444';
          }
        });
    };

    pincodeSubmit.addEventListener('click', handlePincode);
    pincodeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handlePincode();
    });
  }

  if (fetchLocationBtn && locationStatus) {
    fetchLocationBtn.addEventListener('click', () => {
      if (!navigator.geolocation) {
        locationStatus.textContent = '❌ Geolocation is not supported by your browser.';
        locationStatus.style.color = '#ef4444';
        return;
      }

      locationStatus.style.color = 'var(--brand)';
      locationStatus.textContent = '⏳ Requesting permission & fetching location...';
      fetchLocationBtn.disabled = true;
      fetchLocationBtn.style.opacity = '0.7';

      const resetBtn = () => {
        fetchLocationBtn.disabled = false;
        fetchLocationBtn.style.opacity = '1';
      };

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          locationStatus.textContent = '📍 Resolving your city & district...';

          try {
            // First try BigDataCloud client API (fast, reliable CORS)
            const bdcRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            const bdcData = await bdcRes.json();
            
            let placeName = '';
            if (bdcData) {
              const locality = bdcData.locality || bdcData.city || bdcData.principalSubdivisionDistrict;
              const state = bdcData.principalSubdivision || '';
              if (locality && state) {
                placeName = `${locality}, ${state}`;
              } else if (locality) {
                placeName = locality;
              }
            }

            // Fallback to OpenStreetMap if needed
            if (!placeName) {
              const osmRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
              const osmData = await osmRes.json();
              const addr = osmData.address || {};
              const city = addr.city || addr.town || addr.village || addr.county || addr.suburb;
              const state = addr.state || '';
              placeName = state ? `${city}, ${state}` : (city || 'Current Location');
            }

            if (locationText) locationText.textContent = placeName;
            localStorage.setItem('seekit_location', placeName);
            const shopsLoc = document.getElementById('shops-location-text');
            if (shopsLoc) shopsLoc.textContent = `📍 ${placeName}`;
            locationStatus.style.color = '#059669';
            locationStatus.textContent = `✓ Location set to ${placeName}`;
            setTimeout(() => {
              locationModal?.classList.remove('active');
              resetBtn();
              if (typeof renderHomeProducts === 'function') renderHomeProducts();
              if (typeof renderCategoriesPage === 'function') renderCategoriesPage();
              if (typeof renderShopsPage === 'function') renderShopsPage();
            }, 800);
          } catch (err) {
            // Coordinate fallback
            const displayCoord = `${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E`;
            if (locationText) locationText.textContent = displayCoord;
            localStorage.setItem('seekit_location', displayCoord);
            const shopsLoc = document.getElementById('shops-location-text');
            if (shopsLoc) shopsLoc.textContent = `📍 ${displayCoord}`;
            locationStatus.style.color = '#059669';
            locationStatus.textContent = `✓ Location set to ${displayCoord}`;
            setTimeout(() => {
              locationModal?.classList.remove('active');
              resetBtn();
              if (typeof renderHomeProducts === 'function') renderHomeProducts();
              if (typeof renderCategoriesPage === 'function') renderCategoriesPage();
              if (typeof renderShopsPage === 'function') renderShopsPage();
            }, 800);
          }
        },
        async (error) => {
          // If browser blocked GPS (e.g. running from file:// protocol or permission denied),
          // automatically fallback to IP-based location detection so it works everywhere!
          locationStatus.style.color = 'var(--brand)';
          locationStatus.textContent = '🌐 Detecting location via network IP...';

          try {
            // 1. Try BigDataCloud reverse geocode
            const ipRes = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client');
            const ipData = await ipRes.json();

            let detectedCity = ipData.locality || ipData.city || ipData.principalSubdivisionDistrict;
            let detectedState = ipData.principalSubdivision || '';
            let placeName = '';

            if (detectedCity && detectedState) {
              placeName = `${detectedCity}, ${detectedState}`;
            } else if (detectedCity) {
              placeName = detectedCity;
            }

            // 2. Fallback to ipapi.co if needed
            if (!placeName) {
              const ip2Res = await fetch('https://ipapi.co/json/');
              const ip2Data = await ip2Res.json();
              if (ip2Data.city && ip2Data.region) {
                placeName = `${ip2Data.city}, ${ip2Data.region}`;
              } else if (ip2Data.city) {
                placeName = ip2Data.city;
              }
            }

            if (!placeName) placeName = 'Malkangiri, Odisha - 764045';

            if (locationText) locationText.textContent = placeName;
            localStorage.setItem('seekit_location', placeName);
            const shopsLoc = document.getElementById('shops-location-text');
            if (shopsLoc) shopsLoc.textContent = `📍 ${placeName}`;
            locationStatus.style.color = '#059669';
            locationStatus.textContent = `✓ Location detected: ${placeName}`;
            setTimeout(() => {
              locationModal?.classList.remove('active');
              resetBtn();
              if (typeof renderHomeProducts === 'function') renderHomeProducts();
              if (typeof renderCategoriesPage === 'function') renderCategoriesPage();
              if (typeof renderShopsPage === 'function') renderShopsPage();
            }, 900);
          } catch (ipErr) {
            resetBtn();
            locationStatus.style.color = '#ef4444';
            locationStatus.textContent = '❌ Location unavailable. Please enter your 6-digit pincode above.';
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 8000,
          maximumAge: 0
        }
      );
    });
  }

function isMalkangiriLocation(locationStr) {
  if (!locationStr) return true;
  const str = locationStr.toLowerCase();
  return str.includes('malkangiri') || str.includes('764045') || str.includes('764048') || str.includes('764087');
}

// ===== Home Products Feed & Search Logic (index.html) =====
  const homeProductsGrid = document.getElementById('home-products-grid');
  const homeFeedTitle = document.getElementById('home-feed-title');
  const homeFeedCount = document.getElementById('home-feed-count');
  const searchInput = document.getElementById('search-input');
  const categoryChips = document.querySelectorAll('#category-chips .chip');

  function renderHomeProducts() {
    if (!homeProductsGrid) return;

    const currentLoc = localStorage.getItem('seekit_location') || 'Malkangiri, Odisha - 764045';
    const city = currentLoc.split(',')[0].trim();
    const isMalkangiri = isMalkangiriLocation(currentLoc);

    if (!isMalkangiri) {
      if (homeFeedTitle) {
        homeFeedTitle.textContent = `Available in ${city}`;
      }
      if (homeFeedCount) {
        homeFeedCount.textContent = '0 Products';
      }
      homeProductsGrid.innerHTML = `
        <div class="no-products-msg" style="padding: 36px 20px;">
          <span style="font-size: 2.6rem; display: block; margin-bottom: 8px;">📍</span>
          <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">No products listed in ${currentLoc}</h4>
          <p style="font-size: 0.82rem; color: var(--gray-500); margin: 6px 0 18px; line-height: 1.4;">
            There are no registered local stores or products in this pincode yet. Currently, verified local stores are active in <strong>Malkangiri (764045 / 764048)</strong>.
          </p>
          <button id="btn-switch-malkangiri-home" class="btn-submit" style="max-width: 260px; margin: 0 auto; background: var(--brand);">
            Switch to Malkangiri (764045)
          </button>
        </div>
      `;

      const switchBtn = document.getElementById('btn-switch-malkangiri-home');
      if (switchBtn) {
        switchBtn.addEventListener('click', () => {
          const defPlace = 'Malkangiri, Odisha - 764045';
          localStorage.setItem('seekit_location', defPlace);
          if (locationText) locationText.textContent = defPlace;
          const shopsLoc = document.getElementById('shops-location-text');
          if (shopsLoc) shopsLoc.textContent = `📍 ${defPlace}`;
          renderHomeProducts();
          showToast(`📍 Switched location to <strong>${defPlace}</strong>`);
        });
      }
      return;
    }

    if (homeFeedTitle) {
      homeFeedTitle.textContent = `Available in ${city}`;
    }

    // Collect all products across all 10 sellers from SELLERS_DB
    let allProducts = [];
    SELLERS_DB.forEach((seller, idx) => {
      seller.products.forEach(prod => {
        allProducts.push({
          ...prod,
          shopId: seller.id,
          shopName: seller.name,
          shopCategory: seller.category,
          distance: (0.4 + (idx * 0.2)).toFixed(1) + ' km'
        });
      });
    });

    // Category Filter
    const activeChip = document.querySelector('#category-chips .chip.active');
    const selectedCategory = activeChip ? activeChip.dataset.category : 'All';
    if (selectedCategory && selectedCategory !== 'All') {
      allProducts = allProducts.filter(p => 
        p.shopCategory.toLowerCase().includes(selectedCategory.toLowerCase()) || 
        selectedCategory.toLowerCase().includes(p.shopCategory.toLowerCase())
      );
    }

    // Search Query Filter
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (query) {
      allProducts = allProducts.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.shopName.toLowerCase().includes(query) ||
        p.shopCategory.toLowerCase().includes(query)
      );
    }

    // Update count badge
    if (homeFeedCount) {
      homeFeedCount.textContent = `${allProducts.length} Products`;
    }

    // Render Grid
    if (allProducts.length === 0) {
      homeProductsGrid.innerHTML = `
        <div class="no-products-msg">
          <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">🔍</span>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">No products found</h4>
          <p style="font-size: 0.8rem; color: var(--gray-500); margin-top: 4px;">Try searching for another item or clear your category filter.</p>
        </div>
      `;
      return;
    }

    const userCart = getUserCart();

    homeProductsGrid.innerHTML = '';
    allProducts.forEach(prod => {
      const imgSrc = prod.image ? encodeURI(prod.image) : 'logo.webp';
      const isInCart = userCart.some(item => item.id === prod.id && item.shopName === prod.shopName);

      const card = document.createElement('div');
      card.className = 'home-product-card fade-in';
      card.innerHTML = `
        <div class="home-prod-main" style="cursor: pointer;">
          <img src="${imgSrc}" alt="${prod.name}" class="home-prod-thumb" onerror="this.src='logo.webp'" />
          <div class="home-prod-info">
            <div class="home-prod-top">
              <h4 class="home-prod-name">${prod.name}</h4>
              <span class="home-prod-price">₹${prod.price}</span>
            </div>
            <div class="home-prod-shop">
              <span>🏪 ${prod.shopName}</span>
              <span>·</span>
              <span style="color: var(--brand); font-weight: 600;">${prod.distance}</span>
            </div>
          </div>
        </div>

        <div class="home-prod-footer">
          <span class="home-prod-stock ${prod.available ? '' : 'out-of-stock'}">
            ${prod.available ? `🟢 In Stock (${prod.stock})` : '🔴 Out of Stock'}
          </span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn-cart-icon-action ${isInCart ? 'in-cart' : ''}" data-id="${prod.id}" data-shop="${prod.shopName}" data-name="${prod.name}" data-price="${prod.price}" data-image="${prod.image || ''}" title="${isInCart ? 'In Cart (Tap to Remove)' : 'Add to Cart'}">
              ${isInCart ? `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ` : `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              `}
            </button>
            <button class="btn-reserve-item" data-id="${prod.id}" data-shop="${prod.shopName}" data-name="${prod.name}" data-price="${prod.price}">
              Reserve
            </button>
          </div>
        </div>
      `;

      // Product Details Modal Trigger
      const prodMain = card.querySelector('.home-prod-main');
      if (prodMain) {
        prodMain.addEventListener('click', () => {
          openProductDetailsModal(prod.id, prod.shopName);
        });
      }

      homeProductsGrid.appendChild(card);
    });

    // Attach Cart Symbol Button Handlers (Toggle Add / Remove)
    homeProductsGrid.querySelectorAll('.btn-cart-icon-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const id = parseInt(targetBtn.dataset.id);
        const name = targetBtn.dataset.name;
        const shopName = targetBtn.dataset.shop;
        const price = parseInt(targetBtn.dataset.price);
        const image = targetBtn.dataset.image;

        const isCurrentlyInCart = targetBtn.classList.contains('in-cart');

        if (isCurrentlyInCart) {
          // Remove from Cart
          removeFromUserCart(id, shopName);
          targetBtn.classList.remove('in-cart');
          targetBtn.title = 'Add to Cart';
          targetBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          `;
        } else {
          // Add to Cart
          const success = addToUserCart({ id, name, shopName, price, image });
          if (success) {
            targetBtn.classList.add('in-cart');
            targetBtn.title = 'In Cart (Tap to Remove)';
            targetBtn.innerHTML = `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            `;
          }
        }
      });
    });

    // Attach Reserve Button Handlers
    homeProductsGrid.querySelectorAll('.btn-reserve-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodName = e.target.dataset.name;
        const shopName = e.target.dataset.shop;
        const price = e.target.dataset.price;
        const otp = '#SK-' + Math.floor(1000 + Math.random() * 9000);

        // Save to user reservations in localStorage
        const userReservations = getUserReservations();
        userReservations.unshift({
          id: Date.now(),
          productName: prodName,
          shopName: shopName,
          price: price,
          qty: 1,
          code: otp,
          status: 'Confirmed',
          date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        setUserReservations(userReservations);

        e.target.textContent = '✓ Reserved';
        e.target.style.background = '#059669';
        e.target.style.borderColor = '#059669';
        e.target.style.color = '#fff';

        showToast(`🎉 Reserved <strong>${prodName}</strong>! OTP: <strong>${otp}</strong>`);
      });
    });
  }

  // ===== Cart Page Controller (cart.html) =====
  const cartPageContainer = document.getElementById('cart-page-container');

  function renderCartPage() {
    if (!cartPageContainer) return;

    const user = getCurrentUser();

    const cartCountLabel = document.getElementById('cart-items-count-label');

    // 1. Not Logged In State
    if (!user) {
      if (cartCountLabel) cartCountLabel.textContent = '0 items';
      cartPageContainer.innerHTML = `
        <div class="no-products-msg" style="padding: 40px 20px;">
          <span style="font-size: 2.6rem; display: block; margin-bottom: 12px;">🔒</span>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary);">Sign In to View Your Cart</h3>
          <p style="font-size: 0.82rem; color: var(--gray-500); margin: 8px 0 20px; line-height: 1.4;">
            Please log in to your account to view your saved items, sync your cart across devices, and place store reservations.
          </p>
          <a href="login.html" class="btn-primary" style="display: inline-flex; align-items: center; justify-content: center; height: 44px; padding: 0 24px; text-decoration: none; border-radius: var(--r-md); font-weight: 700; font-size: 0.9rem; margin: 0 auto;">Sign In to Account</a>
        </div>
      `;
      return;
    }

    const cart = getUserCart();

    // 2. Empty Cart State
    if (cart.length === 0) {
      if (cartCountLabel) cartCountLabel.textContent = '0 items';
      cartPageContainer.innerHTML = `
        <div class="no-products-msg" style="padding: 40px 20px;">
          <span style="font-size: 2.8rem; display: block; margin-bottom: 12px;">🛒</span>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 6px;">Your Cart is Empty</h3>
          <p style="font-size: 0.84rem; color: var(--gray-500); margin: 6px 0 22px; line-height: 1.45;">
            Explore local shops in Malkangiri and add items to your cart.
          </p>
          <a href="index.html" class="btn-primary" style="display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 24px; text-decoration: none; border-radius: var(--r-md); font-weight: 700; font-size: 0.92rem; margin: 0 auto; box-shadow: 0 3px 12px rgba(211, 18, 30, 0.25);">Explore Nearby Products</a>
        </div>
      `;
      return;
    }

    // 3. Active Cart Items List
    let subtotal = 0;
    let totalItemsCount = 0;
    cart.forEach(item => {
      const q = (item.qty || 1);
      subtotal += (item.price * q);
      totalItemsCount += q;
    });

    if (cartCountLabel) {
      cartCountLabel.textContent = `${totalItemsCount} ${totalItemsCount === 1 ? 'item' : 'items'}`;
    }

    const savedLoc = localStorage.getItem('seekit_location') || 'Malkangiri, Odisha - 764045';
    const deliveryFee = 15;
    const finalTotal = subtotal + deliveryFee;

    cartPageContainer.innerHTML = `
      <div class="cart-items-list" id="cart-items-list"></div>

      <!-- Delivery Address & Bill Card (Screenshot 2 Match) -->
      <div class="cart-bill-card">
        <div class="cart-delivery-section">
          <div class="cart-delivery-label-row">Delivery Address</div>
          <div class="cart-delivery-address-box">
            <div class="cart-address-left">
              <svg class="cart-address-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <div class="cart-address-title">Home</div>
                <div class="cart-address-text">${savedLoc}</div>
              </div>
            </div>
            <button class="cart-change-addr-btn" id="btn-cart-change-addr">Change</button>
          </div>
        </div>

        <div class="cart-divider-line"></div>

        <div class="bill-row">
          <span>Item Total</span>
          <span style="font-weight: 700; color: var(--ink);">₹${subtotal}</span>
        </div>
        <div class="bill-row">
          <span>Delivery Fee</span>
          <span style="font-weight: 700; color: var(--ink);">₹${deliveryFee}</span>
        </div>

        <div class="cart-divider-line"></div>

        <div class="bill-row total">
          <span>To Pay</span>
          <span>₹${finalTotal}</span>
        </div>

        <button id="btn-checkout-cart" class="btn-place-order" style="margin-top: 14px;">
          Place Order
        </button>
      </div>
    `;

    const cartItemsList = document.getElementById('cart-items-list');
    cart.forEach((item, index) => {
      const itemImg = item.image ? encodeURI(item.image) : 'logo.webp';
      const itemCard = document.createElement('div');
      itemCard.className = 'cart-item-card';
      itemCard.innerHTML = `
        <img src="${itemImg}" alt="${item.name}" class="cart-item-img" onerror="this.src='logo.webp'" />
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-shop">${item.shopName}</p>
          <div class="cart-item-price">₹${item.price}</div>
        </div>
        <button class="btn-cart-remove-x" data-index="${index}" title="Remove item">✕</button>
        <div class="cart-stepper-pill" style="position: absolute; right: 14px; bottom: 12px;">
          <button class="cart-stepper-btn btn-cart-dec" data-index="${index}">−</button>
          <span class="cart-stepper-val">${item.qty || 1}</span>
          <button class="cart-stepper-btn btn-cart-inc" data-index="${index}">+</button>
        </div>
      `;
      cartItemsList.appendChild(itemCard);
    });

    const btnChangeAddr = document.getElementById('btn-cart-change-addr');
    if (btnChangeAddr && locationModal) {
      btnChangeAddr.addEventListener('click', () => {
        locationModal.classList.add('active');
      });
    }

    // Cart Steppers & Remove Listeners
    cartItemsList.querySelectorAll('.btn-cart-inc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.index);
        cart[idx].qty = (cart[idx].qty || 1) + 1;
        setUserCart(cart);
        renderCartPage();
      });
    });

    cartItemsList.querySelectorAll('.btn-cart-dec').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.index);
        if (cart[idx].qty > 1) {
          cart[idx].qty -= 1;
        } else {
          cart.splice(idx, 1);
        }
        setUserCart(cart);
        renderCartPage();
      });
    });

    cartItemsList.querySelectorAll('.btn-cart-remove-x, .btn-remove-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.index);
        const removedItem = cart[idx];
        cart.splice(idx, 1);
        setUserCart(cart);
        if (removedItem) {
          showToast(`🗑️ Removed <strong>${removedItem.name}</strong> from Cart`);
        }
        renderCartPage();
      });
    });

    // Clear Cart Listener
    const btnClearCart = document.getElementById('btn-clear-cart');
    if (btnClearCart) {
      btnClearCart.addEventListener('click', () => {
        if (confirm('Clear all items from your cart?')) {
          setUserCart([]);
          renderCartPage();
        }
      });
    }

    // Checkout / Place Order / Reserve All Listener
    const btnCheckoutCart = document.getElementById('btn-checkout-cart');
    if (btnCheckoutCart) {
      btnCheckoutCart.addEventListener('click', () => {
        const userReservations = getUserReservations();
        const otp = '#SK-' + Math.floor(1000 + Math.random() * 9000);
        const dateStr = 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        cart.forEach(item => {
          userReservations.unshift({
            id: Date.now() + Math.floor(Math.random() * 1000),
            productName: item.name,
            shopName: item.shopName,
            price: item.price * (item.qty || 1),
            qty: item.qty || 1,
            code: otp,
            status: 'Confirmed',
            date: dateStr
          });
        });

        setUserReservations(userReservations);
        const itemCount = cart.length;
        setUserCart([]);
        renderCartPage();

        showToast(`🎉 Order Placed! Reserved ${itemCount} item(s) • OTP: <strong>${otp}</strong>`);
      });
    }
  }

  // Initial Cart Page Render & Badge Update
  updateCartBadge();
  if (cartPageContainer) {
    renderCartPage();
  }

  // Handle URL param for category (e.g. index.html?category=Electronics)
  const urlParams = new URLSearchParams(window.location.search);
  const paramCategory = urlParams.get('category');
  if (paramCategory && categoryChips) {
    categoryChips.forEach(chip => {
      const cat = (chip.dataset.category || chip.textContent).trim().toLowerCase();
      if (cat === paramCategory.toLowerCase() || paramCategory.toLowerCase().includes(cat)) {
        categoryChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      }
    });
  }

  // Category Chip Click Listeners
  if (categoryChips) {
    categoryChips.forEach(chip => {
      chip.addEventListener('click', () => {
        categoryChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderHomeProducts();
      });
    });
  }

  // Real-time Search Input Listener
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderHomeProducts();
    });
  }

  // Initial Home Products Render
  if (homeProductsGrid) {
    renderHomeProducts();
  }

  // ===== Categories Page Controller (categories.html) =====
  const categoriesContainer = document.getElementById('categories-container');
  const categorySearchInput = document.getElementById('category-search-input');

  const CATEGORY_ICONS = {
    "Electronics": "⚡",
    "Stationery": "📚",
    "Hardware & Spare Parts": "🔧",
    "Mobile Accessories": "📱",
    "Electrical": "💡",
    "Auto Spare Parts": "🏍️",
    "General Store": "🛒",
    "Agriculture": "🌾",
    "Sports & Toys": "⚽",
    "Home & Kitchen": "🏠"
  };

  function renderCategoriesPage() {
    if (!categoriesContainer) return;

    const savedLoc = localStorage.getItem('seekit_location') || 'Malkangiri, Odisha - 764045';
    const isMalkangiri = isMalkangiriLocation(savedLoc);

    if (!isMalkangiri) {
      categoriesContainer.innerHTML = `
        <div class="no-products-msg" style="padding: 36px 20px;">
          <span style="font-size: 2.6rem; display: block; margin-bottom: 8px;">📦</span>
          <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">No categories listed in ${savedLoc}</h4>
          <p style="font-size: 0.82rem; color: var(--gray-500); margin: 6px 0 18px; line-height: 1.4;">
            No local categories or inventory found for this pincode. Switch to <strong>Malkangiri (764045 / 764048)</strong> to explore verified stores.
          </p>
          <button id="btn-switch-malkangiri-cat" class="btn-submit" style="max-width: 260px; margin: 0 auto; background: var(--brand);">
            Switch to Malkangiri (764045)
          </button>
        </div>
      `;
      const switchBtn = document.getElementById('btn-switch-malkangiri-cat');
      if (switchBtn) {
        switchBtn.addEventListener('click', () => {
          const defPlace = 'Malkangiri, Odisha - 764045';
          localStorage.setItem('seekit_location', defPlace);
          if (locationText) locationText.textContent = defPlace;
          const shopsLoc = document.getElementById('shops-location-text');
          if (shopsLoc) shopsLoc.textContent = `📍 ${defPlace}`;
          renderCategoriesPage();
          showToast(`📍 Switched location to <strong>${defPlace}</strong>`);
        });
      }
      return;
    }

    const query = categorySearchInput ? categorySearchInput.value.trim().toLowerCase() : '';
    const userCart = getUserCart();

    let filteredSellers = SELLERS_DB;
    if (query) {
      filteredSellers = SELLERS_DB.filter(s => 
        s.category.toLowerCase().includes(query) || 
        s.name.toLowerCase().includes(query) ||
        s.products.some(p => p.name.toLowerCase().includes(query))
      );
    }

    if (filteredSellers.length === 0) {
      categoriesContainer.innerHTML = `
        <div class="no-products-msg" style="padding: 30px 20px;">
          <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">🔍</span>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">No matching categories found</h4>
          <p style="font-size: 0.8rem; color: var(--gray-500); margin-top: 4px;">Try searching for a different item or category.</p>
        </div>
      `;
      return;
    }

    categoriesContainer.innerHTML = '';
    filteredSellers.forEach((seller) => {
      const icon = CATEGORY_ICONS[seller.category] || '📦';
      const card = document.createElement('div');
      card.className = 'category-card fade-in';

      // Build preview chips
      const previewPills = seller.products.slice(0, 3).map(p => 
        `<span class="category-preview-pill">${p.name} · ₹${p.price}</span>`
      ).join('');

      // Build product rows
      const productRows = seller.products.map(prod => {
        const imgSrc = prod.image ? encodeURI(prod.image) : 'logo.webp';
        const isInCart = userCart.some(item => item.id === prod.id && item.shopName === seller.name);

        return `
          <div class="category-prod-row" data-prod-id="${prod.id}" data-seller="${seller.name}" style="cursor: pointer;">
            <img src="${imgSrc}" alt="${prod.name}" onerror="this.src='logo.webp'" />
            <div class="category-prod-row-info">
              <h5 class="category-prod-row-name">${prod.name}</h5>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 3px;">
                <span class="category-prod-row-price">₹${prod.price}</span>
                <span style="font-size: 0.72rem; color: #059669; font-weight: 700;">● In Stock (${prod.stock})</span>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <button class="btn-cart-icon-action ${isInCart ? 'in-cart' : ''}" data-id="${prod.id}" data-shop="${seller.name}" data-name="${prod.name}" data-price="${prod.price}" data-image="${prod.image || ''}" title="${isInCart ? 'In Cart (Tap to Remove)' : 'Add to Cart'}">
                ${isInCart ? `
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ` : `
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                `}
              </button>
              <button class="btn-reserve-item" data-id="${prod.id}" data-shop="${seller.name}" data-name="${prod.name}" data-price="${prod.price}">
                Reserve
              </button>
            </div>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div class="category-card-header">
          <div class="category-card-icon">${icon}</div>
          <div class="category-card-info">
            <h3 class="category-card-title">
              ${seller.category}
            </h3>
            <p class="category-card-meta">🏪 ${seller.name} · ${seller.products.length} Items</p>
          </div>
          <svg class="category-card-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <div class="category-preview-chips">
          ${previewPills}
        </div>

        <div class="category-card-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; margin-bottom: 6px;">
            <span style="font-size: 0.78rem; font-weight: 700; color: var(--gray-600);">All Available Items:</span>
            <a href="index.html?category=${encodeURIComponent(seller.category)}" style="font-size: 0.76rem; color: var(--brand); font-weight: 700; text-decoration: none;">View in Feed ➔</a>
          </div>
          <div class="category-products-grid">
            ${productRows}
          </div>
        </div>
      `;

      // Accordion Toggle
      const header = card.querySelector('.category-card-header');
      header.addEventListener('click', () => {
        card.classList.toggle('expanded');
      });

      // Product Row Click -> Open Product Details Modal
      card.querySelectorAll('.category-prod-row').forEach(row => {
        row.addEventListener('click', (e) => {
          if (e.target.closest('button') || e.target.closest('a')) return;
          const prodId = parseInt(row.dataset.prodId);
          const sellerName = row.dataset.seller;
          openProductDetailsModal(prodId, sellerName);
        });
      });

      categoriesContainer.appendChild(card);
    });

    // Attach Cart & Reserve Button Handlers in Categories page
    categoriesContainer.querySelectorAll('.btn-cart-icon-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetBtn = e.currentTarget;
        const id = parseInt(targetBtn.dataset.id);
        const name = targetBtn.dataset.name;
        const shopName = targetBtn.dataset.shop;
        const price = parseInt(targetBtn.dataset.price);
        const image = targetBtn.dataset.image;

        const isCurrentlyInCart = targetBtn.classList.contains('in-cart');
        if (isCurrentlyInCart) {
          removeFromUserCart(id, shopName);
          targetBtn.classList.remove('in-cart');
          targetBtn.title = 'Add to Cart';
          targetBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          `;
        } else {
          const success = addToUserCart({ id, name, shopName, price, image });
          if (success) {
            targetBtn.classList.add('in-cart');
            targetBtn.title = 'In Cart (Tap to Remove)';
            targetBtn.innerHTML = `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            `;
          }
        }
      });
    });

    categoriesContainer.querySelectorAll('.btn-reserve-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodName = e.target.dataset.name;
        const shopName = e.target.dataset.shop;
        const price = e.target.dataset.price;
        const otp = '#SK-' + Math.floor(1000 + Math.random() * 9000);

        const userReservations = getUserReservations();
        userReservations.unshift({
          id: Date.now(),
          productName: prodName,
          shopName: shopName,
          price: price,
          qty: 1,
          code: otp,
          status: 'Confirmed',
          date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        setUserReservations(userReservations);

        e.target.textContent = '✓ Reserved';
        e.target.style.background = '#059669';
        e.target.style.borderColor = '#059669';
        e.target.style.color = '#fff';

        showToast(`🎉 Reserved <strong>${prodName}</strong>! OTP: <strong>${otp}</strong>`);
      });
    });
  }

  if (categorySearchInput) {
    categorySearchInput.addEventListener('input', renderCategoriesPage);
  }

  if (categoriesContainer) {
    renderCategoriesPage();
  }

  // ===== Shops Page Controller (shops.html) =====
  const shopsContainer = document.getElementById('shops-container');
  const shopsSearchInput = document.getElementById('shops-search-input');
  const shopsLocationText = document.getElementById('shops-location-text');
  const btnShopsChangeLoc = document.getElementById('btn-shops-change-loc');
  const shopsPageTitle = document.getElementById('shops-page-title');
  const shopsPageSubtitle = document.getElementById('shops-page-subtitle');

  if (btnShopsChangeLoc && locationModal) {
    btnShopsChangeLoc.addEventListener('click', () => {
      locationModal.classList.add('active');
      if (locationStatus) locationStatus.textContent = '';
    });
  }

  function renderShopsPage() {
    if (!shopsContainer) return;

    const savedLoc = localStorage.getItem('seekit_location') || 'Malkangiri, Odisha - 764045';
    if (shopsLocationText) {
      shopsLocationText.textContent = `📍 ${savedLoc}`;
    }

    // Check if selected location is Malkangiri or Malkangiri pincodes (764045, 764048, 764087)
    const isMalkangiri = isMalkangiriLocation(savedLoc);

    if (!isMalkangiri) {
      if (shopsPageSubtitle) {
        shopsPageSubtitle.textContent = `0 stores registered for ${savedLoc}`;
      }
      shopsContainer.innerHTML = `
        <div class="no-products-msg" style="padding: 36px 20px;">
          <span style="font-size: 2.6rem; display: block; margin-bottom: 8px;">🏪</span>
          <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">No shops found in this pincode</h4>
          <p style="font-size: 0.82rem; color: var(--gray-500); margin: 6px 0 18px; line-height: 1.4;">
            No verified sellers registered in <strong>${savedLoc}</strong> yet. Switch to <strong>Malkangiri (764045 / 764048)</strong> to view verified shops.
          </p>
          <button id="btn-switch-malkangiri-shops" class="btn-submit" style="max-width: 250px; margin: 0 auto; background: var(--brand);">
            Switch to Malkangiri (764045)
          </button>
        </div>
      `;

      const btnSwitchMalkangiri = document.getElementById('btn-switch-malkangiri-shops');
      if (btnSwitchMalkangiri) {
        btnSwitchMalkangiri.addEventListener('click', () => {
          const defaultPlace = 'Malkangiri, Odisha - 764045';
          localStorage.setItem('seekit_location', defaultPlace);
          if (locationText) locationText.textContent = defaultPlace;
          if (shopsLocationText) shopsLocationText.textContent = `📍 ${defaultPlace}`;
          renderShopsPage();
          showToast(`📍 Switched location to <strong>${defaultPlace}</strong>`);
        });
      }
      return;
    }

    // Location is Malkangiri -> Search & filter shops
    const query = shopsSearchInput ? shopsSearchInput.value.trim().toLowerCase() : '';
    const userCart = getUserCart();

    let filteredSellers = SELLERS_DB;
    if (query) {
      filteredSellers = SELLERS_DB.filter(s => 
        s.name.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.address.toLowerCase().includes(query) ||
        s.products.some(p => p.name.toLowerCase().includes(query))
      );
    }

    if (shopsPageSubtitle) {
      shopsPageSubtitle.textContent = `Showing ${filteredSellers.length} verified stores in Malkangiri`;
    }

    if (filteredSellers.length === 0) {
      shopsContainer.innerHTML = `
        <div class="no-products-msg" style="padding: 30px 20px;">
          <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">🔍</span>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">No matching shops found</h4>
          <p style="font-size: 0.8rem; color: var(--gray-500); margin-top: 4px;">Try searching for a different shop name or item.</p>
        </div>
      `;
      return;
    }

    shopsContainer.innerHTML = '';
    filteredSellers.forEach((seller, idx) => {
      const card = document.createElement('div');
      card.className = 'shop-card fade-in';

      // Storefront thumbnail (using first product image or fallback logo)
      const firstProdImg = (seller.products && seller.products[0] && seller.products[0].image) ? encodeURI(seller.products[0].image) : 'logo.webp';
      const thumbSrc = seller.image || firstProdImg;

      // Realistic metadata matching Screenshot 1
      const isClosed = (seller.id === 3 || seller.isOpen === false);
      const rating = (4.2 + ((seller.id * 7) % 6) * 0.1).toFixed(1);
      const reviewCounts = ['320+', '180+', '95+', '210+', '410+', '190+', '140+', '290+', '110+', '175+'];
      const reviews = reviewCounts[idx % reviewCounts.length];
      const distances = ['450 m', '800 m', '1.2 km', '1.6 km', '500 m', '650 m', '1.1 km', '750 m', '1.4 km', '900 m'];
      const distance = distances[idx % distances.length];
      const times = ['20–30 min', '15–25 min', '30–45 min', '25–35 min', '15–20 min', '10–20 min', '20–30 min'];
      const time = times[idx % times.length];

      // Tags derived from category
      const tagList = [seller.category];
      if (seller.category === 'Grocery' || seller.category === 'General Store') {
        tagList.push('Snacks', 'Beverages');
      } else if (seller.category === 'Electronics') {
        tagList.push('Gadgets', 'Cables');
      } else if (seller.category === 'Stationery') {
        tagList.push('Books', 'Art');
      } else if (seller.category === 'Hardware & Spare Parts') {
        tagList.push('Plumbing', 'Tools');
      } else if (seller.category === 'Mobile Accessories') {
        tagList.push('Covers', 'Chargers');
      } else {
        tagList.push('Local Store');
      }

      const tagsHtml = tagList.slice(0, 3).map(t => `<span class="shop-tag-pill">${t}</span>`).join(' ');

      // Full product list for accordion
      const fullProductRows = seller.products.map(prod => {
        const imgSrc = prod.image ? encodeURI(prod.image) : 'logo.webp';
        const isInCart = userCart.some(item => item.id === prod.id && item.shopName === seller.name);

        return `
          <div class="category-prod-row" data-prod-id="${prod.id}" style="cursor: pointer;">
            <img src="${imgSrc}" alt="${prod.name}" onerror="this.src='logo.webp'" />
            <div class="category-prod-row-info">
              <h5 class="category-prod-row-name">${prod.name}</h5>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 3px;">
                <span class="category-prod-row-price">₹${prod.price}</span>
                <span style="font-size: 0.72rem; color: #059669; font-weight: 700;">● In Stock (${prod.stock})</span>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <button class="btn-cart-icon-action ${isInCart ? 'in-cart' : ''}" data-id="${prod.id}" data-shop="${seller.name}" data-name="${prod.name}" data-price="${prod.price}" data-image="${prod.image || ''}" title="${isInCart ? 'In Cart (Tap to Remove)' : 'Add to Cart'}">
                ${isInCart ? `
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ` : `
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                `}
              </button>
              <button class="btn-reserve-item" data-id="${prod.id}" data-shop="${seller.name}" data-name="${prod.name}" data-price="${prod.price}">
                Reserve
              </button>
            </div>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div class="shop-card-main">
          <img src="${thumbSrc}" alt="${seller.name}" class="shop-thumb-img" onerror="this.src='logo.webp'" />
          <div class="shop-info">
            <div class="shop-name-row">
              <h3 class="shop-title">${seller.name}</h3>
              <span class="shop-badge-status ${isClosed ? 'closed' : 'open'}">${isClosed ? 'CLOSED' : 'OPEN'}</span>
            </div>
            <div class="shop-meta-line">
              <span class="shop-rating-star">⭐</span>
              <span class="shop-rating-val">${rating}</span>
              <span class="shop-rating-count">(${reviews})</span>
              <span class="shop-meta-dot">•</span>
              <span>${distance}</span>
              <span class="shop-meta-dot">•</span>
              <span>${time}</span>
            </div>
            <div class="shop-tags-row">
              ${tagsHtml}
            </div>
          </div>
        </div>

        <div class="shop-toggle-bar">
          <span>📦 View Store Items (${seller.products.length})</span>
          <svg class="shop-toggle-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <div class="shop-card-body">
          <div class="category-products-grid">
            ${fullProductRows}
          </div>
        </div>
      `;

      // Accordion Toggle on toggle bar
      const toggleBar = card.querySelector('.shop-toggle-bar');
      toggleBar.addEventListener('click', () => {
        card.classList.toggle('expanded');
      });

      // Shop Card Main / Name Click -> Open Full Shop Profile Modal
      const shopMain = card.querySelector('.shop-card-main');
      if (shopMain) {
        shopMain.style.cursor = 'pointer';
        shopMain.title = `View ${seller.name} Details`;
        shopMain.addEventListener('click', () => {
          openShopProfileModal(seller.name);
        });
      }

      // Preview Item Click -> Open Product Details Modal
      card.querySelectorAll('.shop-preview-item').forEach(item => {
        item.addEventListener('click', () => {
          const prodId = parseInt(item.dataset.prodId);
          openProductDetailsModal(prodId, seller.name);
        });
      });

      // Accordion Product Row Click -> Open Product Details Modal
      card.querySelectorAll('.category-prod-row').forEach(row => {
        row.addEventListener('click', (e) => {
          if (e.target.closest('button')) return;
          const prodId = parseInt(row.dataset.prodId);
          openProductDetailsModal(prodId, seller.name);
        });
      });

      shopsContainer.appendChild(card);
    });

    // Attach Cart & Reserve Button Handlers in Shops page
    shopsContainer.querySelectorAll('.btn-cart-icon-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetBtn = e.currentTarget;
        const id = parseInt(targetBtn.dataset.id);
        const name = targetBtn.dataset.name;
        const shopName = targetBtn.dataset.shop;
        const price = parseInt(targetBtn.dataset.price);
        const image = targetBtn.dataset.image;

        const isCurrentlyInCart = targetBtn.classList.contains('in-cart');
        if (isCurrentlyInCart) {
          removeFromUserCart(id, shopName);
          targetBtn.classList.remove('in-cart');
          targetBtn.title = 'Add to Cart';
          targetBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          `;
        } else {
          const success = addToUserCart({ id, name, shopName, price, image });
          if (success) {
            targetBtn.classList.add('in-cart');
            targetBtn.title = 'In Cart (Tap to Remove)';
            targetBtn.innerHTML = `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            `;
          }
        }
      });
    });

    shopsContainer.querySelectorAll('.btn-reserve-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodName = e.target.dataset.name;
        const shopName = e.target.dataset.shop;
        const price = e.target.dataset.price;
        const otp = '#SK-' + Math.floor(1000 + Math.random() * 9000);

        const userReservations = getUserReservations();
        userReservations.unshift({
          id: Date.now(),
          productName: prodName,
          shopName: shopName,
          price: price,
          qty: 1,
          code: otp,
          status: 'Confirmed',
          date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        setUserReservations(userReservations);

        e.target.textContent = '✓ Reserved';
        e.target.style.background = '#059669';
        e.target.style.borderColor = '#059669';
        e.target.style.color = '#fff';

        showToast(`🎉 Reserved <strong>${prodName}</strong>! OTP: <strong>${otp}</strong>`);
      });
    });
  }

  if (shopsSearchInput) {
    shopsSearchInput.addEventListener('input', renderShopsPage);
  }

  if (shopsContainer) {
    renderShopsPage();
  }

  // ===== 2. Login Page Logic =====
  const loginForm = document.getElementById('login-form');
  const loginEmail = document.getElementById('login-email');
  const loginPassword = document.getElementById('login-password');
  const loginAlert = document.getElementById('login-alert');
  const togglePasswordBtn = document.getElementById('toggle-password-btn');
  const demoChipsContainer = document.getElementById('demo-chips-container');

  if (loginForm && loginEmail && loginPassword) {
    // Render Quick Demo Account Chips
    if (demoChipsContainer) {
      USERS_DB.forEach(user => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'demo-chip';
        chip.textContent = `${user.name.split(' ')[0]} (${user.email})`;
        chip.addEventListener('click', () => {
          loginEmail.value = user.email;
          loginPassword.value = user.password;
          loginAlert.className = 'login-alert success';
          loginAlert.textContent = `Filled credentials for ${user.name}`;
          loginPassword.focus();
        });
        demoChipsContainer.appendChild(chip);
      });
    }

    // Toggle Password Visibility
    if (togglePasswordBtn) {
      togglePasswordBtn.addEventListener('click', () => {
        const isPassword = loginPassword.type === 'password';
        loginPassword.type = isPassword ? 'text' : 'password';
        togglePasswordBtn.style.color = isPassword ? 'var(--brand)' : 'var(--gray-400)';
      });
    }

    // Form Submission
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginEmail.value.trim().toLowerCase();
      const password = loginPassword.value;

      // Find user
      const user = USERS_DB.find(u => u.email.toLowerCase() === email);

      if (!user) {
        loginAlert.className = 'login-alert error';
        loginAlert.textContent = '❌ No account found with this email.';
        return;
      }

      if (user.password !== password) {
        loginAlert.className = 'login-alert error';
        loginAlert.textContent = '❌ Incorrect password. Try checking demo credentials.';
        return;
      }

      // Success
      loginAlert.className = 'login-alert success';
      loginAlert.textContent = `✓ Welcome back, ${user.name}! Redirecting...`;
      setCurrentUser({
        id: user.id,
        name: user.name,
        email: user.email
      });

      const urlParams = new URLSearchParams(window.location.search);
      const redirectTarget = urlParams.get('redirect') || 'account.html';

      setTimeout(() => {
        window.location.href = redirectTarget;
      }, 700);
    });
  }

  // ===== 3. Account Page Logic =====
  const accountHeaderCard = document.getElementById('account-header-card');
  const accountUserName = document.getElementById('account-user-name');
  const accountUserEmail = document.getElementById('account-user-email');
  const accountAvatar = document.getElementById('account-avatar');
  const btnAccountLogin = document.getElementById('btn-account-login');
  const reservationsBadge = document.getElementById('reservations-badge');
  const reservationsList = document.getElementById('reservations-list');

  const renderAccountState = () => {
    const currentUser = getCurrentUser();

    if (currentUser && accountUserName && accountUserEmail && accountAvatar) {
      // User is logged in
      accountUserName.textContent = currentUser.name;
      accountUserEmail.textContent = currentUser.email;

      // Show initial avatar
      const initials = currentUser.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

      accountAvatar.innerHTML = `<span style="font-weight: 800; font-size: 1.4rem; color: #FFFFFF;">${initials}</span>`;
      accountAvatar.style.background = 'rgba(255, 255, 255, 0.2)';
      accountAvatar.style.border = '2px solid rgba(255, 255, 255, 0.4)';

      // Render dynamic user reservations
      renderAccountReservations();

      // Update button text to Sign Out
      if (btnAccountLogin) {
        btnAccountLogin.textContent = 'Sign Out';
        btnAccountLogin.style.background = 'rgba(255, 255, 255, 0.2)';
        btnAccountLogin.style.color = '#FFFFFF';
        btnAccountLogin.style.border = '1px solid rgba(255, 255, 255, 0.4)';
        btnAccountLogin.onclick = (e) => {
          e.preventDefault();
          clearCurrentUser();
          showToast('👋 Signed out successfully');
          renderAccountState();
        };
      }

      if (accountHeaderCard) {
        accountHeaderCard.style.cursor = 'default';
        accountHeaderCard.onclick = null;
      }
    } else if (accountUserName && accountUserEmail && accountAvatar) {
      // User is Guest / logged out
      accountUserName.textContent = 'Guest User';
      accountUserEmail.textContent = 'Sign in to sync your account';
      accountAvatar.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      `;
      accountAvatar.style.background = 'rgba(255, 255, 255, 0.2)';
      accountAvatar.style.border = '2px solid rgba(255, 255, 255, 0.3)';

      // Render dynamic user reservations for guest
      renderAccountReservations();

      // Update button text to Sign In
      if (btnAccountLogin) {
        btnAccountLogin.textContent = 'Sign In';
        btnAccountLogin.style.background = '#FBBF24';
        btnAccountLogin.style.color = '#000000';
        btnAccountLogin.style.border = 'none';
        btnAccountLogin.onclick = (e) => {
          e.preventDefault();
          window.location.href = 'login.html';
        };
      }

      if (accountHeaderCard) {
        accountHeaderCard.style.cursor = 'pointer';
        accountHeaderCard.onclick = () => {
          window.location.href = 'login.html';
        };
      }
    }
  };

  // Run account render on account page
  if (accountUserName || btnAccountLogin) {
    renderAccountState();

    // Reservations Modal Handler
    const menuReservations = document.getElementById('menu-reservations');
    const reservationsModal = document.getElementById('reservations-modal');
    const closeReservationsBtn = document.getElementById('close-reservations-btn');

    if (menuReservations && reservationsModal) {
      menuReservations.addEventListener('click', () => {
        reservationsModal.classList.add('active');
      });

      if (closeReservationsBtn) {
        closeReservationsBtn.addEventListener('click', () => {
          reservationsModal.classList.remove('active');
        });
      }

      reservationsModal.addEventListener('click', (e) => {
        if (e.target === reservationsModal) {
          reservationsModal.classList.remove('active');
        }
      });
    }
  }

  // ===== 4. Seller Login Page Logic (seller-login.html) =====
  const sellerLoginForm = document.getElementById('seller-login-form');
  const sellerLoginEmail = document.getElementById('seller-login-email');
  const sellerLoginPassword = document.getElementById('seller-login-password');
  const sellerLoginAlert = document.getElementById('seller-login-alert');
  const toggleSellerPasswordBtn = document.getElementById('toggle-seller-password-btn');
  const demoSellersContainer = document.getElementById('demo-sellers-container');
  const sellerLoginCity = document.getElementById('seller-login-city');
  const sellerDemoCity = document.getElementById('seller-demo-city');

  if (sellerLoginForm && sellerLoginEmail && sellerLoginPassword) {
    // Dynamic Location in Seller Login
    const currentLoc = localStorage.getItem('seekit_location') || 'Malkangiri, Odisha';
    const city = currentLoc.split(',')[0].trim();
    if (sellerLoginCity) sellerLoginCity.textContent = city;
    if (sellerDemoCity) sellerDemoCity.textContent = city;

    // Populate Quick Demo Seller Chips
    if (demoSellersContainer) {
      SELLERS_DB.forEach(seller => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'demo-chip';
        chip.textContent = `🏪 ${seller.name} (${seller.username})`;
        chip.addEventListener('click', () => {
          sellerLoginEmail.value = seller.email;
          sellerLoginPassword.value = seller.password;
          sellerLoginAlert.className = 'login-alert success';
          sellerLoginAlert.textContent = `Filled credentials for ${seller.name}`;
          sellerLoginPassword.focus();
        });
        demoSellersContainer.appendChild(chip);
      });
    }

    // Toggle Password Visibility
    if (toggleSellerPasswordBtn) {
      toggleSellerPasswordBtn.addEventListener('click', () => {
        const isPassword = sellerLoginPassword.type === 'password';
        sellerLoginPassword.type = isPassword ? 'text' : 'password';
        toggleSellerPasswordBtn.style.color = isPassword ? 'var(--brand)' : 'var(--gray-400)';
      });
    }

    // Form Submit
    sellerLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = sellerLoginEmail.value.trim().toLowerCase();
      const password = sellerLoginPassword.value;

      // Match by email or username
      const seller = SELLERS_DB.find(s => 
        s.email.toLowerCase() === input || s.username.toLowerCase() === input
      );

      if (!seller) {
        sellerLoginAlert.className = 'login-alert error';
        sellerLoginAlert.textContent = '❌ Shop account not found. Try one of the demo shops below.';
        return;
      }

      if (seller.password !== password) {
        sellerLoginAlert.className = 'login-alert error';
        sellerLoginAlert.textContent = '❌ Incorrect password. Click a demo chip below for auto-fill.';
        return;
      }

      // Success
      sellerLoginAlert.className = 'login-alert success';
      sellerLoginAlert.textContent = `✓ Logged in to ${seller.name}! Opening dashboard...`;
      setCurrentSeller({
        id: seller.id,
        name: seller.name,
        category: seller.category,
        email: seller.email,
        username: seller.username
      });

      setTimeout(() => {
        window.location.href = 'seller.html';
      }, 700);
    });
  }

  // ===== 5. Seller Dashboard Logic (seller.html) =====
  const sellerShopName = document.getElementById('seller-shop-name');
  const sellerCategoryTag = document.getElementById('seller-category-tag');
  const sellerAddressText = document.getElementById('seller-address-text');
  const sellerProductsList = document.getElementById('seller-products-list');
  const statProducts = document.getElementById('stat-products');
  const sellerTabBtns = document.querySelectorAll('.seller-tab-btn');
  const sellerTabContents = document.querySelectorAll('.seller-tab-content');
  const btnAddProduct = document.getElementById('btn-add-product');
  const btnSellerLogout = document.getElementById('btn-seller-logout');

  if (sellerShopName && sellerProductsList) {
    const activeSeller = getCurrentSeller();
    let currentSellerId = activeSeller ? activeSeller.id : 1;

    // Render active seller data
    const renderSellerDashboard = (sellerId) => {
      const seller = SELLERS_DB.find(s => s.id === sellerId) || SELLERS_DB[0];

      sellerShopName.textContent = seller.name;
      sellerCategoryTag.textContent = seller.category;
      sellerAddressText.textContent = `📍 ${seller.address}`;

      if (statProducts) {
        statProducts.textContent = seller.products.length;
      }

      // Render product items
      sellerProductsList.innerHTML = '';
      seller.products.forEach(prod => {
        const imgSrc = prod.image ? encodeURI(prod.image) : 'logo.webp';
        const prodCard = document.createElement('div');
        prodCard.className = 'seller-product-card';
        prodCard.innerHTML = `
          <div class="seller-prod-top" style="align-items: center; gap: 12px;">
            <img src="${imgSrc}" alt="${prod.name}" class="seller-prod-thumb" onerror="this.src='logo.webp'" />
            <div style="flex: 1; min-width: 0;">
              <h4 class="seller-prod-name">${prod.name}</h4>
              <span style="font-size: 0.75rem; color: var(--gray-400);">Product ID: #${prod.id}</span>
            </div>
            <span class="seller-prod-price">₹${prod.price}</span>
          </div>
          <div class="seller-prod-controls">
            <div class="stock-stepper">
              <span style="font-size: 0.75rem; color: var(--gray-500); font-weight: 600;">Stock:</span>
              <button class="stepper-btn btn-dec" data-id="${prod.id}">−</button>
              <span class="stepper-count" id="stock-count-${prod.id}">${prod.stock}</span>
              <button class="stepper-btn btn-inc" data-id="${prod.id}">+</button>
            </div>
            <button class="stock-status-toggle ${prod.available ? '' : 'out-of-stock'}" data-id="${prod.id}">
              ${prod.available ? '🟢 In Stock' : '🔴 Out of Stock'}
            </button>
          </div>
        `;
        sellerProductsList.appendChild(prodCard);
      });

      // Attach Steppers and In-stock toggle listeners
      sellerProductsList.querySelectorAll('.btn-inc').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = parseInt(e.target.dataset.id);
          const prod = seller.products.find(p => p.id === id);
          if (prod) {
            prod.stock += 1;
            document.getElementById(`stock-count-${id}`).textContent = prod.stock;
          }
        });
      });

      sellerProductsList.querySelectorAll('.btn-dec').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = parseInt(e.target.dataset.id);
          const prod = seller.products.find(p => p.id === id);
          if (prod && prod.stock > 0) {
            prod.stock -= 1;
            document.getElementById(`stock-count-${id}`).textContent = prod.stock;
          }
        });
      });

      sellerProductsList.querySelectorAll('.stock-status-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = parseInt(e.target.dataset.id);
          const prod = seller.products.find(p => p.id === id);
          if (prod) {
            prod.available = !prod.available;
            e.target.className = `stock-status-toggle ${prod.available ? '' : 'out-of-stock'}`;
            e.target.textContent = prod.available ? '🟢 In Stock' : '🔴 Out of Stock';
          }
        });
      });
    };

    // Initial render
    renderSellerDashboard(currentSellerId);

    // Seller Logout
    if (btnSellerLogout) {
      btnSellerLogout.addEventListener('click', () => {
        clearCurrentSeller();
        window.location.href = 'seller-login.html';
      });
    }

    // Tab Switching
    sellerTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        sellerTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        sellerTabContents.forEach(content => {
          content.classList.toggle('active', content.id === `tab-${tab}`);
        });
      });
    });

    // Add Product prompt
    if (btnAddProduct) {
      btnAddProduct.addEventListener('click', () => {
        const prodName = prompt('Enter new product name:');
        if (!prodName) return;
        const price = prompt('Enter price in ₹:', '199');
        const stock = prompt('Enter initial stock quantity:', '10');

        const seller = SELLERS_DB.find(s => s.id === currentSellerId);
        if (seller) {
          seller.products.unshift({
            id: Date.now() % 10000,
            name: prodName.trim(),
            price: parseInt(price) || 99,
            stock: parseInt(stock) || 5,
            available: true
          });
          renderSellerDashboard(currentSellerId);
        }
      });
    }

    // ===== Bulk Excel Upload & Template Generation =====
    const btnBulkModalOpen = document.getElementById('btn-bulk-modal-open');
    const bulkUploadModal = document.getElementById('bulk-upload-modal');
    const closeBulkModalBtn = document.getElementById('close-bulk-modal-btn');
    const btnDownloadTemplate = document.getElementById('btn-download-template');
    const bulkFileInput = document.getElementById('bulk-file-input');
    const dropZoneText = document.getElementById('drop-zone-text');
    const bulkPreviewArea = document.getElementById('bulk-preview-area');
    const previewCount = document.getElementById('preview-count');
    const previewItemsList = document.getElementById('preview-items-list');
    const btnConfirmImport = document.getElementById('btn-confirm-import');
    const bulkStatusMsg = document.getElementById('bulk-status-msg');

    let parsedBulkProducts = [];

    if (btnBulkModalOpen && bulkUploadModal) {
      btnBulkModalOpen.addEventListener('click', () => {
        bulkUploadModal.classList.add('active');
        if (bulkStatusMsg) bulkStatusMsg.textContent = '';
        if (bulkPreviewArea) bulkPreviewArea.style.display = 'none';
        parsedBulkProducts = [];
      });

      if (closeBulkModalBtn) {
        closeBulkModalBtn.addEventListener('click', () => {
          bulkUploadModal.classList.remove('active');
        });
      }

      bulkUploadModal.addEventListener('click', (e) => {
        if (e.target === bulkUploadModal) {
          bulkUploadModal.classList.remove('active');
        }
      });
    }

    // 1. Download Excel/CSV Template
    if (btnDownloadTemplate) {
      btnDownloadTemplate.addEventListener('click', () => {
        const seller = SELLERS_DB.find(s => s.id === currentSellerId) || SELLERS_DB[0];
        
        // Generate CSV content with Excel BOM for UTF-8 compatibility
        const headers = 'Product Name,Price (₹),Stock Quantity,Availability';
        const sampleRows = [
          'Sample Product 1,299,15,Available',
          'Sample Product 2,499,20,Available',
          'Sample Product 3,150,10,Available',
          'Sample Product 4,850,5,Available'
        ];
        const csvContent = '\uFEFF' + [headers, ...sampleRows].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `seekit_${seller.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}_products_template.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        if (bulkStatusMsg) {
          bulkStatusMsg.style.color = '#059669';
          bulkStatusMsg.textContent = '✓ Template downloaded! Fill it in Excel and upload below.';
        }
      });
    }

    // 2. Parse Uploaded Excel/CSV File
    if (bulkFileInput) {
      bulkFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (dropZoneText) {
          dropZoneText.textContent = `📄 Selected: ${file.name}`;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          const text = event.target.result;
          const lines = text.split(/\r\n|\n/).filter(line => line.trim().length > 0);

          parsedBulkProducts = [];

          // Skip header row if present
          const startIndex = lines[0].toLowerCase().includes('product') || lines[0].toLowerCase().includes('price') ? 1 : 0;

          for (let i = startIndex; i < lines.length; i++) {
            // Handle comma or tab separated
            const cols = lines[i].split(/,|\t/).map(c => c.replace(/^["']|["']$/g, '').trim());
            if (cols.length >= 2 && cols[0]) {
              const name = cols[0];
              const price = parseInt(cols[1].replace(/[^0-9]/g, '')) || 99;
              const stock = cols[2] ? (parseInt(cols[2].replace(/[^0-9]/g, '')) || 10) : 10;
              const availStr = cols[3] ? cols[3].toLowerCase() : 'available';
              const available = !availStr.includes('out') && !availStr.includes('no') && !availStr.includes('false');

              parsedBulkProducts.push({
                id: (Date.now() + i) % 100000,
                name,
                price,
                stock,
                available
              });
            }
          }

          if (parsedBulkProducts.length > 0) {
            if (previewCount) previewCount.textContent = `${parsedBulkProducts.length} Products Detected`;
            if (previewItemsList) {
              previewItemsList.innerHTML = parsedBulkProducts.map(p => `
                <div class="preview-item-row">
                  <div>
                    <strong style="color: var(--text-primary);">${p.name}</strong>
                    <span style="font-size: 0.72rem; color: var(--gray-500); margin-left: 6px;">Stock: ${p.stock}</span>
                  </div>
                  <span style="font-weight: 700; color: var(--brand);">₹${p.price}</span>
                </div>
              `).join('');
            }
            if (bulkPreviewArea) bulkPreviewArea.style.display = 'block';
            if (bulkStatusMsg) bulkStatusMsg.textContent = '';
          } else {
            if (bulkStatusMsg) {
              bulkStatusMsg.style.color = '#ef4444';
              bulkStatusMsg.textContent = '❌ Could not find valid product rows in this file. Please use the downloaded template.';
            }
            if (bulkPreviewArea) bulkPreviewArea.style.display = 'none';
          }
        };

        reader.readAsText(file);
      });
    }

    // 3. Confirm Import to Store Inventory
    if (btnConfirmImport) {
      btnConfirmImport.addEventListener('click', () => {
        if (parsedBulkProducts.length === 0) return;

        const seller = SELLERS_DB.find(s => s.id === currentSellerId);
        if (seller) {
          // Prepend newly imported items to inventory
          seller.products.unshift(...parsedBulkProducts);
          renderSellerDashboard(currentSellerId);

          if (bulkStatusMsg) {
            bulkStatusMsg.style.color = '#059669';
            bulkStatusMsg.textContent = `✓ Successfully imported ${parsedBulkProducts.length} products to ${seller.name}!`;
          }

          setTimeout(() => {
            bulkUploadModal.classList.remove('active');
            if (bulkFileInput) bulkFileInput.value = '';
            if (dropZoneText) dropZoneText.textContent = 'Tap to choose .csv or Excel file';
          }, 1200);
        }
      });
    }

    // ===== Sample Barcode Scanner & Photo Add Logic =====
    const btnScanBarcode = document.getElementById('btn-scan-barcode');
    const btnPhotoAdd = document.getElementById('btn-photo-add');
    const sampleScannerModal = document.getElementById('sample-scanner-modal');
    const closeScannerModalBtn = document.getElementById('close-scanner-modal-btn');
    const scannerModalTitle = document.getElementById('scanner-modal-title');
    const scannerModalDesc = document.getElementById('scanner-modal-desc');
    const scannerViewIcon = document.getElementById('scanner-view-icon');
    const scannerViewText = document.getElementById('scanner-view-text');
    const scannerSampleProdText = document.getElementById('scanner-sample-prod-text');
    const btnSimulateAdd = document.getElementById('btn-simulate-add');

    let currentScanMode = 'barcode';

    if (btnScanBarcode && sampleScannerModal) {
      btnScanBarcode.addEventListener('click', () => {
        currentScanMode = 'barcode';
        if (scannerModalTitle) scannerModalTitle.textContent = 'Scan Barcode / QR';
        if (scannerModalDesc) scannerModalDesc.textContent = 'Point camera at any barcode or packaging QR to auto-fetch MRP & specs.';
        if (scannerViewIcon) scannerViewIcon.textContent = '🏷️';
        if (scannerViewText) scannerViewText.textContent = 'Align barcode inside laser guide';
        if (scannerSampleProdText) scannerSampleProdText.textContent = 'Sample Detected: "Type-C Fast Charging Adapter 20W" (₹399)';
        if (btnSimulateAdd) btnSimulateAdd.textContent = '✓ Simulate Barcode Scan & Add';
        sampleScannerModal.classList.add('active');
      });
    }

    if (btnPhotoAdd && sampleScannerModal) {
      btnPhotoAdd.addEventListener('click', () => {
        currentScanMode = 'photo';
        if (scannerModalTitle) scannerModalTitle.textContent = 'Click Photo to Add';
        if (scannerModalDesc) scannerModalDesc.textContent = 'Take a quick photo of the shelf item. AI recognizes name & category.';
        if (scannerViewIcon) scannerViewIcon.textContent = '📷';
        if (scannerViewText) scannerViewText.textContent = 'Capture product packaging';
        if (scannerSampleProdText) scannerSampleProdText.textContent = 'Sample Detected: "Heavy Duty Surge Extension Board" (₹499)';
        if (btnSimulateAdd) btnSimulateAdd.textContent = '✓ Simulate Photo Capture & Add';
        sampleScannerModal.classList.add('active');
      });
    }

    if (closeScannerModalBtn && sampleScannerModal) {
      closeScannerModalBtn.addEventListener('click', () => {
        sampleScannerModal.classList.remove('active');
      });

      sampleScannerModal.addEventListener('click', (e) => {
        if (e.target === sampleScannerModal) {
          sampleScannerModal.classList.remove('active');
        }
      });
    }

    if (btnSimulateAdd) {
      btnSimulateAdd.addEventListener('click', () => {
        const seller = SELLERS_DB.find(s => s.id === currentSellerId);
        if (seller) {
          const newProd = currentScanMode === 'barcode' 
            ? { id: Date.now() % 10000, name: "Type-C Fast Charging Adapter 20W", price: 399, stock: 12, available: true }
            : { id: Date.now() % 10000, name: "Heavy Duty Surge Extension Board", price: 499, stock: 8, available: true };
          
          seller.products.unshift(newProd);
          renderSellerDashboard(currentSellerId);

          btnSimulateAdd.textContent = '✓ Added to Inventory!';
          setTimeout(() => {
            sampleScannerModal.classList.remove('active');
          }, 800);
        }
      });
    }
  }

  // ===== Ask Modal & Filter Modal Handlers =====
  const askModal = document.getElementById('ask-modal');
  const btnOpenAsk = document.getElementById('btn-open-ask-modal');
  const navAsk = document.getElementById('nav-ask');
  const btnSubmitAsk = document.getElementById('btn-submit-ask');
  const askProdInput = document.getElementById('ask-product-name');

  if (btnOpenAsk && askModal) {
    btnOpenAsk.addEventListener('click', () => {
      askModal.classList.add('active');
      if (askProdInput) askProdInput.focus();
    });
  }

  if (navAsk && askModal) {
    navAsk.addEventListener('click', (e) => {
      e.preventDefault();
      askModal.classList.add('active');
      if (askProdInput) askProdInput.focus();
    });
  }

  if (btnSubmitAsk && askModal) {
    btnSubmitAsk.addEventListener('click', () => {
      const prod = askProdInput ? askProdInput.value.trim() : '';
      if (!prod) {
        showToast('⚠️ Please enter an item name to ask shops.');
        return;
      }
      btnSubmitAsk.disabled = true;
      btnSubmitAsk.textContent = '📡 Broadcasting to 8 nearby shops...';
      setTimeout(() => {
        btnSubmitAsk.disabled = false;
        btnSubmitAsk.textContent = 'Broadcast to Nearby Shops';
        askModal.classList.remove('active');
        if (askProdInput) askProdInput.value = '';
        showToast(`✅ Request sent to 8 nearby shops for <strong>${prod}</strong>!`);
      }, 1200);
    });
  }

  if (askModal) {
    askModal.addEventListener('click', (e) => {
      if (e.target === askModal) askModal.classList.remove('active');
    });
  }

  // Filter Modal for shops.html
  const filterModal = document.getElementById('filter-modal');
  const btnShopsFilter = document.getElementById('btn-shops-filter');
  const btnApplyFilters = document.getElementById('btn-apply-filters');

  if (btnShopsFilter && filterModal) {
    btnShopsFilter.addEventListener('click', () => {
      filterModal.classList.add('active');
    });
  }

  if (filterModal) {
    filterModal.addEventListener('click', (e) => {
      if (e.target === filterModal) filterModal.classList.remove('active');
    });
  }

  if (btnApplyFilters && filterModal) {
    btnApplyFilters.addEventListener('click', () => {
      filterModal.classList.remove('active');
      renderShopsPage();
      showToast('✓ Filters applied successfully');
    });
  }

  // ===== HYPERLOCAL MARKETPLACE (Malkangiri District Villages < 30 km) =====
  const HYPERLOCAL_DB = [
    {
      id: 801,
      name: "Homemade Malkangiri Green Mango Pickle (500g)",
      category: "Pickles & Chutneys",
      village: "MV-79 Village",
      distanceKm: 8.2,
      distance: "8.2 km",
      maker: "Anjali Mandal",
      price: 120,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 15,
      available: true,
      icon: "🥒",
      iconBg: "#ECFDF5",
      iconBorder: "#A7F3D0",
      desc: "Authentic spicy raw mango pickle cured in cold-pressed mustard oil with grandma's roasted panch phoron spices."
    },
    {
      id: 802,
      name: "High-Protein Floating Fish Feed Pellets (5kg)",
      category: "Aquaculture & Fish Feed",
      village: "Potteru Rural Hamlet",
      distanceKm: 14.5,
      distance: "14.5 km",
      maker: "Bikram Halder",
      price: 340,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 24,
      available: true,
      icon: "🐟",
      iconBg: "#EFF6FF",
      iconBorder: "#BFDBFE",
      desc: "Farm-grade floating feed pellets enriched with roasted soya meal and dried freshwater shrimp for pond Rohu, Catla, and Tilapia."
    },
    {
      id: 803,
      name: "Pure Hand-Fluffed Semul Cotton Pillow (Simili Tula)",
      category: "Bedding & Pillows",
      village: "MV-26 Village",
      distanceKm: 6.5,
      distance: "6.5 km",
      maker: "Laxmi Biswas",
      price: 280,
      deliveryMode: "🏪 Self Pickup & 🛵 Village Delivery",
      deliveryType: "both",
      stock: 12,
      available: true,
      icon: "🛏️",
      iconBg: "#FAF5FF",
      iconBorder: "#E9D5FF",
      desc: "Naturally cooling hypoallergenic pillow stuffed with 1.2 kg of hand-cleaned natural silk cotton harvested from Malkangiri red cotton trees."
    },
    {
      id: 804,
      name: "Handmade Earthen Clay Cooking Handi with Lid (2.5L)",
      category: "Clay Pottery & Cookware",
      village: "Padmagiri Village",
      distanceKm: 11.2,
      distance: "11.2 km",
      maker: "Sanatan Kumbhar",
      price: 190,
      deliveryMode: "🏪 Self Pickup & 🛵 Village Delivery",
      deliveryType: "both",
      stock: 14,
      available: true,
      icon: "🏺",
      iconBg: "#FFF7ED",
      iconBorder: "#FED7AA",
      desc: "Traditional wheel-thrown red clay pot seasoned with rice starch. Retains nutrients and gives aromatic earthy flavor to curries and dal."
    },
    {
      id: 805,
      name: "Handwoven Bamboo Winnowing Fan & Basket Set (Kula & Dala)",
      category: "Bamboo & Cane Crafts",
      village: "Sikhapalli Gram",
      distanceKm: 9.8,
      distance: "9.8 km",
      maker: "Budhram Majhi",
      price: 220,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 16,
      available: true,
      icon: "🧺",
      iconBg: "#FEFCE8",
      iconBorder: "#FEF08A",
      desc: "Tight-weave sturdy native bamboo winnower (Kula) and deep storage basket (Dala) handcrafted from treated forest green bamboo."
    },
    {
      id: 806,
      name: "Pure Desi Cow Bilona Ghee (500ml Glass Jar)",
      category: "Desi Dairy & Ghee",
      village: "Mathili Tribal Belt",
      distanceKm: 28.5,
      distance: "28.5 km",
      maker: "Ratan Dora",
      price: 580,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 10,
      available: true,
      icon: "🧈",
      iconBg: "#FEF3C7",
      iconBorder: "#FDE68A",
      desc: "Authentic earthen-pot bilona churned curd ghee from indigenous free-grazing cows in Mathili valley. Granular golden texture and rich aroma."
    },
    {
      id: 807,
      name: "Wild Forest Raw Rock Honey (500g Glass Jar)",
      category: "Forest Honey",
      village: "Tandiki Forest Hamlet",
      distanceKm: 21.0,
      distance: "21.0 km",
      maker: "Raju Murmu",
      price: 320,
      deliveryMode: "🛵 Village Delivery (Within 24h)",
      deliveryType: "delivery",
      stock: 18,
      available: true,
      icon: "🍯",
      iconBg: "#FFFBEB",
      iconBorder: "#FDE68A",
      desc: "100% pure multifloral wild rock bee honey sustainably extracted from deep teak and sal forest canopy. Unprocessed and unpasteurized."
    },
    {
      id: 808,
      name: "Hand-Rolled Spiced Urad Dal Phula Badi (400g Pouch)",
      category: "Sun-Dried Badi & Papad",
      village: "MV-19 Farm Colony",
      distanceKm: 7.5,
      distance: "7.5 km",
      maker: "Purnima Halder",
      price: 110,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 25,
      available: true,
      icon: "🥟",
      iconBg: "#FDF2F8",
      iconBorder: "#FBCFE8",
      desc: "Light, airy sun-dried black gram lentil nuggets whipped by hand with cumin and black pepper. Crisps golden-brown upon shallow frying."
    },
    {
      id: 809,
      name: "Wood-Pressed Cold Pure Mahua & Neem Body & Hair Oil (250ml)",
      category: "Herbal Oils & Care",
      village: "MV-42 Hamlet",
      distanceKm: 17.6,
      distance: "17.6 km",
      maker: "Kamala Gouda",
      price: 160,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 20,
      available: true,
      icon: "🌿",
      iconBg: "#F0FDF4",
      iconBorder: "#BBF7D0",
      desc: "Cold expeller pressed native Mahua flower seed and wild neem seed oil. Traditional remedy for dry skin, scalp dandruff, and muscle fatigue."
    },
    {
      id: 810,
      name: "Pure Cotton Handloom Village Bath Towel / Gamucha (Pack of 2)",
      category: "Handloom Weaving",
      village: "Kalimela Road Hamlet",
      distanceKm: 19.8,
      distance: "19.8 km",
      maker: "Subash Tanti",
      price: 210,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 15,
      available: true,
      icon: "🧵",
      iconBg: "#EFF6FF",
      iconBorder: "#BFDBFE",
      desc: "100% unbleached absorbent soft cotton village handloom weave with checked red and white borders. Quick-drying and skin-friendly."
    },
    {
      id: 811,
      name: "Hand-Forged Carbon Steel Village Sickle & Curved Knife (Daasi)",
      category: "Hand-Forged Tools",
      village: "Balimela Outskirts",
      distanceKm: 22.3,
      distance: "22.3 km",
      maker: "Mangala Kamar",
      price: 240,
      deliveryMode: "🏪 Self Pickup Only",
      deliveryType: "pickup",
      stock: 11,
      available: true,
      icon: "🔪",
      iconBg: "#F3F4F6",
      iconBorder: "#E5E7EB",
      desc: "Heavy-duty recycled railway carbon steel sickle hand-beaten on anvil with a carved Sal wood handle. Razor-sharp edge for grass and crops."
    },
    {
      id: 812,
      name: "Organic Stone-Ground Finger Millet Flour (Mandia / Ragi - 2kg)",
      category: "Millets & Flours",
      village: "Bhejangiwada Gram",
      distanceKm: 26.8,
      distance: "26.8 km",
      maker: "Arjun Madhi",
      price: 130,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 30,
      available: true,
      icon: "🌾",
      iconBg: "#FEF3C7",
      iconBorder: "#FDE68A",
      desc: "High-calcium native tribal Mandia millet ground slowly in stone flour chakkis to preserve dietary fiber. Ideal for healthy morning porridge and roti."
    },
    {
      id: 813,
      name: "Desi Cow Dung & Forest Loban Natural Dhoop Cones (Pack of 30)",
      category: "Natural Incense & Dhoop",
      village: "Korkunda Village",
      distanceKm: 12.0,
      distance: "12.0 km",
      maker: "Basanti Nayak",
      price: 95,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 40,
      available: true,
      icon: "🪔",
      iconBg: "#FFF1F2",
      iconBorder: "#FECDD3",
      desc: "Charcoal-free aromatic prayer dhoop cones pressed from indigenous cow dung, natural tree gum (Jhuna/Guggul), and crushed camphor."
    },
    {
      id: 814,
      name: "Handmade Organic Sugarcane Solid Jaggery Blocks (Desi Guda - 1kg)",
      category: "Traditional Sweets & Jaggery",
      village: "Malkangiri Sadar Rural",
      distanceKm: 4.2,
      distance: "4.2 km",
      maker: "Bipin Nayak",
      price: 85,
      deliveryMode: "🛵 Instant Village Delivery",
      deliveryType: "delivery",
      stock: 35,
      available: true,
      icon: "🍯",
      iconBg: "#FFFBEB",
      iconBorder: "#FDE68A",
      desc: "Unrefined iron-rich country jaggery boiled over fire furnaces from local sugarcane juice with natural okro mucilage clarifier. Zero chemicals."
    },
    {
      id: 815,
      name: "Native Heirloom Vegetable Garden Seeds Kit (6 Desi Varieties)",
      category: "Heirloom Seeds & Plants",
      village: "MV-79 Village",
      distanceKm: 8.2,
      distance: "8.2 km",
      maker: "Dhiren Biswas",
      price: 150,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 22,
      available: true,
      icon: "🌱",
      iconBg: "#ECFDF5",
      iconBorder: "#A7F3D0",
      desc: "Open-pollinated native seed packets: Malkangiri green chilli, small native brinjal, ridge gourd, ash gourd, country tomato, and cluster beans."
    },
    {
      id: 816,
      name: "Handwoven Wild River Grass Sleeping Mat (Chatai - 6x3 ft)",
      category: "Grass Crafts & Mats",
      village: "Chitrakonda Ghat Village",
      distanceKm: 24.0,
      distance: "24.0 km",
      maker: "Subhadra Poddar",
      price: 260,
      deliveryMode: "🏪 Self Pickup & 🛵 Village Delivery",
      deliveryType: "both",
      stock: 9,
      available: true,
      icon: "🎋",
      iconBg: "#F0FDF4",
      iconBorder: "#BBF7D0",
      desc: "Rollable natural cooling floor mat woven from wild river sedge reeds with strong cotton warp threads. Naturally repels ground heat."
    },
    {
      id: 817,
      name: "Tender Bamboo Shoot Pickle (Karadi Achar - 400g Jar)",
      category: "Tribal Forest Food",
      village: "Pandripani Village",
      distanceKm: 16.4,
      distance: "16.4 km",
      maker: "Sumitra Hembram",
      price: 150,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 17,
      available: true,
      icon: "🎍",
      iconBg: "#FEFCE8",
      iconBorder: "#FEF08A",
      desc: "Tender mountain bamboo shoots shredded and naturally fermented in raw mustard paste, turmeric, and local bird's eye chillies."
    },
    {
      id: 818,
      name: "Malkangiri Cleaned Sun-Dried River Fish (Sukhua - 250g)",
      category: "Sun-Dried River Fish",
      village: "Chitrakonda Ghat Village",
      distanceKm: 24.0,
      distance: "24.0 km",
      maker: "Gouranga Mondal",
      price: 160,
      deliveryMode: "🛵 Village Delivery & 🏪 Self Pickup",
      deliveryType: "both",
      stock: 20,
      available: true,
      icon: "🐟",
      iconBg: "#EFF6FF",
      iconBorder: "#BFDBFE",
      desc: "Freshwater river catch sun-cured with rock salt on riverbank drying mats. Cleaned, de-scaled, odor-sealed, and ready for village curry."
    }
  ];

  function renderHyperlocalPage() {
    const grid = document.getElementById('hyperlocal-products-grid');
    if (!grid) return;

    const searchInput = document.getElementById('hyperlocal-search-input');
    const countLabel = document.getElementById('hyperlocal-feed-count');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    let filtered = HYPERLOCAL_DB.filter(item => {
      // Strictly keep distance under 30 km
      if (item.distanceKm > 30) return false;

      // Search query match
      if (query) {
        const match = item.name.toLowerCase().includes(query) ||
                      item.village.toLowerCase().includes(query) ||
                      item.maker.toLowerCase().includes(query) ||
                      item.category.toLowerCase().includes(query) ||
                      item.desc.toLowerCase().includes(query);
        if (!match) return false;
      }

      return true;
    });

    if (countLabel) {
      countLabel.textContent = `${filtered.length} Product${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-products-msg" style="padding: 30px 16px; text-align: center;">
          <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">🌾</span>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--ink);">No village products match your search</h4>
          <p style="font-size: 0.8rem; color: #6B7280; margin: 4px 0 14px;">Try searching for pickles, fish food, pillows, or clear the search.</p>
          <button id="btn-reset-hyperlocal" class="btn-submit" style="max-width: 200px; margin: 0 auto; padding: 7px 16px; font-size: 0.8rem; background: var(--crimson);">
            View All Products
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-hyperlocal');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          renderHyperlocalPage();
        });
      }
      return;
    }

    const userCart = getUserCart();

    grid.innerHTML = filtered.map(item => {
      const isInCart = userCart.some(c => c.id === item.id && c.shopName === item.village);
      const isPickupOnly = item.deliveryType === 'pickup';

      return `
        <div class="hyperlocal-product-card fade-in" data-id="${item.id}">
          <!-- Top Row: Icon + Title + Price -->
          <div style="display: flex; gap: 9px; align-items: flex-start;">
            <div style="width: 44px; height: 44px; border-radius: 8px; background: ${item.iconBg}; border: 1px solid ${item.iconBorder}; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">
              ${item.icon}
            </div>
            <div style="flex: 1; min-width: 0;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 6px;">
                <h4 style="font-size: 0.86rem; font-weight: 700; color: var(--ink); line-height: 1.25; margin: 0;">${item.name}</h4>
                <span style="font-size: 0.95rem; font-weight: 800; color: var(--crimson); flex-shrink: 0;">₹${item.price}</span>
              </div>
              <div class="hyperlocal-maker-row" style="margin-top: 3px;">
                <span class="hyperlocal-village-badge">
                  📍 ${item.village}
                </span>
                <span class="hyperlocal-distance-badge">
                  ⚡ ${item.distance}
                </span>
              </div>
            </div>
          </div>

          <!-- Description snippet -->
          <p class="hyperlocal-desc">${item.desc}</p>

          <!-- Delivery & Maker Row -->
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; margin-top: 2px;">
            <span class="hyperlocal-delivery-tag ${isPickupOnly ? 'pickup-only' : ''}">
              ${item.deliveryMode}
            </span>
            <span style="font-size: 0.7rem; color: #4B5563; font-weight: 600;">
              Maker: <strong>${item.maker}</strong>
            </span>
          </div>

          <!-- Action Buttons Footer -->
          <div class="home-prod-footer" style="margin-top: 4px; padding-top: 6px;">
            <button class="btn-hyperlocal-call" data-maker="${item.maker}" data-village="${item.village}" title="Call ${item.maker}">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call
            </button>

            <div style="display: flex; align-items: center; gap: 6px;">
              <button class="btn-cart-icon-action ${isInCart ? 'in-cart' : ''}" 
                      data-id="${item.id}" 
                      data-shop="${item.village}" 
                      data-name="${item.name}" 
                      data-price="${item.price}" 
                      data-image="logo.webp"
                      title="${isInCart ? 'In Cart (Tap to Remove)' : 'Add to Cart'}">
                ${isInCart ? `
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ` : `
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                `}
              </button>
              <button class="btn-reserve-item" 
                      data-id="${item.id}" 
                      data-shop="${item.village} (${item.maker})" 
                      data-name="${item.name}" 
                      data-price="${item.price}">
                Reserve
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach Call button listeners (Demo action consistent with SeekIt prototype)
    grid.querySelectorAll('.btn-hyperlocal-call').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const maker = e.currentTarget.dataset.maker;
        const village = e.currentTarget.dataset.village;
        showToast(`📞 Connecting call to <strong>${maker}</strong> (${village} - Demo)...`);
      });
    });

    // Attach Cart button listeners
    grid.querySelectorAll('.btn-cart-icon-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const id = parseInt(targetBtn.dataset.id);
        const name = targetBtn.dataset.name;
        const shopName = targetBtn.dataset.shop;
        const price = parseInt(targetBtn.dataset.price);
        const image = targetBtn.dataset.image;

        const isCurrentlyInCart = targetBtn.classList.contains('in-cart');

        if (isCurrentlyInCart) {
          removeFromUserCart(id, shopName);
          targetBtn.classList.remove('in-cart');
          targetBtn.title = 'Add to Cart';
          targetBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          `;
        } else {
          const success = addToUserCart({ id, name, shopName, price, image });
          if (success) {
            targetBtn.classList.add('in-cart');
            targetBtn.title = 'In Cart (Tap to Remove)';
            targetBtn.innerHTML = `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            `;
          }
        }
      });
    });

    // Attach Reserve button listeners
    grid.querySelectorAll('.btn-reserve-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodName = e.target.dataset.name;
        const shopName = e.target.dataset.shop;
        const price = e.target.dataset.price;
        const otp = '#SK-' + Math.floor(1000 + Math.random() * 9000);

        const userReservations = getUserReservations();
        userReservations.unshift({
          id: Date.now(),
          productName: prodName,
          shopName: shopName,
          price: price,
          qty: 1,
          code: otp,
          status: 'Confirmed',
          date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        setUserReservations(userReservations);

        e.target.textContent = '✓ Reserved';
        e.target.style.background = '#059669';
        e.target.style.borderColor = '#059669';
        e.target.style.color = '#fff';

        showToast(`🎉 Reserved <strong>${prodName}</strong>! Pickup OTP: <strong>${otp}</strong>`);
      });
    });
  }

  function initHyperlocalPage() {
    window.renderHyperlocalPage = renderHyperlocalPage;
    const searchInput = document.getElementById('hyperlocal-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        renderHyperlocalPage();
      });
    }

    renderHyperlocalPage();
  }

  // Initialize Reserved Products page and top badge
  if (typeof updateReservationBadge === 'function') {
    updateReservationBadge();
  }
  if (document.getElementById('reserved-products-page-list')) {
    renderReservedProductsPage();
  }

  // Initialize Hyperlocal Market page
  if (document.getElementById('hyperlocal-products-grid')) {
    initHyperlocalPage();
  }

  // Forward mouse wheel on fixed header to scrollable content sheet
  const appHeader = document.querySelector('.app-header-gradient');
  const mainSheet = document.querySelector('.curved-sheet-content');
  if (appHeader && mainSheet) {
    appHeader.addEventListener('wheel', (e) => {
      mainSheet.scrollTop += e.deltaY;
    }, { passive: true });
  }
});

// Also re-sync on pageshow (e.g. back navigation or cached restore)
window.addEventListener('pageshow', () => {
  if (typeof updateReservationBadge === 'function') updateReservationBadge();
  if (document.getElementById('reserved-products-page-list')) {
    if (typeof renderReservedProductsPage === 'function') renderReservedProductsPage();
  }
  if (document.getElementById('hyperlocal-products-grid')) {
    if (typeof window.renderHyperlocalPage === 'function') {
      window.renderHyperlocalPage();
    }
  }
});


