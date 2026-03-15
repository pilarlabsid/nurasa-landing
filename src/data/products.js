import originalImg from '../assets/products/Original.webp';
import pedasImg from '../assets/products/Pedas.webp';
import extraPedasImg from '../assets/products/Extra Pedas.webp';
import popcornCaramelImg from '../assets/products/Popcorn_Caramel.webp';
import popcornCheeseImg from '../assets/products/Popcorn_Cheese.webp';
import popcornSpicyImg from '../assets/products/Popcorn_Spicy.webp';

const basrengVariants = [
    { 
        id: 'pouch-kecil', 
        size: '100gr', 
        packaging: 'Standing Pouch', 
        label: 'Pouch Kecil',
        price: 'Rp 17.000', 
        originalPrice: 'Rp 20.000' 
    },
    { 
        id: 'pouch-besar', 
        size: '250gr', 
        packaging: 'Standing Pouch Besar', 
        label: 'Pouch Besar',
        price: 'Rp 43.000', 
        originalPrice: 'Rp 50.000' 
    },
    { 
        id: 'toples-small', 
        size: '100gr', 
        packaging: 'Toples 500ml', 
        label: 'Toples Small',
        price: 'Rp 22.000', 
        originalPrice: 'Rp 25.000' 
    },
    { 
        id: 'toples-large', 
        size: '130gr', 
        packaging: 'Toples 600ml', 
        label: 'Toples Large',
        price: 'Rp 30.000', 
        originalPrice: 'Rp 35.000' 
    }
];

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
        price: 'Rp 17.000',
        originalPrice: 'Rp 20.000',
        image: originalImg,
        variants: basrengVariants
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
        price: 'Rp 17.000',
        originalPrice: 'Rp 20.000',
        image: pedasImg,
        variants: basrengVariants
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
        price: 'Rp 17.000',
        originalPrice: 'Rp 20.000',
        image: extraPedasImg,
        variants: basrengVariants
    },
    {
        id: 'popcorn-caramel',
        category: 'Popcorn',
        name: 'Popcorn Caramel Premium',
        tagline: 'Manis Keemasan yang Mewah',
        description: 'Popcorn jagung mekar sempurna disalut dengan karamel mentega cair yang kaya rasa. Manis, gurih, dan sangat lumer.',
        features: ['Premium Butter', 'Full Coat Caramel', 'Non-GMO Corn'],
        badge: 'Top Seller',
        level: 0,
        price: 'Rp 29.000',
        originalPrice: 'Rp 32.000',
        image: popcornCaramelImg,
        variants: [
            { id: 'toples-1000', size: '1000ml', label: 'Toples 1000ml', packaging: 'Toples Big Size', price: 'Rp 29.000', originalPrice: 'Rp 32.000' }
        ]
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
        price: 'Rp 29.000',
        originalPrice: 'Rp 32.000',
        image: popcornCheeseImg,
        isOutOfStock: true,
        variants: [
            { id: 'toples-1000', size: '1000ml', label: 'Toples 1000ml', packaging: 'Toples Big Size', price: 'Rp 29.000', originalPrice: 'Rp 32.000' }
        ]
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
        price: 'Rp 29.000',
        originalPrice: 'Rp 32.000',
        image: popcornSpicyImg,
        isOutOfStock: true,
        variants: [
            { id: 'toples-1000', size: '1000ml', label: 'Toples 1000ml', packaging: 'Toples Big Size', price: 'Rp 29.000', originalPrice: 'Rp 32.000' }
        ]
    },
];

export const categories = ['Semua', 'Basreng', 'Popcorn'];
