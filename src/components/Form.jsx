"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import PenanceDrawer from "./PenanceDrawer";

const formSchema = z.object({
  confession: z.string().min(2, {
    message:
      "My child, you cannot stand before God's mercy with a locked heart. Speak, for silence here only burdens your soul further.",
  }),
});

export function NewForm() {
  const [penanceMessage, setPenanceMessage] = useState("");
  const [priestComment, setPriestComment] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { confession: "" },
  });

  function calculatePenance(confession) {
    const sins = ["lie", "steal", "cheat", "skip", "snooze"];
    let sinScore = 0;

    sins.forEach((word) => {
      if (confession.toLowerCase().includes(word)) sinScore += 10;
    });

    let penance = "";
    let priestMsg = "";

    if (sinScore >= 30) {
      penance = "Recite 10 Hail Marys and meditate in silence for 5 minutes.";
      priestMsg = "My child, the weight of your deeds is heavy. Repent!";
    } else if (sinScore >= 15) {
      penance =
        "Say a sincere apology to someone nearby and reflect on your actions.";
      priestMsg = "Ah… there is temptation in your heart. Tread carefully.";
    } else {
      penance =
        "Offer a small act of kindness today—perhaps smile at a stranger.";
      priestMsg = "You are lightly burdened. Keep your conscience clear!";
    }

    setPenanceMessage(penance);
    setPriestComment(priestMsg);
    setDrawerOpen(true);
  }

  function onSubmit(values) {
    calculatePenance(values.confession);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log("Confession received:", data))
      .catch((err) => console.error("Error posting confession:", err));
  }

  return (
    <>
      <Form {...form}>
        <div className="max-w-lg mx-auto bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-3xl font-bold text-white text-center mb-4 drop-shadow-md">
              Confess Your Sins
            </h2>

            <FormField
              control={form.control}
              name="confession"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-lg text-gray-200 font-medium">
                    Your Confession
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What troubles you my child?"
                      {...field}
                      className="bg-gray-800 text-white placeholder-gray-400 border-gray-600 focus:ring-red-500 focus:border-red-500"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400 text-sm">
                    Speak freely here, for only in confession can your soul find
                    peace.
                  </FormDescription>
                  <FormMessage className="text-red-400 text-sm" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
            >
              Submit
            </Button>
          </form>
        </div>
      </Form>

      <PenanceDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        penanceMessage={penanceMessage}
        priestComment={priestComment}
      />
    </>
  );
}
