"use client";

import Image from "next/image";
import { Play } from "lucide-react";

const mediaItems = [
  { type: "image", src: "/media/media1.jpg" },
  { type: "video", src: "/media/media2.mp4", thumbnail: "/media/thumb2.jpg" },
  { type: "image", src: "/media/media3.jpg" },
  { type: "image", src: "/media/media4.jpg" },
  { type: "video", src: "/media/media5.mp4", thumbnail: "/media/thumb5.jpg" },
  { type: "image", src: "/media/media6.jpg" },
];

export default function MediaPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] min-h-screen">
      
      {/* Header */}
      <section className="py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Media Gallery
        </h1>
        <p className="text-gray-600 mt-2">
          Moments from ARC Sportzone
        </p>
      </section>

      {/* Instagram-style grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                {/* IMAGE */}
                {item.type === "image" && (
                  <Image
                    src={item.src}
                    alt="ARC Media"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                )}

                {/* VIDEO */}
                {item.type === "video" && (
                  <>
                    <Image
                      src={item.thumbnail!}
                      alt="ARC Video"
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/60 rounded-full p-3">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                  </>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}