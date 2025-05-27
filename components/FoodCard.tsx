"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface FoodCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  slug?: string;
  category?: string;
}

function getFoodIcon(name: string, category?: string) {
  const n = (name + (category || "")).toLowerCase();
  if (n.includes("پیتزا") || n.includes("pizza")) {
    // آیکن پیتزا
    return (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#ffe066" />
        <path d="M12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4Z" fill="#ffd43b" />
        <path d="M12 6C15.314 6 18 8.686 18 12C18 15.314 15.314 18 12 18C8.686 18 6 15.314 6 12C6 8.686 8.686 6 12 6Z" fill="#ffa94d" />
        <circle cx="9" cy="10" r="1.2" fill="#fa5252" />
        <circle cx="15" cy="13" r="1" fill="#fa5252" />
        <circle cx="12" cy="15" r="0.8" fill="#fa5252" />
        <circle cx="14" cy="9" r="0.7" fill="#fab005" />
        <circle cx="10" cy="14" r="0.6" fill="#fab005" />
      </svg>
    );
  }
  if (n.includes("برگر") || n.includes("burger")) {
    // آیکن برگر
    return (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="16" rx="8" ry="3" fill="#fab005" />
        <rect x="4" y="13" width="16" height="3" rx="1.5" fill="#ffd43b" />
        <ellipse cx="12" cy="12" rx="8" ry="3" fill="#ffa94d" />
        <ellipse cx="12" cy="10" rx="8" ry="3" fill="#ffe066" />
        <ellipse cx="12" cy="9" rx="8" ry="2.5" fill="#fa5252" />
        <circle cx="9" cy="10" r="0.5" fill="#fff" />
        <circle cx="15" cy="11" r="0.4" fill="#fff" />
        <circle cx="12" cy="9.5" r="0.3" fill="#fff" />
      </svg>
    );
  }
  if (n.includes("سالاد") || n.includes("salad")) {
    // آیکن سالاد
    return (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="18" rx="8" ry="3" fill="#b2f2bb" />
        <ellipse cx="12" cy="15" rx="8" ry="3" fill="#69db7c" />
        <ellipse cx="12" cy="13" rx="8" ry="2.5" fill="#fff3bf" />
        <circle cx="9" cy="14" r="0.8" fill="#fa5252" />
        <circle cx="15" cy="16" r="0.7" fill="#fab005" />
        <circle cx="12" cy="13.5" r="0.6" fill="#40c057" />
      </svg>
    );
  }
  // آیکن عمومی غذا
  return (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#e9ecef" />
      <rect x="7" y="15" width="10" height="3" rx="1.5" fill="#ffa94d" />
      <ellipse cx="12" cy="11" rx="5" ry="3" fill="#ffd43b" />
      <circle cx="10" cy="11" r="0.7" fill="#fa5252" />
      <circle cx="14" cy="12" r="0.6" fill="#fab005" />
    </svg>
  );
}

export default function FoodCard({ name, description, price, image, slug, category }: FoodCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(image) && !imgError;
  return (
    <Link href={slug ? `/menu/${slug}` : "#"} className="text-decoration-none">
      <div className="card h-100 shadow-sm food-card-hover" style={{transition: 'transform 0.2s', cursor: 'pointer'}}>
        {hasImage ? (
          <Image src={image} alt={name} width={400} height={250} className="card-img-top" style={{objectFit: 'cover', borderRadius: '0.5rem 0.5rem 0 0'}} onError={() => setImgError(true)} />
        ) : (
          <div className="d-flex align-items-center justify-content-center bg-light" style={{height: 250, borderRadius: '0.5rem 0.5rem 0 0'}}>
            {getFoodIcon(name, category)}
          </div>
        )}
        <div className="card-body text-end">
          <h5 className="card-title fw-bold text-dark">{name}</h5>
          <p className="card-text text-secondary small">{description}</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fw-bold text-primary">{price.toLocaleString()} تومان</span>
            <span className="btn btn-outline-primary btn-sm">مشاهده</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 