const items = [
    {
        id: 1,
        category: 'mac',
        imgUrl: 'img/items/macbook-air.png',
        name: 'MacBook Air',
        display: 13.3, // дюймы
        color: ['Gold', 'Silver', 'Space Grey'],
        price: 999, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 8, // Гб
        storage: 256, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.61', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.29', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 435, // кол-во едениц товара в наличии
        	reviews: 77, // процент положительных отзывов
        }
    },
    {
        id: 2,
        category: 'mac',
        imgUrl: 'img/items/macbook-air.png',
        name: 'MacBook Air',
        display: 13.3, // дюймы
        color: ['Gold', 'Silver', 'Space Grey'],
        price: 1249, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 16, // Гб
        storage: 512, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.61', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.29', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 84, // процент положительных отзывов
        }
    },
    {
        id: 3 ,
        category: 'mac',
        imgUrl: 'img/items/macbook-pro13.png',
        name: 'MacBook Pro 13',
        display: 13.3, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 1299, // доллары
        chip: {
            name: 'Intel Core i5',
            cores: 8,
        },
        ram: 8, // Гб
        storage: 512, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.56', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.4', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 13', '61W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 25, // кол-во едениц товара в наличии
        	reviews: 85, // процент положительных отзывов
        }
    },
    {
        id: 4 ,
        category: 'mac',
        imgUrl: 'img/items/macbook-pro13.png',
        name: 'MacBook Pro 13',
        display: 13.3, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 1499, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 16, // Гб
        storage: 1024, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.56', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.4', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 13', '61W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 256, // кол-во едениц товара в наличии
        	reviews: 80, // процент положительных отзывов
        }
    },
    {
        id: 5 ,
        category: 'mac',
        imgUrl: 'img/items/macbook-pro16.png',
        name: 'MacBook Pro 16',
        display: 16, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 2399, // доллары
        chip: {
            name: ' Intel Core i7',
            cores: 6,
        },
        ram: 16, // Гб
        storage: 1024, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.62', // cm
            width: '35.79', // cm
            depth: '24.59', // cm
            weight: '2', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 16', '96W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 124, // кол-во едениц товара в наличии
        	reviews: 91, // процент положительных отзывов
        }
    },
    {
        id: 6 ,
        category: 'mac',
        imgUrl: 'img/items/macbook-pro16.png',
        name: 'MacBook Pro 16',
        display: 16, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 2799, // доллары
        chip: {
            name: ' Intel Core i9',
            cores: 8,
        },
        ram: 32, // Гб
        storage: 2048, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.62', // cm
            width: '35.79', // cm
            depth: '24.59', // cm
            weight: '2', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 16', '96W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 69, // кол-во едениц товара в наличии
        	reviews: 90, // процент положительных отзывов
        }
    },
    {
        id: 7 ,
        category: 'mac',
        imgUrl: 'img/items/imac.png',
        name: 'IMac',
        display: 21.5, // дюймы
        color: [  'Space Grey'],
        price: 1099, // доллары
        chip: {
            name: 'Intel Core i5,',
            cores: '6',//dual‑core
        },
        ram: 8, // Гб
        storage: 256,
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 4.2 '],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '45', // cm
            width: '52.8', // cm
            depth: '17.5', // cm
            weight: '5.44', // Кг
        },
        os: 'macOS',
        InTheBox: ['iMac ', 'Magic Keyboard', 'Magic Mouse 2', 'Power cord', 'Lightning to USB Cable', 'Polishing cloth'],
        orderInfo: {
        	inStock: 742, // кол-во едениц товара в наличии
        	reviews: 75, // процент положительных отзывов
        }
    },
    {
        id: 8 ,
        category: 'mac',
        imgUrl: 'img/items/imac.png',
        name: 'IMac',
        display: 27, // дюймы
        color: [  'Space Grey'],
        price: 1799, // доллары
        chip: {
            name: 'Intel Core i5,',
            cores: '6',//dual‑core
        },
        ram: 8, // Гб
        storage: 256,
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0 '],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '51.6', // cm
            width: '65', // cm
            depth: '20.3', // cm
            weight: '8.92', // Кг
        },
        os: 'macOS',
        InTheBox: ['iMac with Retina 5K display ', 'Magic Keyboard', 'Magic Mouse 2', 'Power cord', 'Lightning to USB Cable', 'Polishing cloth'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 9 ,
        category: 'mac',
        imgUrl: 'img/items/mac_pro.png',
        name: 'Mac Pro',
        display: null, // дюймы
        color: [  'Space Grey'],
        price: 2499, // доллары
        chip: {
            name: 'Intel Xeon W',
            cores: '16',//dual‑core
        },
        ram: 64, // Гб
        storage: 1024,//
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0 '],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '50', // cm
            width: '30', // cm
            depth: '60', // cm
            weight: '18', // Кг
        },
        os: 'macOS',
        InTheBox: ['Mac Pro', 'Magic Keyboard with Numeric Keypad', 'Magic Mouse 2', 'USB-C to Lightning Cable (1 m)', 'Power cord (2 m)'],
        orderInfo: {
        	inStock: 587, // кол-во едениц товара в наличии
        	reviews: 56, // процент положительных отзывов
        }
    },
    {
        id: 10 ,
        category: 'ipad',
        imgUrl: 'img/items/ipad-pro.jpeg',
        name: 'IPad Pro ',
        display: 11, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 750, // доллары
        chip: {
            name: 'A12Z Bionic',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // TB
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '24.7', // cm
            width: '17.8', // cm
            depth: '0.6', // cm
            weight: '0.470', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad Pro', 'USB-C Charge Cable (1 meter)', '18W USB-C Power Adapter'],
        orderInfo: {
        	inStock: 32, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 11 ,
        category: 'ipad',
        imgUrl: 'img/items/ipad.png',
        name: 'IPad',
        display: 10.2, // дюймы
        color: [ 'Silver', 'Space Grey','Gold'],
        price: 309, // доллары
        chip: {
            name: 'A12 Bionic  ',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '25.7', // cm
            width: '17.4', // cm
            depth: '0.6', // cm
            weight: '0.490', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad', 'USB-C Power Adapter', 'Lightning to USB-C Cable'],
        orderInfo: {
        	inStock: 90, // кол-во едениц товара в наличии
        	reviews: 0, // процент положительных отзывов
        }
    },
    {
        id: 12 ,
        category: 'ipad',
        imgUrl: 'img/items/ipad-mini.png',
        name: 'IPad mini',
        display: 7.9, // дюймы
        color: [ 'Silver', 'Space Grey','Gold'],
        price: 309, // доллары
        chip: {
            name: 'A12 Bionic  ',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '20.3', // cm
            width: '13.4', // cm
            depth: '0.6', // cm
            weight: '0.300', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad mini', 'USB-C Power Adapter', 'Lightning to USB-C Cable'],
        orderInfo: {
        	inStock: 77, // кол-во едениц товара в наличии
        	reviews: 85, // процент положительных отзывов
        }
    },
    {
        id: 13 ,
        category: 'Watch',
        imgUrl: 'img/items/apple-watch-series-6.png',
        name: 'Apple Watch Series 6',
        display: 1.73228, // дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 399, // доллары
        chip: {
            name: 'S6 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,4', // cm
            width: '3.8', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Solo Loop', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 90, // кол-во едениц товара в наличии
        	reviews: 45, // процент положительных отзывов
        }
    },
    {
        id: 14 ,
        category: 'Watch',
        imgUrl: 'img/items/apple-watch-se.jpg',
        name: 'Apple Watch Series SE',
        display: 1.73228, // дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 309, // доллары
        chip: {
            name: 'S5 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 22.1654, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,4', // cm
            width: '3.8', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Band (can be configured for either S/M or M/L length)', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 79, // кол-во едениц товара в наличии
        	reviews: 69, // процент положительных отзывов
        }
    },
    {
        id: 15 ,
        category: 'Watch',
        imgUrl: 'img/items/apple-watch3.jpg',
        name: 'Apple Watch Series 3',
        display: 22.1654 ,// дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 309, // доллары
        chip: {
            name: 'S5 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 8, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,2', // cm
            width: '3.3', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Band (can be configured for either S/M or M/L length)', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 47, // кол-во едениц товара в наличии
        	reviews: 93, // процент положительных отзывов
        }
    },
    {
        id: 16,
        category: 'iphone',
        imgUrl: 'img/items/iphone_12.jpg',
        name: 'IPhone 12',
        display: 6.1, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 799, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 73, // кол-во едениц товара в наличии
        	reviews: 12, // процент положительных отзывов
        }
    },
    {
        id: 17,
        category: 'iphone',
        imgUrl: 'img/items/iphone_12.jpg',
        name: 'IPhone 12',
        display: 6.1, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 73, // процент положительных отзывов
        }
    },
    {
        id: 18,
        category: 'iphone',
        imgUrl: 'img/items/iphone_12.jpg',
        name: 'IPhone 12 Mini',
        display: 5.4, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 669, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '13.1', // cm
            width: '6.41', // cm
            depth: '0.7', // cm
            weight: '0.135', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 43, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 19,
        category: 'iphone',
        imgUrl: 'img/items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro',
        display: 6.1, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 999, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 84, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 20,
        category: 'iphone',
        imgUrl: 'img/items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro',
        display: 6.1, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 1099, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 512, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 2, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 21,
        category: 'iphone',
        imgUrl: 'img/items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro Max',
        display: 6.7, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 1099, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '16.0', // cm
            width: '7.8', // cm
            depth: '0.7', // cm
            weight: '0.228', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 5, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 22,
        category: 'iphone',
        imgUrl: 'img/items/iphone-se.jpeg',
        name: 'IPhone SE',
        display: 4.7, // дюймы
        color: ['Black', 'White', 'Red'],
        price: 1099, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '13.8', // cm
            width: '7.7', // cm
            depth: '0.7', // cm
            weight: '0.148', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 81, // кол-во едениц товара в наличии
        	reviews: 73, // процент положительных отзывов
        }
    },
    {
        id: 23,
        category: 'iphone',
        imgUrl: 'img/items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 98, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 24,
        category: 'iphone',
        imgUrl: 'img/items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 999, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 512, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Triple 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 115, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 25,
        category: 'iphone',
        imgUrl: 'img/items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Triple 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 26,
        category: 'iphone',
        imgUrl: 'img/items/iphone-xr.jpg',
        name: 'IPhone XR',
        display: 6.1, // дюймы
        color: ['Black', 'Coral', 'Yellow', 'Blue', 'White', 'Red'],
        price: 699, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 23, // кол-во едениц товара в наличии
        	reviews: 86, // процент положительных отзывов
        }
    },
    {
        id: 27,
        category: 'iphone',
        imgUrl: 'img/items/iphone-xs.jpg',
        name: 'IPhone XS',
        display: 5.8, // дюймы
        color: ['White', 'Rose Gold', 'Space Grey'],
        price: 699, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.3', // cm
            width: '7.0', // cm
            depth: '0.7', // cm
            weight: '0.177', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 12', 'USB-A to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 34, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 28,
        category: 'iphone',
        imgUrl: 'img/items/iphone-xs.jpg',
        name: 'IPhone XS',
        display: 5.8, // дюймы
        color: ['White', 'Rose Gold', 'Space Grey'],
        price: 799, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.3', // cm
            width: '7.0', // cm
            depth: '0.7', // cm
            weight: '0.177', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 12', 'USB-A to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 29,
        category: 'tv',
        imgUrl: 'img/items/apple-tv.jpeg',
        name: 'Apple TV 4K',
        display: null, // дюймы
        color: ['Black'],
        price: 179, // доллары
        chip: {
            name: 'A10X',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: null,
        audio: null,
        size: {
            height: '3.5', // cm
            width: '9.8', // cm
            depth: '3.5', // cm
            weight: '0.425', // Кг
        },
        os: 'tvOS',
        InTheBox: ['Apple TV 4K', 'Siri Remote', 'Power cord', 'Lightning to USB cable', 'Documentation'],
        orderInfo: {
        	inStock: 2, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 30,
        category: 'tv',
        imgUrl: 'img/items/apple-tv.jpeg',
        name: 'Apple TV 4K',
        display: null, // дюймы
        color: ['Black'],
        price: 199, // доллары
        chip: {
            name: 'A10X',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: null,
        audio: null,
        size: {
            height: '3.5', // cm
            width: '9.8', // cm
            depth: '3.5', // cm
            weight: '0.425', // Кг
        },
        os: 'tvOS',
        InTheBox: ['Apple TV 4K', 'Siri Remote', 'Power cord', 'Lightning to USB cable', 'Documentation'],
        orderInfo: {
        	inStock: 1, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 31,
        category: 'airpods',
        imgUrl: 'img/items/airpods.jpg',
        name: 'AirPods',
        display: null, // дюймы
        color: ['White'],
        price: 199, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '5.3', // cm
            width: '4.4', // cm
            depth: '0.2', // cm
            weight: '0.04', // Кг
        },
        os: null,
        InTheBox: ['AirPods', 'Wireless Charging Case', 'Lightning to USB-A Cable', 'Documentation'],
        orderInfo: {
        	inStock: 23, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 32,
        category: 'airpods',
        imgUrl: 'img/items/airpods_pro.jpg',
        name: 'AirPods Pro',
        display: null, // дюймы
        color: ['White'],
        price: 299, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4.5', // cm
            width: '6.0', // cm
            depth: '0.21', // cm
            weight: '0.04', // Кг
        },
        os: null,
        InTheBox: ['AirPods Pro', 'Wireless Charging Case', 'Lightning to USB-C Cable', 'Documentation', 'Silicone ear tips (three sizes)'],
        orderInfo: {
        	inStock: 29, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 33,
        category: 'airpods',
        imgUrl: 'img/items/airpods-max.jpg',
        name: 'AirPods Max',
        display: null, // дюймы
        color: ['White'],
        price: 599, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '18.7', // cm
            width: '16.8', // cm
            depth: '8.3', // cm
            weight: '0.38', // Кг
        },
        os: null,
        InTheBox: ['AirPods MAx', 'Smart Case', 'Lightning to USB-C Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 5, // процент положительных отзывов
        }
    },
    {
        id: 34 ,
        category: 'ipad',
        imgUrl: 'img/items/ipad-air.png',
        name: 'IPad Air',
        display: 10.9, // дюймы
        color: [ 'Silver', 'Space Grey','Rose Gold','Green','Sky Blue'],
        price: 549, // доллары
        chip: {
            name: 'A14 Bionic ',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '24.7', // cm
            width: '17.8', // cm
            depth: '0.6', // cm
            weight: '0.458', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad Air', 'USB-C Charge Cable (1 meter)', '20W USB-C Power Adapter'],
        orderInfo: {
        	inStock: 97, // кол-во едениц товара в наличии
        	reviews: 97, // процент положительных отзывов
        }
    },
]


class webSite {
  constructor() {
    this.devicesGrid = document.createElement('div')
    this.devicesGrid.className = 'grid'
    this.cart = []
    this.cartBtn = document.createElement('button')
    this.cartBtn.className = 'cart btn btn-outline-dark'
    this.cartBtn.innerText = `Cart (${this.cart.length})`
    this.devices = []
    this.categories = []
    this.inCartDiv = document.createElement('div')
    items.forEach(item => {
      let newDevice = new Device(item)
      newDevice.addToCartButton.addEventListener('click', () => {
        this.cart.push(newDevice)
        this.cartBtn.innerText = `Cart (${this.cart.length})`
      })
      this.devices.push(newDevice)
      if (!this.categories.includes(newDevice.property.category)) {
        this.categories.push(newDevice.property.category)
      }
      this.devicesGrid.appendChild(newDevice.deviceDiv)
    })
    this.createHeaderHTML()
    this.createSidebarHTML()
    document.body.appendChild(this.devicesGrid)
  }

  createHeaderHTML() {
    let header = document.createElement('div')
    header.className = 'header'
    header.style.textAlign = 'center';

    let homeLink = document.createElement('button')
    homeLink.className = 'home btn btn-outline-primary'
    homeLink.style.paddingBottom = '5px';
    homeLink.innerText = 'HOME'

    let inputElementDiv = document.createElement('div')
    let inputElement = document.createElement('input')
    inputElement.className = 'input'
    inputElement.placeholder = 'Enter device name'
    let searchButton = document.createElement('button')
    searchButton.innerText = 'Search'
    searchButton.className = 'search'
    inputElementDiv.appendChild(inputElement)
    inputElementDiv.appendChild(searchButton)

    header.appendChild(homeLink)
    header.appendChild(inputElementDiv)
    header.appendChild(this.cartBtn)

    homeLink.addEventListener('click', () => {
      this.inCartDiv.innerText = ''
      let value = inputElement.value
      inputElement.value = ''
      this.devicesGrid.innerText = ''
      this.devices.forEach(device => {
        if (device.property.name.toLowerCase().includes(value.toLowerCase()))
        this.devicesGrid.appendChild(device.deviceDiv)
      })
    })

    searchButton.addEventListener('click', () => {
      this.inCartDiv.innerText = ''
      let value = inputElement.value
      inputElement.value = ''
      this.devicesGrid.innerText = ''
      this.devices.forEach(device => {
        if (device.property.name.toLowerCase().includes(value.toLowerCase()))
        this.devicesGrid.appendChild(device.deviceDiv)
      })
    })

    this.cartBtn.addEventListener('click', () => {
      this.devicesGrid.innerText = ''
      this.inCartDiv.innerText = ''
      this.inCartDiv.style.textAlign = 'center'
      if (this.cart.length === 0) {
        let inCartParagraph = document.createElement('h1')
        inCartParagraph.innerText = 'There no items in Cart'
        this.inCartDiv.appendChild(inCartParagraph)
      } else {
        let inCartParagraph = document.createElement('h1')
        inCartParagraph.innerText = 'Items in Cart'
        this.inCartDiv.appendChild(inCartParagraph)
        this.cart = this.cart.sort()
        let amount = 1
        let totalPrice = 0
        
        for (let i = 0; i < this.cart.length - 1; i++) {
          if (this.cart[i] === this.cart[i + 1]) {
            amount++
            totalPrice += this.cart[i].property.price
          } else {
            totalPrice += this.cart[i].property.price
            let curDeviceDiv = document.createElement('div')
            let amountOfCurDevice = document.createElement('h2')
            amountOfCurDevice.innerText = `Amount of this product: ${amount}`
            let curDevice = this.cart[i].createHTML()
            curDeviceDiv.appendChild(amountOfCurDevice)
            curDeviceDiv.appendChild(curDevice)
            this.inCartDiv.appendChild(curDeviceDiv)
            amount = 1
            let deleteBtn = document.createElement('button')
            deleteBtn.className = `delete-item-from-cart${this.cart[i].id} btn btn-outline-danger`
            deleteBtn.textContent = 'Delete'
            deleteBtn.addEventListener('click', () => {
              this.cart.splice(i, 1)
              this.cartBtn.innerText = `Cart (${this.cart.length})`
              this.inCartDiv.innerText = ''
              let value = inputElement.value
              inputElement.value = ''
              this.devicesGrid.innerText = ''
              this.devices.forEach(device => {
                if (device.property.name.toLowerCase().includes(value.toLowerCase()))
                this.devicesGrid.appendChild(device.deviceDiv)
              })
            })
            this.inCartDiv.appendChild(deleteBtn)
          }
        }
        let curDeviceDiv = document.createElement('div')
        let amountOfCurDevice = document.createElement('h2')
        amountOfCurDevice.innerText = `Amount of this product: ${amount}`
        let curDevice = this.cart[this.cart.length - 1].createHTML()
        curDeviceDiv.appendChild(amountOfCurDevice)
        curDeviceDiv.appendChild(curDevice)
        this.inCartDiv.appendChild(curDeviceDiv)
        let deleteBtn = document.createElement('button')
        deleteBtn.className = `delete-item-from-cart${this.cart[this.cart.length - 1].id} btn btn-outline-danger`
        deleteBtn.textContent = 'Delete'

        totalPrice += this.cart[this.cart.length - 1].property.price
        deleteBtn.addEventListener('click', () => {
          this.cart.pop()
          this.inCartDiv.innerText = ''
          this.cartBtn.innerText = `Cart (${this.cart.length})`
          let value = inputElement.value
          inputElement.value = ''
          this.devicesGrid.innerText = ''
          this.devices.forEach(device => {
            if (device.property.name.toLowerCase().includes(value.toLowerCase()))
            this.devicesGrid.appendChild(device.deviceDiv)
          })
        })
        this.inCartDiv.appendChild(deleteBtn)
        document.body.appendChild(this.inCartDiv)
        
        let afterCart = document.createElement('h2')
        afterCart.innerText = `Total price is: ${totalPrice}$`;
        this.inCartDiv.appendChild(afterCart)
      }
    })

    document.body.appendChild(header)
  }

  createSidebarHTML() {
    let sidebar = document.createElement('div')
    sidebar.className = 'sidebar'
    sidebar.style.width = '220px';
    document.body.appendChild(sidebar)
    let sortDiv = document.createElement('div')
    sortDiv.className = 'sort-btns'
    let paragraph = document.createElement('h2')
    paragraph.innerText = 'Choose sort type'
    paragraph.style.marginBottom = '6px'
    paragraph.style.marginTop = '24px'
    sortDiv.appendChild(paragraph)
    sidebar.appendChild(sortDiv)

    let sortByPriceFromLow = document.createElement('button')
    sortByPriceFromLow.className = 'low-to-high-button btn btn-outline-dark'
    sortByPriceFromLow.innerText = 'Price: low to high'
    sortDiv.appendChild(sortByPriceFromLow)
    sortByPriceFromLow.addEventListener('click', () => {
      this.devicesGrid.innerText = ''
      let settings = this.devices.sort((a, b) => a.property.price - b.property.price)
      this.devices.forEach(device => {
        this.devicesGrid.appendChild(device.deviceDiv)
      })
    })

    let sortByPriceFromHigh = document.createElement('button')
    sortByPriceFromHigh.className = 'high-to-low-button btn btn-outline-dark'
    sortByPriceFromHigh.innerText = 'Price: high to low'
    sortDiv.appendChild(sortByPriceFromHigh)
    sortByPriceFromHigh.addEventListener('click', () => {
      this.devicesGrid.innerText = ''
      let settings = this.devices.sort((a, b) => - a.property.price + b.property.price)
      this.devices.forEach(device => {
        this.devicesGrid.appendChild(device.deviceDiv)
      })
    })

    let avgReviews = document.createElement('button')
    avgReviews.className = 'review-button btn btn-outline-dark'
    avgReviews.innerText = 'Avg. customers reviews'
    sortDiv.appendChild(avgReviews)
    avgReviews.addEventListener('click', () => {
      this.devicesGrid.innerText = ''
      let settings = this.devices.sort((a, b) => - a.property.orderInfo.reviews + b.property.orderInfo.reviews)
      this.devices.forEach(device => {
        this.devicesGrid.appendChild(device.deviceDiv)
      })
    })

    let displayTypeOnlyDiv = document.createElement('div')
    displayTypeOnlyDiv.className = 'display-chosen-type-only'
    let displayPar = document.createElement('h2')
    displayPar.innerText = 'Choose category'
    displayPar.style.marginBottom = '6px'
    displayPar.style.marginTop = '24px'
    displayTypeOnlyDiv.appendChild(displayPar)
    this.categories.forEach(item => {
      let correctDisplay = document.createElement('p')
      correctDisplay.style.margin = '0px'
      let displayBtn = document.createElement('button')
      displayBtn.className = 'display-button btn btn-outline-dark'
      displayBtn.innerText = item.toLowerCase()
      correctDisplay.appendChild(displayBtn)
      displayTypeOnlyDiv.appendChild(correctDisplay)
      displayBtn.addEventListener('click', () => {
        this.devicesGrid.innerText = ''
        this.devices.forEach(device => {
          if (device.property.category === item) {
            this.devicesGrid.appendChild(device.deviceDiv)
        }
        })
      })
    })
    sidebar.appendChild(displayTypeOnlyDiv)
  }
}

class Device {
  constructor(property) {
    this.property = property
    this.addToCartButton = document.createElement('button')
    this.addToCartButton.className = 'add-to-cart-btn btn btn-warning'
    this.addToCartButton.innerText = 'Add to cart'
    this.deviceDiv = this.createHTML()
    if (this.property.orderInfo.inStock !== 0) {
        this.deviceDiv.appendChild(this.addToCartButton)
    }  
  }

  createHTML() {
    let possibleSettings = ['display', 'ram', 'storage']
    let deviceDiv = document.createElement('div')
    deviceDiv.className = 'container'

    // IMAGE DIV
    let imgDiv = document.createElement('div')
    imgDiv.className = 'div-device-image'
    let deviceImg = document.createElement('img')
    deviceImg.className = 'device-image'
    deviceImg.src = this.property.imgUrl
    imgDiv.appendChild(deviceImg)

    // DEVICE NAME DIV
    let divDeviceName = document.createElement('div')
    divDeviceName.className = 'div-device-name'
    let deviceName = document.createElement('p')
    deviceName.className = 'device-name'
    deviceName.innerText = this.property.name
    deviceName.href = ''
    divDeviceName.appendChild(deviceName)
    let additionSettingsInfoDiv = document.createElement('div')
    let deviceSettings = {}
    possibleSettings.forEach(item => {
      if (this.property[item]) {
        if (item === 'storage' || item === 'ram') {
          deviceSettings[item] = this.property[item]
        }
        deviceSettings[item] = this.property[item]
      }
    })
    Object.entries(deviceSettings).forEach(entry => {
      const [key, value] = entry
      let settingPar = document.createElement('p')
      settingPar.className = 'settings'
      if (key === 'ram' || key === 'storage') {
        settingPar.innerText = `${key}: ${value} gb`
      } else if (key === 'display') {
        settingPar.innerText = `${key}: ${value} inches`
      }
      additionSettingsInfoDiv.appendChild(settingPar)
    })
    divDeviceName.appendChild(additionSettingsInfoDiv)

    // ADDITION INFO DIV
    let additionInfoDiv = document.createElement('div')
    additionInfoDiv.className = 'addition-info'
    let inStockInfoDiv = document.createElement('div')
    inStockInfoDiv.className = 'in-stock-info'
    let inStockProperty = document.createElement('a')
    inStockProperty.style.textDecoration = 'none'
    inStockProperty.style.color = 'rgba(0, 0, 0, 0.64)'
    inStockProperty.className = 'in-stock'
    let stockImg = document.createElement('img')
    if (this.property.orderInfo.inStock !== 0) {
      stockImg.className = 'in-stock-image'
      stockImg.src = 'img/icons/check.svg'
      inStockProperty.innerText = `In stock: ${this.property.orderInfo.inStock}`
      inStockProperty.className = 'in-stock'
    } else {
      stockImg.className = 'out-of-stock-image'
      stockImg.src = 'img/icons/close.svg'
      inStockProperty.innerText = `In stock: ${this.property.orderInfo.inStock}`
      inStockProperty.className = 'out-of-stock'
    }
    inStockInfoDiv.appendChild(stockImg)
    inStockInfoDiv.appendChild(inStockProperty)

    let reviewsProperty = document.createElement('p')
    reviewsProperty.className = 'reviews'
    reviewsProperty.innerText = `positive reviews: ${this.property.orderInfo.reviews}%`
    let priceProperty = document.createElement('p')
    priceProperty.className = 'device-price'
    priceProperty.innerText = `$${this.property.price}`
    additionInfoDiv.appendChild(inStockInfoDiv)
    additionInfoDiv.appendChild(reviewsProperty)
    additionInfoDiv.appendChild(priceProperty)


    deviceDiv.appendChild(imgDiv)
    deviceDiv.appendChild(divDeviceName)
    deviceDiv.appendChild(additionInfoDiv)
    deviceDiv.style.textAlign = 'center'
    return deviceDiv
  }
}

let website = new webSite()