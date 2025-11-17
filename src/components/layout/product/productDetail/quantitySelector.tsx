"use client";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export default function QuantitySelector({
  value,
  onChange,
}: QuantitySelectorProps) {
  const increase = () => onChange(value + 1);
  const decrease = () => onChange(Math.max(1, value - 1));

  return (
    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
      <button
        onClick={decrease}
        className="px-3 py-2 text-gray-800 hover:bg-green-500 dark:hover:bg-green-500 rounded-l-md cursor-pointer"
      >
        -
      </button>

      <span className="px-4 py-2">{value}</span>

      <button
        onClick={increase}
        className="px-3 py-2 text-gray-800 hover:bg-green-500 dark:hover:bg-green-500 rounded-r-md cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
