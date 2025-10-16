"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Copy, Check } from "lucide-react";
import { linuxCommands, categories } from "@/constants/mock";
import { cn } from "./lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("Semua");
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const filteredCommands = React.useMemo(() => {
    let filtered = linuxCommands;

    // Filter by category
    if (selectedCategory !== "Semua") {
      filtered = filtered.filter((cmd) => cmd.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (cmd) =>
          cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cmd.function.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cmd.example.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Navigasi & File System": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      "Manajemen Sistem": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      "Pencarian & Filter": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      "Informasi Sistem": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      "Jaringan": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
      "Kali Linux - Security": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    };
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  };

  return (
    <div className="min-h-screen bg-background text-center ">
    <div className="container mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Base Command Reference</h1>
            <p className="text-muted-foreground mt-2">
              Daftar perintah Linux lengkap dengan fungsi dan contoh penggunaannya
            </p>
          </div>
          <ModeToggle />
        </div>

        {/* Search Bar */}
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Cari perintah, fungsi, atau contoh..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={cn("text-xs text-[#d1d1d1] hover:text-white",
                selectedCategory === category && "text-white"
              )}
              // className=""
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground">
          Menampilkan {filteredCommands.length} dari {linuxCommands.length} perintah
        </p>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Perintah</TableHead>
              <TableHead>Fungsi</TableHead>
              <TableHead>Contoh</TableHead>
              <TableHead className="w-[150px]">Kategori</TableHead>
              <TableHead className="w-[100px] text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCommands.map((command) => (
              <TableRow key={command.id} className="group">
                <TableCell className="font-mono font-medium">
                  {command.command}
                </TableCell>
                <TableCell>{command.function}</TableCell>
                <TableCell className="font-mono text-sm">
                  {command.example}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={getCategoryColor(command.category)}
                  >
                    {command.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(command.command, command.id)}
                    className="h-8 w-8 p-0 bg-black transition-opacity text-[#d1d1d1] hover:text-white"
                  >
                    {copiedId === command.id ? (
                      <Check className="h-4 w-4 text-green-600 " />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground pt-4">
        <p>Klik ikon copy untuk menyalin perintah</p>
      </div>
    </div>
    </div>
  );
}