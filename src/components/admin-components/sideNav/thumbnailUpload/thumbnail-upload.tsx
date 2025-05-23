import { useRef } from "react";
import { UploadIcon } from "lucide-react"; // or your custom icon
import clsx from "clsx";

type ThumbnailUploadProps = {
  onFileSelect: (file: File) => void;
  error?: string;
};

export default function ThumbnailUpload({ onFileSelect, error }: ThumbnailUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

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
        <div className="bg-orange-100 rounded-full p-3">
          <UploadIcon className="text-[#FF6929]" size={32} />
        </div>
        <p className="text-[#FF6929] text-sm font-bold">
            Click to add files <span className="text-[#475467] font-normal">or drag and drop</span>
        </p>
        
        <p className="text-[#475467] text-[12px]">PNG, JPG or GIF (max. 800x400px)</p>
        <input
          type="file"
          accept="image/png, image/jpeg, image/gif"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
