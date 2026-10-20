"use client";

import { useState } from "react";
import { blogPosts } from "@/data/blog";
import Link from "next/link";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "web", "mobile"];
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter(
          (post) =>
            post.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  const getPostDescription = (post: (typeof blogPosts)[number]) => {
    const maybeDescription =
      "description" in post ? (post as { description?: string }).description : undefined;

    return maybeDescription || "Learn the basics and start building.";
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="flex gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-white text-black font-bold"
                : "border border-white/40 bg-black/30 hover:bg-white/20 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <h2 className="text-xl font-bold mb-1">{post.title}</h2>
              <p className="text-xs text-gray-300 mb-2">{post.date}</p>
              <p className="text-sm text-gray-200">
                {getPostDescription(post)}
              </p>
            </Link>
          ))
        ) : (
          <p className="text-gray-400">Tidak ada artikel untuk kategori "{selectedCategory}".</p>
        )}
      </div>
    </div>
  );
}