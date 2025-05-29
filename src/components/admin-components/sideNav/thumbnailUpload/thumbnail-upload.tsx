"use client";

import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import uploadIcon from "@/assets/svgs/Admin_svgs/uploadIcon.svg";
import Image from "next/image";

type ThumbnailUploadProps = {
  onFileSelect: (files: File[]) => void;
  error?: string;
  multiple?: boolean; // new prop
  labelTitle?: string
};

export default function ThumbnailUpload({
  onFileSelect,
  error,
  multiple = false,
  labelTitle = "Thumbnail"
}: ThumbnailUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length) {
      onFileSelect(files);
      setPreviews(files.map((file) => URL.createObjectURL(file)));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files ? Array.from(e.dataTransfer.files) : [];
    if (files.length) {
      onFileSelect(files);
      setPreviews(files.map((file) => URL.createObjectURL(file)));
    }
  };

  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        {labelTitle}
      </label>

      <div
        className={clsx(
          "flex flex-col items-center justify-center border px-4 py-6 cursor-pointer bg-bayfi-grey-300 rounded-lg",
          error ? "border-red-500" : "border-bayfi-grey hover:border-[#FF6929]"
        )}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {!previews.length ? (
          <>
            <div className="cursor-pointer rounded-full p-3">
              <Image src={uploadIcon} alt="upload icon" />
            </div>
            <p className="text-[#FF6929] text-sm font-bold">
              Click to add files{" "}
              <span className="text-[#475467] font-normal">
                or drag and drop
              </span>
            </p>
            <p className="text-[#475467] text-[12px]">
              PNG, JPG or GIF (max. 800x400px)
            </p>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-4 w-full">
            {previews.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`preview-${i}`}
                className="h-32 rounded-md object-contain"
              />
            ))}
          </div>
        )}
        <input
          type="file"
          accept="image/png, image/jpeg, image/gif"
          multiple={multiple}
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
