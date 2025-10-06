"use client";

import Link from "next/link";

export default function Card() {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="group relative">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-500 dark:bg-gray-400 ">
            <img
              alt="Cozy Knit Sweater"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300 "
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5fNL3eihWHFWtspmmOdXA0B--51s0ZILcYWCYGy2KCeydAqlWOE2Ig7uVg8ayQ0MLy5QdqtW4WgMQAA2Q2lQ0s44nJsDp3gr0c4FrpvsWMiUHWo4OwF2LhmghzN7TrwzTxI2criFZmhpEoj42b6XhqxZSTN9bg1gNYmAWu7ogIxO-rBSqIz26VG1SeycCpmWxIMHj-freqdYxx8X_LXHAr0ezBZ2YHlYh_hJhclD0aEa7-fQQlHS4BuOjuTec5hWWXnhn0xxnU_E"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm ">
                <Link href="#">
                  <span aria-hidden="true" className="absolute inset-0 "></span>
                  Polera invierno
                </Link>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900">$49.99</p>
          </div>
        </div>
      </div>
    </section>
  );
}
