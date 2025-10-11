"use client";

import { Card } from "flowbite-react";

export default function ProductsDetailPage() {
  return (
    <Card
      className="w-86"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB5fNL3eihWHFWtspmmOdXA0B--51s0ZILcYWCYGy2KCeydAqlWOE2Ig7uVg8ayQ0MLy5QdqtW4WgMQAA2Q2lQ0s44nJsDp3gr0c4FrpvsWMiUHWo4OwF2LhmghzN7TrwzTxI2criFZmhpEoj42b6XhqxZSTN9bg1gNYmAWu7ogIxO-rBSqIz26VG1SeycCpmWxIMHj-freqdYxx8X_LXHAr0ezBZ2YHlYh_hJhclD0aEa7-fQQlHS4BuOjuTec5hWWXnhn0xxnU_E"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Polera invierno
        </h5>
      </a>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $599
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}
