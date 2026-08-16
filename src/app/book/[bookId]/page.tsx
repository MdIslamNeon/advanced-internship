"use client";
import { ParamValue } from "next/dist/server/request/params";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/app/components/Sidebar";
import Searchbar from "@/app/components/Searchbar";
import { Book } from "@/app/types";
import BookDetail from "@/app/components/BookDetail";

function BookPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBook(id: ParamValue) {
      try {
        const { data } = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
        );
        setBook(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getBook(bookId);
  }, [bookId]);

  return (
    <>
      <Sidebar />
      <Searchbar />
      <BookDetail book={book} loading={loading} />
    </>
  );
}

export default BookPage;
