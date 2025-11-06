"use client";
import Button from "@/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TableButton } from "@/components/ui/button";
import { X } from "lucide-react";

import { useEffect, useState } from "react";
import Image from "next/image";

export function AddProduct() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (!f) return;

    const url = URL.createObjectURL(f);
    setFile(f);
    setPreviewUrl(url);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // Also ensure cleanup when component unmounts if url still exists
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const f = e.target.files?.[0] ?? null;
  //     if (f) setFile(f);
  //   };

  const removePreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setFile(null);
    setPreviewUrl(null);
    // also reset input value if needed (so user can re-select same file)
    const input = document.getElementById(
      "file-upload"
    ) as HTMLInputElement | null;
    if (input) input.value = "";
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            text="Add Product"
            variant="solid"
            className="text-white bg-[#1366D9] h-[35px] text-sm flex items-center justify-center"
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              New Product
            </DialogTitle>
          </DialogHeader>

          {/* Upload section */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg h-[81px] w-[81px] mb-4 cursor-pointer hover:bg-gray-50 transition-colors">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center cursor-pointer"
              >
                {previewUrl && (
                  <div className="relative w-10 h-10">
                    {" "}
                    <Image
                      src={previewUrl}
                      alt="Uploaded preview"
                      width={60}
                      height={60}
                      unoptimized
                      className="object-cover rounded-md"
                    />
                  </div>
                )}

                {previewUrl && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      removePreview();
                    }}
                    aria-label="Remove image"
                    className="absolute -top-1 -right-1 z-10 inline-flex items-center justify-center bg-white border border-gray-200 rounded-full p-0.5 shadow-sm"
                    title="Remove image"
                  >
                    <X className="w-3 h-3 text-gray-600" />
                  </button>
                )}
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="flex flex-col text-xs text-center justify-center text-[#858D9D] ml-4">
              <span className="   -mt-0.5">Drag image here</span>
              or
              <span className="text-[#1366D9] font-medium">Browse image</span>
            </div>
          </div>

          {/* Form fields */}
          <div className="grid gap-3">
            {[
              { label: "Product Name", placeholder: "Enter product name" },
              { label: "Product ID", placeholder: "Enter product ID" },
              { label: "Category", placeholder: "Select product category" },
              { label: "Buying Price", placeholder: "Enter buying price" },
              { label: "Quantity", placeholder: "Enter product quantity" },
              { label: "Unit", placeholder: "Enter product unit" },
              { label: "Expiry Date", placeholder: "Enter expiry date" },
              {
                label: "Threshold Value",
                placeholder: "Enter threshold value",
              },
            ].map((field, i) => (
              <div
                key={i}
                className="flex justify-between items-center gap-1.5"
              >
                <Label className="text-sm text-gray-700">{field.label}</Label>
                <Input
                  placeholder={field.placeholder}
                  className="placeholder:text-gray-400 h-[38px] max-w-[274px] "
                />
              </div>
            ))}
          </div>

          {/* Footer buttons */}
          <DialogFooter className="mt-6 flex justify-end gap-3">
            <DialogClose asChild>
              <TableButton
                variant="outline"
                className="border border-gray-300 text-gray-700 hover:bg-gray-100 shadow-none h-9"
              >
                Discard
              </TableButton>
            </DialogClose>
            <TableButton className="bg-[#1366D9] hover:bg-[#125CC2] text-white h-9">
              Add Product
            </TableButton>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
