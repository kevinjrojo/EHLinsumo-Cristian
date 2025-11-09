"use client";

import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="group relative">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-500 dark:bg-gray-400 ">
            <Image
              alt="Cozy Knit Sweater"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300 "
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5fNL3eihWHFWtspmmOdXA0B--51s0ZILcYWCYGy2KCeydAqlWOE2Ig7uVg8ayQ0MLy5QdqtW4WgMQAA2Q2lQ0s44nJsDp3gr0c4FrpvsWMiUHWo4OwF2LhmghzN7TrwzTxI2criFZmhpEoj42b6XhqxZSTN9bg1gNYmAWu7ogIxO-rBSqIz26VG1SeycCpmWxIMHj-freqdYxx8X_LXHAr0ezBZ2YHlYh_hJhclD0aEa7-fQQlHS4BuOjuTec5hWWXnhn0xxnU_E"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm ">
                <Link href="/products/id">
                  <span aria-hidden="true" className="absolute inset-0 "></span>
                  Polera invierno
                </Link>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900">$49.99</p>
          </div>
        </div>
        <div className="group relative">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
            <Image
              alt="Classic Leather Boots"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXLGeBomcA4qLOnWkSdkGH1vhPdd5wKHS1h9VxTZR0v5FWYhE3C8r2-xgCNO83og5NS0UC7W_VEDB-_FU6Y3_o5tsk0PNHXy4K8txSeBLQXUISEKqRiS0IQ4YZRh_dDlgiYKsSHLIOzTuVzJwFrpbrdqcK-OWiQQF6fFxkEgn8iRLd8wKuMFkrkCGcvGdEKOJEyaMAETbsXXVddf153FpeOt1vOoBmq8ZW-CHvoytNCQzeMYSdT2FRoX9RqwBO9NaRJjoI2QCn5sw"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm ">
                <Link href="/products/id">
                  <span aria-hidden="true" className="absolute inset-0 "></span>
                  Polera invierno
                </Link>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900">$129.99</p>
          </div>
        </div>
        <div className="group relative">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
            <Image
              alt="Stylish Backpack"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6mIJDPS-pfb_gstW2Ej2I_Mgpqs15JD-kezf6J3FaXCBaTNQf3NesA4lfbrgDEX2pjhUCuu-aCrX98ZJIL4vX82y9n0ZR69bcfbwlgJwEx2HiKY8oUOhwPBdUv4wgtyu1YTHTyz90NcAwHYWuAZifzT_aqOwkFHufXenNazAfD_y8xcl2XWQObqknWMGajwSgfFSvUBgySYud11IeV5q1ZEYJapE9LbVOVeh-2FVrAbk0ai9CfWN8e7_NSffNVK0x3Gv_5fJ_ZWM"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm ">
                <Link href="/products/id">
                  <span aria-hidden="true" className="absolute inset-0 "></span>
                  Polera invierno
                </Link>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900 ">$79.99</p>
          </div>
        </div>
        <div className="group relative">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
            <Image
              alt="Minimalist Watch"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgCwS5VRSHGWeGxZ5pSRNksJZmpCnT7r-mVkO2RnKla2SbA1WzdE2QRAiMArPs1zFso8tzG4rZoCq6n_zdn6H-N-n1n5wPH578eE-3AyGz4CHaCNFIBid8lePVwdu73fPqCao6LYJ0Ud10lCgWTgHeQ1JIvdp_VKe3UnA2UBCVcCVVxgHwEKHQ0-NbS58IO_TSNeEeiyPm9QHTEU7XDu3NDZyNmBzKaCg0RDtknGVroDuZGJAlksO9dfqJFMbeH5vtrqJ9IlHPq2U"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm ">
                <Link href="/products/id">
                  <span aria-hidden="true" className="absolute inset-0 "></span>
                  Polera invierno
                </Link>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900 ">$199.99</p>
          </div>
        </div>
      </div>
    </section>
  );
}
