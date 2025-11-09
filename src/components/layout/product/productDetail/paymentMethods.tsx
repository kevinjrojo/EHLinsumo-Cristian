import Image from "next/image";

export default function PaymentMethods() {
  return (
    <div className="mt-8 flex items-center space-x-4">
      <p className="font-semibold">Medios de pago:</p>
      <div className="flex space-x-2">
        <Image
          src="/icons/visa.svg"
          alt="Visa"
          className="w-10"
          width={40}
          height={40}
        />
        <Image
          src="/icons/mastercard.svg"
          alt="Mastercard"
          className="w-10"
          width={40}
          height={40}
        />
        <Image
          src="/icons/americanExpress.svg"
          alt="American Express"
          className="w-10"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
