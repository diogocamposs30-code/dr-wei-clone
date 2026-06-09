import Image from "next/image";

export function ProductGallery() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          aspectRatio: "1/1",
          borderRadius: "clamp(0px, calc((750px - 100vw) * 9999), 12px)",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        <Image
          src="/images/foto-capa.jpeg"
          alt="Ancient Chinese Secrets to Restore Male Energy & Vitality After 45"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 750px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
}
