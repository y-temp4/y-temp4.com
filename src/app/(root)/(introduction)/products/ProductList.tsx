'use client';

import { useMemo, useState } from 'react';

import { products } from '~/data/products';

export const ProductList = () => {
  const [showSuspendedProducts, setShowSuspendedProducts] = useState(false);

  const filteredProducts = useMemo(() => {
    if (showSuspendedProducts) {
      return products;
    }
    return products.filter((p) => !p.suspended);
  }, [showSuspendedProducts]);

  return (
    <>
      <label className="flex cursor-pointer select-none items-center space-x-2 py-1 text-sm">
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={showSuspendedProducts}
          onChange={(e) => setShowSuspendedProducts(e.target.checked)}
        />
        <span>停止中のサービスを表示する</span>
      </label>
      {filteredProducts.map((product) => (
        <div key={product.name}>
          <h3 className="mb-1 mt-6 flex w-full items-center gap-2 text-left text-xl font-bold">
            {!product.suspended ? (
              <a
                href={product.productURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.name}
              </a>
            ) : (
              <span>{product.name}</span>
            )}
            {product.suspended && (
              <span className="rounded bg-yellow-5 p-1 text-xs text-gray-9">
                停止中
              </span>
            )}
          </h3>
          <p>
            <span>{product.description} 👉</span>
            <a
              href={product.introductionURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              詳細はこちら
            </a>
          </p>
        </div>
      ))}
    </>
  );
};
