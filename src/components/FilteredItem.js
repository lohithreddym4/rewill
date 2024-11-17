import React from 'react'
import Image from 'next/image';
import styles from '../styles/CategoryPage.module.css';
import { useRouter } from 'next/navigation';

const FilteredItem = ({item}) => {
    const router = useRouter();
  return (
    <div key={item.id} className={styles.itemCard} onClick={() => router.push(`/items/${item.id}`)}>
    {/* <img src={item.image} alt={item.name} className={styles.itemImage} />
     */}
    <Image src={item.image} alt={item.name} width={100} height={100} />
    <h2 className={styles.itemName}>{item.name}</h2>
    <p className={styles.itemPrice}>{item.price}</p>
    <p className={styles.itemLocation}>📍 {item.location}</p>
  </div>
  )
}

export default FilteredItem
