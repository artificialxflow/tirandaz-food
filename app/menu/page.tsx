"use client";
import { useState } from "react";
import FoodCard from "@/components/FoodCard";

const foods = [
  {
    slug: "pizza",
    name: "پیتزا مخصوص",
    description: "پیتزا با پنیر فراوان، سوسیس، قارچ و فلفل دلمه‌ای تازه.",
    price: 180000,
    image: "/images/pizza.jpg",
    category: "پیتزا"
  },
  {
    slug: "burger",
    name: "برگر ذغالی",
    description: "برگر گوشت ۱۰۰٪ خالص با نان نرم و سس مخصوص تیرانداز.",
    price: 120000,
    image: "/images/burger.jpg",
    category: "برگر"
  },
  {
    slug: "salad",
    name: "سالاد سزار",
    description: "سالاد تازه با مرغ گریل شده، پنیر پارمزان و سس مخصوص.",
    price: 90000,
    image: "/images/salad.jpg",
    category: "سالاد"
  },
  // ... غذاهای بیشتر
];

const categories = [
  "همه",
  ...Array.from(new Set(foods.map(f => f.category)))
];

export default function MenuPage() {
  const [selected, setSelected] = useState("همه");
  const filtered = selected === "همه" ? foods : foods.filter(f => f.category === selected);

  return (
    <div className="container py-5" dir="rtl">
      <h2 className="fw-bold text-center mb-5" style={{color: '#0d6efd', fontSize: '2.2rem'}}>منوی غذاها</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn btn-lg px-4 fw-bold rounded-pill ${selected === cat ? 'btn-primary shadow' : 'btn-outline-primary'}`}
            style={{transition: 'all 0.2s'}}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="row g-4">
        {filtered.length === 0 ? (
          <div className="alert alert-warning text-center">غذایی در این دسته وجود ندارد.</div>
        ) : (
          filtered.map(food => (
            <div className="col-12 col-sm-6 col-md-4" key={food.slug}>
              <FoodCard {...food} />
            </div>
          ))
        )}
      </div>
    </div>
  );
} 