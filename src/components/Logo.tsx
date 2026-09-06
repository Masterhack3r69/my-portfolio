import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return <Image src="/signature.png" alt="John Deckson handwritten signature" width={2172} height={724} className={className} />;
}
