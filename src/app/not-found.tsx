import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-100 dark:bg-gray-900">
      <AlertCircle className="w-16 h-16 text-red-500" />
      <h1 className="mt-4 text-4xl font-bold text-gray-800 dark:text-white">
        404 - Page Not Found
      </h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <Button className="mt-6">Go Back Home</Button>
      </Link>
    </div>
  );
}
