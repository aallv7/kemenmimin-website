// src/lib/articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'src', 'articles');

// Definisikan tipe data untuk artikel
export interface ArticleData {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  thumbnail?: string; // Opsional
  excerpt?: string;   // Opsional
  contentHtml?: string; // Hanya ada saat detail artikel
}

export function getSortedArticlesData(): ArticleData[] {
  // Dapatkan nama file di bawah /articles
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    // Hapus ".md" dari nama file untuk mendapatkan id
    const id = fileName.replace(/\.md$/, '');

    // Baca konten markdown sebagai string
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Gunakan gray-matter untuk mengurai bagian metadata dan konten
    const matterResult = matter(fileContents);

    // Gabungkan data dengan id
    return {
      id,
      ...(matterResult.data as { title: string; date: string; author: string; category: string; thumbnail?: string; excerpt?: string }),
    };
  });

  // Urutkan artikel berdasarkan tanggal
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getArticleData(id: string): Promise<ArticleData> {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Gunakan gray-matter untuk mengurai bagian metadata dan konten
  const matterResult = matter(fileContents);

  // Gunakan remark untuk mengonversi konten markdown menjadi string HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Gabungkan data dengan id dan contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; author: string; category: string; thumbnail?: string; excerpt?: string }),
  };
}

// Fungsi untuk mendapatkan semua ID artikel (digunakan oleh generateStaticParams)
export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}