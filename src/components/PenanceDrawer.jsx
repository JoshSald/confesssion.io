"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "./ui/drawer";
import { Button } from "./ui/button";

export default function PenanceDrawer({
  open,
  onOpenChange,
  penanceMessage,
  priestComment,
}) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-gray-900/95 text-white max-w-md mx-auto mt-24 rounded-2xl shadow-2xl border border-gray-700">
        {/* Header */}
        <DrawerHeader className="border-b border-gray-700">
          <DrawerTitle className="text-3xl font-extrabold text-red-500">
            Penance Awaits
          </DrawerTitle>
        </DrawerHeader>

        {/* Body */}
        <div className="p-6 space-y-6">
          <p className="italic text-gray-300">{priestComment}</p>
          <p className="font-bold text-white text-lg">{penanceMessage}</p>
        </div>

        {/* Footer */}
        <DrawerFooter className="border-t border-gray-700">
          <Button
            onClick={() => onOpenChange(false)}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
          >
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
