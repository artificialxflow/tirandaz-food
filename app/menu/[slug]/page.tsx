"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/CartContext";

const foods = [
  {
    slug: "pizza",
    name: "پیتزا مخصوص",
    description: "پیتزا با پنیر فراوان، سوسیس، قارچ و فلفل دلمه‌ای تازه.",
    price: 180000,
    image: "/images/pizza.jpg",
    ingredients: ["پنیر موزارلا", "سوسیس", "قارچ", "فلفل دلمه‌ای", "سس مخصوص"],
  },
  {
    slug: "burger",
    name: "برگر ذغالی",
    description: "برگر گوشت ۱۰۰٪ خالص با نان نرم و سس مخصوص تیرانداز.",
    price: 120000,
    image: "/images/burger.jpg",
    ingredients: ["گوشت گوساله", "نان برگر", "کاهو", "گوجه", "سس تیرانداز"],
  },
  {
    slug: "salad",
    name: "سالاد سزار",
    description: "سالاد تازه با مرغ گریل شده، پنیر پارمزان و سس مخصوص.",
    price: 90000,
    image: "/images/salad.jpg",
    ingredients: ["کاهو", "مرغ گریل", "پنیر پارمزان", "نان تست", "سس سزار"],
  },
];

export default function FoodDetailPage({ params }: { params: { slug: string } }) {
  const food = foods.find(f => f.slug === params.slug);
  if (!food) return notFound();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = () => {
    addToCart({ slug: food.slug, name: food.name, price: food.price, image: food.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="container py-5" dir="rtl">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          {food.image && !imgError ? (
            <Image
              src={food.image}
              alt={food.name}
              width={600}
              height={400}
              className="rounded-4 shadow w-100"
              style={{ objectFit: 'cover', maxHeight: 400 }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="d-flex align-items-center justify-content-center bg-light rounded-4 shadow w-100" style={{ height: 320, maxWidth: 600, margin: '0 auto' }}>
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#ffe066" />
                <path d="M12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4Z" fill="#ffd43b" />
                <path d="M12 6C15.314 6 18 8.686 18 12C18 15.314 15.314 18 12 18C8.686 18 6 15.314 6 12C6 8.686 8.686 6 12 6Z" fill="#ffa94d" />
                <circle cx="9" cy="10" r="1.2" fill="#fa5252" />
                <circle cx="15" cy="13" r="1" fill="#fa5252" />
                <circle cx="12" cy="15" r="0.8" fill="#fa5252" />
                <circle cx="14" cy="9" r="0.7" fill="#fab005" />
                <circle cx="10" cy="14" r="0.6" fill="#fab005" />
              </svg>
            </div>
          )}
        </div>
        <div className="col-lg-6 text-end">
          <h2 className="fw-bold mb-3" style={{color: '#0d6efd'}}>{food.name}</h2>
          <p className="lead mb-3">{food.description}</p>
          <ul className="list-unstyled mb-4">
            {food.ingredients.map((ing, i) => (
              <li key={i} className="mb-1"><span className="badge bg-light text-dark ms-2">{ing}</span></li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-3 mb-4">
            <span className="fs-4 fw-bold text-primary">{food.price.toLocaleString()} تومان</span>
            <button className="btn btn-lg btn-primary px-4 shadow" onClick={handleAdd} disabled={added}>
              {added ? "افزوده شد!" : "افزودن به سبد خرید"}
            </button>
          </div>
          <div className="alert alert-info mt-3">ارسال رایگان برای سفارش‌های بالای ۳۰۰ هزار تومان!</div>
        </div>
      </div>
    </div>
  );
} 