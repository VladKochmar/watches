import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/Product'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([
    {
      id: 1,
      title: 'Watch IV',
      price: '1000$',
      imgSrc: 'https://static.garmincdn.com/en_US/store/wearables/subcategory/2023/60774-VA5.png'
    },
    {
      id: 2,
      title: 'Watch V',
      price: '1500$',
      imgSrc:
        'https://citizenwatch.widen.net/content/uojupvefzh/png/%E2%80%9CTSUYOSA%E2%80%9D.png?u=41zuoe&width=400&height=400&quality=80&crop=false&keep=c&color=FFFFFF00'
    },
    {
      id: 3,
      title: 'Old Watch I',
      price: '700$',
      imgSrc:
        'https://www.movado.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw24e08f57/images/products/0607566w_LRG_rgb_Web.png?sw=444&sh=600'
    },
    {
      id: 4,
      title: 'Watch II',
      price: '800$',
      imgSrc:
        'https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-hydroconquest-l3-790-4-96-9-1694731509.png'
    },
    {
      id: 5,
      title: 'Sport Watch X',
      price: '2500$',
      imgSrc: 'https://au.nixon.com/cdn/shop/files/A105-1041-view1_500x.png?v=1684448446'
    },
    {
      id: 6,
      title: 'Digital Watch VII',
      price: '1700$',
      imgSrc:
        'https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-la-grande-classique-de-longines-l4-866-4-97-6-1687473942.png'
    },
    {
      id: 7,
      title: 'Watch S',
      price: '825$',
      imgSrc:
        'https://eu.danielwellington.com/cdn/shop/products/c8bd0bbe58c25c0caf52806dd0362df62569d70d.png?v=1686314686&width=1500'
    },
    {
      id: 8,
      title: 'Watch III',
      price: '750$',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0322/8424/6155/files/SPB413J1.png?v=1695293978&width=364'
    }
  ])

  const filteredProducts = computed(
    () =>
      (searchedValue: string | null): Product[] =>
        products.value.filter((product) =>
          searchedValue ? product.title.toLowerCase().includes(searchedValue.toLowerCase()) : false
        )
  )

  return { products, filteredProducts }
})
