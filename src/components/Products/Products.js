'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Product.module.css';
import { productData } from '@/Data_Folders/ProductData';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  const router = useRouter();

  return (
    <div className={styles.productPageContainer}>
      <div className={styles.productHero}>
        <div className={styles.productHeroBg} style={{ backgroundImage: `url(${productData.heroImage})` }}></div>
        <div className={styles.productHeroContent}>
          <h1 className={styles.productHeroTitle}>{productData.heroLabel1}</h1>
          <p className={styles.productHeroSubtitle}>{productData.heroLabel2}</p>
        </div>
      </div>

      <div className={styles.productGrid}>
        {productData.products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.productCardImageWrapper}>
              <Image
                src={product.machineImage}
                alt={product.buttonLabel}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.productCardContent}>
              <h2 className={styles.productCardTitle}>{product.buttonLabel}</h2>
              <Link href={product.redirectPath} className={styles.productCardButton}>
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 