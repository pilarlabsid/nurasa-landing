import originalImg from '../assets/products/Original.jpg';
import pedasImg from '../assets/products/Pedas.jpg';
import extraPedasImg from '../assets/products/Extra Pedas.jpg';
import popcornCaramelImg from '../assets/products/Popcorn_Caramel.png';
import popcornCheeseImg from '../assets/products/Popcorn_Cheese.png';
import popcornSpicyImg from '../assets/products/Popcorn_Spicy.png';

export const products = [
    {
        id: 'basreng-original',
        category: 'Basreng',
        name: 'Basreng Original',
        tagline: 'Gurih Aromatik Daun Jeruk',
        description: 'Bumbu gurih khas daun jeruk yang harum. Keriuk renyah dengan aroma segar yang cocok untuk semua kalangan.',
        features: ['Bumbu Daun Jeruk', 'Renyah Sempurna', 'Premium Quality'],
        badge: 'Best Seller',
        level: 0,
        price: 'Rp 15.000',
        image: originalImg,
    },
    {
        id: 'basreng-pedas',
        category: 'Basreng',
        name: 'Basreng Pedas',
        tagline: 'Pedas yang Membelai',
        description: 'Sensasi pedas yang pas dan nikmat. Perpaduan bumbu gurih dengan cabai pilihan yang memberikan kehangatan di setiap gigitan.',
        features: ['Cabai Pilihan', 'Pedas Seimbang', 'Renyah Krispi'],
        badge: 'Favorite',
        level: 1,
        price: 'Rp 15.000',
        image: pedasImg,
    },
    {
        id: 'basreng-extra-pedas',
        category: 'Basreng',
        name: 'Basreng Extra Pedas',
        tagline: 'Untuk Pecinta Pedas Sejati',
        description: 'Level pedas maksimal untuk Anda yang berani! Racikan cabai ekstra dengan bumbu khas yang membuat ketagihan.',
        features: ['Extra Cabai', 'Pedas Nampol', 'Sensasi Maksimal'],
        badge: 'Hot!',
        level: 2,
        price: 'Rp 15.000',
        image: extraPedasImg,
    },
    {
        id: 'popcorn-caramel',
        category: 'Popcorn',
        name: 'Popcorn Caramel Premium',
        tagline: 'Manis Keemasan yang Mewah',
        description: 'Popcorn jagung mekar sempurna disalut dengan karamel mentega cair yang kaya rasa. Manis, gurih, dan sangat lumer.',
        features: ['Premium Butter', 'Full Coat Caramel', 'Non-GMO Corn'],
        badge: 'New Arrival',
        level: 0,
        price: 'Rp 25.000',
        image: popcornCaramelImg,
    },
    {
        id: 'popcorn-cheese',
        category: 'Popcorn',
        name: 'Popcorn Cheese Overload',
        tagline: 'Gurih Keju Belanda Pilihan',
        description: 'Setiap butir popcorn dibalut dengan bubuk keju cheddar asli yang melimpah. Memberikan ledakan rasa gurih di setiap suapan.',
        features: ['Real Cheddar', 'Double Seasoning', 'Extra Crunchy'],
        badge: 'Chef Choice',
        level: 0,
        price: 'Rp 25.000',
        image: popcornCheeseImg,
    },
    {
        id: 'popcorn-spicy-sweet',
        category: 'Popcorn',
        name: 'Popcorn Spicy Sweet',
        tagline: 'Perpaduan Unik yang Berani',
        description: 'Kombinasi eksotis antara karamel manis dengan sentuhan cabai kering pilihan. Sensasi rasa yang tak terlupakan.',
        features: ['Signature Spicy', 'Sweet Balance', 'Artisanal Batch'],
        badge: 'Unique',
        level: 1,
        price: 'Rp 27.000',
        image: popcornSpicyImg,
    },
];

export const categories = ['Semua', 'Basreng', 'Popcorn'];
