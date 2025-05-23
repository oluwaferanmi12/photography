"use client";


import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import uploadIcon from "@/assets/svgs/Admin_svgs/uploadIcon.svg";
import Image from "next/image";

type ThumbnailUploadProps = {
  onFileSelect: (file: File) => void;
  error?: string;
};

export default function ThumbnailUpload({ onFileSelect, error }: ThumbnailUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      onFileSelect(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Thumbnail</label>

      <div
        className={clsx(
          "flex flex-col items-center justify-center border px-4 py-6 cursor-pointer bg-bayfi-grey-300 rounded-lg",
          error ? "border-red-500" : "border-bayfi-grey hover:border-[#FF6929]"
        )}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {!preview ? (
          <>
            <div className="cursor-pointer rounded-full p-3">
              <Image src={uploadIcon} alt="upload icon" />
            </div>
            <p className="text-[#FF6929] text-sm font-bold">
              Click to add files{" "}
              <span className="text-[#475467] font-normal">or drag and drop</span>
            </p>
            <p className="text-[#475467] text-[12px]">PNG, JPG or GIF (max. 800x400px)</p>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <img
              src={preview}
              alt="Selected thumbnail"
              className="h-40 rounded-md object-contain"
            />
            <p className="text-sm text-[#FF6929]">Image selected successfully</p>
          </div>
        )}
        <input
          type="file"
          accept="image/png, image/jpeg, image/gif"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {error && <p className="text-sm text-red-700 mt-1">{error}</p>}
    </div>
  );
}
